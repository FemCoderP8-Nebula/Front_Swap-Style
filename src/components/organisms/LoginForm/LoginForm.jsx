import { useState } from "react";
import styles from "./login-form.module.css";
import FormField from '../../molecules/FormField/FormField';
import Button from "../../atoms/Button/Button";
import userService from "../../../service/apiAccount";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";


const LoginForm = () => {

const {login} = useContext(AuthContext);

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

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const response = await userService.login(formData);

      console.log("¡Login successful, user :", response);


    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("email is not registered, create an account first! ");
      } else {
        alert("Server problem, try again!");
      }

    } finally {
      setIsLoading(false);
    }
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
            text={isLoading ? "Loading..." : "Log In"}
            BtnClass="neon"
            disabled={isLoading}
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

