import { useState, useRef, useEffect } from "react";
import styles from "./price-field.module.css";
import Pen from "../../../../assets/pen.png";

function PriceField({ initialValue, onSave, userOffers, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (tempValue && tempValue !== initialValue) {
      onSave(tempValue);
    } else {
      setTempValue(initialValue);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setTempValue(initialValue);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.priceWrapper}>
      {isEditing ? (
        <div className={styles.editRow}>
          <input
            ref={inputRef}
            className={styles.inputPrice}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
          />
          <span className={styles.currencySymbol}>€</span>
        </div>
      ) : (
        <>
          <p className={className}>{initialValue}€</p>
          {userOffers && (
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              <img src={Pen} alt="Edit price" className={styles.penIcon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default PriceField;