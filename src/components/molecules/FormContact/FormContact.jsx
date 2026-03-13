import { useState } from "react";
import styles from "./form-contact.module.css";
import apiContact from "../../../service/apiContact";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/classChange";
import MessageModal from "../../organisms/ModalMessage/MessageModal";
import CheckGif from "../../../assets/check.gif";

const validate = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "User name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email format";
  }

  if (!form.city.trim()) {
    errors.city = "City is required";
  }

  if (!form.message.trim()) {
    errors.message = "A message is required";
  } else if (form.message.length < 2 || form.message.length > 500) {
    errors.message = "The message can't exceed 500 characters";
  }

  return errors;
};

const FormContact = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
    acceptTerms: false,
  });
  const [touched, setTouched] = useState({});
  const [serverErrors, setServerErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (serverErrors[name]) {
      setServerErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, city: true, message: true });

    const frontendErrors = validate(form);
    if (Object.keys(frontendErrors).length > 0) return;

    try {
      await apiContact.send(form);
      setIsModalOpen(true);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data) {
        setServerErrors(error.response.data);
      }
    }
  };

  const frontendErrors = validate(form);
  const getError = (field) =>
    (touched[field] && frontendErrors[field]) || serverErrors[field];

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <legend>Contact Formulary</legend>

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your name"
          onChange={handleChange}
          onBlur={handleBlur}
          tabIndex={1}
          accessKey="n"
          aria-label="User Name"
          className={styles.input_contact}
        />
        <div className={styles.error}>{getError("name") || ""}</div>

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your email"
          tabIndex={2}
          accessKey="e"
          aria-label="User Email"
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input_contact}
        />
        <div className={styles.error}>{getError("email") || ""}</div>

        <input
          type="text"
          name="city"
          value={form.city}
          placeholder="Your city"
          tabIndex={3}
          accessKey="c"
          aria-label="User City"
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input_contact}
        />
        <div className={styles.error}>{getError("city") || ""}</div>

        <textarea
          name="message"
          value={form.message}
          placeholder="Your message"
          tabIndex={4}
          accessKey="m"
          aria-label="User Message"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={styles.error}>{getError("message") || ""}</div>

        <label className={styles.checkbox_label}>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
            accessKey="x"
            tabIndex={5}
            required
          />
          <p className={styles.textPrivacy}>
            &nbsp;I have read and agree to the&nbsp;
            <a href="/home/privacy" className={styles.contact_privacy}>Privacy Policy</a>.
          </p>
        </label>

        <div className={styles.field_btnContact}>
          <button
            type="submit"
            disabled={!form.acceptTerms}
            className={isMobile ? styles.liquid_mobile : styles.liquid}
            tabIndex={6}
          >
            Send
          </button>
          <button
            type="button"
            className={styles.btnCancel}
            tabIndex={7}
            onClick={() => navigate("/home")}
          >
            Back
          </button>
        </div>
      </form>

      {isModalOpen && (
        <MessageModal
          image={CheckGif}
          message="Your Message has been sent"
          btnText="Back"
          btnPath="/home"
          btnClass="liquid"
        />
      )}
    </>
  );
};

export default FormContact;