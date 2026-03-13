import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import articleService from "../../../service/apiArticle";
import GalleryCard from "../../atoms/Card/GalleryCard";
import ImagePlaceholder from "../../../assets/placeholder.png";
import styles from "./view-wardrobe.module.css";
import Pagination from "../../molecules/Pagination/Pagination";

function ViewWardrobe() {
  const { user } = useAuth();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const size = 30;

  useEffect(() => {
  articleService.getByUser(user.id).then((res) => {
    setArticles(res);
    setTotalPages(Math.ceil(res.length / size));
  });
}, []);

const paginatedArticles = articles.slice(page * size, (page + 1) * size);

  return (
    <div className={styles.galleryWardrobe}>
      <h1 className={styles.titleWardrobe}>Your Wardrobe, {user.userName}</h1>
      <h6 className={styles.offers}>You are offering:</h6>

      {paginatedArticles.length === 0 ? (
  <p className={styles.noArticles}>You don't have published articles</p>
) : (
  <div className={styles.view_wardrobe}>
    {paginatedArticles.map((article, i) => (
      <GalleryCard
        key={i}
        id={article.id}
        title={article.title}
        category={article.category}
        date={article.published}
        user={article.sellerName}
        state={article.state}
        size={article.size}
        price={article.price}
        image={article.image}
      />
    ))}
  </div>
)}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default ViewWardrobe;