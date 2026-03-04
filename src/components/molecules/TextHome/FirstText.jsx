import Button from "../../atoms/Button/Button";
import styles from "./first-text.module.css";
import Tshirt from "../../../assets/tshirts.png";


function FirstText(){
    
    return(
        <>
        <h1>Welcome to Swap&Style</h1>
        <div className={styles.first_paragraph}>
        <div className={styles.tshirt}><img src={Tshirt} alt="Re Use" title="Our Politics"/></div>
        <div className={styles.content}>
        <h2>Fashion with Purpose</h2>
        <h3>What is Swap&Style?</h3>
        <p className={styles.intro}>A social e-commerce where style meets sustainability. 
        We transform fashion consumption into a community-driven, 
        responsible experience.
        </p>

        <h4>Swap:</h4>
        <p className={styles.normal_text}>Give your pre-loved garments a second life.</p>

        <h4>Connect:</h4>
        <p className={styles.normal_text}>Join a community that shares your taste and interests.</p>

        <h4>Impact:</h4>
        <p className={styles.normal_text}>Adopt sustainable habits without sacrificing trends.</p>

        <h4>Discover:</h4>
        <p className={styles.normal_text}>Find unique pieces with their own story.</p>

        <Button text="Go to explore our World!" BtnClass="neon_invite" path={"/gallery"}/>
        </div>
        </div>
        </>
    )
}

export default FirstText