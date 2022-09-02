import React, { PropsWithChildren } from 'react';
import styles from './index.less';

interface LineButtonProps extends PropsWithChildren<any> {
  onClick?: Function;
  small?: boolean;
}

const LineButton: React.FC<LineButtonProps> = ({
  onClick = () => {},
  small = false,
  children,
}: LineButtonProps) => {
  return (
    <div
      className={styles.lineButtonWrapper + (small ? ' ' + styles.small : '')}
      onClick={() => {
        onClick();
      }}
    >
      <div className={styles.round1}></div>
      <div className={styles.round2}></div>
      {children}
    </div>
  );
};

export default LineButton;
