import styles from './BlogSideBar.module.scss';
import { categories } from '../dummy-data/dummy-post.js';
import {useNavigate, useSearchParams} from 'react-router-dom';

const BlogSideBar = () => {

  const [, setSearchParams] = useSearchParams();

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

  return (
    <aside className={styles.sidebar}>
      <h2>카테고리</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.categoryButton}`}
              onClick={(e) => handleCategoryClick(category.id)}
            >
              {category.name}
              <span className={styles.count}>
                2
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.recentPosts}>
        <h2>최근 글</h2>
        <ul>

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
}

export default BlogSideBar;
