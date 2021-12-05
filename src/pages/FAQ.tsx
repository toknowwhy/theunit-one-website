import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Row, Col } from 'antd';
import CustomIcon from '@/components/CustomIcon';
import caretDown from '@/assets/caret-down.png';
import caretUp from '@/assets/caret-up.png';
import styles from '@/themes/global.less';
import { getFaqs } from '@/utils/constants';
import './FAQ.less';

const { Panel } = Collapse;

export default (): React.ReactNode => {
  const faqs = getFaqs();

  return (
    <PageContainer className={styles.pageContainerBgd}>
      <div className={styles.pageContainer}>
        <div className={styles.singlePageTitle}>FAQ</div>

        <Row>
          <Col xs={24} sm={24} md={18}>
            <Collapse
              className="faqs"
              expandIcon={(panelProps) => {
                if (panelProps.isActive) {
                  return <CustomIcon imgSrc={caretUp} size={24} />;
                } else {
                  return <CustomIcon imgSrc={caretDown} size={24} />;
                }
              }}
              expandIconPosition="right"
            >
              {faqs.map(({ title, answer }, index: number) => {
                return (
                  <Panel header={title} key={index}>
                    <p>{answer}</p>
                  </Panel>
                );
              })}
            </Collapse>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};
