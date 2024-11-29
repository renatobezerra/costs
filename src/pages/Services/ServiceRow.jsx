import styles from './ServiceRow.module.css';
import { BsX } from 'react-icons/bs';

function ServiceRow({ item }) {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div><strong>{ item.name }</strong></div>
          <div>{ item.description }</div>
        </div>
        <div className={styles.cost}>
          ${ item.cost }
        </div>
      </div>
      <div className={styles.actions}>
        <button className={`btn danger`}>
          <BsX />
        </button>
      </div>
    </div>
  );
}

export default ServiceRow;
