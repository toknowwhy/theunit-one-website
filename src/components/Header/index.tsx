import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link, useLocation } from 'umi';
import styles from './index.less';
import './menu.less';
import * as Links from '@/utils/links';

const { SubMenu } = Menu;

const Header: React.FC = () => {
  const { pathname } = useLocation();

  var skeys: Array<string> = [];
  const path: string = pathname.substring(1);
  if (path.indexOf('about') > -1 || path.indexOf('faq') > -1) {
    skeys.push('learn');
  } else if (path.indexOf('road-map') > -1 || path.indexOf('jobs') > -1) {
    skeys.push('developers');
  }
  skeys.push(path);
  skeys.push('english');

  const menus = Links.menuLinks;

  return (
    <Row className={styles.topMenu} align="middle">
      <Col span={6}>
        <div className={styles.logoWrapper}>
          <img className={styles.logoImg} src="/logo.png" />
          <Link to="/">
            <span className={styles.logoText}>The Unit</span>
          </Link>
        </div>
      </Col>
      <Col span={18}>
        <Menu
          className={styles.pageMenu}
          mode="horizontal"
          selectedKeys={skeys}
        >
          {menus.map((menu) => {
            const key = menu.title.toLowerCase().replaceAll(' ', '');
            return (
              <SubMenu key={key} title={menu.title}>
                {menu.links.map((link, index) => {
                  return (
                    <Menu.Item
                      key={
                        link.external
                          ? `${key}:${index + 1}`
                          : link.link.substring(1)
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
          })}
          <Menu.Item>
            <a href={Links.appUrl} className={styles.enterAppLink}>
              Enter App
            </a>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Header;
