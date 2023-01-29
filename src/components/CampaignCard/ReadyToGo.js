import React from "react";

import "./GetStarted.css";

import Table from "react-bootstrap/Table";
import likeBtn from "../../images/like-button.svg";
import selectedService from "../../images/selected-service.svg";
import profile from "../../images/profile.svg";
import campaignPhoto from "../../images/campaign-photo.svg";

const ReadyToGo = () => {
  const serviceRow1 = [
    {
      title: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      imgSrc: campaignPhoto,
      profileSrc: profile,
    },
    {
      title: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      imgSrc: campaignPhoto,
      profileSrc: profile,
    },
    {
      title: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      imgSrc: campaignPhoto,
      profileSrc: profile,
    },
    {
      title: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      imgSrc: campaignPhoto,
      profileSrc: profile,
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
          lineBreak: "auto",
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
                colSpan={4}
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
                            minHeight: "min-content",
                          }
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "min-content !important",
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

                      <div
                        className="main-service"
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "23px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                          color: "#2B23A5",
                          marginLeft: "20px",
                          width: "250px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <img
                            src={service.profileSrc}
                            alt={service.title}
                            style={{
                              marginRight: "12px",
                            }}
                          />
                          {service.title}
                        </div>
                        <br />
                        <span
                          style={{
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "-0.02em",
                            color: "#000",
                            textAlign: "left",
                          }}
                        >
                          {service.description}
                        </span>
                      </div>
                      <img
                        src={service.imgSrc}
                        alt={service.imgSrc}
                        style={{
                          width: "250px",
                        }}
                      />
                      <div
                        className="like-count--container"
                        style={{
                          width: "250px",
                          display: "flex",
                          justifyContent: "space-between",
                          backgroundColor: "#F5F5F5",
                        }}
                      >
                        <span
                          style={{
                            fontSize: " 11px",
                            lineHeight: "23px",
                            color: "#2B23A5",
                          }}
                        >
                          {service.title}
                        </span>
                        <img src={likeBtn} alt="like" />
                      </div>

                      {index === 0 && (
                        <div
                          className="campaign-edit--container"
                          style={{
                            width: "250px",
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "10px",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "rgba(15, 110, 255, 0.1)",
                              color: "#0F6EFF",
                              borderRadius: "5px",
                              border: "none",
                              fontWeight: "500",
                              fonStize: "12px",
                              lineHeight: "32px",
                              padding: "5px 10px",
                            }}
                          >
                            {" "}
                            Change Image{" "}
                          </button>
                          <button
                            style={{
                              backgroundColor: "rgba(15, 110, 255, 0.1)",
                              color: "#0F6EFF",
                              borderRadius: "5px",
                              border: "none",
                              fontWeight: "500",
                              fonStize: "12px",
                              lineHeight: "32px",
                              padding: "5px 10px",
                            }}
                          >
                            {" "}
                            Edit Text{" "}
                          </button>
                        </div>
                      )}
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
        >
          Start Campaign
        </button>
      </div>
    </div>
  );
};

export default ReadyToGo;
