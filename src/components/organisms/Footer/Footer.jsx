import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/X.png";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className={styles.footer_info}>
        <ul className={styles.menu}>
          <li>
            <Link
              to="/faqs"
              className={styles.links}
              title="Frequently Asked Questions"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/home/contact" className={styles.links} title="Contact us!">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.name_app}>Swap&Style©</div>

      <div className={styles.footer_rrss}>
        <ul className={styles.item_rrss}>
          <li className={styles.rrss}>
            <a
              href="https://x.com/?lang=es"
              target="_blank"
              rel="noopener noreferrer sponsored"
              title="Visit our site in X"
            >
              <img src={Twitter} alt="logo X" />
            </a>
          </li>
          <li className={styles.rrss}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              title="Visit our site in Instagram"
            >
              <img src={Instagram} alt="logo Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
