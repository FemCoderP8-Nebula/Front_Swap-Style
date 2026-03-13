import { useState, useRef, useEffect } from "react";
import styles from "./description-field.module.css";
import Pen from "../../../../assets/pen.png";

function DescriptionField({ initialValue, onSave, userOffers, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      // Ponemos el cursor al final del texto
      textareaRef.current.setSelectionRange(tempValue.length, tempValue.length);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === "Escape") {
      setTempValue(initialValue);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.descriptionWrapper}>
      {isEditing ? (
        <textarea
          ref={textareaRef}
          className={styles.inputTextarea}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
        />
      ) : (
        <>
          <p className={className}>{initialValue}</p>
          {userOffers && (
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              <img src={Pen} alt="Edit description" className={styles.penIcon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default DescriptionField;