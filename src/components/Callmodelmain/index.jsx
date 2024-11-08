import React from "react";
import "./Callmodel.css";

import Boy1 from "../../../public/static/dashboardimages/boy1.png";
import Boy2 from "../../../public/static/dashboardimages/boy2.png";
import Boy3 from "../../../public/static/dashboardimages/boy3.png";
import Boy4 from "../../../public/static/dashboardimages/boy4.png";
import Callingperson from "../../../public/static/dashboardimages/callingperson.jfif";

export default function Callmodelmain() {
  return (
    <div className="callmodel-main">
      <div className="callmodel-main-box">
        <div className="calling-person-div-main">
          <div className="calling-person-div">
            <div className="calling-person-name">
              <p>Lisa</p>
            </div>
            <div className="calling-person-time">
              <span>00 : 00</span>
            </div>
            <div className="calling-person-active-dot">
              <div className="calling-person-active-inner-dot"></div>
            </div>
            <div className="calling-person-div-with-ring">
              <div className="calling-person-div-with-ring-image">
                <img src={Callingperson} alt="Callingperson" />
              </div>
              <div className="calling-person-with-ring-big"></div>
              <div className="calling-person-with-ring-small">
                <div className="calling-person-with-ring-small-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="callmodel-main-box-pera">
          <p>
            James, your son Matt’s son and your grandson Jason is turning 4 on
            Monday the 5th of November. Do you remember the day Jason was
            born? You were so worried about Matt’s wife Elisa when she was in
            labour. Let me show you Jason’s pictures to refresh your memory.{" "}
          </p>
        </div>
        <div className="callmodel-container">
          <div className="callmodel-main-box-grd-main">
            <div className="callmodel-main-box-grd-box">
              <img src={Boy1} alt="Boy1" />
              <div className="callmodel-main-box-grd-box-content">
                <h2>Jason (Birthday boy)</h2>
                <p>Mal’s son</p>
              </div>
            </div>
            <div className="callmodel-main-box-grd-box">
              <img src={Boy2} alt="Boy2" />
              <div className="callmodel-main-box-grd-box-content">
                <h2>Phillips (Phil)</h2>
                <p>Tom’s son</p>
              </div>
            </div>
            <div className="callmodel-main-box-grd-box">
              <img src={Boy3} alt="Boy3" />
              <div className="callmodel-main-box-grd-box-content">
                <h2>Hannah (Princes)</h2>
                <p>Mal’s daughter</p>
              </div>
            </div>
            <div className="callmodel-main-box-grd-box">
              <img src={Boy4} alt="Boy4" />
              <div className="callmodel-main-box-grd-box-content">
                <h2>Aron (James)</h2>
                <p>Adam’s Son</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
