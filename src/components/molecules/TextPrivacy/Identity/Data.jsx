import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Identity(){

    return(
        <section className={styles.privacy}>
        <h2>Identity of the Data Controller</h2>
        <p>Owner: <span className={styles.company_group}>{COMPANY_INFO.group}</span> , &nbsp;<span className={styles.company_owner}>{COMPANY_INFO.owner}</span></p>
        <p>Tax ID (NIF/CIF): <span className={styles.company_id}>{COMPANY_INFO.taxId}</span></p>
        <p>Address: <span className={styles.company_address}>{COMPANY_INFO.address}</span></p>
        <p>Email: <span className={styles.company_email}>{COMPANY_INFO.email}</span></p>
        <p>Website: <span className={styles.company_website}>{COMPANY_INFO.website}</span></p>
</section>
    )
}

export default Identity;