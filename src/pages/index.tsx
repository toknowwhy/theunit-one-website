import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ThemeButton from '@/components/ThemeButton';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import { getFeatures, FeatureType } from '@/utils/constants';
import gif2 from '@/assets/gif2.gif';
import gif3 from '@/assets/gif3.gif';
import bgdImg from '@/assets/bgd-img.png';
import shortLine from '@/assets/short-line.png';
import longLine from '@/assets/long-line.png';
import { Fade } from 'react-awesome-reveal';
import JoinCommunity from '@/components/JoinCommunity';
import styles from './index.less';

export default function IndexPage() {
  const features = getFeatures();
  return (
    <PageContainer>
      <img className={styles.bgdImg} src={bgdImg} />

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
        <div className={styles.lineWrapper}>
          <img className={styles.firstLine} src={shortLine} />
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <Row className={styles.halfFeature} align="middle">
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 12, order: 2 }}
          >
            <div className={styles.halfFeatureWrapperLeft}>
              <div className={styles.subtitle}>
                Building the Metaverse’s{' '}
                <span className={styles.titleSpan}>Accounting </span>Network
              </div>
              <div className={styles.subtitleDesc + ' hide-mobile'}>
                The Blocktree technology empowers the{' '}
                <strong>blocktree supernet</strong> to revolutionize the way we
                transfer and store value in the <strong>post-quantum</strong>{' '}
                era.
              </div>
              <div className={styles.subtitleDesc + ' show-mobile'}>
                The Blocktree technology empowers the{' '}
                <strong>blocktree supernet</strong> to revolutionize the way we
                transfer and store value in the <br />
                <strong>post-quantum</strong> era.
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 12, order: 1 }}
          >
            <img className={styles.featureGif} src={gif2} />
          </Col>
        </Row>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.lineWrapper}>
          <img className={styles.secondLine} src={longLine} />
        </div>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <Row className={styles.halfFeature} align="middle">
          <Col xs={24} sm={24} md={12}>
            <div className={styles.halfFeatureWrapper}>
              <div className={styles.subtitle}>
                The BlockTree:
                <br /> Layer-One
                <span className={styles.titleSpan}> Supernet </span>for the
                Metaverse
              </div>
              <div className={styles.subtitleDesc + ' ' + styles.subtitleLeft}>
                A post-blockchain organism for edge dApps: The Blocktree
                achieves consensus with the lowest latency and highest
                throughput thanks to its blocktree ledger structure.
              </div>
              <Link to="/about">
                <ThemeButton>About</ThemeButton>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <img
              className={styles.featureGif + ' ' + styles.bottomGif}
              src={gif3}
            />
          </Col>
        </Row>
      </Fade>

      <Fade direction="up" cascade triggerOnce>
        <div className={styles.lineWrapper}>
          <img className={styles.thirdLine} src={shortLine} />
        </div>
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
