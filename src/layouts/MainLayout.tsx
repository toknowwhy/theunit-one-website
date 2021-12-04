import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Layout, Affix } from 'antd';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';
import styles from './MainLayout.less';
import { isMobile } from '@/utils/constants';

const client = new ApolloClient({
  uri: 'https://graph.theunit.one/graphql',
  cache: new InMemoryCache(),
});

const MainLayout: React.FC = ({ children }) => {
  const [top, setTop] = useState(0);

  return (
    <ApolloProvider client={client}>
      <Layout className={styles.layout}>
        <Affix offsetTop={top}>
          <Layout.Header>
            {isMobile ? <MobileHeader /> : <Header />}
          </Layout.Header>
        </Affix>
        <Layout.Content className={styles.container}>{children}</Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </ApolloProvider>
  );
};

export default MainLayout;
