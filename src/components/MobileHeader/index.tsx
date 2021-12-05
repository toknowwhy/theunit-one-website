import React, { useState } from 'react';
import { Link, history } from 'umi';
import { NavBar, Accordion, List } from 'antd-mobile';
import styles from './index.less';
import menuIcon from '@/assets/menu.png';
import closeIcon from '@/assets/close.png';
import './menu.less';
import * as Links from '@/utils/links';

const MobileHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [langVisible, setLangVisible] = useState(false);

  const onSelect = (opt: any) => {
    setVisible(!visible);
  };

  const handleLangVisibleChange = (visible: boolean) => {
    setLangVisible(visible);
  };

  const onLangSelected = (lang: string) => {};

  const onLinkTapped = (link: string) => {
    setVisible(false);
    if (link.indexOf('http') == 0) {
      window.open(link, '_blank');
    } else {
      history.push(link);
    }
  };

  const menus = Links.menuLinks;

  return (
    <div>
      <div className="mobile-header-wrapper">
        <NavBar
          mode="light"
          leftContent={
            <Link to="/">
              <img src="/logo.png" className={styles.logo} />
            </Link>
          }
          rightContent={
            <div className={styles.actions}>
              <button onClick={onSelect} className={styles.menuButton}>
                {visible ? <img src={closeIcon} /> : <img src={menuIcon} />}
              </button>
            </div>
          }
        ></NavBar>
      </div>
      <div className="mobile-submenu-wrapper">
        <Accordion className={'menu-accordion' + (visible ? ' show' : '')}>
          {menus.map((menu) => {
            const key = menu.title.toLowerCase().replaceAll(' ', '');
            return (
              <Accordion.Panel header={menu.title} className="pad">
                <List className="my-list">
                  {menu.links.map((link) => {
                    return (
                      <List.Item
                        key={link.link.substring(1)}
                        onClick={() => onLinkTapped(link.link)}
                      >
                        {link.name}
                      </List.Item>
                    );
                  })}
                </List>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default MobileHeader;
