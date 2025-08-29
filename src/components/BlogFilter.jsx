import React from 'react';
import styles from './BlogFilter.module.scss';
import {categories} from '../dummy-data/dummy-post.js';
import {useSearchParams} from 'react-router-dom';

const BlogFilter = () => {

  // 쿼리스트링 생성 기능
  const [searchParams, setSearchParams] = useSearchParams();

  // 카테고리 옵션 선택 이벤트
  const handleCategoryChange = e => {
    // console.log('category가 선택됨: ', e.target.value);
    // 쿼리스트링으로 ?category=xxx
    setSearchParams(prev => {
      // console.log('prev: ', prev);
      prev.set('category', e.target.value);
      return prev;
    });
  };

  const handleSortChange = e => {
    setSearchParams(prev => {
      prev.set('sort', e.target.value);
      return prev;
    });
  };

  const handleSearch = e => {
    setSearchParams(prev => {
      prev.set('search', e.target.value);
      return prev;
    });
  };

  return (
    <div className={styles.filter}>
      <select
        onChange={handleCategoryChange}
        value={searchParams.get('category') || 'all'}
      >
        {categories.map(ct => <option key={ct.id} value={ct.id}>{ct.name}</option>)}
      </select>

      <select
        onChange={handleSortChange}
        value={searchParams.get('sort') || 'latest'}
      >
        <option value='latest'>최신순</option>
        <option value='oldest'>오래된순</option>
      </select>

      <input
        type='text'
        placeholder='검색어를 입력하세요'
        onChange={handleSearch}
        value={searchParams.get('search') || ''}
      />
    </div>
  );
};

export default BlogFilter;