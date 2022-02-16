import React from 'react';
import styles from './index.less';

interface OurNetworkProps {
  image: string;
  title: string;
}

const OurNetwork: React.FC<OurNetworkProps> = ({ image, title }) => {
  return (
    <div className={styles.networkWrapper}>
      <img src={image} />
      <div>{title}</div>
    </div>
  );
};

export default OurNetwork;
