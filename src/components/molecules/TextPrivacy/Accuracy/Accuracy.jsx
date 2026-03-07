import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Accuracy(){

    return(
        <section className={styles.privacy}>
            <h2>Accuracy and Truthfulness of Personal Data</h2>
            <p>You undertake that the data provided to <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;  is correct, complete, accurate, and current, and that you will keep it duly updated.</p>
            <p>As a User of <span className={styles.company_app}>{COMPANY_INFO.app}</span>, you are solely responsible for the accuracy and correctness of the data you submit to the site, releasing <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; from any responsibility in this regard.</p>
            <ul>
                <li>DoubleClick by Google</li>
            </ul>

            <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;  uses the information obtained to collect statistical data, analyze trends, administer the site, study browsing patterns, and gather demographic information.</p>
            </section>
    )
}
export default Accuracy;