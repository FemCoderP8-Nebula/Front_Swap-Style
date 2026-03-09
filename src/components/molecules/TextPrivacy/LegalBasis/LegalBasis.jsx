import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function LegalBasis(){

    return(
        <section className={styles.privacy}>
            <h3>Legal Basis for Data Processing</h3>
            <p>The legal basis for processing your data is: <strong>consent</strong>.</p>
            <p>To contact <span className={styles.company_group}>{COMPANY_INFO.group}</span>, subscribe to a newsletter, or post comments on this Website, you must accept this Privacy Policy.</p>

            </section>
    )
}
export default LegalBasis;