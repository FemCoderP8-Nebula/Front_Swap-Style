import styles from "./reg-field.module.css";
import Button from "../../../atoms/Button/Button";
import classChange from "../../../../hooks/classChange";

function RegField() {
  const isMobile = classChange();

  return (
    <article className={styles.wrapperRegArticle}>
      <h3 className={styles.titleRegArtUser}>Register Articles?</h3>
      <div className={styles.fieldBtnRegArt}>
        <Button
          text="Register"
          BtnClass={isMobile ? "liquid_mobile" : "liquid"}
          path={"/home/regArticle"}
        />
      </div>
    </article>
  );
}

export default RegField;
