import React, { useState } from 'react';
import { Table, Button, Switch } from 'antd';
import ".././App.css"
import { Pagination } from 'antd';
import CustomPagination from './dashboard/CustomPagination';
import { style } from 'd3';
import tableimage1 from "../images/tableimage1.png"
// import tableimage1 from "../../images/tableimage1.png";


const Table1 = () => {
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
      title: 'All',
      className: 'tabletext',
      dataIndex: 'all',
    },
    {
      title: 'Image',
      className: 'headTitle',
      dataIndex: 'image',
      render: () => <img src={tableimage1} alt="img" className="table-image" />,
    },
    {
      title: 'Name',
      className: 'tabletext',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      className: 'tabletext',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      className: 'tabletext',
      dataIndex: 'phone',
    },
    {
      title: 'Date',
      className: 'tabletext',
      dataIndex: 'date',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      render: () => <Switch defaultChecked />,
    },
    {
      title: 'Total Bookings',
      dataIndex: 'totalbookings',
      className: 'totalbookingText tabletext',
    },
  ];

  // Generate sample data
  const data = [];
  for (let i = 1; i <= 7; i++) {
    data.push({
      key: i,
      all: `${i}`,
      name: `Raghav Gupta ${i}`,
      email: 'demo@gmail.com',
      phone: `1234567899 ${i}`,
      date: '16/05/2024',
      active: <Switch defaultChecked />,
      totalbookings: '5',
    });
  }

  return (
    <div className="table-container">
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ marginLeft: '0.5rem' }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div className="table-wrapper">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
         // Ensure horizontal scroll appears when necessary
        />
      </div>
    </div>
  );
};
export default Table1;