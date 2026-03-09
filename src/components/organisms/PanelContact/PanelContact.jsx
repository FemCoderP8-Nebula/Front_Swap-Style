import Address from "../../atoms/Address/ContactAdress";
import FormContact from "../../molecules/FormContact/FormContact";
import styles from "./panel-contact.module.css";



function PanelContact(){
    return(
        <section className={styles.panel_contact}>
            <div className={styles.section_address}>
            <Address/>
            </div>
            <div className={styles.section_formContact}>
            <FormContact/>
            </div>

        </section>
    )
}


export default PanelContact;