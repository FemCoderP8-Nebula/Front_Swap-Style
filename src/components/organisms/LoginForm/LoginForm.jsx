import { useState } from "react"; 
import styles from "./login-form.module.css";
import FormField from '../../molecules/FormField/FormField';
import Button from "../../atoms/Button/Button";

const LoginForm = () => {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sended:", formData);
    // LLamada a la API ??
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <FormField
            label="Email"
            name="email" 
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          
          <Button
            type="submit" 
            text="Log In"
            BtnClass="neon"
          />
          <Button
            type="button"
            text="Cancel"
            BtnClass="cancel"
            path="/home"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

