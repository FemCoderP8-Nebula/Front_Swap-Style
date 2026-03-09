import { COMPANY_INFO } from "../../../atoms/Info/ArrayPrivacy";
import styles from "../privacy.module.css";


function Purpose(){

    return(
        <section className={styles.privacy}>
            <h3>Purpose of Processing Personal Data</h3>
            <p>When you connect to the Website to send an email to <span className={styles.company_group}>{COMPANY_INFO.group}</span>, subscribe to its newsletter, or enter into a contract, you are providing personal information for which <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; is responsible. This information may include <strong>personal data such as your IP address, first and last name, physical address, email address, phone number, and other information</strong>. By providing this information, <strong>you give your consent</strong> for it to be collected, used, managed, and stored by <span className={styles.company_owner}>{COMPANY_INFO.owner}</span>, only as described in the Legal Notice and this Privacy Policy.</p>

            <p>The personal data and the purpose of processing by <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; vary depending on the information capture system:</p>

            <h4>Contact forms:</h4>
            <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             requests personal data which may include: first and last name, email address, phone number, and website address for the purpose of responding to your inquiries.</p>
            <p>For example, <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             uses this data to respond to your messages, questions, complaints, comments, or concerns related to the information included on the Website, the services provided through the Website, the processing of your personal data, issues related to the legal texts included on the Website, as well as any other inquiries you may have that are not subject to the Website’s conditions or contractual terms.</p>

            <h4>Content subscription forms:</h4>
            <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             requests the following personal data: first and last name, email address, phone number, and website address to manage the subscription list, send newsletters, promotions, and special offers.</p>
            <p>The data you provide to <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             will be located on the servers of <span className={styles.company_owner}>{COMPANY_INFO.owner}</span>
            , located at <span className={styles.company_address}>{COMPANY_INFO.address}</span>.</p>
            <p>There are other purposes for which <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
             processes your personal data:</p>
            <ul>
            <li>To ensure compliance with the conditions set out in the Legal Notice and applicable law. This may include the development of tools and algorithms to help this Website ensure the confidentiality of the personal data it collects.</li>
            <li>To support and improve the services offered by this Website.</li>
            <li>To analyze browsing behavior, <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
            collects other non-identifying data obtained through cookies downloaded to your computer when browsing the Website. Their characteristics and purpose are detailed in the Cookie Policy.</li>
            <li>To manage social media <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp;
            has a presence on social media platforms. If you become a follower of <span className={styles.company_group}>{COMPANY_INFO.group}</span> on social media, the processing of personal data will be governed by this section, as well as by the terms of use, privacy policies, and access regulations of the respective social network, which you have previously accepted.</li>
        </ul>
        <p>You can consult the privacy policies of the main social networks at the following links:</p>
           <p><a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer sponsored">X</a></p>
           <p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer sponsored">Instagram</a></p>
        <p><span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; will process your personal data to properly manage its presence on social media, inform you about its activities, products, or services, and for any other purpose permitted by the social networks’ regulations.</p>
        <p>Under no circumstances will <span className={styles.company_group}>{COMPANY_INFO.group}</span>&nbsp; use social media follower profiles to send individual advertising.</p>
        </section>

    )
}

export default Purpose;