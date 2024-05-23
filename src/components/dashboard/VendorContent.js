import React from "react";
import searchicon from "../../images/searchicon.png"
import VendorsTable1 from "./VendorsTable1";
import tableimage1 from "../../images/tableimage1.png"
import CustomPagination from "./CustomPagination";
import VendorTable2 from "./VendorTable2";

const VendorContent = () => {
  return (
    <>
      <div className="vendors_wrapper">
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
            Vendors
          </p>
        </div>

        <div className="userMainContainer_first">
          <div className="userMainContainer_first-entries">
            <span style={{display:"flex",gap:"1vw",fontSize:"1vw"}}>
             <span>Show</span>
              <span><input type="number" style={{width:"3vw",paddingLeft:"0.8vw"}}></input></span>
             <span style={{fontSize:"1vw"}}>entries</span>

            </span>
          </div>
          <div>
          <span class="badge bg-primary" style={{padding:"1vw",backgroundColor:"rgba(240, 126, 1, 1) !important;"}}>+ Add Parking Prices</span>
          </div>
          <div className="userMainContainer_first-search">
          <input type="text" placeholder="Search" style={{padding:"0.7vw",width:"18vw",height:"3vw"}}></input>
          <img src={searchicon} />
          </div>
        </div>

        <div>
            {/* <VendorsTable1 /> */}
            <VendorTable2 />
        </div>

        <div>
        <div className="userMainContainer_third">
         <p style={{textAlign:"left",fontSize:"1vw"}}>Showing 1 to 3 of 3 entries</p>
         <CustomPagination className="firstPagination"/>
         </div>
        </div>

      </div>
    </>
  );
};

export default VendorContent;
