import React, { useState } from 'react';
import {
  HomeFilled,
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
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  href?: string,
): MenuItem {
  const itemProps: MenuItem = {
    key,
    icon,
    children,
    type,
  };
  if (href) {
    itemProps.label = (
      <a href={href}>
        {icon}
        <span>{label}</span>
      </a>
    );
  } else {
    itemProps.label = (
      <>
        {icon}
        <span>{label}</span>
      </>
    );
  }
  return itemProps;
}

const items: MenuItem[] = [
  getItem('Home', '1', <HomeFilled/>, undefined, undefined, '/admin'),
  getItem('Products', '2', <ProjectOutlined />, [
    getItem('All Products', '2.1', null, undefined, undefined, '/admin/products'),
    getItem('Add Product', '2.2', null, undefined, undefined, '/admin/products/add'),
    getItem('All Categories', '2.3', null, undefined, undefined, '/admin/categories'),
    getItem('Add Categories', '2.4', null, undefined, undefined, '/admin/categories/add_categories'),
  ]),
  getItem('Services', '3', <HomeFilled/>, undefined, undefined, ''),
  getItem('Blog', '3.1', <HomeFilled/>, undefined, undefined, ''),
  getItem('Contact', '4', <LinkOutlined />, [
    getItem('Email', '4.1', null, undefined, undefined, 'mailto:contact@example.com'),
    getItem('Phone', '4.2', null, undefined, undefined, ''),
  ]),
];


const MenuAdmin = () => {
  const [theme, setTheme] = useState<MenuTheme>('light');
  
  return (
    <>
      {/* <Switch
        checked={theme === 'dark'}
        onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{ marginBottom: 16 }}
      /> */}
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['2']}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default MenuAdmin;