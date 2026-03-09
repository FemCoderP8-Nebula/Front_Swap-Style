import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Consent(){

    return(
        <section className={styles.privacy}>
            <h3>Acceptance and Consent</h3>

            <p>As a User of <span className={styles.company_app}>{COMPANY_INFO.app}</span>, you declare that you have been informed of the conditions regarding personal data protection, and you accept and consent to the processing of such data by <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; in the manner and for the purposes indicated in this Privacy Policy.</p>
            </section>
    )
}
export default Consent;