import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Layout, Affix } from 'antd';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';
import './MainLayout.less';
import { isMobile } from '@/utils/constants';
import { useLocation } from 'umi';

const client = new ApolloClient({
  uri: 'https://graph.theunit.one/graphql',
  cache: new InMemoryCache(),
});

const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  const [top, setTop] = useState(0);

  return (
    <ApolloProvider client={client}>
      <Layout className="layout">
        <Affix offsetTop={top}>
          <Layout.Header>
            {isMobile ? <MobileHeader /> : <Header />}
          </Layout.Header>
        </Affix>
        <Layout.Content className="container">{children}</Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </ApolloProvider>
  );
};

export default MainLayout;
