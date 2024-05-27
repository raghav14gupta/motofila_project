import React, { useState } from "react";
import { theme } from "antd";
import searchicon from "../../images/searchicon.png";
import razorpay from "../../images/Razorpay.png"
import paytm from "../../images/PayTm.png"
const PaymentParkingReport = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State for selected row keys
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [pageSize, setPageSize] = useState(10); // State for page size
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const splitDateTime = (datetime) => {
        const [datePart, timePart,shift] = datetime.split(" ", 3);
        return { datePart, timePart,shift };
      };
      const datetime = "26-03-2024 12:00 PM";
      const { datePart, timePart,shift } = splitDateTime(datetime);

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
      <div className="Payment_container">

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
             Users Wallet Transactions
            </p>
          </div>

          <div className="userMainContainer_first" style={{ margin: "6vh 5vw" }}>
            <div className="userMainContainer_first-entries">
              <span style={{ display: "flex", gap: "1vw", fontSize: "1vw" }}>
                <span>Show</span>
                <span>
                  <input
                    type="number"
                    style={{ width: "4vw", paddingLeft: "0.8vw" }}
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  />
                </span>
                <span style={{ fontSize: "1vw" }}>entries</span>
              </span>
            </div>

            <div className="userMainContainer_first-search">
              <input
                type="text"
                placeholder="Search"
                style={{ padding: "0.7vw", width: "18vw", height: "3vw" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img src={searchicon} alt="search" />
            </div>
          </div>

          <div className="table-responsive m-3 mt-4" style={{width: "100vw !important",}} >
        <table class="table table-striped" style={{width: "100vw !important",}}>
          <thead className="table-dark table-change" style={{width: "100vw !important",}}>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Note</th>
              <th scope="col">Date</th>
              
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "500",
                created: "",
                status:"Proceed",
                note:"Parking Amount",
                image:razorpay
              },
              {
                id: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "300",
                created: "26-03-2024 12:00 PM",
                status:"Proceed",
                note:"Parking Amount",
                image:paytm
              },
              {
                id: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "300",
                created: "26-03-2024 12:00 PM",
                status:"Proceed",
                note:"Parking Amount",
                image:paytm
              },
              {
                id: "Top Sun",
                name: "Tom",
                time: "2",
                slot: "A-5",
                amount: "300",
                created: "26-03-2024 12:00 PM",
                status:"Proceed",
                note:"Parking Amount",
                image:paytm
              },
            ].map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img src={item.image}></img></td>
                  <td>{item.amount}</td>
                  <td>{item.note}</td>
                  <td>
                    {" "}
                    <div>
                      <p className="m-0">{datePart}</p>
                      <span className="m-0">{timePart} {shift}</span>
                     
                    </div>
                  </td>
                
                  
                </tr>
              );
            })}
            {/* <tr>
        <td scope="row">Om Parking</td>
        <td>Zen</td>
        <td>2 Hours</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td scope="row">Top Sun</td>
        <td colspan="2">Tom</td>
        <td>2 Hours</td>
      </tr> */}
          </tbody>
        </table>
      </div>

      </div>
     </content>
    

    </>
  );
};

export default PaymentParkingReport;
