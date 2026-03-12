import { useState, useContext } from "react";
import TermsAgreement from "../../molecules/TermsAgreement/TermsAgreement";
import styles from "./register-form.module.css";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import userService from "../../../service/apiAccount";
import USER from "../../../assets/user.png";
import { AuthContext } from "../../../context/auth/AuthContext";
import AvatarModal from "../../molecules/ModalAvatar/AvatarModal";
import MessageModal from "../ModalMessage/MessageModal";
import checkGif from "../../../assets/check.gif";
import AVATARS from "../../atoms/Avatars/CollectionAvatars";

const validate = (user) => {
  const errors = {};
  if (!user.name.trim()) errors.name = "Name is required";
  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    errors.email = "Invalid email format";
  }
  if (!user.password.trim()) {
    errors.password = "Password is required";
  } else if (user.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!user.avatar) errors.avatar = "Please select an avatar";
  return errors;
};

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showAvatarsModal, setShowAvatarsModal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [serverErrors, setServerErrors] = useState({});

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    if (serverErrors[name]) {
      setServerErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleAvatarSelect = (avatarKey) => {
    setUser((prev) => ({ ...prev, avatar: avatarKey }));
  };

  const frontendErrors = validate(user);

  const getError = (field) =>
    (touched[field] && frontendErrors[field]) || serverErrors[field];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, avatar: true });

    const errors = validate(user);
    if (Object.keys(errors).length > 0) return;

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
        avatar: user.avatar || null,
        role: "USER",
      };
      const response = await userService.register(dataToBackend);
      login(response);
      setShowCheckModal(true);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data) {
        setServerErrors(error.response.data);
      } else if (error.response?.status === 500) {
        alert("User already registered, please log in!");
        navigate("/home/login");
      } else {
        alert(`Server problem (Error ${error.response?.status})`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.desktopOnly}>Form </span>Register
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
            onBlur={handleBlur}
            error={getError("name")}
            tabIndex={1}
            accessKey="n"
            aria-label="User Name"
          />
          <FormField
            label="Email"
            name="email"
            value={user.email}
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("email")}
            tabIndex={2}
            accessKey="e"
            aria-label="Email address"
          />
          <FormField
            label="Password"
            name="password"
            value={user.password}
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("password")}
            tabIndex={3}
            accessKey="p"
            aria-label="Account Password"
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
            onClick={() => setShowAvatarsModal(true)}
          />
          <div className={styles.error}>{getError("avatar") || ""}</div>
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
            <Button
              text="Register"
              BtnClass="neon"
              type="submit"
              disabled={isLoading}
            />
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
