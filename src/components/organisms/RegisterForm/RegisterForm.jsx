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
import AvatarModal from "../../molecules/ModalAvatar/AvatarModal";
import MessageModal from "../ModalMessage/MessageModal";
import checkGif from "../../../assets/check.gif";
import AVATARS from "../../atoms/Avatars/CollectionAvatars";

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showAvatarsModal, setShowAvatarsModal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAvatarSelect = (avatarKey) => {
    setUser({
    ...user,
    avatar: avatarKey
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept the Privacy Policy");
      return;
    }
    setIsLoading(true);
    try {
      const dataToBackend = {
        userName: user.name,
        email: user.email,
        password: user.password,
        avatar: user.avatar,
        role: "USER"
      }
      console.log("Objeto exacto que sale hacia el servidor:", dataToBackend);
      const response = await userService.register(dataToBackend);
      console.log("Register successful");
      login(response); //AQUI HAY QUE VER QUE DEVUELVE EL API, ES PARA QUE QUEDE LOGUEADO
      setShowCheckModal(true)
      //navigate("/home/checkmodal") //?????????
      // navigate("/home/gallery"); va a la galeria desde el modal??
    } catch (error) {
      console.log("Status del error:", error.response?.status);
      console.log("Mensaje del Backend:", error.response?.data);
      if (error.response && error.response.status === 500) {
        //checkear que error envia si el usuario ya está registrado, puede ser otro 400 o 409
        alert("User already registered, please log in! ");
        navigate("/home/login");
      } else {
        alert(`Server problem (Error ${error.response?.status}). Check console!`);
        //alert("Server problem, try again!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.desktopOnly}>Form </span>
        Register
      </h1>
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
          <img src={user.avatar ? AVATARS[user.avatar] : USER} 
          alt="Register User Logo" />
          <p>Choose your Avatar</p>
          <Button
            text="Gallery"
            BtnClass="liquid_mobile"
            onClick={() => setShowAvatarsModal(true)}
          />
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
          <div className={styles.actions}>
            <Button text="Register" BtnClass="neon" type="submit" />
            <Button text="Cancel" BtnClass="cancel" path="/home" />
          </div>
        </div>
      </form>
      {showCheckModal && (
        <MessageModal
          image={checkGif}
          message="User Registered Successfully"
          btnText="Login"
          btnPath="/home/gallery"
          btnClass="liquid"
        />
      )}
      {showAvatarsModal && (
        <AvatarModal 
        isOpen={showAvatarsModal} 
        currentAvatar={user.avatar}
        onSelect={handleAvatarSelect}
        onClose={() => setShowAvatarsModal(false)}
        />
      )}
    </section>
  );
};

export default RegisterForm;

//verificar ruta hacia pagina con mensaje de registro exitoso
/*RUTA modal CHOOSE AVATAR*/
