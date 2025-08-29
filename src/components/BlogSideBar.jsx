import styles from './BlogSideBar.module.scss';
import { categories } from '../dummy-data/dummy-post.js';

const BlogSideBar = () => {

  return (
    <aside className={styles.sidebar}>
      <h2>카테고리</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.categoryButton}`}
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
