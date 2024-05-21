import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import CustomPagination from './CustomPagination';
import {Switch } from 'antd';

const columns = [
  {
    title: 'RFID',
    dataIndex: 'rfid',
    key: 'rfid',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    className: "statusOf",
  },
];

const data = [
  {
    key: '0',
    rfid: '#AS0123',
    date: "25-04-2024",
    address: '2nd Park St, RR Nagar, Bangalore-56',
    status: <Switch defaultChecked />,
  },
  {
    key: '1',
    rfid: '#AD0123',
    date: "25-04-2024",
    address: '2nd Park St, RR Nagar, Bangalore-56',
    status: <Switch defaultChecked />,
  },
];

const Table2 = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        {/* <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">Radio</Radio> */}
      </Radio.Group>

      <Divider />

      <Table
        className="table2"
        style={{ paddingRight: "19vw" }}
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        columns={columns}
        dataSource={data}
        pagination={false} // Disable default pagination
      />
    </div>
  );
};


export default Table2;
