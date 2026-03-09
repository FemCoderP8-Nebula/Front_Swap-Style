import React, { useState, useEffect } from "react";
import apiArticle from "../../../service/apiArticle";
import GalleryCard from "../../atoms/Card/GalleryCard";
import FilterBar from "../../molecules/Filter/FilterBar";
import styles from "./view-gallery.module.css";

const ViewGallery = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(30);
  const [totalPages, setTotalPages] = useState(0);
  const [activeFilters, setActiveFilters] = useState({ category: "", range: "" });

  const fetchArticles = async (filters = activeFilters, currentPage = page) => {
  try {
    if (filters.category) {
      const data = await apiArticle.getByCategory(filters.category);
      setArticles(data);
      setTotalPages(1);
    } else if (filters.range) {
      const data = await apiArticle.getByPublishedRange(filters.range);
      setArticles(data);
      setTotalPages(1);
    } else {
      const data = await apiArticle.getGallery(currentPage, size);
      setArticles(data.content);
      setTotalPages(data.totalPages);
    }
  } catch (error) {
    setArticles([]);
  }
};

  useEffect(() => {
    fetchArticles(activeFilters, page);
  }, [page]);

  const handleFiltersChange = (filters) => {
    setActiveFilters(filters);
    setPage(0);
    fetchArticles(filters, 0);
  };

  const nextOne = () => setPage(prev => Math.min(prev + 1, totalPages - 1));
  const prevOne = () => setPage(prev => Math.max(prev - 1, 0));
  const nextFive = () => setPage(prev => Math.min(prev + 5, totalPages - 1));
  const prevFive = () => setPage(prev => Math.max(prev - 5, 0));

  const hasActiveFilter = activeFilters.category || activeFilters.range;

  return (
    <div>
      <FilterBar
        onFiltersChange={handleFiltersChange}
        totalArticles={articles.length}
      />

      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem", color: "#888" }}>
          <p className={styles.not_found}>No articles found</p>
        </div>
      ) : (
        <div className={styles.gallery_view}>
          {articles.map((article, i) => (
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

      {!hasActiveFilter && (
        <div>
          <button onClick={prevFive}>&lt;&lt;5</button>
          <button onClick={prevOne}>&lt;1</button>
          Página {page + 1} de {totalPages}
          <button onClick={nextOne}>1&gt;</button>
          <button onClick={nextFive}>5&gt;&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ViewGallery;