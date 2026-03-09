import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Rights(){

    return(
        <section className={styles.privacy}>
            <h3>Your Rights</h3>
            <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
            informs you that regarding your personal data, you have the right to:</p>

            <ul>
            <li>Request access to the stored data.</li>
            <li>Request rectification or erasure.</li>
            <li>Request restriction of processing.</li>
            <li>Object to processing.</li>
            <li>Request data portability.</li>
            </ul>
            <p>The exercise of these rights is personal and must therefore be exercised directly by the data subject, by contacting <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             directly. This means that any customer, subscriber, or collaborator who has provided their data at any time may contact <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             to request information about the data stored and how it was obtained, request rectification, request portability of personal data, object to processing, restrict its use, or request deletion of such data from <span className={styles.company_group}>{COMPANY_INFO.group}</span>
            ’s files.</p>

            <p>To exercise your rights of access, rectification, erasure, portability, and objection, you must send an email to <a href={`mailto:${COMPANY_INFO.email}`} className={styles.company_email}>{COMPANY_INFO.email}</a> 
             along with valid proof of identity, such as a photocopy of your ID card or equivalent document.</p>

            <p>You have the right to effective judicial protection and to lodge a complaint with the supervisory authority, in this case, the Spanish Data Protection Agency, if you believe that the processing of personal data concerning you infringes the Regulation.</p>
        </section>

    )
}

export default Rights;