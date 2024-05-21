import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${""}`,
      };
    }),
  };
});

const SubNav = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        height: '100%',
        borderRight: 0,
      }}
    >
      {items2.map(item => (
        <SubMenu key={item.key} icon={item.icon} title={item.label}>
          {item.children.map(child => (
            <Menu.Item key={child.key}>{child.label}</Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default SubNav;
