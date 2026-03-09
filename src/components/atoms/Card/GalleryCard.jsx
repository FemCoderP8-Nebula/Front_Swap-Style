import styles from "./gallery-card.module.css";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../../../assets/placeholder.png";

function GalleryCard({
  id,
  title,
  category,
  date,
  user,
  state,
  size,
  price,
  image,
}) {
  const resolvedImage =
    !image || image === "placeholder" ? ImagePlaceholder : image;

  return (
    <>
      <Link to={`/home/info/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <p className={styles.title_card}>{title}</p>
          <div className={styles.subtitle_card}>
            <p className={styles.category_card}>{category}</p>
            <p className={styles.date_card}>{date}</p>
          </div>
          {/*<div className={styles.image_card} style={{ backgroundImage: `url(${image})`  }}> */}

          <div
            className={styles.image_card}
            style={{ backgroundImage: `url(${resolvedImage})` }}
          >
            <div className={styles.info_cardMobile}>
              <p className={styles.status_cardMobile}>{state}</p>
              <p className={styles.prize_cardMobile}>{price}€</p>
            </div>
          </div>
          <div className={styles.info_card}>
            <p className={styles.user_card}>{user}</p>
            <p className={styles.status_cardDesktop}>{state}</p>
            <p className={styles.size_card}>{size} </p>
            <p className={styles.prize_cardDesktop}>{price}€</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default GalleryCard;
