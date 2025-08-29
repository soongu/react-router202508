import {createBrowserRouter} from 'react-router-dom';
import IndexPage from '../pages/IndexPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import RootLayout from '../layouts/RootLayout.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // custom error page 설정
    errorElement: <ErrorPage />,
    // children -> Layout의 Outlet부분을 뭘로 바꿀지를 설정
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
    ]
  }
]);