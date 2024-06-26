import React, { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Barchart from "../Barchart";
import "../../App.css";
import Card from "../../Card";
import { GiHamburgerMenu } from "react-icons/gi";
import removebg from "../../images/image1removebg.png";
import vector1 from "../../images/Vector1.png";
import user from "../../images/user.png";
import vendor from "../../images/vendor.png";
import report from "../../images/report.png";
import plist from "../../images/plist.png";
import pbooking from "../../images/pbook.png";
import pfacility from "../../images/pfacility.png";
import psetting from "../../images/psetting.png";
import payment from "../../images/payment.png";
import authority from "../../images/authority.png";
import setting from "../../images/setting.png";
import userlogin from "../../images/userlogin.png";
import booking from "../../images/booking.png";
import downloadicon from "../../images/downloadicon.png";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import SubNav from "../SubNav";
import {
  UploadOPayment,
  UserOutplist,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Content from "./Content";
import Content2 from "./Contenttwo";
import Content3 from "../dashboard/Content3";
import Content4 from "./Content4";
import VendorContent from "./VendorContent";
import { ReportContainer } from "./ReportContainer";
import BookingReport from "./BookingReport";
import ParkingReport from "./ParkingReport";
import TransactionReports from "./TransactionReports";
import ParkingList from "./ParkingList";
import ParkingBookings from "./ParkingBookings";
import UsersTable2 from "./UsersTable2";
import ParkingFacilities from "./ParkingFacilities";
import VehicleBrands from "./VehicleBrands";
import VehicleModels from "./VehicleModels";
import ParkingBookingReports from "./ParkingBookingReports";
import PaymentParkingReport from "./PaymentParkingReport";
import GlobalSettings from "./GlobalSettings";
import AdminCommission from "./AdminCommission";
import PaymentMethod from "./PaymentMethod";

const { Header, Sider, Content: AntContent } = Layout;

const DashUI = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img
          src={removebg}
          style={{
            width: "50%",
            display: "block",
            margin: "10px 20px",
            marginBottom: "40px",
          }}
          alt="Logo"
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <img
                  src={vector1}
                  style={{ height: "20px", color: "rgba(240, 126, 1, 1)" }}
                  alt="icon"
                />
              ),
              label: (
                <Link to="/"> {/* Use Link for routing */}
                  <span
                    className="dashboard-label"
                    style={{
                      color: "rgba(240, 126, 1, 1)",
                      backgroundColor: "rgba(30, 30, 30, 0.89)",
                      marginBottom: "40px",
                      height: "50px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    Dashboard
                  </span>
                </Link>
              ),
            },
            {
              key: "2",
              label: <Link to="/account-management">Account Management</Link>,
            },
            {
              key: "3",
              icon: <img src={vendor} alt="vendor" />,
              label: <Link to="/profile">Profile</Link>,
            },
            {
              key: "4",
              icon: <img src={user} alt="user" />,
              label: <Link to="/user">User</Link>,
            },
            {
              key: "5",
              icon: <img src={vendor} alt="vendor" />,
              label: <Link to="/vendor">Vendor</Link>,
            },
            {
              key: "6",
              icon: <img src={report} alt="report" />,
              label: <Link to="/report">Report</Link>,
              children: [{ label:<Link to="/User-Reports"><ul className="custom-list"><li>User Reports</li></ul></Link> },
              { label:<Link to="/Booking-Reports"><ul className="custom-list"><li>Booking Reports</li></ul></Link> },
              { label:<Link to="/Parking-Reports"><ul className="custom-list"><li>Parking Reports</li></ul></Link> },
              { label:<Link to="/Transaction-Reports"><ul className="custom-list"><li>Transaction Reports</li></ul></Link> }],
            },
            {
              key: "7",
              label: <Link to="/parking-management">Parking Management</Link>,
            },
            {
              key: "8",
              icon: <img src={plist} alt="plist" />,
              label: <Link to="/parking-list">Parking List</Link>,
            },
            {
              key: "9",
              icon: <img src={pbooking} alt="pbooking" />,
              label: <Link to="/parking-bookings">Parking Bookings</Link>,
            },
            {
              key: "10",
              icon: <img src={pfacility} alt="pfacility" />,
              label: <Link to="/parking-facilities">Parking Facilities</Link>,
            },
            {
              key: "11",
              icon: <img src={psetting} alt="psetting" />,
              label: <Link to="/vehicle-settings">Vehicle Settings</Link>,
              children: [{ label:<Link to="/Vehicle-Brands"><ul className="custom-list"><li>Brands</li></ul></Link> },
              { label:<Link to="/Vehicle-Models"><ul className="custom-list"><li>Models</li></ul></Link> },
              
             ],
            },
            {
              key: "12",
              label: <Link to="/setting-management">Setting Management</Link>,
            },
            {
              key: "13",
              icon: <img src={payment} alt="payment" />,
              label: <Link to="/payments">Payments</Link>,
              children: [{ label:<Link to="/Parking-Report"><ul className="custom-list"><li>Parking Report</li></ul></Link> },
              { label:<Link to="/Booking-Report"><ul className="custom-list"><li>Booking Report</li></ul></Link> },
              ],
            },
            {
              key: "14",
              icon: <img src={authority} alt="authority" />,
              label: <Link to="/authorities">Authorities</Link>,
            },
            {
              key: "15",
              icon: <img src={setting} alt="setting" />,
              label: (
                <Link to="/settings">
                  Settings
                </Link>
              ),
              children: [{ label:<Link to="/Global-Settings"><ul className="custom-list"><li>Global Settings</li></ul></Link> },
              { label:<Link to="/Admin-Commission"><ul className="custom-list"><li>Admin Commission</li></ul></Link> },
              { label:<Link to="/Payment-Method"><ul className="custom-list"><li>Payment Method</li></ul></Link> },
              { label:<Link to="/Admin-Commission"><ul className="custom-list"><li>Admin Commission</li></ul></Link> },
              { label:<Link to="/Admin-Commission"><ul className="custom-list"><li>Admin Commission</li></ul></Link> },
              
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              marginBottom: "45px",
            }}
          />
          <div
            className="userlogin"
            style={{
              paddingTop: "5px",
              paddingRight: "8px",
              position: "relative",
            }}
          >
            <img src={userlogin} alt="user login" />
          </div>
          <div className="loginhover" style={{ position: "absolute" }}>
            <div className="logintop">
              <div className="login2" style={{}}>
                <CgProfile style={{ height: "3rem", width: "3rem" }} />


                
              </div>
              <div>
                <div>Tom</div>
                <div>Admin</div>
              </div>
            </div>
            <div className="loginbottom">
              <div>
                <FaRegUser />
                <span>Profile</span>
              </div>
              <div>
                <CiSettings />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </Header>

        <AntContent
          style={{
            margin: "24px 16px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/account-management" element={<Content2 />} />
            <Route path="/profile" element={<Content2 />} />
            <Route path="/user" element={<Content3/>} />
            <Route path="/vendor" element={<VendorContent />} />
            {/* <Route path="/report" element={<ReportContainer />} /> */}
            <Route path="/User-Reports" element={<ReportContainer />} />
            <Route path="/Booking-Reports" element={<BookingReport />} />
            <Route path="/Parking-Reports" element={<ParkingReport />} />
            <Route path="/Transaction-Reports" element={<TransactionReports />} />
            <Route path="/parking-management" element={<Content4 />} />
            <Route path="/parking-list" element={<ParkingList />} />
            <Route path="/parking-bookings" element={<ParkingBookings />} />
            
            <Route path="/parking-facilities" element={<ParkingFacilities />} />
            <Route path="/vehicle-Brands" element={<VehicleBrands />} />
            <Route path="vehicle-Models" element={<VehicleModels />} />
            <Route path="/setting-management" element={<Content />} />
            {/* <Route path="/payments" element={<Content />} /> */}
            <Route path="/Parking-Report" element={<PaymentParkingReport />} />
            <Route path="/Booking-Report" element={<ParkingBookingReports />} />
            <Route path="/authorities" element={<Content />} />
            {/* <Route path="/settings" element={<Content />} />  */}
            <Route path="/Global-Settings" element={<GlobalSettings />} />
            <Route path="/Admin-Commission" element={<AdminCommission />} />
            <Route path="/Payment-Method" element={<PaymentMethod />} />
            
          </Routes>
        </AntContent>
      </Layout>
    </Layout>
  );
}

export default DashUI;
