import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useFormik } from "formik";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FlexBox from "@/components/flexbox/FlexBox";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function AddFamilyMember() {
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is Required!"),
    dob: Yup.date().required("Date of Birth is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    country: Yup.string().required("Relation is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <div>
      <div className="family-modal">
        <div className="family-modal-content">
          <div className="family-head">
            <h2>Add Family Member</h2>
            <button type="button">X</button>
          </div>
          <Card className="family-card">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid
                  size={{
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <TextField
                    select
                    fullWidth
                    name="country"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.country}
                    helperText={touched.country && errors.country}
                    error={Boolean(touched.country && errors.country)}
                    slotProps={{
                      select: {
                        native: true,
                        IconComponent: KeyboardArrowDown,
                      },
                    }}
                  >
                    <option value="usa">Relation</option>
                    <option value="uk">Father</option>
                    <option value="uae">Mother</option>
                  </TextField>
                </Grid>

                <Grid size={{ sm: 12, xs: 12 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    label="Name"
                    value={values.firstName}
                    onChange={handleChange}
                    helperText={touched.firstName && errors.firstName}
                    error={Boolean(touched.firstName && errors.firstName)}
                  />
                </Grid>

                <Grid size={{ sm: 12, xs: 12 }}>
                  <TextField
                    fullWidth
                    name="dob"
                    label="Date of Birth"
                    value={values.dob}
                    onChange={handleChange}
                    helperText={touched.dob && errors.dob}
                    error={Boolean(touched.dob && errors.dob)}
                  />
                </Grid>

                <Grid size={{ sm: 12, xs: 12 }}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    helperText={touched.email && errors.email}
                    error={Boolean(touched.email && errors.email)}
                  />
                </Grid>

                <Grid
                  size={{
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <RadioGroup
                    row
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      sx={{
                        ml: 0,
                      }}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      sx={{
                        ml: 0,
                      }}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      sx={{
                        ml: 0,
                      }}
                    />
                  </RadioGroup>
                </Grid>

                <FlexBox
                  flexWrap="wrap"
                  gap={2}
                  sx={{
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <Button type="submit" variant="contained">
                    Save
                  </Button>

                  <Button variant="outlined" color="secondary">
                    Clear
                  </Button>
                </FlexBox>
              </Grid>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
