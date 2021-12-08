import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useQuery } from '@apollo/client';
import * as GQ from '@/utils/graphql';
import styles from './Jobs.less';
import { Row, Col } from 'antd';
import { history } from 'umi';

export default (): React.ReactNode => {
  const jobPostsData = useQuery(GQ.JOB_POSTS);
  const jobPosts: [GQ.JobPost] = jobPostsData?.data?.jobPosts;

  return (
    <PageContainer className={styles.pageContainerBgd}>
      <div className={styles.pageContainer}>
        <div className={styles.topWrapper}>
          <div
            className={styles.singlePageTitle}
            style={{ marginBottom: '24px' }}
          >
            Become A Revolutionary
          </div>

          <div
            className={styles.singlePageTitle}
            style={{ marginTop: '0', marginBottom: '120px', fontSize: '24px' }}
          >
            Open positions
          </div>
        </div>

        {jobPosts && (
          <Row className={styles.features} gutter={{ xs: 16, sm: 64 }}>
            {jobPosts.map((row: GQ.JobPost, index: number) => {
              const length = row.description?.length ?? 0;
              var desc =
                row.description?.substring(0, Math.min(length, 150)) ??
                'Read more';
              desc = desc.replaceAll('\\n', '');

              return (
                <Col xs={24} sm={12} md={8} className={styles.feature}>
                  <div
                    className={styles.featureWrapper}
                    onClick={() => {
                      history.push(`/jobs/${row._id}`);
                    }}
                  >
                    <div className={styles.featureTitle}>{row.title}</div>
                    <div className={styles.featureDesc}>{desc + '...'}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </PageContainer>
  );
};
