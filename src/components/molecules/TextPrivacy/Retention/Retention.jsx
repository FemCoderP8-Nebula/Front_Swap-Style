import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Retention(){

    return(
        <section className={styles.privacy}>
            <h3>Retention of Personal Data</h3>
            <p>The personal data you provide to <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             will be retained until you request its deletion.</p>
            </section>
            )
        }
export default Retention;
