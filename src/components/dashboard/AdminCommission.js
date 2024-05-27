import React from 'react'
import tick from "../../images/tick.png"

const AdminCommission = () => {
  return (
   <div className='adminCommission'>

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
             Admin Commission
            </p>
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
                      width: "14vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                  Admin Commission
                  </legend>

                 
                 <div style={{marginTop:"3vh",fontWeight:"500",fontSize:"1.5vw"}}>
                    <span><img src={tick}></img></span>
                    <span>Enable Admin Commission</span>
                 </div>

                  <div className="profile-right" style={{ marginTop: "6vh",marginBottom:"4vh" }}>
                    <div className="left">
                      <label htmlFor="confirmPassword">Commission Type</label>
                      <br></br>
                      <input
                        type="text"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                    </div>
                    <div className="right">
                      <label htmlFor="oldPassword">
                      Admin Commission
                      </label>
                      <br></br>
                      <input type="text" id="oldPassword" name="oldPassword" />
                    </div>
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
  )
}

export default AdminCommission;