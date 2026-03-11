import styles from "./pagination.module.css";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const rangeSize = 5;
  const currentRange = Math.floor(page / rangeSize);
  const rangeStart = currentRange * rangeSize;
  const rangeEnd = Math.min(rangeStart + rangeSize, totalPages);

  const prevRange = () => onPageChange(Math.max(rangeStart - rangeSize, 0));
  const nextRange = () =>
    onPageChange(Math.min(rangeStart + rangeSize, totalPages - 1));

  if (totalPages <= 1) return null;

  return (
    <div className={styles.field_page}>
      <div className={styles.side_left}>
        {rangeStart > 0 && (
          <>
            <div className={styles.range_pageL}>
              {rangeStart - rangeSize + 1} - {rangeStart}
            </div>
            <button onClick={prevRange} className={styles.arrowsL}>
              &lt;&lt;
            </button>
          </>
        )}
      </div>

      <div className={styles.center}>
        <button
          onClick={() => onPageChange(Math.max(page - 1, 0))}
          disabled={page === 0}
          className={styles.arrows}
        >
          &lt;
        </button>

        {Array.from({ length: rangeEnd - rangeStart }, (_, i) => {
          const pageNum = rangeStart + i;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`${styles.page_btn} ${pageNum === page ? styles.active : ""}`}
            >
              {pageNum + 1}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(Math.min(page + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className={styles.arrows}
        >
          &gt;
        </button>
      </div>

      <div className={styles.side_right}>
        {rangeEnd < totalPages && (
          <>
            <button onClick={nextRange} className={styles.arrowsR}>
              &gt;&gt;
            </button>
            <div className={styles.range_pageR}>
              {rangeStart + rangeSize + 1} -{" "}
              {Math.min(rangeStart + rangeSize * 2, totalPages)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
