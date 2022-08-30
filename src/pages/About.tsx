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
          UNIT, an unbiased unit of account
        </div>
        <Row justify="end">
          <Col>
            <div className={styles.aboutBody}>
              UNIT is the first index-based pure unit of account, a
              community-managed benchmark tied to global population data. UNIT’s
              unbiased measure of value makes it a prime candidate to take on
              the new era. We envision a future in which we cease to depend on
              central bank fiat money to exchange value as value becomes
              increasingly more decentralized and disintermediated. set.
              <br />
              <br />
              UNIT is a benchmark that serves two purposes. First, it serves as
              an index similar to the S&P500 to benchmark portfolios. However,
              UNIT is also a unit of value. Without being a currency, UNIT is
              used to price coins accurately. The Unit is a changing set of top
              cryptocurrencies and algorithmically creates UNIT, which tracks
              the performance of the set.
              <br />
              <br />
              UNIT (value unit created by The Unit) cannot be bought or sold.
              However, we are also creating a UNIT (token) to hold the value
              contained in the unit of account.
            </div>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};
