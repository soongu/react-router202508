import React from 'react';
import styles from './BlogPage.module.scss';
import {posts} from '../dummy-data/dummy-post.js';
import PostCard from '../components/PostCard.jsx';
import {useSearchParams} from 'react-router-dom';
import BlogFilter from '../components/BlogFilter.jsx';
import BlogSideBar from '../components/BlogSideBar.jsx';

const BlogPage = () => {

  /*
    ? 뒤에 붙는 쿼리스트링 읽는법
    useSearchParams는 배열을 리턴하는데
    0번 인덱스 : 쿼리스트링들을 모아놓은 객체
    1번 인덱스 : 쿼리스트링을 생성할 수 있는 함수를 리턴
   */
  const [searchParams] = useSearchParams();
  // console.log(`x: `, x);
  // console.log('searchParams: ', searchParams);

  const category = searchParams.get('category') || 'all';
  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || 'latest';

  // console.log('category: ', category);
  // console.log('search: ', search);
  // console.log('sort: ', sort);

  return (
    <>
      <div className={styles.blog}>

        <BlogFilter />

        <BlogSideBar />
        <div className={styles.grid}>
          {posts
            // 제목 또는 내용으로 검색
            .filter(post =>
              post.title.toLowerCase().includes(search)
              || post.excerpt.toLowerCase().includes(search)
            )
            // 카테고리로 검색
            .filter(post =>
              category === 'all' || post.category === category
            )
            // 정렬 (최신순, 오래된순)
            .sort((a, b) =>
              sort === 'latest'
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
            )
            .map(post => <PostCard key={post.id} post={post}/>)}
        </div>
      </div>
    </>
  );
};

export default BlogPage;