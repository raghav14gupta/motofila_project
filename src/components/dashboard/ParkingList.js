import React, { useState } from "react";
import { Table, Switch } from "antd";
import { theme } from "antd";
import hamburder from "../../images/hamburger.png";
import searchicon from "../../images/searchicon.png";
import Parkingimg from "../../images/Parkingimg.png";
import { FaSquarePlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import CustomPagination from "./CustomPagination";

const ParkingList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State for selected row keys
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Function to start loading and simulate async operation
  const start = () => {
    setLoading(true); // Set loading to true
    // Simulate async operation (e.g., AJAX request) with setTimeout
    setTimeout(() => {
      setSelectedRowKeys([]); // Reset selected row keys
      setLoading(false); // Set loading to false
    }, 1000);
  };

  // Function to handle selection change
  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys); // Update selected row keys state
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
    // {
    //   title: 'All',
    //   className: 'tabletext',
    //   dataIndex: 'all',
    // },
    {
      title: "Image",
      className: "headTitle",
      dataIndex: "image",
      render: () => <img src={Parkingimg} alt="img" className="table-image" />,
    },
    {
      title: "Name",
      className: "tabletext",
      dataIndex: "name",
    },
    {
      title: "User",
      className: "tabletext",
      dataIndex: "user",
    },
    {
      title: "Addres",
      className: "tabletext",
      dataIndex: "address",
    },
  ];

  // Generate sample data
  const data = [ 
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
     { name: `Sun Port`,
  user: "Tom",
  address: `2nd Street, RR Nagar, Bangalore`,

},
];
  
   

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="Parking-Wrapper" style={{ padding: "0px 2vw" }}>
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
            Parking List
          </p>
        </div>

        <div className="ParkingList-buttons">
          <span
            class="badge bg-primary"
            style={{
              padding: "1vw",
              backgroundColor: "rgba(240, 126, 1, 1) !important;",
            }}
          >
            + Add Parking List
          </span>
          {/* <span class="badge bg-secondary"  style={{
              padding: "1vw",
              backgroundColor: "rgba(240, 126, 1, 1) !important;",
            }}>+ Parking List</span> */}
          <span
            class="badge bg-secondary"
            style={{
              padding: "1vw",
              backgroundColor: "rgba(240, 126, 1, 1) !important;",
            }}
          >
            <p>
              <img src={hamburder} style={{ marginRight: "2px" }}></img>Create
              Parking
            </p>
          </span>
        </div>
        <div className="userMainContainer_first" style={{ marginTop: "2vh" }}>
          <div className="userMainContainer_first-entries">
            <span style={{ display: "flex", gap: "1vw", fontSize: "1vw" }}>
              <span>Show</span>
              <span>
                <input
                  type="number"
                  style={{ width: "3vw", paddingLeft: "0.8vw" }}
                ></input>
              </span>
              <span style={{ fontSize: "1vw" }}>entries</span>
            </span>
          </div>

          {/* <div>
            <span
              class="badge bg-primary"
              style={{
                padding: "1vw",
                backgroundColor: "rgba(240, 126, 1, 1) !important;",
              }}
            >
              + Add Parking Prices
            </span>
          </div> */}

          <div className="userMainContainer_first-search">
            <input
              type="text"
              placeholder="Search"
              style={{ padding: "0.7vw", width: "18vw", height: "3vw" }}
            ></input>
            <img src={searchicon} />
          </div>
        </div>

        <div>
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
                dataSource={data}
                pagination={{
                  itemRender: (current, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      },
                }}
                // Ensure horizontal scroll appears when necessary
              />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              height: "2px",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginTop: "3vh",
            }}
          ></div>  
          {/* line below table */}

          <div style={{ display: "flex", gap: "25vw", marginTop: "5vh" }}>
            <p style={{ textAlign: "left", fontSize: "1vw" }}>
              Showing 1 to 3 of 3 entries
            </p>
            {/* <CustomPagination className="custom-pagination" /> */}
          </div>
        </div>
      </content>
    </div>
  );
};

export default ParkingList;
