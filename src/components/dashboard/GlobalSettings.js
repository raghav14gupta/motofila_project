import { theme } from "antd";
import React from "react";

const GlobalSettings = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
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
            Global Settings
          </p>
        </div>

        <div className="GlobalSettings_Container">

          <div className="profile_main generalSettings">
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
                      width: "12vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                    General Settings
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      App Version
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="2.1"
                    />
                  </div>

                  <div className="profile-right" style={{ marginTop: "6vh" }}>
                    <div className="left">
                      <label htmlFor="confirmPassword">Application Logo</label>
                      <br></br>
                      <input
                        type="file"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                    </div>
                    <div className="right">
                      <label htmlFor="oldPassword">
                        Application Favicon Icon
                      </label>
                      <br></br>
                      <input type="file" id="oldPassword" name="oldPassword" />
                    </div>
                  </div>
                </fieldset>
                <br />
              </form>
            </div>
          </div>

          <div className="profile_main googleMap">
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
                      width: "20vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                    Google Map API Key(App Usage)
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Google Map API Key
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="xxxxxxxxxxxxxx"
                    />
                  </div>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Server Key
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="xxxxxxxxxx"
                    />
                  </div>
                </fieldset>
                <br />
              </form>
            </div>
          </div>

          <div className="profile_main walletSettings">
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
                      width: "12vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                    Wallet Settings
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Minimum Wallet Amount To Deposit
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="1"
                    />
                  </div>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Minimum Wallet Amount To Withdrawl
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="100"
                    />
                  </div>
                </fieldset>
                <br />
              </form>
            </div>
          </div>
        
          <div className="profile_main referralSettings">
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
                      width: "12vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                    Referral Settings
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                     Referral Amount
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="1"
                    />
                    <p style={{marginTop:"2vh"}}>Note: Customer will get refer earnings after the first ride is successfully completed.</p>
                  </div>

                
                </fieldset>
                <br />
              </form>
            </div>
          </div>
          
          <div className="profile_main parkingDistance">
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
                      width: "12vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                   Parking Distance
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Distance
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="Miles"
                    />
                  </div>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                     Distance
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="50000"
                    />
                  </div>
                </fieldset>
                <br />
              </form>
            </div>
          </div>

          <div className="profile_main mapTracking">
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
                      width: "15vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                   Map Tracking Options
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                    See your map tracking option
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="Google Map"
                    />
                 
                  </div>

                
                </fieldset>
                <br />
              </form>
            </div>
          </div>
           
          <div className="profile_main contactUs">
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
                   Contact Us
                  </legend>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                     Email Subject
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                     
                    />
                  </div>

                  <div className="profile-right" style={{ marginTop: "6vh" }}>
                    <div className="left">
                      <label htmlFor="confirmPassword">Email</label>
                      <br></br>
                      <input
                        type="text"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                    </div>
                    <div className="right">
                      <label htmlFor="oldPassword">
                       Phone
                      </label>
                      <br></br>
                      <input type="text" id="oldPassword" name="oldPassword" />
                    </div>
                  </div>

                  <div className="profile-detail-name textarea">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                      Address
                    </label>
                    <br></br>
                    <textarea id="profile-detail-select" ></textarea>
                  </div>

                  <div className="profile-detail-name url">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                     Support URL
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                     
                    />
                  </div>

                  

                </fieldset>
                <br />

                <div className='personal-detail-button'>
              <button className='personal-detail-button-btn'>Save</button>
              <button className='personal-detail-button-btn'>Back</button>
               </div>
               
              </form>
            </div>
          </div>



        </div>
      </content>
    </>
  );
};

export default GlobalSettings;
