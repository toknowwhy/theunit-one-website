import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import discord from '@/assets/discord-normal.png';
import medium from '@/assets/medium-normal.png';
import twitter from '@/assets/twitter-black.png';
import forum from '@/assets/forum.png';
import youtube from '@/assets/youtube.png';
import youtubeActive from '@/assets/youtube-active.png';
import discordActive from '@/assets/discord-active.png';
import mediumActive from '@/assets/medium-active.png';
import twitterActive from '@/assets/twitter-active.png';
import forumActive from '@/assets/forum-active.png';
import * as Links from '@/utils/links';

const JoinCommunity: React.FC = () => {
  return (
    <Row>
      <Col offset={2} xs={12} sm={12} md={4} className={styles.communityImg}>
        <a href={Links.twitterUrl} target="_blank">
          <img src={twitter} />
          <img src={twitterActive} className={styles.activeSocial} />
        </a>
      </Col>
      <Col xs={12} sm={12} md={4} className={styles.communityImg}>
        <a href={Links.mediumUrl} target="_blank">
          <img src={medium} />
          <img src={mediumActive} className={styles.activeSocial} />
        </a>
      </Col>
      <Col xs={12} sm={12} md={4} className={styles.communityImg}>
        <a href={Links.discordUrl} target="_blank">
          <img src={discord} />
          <img src={discordActive} className={styles.activeSocial} />
        </a>
      </Col>
      <Col xs={12} sm={12} md={4} className={styles.communityImg}>
        <a href={Links.forumUrl} target="_blank">
          <img src={forum} />
          <img src={forumActive} className={styles.activeSocial} />
        </a>
      </Col>
      <Col xs={12} sm={12} md={4} className={styles.communityImg}>
        <a href={Links.youtubeUrl} target="_blank">
          <img src={youtube} />
          <img src={youtubeActive} className={styles.activeSocial} />
        </a>
      </Col>
    </Row>
  );
};

export default JoinCommunity;
