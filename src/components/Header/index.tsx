import React, { useState } from 'react';
import { Menu, Affix } from 'antd';
import { Link, useLocation } from 'umi';
import logo from '@/assets/logo.png';
import styles from './index.less';
import './menu.less';
import ThemeButton from '../ThemeButton';
import CustomIcon from '../CustomIcon';
import earthIcon from '@/assets/ic_round-language.png';
import * as Links from '@/utils/links';

const { SubMenu } = Menu;

const Header: React.FC = () => {
  const [top, setTop] = useState(0);
  const { pathname } = useLocation();

  var skeys: Array<string> = [];
  const path: string = pathname.substring(1);
  if (
    path.indexOf('about') > -1 ||
    path.indexOf('glossary') > -1 ||
    path.indexOf('faq') > -1 ||
    path.indexOf('philosophy') > -1
  ) {
    skeys.push('learn');
  }
  if (path.indexOf('announcements') > -1) {
    skeys.push('community');
  }
  skeys.push(path);
  skeys.push('english');

  return (
    <Affix offsetTop={top}>
      <div className={styles.header}>
        <Link to="/">
          <img alt="logo" className={styles.logo} src={logo} />
        </Link>
        <Menu
          className={styles.pageMenu}
          mode="horizontal"
          selectedKeys={skeys}
        >
          <SubMenu key="applications" title="Index">
            <Menu.Item key="products:2">
              <Link to="/app/index">
                <span className="menu-item-span">The Unit</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="products:1">
              <a href={Links.unitPaperUrl} target="_blank">
                <span className="menu-item-span">The Unit White Paper</span>
              </a>
            </Menu.Item>
            <Menu.Item key="products:4">
              <a href={Links.graphUrl} target="_blank">
                <span className="menu-item-span">The Unit API</span>
              </a>
            </Menu.Item>
            <Menu.Item key="products:3">
              <Link to="/app/swap">
                <span className="menu-item-span">Swap</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="developers" title="Developers">
            <Menu.Item key="road-map">
              <Link to="/road-map">
                <span className="menu-item-span">Road Map</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="developers:1">
              <a href={Links.docsUrl} target="_blank">
                <span className="menu-item-span">Docs</span>
              </a>
            </Menu.Item>
            <Menu.Item key="developers:2">
              <a href={Links.githubUrl} target="_blank">
                <span className="menu-item-span">Github</span>
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="learn" title="Learn">
            <Menu.Item key="about">
              <Link to="/about">
                <span className="menu-item-span">About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="philosophy">
              <a href={Links.valuesUrl} target="_blank">
                <span className="menu-item-span">2ØY's Values</span>
              </a>
            </Menu.Item>
            <Menu.Item key="glossary">
              <Link to="/glossary">
                <span className="menu-item-span">Glossary</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="faq">
              <Link to="/faq">
                <span className="menu-item-span">FAQ</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="community" title="Community">
            <Menu.Item key="announcements">
              <Link to="/announcements">
                <span className="menu-item-span">Announcements</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="community:1">
              <a href={Links.twitterUrl} target="_blank">
                <span className="menu-item-span">Twitter</span>
              </a>
            </Menu.Item>
            <Menu.Item key="community:2">
              <a href={Links.mediumUrl} target="_blank">
                <span className="menu-item-span">Medium</span>
              </a>
            </Menu.Item>
            <Menu.Item key="community:3">
              <a href={Links.discordUrl} target="_blank">
                <span className="menu-item-span">Discord</span>
              </a>
            </Menu.Item>
            <Menu.Item key="community:4">
              <a href={Links.forumUrl} target="_blank">
                <span className="menu-item-span">Forum</span>
              </a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="useApp">
            <Link to="/app/index">
              <ThemeButton>The Unit</ThemeButton>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="connectWallet">
          <ThemeButton  />
        </Menu.Item> */}
          <SubMenu
            className="language-menu"
            icon={<CustomIcon imgSrc={earthIcon} size={20} />}
            key="language"
            title="English"
            popupClassName="language-popup"
          >
            <Menu.Item key="english">
              <span className="menu-item-span">English</span>
            </Menu.Item>
            <Menu.Item key="chinese">
              <span className="menu-item-span">Chinese</span>
            </Menu.Item>
            <Menu.Item key="spanish">
              <span className="menu-item-span">Spanish</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Affix>
  );
};

export default Header;
