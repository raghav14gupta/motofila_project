import React from 'react';
import { Menu } from 'antd';

const { Item } = Menu;

const NavbarMenu = () => {
  return (
   
      <Menu mode="horizontal" defaultSelectedKeys={['']} className="navMenu" style={{display:"flex",alignItems:"center"}}>
        <Item key="1">Parking List</Item>
        <Item key="2">Booked Parking</Item>
        <Item key="3">My Bookings</Item>
        <Item key="4">Vehicle List</Item>
        <Item key="6">Wallet Transactions</Item>
      </Menu>
      
       
     
    
  )
};

export default NavbarMenu;