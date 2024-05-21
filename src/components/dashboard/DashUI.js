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
              icon: <img src={user} alt="user" />,
              label: <Link to="/user">User</Link>,
            },
            {
              key: "4",
              icon: <img src={vendor} alt="vendor" />,
              label: <Link to="/vendor">Vendor</Link>,
            },
            {
              key: "5",
              icon: <img src={report} alt="report" />,
              label: <Link to="/report">Report</Link>,
              children: [{ label: "option1" }],
            },
            {
              key: "6",
              label: <Link to="/parking-management">Parking Management</Link>,
            },
            {
              key: "7",
              icon: <img src={plist} alt="plist" />,
              label: <Link to="/parking-list">Parking List</Link>,
            },
            {
              key: "8",
              icon: <img src={pbooking} alt="pbooking" />,
              label: <Link to="/parking-bookings">Parking Bookings</Link>,
            },
            {
              key: "9",
              icon: <img src={pfacility} alt="pfacility" />,
              label: <Link to="/parking-facilities">Parking Facilities</Link>,
            },
            {
              key: "10",
              icon: <img src={psetting} alt="psetting" />,
              label: <Link to="/vehicle-settings">Vehicle Settings</Link>,
              children: [{
                label: "option1",
                style: { backgroundColor: "rgba(53, 65, 91, 1)" }
              }],
            },
            {
              key: "11",
              label: <Link to="/setting-management">Setting Management</Link>,
            },
            {
              key: "12",
              icon: <img src={payment} alt="payment" />,
              label: <Link to="/payments">Payments</Link>,
              children: [{ label: "option1" }],
            },
            {
              key: "13",
              icon: <img src={authority} alt="authority" />,
              label: <Link to="/authorities">Authorities</Link>,
            },
            {
              key: "14",
              icon: <img src={setting} alt="setting" />,
              label: (
                <Link to="/settings">
                  Settings
                </Link>
              ),
              children: [{
                key: "14",
                label: "option1",
                className: collapsed ? "collapsed-settings" : "expanded-settings",
                style: { backgroundColor: "rgba(53, 65, 91, 1)" }
              }]
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
            <Route path="/" element={<Content3 />} />
            <Route path="/account-management" element={<Content2 />} />
            <Route path="/user" element={<Content3 />} />
            <Route path="/vendor" element={<Content />} />
            <Route path="/report" element={<Content3 />} />
            <Route path="/parking-management" element={<Content4 />} />
            <Route path="/parking-list" element={<Content />} />
            <Route path="/parking-bookings" element={<Content />} />
            <Route path="/parking-facilities" element={<Content />} />
            <Route path="/vehicle-settings" element={<Content />} />
            <Route path="/setting-management" element={<Content />} />
            <Route path="/payments" element={<Content />} />
            <Route path="/authorities" element={<Content />} />
            <Route path="/settings" element={<Content />} />
          </Routes>
        </AntContent>
      </Layout>
    </Layout>
  );
}

export default DashUI;
