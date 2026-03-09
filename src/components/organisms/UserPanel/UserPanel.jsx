import styles from "./user-panel.module.css";
import Button from "../../atoms/Button/Button";
import UserField from "../../molecules/PanelParts/User/UserField";
import useAuth from "../../../hooks/useAuth";
import RegField from "../../molecules/PanelParts/Article/RegField";
import ViewWardrobe from "../../molecules/PanelParts/Wardrobe/ViewWardrobe";
import EditAvatar from "../../molecules/PanelParts/Avatar/EditAvatar";

function UserPanel() {
  const { user } = useAuth();

  return (
    <>
      <section className={styles.section_panel}>
        <h2 className={styles.subtitle_panel}>Do you want...</h2>
        <div className={styles.field_management}>
          <article className={styles.column_left}>
            <UserField initialName={user?.userName} userId={user?.id} />
            <RegField />
          </article>
          <article className={styles.column_right}>
            <EditAvatar />
            <ViewWardrobe />
          </article>
        </div>
      </section>
      <div className={styles.fieldBtnPanel}>
        <Button text="Back" BtnClass="cancel" path={"/home/gallery"} />
      </div>
    </>
  );
}

export default UserPanel;
