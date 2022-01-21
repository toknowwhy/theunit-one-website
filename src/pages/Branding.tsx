import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './Branding.less';
import BrandingAsset from '@/components/BrandingAsset';

export default (): React.ReactNode => {
  return (
    <PageContainer className={styles.pageContainerBgd}>
      <div className={styles.pageContainer}>
        <div className={styles.singlePageTitle}>Brand Assets</div>

        <div className={styles.assetTitle}>ICON ONLY</div>
        <BrandingAsset image="/icon-white.png" />
        <BrandingAsset image="/icon-black.png" isWhite={false} />

        <div className={styles.assetTitle}>STACKED</div>
        <BrandingAsset image="/stack-white.png" />
        <BrandingAsset image="/stack-black.png" isWhite={false} />

        <div className={styles.assetTitle}>HORINZONTAL</div>
        <BrandingAsset image="/horizon-white.png" isHorizontal={true} />
        <BrandingAsset
          image="/horizon-black.png"
          isWhite={false}
          isHorizontal={true}
        />
      </div>
    </PageContainer>
  );
};
