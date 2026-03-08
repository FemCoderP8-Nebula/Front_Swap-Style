import styles from "./view-wardrobe.module.css";
import Button from "../../../atoms/Button/Button";
import classChange from "../../../../hooks/classChange";

function RegField() {
  const isMobile = classChange();

  return (
    <article className={styles.wrapperWardrobe}>
      <h3 className={styles.titleWardrobePanel}>Manage your Wardrobe?</h3>
      <div className={styles.fieldBtnViewWardrobe}>
        <Button
          text="Wardrobe"
          BtnClass={isMobile ? "liquid_mobile" : "liquid"}
          path={"/home/wardrobe"}
        />
      </div>
    </article>
  );
}

export default RegField;
