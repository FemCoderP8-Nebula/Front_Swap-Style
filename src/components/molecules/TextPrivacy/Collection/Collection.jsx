import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Collection(){

    return(
        <section className={styles.privacy}>
            <h2>Collection of Personal Data</h2>
            <p>To browse <span className={styles.company_app}>{COMPANY_INFO.app}</span>
            , you do not need to provide any personal data. The cases in which you do provide your personal data are the following:</p>

            <ul>
                <li>When subscribing to a subscription form or newsletter that <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
                 manages with <span className={styles.company_smtp}>{COMPANY_INFO.smtpService}</span>.</li>
            </ul>
        </section>

    )

}

export default Collection;