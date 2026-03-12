import styles from './FormField.module.css';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const FormField = ({ label, error, type, placeholder, name, value, onChange, onBlur }) => {
  return (
    <div className={styles.fieldContainer}>
      <Label className={styles.label}>{label}</Label>
      <Input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.mainInput} ${error ? styles.inputError : ''}`} 
      />
    {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default FormField;