import styles from './IndexPage.module.scss';
import {Link} from 'react-router-dom';

const IndexPage = () => {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.title}>Developer's Tech Blog</h1>
        <p className={styles.subtitle}>React와 관련된 기술들을 공유합니다.</p>

        <Link to={'/blog'} className={styles.button}>
          블로그 보러가기
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
