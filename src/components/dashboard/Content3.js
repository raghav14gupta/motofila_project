import { theme } from "antd";
import React from "react";
import { Table, Button } from 'antd';
import Table1 from "../Table1";
import CustomPagination from "./CustomPagination";
import searchicon from "../../images/searchicon.png"




const Content3 = () => {
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
        <div className="toptext">
          <p
            style={{
              fontSize: "2vw",
              lineHeight: "1vw",
              fontFamily: "poppins",
              fontWeight: "500",
              padding: "1vw 2vw",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            User
          </p>
        </div>

        <div className="userMainContainer">

        
 <div className="userMainContainer_first">
          <div className="userMainContainer_first-entries">
            <span style={{display:"flex",gap:"1vw",fontSize:"1vw"}}>
             <span>Show</span>
              <span><input type="number" style={{width:"3vw",paddingLeft:"0.8vw"}}></input></span>
             <span style={{fontSize:"1vw"}}>entries</span>

            </span>
          </div>
          <div className="userMainContainer_first-search">
          <input type="text" placeholder="Search" style={{padding:"0.7vw",width:"18vw",height:"3vw"}}></input>
          <img src={searchicon} />
          </div>
        </div>
         <div className="userMainContainer_Second">
         <Table1 />
         </div>

         <div className="userMainContainer_third">
         <p style={{textAlign:"left",fontSize:"1vw"}}>Showing 1 to 3 of 3 entries</p>
         <CustomPagination className="firstPagination"/>
         </div>

        </div>
      </content>
    </>
  );
};

export default Content3;
