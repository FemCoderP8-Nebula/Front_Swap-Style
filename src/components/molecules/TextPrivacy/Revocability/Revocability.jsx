import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Revocability(){

    return(
        <section className={styles.privacy}>
            <h3>Revocability</h3>
            <p>To exercise your rights of access, rectification, erasure, portability, and objection, you must send an email to <a href={`mailto:${COMPANY_INFO.email}`} className={styles.company_email}>{COMPANY_INFO.email}</a> along with valid proof of identity, such as a photocopy of your ID card or equivalent document.</p>

            <p>The exercise of your rights does not include any data that <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; is required to retain for administrative, legal, or security purposes.</p>

            </section>
    )
}
export default Revocability;