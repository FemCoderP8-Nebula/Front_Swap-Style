import { useState } from "react";
import TermsAgreement from "../../molecules/TermsAgreement/TermsAgreement";
import styles from "./register-form.module.css";

const RegisterForm = () => {
  const [accepted, setAccepted] = useState(false);
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUser({
        ...user,
        [name]: value
    });
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Form Register</h1>
      <form className={styles.container}>
        <div className={styles.fiels}>
          <FormField 
          label="Name" 
          name="name"
          type="text" 
          placeholder="Enter your Name" 
          onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <TermsAgreement
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          >
            I have read and agree to the <a href="/privacy">Privacy Policy</a>.
          </TermsAgreement>
        </div>
        <div className={styles.accions}>
            <Button 
          text="Register"
          BtnClass="neon"
          path="/register"
          />
          <Button
          text="Cancel"
          BtnClass="cancel"
          path="/home"
          />
        </div>
        <div>
            
        </div>
      </form>
    </section>
  );
};

//VER RUTA A POLITICAS DE PRIVACIDAD y verificar ruta hacia pagina con mensaje de registro exitoso
/*modal CHOOSE AVATAR*/