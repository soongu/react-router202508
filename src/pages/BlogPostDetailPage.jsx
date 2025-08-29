import React from 'react';
import {useParams} from 'react-router-dom';
import {posts} from '../dummy-data/dummy-post.js';
import styles from './BlogPostDetailPage.module.scss';

const BlogPostDetailPage = () => {

  // 현재 라우팅된 postId를 url로부터 읽어내는 법
  const {postId} = useParams();
  // console.log(`x: `, x);

  // 해당 ID로 서버에 상세조회 요청
  // 더미데이터에서 특정 블로그 글 탐색
  const foundPost = posts.find(post => post.id === +postId);
  // console.log(foundPost);

  const post = {
    ...foundPost,
    comments: [
      { id: 1, author: '김철수', content: '좋은 글이네요!' },
      { id: 2, author: '이영희', content: '잘 배웠습니다.' },
    ],
  };

  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>
      <div className={styles.content}>{post.excerpt}</div>
      <div className={styles.comments}>
        <h2>댓글</h2>
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            className={styles.comment}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default BlogPostDetailPage;