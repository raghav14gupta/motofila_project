import React, { useState } from 'react';
import { ConfigProvider, Table, Switch, Divider } from 'antd';

const customizeRenderEmpty = () => (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <p style={{color:"rgba(53, 65, 91, 1)",fontSize:"1.4vw"}}>No Records Found</p>
    </div>
  );

const NoDataTable = () => {

   const [customize, setCustomize] = useState(true);

  return (
    <>
     
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Table
         className="custom-table"
          style={{
            marginTop: 18,
            borderRadius:"none"
          }}
          columns={[
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Payment Method',
              dataIndex: 'paymentMethod',
              key: 'paymentMethod',
            },
            {
              title: 'Txn ID',
              dataIndex: 'txnID',
              key: 'txnID',
            },
            {
              title: 'Date',
              dataIndex: 'date',
              key: 'date',
            },
            {
              title: 'Note',
              dataIndex: 'note',
              key: 'note',
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
              key: 'amount',
            },
          ]}
          dataSource={[]}
        />
      </ConfigProvider>
    </>
  );
}

export default NoDataTable;