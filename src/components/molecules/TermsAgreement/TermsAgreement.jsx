import CheckBox from "../../atoms/CheckBox/CheckBox";
import styles from "./TermsAgreement.module.css";

const TermsAgreement = ({ children, checked, onChange }) => {
    return (
        <div className={styles.TermsAgreement}>
            <CheckBox checked={checked} onChange={onChange} />
            <p className={styles.text}>
                { children }
            </p>
        </div>
    )
}

export default TermsAgreement