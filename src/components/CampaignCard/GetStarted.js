import React from "react";
import "./GetStarted.css";

import Table from "react-bootstrap/Table";
import frame1 from "../../images/Frame1.png";
import frame2 from "../../images/Frame2.png";
import frame3 from "../../images/Frame3.png";
import frame4 from "../../images/Frame4.png";
import frame5 from "../../images/Frame5.png";
import frame6 from "../../images/Frame6.png";
import frame7 from "../../images/Frame7.png";
import frame8 from "../../images/Frame8.png";
import frame9 from "../../images/Frame9.png";
import selectedService from "../../images/selected-service.svg";

const GetStarted = ({ progress, setProgress }) => {
  const serviceRow1 = [
    {
      main: " Get Leads as calls",
      subscript: "Reach broad audience and get leads through calls",
      imgSrc: frame7,
    },
    {
      main: " Get Leads as Facebook messages",
      subscript: "Get more FB messages from Leads",
      imgSrc: frame8,
    },
    {
      main: "Increase page followers",
      subscript: "Encourage customers to follow your page",
      imgSrc: frame1,
    },
  ];
  const serviceRow2 = [
    {
      main: "Get customer Leads",
      subscript: "Encourage customers to take action",
      imgSrc: frame2,
    },
    {
      main: "Get more youtube views",
      subscript: "Increase organic views by obtaining user attention",
      imgSrc: frame4,
    },
    {
      main: "Get more website traffic",
      subscript: "Get the right people to visit your website",
      imgSrc: frame5,
    },
  ];
  const serviceRow3 = [
    {
      main: "Increase live store traffic",
      subscript: "Drive visits to local stores, restaurants & Dealerships",
      imgSrc: frame3,
    },
    {
      main: "Increase your App installs",
      subscript: "Get more installs, interactions for your app",
      imgSrc: frame9,
    },
    {
      main: "Increase the catalogue sales",
      subscript: "Drive the sales of your catalogue and get more leads",
      imgSrc: frame6,
    },
  ];
  return (
    <div className="getting-started--container">
      {/*  content selection   ------------------------------- */}

      <div
        style={{
          background: "white",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <Table
          style={{
            borderCollapse: "separate",
            borderSpacing: "30px 24px",
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  color: "#0B1A33",
                }}
              >
                What do you want to do?{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.5)",
                    fontWeight: "400",
                    lineHeight: "32px",
                  }}
                >
                  step(1 of 4)
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {serviceRow1.map((service, index) => (
                <>
                  <td
                    style={
                      index === 0
                        ? {
                            backgroundColor: "rgba(231, 240, 255, 0.3)",
                            border: "1px solid #0F6EFF",
                            padding: "25px",
                            borderRadius: "10px",
                            position: "relative",
                          }
                        : {
                            padding: "25px",
                            border: "1.5px solid #F3F3F3",
                            borderRadius: "10px",
                          }
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {index === 0 && (
                        <img
                          src={selectedService}
                          alt={"active"}
                          style={{
                            position: "absolute",
                            right: "-7px",
                            top: "-7px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      )}
                      <img
                        src={service.imgSrc}
                        alt={service.imgSrc}
                        style={{
                          width: "22px",
                          height: "22px",
                        }}
                      />
                      <div
                        className="main-service"
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "20px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                          color: "#0B1A33",
                          marginLeft: "20px",
                        }}
                      >
                        {service.main}
                        <br />
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            lineHeight: "16px",
                            letterSpacing: "-0.02em",
                            color: "rgba(11, 26, 51, 0.5)",
                          }}
                        >
                          {service.subscript}
                        </span>
                      </div>
                    </div>
                  </td>
                </>
              ))}
            </tr>
            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {serviceRow2.map((service, index) => (
                <>
                  <td
                    style={{
                      padding: "25px",
                      border: "1.5px solid #F3F3F3",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="selected--service"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // justifyContent: "space-around",
                      }}
                    >
                      <img
                        src={service.imgSrc}
                        alt={service.imgSrc}
                        style={{
                          width: "22px",
                          height: "22px",
                        }}
                      />
                      <div
                        className="main-service"
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "20px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                          color: "#0B1A33",
                          marginLeft: "20px",
                        }}
                      >
                        {service.main}
                        <br />
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            lineHeight: "16px",
                            letterSpacing: "-0.02em",
                            color: "rgba(11, 26, 51, 0.5)",
                          }}
                        >
                          {service.subscript}
                        </span>
                      </div>
                    </div>
                  </td>
                </>
              ))}
            </tr>

            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {serviceRow3.map((service, index) => (
                <>
                  <td
                    style={{
                      padding: "25px",
                      border: "1.5px solid #F3F3F3",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="selected--service"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={service.imgSrc}
                        alt={service.imgSrc}
                        style={{
                          width: "22px",
                          height: "22px",
                        }}
                      />
                      <div
                        className="main-service"
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "20px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                          color: "#0B1A33",
                          marginLeft: "20px",
                        }}
                      >
                        {service.main}
                        <br />
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            lineHeight: "16px",
                            letterSpacing: "-0.02em",
                            color: "rgba(11, 26, 51, 0.5)",
                          }}
                        >
                          {service.subscript}
                        </span>
                      </div>
                    </div>
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </Table>
        <button
          style={{ float: "right" }}
          type="button"
          className="btn btn-primary"
          onClick={e => {
            setProgress(2);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
