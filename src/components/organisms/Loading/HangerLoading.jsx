import styles from "./hanger-loading.module.css"
import clothes from "../../../assets/ropa-de-mujer.gif"
import LoadingMessages from "../../molecules/LoadingMessages/LoadingMessages"
import phrases from "../../atoms/Phrases/ArrayPhrases"
import { useNavigate } from 'react-router';
import { useEffect } from "react"

function HangerLoading(){
const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home")
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigate])

    return(

<>
<div className={styles.loadingContainer}>
<div className={styles.image_content}>
<img src={clothes} className={styles.loading_image} alt="Swap&Style EcoCommerce"/>
</div>
<div className={styles.title}>
  <span className={styles.letter_s}>S</span>
  <span className={styles.letter_w}>w</span>
  <span className={styles.letter_a}>a</span>
  <span className={styles.letter_p}>p</span>
  <span className={styles.letter_and}>&</span>
  <span className={styles.letter_s1}>S</span>
  <span className={styles.letter_t}>t</span>
  <span className={styles.letter_y}>y</span>
  <span className={styles.letter_l}>l</span>
  <span className={styles.letter_e}>e</span>
  
  </div>
  
    <LoadingMessages messages={phrases} interval={2000} />
    </div>
  </>
)
}

export default HangerLoading