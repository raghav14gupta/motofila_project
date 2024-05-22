import { theme } from "antd";
import React from "react";
import searchicon from "../../images/searchicon.png";
import walletUser from "../../images/walletUser.png";
import user from "../../images/user.png";
import NavbarMenu from "../NavbarMenu";
import Table2 from "./Table2";
import CustomPagination from "./CustomPagination";
import UsersTable2 from "./UsersTable2";
import MyBookingsTable from "./MyBookingsTable";
import VehicleSettingTable from "./VehicleSettingTable";
import NoDataTable from "./NoDataTable";


const Content4 = () => {
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
        <div className="userDetailMainContainer">
          <div className="userDetailMainContainer_top">
            <div className="userDetailMainContainer_top-walletLeft">
              <div className="card" style={{ width: "20vw",height:"70%",display:"flex", }}>
                <img
                  className="card-img-top"
                  src={walletUser}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Amia</h5>
                  <p className="card-text">Wallet Balance:&#8377;2000</p>
                 <div style={{display:"flex",flexDirection:"column"}}>
                 <a
                    href="#"
                    className="btn btn-primary top-walletLeft_btn"
                    style={{
                      backgroundColor: "rgba(240, 126, 1, 1) !important;",
                    }}
                  >
                    + Add Wallet Amount
                  </a>
                  <br></br>
                  <a href="#" className="btn btn-primary">
                    + Add Vehicle
                  </a>
                 </div>
                </div>
              </div>
            </div>
            <div className="userDetailMainContainer_top-walletRight">
              {/* <div className="top-walletRight-tabs">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                    Parking List
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                    Booked Parking
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                    My Bookings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#">
                    My Bookings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#">
                    Wallet Transactions
                    </a>
                  </li>
                </ul>
                <div>
                  <p>hi</p>
               </div>
              </div> */}
             <NavbarMenu />
            <div style={{display:"flex",marginTop:"7vh",gap:"29vw"}}>

            <span style={{display:"flex",gap:"0.7vw"}}>
             <span style={{fontSize:"1vw"}}>Show</span>
              <span><input type="number" style={{width:"3vw",paddingLeft:"0.8vw"}}></input></span>
              <span style={{fontSize:"1vw"}}>entries</span>
            </span>

            <div className="searchicon" style={{position:"relative"} }>
            <input type="text" placeholder="Search" style={{padding:"0.7vw",width:"18vw",height:"3vw"}}></input>
          <img src={searchicon} />
            </div>
            </div>

            {/* <Table2 /> */}

            {/* <UsersTable2 /> */}

            {/* <MyBookingsTable /> */}

            {/* <VehicleSettingTable /> */}

            <NoDataTable />

            <div style={{height:"2px",width:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",marginTop:"3vh"}}>
   
             </div>
             <div style={{display:"flex",gap:"25vw",marginTop:"5vh"}}>
             <p style={{textAlign:"left",fontSize:"1vw"}}>Showing 1 to 3 of 3 entries</p>
             <CustomPagination className="custom-pagination"/>
             </div>
           </div>
          
          </div>
          <div className="userDetailMainContainer_bottom">
          <div class="userDetailMainContainer_bottom-footer">
         
         <p><i class="fa-solid fa-user me-3"></i>Female</p>
         <p>
           <i class="fas fa-envelope me-3"></i>
           admin@abc.com
         </p>
         <p><i class="fas fa-phone me-3"></i>+91987654321</p>
         <p><i class="fas fa-map-marker-alt me-3" /> Bangalore, India</p>
        
         
         
       </div>

          </div>
       
      
        </div>
      </content>
    </>
  );
};

export default Content4;
