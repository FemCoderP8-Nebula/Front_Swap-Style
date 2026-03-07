import styles from "./contact-address.module.css";

function ContactAddress(){

    return(
        <section className={styles.section_address}>
            <p className={styles.title_address}>Address</p>
            <address>Avinguda Bogatell, 82</address>
            <address>08005 Barcelona</address>
            <address>Phone: 93 138 71 00</address>
            <address><a href="mailto:swapstylestaff@gmail.com" className={styles.contact_email}>swapstylestaff@gmail.com</a></address>
        </section>
    )
}

export default ContactAddress;