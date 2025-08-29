import React, {useEffect, useState} from 'react';
import styles from './BlogFilter.module.scss';
import {categories} from '../dummy-data/dummy-post.js';
import {useSearchParams} from 'react-router-dom';

const BlogFilter = () => {

  // 쿼리스트링 생성 기능
  const [searchParams, setSearchParams] = useSearchParams();

  // 초기값을 URL 파라미터에서 가져오기
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');

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
    setSearchValue(e.target.value);
  };

  // 디바운싱을 통한 검색어 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams(prev => {
        if (searchValue.trim()) {
          prev.set('search', searchValue.trim());
        } else {
          // 검색어가 비어있으면 search 파라미터 제거
          prev.delete('search');
        }
        return prev;
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, setSearchParams]);

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
        value={searchValue}
      />
    </div>
  );
};

export default BlogFilter;