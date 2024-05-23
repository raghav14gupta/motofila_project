import React from "react";
import { theme } from "antd";
import DatePickerr from "./DatePickerr";
import { MdOutlineFileDownload } from "react-icons/md";

const BookingReport = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <content
        style={{
          margin: "5px 6px",
          padding: "0px !important",
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflowY: "auto",
        }}
      >
        <div className="toptext">
          <p
            style={{
              fontSize: "1.8vw",
              lineHeight: "1vw",
              fontFamily: "poppins",
              fontWeight: "500",
              padding: "0.8vw 2vw",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Booking Reports
          </p>
        </div>
        <div className="profile_main">
          <div
            className="profile-detail"
            style={{ width: "100%", padding: "3vw" }}
          >
            <form>
              <fieldset
                style={{
                  border: "1px solid rgba(53, 65, 91, 1)",
                  borderRadius: "5px",
                  marginTop: "6vh",
                  padding: "20px",
                  position: "relative",
                }}
              >
                <legend
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    width: "11vw",
                    padding: "1% 2%",
                    fontSize: "1vw",
                    backgroundColor: "rgba(53, 65, 91, 1)",
                    borderRadius: "5px",
                    position: "absolute",
                    top: "-1vw",
                  }}
                >
                  Booking Reports
                </legend>

                <div className="profile-detail-name"></div>

                <div className="profile-left">
                  <div className="left">
                    <label>Select User</label>
                    <br></br>
                    <select>
                      <option value="all">All</option>
                    </select>
                    <br></br>
                    <br></br>
                  </div>
                  <div className="right">
                    <label>Select Parking</label>
                    <br></br>
                    <select>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
                <div className="profile-right">
                  <div className="left">
                    <label>Select Booking Status</label>
                    <br></br>
                    <select>
                      <option value="all">All</option>
                    </select>
                  </div>
                  <div className="right">
                    <label>Select Payment Method</label>
                    <br></br>
                    <select>
                      <option value="all">All</option>
                    </select>
                    <br></br>
                  </div>
                </div>
                <div style={{ marginTop: "5vh" }}>
                  <p
                    style={{
                      color: "color: rgba(30, 30, 30, 1);",
                      fontSize: "1vw",
                      fontWeight: "500",
                      marginBottom: "0.4rem !important",
                    }}
                  >
                    Select Date
                  </p>
                  <input
                    type="date"
                    style={{ width: "100%", height: "3vw", fontSize: "1vw" }}
                  ></input>
                </div>
                <br></br>

                <div className="profile-right">
                  <div className="left" style={{marginBottom:"5vh"}}>
                    <label
                      style={{
                        color: "color: rgba(30, 30, 30, 1);",
                        fontSize: "1vw",
                        fontWeight: "500",
                        
                      }}
                    >
                      Select File Format
                    </label>
                    <br></br>
                    <select style={{ width: "200%" }}>
                      <option value="all">Select File Format</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <br />
              <span className="personal-detail-button">
                <button
                  className="personal-detail-button-btn"
                  style={{ width: "10vw !important" }}
                >
                  <MdOutlineFileDownload style={{ marginRight: "3px" }} />
                  Download
                </button>
              </span>
            </form>
          </div>
        </div>
      </content>
    </div>
  );
};

export default BookingReport;
