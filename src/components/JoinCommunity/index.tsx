import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import discord from '@/assets/discord.png';
import medium from '@/assets/medium.png';
import twitter from '@/assets/twitter.png';
import telegram from '@/assets/telegram.png';
import youtube from '@/assets/youtube.png';
import watchUs from '@/assets/watch-now.png';
import readNow from '@/assets/read-now.png';
import followUs from '@/assets/follow-us.png';
import joinUs from '@/assets/join-us.png';
import * as Links from '@/utils/links';

interface CommunityProps {
  showButtons?: boolean;
  showTitle?: boolean;
}

interface SocialMediaType {
  logo: string;
  button: string;
  link: string;
}

const JoinCommunity: React.FC<CommunityProps> = ({
  showButtons = true,
  showTitle = true,
}) => {
  const socialLinks: Array<SocialMediaType> = [
    {
      logo: medium,
      button: readNow,
      link: Links.mediumUrl,
    },
    {
      logo: discord,
      button: joinUs,
      link: Links.discordUrl,
    },
    {
      logo: twitter,
      button: followUs,
      link: Links.twitterUrl,
    },
    {
      logo: telegram,
      button: joinUs,
      link: Links.telegramUrl,
    },
    {
      logo: youtube,
      button: watchUs,
      link: Links.youtubeUrl,
    },
  ];

  return (
    <>
      {showTitle && <div className={styles.title}>Join Our Community</div>}
      <Row>
        {socialLinks.map((link) => {
          <Col
            offset={2}
            xs={12}
            sm={12}
            md={4}
            className={styles.communityImg}
          >
            <a href={link.link} target="_blank">
              <img className={styles.logoImg} src={link.logo} />
              {showButtons && (
                <img className={styles.buttonImg} src={link.button} />
              )}
            </a>
          </Col>;
        })}
      </Row>
    </>
  );
};

export default JoinCommunity;
