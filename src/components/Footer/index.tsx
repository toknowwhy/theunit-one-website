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

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <div className={styles.footerTitle}>Community</div>
          <Link to="/announcements">Announcements</Link>
          <a target="_blank" href={Links.twitterUrl}>
            Twitter
          </a>
          <a target="_blank" href={Links.mediumUrl}>
            Medium
          </a>
          <a target="_blank" href={Links.discordUrl}>
            Discord
          </a>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div className={styles.footerTitle}>Developers</div>
          <Link to="/road-map">Road Map</Link>
          <a target="_blank" href={Links.docsUrl}>
            Docs
          </a>
          <a target="_blank" href={Links.githubUrl}>
            Github
          </a>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div className={styles.footerTitle}>About</div>
          <Link to="/about">About 2ØY</Link>
          <a target="_blank" href={Links.valuesUrl}>
            2ØY's Values
          </a>
          <Link to="/jobs">Careers</Link>
          <Link to="/faq">FAQ</Link>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div className={styles.footerTitle}>Index</div>
          <Link to="/app/index">The Unit</Link>
          <a href={Links.unitPaperUrl} target="_blank">
            The Unit White Paper
          </a>
          <a href={Links.graphUrl} target="_blank">
            The Unit API
          </a>
          <a href="/app/swap">Swap</a>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Row className={styles.socialLinks}>
            <Col span={4}>
              <a target="_blank" href={Links.twitterUrl}>
                <img style={{ width: '25px' }} src={twitter} />
              </a>
            </Col>
            <Col span={4}>
              <a target="_blank" href={Links.mediumUrl}>
                <img src={medium} />
              </a>
            </Col>
            <Col span={4}>
              <a target="_blank" href={Links.discordUrl}>
                <img src={discord} />
              </a>
            </Col>
            <Col span={4}>
              <a target="_blank" href={Links.forumUrl}>
                <img style={{ width: '25px' }} src={forum} />
              </a>
            </Col>
            <Col span={4}>
              <a target="_blank" href={Links.youtubeUrl}>
                <img style={{ width: '28px' }} src={youtube} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <img className={styles.logoImg} src={logo} />
    </div>
  );
};

export default Footer;
