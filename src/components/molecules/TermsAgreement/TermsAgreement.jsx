import CheckBox from "../../atoms/CheckBox/CheckBox";
import styles from "./terms-agreements.module.css";

const TermsAgreement = ({ children, checked, onChange }) => {
    return (
        <div className={styles.termsAgreement}>
            <CheckBox checked={checked} onChange={onChange} />
            <p className={styles.text}>
                { children }
            </p>
        </div>
    )
}

export default TermsAgreement