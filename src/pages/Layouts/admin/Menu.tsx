import React, { useState } from 'react';
import {
  ProjectOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
// import img from '../../../../public/Twitter-logo.svg.webp'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<a href='/admin'>Home</a>, 'link', <MailOutlined/>),
  getItem(<a href='/admin/products'>Products</a>,'link', <ProjectOutlined />,),
//   getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem(<a href="" target="_blank" rel="noopener noreferrer">Contact</a>, 'link', <LinkOutlined />,),
];
type Props = {}

const MenuAdmin = (props: Props) => {

  return (
    <>
      {/* <img src={img} alt="" width={'100px'}/> */}
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
      />
    </>
  )
}

export default MenuAdmin;