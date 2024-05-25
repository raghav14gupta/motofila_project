import React, { useState } from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { theme } from "antd";
import hamburder from "../../images/hamburger.png";
import searchicon from "../../images/searchicon.png";
import { Table, Switch } from "antd";
import Parkingimg from "../../images/Parkingimg.png";
import editicon from "../../images/editicon.png"
import deleteicon from "../../images/deleteicon.png"
const ParkingFacilities = () => {

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
      title: "Status",
      className: "tabletext",
      dataIndex: "user",
      render: () => <Switch defaultChecked />,
    },
    {
      title: "Actions",
      className: "tabletext",
      dataIndex: "actions",
      render: ()=><span>
        <img src={editicon}></img>
        <img src={deleteicon}></img>

      </span>
        

        
      
    },
  ];

  // Generate sample data
  const data = [ 
   
     { name: `Allocated Area`,
  actions:"",
},
     { name: `Sun Port`,
     actions:"",
},
     { name: `Sun Port`,
     actions:"",

},
     { name: `Sun Port`,
     actions:"",
},
     { name: `Sun Port`,
     actions:"",

},
     { name: `Sun Port`,
     actions:"",

},
     { name: `Sun Port`,
     actions:"",

},
     { name: `Sun Port`,
  actions:"",

},
];
  
   

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
          Parking Facilities
          </p>
        </div>

        <div className="ParkingList-buttons">
          <span
            class="badge bg-secondary"
            style={{
              padding: "1vw",
              backgroundColor: "rgba(240, 126, 1, 1) !important;",
            }}
          >
            <p>
              <img src={hamburder} style={{ marginRight: "2px" }}></img>
              Add Facility
            </p>
          </span>
          <span
            class="badge bg-primary"
            style={{
              padding: "1vw",
              backgroundColor: "rgba(240, 126, 1, 1) !important;",
            }}
          >
            + Add Facilities List
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
     </content>
   </>
  )
}

export default ParkingFacilities;