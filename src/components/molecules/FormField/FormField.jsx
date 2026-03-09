import styles from './FormField.module.css';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const FormField = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className={styles.fieldContainer}>
      <Label className={styles.label}>{label}</Label>
      <Input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={styles.mainInput} 
      />
    </div>
  );
};

export default FormField;