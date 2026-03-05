//Formulario de logeo

import FormField from '../../molecules/FormField/FormField';
import Button from "../../atoms/Button/Button";


const LoginForm = () => {
  return (
    <section>
      <h1>Login Form</h1>
      
      <form>
        <FormField
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
        />
        <FormField 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
        />
        
        <div className="actions">
          <Button>Log In</Button>
          <Button>Cancel</Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;