import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import articleService from "../../../service/apiArticle";
import GalleryCard from "../../atoms/Card/GalleryCard";
import ImagePlaceholder from "../../../assets/placeholder.png";
import styles from "./view-wardrobe.module.css";


function ViewWardrow(){
 const { user } = useAuth();
  const [articles, setArticles] = useState([]);
 useEffect(() => {
    articleService.getByUser(user.id).then(setArticles);
  }, []);
    return(
<div className={styles.galleryWardrobe}>
    <h1 className={styles.titleWardrobe}>Your Wardrobe, {user.userName}</h1>
    <h6 className={styles.offers}>You are offering:</h6>
        {articles.length === 0 ? (
          <p className={styles.noArticles}>You don't have published articles</p>
        ) : (
          articles.map((article, i) => (
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
              image={(!article.image || article.image === "placeholder") ? ImagePlaceholder : article.image}
            />
          ))
        )}
      </div>
    )
}

export default ViewWardrow;