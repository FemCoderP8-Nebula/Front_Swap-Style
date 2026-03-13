import Button from "../../atoms/Button/Button";
import styles from "./first-text.module.css";
import Tshirt from "../../../assets/tshirts.png";
import { useState } from "react";
import MessageModal from "../../organisms/ModalMessage/MessageModal";
import alertGif from "../../../assets/alertGif.gif";

function FirstText() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <h1>Welcome to Swap&Style</h1>
      <div className={styles.first_paragraph}>
        <div className={styles.tshirt}>
          <img src={Tshirt} alt="Re Use" title="Our Politics" />
        </div>
        <div className={styles.content}>
          <h2>Fashion with Purpose</h2>
          <h3>What is Swap&Style?</h3>
          <p className={styles.intro}>
            A social e-commerce where style meets sustainability. We transform
            fashion consumption into a community-driven, responsible experience.
          </p>

          <h4>Swap:</h4>
          <p className={styles.normal_text}>
            Give your pre-loved garments a second life.
          </p>

          <h4>Connect:</h4>
          <p className={styles.normal_text}>
            Join a community that shares your taste and interests.
          </p>

          <h4>Impact:</h4>
          <p className={styles.normal_text}>
            Adopt sustainable habits without sacrificing trends.
          </p>

          <h4>Discover:</h4>
          <p className={styles.normal_text}>
            Find unique pieces with their own story.
          </p>

          <div className={styles.btnInv_desk}>
            <Button
              text="Go to explore our World!"
              BtnClass="neon_invite"
              onClick={() => setShowRegisterModal(true)}
            />
          </div>
        </div>
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

export default FirstText;
