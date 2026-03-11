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

  const [modalConfig, setModalConfig] = useState({
    show: false,
    image: null,
    message: "",
    btnText: "",
    btnPath: "",
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
      avatar: avatarKey,
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
        role: "USER",
      };
      console.log("Objeto exacto que sale hacia el servidor:", dataToBackend);
      const response = await userService.register(dataToBackend);
      login(response);
      setModalConfig({
        show: true,
        image: checkGif,
        message: "User Registered Successfully!",
        btnText: "Go to Gallery",
        btnPath: "/home/gallery",
      });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setModalConfig({
          show: true,
          image: USER,
          message: "This email is already registered, Please log in!",
          btnText: "Go to Login",
          btnPath: "/home/login",
        });
      } else {
        alert("Server problem, try again!");
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
          <img
            src={user.avatar ? AVATARS[user.avatar] : USER}
            alt="Register User Logo"
          />
          <p>Choose your Avatar</p>
          <Button
            text="Gallery"
            BtnClass="liquid_mobile"
            type="button"
            onClick={() => setShowAvatarsModal(true)}
          />
        </div>
        <div className={styles.accions}>
          <div className={styles.actions}>
            <TermsAgreement
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            >
              I have read and agree to the <a href="/home/privacy">Privacy Policy</a>
            </TermsAgreement>
          </div>
          <div className={styles.actions}>
            <Button text="Register" BtnClass="neon" type="submit" />
            <Button text="Cancel" BtnClass="cancel" path="/home" />
          </div>
        </div>
      </form>
      {showAvatarsModal && (
        <AvatarModal
          isOpen={showAvatarsModal}
          currentAvatar={user.avatar}
          onSelect={handleAvatarSelect}
          onClose={() => setShowAvatarsModal(false)}
        />
      )}
      {modalConfig.show && (
        <MessageModal
          image={modalConfig.image}
          message={modalConfig.message}
          btnText={modalConfig.btnText}
          btnPath={modalConfig.btnPath}
          btnClass="liquid"
        />
      )}
    </section>
  );
};

export default RegisterForm;

