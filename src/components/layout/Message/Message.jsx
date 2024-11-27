import { useState, useEffect } from 'react';
import styles from './Message.module.css';

function Message({ message = '', type='success' }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if(!message) { return; }
    setVisible(true);
    setFadeOut(false);

    const fadeOutTimer = setTimeout(() => {

      setFadeOut(true);
    }, 4000);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(timer);
    }

  }, [message]);

  if(!visible) return null;

  return (
    <div className={`${styles.message} ${styles[type]} ${fadeOut ? styles.fadeOut : "" }`}>{ message }</div>
  );
}

export default Message;
