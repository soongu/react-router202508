import {createBrowserRouter} from 'react-router-dom';
import IndexPage from '../pages/IndexPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />
  },
  {
    path: '/blog',
    element: <BlogPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
]);