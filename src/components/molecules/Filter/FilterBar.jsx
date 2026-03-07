import styles from "./bar-filter.module.css";
import { useState } from "react";
import CategorySelect from "../../atoms/Select/CategorySelect";
import PublishedRangeSelect from "../../atoms/Select/PublisedRangeSelect";

const FilterBar = ({ onFiltersChange, totalArticles }) => {
  const [filters, setFilters] = useState({
    category: "",
    range:"",
  });

  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFiltersChange?.(updated);
  };

  return (
    <div className={styles.filter_bar}>
      <CategorySelect
        value={filters.category}
        onChange={(val) => handleChange("category", val)}
      />

      <PublishedRangeSelect
        value={filters.range}
        onChange={(val) => handleChange("range", val)}
        />
      

      <span className={styles.total_label}>
        Total articles: {totalArticles} 
      </span>
    </div>
  );
};

export default FilterBar;
