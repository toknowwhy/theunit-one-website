import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Inspector } from 'react-dev-inspector';
import { Layout, Affix } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './MainLayout.less';
import { useLocation } from 'umi';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new ApolloClient({
  uri: 'https://graph.theunit.one/graphql',
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <Layout className="layout">
              <Affix offsetTop={top}>
                <Layout.Header>
                  <Header />
                </Layout.Header>
              </Affix>
              <Layout.Content className="container">{children}</Layout.Content>
              <Layout.Footer>
                <Footer />
              </Layout.Footer>
            </Layout>
          </QueryClientProvider>
        </ApolloProvider>
      </HelmetProvider>
    </InspectorWrapper>
  );
};

export default MainLayout;
