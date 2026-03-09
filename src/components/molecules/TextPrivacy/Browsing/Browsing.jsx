import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Browsing(){

    return(
        <section className={styles.privacy}>
            <h3>Web Browsing</h3>
            <p>When browsing <span className={styles.company_app}>{COMPANY_INFO.app}</span>, non-identifying data may be collected, including IP address, geolocation, records of how services and sites are used, browsing habits, and other data that cannot be used to identify you.</p>
            <p>The Website uses the following third-party analytics services:</p>
            <ul>
                <li>Google Analytics</li>
            </ul>

            </section>
    )
}
export default Browsing;