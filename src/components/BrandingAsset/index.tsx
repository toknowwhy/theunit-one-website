import React from 'react';
import styles from './index.less';

interface BrandingProps {
  image: string;
  isWhite?: boolean;
  isHorizontal?: boolean;
}

const BrandingAsset: React.FC<BrandingProps> = ({
  image,
  isWhite = true,
  isHorizontal = false,
}) => {
  return (
    <div className={styles.brandingWrapper}>
      <div
        className={
          isWhite ? styles.imageWrapperWhite : styles.imageWrapperBlack
        }
      >
        <img className={isHorizontal && styles.horizontal} src={image} />
      </div>
      <a className={styles.download} href={image} download>
        Download
      </a>
    </div>
  );
};

export default BrandingAsset;
