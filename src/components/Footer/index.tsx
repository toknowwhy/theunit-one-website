import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import discord from '@/assets/discord-black.png';
import medium from '@/assets/medium-black.png';
import twitter from '@/assets/twitter-small.png';
import forum from '@/assets/forum-small.png';
import logo from '@/assets/logo.png';
import youtube from '@/assets/youtube-small.png';
import * as Links from '@/utils/links';
import JoinCommunity from '../JoinCommunity';

const Footer: React.FC = () => {
  const menus = Links.menuLinks;

  return (
    <div className={styles.footer}>
      <Row>
        {menus.map((menu) => {
          return (
            <Col xs={12} sm={12} md={4} className={styles.linkCol}>
              <div className={styles.footerTitle}>{menu.title}</div>

              {menu.links.map((link) => {
                return link.external ? (
                  <a target="_blank" href={link.link}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.link}>{link.name}</Link>
                );
              })}
            </Col>
          );
        })}
        <Col xs={24} sm={24} md={8} className={styles.joinCol}>
          <JoinCommunity showButtons={false} showTitle={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
