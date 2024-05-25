import React, { useState } from 'react'
import { Table,  Switch } from 'antd';
// import ".././App.css"
// import { Pagination } from 'antd';
// import CustomPagination from '.././dashboard/CustomPagination';
// import { style } from 'd3';
import tableimage1 from "../../images/tableimage1.png"

const VendorsTable2 = () => {
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
  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys); // Update selected row keys state
  };

  // Define row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Determine if any rows are selected
  const hasSelected = selectedRowKeys.length > 0;

  // Define columns and data
  const columns = [
    {
      title: 'SI No.',
      className: 'tabletext',
      dataIndex: 'sino',
    },
    {
      title: 'Parking Name',
      className: 'headTitle',
      dataIndex: 'pname',
    //   render: () => <img src={tableimage1} alt="img" className="table-image" />,
    },
    {
      title: 'Vendor Name',
      className: 'tabletext',
      dataIndex: 'vname',
    },
    {
      title: 'Vehicle',
      className: 'tabletext',
      dataIndex: 'vehicle',
    },
    {
      title: 'Price',
      className: 'tabletext',
      dataIndex: 'price',
    },
   
    
  ];

  // Generate sample data
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      key: i,
      sino: `${i}`,
      pname: `Johnsen parking`,
      vname: 'Shubam jena',
      vehicle: `2 wheelers`,
      price: 'RS. 50/-',
    //   active: <Switch defaultChecked />,
    //   totalbookings: '5',
    });
  }

  return (
    <>
 <div className="table-container">
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ marginLeft: '0.5rem' }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div className="table-wrapper">
        <Table
        //   rowSelection={rowSelection}  //checkbox will be removed from column
          columns={columns}
          dataSource={data}
          pagination={false}
         // Ensure horizontal scroll appears when necessary
        />
      </div>
    </div>
    </>
  )
}

export default VendorsTable2;