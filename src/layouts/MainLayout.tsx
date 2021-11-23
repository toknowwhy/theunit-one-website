import React from 'react';
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';
import styles from './MainLayout.less';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    const { innerWidth: width } = window;

    return width > 1200 ? (
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
    );
  }
}

export default MainLayout;
