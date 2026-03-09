import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Categories(){

    return(
        <section className={styles.privacy}>
            <h3>Categories of Personal Data</h3>
            <p>The categories of personal data processed by <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             are:</p>
            <ul>
                <li>Identification data.</li>
            </ul>

            </section>
    )
}

export default Categories;