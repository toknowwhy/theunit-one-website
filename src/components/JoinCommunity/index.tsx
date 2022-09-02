import React from 'react';
import { Row, Col } from 'antd';
import discord from '@/assets/discord.png';
import medium from '@/assets/medium.png';
import twitter from '@/assets/twitter.png';
import telegram from '@/assets/telegram.png';
import youtube from '@/assets/youtube.png';
import discordSmall from '@/assets/discord-small.png';
import mediumSmall from '@/assets/medium-small.png';
import twitterSmall from '@/assets/twitter-small.png';
import telegramSmall from '@/assets/telegram-small.png';
import youtubeSmall from '@/assets/youtube-small.png';
import * as Links from '@/utils/links';
import styles from './index.less';
import LineButton from '../LineButton';

interface CommunityProps {
  showButtons?: boolean;
  showTitle?: boolean;
}

interface SocialMediaType {
  logo: string;
  button: string;
  link: string;
  imgWidth: number;
  margin: number;
  top: number;
}

const JoinCommunity: React.FC<CommunityProps> = ({
  showButtons = true,
  showTitle = true,
}) => {
  const socialLinks: Array<SocialMediaType> = [
    {
      logo: !showButtons ? mediumSmall : medium,
      button: 'Read Now',
      link: Links.mediumUrl,
      imgWidth: 63,
      margin: 36,
      top: 28,
    },
    {
      logo: !showButtons ? discordSmall : discord,
      button: 'Join Us',
      link: Links.discordUrl,
      imgWidth: 44,
      margin: 29,
      top: 20,
    },
    {
      logo: !showButtons ? twitterSmall : twitter,
      button: 'Follow Us',
      link: Links.twitterUrl,
      imgWidth: 51,
      margin: 33,
      top: 24,
    },
    {
      logo: !showButtons ? telegramSmall : telegram,
      button: 'Join Us',
      link: Links.telegramUrl,
      imgWidth: 44,
      margin: 33,
      top: 27,
    },
    {
      logo: !showButtons ? youtubeSmall : youtube,
      button: 'Watch Now',
      link: Links.youtubeUrl,
      imgWidth: 46,
      margin: 35,
      top: 29,
    },
  ];

  return (
    <>
      {showTitle && <div className={styles.title}>Join Our Community</div>}
      <Row gutter={{ xs: 13, sm: 36 }}>
        {socialLinks.map((link, index) => {
          const imgStyle = {
            width: !showButtons ? '48px' : `${link.imgWidth}px`,
            marginBottom: !showButtons ? '0' : `${link.margin}px`,
            marginTop: !showButtons ? '0' : `${link.top}px`,
          };
          return (
            <Col
              key={index}
              xs={{ span: !showButtons ? 4 : 24, offset: 0 }}
              sm={{ span: !showButtons ? 4 : 12, offset: 0 }}
              md={{ span: !showButtons ? 4 : 4, offset: index == 0 ? 2 : 0 }}
              className={styles.communityImg}
            >
              <a className={styles.imgWrapper} href={link.link} target="_blank">
                <img
                  style={imgStyle}
                  className={styles.logoImg}
                  src={link.logo}
                />
                {showButtons && <LineButton small>{link.button}</LineButton>}
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default JoinCommunity;
