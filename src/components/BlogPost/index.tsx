import { BlogType } from '@/utils/constants';
import React from 'react';
import styles from './index.less';

interface BlogProps {
  blog: BlogType;
}

function ShortenText(text: string, startingPoint: number, maxLength: number) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

function ToText(node: string) {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

const BlogPost: React.FC<BlogProps> = ({ blog }) => {
  return (
    <a href={blog.link} target="_blank" className={styles.blogWrapper}>
      <div
        className={styles.blogImg}
        style={{ backgroundImage: `url(${blog.thumbnail})` }}
      ></div>
      <div className={styles.blogContent}>
        {ShortenText(ToText(blog.content), 0, 100) + '...'}
      </div>
      <div className={styles.readMore}>Read More</div>
    </a>
  );
};

export default BlogPost;
