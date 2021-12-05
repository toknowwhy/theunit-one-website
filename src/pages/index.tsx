import { PageContainer } from '@ant-design/pro-layout';
import ThemeButton from '@/components/ThemeButton';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import { getFeatures, FeatureType } from '@/utils/constants';
import { Fade } from 'react-awesome-reveal';
import { appUrl } from '@/utils/links';
import JoinCommunity from '@/components/JoinCommunity';
import styles from './index.less';
import enterApp from '@/assets/enter-app.svg';
import table from '@/assets/table.png';
import unitValue from '@/assets/unit-of-value.png';

export default function IndexPage() {
  const features = getFeatures();
  return (
    <PageContainer>
      <Row className={styles.top} align="middle">
        <Col xs={24} sm={24} md={10}>
          <div className={styles.title}>
            <span className={styles.themeSpan}>The Unit</span> <br />
            Crypto-Native
            <br />
            Benchmark
          </div>
          <div className={styles.subtitle}>
            USD is hyperinflating. Why does crypto still depend on USD as
            benchmark?
          </div>
          <a href={appUrl}>
            <img src={enterApp} />
          </a>
        </Col>
        <Col xs={24} sm={24} md={14} className={styles.chart}>
          <iframe src="http://localhost:8000/iframe" />
        </Col>
      </Row>

      <div className={styles.unitDesc}>
        The Unit is the decentralized, community-managed and crypto-native
        benchmark for both consumers and investors in the metaverse.
      </div>

      <Fade direction="up" cascade triggerOnce>
        <Row className={styles.features} gutter={{ xs: 13, sm: 72 }}>
          {features.slice(0, 3).map((row: FeatureType, index: number) => (
            <Col xs={24} sm={24} md={8} className={styles.feature}>
              <div className={styles.allFeaturesWrapper}>
                <div className={styles.featureTitle}>{row.title}</div>
                <div className={styles.featureDesc}>{row.description}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.tableRowWrapper}>
          <Row className={styles.tableRow} gutter={{ xs: 13, sm: 82 }}>
            <Col span={9} className={styles.tableContentCol}>
              <div className={styles.pageTitle}>The Unit as an Index</div>
              <div className={styles.pageDesc}>
                The Unit is the crypto equivalent of the S&P 500 in the stock
                market. An index fund following The Unit saves masive amounts of
                gas fees and aids investors to beat 95% of active fund managers.
              </div>
            </Col>
            <Col span={15} className={styles.tableImgCol}>
              <img src={table} />
            </Col>
          </Row>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.unitValueWrapper}>
          <img src={unitValue} />
          <div className={styles.pageTitle}>The Unit as ONE Unit of Value</div>
          <div className={styles.pageDesc}>
            The crypto industry is becoming increasingly more fragmented. The
            Unit unites all top cryptocurrencies into one simple unit of value.
          </div>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.joinWrapper}>
          <JoinCommunity />
        </div>
      </Fade>
    </PageContainer>
  );
}
