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
    <>
    
    <div className={styles.filter_bar}>
      <div className={styles.filter_by}><p className={styles.text_filter}>Filter by...</p></div>
      <div className={styles.filter_selectCategory}>
      <CategorySelect
        value={filters.category}
        onChange={(val) => handleChange("category", val)}
      />
    </div>
    <div className={styles.filter_selectRange}>
      <PublishedRangeSelect
        value={filters.range}
        onChange={(val) => handleChange("range", val)}
        />
      </div>

      <div className={styles.total_label}>
        <div className={styles.total}>
        Total articles: {totalArticles} 
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterBar;
