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
  getItem(<a href='/admin'>Home</a>, 'link', <HomeFilled/>),
  getItem('Products', '2', <ProjectOutlined />, [
    getItem('All Products', 'link', [<a href='/admin/products'>All Products</a>]),
    getItem('Add Product', 'link', [<a href='/admin/products/add'>Add Product</a>]),
    getItem('Categories', 'link', [<a href='/admin/products/categories'>All Products</a>]),
  ]),
  getItem(<a href=''>Services</a>, '3', <HomeFilled/>),
  getItem(<a href=''>Blog</a>, '3.1', <HomeFilled/>),
  getItem('Contact', '4', <LinkOutlined />, [
    getItem('Email', '4.1', null, [<a href='mailto:contact@example.com'>contact@example.com</a>]),
    getItem('Phone', '4.2', null, [<span>(123) 456-7890</span>]),
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
      >
        {items.map((item) => {
          if (item.children) {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key} children={child.children}>
                    {child.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            )
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon} children={item.children}>
                {item.label}
              </Menu.Item>
            )
          }
        })}
      </Menu>
    </>
  );
};

export default MenuAdmin;
