import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Security(){

    return(
        <section className={styles.privacy}>
            <h3>Security of Personal Data</h3>
            <p>To protect your personal data, <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
            takes all reasonable precautions and follows industry best practices to prevent its loss, misuse, unauthorized access, disclosure, alteration, or destruction.</p>

            <p>The Website is hosted by <span className={styles.company_owner}>{COMPANY_INFO.owner}</span>. The security of your data is guaranteed, as they take all necessary security measures. You can consult their privacy policy for more information.</p>
        </section>
    )
}

export default Security;