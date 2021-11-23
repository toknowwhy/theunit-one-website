import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Row, Col } from 'antd';
import CustomIcon from '@/components/CustomIcon';
import caretDown from '@/assets/caret-down.png';
import caretUp from '@/assets/caret-up.png';

import './FAQ.less';
import { getFaqs } from '@/utils/constants';

const { Panel } = Collapse;

export default (): React.ReactNode => {
  const faqs = getFaqs();

  return (
    <PageContainer>
      <div className="faq-title">FAQ</div>

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
            expandIconPosition="left"
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
    </PageContainer>
  );
};
