import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";
import Button from "../../../atoms/Button/Button";


function Changes(){

    return(
        <section className={styles.privacy}>
            <h3>Changes to the Privacy Policy</h3>
            <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; reserves the right to modify this Privacy Policy to adapt it to legislative or jurisprudential developments, as well as to industry practices.</p>

            <p>These policies will remain in effect until they are modified by duly published updates.</p>

            <div className={styles.btn_field}><Button text="Back" BtnClass="cancel" path={"/home/contact"}/></div>

            </section>
    )
}
export default Changes;