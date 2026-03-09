import styles from "./published-select.module.css";


const RANGE_LABELS = {
  LAST_24HS: "Last 24hs",
  LAST_WEEK: "Last week",
  LAST_MONTH: "Last month",
  OLDERS: "Olders",
};

const PublishedRangeSelect = ({ value, onChange, className = "" }) => {
  const ranges = Object.keys(RANGE_LABELS);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      <option value="">Date</option>
      {ranges.map((range) => (
        <option key={range} value={range}>
          {RANGE_LABELS[range]}
        </option>
      ))}
    </select>
  );
};

export default PublishedRangeSelect;
