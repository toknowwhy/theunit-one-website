import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Inspector } from 'react-dev-inspector';
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

const InspectorWrapper =
  process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

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
    <InspectorWrapper>
      <HelmetProvider>
        <Helmet>
          <title>The Unit</title>
          <meta name="description" content="The Unit" />
        </Helmet>
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
      </HelmetProvider>
    </InspectorWrapper>
  );
};

export default MainLayout;
