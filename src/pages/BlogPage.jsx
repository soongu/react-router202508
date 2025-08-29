import React from 'react';
import styles from './BlogPage.module.scss';
import {posts} from '../dummy-data/dummy-post.js';
import PostCard from '../components/PostCard.jsx';

const BlogPage = () => {

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.grid}>
          {posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
      </div>
    </>
  );
};

export default BlogPage;