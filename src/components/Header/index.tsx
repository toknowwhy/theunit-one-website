import React, { useState } from 'react';
import { Menu, Row, Col, Drawer } from 'antd';
import { Link, useLocation } from 'umi';
import styles from './index.less';
import './menu.less';
import * as Links from '@/utils/links';
import menu from '@/assets/menu.png';

const { SubMenu } = Menu;

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  var skeys: Array<string> = [];
  const path: string = pathname.substring(1);
  if (path.indexOf('about') > -1 || path.indexOf('faq') > -1) {
    skeys.push('learn');
  } else if (path.indexOf('road-map') > -1 || path.indexOf('jobs') > -1) {
    skeys.push('developers');
  }
  skeys.push(path);
  skeys.push('english');

  const menus = Links.menuLinks.map((menu) => {
    const key = menu.title.toLowerCase().replaceAll(' ', '');
    return (
      <SubMenu key={key} title={menu.title} popupOffset={[-3, -1]}>
        {menu.links.map((link, index) => {
          return (
            <Menu.Item
              key={
                link.external ? `${key}:${index + 1}` : link.link.substring(1)
              }
            >
              {link.external ? (
                <a href={link.link} target="_blank">
                  <span className="menu-item-span">{link.name}</span>
                </a>
              ) : (
                <Link to={link.link}>
                  <span className="menu-item-span">{link.name}</span>
                </Link>
              )}
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  });

  return (
    <Row className={styles.topMenu} align="middle">
      <Col xs={18} sm={18} md={18} lg={4}>
        <div className={styles.logoWrapper}>
          <img className={styles.logoImg} src="/logo.png" />
          <Link to="/">
            <span className={styles.logoText}>The Unit</span>
          </Link>
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={20}>
        <Menu
          className={styles.pageMenu}
          mode="horizontal"
          selectedKeys={skeys}
        >
          {menus.map((menu) => menu)}
          <Menu.Item>
            <a href={Links.appUrl} className={styles.enterAppLink}>
              Enter App
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col xs={6} sm={6} md={6} lg={0}>
        <div
          className={styles.menuIconWrapper}
          onClick={() => {
            setVisible(true);
          }}
        >
          <img src={menu} />
        </div>
        <Drawer
          title=""
          placement="right"
          width={320}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            className={styles.mobileMenu}
            mode="inline"
            selectedKeys={skeys}
            defaultOpenKeys={['theunit']}
          >
            {menus.map((menu) => menu)}
          </Menu>
        </Drawer>
      </Col>
    </Row>
  );
};

export default Header;
