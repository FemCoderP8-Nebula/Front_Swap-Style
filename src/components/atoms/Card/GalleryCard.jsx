import styles from "./gallery-card.module.css";
import Imagen from "../../../assets/IMAGEN_ARTICLE.png";
import { Link } from "react-router-dom";


function GalleryCard({ id, nombre, categoria, fecha, usuario, estado, tamaño, precio, imagen }){


    return(
        <>
        <Link to={`/home/info/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
        <p className={styles.title_card}>Nombre articulo</p>
        <div className={styles.subtitle_card}>
        <p className={styles.category_card}>Category</p>
        <p className={styles.date_card}>Date</p>
        </div>
        <div className={styles.image_card} style={{ backgroundImage: `url(${imagen || Imagen})` }}>
        <div className={styles.info_cardMobile}>
        <p className={styles.status_cardMobile}>Status</p>
        <p className={styles.prize_cardMobile}>12€</p>
        </div>
        </div>
        <div className={styles.info_card}>
        <p className={styles.user_card}>User</p>        
        <p className={styles.status_cardDesktop}>Status</p>
        <p className={styles.size_card}>Size</p>
        <p className={styles.prize_cardDesktop}>12€</p>
        </div>
        </div>
        </Link>
        
        </>


    )
}

export default GalleryCard;