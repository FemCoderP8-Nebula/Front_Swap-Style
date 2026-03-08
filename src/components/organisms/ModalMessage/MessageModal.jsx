import styles from './messageModal.module.css';
import Button from '../../atoms/Button/Button';

const MessageModal = ({ image, message, btnText, btnPath, btnClass }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.content}>
          <img src={image} alt="Status icon check" className={styles.icon} />
          <p className={styles.message}>{message}</p>
        </div>
        
        <div className={styles.actions}>
          <Button 
            text={btnText} 
            path={btnPath} 
            BtnClass={btnClass} 
          />
        </div>
      </div>
    </div>
  );
};

export default MessageModal;