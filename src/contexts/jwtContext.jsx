import { createContext, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import { LoadingProgress } from "@/components/loader";

const API_URL = "http://localhost:5000";

const initialState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false,
};

// This function sets or removes the access token in local storage and axios headers
export const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        isInitialized: true,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    case "REGISTER":
      return { ...state, isAuthenticated: true, user: action.payload.user };
    default:
      return state;
  }
};

// Auth Context
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // User login handler
  const login = useCallback(async (email, password) => {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    setSession(data.token);
    dispatch({ type: "LOGIN", payload: { user: data, isAuthenticated: true } });
  }, []);

  // User registration handler
  const register = useCallback(async (name, email, password) => {
    const { data } = await axios.post(`${API_URL}/users`, {
      name,
      email,
      password,
    });
    setSession(data.token);
    dispatch({
      type: "REGISTER",
      payload: { user: data, isAuthenticated: true },
    });
  }, []);

  // User logout handler
  const logout = () => {
    setSession(null);
    dispatch({
      type: "LOGOUT",
      payload: { user: null, isAuthenticated: false },
    });
  };

  // Check current user handler
  const checkCurrentUser = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setSession(accessToken);
        const { data } = await axios.get(`${API_URL}/users/profile`);
        dispatch({
          type: "INIT",
          payload: { user: data, isAuthenticated: true },
        });
      } else {
        dispatch({
          type: "INIT",
          payload: { user: null, isAuthenticated: false },
        });
      }
    } catch (err) {
      dispatch({
        type: "INIT",
        payload: { user: null, isAuthenticated: false },
      });
    }
  }, []);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  // Show loading until initialized
  if (!state.isInitialized) return <LoadingProgress />;

  return (
    <AuthContext.Provider
      value={{ ...state, method: "JWT", login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
