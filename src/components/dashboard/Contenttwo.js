import React from 'react';
import { theme } from "antd";

const Content2 = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
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
       <div className='toptext'>
          <p style={{ fontSize: "2vw", lineHeight: "1vw", fontFamily: "poppins", fontWeight: "500",padding:"3vw 2vw", color: "rgba(0, 0, 0, 1)" }}>Profile</p>
        </div>
        <div className='profile_main'>
       

        <div className='profile-detail' style={{width:"100%",padding:"3vw"}}>
          <form>
            <fieldset style={{
              border: "1px solid rgba(53, 65, 91, 1)",
              borderRadius: "5px",
              marginTop: "6vh",
              padding: "20px",
              position:"relative"
            }}>
              <legend style={{ color: "rgba(255, 255, 255, 1)", width: "10vw", padding: "1% 3%", fontSize: "1vw", backgroundColor: "rgba(53, 65, 91, 1)", borderRadius: "5px", position:"absolute",top:"-1vw" }}>Profile Details</legend>

              <div className='profile-detail-name'>
                <label htmlFor="name">Name</label>
                <br></br>
                <select id='profile-detail-select' >
                  <option value="Admin">Admin</option>
                </select>
                <p>Insert Name</p>
              </div>

              <div className='profile-left' >
                <div className='left'  >
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input type="email" id="email" name="email"  />
                  <p>Insert Email</p>
                </div>
                <div className='right'>
                  <label htmlFor="password">New Password</label>
                  <br></br>
                  <input type="password" id="password" name="password"  />
                  <p>Insert New Password</p>
                </div>
              </div>
              <div className='profile-right'>
                <div className='left'>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <br></br>
                  <input type="password" id="confirmPassword" name="confirmPassword" />
                  <p>Insert Confirm Password</p>
                </div>
                <div className='right'>
                  <label htmlFor="oldPassword">Old Password</label>
                  <br></br>
                  <input type="password" id="oldPassword" name="oldPassword"  />
                  <p>Insert Old Password</p>
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
      </content>
    </>
  )
}

export default Content2;
