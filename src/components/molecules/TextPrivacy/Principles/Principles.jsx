import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Principles(){

    return(
        <div className={styles.privacy}>
        <h2>Principles Applied to Data Processing</h2>
        <p>When processing your personal data, <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will apply the following principles in accordance with the requirements of the new European data protection regulation:</p>

        <h4>Principle of lawfulness, fairness, and transparency:</h4>
        <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will always request consent for the processing of your personal data for one or more specific purposes, about which you will be informed in advance with complete transparency.</p>

        <h4>Principle of data minimization:</h4>
        <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will request only the data strictly necessary for the purpose or purposes for which it is requested.</p>

        <h4>Principle of storage limitation:</h4>
        <p>Data will be retained only for the time strictly necessary for the purpose or purposes of processing.</p>
        <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will inform you of the corresponding retention period depending on the purpose. In the case of subscriptions,<span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will periodically review the lists and delete records that have been inactive for a considerable period of time.</p>

        <h4>Principle of integrity and confidentiality:</h4>
        <p>Your data will be processed in such a way that its security, confidentiality, and integrity are guaranteed. You should be aware that <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; takes the necessary precautions to prevent unauthorized access or improper use of users’ data by third parties.</p>
        </div>
    )
}

export default Principles;