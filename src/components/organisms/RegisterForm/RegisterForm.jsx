import { useState } from "react";
import TermsAgreement from "../../molecules/TermsAgreement/TermsAgreement";
import styles from "./register-form.module.css";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import userService from "../../../service/apiAccount";
import USER from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";


const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const navigate =useNavigate();

  const [accepted, setAccepted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accepted){
      alert("Please accept the Privacy Policy");
      return;
    } 
    setIsLoading(true);
    try{
        const response = await userService.register(user);
        console.log("Register successful");
        login(response); //AQUI HAY QUE VER QUE DEVUELVE EL API, ES PARA QUE QUEDE LOGUEADO
        navigate("/home/gallery");
     } catch (error) {
       if (error.response && error.response.status === 500) {
        alert("User already registered, please log in first! ");
        navigate("/home/login");
      } else {
        alert("Server problem, try again!");
      } 
     } finally {
      setIsLoading(false);
      }
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <FormField
            label="Name"
            name="name"
            value={user.name}
            type="text"
            placeholder="Enter your Name"
            onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            value={user.email}
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <FormField
            label="Password"
            name="password"
            value={user.password}
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.modal}>
          <img 
          src={USER} 
          alt="Register User Logo" 
          />
          <p>Choose your Avatar</p>
          <Button text="Gallery" BtnClass="liquid_mobile" path=""/>
        </div>
        <div className={styles.accions}>
          <div className={styles.actions}>
            <TermsAgreement
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            >
              I have read and agree to the <a href="/privacy">Privacy Policy</a>
            </TermsAgreement>
          </div>
          <div >
            <Button text="Register" BtnClass="neon" type="submit" />
            <Button text="Cancel" BtnClass="cancel" path="/home" />
          </div>
        </div>       
      </form>
    </section>
  );
}

export default RegisterForm;

//verificar ruta hacia pagina con mensaje de registro exitoso
/*RUTA modal CHOOSE AVATAR*/
