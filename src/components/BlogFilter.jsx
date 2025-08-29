import React from 'react';
import styles from './BlogFilter.module.scss';

const BlogFilter = () => {
  return (
    <div className={styles.filter}>
      <select>
        <option>리액트</option>
        <option>노드JS</option>
      </select>

      <select>
        <option value='latest'>최신순</option>
        <option value='oldest'>오래된순</option>
      </select>

      <input
        type='text'
        placeholder='검색어를 입력하세요'
      />
    </div>
  );
};

export default BlogFilter;