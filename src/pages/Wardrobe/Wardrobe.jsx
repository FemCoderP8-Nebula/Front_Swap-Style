import styles from "./wardrobe.module.css";
import Button from "../../components/atoms/Button/Button";
import ViewWardrow from "../../components/organisms/Wardrobe/ViewWardrobe";

const Wardrobe = () => {
  return (
    <main role="main" className={styles.mainWardrobe}>
      <ViewWardrow />
      <div className={styles.btnBack}>
        <Button text="Back" BtnClass="cancel" path="/home/panel" />
      </div>
    </main>
  );
};

export default Wardrobe;
