import Reserved from "../../../assets/reserved.png";
import ImagePlaceholder from "../../../assets/placeholder.png";
import styles from "./gallery-card.module.css";
import { Link } from "react-router-dom";

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
  isReserved,
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

          <div
            className={styles.image_card}
            style={{ backgroundImage: `url(${resolvedImage})` }}
          >
            {isReserved && (
              <div className={styles.reserved_badge}>
                <img src={Reserved} alt="Article" title="Reserved" />
              </div>
            )}
            <div className={styles.info_cardMobile}>
              <p className={styles.status_cardMobile}>{state}</p>
              <p className={styles.prize_cardMobile}>{price}€</p>
            </div>
          </div>

          <div className={styles.info_card}>
            <p className={styles.user_card}>{user}</p>
            <p className={styles.status_cardDesktop}>{state}</p>
            <p className={styles.size_card}>{size}</p>
            <p className={styles.prize_cardDesktop}>{price}€</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default GalleryCard;
