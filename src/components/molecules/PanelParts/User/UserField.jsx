import styles from "./user-field.module.css";
import { useState, useRef, useEffect } from "react";
import userService from "../../../../service/apiAccount";
import Pen from "../../../../assets/pen.png";
import useAuth from "../../../../hooks/useAuth";

function UserField({ initialName, userId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(initialName);
  const [tempName, setTempName] = useState(initialName);
  const [saved, setSaved] = useState(false);
  const inputRef = useRef(null);
  const { updateUser } = useAuth();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    const trimmed = tempName.trim();
    if (!trimmed || trimmed === username) {
      setIsEditing(false);
      return;
    }

    try {
      await userService.updateUserName(userId, { userName: trimmed });
      setUsername(trimmed);
      updateUser({ userName: trimmed });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setTempName(username);
    } finally {
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setTempName(username);
      setIsEditing(false);
    }
  };

  return (
    <article className={styles.wrapper_user}>
      <h3 className={styles.titleEditNameUser}>Edit your name?</h3>
      <div className={styles.row}>
        {isEditing ? (
          <input
            ref={inputRef}
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className={styles.input}
            maxLength={30}
          />
        ) : (
          <>
            <p className={styles.text}>{username}</p>
            <button
              className={styles.editButton}
              onClick={() => {
                setTempName(username);
                setIsEditing(true);
              }}
            >
              <img src={Pen} alt="Pen" title="Edit your name" />
            </button>
          </>
        )}
        {saved && <p className={styles.savedBadge}>✓</p>}
      </div>
    </article>
  );
}

export default UserField;
