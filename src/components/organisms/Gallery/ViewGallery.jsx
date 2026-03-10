import React, { useState, useEffect } from "react";
import apiArticle from "../../../service/apiArticle";
import GalleryCard from "../../atoms/Card/GalleryCard";
import FilterBar from "../../molecules/Filter/FilterBar";
import Pagination from "../../molecules/Pagination/Pagination";
import styles from "./view-gallery.module.css";

const ViewGallery = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(30);
  const [totalPages, setTotalPages] = useState(0);
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    range: "",
  });
  const [totalArticles, setTotalArticles] = useState(0);

  const itemsPerPage = 30;
  const hasActiveFilter = activeFilters.category || activeFilters.range;

  const paginatedArticles = hasActiveFilter
    ? articles.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    : articles;

  const computedTotalPages = hasActiveFilter
    ? Math.ceil(articles.length / itemsPerPage)
    : totalPages;

  const fetchArticles = async (filters = activeFilters, currentPage = page) => {
    try {
      if (filters.category) {
        let data = await apiArticle.getByCategory(filters.category);
        if (filters.range === "OLDERS") {
          data = [...data].sort(
            (a, b) => new Date(a.published) - new Date(b.published),
          );
        } else {
          data = [...data].sort(
            (a, b) => new Date(b.published) - new Date(a.published),
          );
        }
        setArticles(data);
        setTotalArticles(data.length);
      } else if (filters.range) {
        const data = await apiArticle.getByPublishedRange(filters.range);
        if (filters.range === "OLDERS") {
          setArticles(
            [...data].sort(
              (a, b) => new Date(a.published) - new Date(b.published),
            ),
          );
        } else {
          setArticles(
            [...data].sort(
              (a, b) => new Date(b.published) - new Date(a.published),
            ),
          );
        }
        setTotalArticles(data.length);
      } else {
        const response = await apiArticle.getGallery(currentPage, size);
        setArticles(response.content);
        setTotalPages(response.page.totalPages);
        setTotalArticles(response.page.totalElements);
      }
    } catch (error) {
      setArticles([]);
      setTotalArticles(0);
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

  return (
    <div className={styles.body_gallery}>
      <FilterBar
        onFiltersChange={handleFiltersChange}
        totalArticles={totalArticles}
      />

      {paginatedArticles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem", color: "#888" }}>
          <p className={styles.not_found}>No articles found</p>
        </div>
      ) : (
        <div className={styles.gallery_view}>
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
              isReserved={article.isReserved}
            />
          ))}
        </div>
      )}

      <Pagination
        page={page}
        totalPages={computedTotalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ViewGallery;
