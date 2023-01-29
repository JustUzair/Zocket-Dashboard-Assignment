import React, { useState } from "react";
// import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";
import "./MultiStepSettingsBar.css";
import Table from "react-bootstrap/Table";

import { ProgressBar, Step } from "react-step-progress-bar";
import campaignCurrency from "../../images/currency.svg";
import gpsIcon from "../../images/gpsSVG.svg";

/*

    **********************************************
                Vertical Progress Bar
    **********************************************


*/
const MultiStepSettingsBar = () => {
  const progress = 2;
  let stepPercentage = 0;
  if (progress === 1) {
    stepPercentage = 49.5;
  } else if (progress === 2) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  return (
    <div
    //   style={{
    //     marginTop: "50px",
    //   }}
    >
      <div className="settings-bar">
        <ProgressBar percent={stepPercentage}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                <span style={{ transform: "rotate(-90deg)" }}>{index + 1}</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                <span style={{ transform: "rotate(-90deg)" }}>{index + 1}</span>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};

/*

    **********************************************
    Campaign Settings + Vertical Progress Bar
    **********************************************


*/
const CampaignSettings = () => {
  const [budgetValue, setBudgetValue] = useState(1);
  const [locationRadius, setLocationRadius] = useState(1);
  return (
    <div
      className="campaign-container--container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          background: "white",
          marginLeft: "40px",
          marginRight: "40px",
          flexGrow: 1,
        }}
      >
        <div>
          <Table
            style={{
              borderCollapse: "separate",
              borderSpacing: "30px 24px",
            }}
          >
            <thead>
              <tr>
                <th
                  colSpan={2}
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "-0.02em",
                    color: "#0B1A33",
                  }}
                >
                  Campaign Settings{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.5)",
                      fontWeight: "400",
                      lineHeight: "32px",
                    }}
                  >
                    (Steps 3 of 4)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr style={{ padding: "25px", borderRadius: "14px" }}></tr> */}
            </tbody>
          </Table>

          <div
            className="settings"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              columnGap: "20px",
              paddingTop: "0px",
              paddingBottom: "20px",
            }}
          >
            <MultiStepSettingsBar />
            <div className="info" style={{ marginTop: "20px" }}>
              <div className="budget-info">
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "32px",
                    marginLeft: "-70px",
                  }}
                >
                  Budget and dates info
                </span>
                <div>
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "12px",
                      lineHeight: "32px",
                      color: "#606060",
                      marginLeft: "-20px",
                    }}
                  >
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Budget Timeline
                    </span>
                    <div className="budget-type--tab">
                      <span
                        style={{
                          backgroundColor: "#0F6EFF",
                          color: "#fff",
                          width: "50%",
                          borderRadius: "47.06px",
                        }}
                      >
                        Lifetime
                      </span>
                      <span
                        style={{
                          color: "#999999",
                          backgroundColor: "#f0f0f0",
                          width: "50%",
                          borderTopRightRadius: "47.06px ",
                          borderBottomRightRadius: "47.06px ",
                        }}
                      >
                        Daily
                      </span>
                    </div>
                    <div
                      className="campaign-date--input"
                      style={{
                        display: "flex",

                        // marginLeft: "-80px",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        <label htmlFor="start-date">Start Date</label>
                        <br />
                        <input type="date" name="start-date" placeholder="" />
                      </div>
                      <div>
                        <label htmlFor="end-date">End Date</label>
                        <br />
                        <input type="date" name="end-date" placeholder="" />
                      </div>
                    </div>
                    <div
                      className="campaign-budget--slider"
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <label htmlFor="budget-slider">
                        Enter campaign budget
                      </label>
                      <img
                        src={campaignCurrency}
                        alt="currency"
                        width="58px"
                        style={{
                          marginLeft: "80px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <br />
                        <input
                          type="range"
                          className="budget-slider"
                          name="budget-slider"
                          id="budget-slider"
                          low={100}
                          high={100000}
                          value={budgetValue}
                          style={{
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onChange={e => {
                            setBudgetValue(e.target.value);
                          }}
                          title={`${budgetValue * 1000}`}
                        />

                        <p
                          className="curr-budget-value"
                          style={{
                            marginTop: "10px",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "32px",
                            display: "flex",
                            alignItems: "center",
                            color: "#606060",
                          }}
                        >
                          {budgetValue * 1000}
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>

              {/*  */}
              <div className="location-info">
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "32px",
                    marginLeft: "-70px",
                  }}
                >
                  Location info
                </span>
                <div>
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "12px",
                      lineHeight: "32px",
                      color: "#606060",
                      marginLeft: "-20px",
                    }}
                  >
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Location type
                    </span>
                    <div className="location-type--tab">
                      <span
                        style={{
                          backgroundColor: "#0F6EFF",
                          color: "#fff",
                          width: "50%",
                          borderRadius: "47.06px",
                        }}
                      >
                        Location
                      </span>
                      <span
                        style={{
                          color: "#999999",
                          backgroundColor: "#f0f0f0",
                          width: "50%",
                          borderTopRightRadius: "47.06px",
                          borderBottomRightRadius: "47.06px",
                        }}
                      >
                        Radius
                      </span>
                    </div>
                    <div
                      className="select-location--input"
                      style={{ position: "relative", width: "min-content" }}
                    >
                      <label htmlFor="select-location">Select Location</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Select a place name, address or coordinates"
                      />
                      <img
                        src={gpsIcon}
                        alt="gps"
                        style={{
                          position: "absolute",
                          left: "7px",
                          top: "40px",
                        }}
                      />
                    </div>

                    <div className="location-radius--slider" style={{}}>
                      <label htmlFor="location-radius-slider">
                        Select target radius
                      </label>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <br />
                        <input
                          type="range"
                          className="location-radius-slider"
                          name="location-radius-slider"
                          id="location-radius-slider"
                          low={1}
                          high={30}
                          value={locationRadius}
                          style={{
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                          onChange={e => {
                            setLocationRadius(e.target.value);
                          }}
                          title={`${Math.floor(
                            (locationRadius / 100) * 30
                          )}  Km`}
                        />

                        <p
                          className="curr-budget-value"
                          style={{
                            marginTop: "10px",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "32px",
                            display: "flex",
                            alignItems: "center",
                            color: "#606060",
                          }}
                        >
                          {Math.floor((locationRadius / 100) * 30)} Km
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span
        style={{
          alignSelf: "flex-end",
        }}
      >
        <button
          style={{ float: "right" }}
          type="button"
          className="btn btn-primary"
        >
          Continue
        </button>
      </span>
    </div>
  );
};

export default CampaignSettings;
