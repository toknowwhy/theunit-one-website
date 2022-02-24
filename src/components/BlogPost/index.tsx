import React from 'react';
import styles from './index.less';

interface BlogProps {
  image: string;
  content: string;
  link: string;
}

const BlogPost: React.FC<BlogProps> = ({ image, content, link }) => {
  return (
    <div className={styles.blogWrapper}>
      <div
        className={styles.blogImg}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.blogContent}>{content}</div>
      <a href={link} target="_blank" className={styles.readMore}>
        Read More
      </a>
    </div>
  );
};

export default BlogPost;
