import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Recipient(){

    return(
        <section className={styles.privacy}>
            <h3>Recipients of Personal Data</h3>
            <p><span className={styles.company_owner}>{COMPANY_INFO.owner}</span>, a technological development training entity, with registered office at <span className={styles.company_address}>{COMPANY_INFO.address}</span>.</p>
            <p>More information at:<a href="https://factoriaf5.org/contacto/" target="_blank"><span className={styles.company_owner}>{COMPANY_INFO.owner}</span></a></p>
            </section>
            )
        }
export default Recipient;