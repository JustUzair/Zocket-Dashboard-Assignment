import React from "react";
import Table from "react-bootstrap/Table";

import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import selectedService from "../../images/selected-service.svg";

import "./GetStarted.css";

const ChooseProduct = ({ progress, setProgress }) => {
  const productRow1 = [
    {
      name: "Ferrero Rocher Cake",
      price: "2,250.00",
      imgSrc: p1,
    },
    {
      name: "Black Forest Cake",
      price: "2,250.00",
      imgSrc: p2,
    },
    {
      name: "Blueberry with raw toppings Cake",
      price: "2,250.00",
      imgSrc: p4,
    },
  ];
  const productRow2 = [
    {
      name: "Chocolate Truffle Cake",
      price: "2,250.00",
      imgSrc: p3,
    },
    {
      name: "Blueberry Toppings Cake",
      price: "2,250.00",
      imgSrc: p5,
    },
    {
      name: "Black Forest Cake",
      price: "2,250.00",
      imgSrc: p1,
    },
  ];
  const productRow3 = [
    {
      name: "Ferrero Rocher Cake",
      price: "2,250.00",
      imgSrc: p4,
    },
    {
      name: "Vanilla Frosting Cake",
      price: "2,250.00",
      imgSrc: p2,
    },
    {
      name: "Chocolate Truffle Cake",
      price: "2,250.00",
      imgSrc: p6,
    },
  ];
  return (
    <div className="choose-product--container">
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
                Choose the product{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.5)",
                    fontWeight: "400",
                    lineHeight: "32px",
                  }}
                >
                  step(2 of 4)
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {productRow1.map((product, index) => (
                <>
                  <td
                    style={{
                      padding: "25px",
                      border: "1.5px solid #F3F3F3",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        alt={product.imgSrc}
                        style={{
                          borderRadius: "5px",
                          width: "54px",
                          height: "54px",
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
                        {product.name}
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
                          {`Rs: ${product.price}`}
                        </span>
                      </div>
                    </div>
                  </td>
                </>
              ))}
            </tr>
            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {productRow2.map((product, index) => (
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
                      className="selected--service"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // justifyContent: "space-around",
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
                        src={product.imgSrc}
                        alt={product.imgSrc}
                        style={{
                          borderRadius: "5px",
                          width: "54px",
                          height: "54px",
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
                        {product.name}
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
                          {`Rs: ${product.price}`}
                        </span>
                      </div>
                    </div>
                  </td>
                </>
              ))}
            </tr>

            <tr style={{ padding: "25px", borderRadius: "14px" }}>
              {productRow3.map((product, index) => (
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
                        src={product.imgSrc}
                        alt={product.imgSrc}
                        style={{
                          borderRadius: "5px",
                          width: "54px",
                          height: "54px",
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
                        {product.name}
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
                          {`Rs: ${product.price}`}
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
            setProgress(3);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChooseProduct;
