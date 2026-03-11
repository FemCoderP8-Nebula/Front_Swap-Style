import { useState, useEffect } from "react";
import styles from "./login-form.module.css";
import FormField from '../../molecules/FormField/FormField';
import Button from "../../atoms/Button/Button";
import userService from "../../../service/apiAccount";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



const LoginForm = () => {

  const response = userService();
  const navigate = useNavigate();
  const [touched, setTouched] = useState({});
  const [serverErrors, setServerErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    response
  })

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    if (serverErrors[name]) { setServerErrors((formData) => ({ ...formData, [name]: undefined })); }
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTouched({ email: true, password: true });
    if (Object.keys(frontendErrors).length > 0) return;


    try {

      const user = await userService.login(response);
      console.log("¡Login successful, user :", user);
      navigate("/home/gallery");


    } catch (error) {
      if (error.response) {
        setErrors(error.response.data)
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
            error={serverErrors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={serverErrors.password}
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

