import { useState, useRef, useEffect } from "react";
import styles from "./size-field.module.css";
import Pen from "../../../../assets/pen.png";

function SizeField({ initialValue, onSave, userOffers, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = tempValue.trim();
    if (trimmed && trimmed !== initialValue) {
      onSave(trimmed);
    } else {
      setTempValue(initialValue);
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.sizeWrapper}>
      {isEditing ? (
        <input
          ref={inputRef}
          className={styles.inputSize}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <>
          <p className={className}>Size: {initialValue}</p>
          {userOffers && (
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              <img src={Pen} alt="Edit size" className={styles.penIcon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SizeField;