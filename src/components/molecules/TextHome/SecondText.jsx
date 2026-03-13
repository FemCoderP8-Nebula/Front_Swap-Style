import styles from "./second-text.module.css";
import Image1 from "../../../assets/Rectangle1.png";
import Image2 from "../../../assets/Rectangle2.png";
import Image3 from "../../../assets/Rectangle3.png";
import Image4 from "../../../assets/Rectangle4.png";
import Button from "../../atoms/Button/Button";
import { useState, useEffect } from "react";
import MessageModal from "../../organisms/ModalMessage/MessageModal";
import alertGif from "../../../assets/alertGif.gif";

function SecondText() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.second_content}>
        <h3 className={styles.h3_subtitle}>
          {" "}
          Our Vision has four core pillars:
        </h3>

        <div className={styles.grid_container}>
          <div
            className={`${styles.item} ${styles.large} ${styles.title_cell}`}
          >
            Sustainable
          </div>
          <div
            className={`${styles.item} ${styles.large} ${styles.title_cell}`}
          >
            Affordable
          </div>
          <div
            className={`${styles.item} ${styles.large} ${styles.title_cell}`}
          >
            Social
          </div>
          <div
            className={`${styles.item} ${styles.large} ${styles.title_cell}`}
          >
            Empowering
          </div>

          <div className={`${styles.item} ${styles.image_cell}`}>
            <img src={Image1} alt="Sustainable" />
          </div>
          <div className={`${styles.item} ${styles.text_cell}`}>
            Less waste, more conscious choices.
          </div>
          <div className={`${styles.item} ${styles.image_cell}`}>
            <img src={Image2} alt="Affordable" />
          </div>
          <div className={`${styles.item} ${styles.text_cell}`}>
            Great style within everyone's reach.
          </div>
          <div className={`${styles.item} ${styles.image_cell}`}>
            <img src={Image3} alt="Social" />
          </div>
          <div className={`${styles.item} ${styles.text_cell}`}>
            A network built on human connection.
          </div>
          <div className={`${styles.item} ${styles.image_cell}`}>
            <img src={Image4} alt="Empowering" />
          </div>
          <div className={`${styles.item} ${styles.text_cell}`}>
            Wear who you are while protecting the planet.
          </div>
        </div>
      </div>
      <h2 className={styles.final_conclussion}>
        "Redefining the future of style—one swap at a time."
      </h2>
      <div className={styles.btnInv_mobile}>
        <Button
          text="Go to explore our World!"
          BtnClass="neon_invite"
          onClick={() => setShowRegisterModal(true)}
        />
      </div>
      <div className={styles.btn_field}>
        <Button
          text="Register"
          BtnClass={isMobile ? "liquid_mobile" : "liquid"}
          path={"/home/register"}
        />
      </div>
      {showRegisterModal && (
        <MessageModal
          image={alertGif}
          message="Under construction. Please register to explore our World!"
          btnText="Register"
          btnPath="/home/register" 
          btnClass="liquid"
        />
      )}
    </>
  );
}

export default SecondText;
