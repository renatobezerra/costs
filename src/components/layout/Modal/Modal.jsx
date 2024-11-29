import styles from './Modal.module.css';

function Modal({ headerText, children, confirmText='Confirm', confirmHandler, cancelText="Cancel", cancelHandler }) {
  return (
    <div className={ styles.modal }>
      <div className={ styles.container}>
        <div className={ styles.header }>
          <h2>{ headerText }</h2>
        </div>
        <div className={ styles.content } >
          { children }
        </div>
        <div className={ styles.footer }>
          <footer>
            <button className={styles.primary} onClick={ confirmHandler }>
              { confirmText }
            </button>
            <button className={styles.default} onClick={ cancelHandler }>
              { cancelText }
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
