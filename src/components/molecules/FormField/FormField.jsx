
import Label from '../../atoms/label/Label';
import Input from '../../atoms/Input/Input';


const FormField = ({ label, type, placeholder }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormField;