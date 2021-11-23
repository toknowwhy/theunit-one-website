import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';
import styles from './MainLayout.less';

const client = new ApolloClient({
  uri: 'https://graph.theunit.one/graphql',
  cache: new InMemoryCache(),
});

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    const { innerWidth: width } = window;

    return (
      <ApolloProvider client={client}>
        {width > 1200 ? (
          <div className={styles.container}>
            <Header />
            {children}
            <Footer />
          </div>
        ) : (
          <div className={styles.containerMobile}>
            <MobileHeader />
            {children}
            <Footer />
          </div>
        )}
      </ApolloProvider>
    );
  }
}

export default MainLayout;
