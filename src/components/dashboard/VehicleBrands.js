import React, { useState, useEffect } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { RiDeleteBinLine } from 'react-icons/ri';
import { theme } from 'antd';
import hamburder from '../../images/hamburger.png';
import searchicon from '../../images/searchicon.png';
import { Table, Switch, Input } from 'antd';
import editicon from '../../images/editicon.png';
import deleteicon from '../../images/deleteicon.png';
import { Pagination } from 'antd';

const { Search } = Input;

const VehicleBrands = () => {
  const initialData = [
    { name: `Honda`, actions: '' },
    { name: `Honda`, actions: '' },
    { name: `Honda`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Honda`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
    { name: `Sun Port`, actions: '' },
  ];

  const [data, setData] = useState(initialData); // State for table data
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [pageSize, setPageSize] = useState(5); // State for page size
  const [searchText, setSearchText] = useState(''); // State for search text

  useEffect(() => {
    // Update data when search text changes
    const filteredData = initialData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchText]);

  // Pagination change handler
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Row selection
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    renderCell: (checked, record, index, originNode) => (
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '5px', gap: '8px' }}>
        {originNode}
        <FaSquarePlus style={{ marginRight: '0px' }} />
      </div>
    ),
    columnTitle: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RiDeleteBinLine style={{ fontSize: '1.5vw', fontWeight: '500' }} />
        <span style={{ marginLeft: '0.2em' }}>All</span>
      </div>
    ),
  };

  const hasSelected = selectedRowKeys.length > 0;

  const columns = [
    {
      title: 'Name',
      className: 'tabletext',
      dataIndex: 'name',
    },
    {
      title: 'Status',
      className: 'tabletext',
      dataIndex: 'user',
      render: () => <Switch defaultChecked />,
    },
    {
      title: 'Actions',
      className: 'tabletext',
      dataIndex: 'actions',
      render: () => (
        <span>
          <img src={editicon} alt="edit" />
          <img src={deleteicon} alt="delete" />
        </span>
      ),
    },
  ];

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
          margin: '5px 6px',
          padding: '0px !important',
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflowY: 'auto',
        }}
      >
        <div className='ParkingFacilities_container' style={{ padding: '0px 2vw' }}>
          <div className='toptext'>
            <p
              style={{
                fontSize: '1.8vw',
                lineHeight: '1vw',
                fontFamily: 'poppins',
                fontWeight: '500',
                padding: '0.8vw 2vw',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Vehicle Settings
            </p>
          </div>

          <div className='ParkingList-buttons'>
            <span
              className='badge bg-secondary'
              style={{
                padding: '1vw',
                backgroundColor: 'rgba(240, 126, 1, 1) !important;',
              }}
            >
              <p>
                <img src={hamburder} style={{ marginRight: '2px' }} alt="hamburger" />
                Brand List
              </p>
            </span>
            <span
              className='badge bg-primary'
              style={{
                padding: '1vw',
                backgroundColor: 'rgba(240, 126, 1, 1) !important;',
              }}
            >
              + Add Brand
            </span>
          </div>

          <div className='userMainContainer_first' style={{ marginTop: '2vh' }}>
            <div className='userMainContainer_first-entries'>
              <span style={{ display: 'flex', gap: '1vw', fontSize: '1vw' }}>
                <span>Show</span>
                <span>
                  <input
                    type='number'
                    style={{ width: '4vw', paddingLeft: '0.8vw' }}
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  />
                </span>
                <span style={{ fontSize: '1vw' }}>entries</span>
              </span>
            </div>

            <div className='userMainContainer_first-search'>
              <Search
                placeholder='Search'
                style={{ width: '18vw' }}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {/* <img src={searchicon} alt="search" style={{ marginLeft: '10px', height: '20px', width: '20px' }} /> */}
            </div>
          </div>

          <div className='table-container'>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ marginLeft: '0.5rem' }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>

            <div className='table-wrapper'>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </div>
          </div>

          <div
            className='table_bottomLine'
            style={{
              height: '2px',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              marginTop: '3vh',
            }}
          ></div>

          <CustomPagination
            currentPage={currentPage}
            pageSize={pageSize}
            total={initialData.length}
            onPageChange={handlePageChange}
          />
        </div>
      </content>
    </>
  );
};

export default VehicleBrands;
