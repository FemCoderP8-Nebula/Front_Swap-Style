import styles from "./second-text.module.css";
import Image1 from "../../../assets/Rectangle1.png";
import Image2 from "../../../assets/Rectangle2.png";
import Image3 from "../../../assets/Rectangle3.png";
import Image4 from "../../../assets/Rectangle4.png"
import Button from "../../atoms/Button/Button";


function SecondText(){
    
    return(

        <>
        <div className={styles.second_content}>
        <h3> Our Vision has four core pillars:</h3>
        <div className={styles.grid_container}>

        <div className={`${styles.item} ${styles.large} ${styles.title_cell}`}>Sustainable</div>
        <div className={`${styles.item} ${styles.large} ${styles.title_cell}`}>Affordable</div>
        <div className={`${styles.item} ${styles.large} ${styles.title_cell}`}>Social</div>
        <div className={`${styles.item} ${styles.large} ${styles.title_cell}`}>Empowering</div>

  
  <div className={`${styles.item} ${styles.image_cell}`}><img src={Image1} alt="Sustaninable" title="Sustanaible"/></div>
  <div className={`${styles.item} ${styles.text_cell}`}>Less waste, more conscious choices.</div>
  <div className={`${styles.item} ${styles.image_cell}`}><img src={Image2} alt="Affordable" title="Affordable"/></div>
  <div className={`${styles.item} ${styles.text_cell}`}>Great style within everyone's reach.</div>
  <div className={`${styles.item} ${styles.image_cell}`}><img src={Image3} alt="Social" title="Social"/></div>
  <div className={`${styles.item} ${styles.text_cell}`}>A network built on human connection.</div>
  <div className={`${styles.item} ${styles.image_cell}`}><img src={Image4} alt="Empowering" title="Empowering"/></div>
  <div className={`${styles.item} ${styles.text_cell}`}>Wear who you are while protecting the planet.</div>

</div>
<h2 className={styles.final_conclussion}>"Redefining the future of style—one swap at a time."</h2>
<Button text="Register" BtnClass="liquid" path={"/register"}/>
</div>
        </>
    )
}

export default SecondText