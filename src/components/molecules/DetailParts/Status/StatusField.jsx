import { useState } from "react";
import styles from "./status-field.module.css";
import Pen from "../../../../assets/pen.png";

function StatusField({ initialValue, onSave, userOffers, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);

  const statusOptions = ["NEW", "LIKE_NEW", "GOOD", "USED"];

  const handleSave = (newValue) => {
    if (newValue !== initialValue) {
      onSave(newValue);
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.statusWrapper}>
      {isEditing ? (
        <select
          className={styles.selectStatus}
          value={tempValue}
          onChange={(e) => {
            setTempValue(e.target.value);
            handleSave(e.target.value);
          }}
          onBlur={() => setIsEditing(false)}
          autoFocus
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option.replace("_", " ")}
            </option>
          ))}
        </select>
      ) : (
        <>
          <p className={className}>{initialValue.replace("_", " ")}</p>
          {userOffers && (
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              <img src={Pen} alt="Edit status" className={styles.penIcon} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default StatusField;