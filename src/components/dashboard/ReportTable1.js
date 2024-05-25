import React from "react";
import { theme } from "antd";
import { MdOutlineFileDownload } from "react-icons/md";
const ReportTable1 = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <content
        style={{
          margin: "5px 6px",
          padding: 9,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflowY: "auto",
        }}
      >
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
                    padding: "1% 3%",
                    fontSize: "1vw",
                    backgroundColor: "rgba(53, 65, 91, 1)",
                    borderRadius: "5px",
                    position: "absolute",
                    top: "-1vw",
                  }}
                >
                  User Reports
                </legend>

                <div className="profile-detail-name">
                  <label htmlFor="name">Select Status</label>
                  <br></br>
                  <select id="profile-detail-select">
                    <option value="Admin">Select Status</option>
                  </select>
                </div>
                <div className="profile-detail-name">
                  <label htmlFor="name">Select File Format</label>
                  <br></br>
                  <select id="profile-detail-select">
                    <option value="Admin">Select File Format</option>
                  </select>
                </div>
                <br></br>
              </fieldset>

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

export default ReportTable1;
