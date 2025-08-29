import { Outlet } from 'react-router-dom';
import styles from './BlogLayout.module.scss';
import BlogSideBar from '../components/BlogSideBar';

const BlogLayout = () => (
  <div className={styles.layout}>
    <BlogSideBar/>
    <main className={styles.main}>
      <Outlet/>
    </main>
  </div>
);

export default BlogLayout;
