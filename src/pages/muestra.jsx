import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiArticle from "../service/apiArticle";
import apiReserve from "../service/apiReserve";
import useCountdown from "../hooks/useCountdown";
import useAuth from "../hooks/useAuth";
import { STATE_LABELS } from "../components/atoms/States/States";
import ImagePlaceholder from "../assets/placeholder.png";
import styles from "./muestra.module.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const timeLeft = useCountdown(article?.isReserved ? article?.expiryDate : null);

  const fetchArticle = async () => {
    try {
      const data = await apiArticle.getById(id);
      setArticle(data);
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const handleToggleReserve = async () => {
    try {
      await apiReserve.toggle(article.id, user.id);
      fetchArticle();
    } catch (error) {
      console.error("Error toggling reservation:", error);
    }
  };

  const isOwner = user?.id === article?.idUser;
  const isReservedByMe = article?.isReserved && user?.id === article?.reservedByUserId;
  const isReservedByOther = article?.isReserved && user?.id !== article?.reservedByUserId;

  const resolvedImage = !article?.image || article?.image === "placeholder"
    ? ImagePlaceholder
    : article?.image;

  if (isLoading) return <p>Loading...</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <section className={styles.container}>
      <img src={resolvedImage} alt={article.title} className={styles.image} />

      <div className={styles.info}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.description}>{article.description}</p>

        <div className={styles.details}>
          <p><strong>Price:</strong> {article.price}€</p>
          <p><strong>Size:</strong> {article.size}</p>
          <p><strong>State:</strong> {STATE_LABELS[article.state] || article.state}</p>
          <p><strong>Category:</strong> {article.category}</p>
          <p><strong>Seller:</strong> {article.sellerName}</p>
        </div>

        {article.isReserved && timeLeft && (
          <div className={styles.countdown}>
            <p>Reserved — expires in: {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
          </div>
        )}

        {!isOwner && user && (
          <button
            onClick={handleToggleReserve}
            disabled={isReservedByOther}
            className={
              isReservedByOther
                ? styles.btnBlocked
                : isReservedByMe
                ? styles.btnCancel
                : styles.btnReserve
            }
          >
            {isReservedByOther
              ? "Not available"
              : isReservedByMe
              ? "Cancel Reservation"
              : "Reserve"}
          </button>
        )}

        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </section>
  );
};

export default ArticleDetail;