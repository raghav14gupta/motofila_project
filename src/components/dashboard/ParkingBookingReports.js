import React, { useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { theme } from "antd";
import hamburder from "../../images/hamburger.png";
import searchicon from "../../images/searchicon.png";
import { Table, Switch, Pagination } from "antd";
import Parkingimg from "../../images/Parkingimg.png";
import editicon from "../../images/editicon.png";
import deleteicon from "../../images/deleteicon.png";
import vehiclemodel from "../../images/vehiclemodel.png";


const ParkingBookingReports = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State for selected row keys
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [pageSize, setPageSize] = useState(10); // State for page size
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
  
    // Function to start loading and simulate async operation
    const start = () => {
      setLoading(true);
      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false);
      }, 1000);
    };
  
    // Function to handle selection change
    const onSelectChange = (selectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      setSelectedRowKeys(selectedRowKeys);
    };
  
    // Define row selection configuration
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      renderCell: (checked, record, index, originNode) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "5px",
            gap: "8px",
          }}
        >
          {originNode}
          <FaSquarePlus style={{ marginRight: "0px" }} />
        </div>
      ),
      columnTitle: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiDeleteBinLine style={{ fontSize: "1.5vw", fontWeight: "500" }} />
          <span style={{ marginLeft: "0.2em" }}>All</span>
        </div>
      ),
    };
  
    // Determine if any rows are selected
    const hasSelected = selectedRowKeys.length > 0;
  
    // Define columns and data
    const columns = [
      {
        title: "Vendor Name",
        className: "headTitle",
        dataIndex: "vname",
        // render: () => <img src={vehiclemodel} alt="img" className="table-image" />,
      },
      {
        title: "Total Payment",
        className: "tabletext",
        dataIndex: "tpayment",
      },
      {
        title: "Individual Payment",
        className: "tabletext",
        dataIndex: "iPayments",
        // render: () => <Switch defaultChecked />,
      },
      {
        title: "Payment Status",
        className: "tabletext",
        dataIndex: "pstatus",
        // render: () => (
        //   <span>
        //     <img src={editicon} alt="edit" />
        //     <img src={deleteicon} alt="delete" />
        //   </span>
        // ),
      },
      {
        title: "Remarks",
        className: "tabletext",
        dataIndex: "remarks",
        // render: () => <Switch defaultChecked />,
      },
    ];
  
    // Sample data
    const data = [
      { vname: `Raghav`,tpayment:"110100/-",ipayments:"10000000/-",pstatus:"Active",remarks:"Pending" },
      { vname: `Honda`, },
      { vname: `Honda`, },
      { vname: `Sun Port`, },
      { vname: `Sun Port`, },
      { vname: `Sun Port`, },
      { vname: `Sun Port`, },
      { vname: `Sun Port`, },
    ];
  
    // Filter data based on search query
    const filteredData = data.filter(item => item.vname.toLowerCase().includes(searchQuery.toLowerCase())); 
  
    // Function to handle page change
    const handlePageChange = (page, pageSize) => {
      setCurrentPage(page);
      setPageSize(pageSize);
    };
  
    // Slicing data for pagination
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize); 
  
    // Custom Pagination Component
    const CustomPagination = ({ currentPage, pageSize, total, onPageChange }) => {
      return (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={onPageChange}
          itemRender={(current, type, originalElement) => {
            if (type === 'prev') {
              return <a>Previous</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          }}
        />
      );
    };
  
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
        <div className='ParkingFacilities_container' style={{ padding: "0px 2vw" }}>
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
             Payout Requests
            </p>
          </div>

          {/* <div className="ParkingList-buttons">
            <span
              className="badge bg-secondary"
              style={{
                padding: "1vw",
                backgroundColor: "rgba(240, 126, 1, 1) !important",
              }}
            >
              <p>
                <img src={hamburder} style={{ marginRight: "2px" }} alt="hamburger" />
                Models List
              </p>
            </span>
            <span
              className="badge bg-primary"
              style={{
                padding: "1vw",
                backgroundColor: "rgba(240, 126, 1, 1) !important",
              }}
            >
              + Add Models
            </span>
          </div> */}

          <div className="userMainContainer_first" style={{ marginTop: "4vh" }}>
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

          <div className="table-container">
            <div style={{ marginBottom: "1rem" }}>
              <span style={{ marginLeft: "0.5rem" }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </span>
            </div>

            <div className="table-wrapper">
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={paginatedData}
                pagination={false}
              />
            </div>
          </div>

          <div
            className="table_bottomLine"
            style={{
              height: "2px",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginTop: "3vh",
            }}
          ></div>

          <CustomPagination
            currentPage={currentPage}
            pageSize={pageSize}
            total={filteredData.length}
            onPageChange={handlePageChange}
          />
        </div>
      </content>
    </>
  )
}

export default ParkingBookingReports