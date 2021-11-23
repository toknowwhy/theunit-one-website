import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './About.less';
import JoinCommunity from '@/components/JoinCommunity';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <div className={styles.title}>About</div>

      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          The Unit, the crypto-native unit of account
        </div>
        <div className={styles.aboutBody}>
          We are building The Unit because the world demands more equality,
          privacy, liberty, and independence than ever before. We envision a
          future in which we cease to depend on central bank fiat money to
          exchange value as value becomes decentralized and disintermediated.
          The Unit is the first crypto-native unit of account, a
          community-managed index tied to global population data with the
          capacity to become the Metaverse's unit of account.
        </div>

        <div className={styles.aboutTitle} style={{ marginBottom: '60px' }}>
          Join Our Community
        </div>
        <JoinCommunity />
      </div>
    </PageContainer>
  );
};
