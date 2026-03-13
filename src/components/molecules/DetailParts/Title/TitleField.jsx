import { useState, useRef, useEffect } from "react";
import styles from "./title-field.module.css";
import Pen from "../../../../assets/pen.png";

function TitleField({ initialTitle, onSave, userOffers, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(initialTitle);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = tempTitle.trim();
    if (trimmed && trimmed !== initialTitle) {
      onSave(trimmed);
    } else {
      setTempTitle(initialTitle);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setTempTitle(initialTitle);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.titleWrapper}>
      {isEditing ? (
        <input
          ref={inputRef}
          className={styles.inputTitle}
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          maxLength={50}
        />
      ) : (
        <>
          <h2 className={className}>{initialTitle}</h2>
          {userOffers && (
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              <img src={Pen} alt="Edit title" className={styles.penIcon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default TitleField;