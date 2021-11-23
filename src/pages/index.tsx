import { PageContainer } from '@ant-design/pro-layout';
import ThemeButton from '@/components/ThemeButton';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import { getFeatures, FeatureType } from '@/utils/constants';
import { Fade } from 'react-awesome-reveal';
import JoinCommunity from '@/components/JoinCommunity';
import styles from './index.less';

export default function IndexPage() {
  const features = getFeatures();
  return (
    <PageContainer className={styles.pageContainer}>
      <Row className={styles.halfFeature} align="middle">
        <Col xs={24} sm={24} md={12}>
          <div className={styles.halfFeatureWrapperLeft}>
            <div className={styles.subtitle}>
              The Unit: <br />A crypto-native
              <br />
              <span className={styles.titleSpan}> Unit </span>
              of Account
            </div>
            <p
              className={
                styles.subtitleDesc +
                ' ' +
                styles.subtitleLeft +
                ' ' +
                styles.homeSubtitle
              }
            >
              Our comprehensive community-managed crypto-native{' '}
              <strong>index</strong> tied to global population data, The Unit,
              aims to become the unit of account of the Metarverse.
            </p>
            <Link to="/app/index">
              <ThemeButton>The Unit</ThemeButton>
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className={styles.topChart}></div>
        </Col>
      </Row>

      <Fade direction="up" cascade triggerOnce>
        <Row className={styles.features} gutter={{ xs: 13, sm: 13 }}>
          {features.slice(0, 3).map((row: FeatureType, index: number) => (
            <Col xs={24} sm={24} md={8} className={styles.feature}>
              <div className={styles.allFeaturesWrapper}>
                <div>
                  <img className={styles.featureImg} src={row.img} />
                </div>
                <div className={styles.featureTitle}>{row.title}</div>
                <div className={styles.featureDesc}>{row.description}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.subtitle + ' ' + styles.communityTitle}>
          Join Our Community
        </div>
        <JoinCommunity />
      </Fade>
    </PageContainer>
  );
}
