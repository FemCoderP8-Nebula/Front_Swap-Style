import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";

function IntroPrivacy(){

    return(
        <div className={styles.privacy}>
        <h2>Privacy Policy</h2>    
        <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; informs you about its Privacy Policy regarding the processing and protection of the personal data of users and customers that may be collected through browsing or contracting services via the <span className={styles.company_app}>{COMPANY_INFO.app}</span>&nbsp; Website.</p>

        <p>In this regard, <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; guarantees compliance with current regulations on personal data protection, reflected in <strong>Organic Law 3/2018, of December 5</strong>, on Personal Data Protection and Guarantee of Digital Rights <strong>(LOPD GDD)</strong>. It also complies with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, regarding the protection of natural persons <strong>(GDPR)</strong>.</p>

        <p>The use of the Website implies acceptance of this Privacy Policy as well as the conditions included in the Legal Notice.</p>
        </div>
    )
}

export default IntroPrivacy;