import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import { getFeatures, FeatureType } from '@/utils/constants';
import { Fade } from 'react-awesome-reveal';
import { appUrl } from '@/utils/links';
import JoinCommunity from '@/components/JoinCommunity';
import styles from './index.less';
import enterApp from '@/assets/enter-app.svg';
import table from '@/assets/table.png';
import networksTop from '@/assets/networks-top.png';
import networksBottom from '@/assets/networks-bottom.png';
import attention from '@/assets/attention.png';
import chainlink from '@/assets/chainlink.png';
import cryptoyc from '@/assets/cryptoyc.png';
import ens from '@/assets/ens.png';
import thegraph from '@/assets/thegraph.png';
import unstoppable from '@/assets/unstoppable.png';
import unitValue from '@/assets/unit-of-value.png';
import OurNetwork from '@/components/Network';
import BlogPost from '@/components/BlogPost';

export default function IndexPage() {
  const features = getFeatures();
  return (
    <PageContainer>
      <div className={styles.homeTopWrapper}>
        <div className={styles.pageContainer}>
          <Row className={styles.top} align="middle">
            <Col xs={24} sm={24} md={24} lg={10}>
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
            <Col xs={24} sm={24} md={24} lg={14} className={styles.chart}>
              <iframe src="https://app.theunit.one/iframe" />
            </Col>
          </Row>
          <div className={styles.unitDesc}>
            The Unit is the decentralized, community-managed and crypto-native
            benchmark for both consumers and investors in the metaverse.
          </div>
        </div>
      </div>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.homeFeaturesWrapper}>
          <div className={styles.pageContainer}>
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
          </div>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.homeNumbersWrapper}>
          <div className={styles.pageContainer}>
            <Row>
              <Col xs={24} sm={24} md={12}>
                <div className={styles.numberWrapper}>
                  <div className={styles.numberTitle}>
                    Value Accounted in Unit
                  </div>
                  <div className={styles.number}>236,7288,1972,2910</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={styles.numberWrapper}>
                  <div className={styles.numberTitle}>
                    Value Accounted in USD
                  </div>
                  <div className={styles.number}>236,7288,1972,2910</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.homeVideoWrapper}>
          <div className={styles.pageContainer}>
            <div className={styles.pageTitle}>Introducing The Unit</div>
            <div className={styles.unitValueWrapper}>
              <div className={styles.pageDesc}>
                The crypto industry is becoming increasingly more fragmented.
                The Unit unites all top cryptocurrencies into one simple unit of
                value.
              </div>
            </div>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/VP1kvgJheR8?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.tableRowWrapper}>
          <div className={styles.pageContainer}>
            <Row className={styles.tableRow} gutter={{ md: 32, lg: 32 }}>
              <Col xs={24} sm={24} md={9} className={styles.tableContentCol}>
                <div className={styles.pageTitle}>The Unit as an Index</div>
                <div className={styles.pageDesc}>
                  The Unit is the crypto equivalent of the S&P 500 in the stock
                  market. An index fund following The Unit saves masive amounts
                  of gas fees and aids investors to beat 95% of active fund
                  managers.
                </div>
              </Col>
              <Col xs={24} sm={24} md={15} className={styles.tableImgCol}>
                <img src={table} />
              </Col>
            </Row>
          </div>
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.homeBlogWrapper}>
          <div className={styles.pageContainer}>
            <div className={styles.pageTitle}>From the Blog</div>
            <Row gutter={{ sm: 15, md: 48, lg: 48 }}>
              <Col xs={24} sm={8} md={8}>
                <BlogPost
                  image="https://miro.medium.com/max/1400/0*HsTKxhgEff1RyjTT"
                  content="The Unit is the crypto benchmark. This article shows how The Unit index can help you make portfolio decisions. Technical analysts, traders, and crypto holders alike pay attention to what we are about to introduce to you. Rather than looking at USD charts, we created charts against The Unit, an index that tracks the most significant coins by capitalization and volume. As a result, we have created a unit of value called “unit” (Ø)."
                  link="#"
                />
              </Col>
              <Col xs={24} sm={8} md={8}>
                <BlogPost
                  image="https://miro.medium.com/max/1400/1*F-w_ZteVjN6clr4PG5CniA.png"
                  content="The Unit is the crypto benchmark. This article shows how The Unit index can help you make portfolio decisions. Technical analysts, traders, and crypto holders alike pay attention to what we are about to introduce to you. Rather than looking at USD charts, we created charts against The Unit, an index that tracks the most significant coins by capitalization and volume. As a result, we have created a unit of value called “unit” (Ø)."
                  link="#"
                />
              </Col>
              <Col xs={24} sm={8} md={8}>
                <BlogPost
                  image="https://miro.medium.com/max/1400/0*HsTKxhgEff1RyjTT"
                  content="The Unit is the crypto benchmark. This article shows how The Unit index can help you make portfolio decisions. Technical analysts, traders, and crypto holders alike pay attention to what we are about to introduce to you. Rather than looking at USD charts, we created charts against The Unit, an index that tracks the most significant coins by capitalization and volume. As a result, we have created a unit of value called “unit” (Ø)."
                  link="#"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Fade>

      <div className={styles.pageTitle} style={{ textAlign: 'center' }}>
        Our Networks
      </div>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.networksWrapper}>
          <img className={styles.networkImgTop} src={networksTop} />
          <div className={styles.pageContainer}>
            <Row>
              <Col span={4}>
                <OurNetwork image={chainlink} title="Chainlink" />{' '}
              </Col>
              <Col span={4}>
                <OurNetwork image={ens} title="ENS" />{' '}
              </Col>
              <Col span={4}>
                <OurNetwork image={thegraph} title="The Graph" />{' '}
              </Col>
              <Col span={4}>
                <OurNetwork image={unstoppable} title="Unstoppable" />{' '}
              </Col>
              <Col span={4}>
                <OurNetwork image={cryptoyc} title="CryptoYC" />{' '}
              </Col>
              <Col span={4}>
                <OurNetwork image={attention} title="Attention Ventures" />{' '}
              </Col>
            </Row>
          </div>
          <img className={styles.networkImg} src={networksBottom} />
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.joinWrapper}>
          <div className={styles.pageContainer}>
            <JoinCommunity />
          </div>
        </div>
      </Fade>
    </PageContainer>
  );
}
