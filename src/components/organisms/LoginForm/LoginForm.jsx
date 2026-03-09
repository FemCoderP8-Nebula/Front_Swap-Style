//Formulario de logeo

import styles from "./login-form.module.css";

import FormField from '../../molecules/FormField/FormField';
import Button from "../../atoms/Button/Button";


const LoginForm = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form}>
        <div className={styles.fields}>
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
        </div>

        <div className={styles.actions}>
          <Button
            text="Log In"
            BtnClass="neon"
            path="/login"
          />
          <Button
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