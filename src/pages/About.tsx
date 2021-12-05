import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './About.less';
import aboutImg from '@/assets/about-img.png';
import { Col, Row } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer className={styles.pageContainerBgd}>
      <div
        className={styles.pageContainer}
        style={{ position: 'relative', paddingBottom: '300px' }}
      >
        <img className={styles.aboutImg} src={aboutImg} />

        <div className={styles.singlePageTitle}>About</div>

        <div className={styles.aboutTitle}>
          The Unit, the crypto-native algorithmic unit of account
        </div>
        <Row justify="end">
          <Col>
            <div className={styles.aboutBody}>
              The Unit is the first crypto-native algorithmic unit of account, a
              community-managed benchmark tied to global population data aimed
              at becoming the Metaverse's unit of account. We are building The
              Unit because the world demands more equality, privacy, liberty,
              and independence than ever before. We envision a future in which
              we cease to depend on central bank fiat money to exchange value as
              value becomes increasingly more decentralized and
              disintermediated.
              <br />
              <br />
              The Unit is a benchmark that serves two purposes. First, it serves
              as an index similar to the S&P500 to benchmark portfolios.
              However, The Unit is also a unit of value. Without being a
              currency, The Unit is used to price coins most accurately. The
              Unit follows a changing set of top cryptocurrencies and
              algorithmically creates a unit that tracks the performance of the
              set.
              <br />
              <br />A unit (value unit created by The Unit) cannot be bought or
              sold, but alongside The Unit, we will launch an index fund
              following The Unit's performance. Synthetic units will then be
              available for contributors to the fund's pool.
            </div>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};
