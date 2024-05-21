import React from 'react';
import { Pagination } from 'antd';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a style={{color:"rgba(232, 162, 25, 1)"}}>Previous</a>;
  }
  if (type === 'next') {
    return <a style={{color:"rgba(232, 162, 25, 1)"}}>Next</a>;
  }
  return originalElement;
};

const CustomPagination = ({ className, style }) => (
  <Pagination total={30} itemRender={itemRender} className={className} style={style} />
);
export default CustomPagination;
