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
            <Link to="/faqs" className={styles.links}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.links}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.name_app}>Swap&Style©</div>
      <ul className={styles.footer_rrss}>
        <li className={styles.rrss}>
          <img src={Twitter} alt="logo X" />
          <a
            href="https://x.com/?lang=es"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            X
          </a>
        </li>
        <li className={styles.rrss}>
          <img src={Instagram} alt="logo Instagram" />
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
