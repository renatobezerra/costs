import loading from '../../../img/loading.svg';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loader} src={loading} alt='Loading' />
      <h3>Loading ...</h3>
    </div>
  );
}

export default Loading;
