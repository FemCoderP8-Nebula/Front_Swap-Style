import Reserved from "../../../assets/reserved.png";
import ImagePlaceholder from "../../../assets/placeholder.png";
import styles from "./gallery-card.module.css";
import { Link } from "react-router-dom";
import useCountdown from "../../../hooks/useCountdown";
import { STATE_LABELS } from "../../atoms/States/States";

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
  expiryDate,
}) {
  const resolvedImage =
    !image || image === "placeholder" ? ImagePlaceholder : image;

  const timeLeft = useCountdown(isReserved ? expiryDate : null);
  console.log(expiryDate);

  return (
    //<Link to={`/home/info/${id}`} className={styles.cardLink}>
    <Link to={`/home/prueba/${id}`} className={styles.cardLink}>
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
          {isReserved && timeLeft && (
            <div className={styles.reserved_badge}>
              <img src={Reserved} alt="Article" title="Reserved" />
              <p className={styles.countdown}>
                {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>
            </div>
          )}

          <div className={styles.info_cardMobile}>
            <p className={styles.status_cardMobile}>
              {STATE_LABELS[state] || state}
            </p>
            <p className={styles.prize_cardMobile}>{price}€</p>
          </div>
        </div>

        <div className={styles.info_card}>
          <p className={styles.user_card}>{user}</p>
          <p className={styles.status_cardMobile}>
            {STATE_LABELS[state] || state}
          </p>
          <p className={styles.size_card}>{size}</p>
          <p className={styles.prize_cardDesktop}>{price}€</p>
        </div>
      </div>
    </Link>
  );
}

export default GalleryCard;
