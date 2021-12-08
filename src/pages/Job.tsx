import React from 'react';
import { history } from 'umi';
import { PageContainer, PageLoading } from '@ant-design/pro-layout';
import { useQuery } from '@apollo/client';
import * as GQ from '@/utils/graphql';
import styles from './Jobs.less';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';

interface JobProps {
  id: string | undefined;
}

export default (): React.ReactNode => {
  const params: JobProps = useParams();

  const jobPostsData = useQuery(GQ.JOB_POST, { variables: { id: params.id } });
  const selectedJob: GQ.JobPost = jobPostsData?.data?.jobPost;

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
            style={{
              fontWeight: 700,
              display: 'inline-block',
              marginTop: '88px',
            }}
            href="#"
            onClick={() => {
              history.push('/jobs');
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
    <PageLoading />
  );
};
