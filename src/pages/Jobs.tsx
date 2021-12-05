import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useQuery } from '@apollo/client';
import * as GQ from '@/utils/graphql';
import styles from './Jobs.less';
import { Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface JobPost {
  title: string;
  responsibility: string;
  description: string;
  requirements: string;
  location: string;
}

export default (): React.ReactNode => {
  const jobPostsData = useQuery(GQ.JOB_POSTS);
  const jobPosts: [JobPost] = jobPostsData?.data?.jobPosts;

  const [selectedJob, setSelectedJob] = useState<JobPost | undefined>(
    undefined,
  );

  const descStr = (text: string) => {
    const textArr = text.split('\\n');
    return (
      <div className={styles.jobDesc}>
        {textArr.map((t) => (
          <p>{t}</p>
        ))}
      </div>
    );
  };

  return selectedJob ? (
    <PageContainer className={styles.pageContainerBgd}>
      <div className={styles.pageContainer}>
        <div className={styles.jobBody}>
          <a
            style={{ fontWeight: 700 }}
            href="#"
            onClick={() => {
              setSelectedJob(undefined);
            }}
          >
            <ArrowLeftOutlined /> Back to all jobs
          </a>
          <div className={styles.pageTitle}>{selectedJob.title}</div>
          <div className={styles.jobDesc}>
            {descStr(selectedJob.description)}
          </div>
          <div className={styles.jobTitle}>Responsibility</div>
          <div className={styles.jobDesc}>
            {descStr(selectedJob.responsibility)}
          </div>
          <div className={styles.jobTitle}>Requirement</div>
          <div className={styles.jobDesc}>
            {descStr(selectedJob.requirements)}
          </div>
          <div className={styles.jobTitle}>Apply</div>
          Please send your resume/cv to
          <a href="mailto:jobs@20y.org"> jobs@20y.org</a>
        </div>
      </div>
    </PageContainer>
  ) : (
    <PageContainer className={styles.pageContainerBgd}>
      <div className={styles.pageContainer}>
        <div className={styles.topWrapper}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '48px',
              lineHeight: '60px',
              marginBottom: '88px',
            }}
            className={styles.title}
          >
            Become A Revolutionary
          </div>

          <div
            style={{ textAlign: 'center', fontSize: '24px' }}
            className={styles.singlePageTitle}
          >
            Open positions
          </div>
        </div>

        {jobPosts && (
          <Row className={styles.features} gutter={{ xs: 16, sm: 64 }}>
            {jobPosts.map((row: JobPost, index: number) => {
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
                      setSelectedJob(row);
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
