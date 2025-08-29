import styles from './BlogSideBar.module.scss';
import {categories, posts} from '../dummy-data/dummy-post.js';
import {NavLink, useNavigate, useSearchParams} from 'react-router-dom';

const BlogSideBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // 새로고침 없이 리다이렉션을 지원하는 훅
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // 사이드바에 있는 카테고리를 누르면 목록으로 이동하면서 카테고리를 보여줘야 함.
    // location.href = '/blog';
    navigate(`/blog`);
    setSearchParams(prev => {
      prev.set('category', category);
      return prev;
    });
  };

  // 게시물별 카테고리 수 카운팅하는 함수
  const getCategoryCount = (category) => {
    if (category === 'all') {
      return posts.length;
    }
    return posts.filter(post => post.category === category).length;
  };

  // 최근 글 3개를 가져오기
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <aside className={styles.sidebar}>
      <h2>카테고리</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`
              ${styles.categoryButton}
              ${
                (searchParams.get('category') || 'all') === category.id
                  ? styles.active : ''
              }
              `}
              onClick={(e) => handleCategoryClick(category.id)}
            >
              {category.name}
              <span className={styles.count}>
                {getCategoryCount(category.id)}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.recentPosts}>
        <h2>최근 글</h2>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.id}>
              <NavLink to={`/blog/${post.id}`}>
                {post.title}
                <span className={styles.recentPostDate}>{post.date}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.tags}>
        <h2>태그</h2>
        <div className={styles.tagCloud}>
          <span>#React</span>
          <span>#JavaScript</span>
          <span>#Web</span>
          <span>#Frontend</span>
          <span>#Programming</span>
        </div>
      </div>
    </aside>
  );
};

export default BlogSideBar;
