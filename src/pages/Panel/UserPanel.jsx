import UserPanel from "../../components/organisms/UserPanel/UserPanel";
import styles from "./panel.module.css";

const Panel = () => {
  return (
    <main role="main" className={styles.mainUserPanel}>
      <h1 className={styles.title_panel}>User Panel</h1>

      <UserPanel />
    </main>
  );
};

export default Panel;
