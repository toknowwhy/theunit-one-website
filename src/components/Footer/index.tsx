import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import * as Links from '@/utils/links';
import JoinCommunity from '../JoinCommunity';

const Footer: React.FC = () => {
  const menus = Links.menuLinks;

  return (
    <div className={styles.footer}>
      <Row>
        {menus.map((menu, index) => {
          return (
            <Col key={index} xs={12} sm={12} md={4} className={styles.linkCol}>
              <div className={styles.footerTitle}>{menu.title}</div>

              {menu.links.map((link, idx) => {
                return link.external ? (
                  <a
                    className={styles.footerLink}
                    target="_blank"
                    href={link.link}
                    key={index.toString() + idx}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={index.toString() + idx}
                    className={styles.footerLink}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
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
