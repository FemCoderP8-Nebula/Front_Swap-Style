import { useState } from "react";
import styles from "./form-contact.module.css";
import apiContact from "../../../service/apiContact";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/classChange";

const FormContact = ({ onSubmit }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  await apiContact.send(form);
  alert("Mensaje enviado correctamente"); // --> sustituir por la modal pero de momento se queda así para las pruebas
};

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <legend>Contact Formulary</legend>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your name"
          onChange={handleChange}
          tabIndex={1}
          accessKey="n"
          required
          className={styles.input_contact}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your email"
          tabIndex={2}
          accessKey="e"
          onChange={handleChange}
          required
          className={styles.input_contact}
        />

        <input
          type="text"
          name="city"
          value={form.city}
          placeholder="Your city"
          tabIndex={3}
          accessKey="c"
          onChange={handleChange}
          required
          className={styles.input_contact}
        />

        <textarea
          name="message"
          value={form.message}
          placeholder="Your message"
          tabIndex={4}
          accessKey="m"
          onChange={handleChange}
          required
        />

      <label className={styles.checkbox_label}>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={form.acceptTerms}
          onChange={handleChange}
          accessKey="x"
          tabIndex={5}
          required/><p className={styles.textPrivacy}>&nbsp;I have read and agree to the &nbsp;<a href="/home/privacy" className={styles.contact_privacy}>Privacy Policy</a>.</p>
      </label>

        <div className={styles.field_btnContact}>
       <button type="submit" disabled={!form.acceptTerms} className={isMobile ? styles.liquid_mobile : styles.liquid}
      tabIndex={6}>Submit</button>
      <button type="button" className={styles.btnCancel} tabIndex={7} onClick={() => navigate("/home")}>Back</button>
      </div>
    </form>
  );
};

export default FormContact;