import Card from "../../Card"
import React from 'react'
import Barchart from '../Barchart'
import { Button, Layout, Menu, theme } from "antd";
import booking from "../../images/booking.png";
import downloadicon from "../../images/downloadicon.png";
// import Card from "../../Card"
 const Content = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <>
         <div style={{padding:"3vw"}}>
         <content
          style={{
            margin: "24px 16px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
          }}
        >
          <div className="cards">
            <Card heading={"Total Orders"} number={41} />
            <Card heading={"Today’s Total Users"} number={5} />
            <Card heading={"Today’s Total parking"} number={5} />
            <Card heading={"Today’s Total Earnings"} number={41} />
            <Card heading={"Today’s Total Commission"} number={5} />
            <Card heading={"Today’s Booking Active"} number={5} />
            <Card heading={"Today’s Booking placed"} number={41} />
            <Card heading={"Today’s Booking Completed"} number={5} />
            <Card heading={"Today’s Booking Cancelled"} number={5} />
          </div>

          <div
            className="salesTable"
            style={{ display: "flex", marginTop: "30px", gap: "17%" }}
          >
            <div className="table">
              <h2
                style={{
                  fontFamily: "poppins",
                  fontSize: "2vw",
                  lineHeight: "30px",
                  color: "rgba(53, 65, 91, 1)",
                  fontWeight: "500",
                }}
              >
                Total Sales
              </h2>
            </div>

            {
              <div style={{ marginTop: "25px", boxShadow: "none" }}>
                <span>
                  <select
                    style={{
                      borderRadius: "5%",
                      width: "100px",
                      marginRight: "14px",
                    }}
                  >
                    <option value="option1">Weekly</option>card
                    <option value="option2">Monthly</option>
                    <option value="option3">Yearly</option>
                  </select>
                  <img src={downloadicon}></img>
                </span>
                <div
                  className="orangebox"
                  style={{ marginTop: "55px", display: "flex", gap: "10px" }}
                >
                  <span style={{}}>
                    <img src={booking}></img>
                  </span>
                  <span>booking (in rupees)</span>
                </div>
              </div>
            }
          </div>

         <div style={{marginRight:"5vw"}}>
         <Barchart />
         </div>
        </content>
         </div>
    </>
  )
}


export default Content;