import { useEffect, useState } from "react";
import apiArticle from "../../../service/apiArticle";
import styles from "./category-select.module.css";

const CategorySelect = ({ value, onChange}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiArticle
      .getCategories()
      .then((data) => setCategories(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <select disabled><option>Loading...</option></select>;
  if (error)   return <select disabled><option>Error</option></select>;

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select_category}
    >
      <option value="">All the categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat.charAt(0) + cat.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;