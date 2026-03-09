import styles from "./avatar-modal.module.css";
import classChange from "../../../hooks/classChange";
import { useState } from "react";
import AVATARS from "../../atoms/Avatars/CollectionAvatars";

<AVATARS />;

function AvatarModal({ isOpen, currentAvatar, onSelect, onClose }) {
  const isMobile = classChange();
  const [selected, setSelected] = useState(currentAvatar);

  if (!isOpen) return null;

  const handleAccept = () => {
    onSelect(selected);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Choose your avatar</h3>
        <div className={styles.grid}>
          {Object.entries(AVATARS).map(([key, url]) => (
            <div
              key={key}
              className={`${styles.avatarBtn} ${selected === key ? styles.selected : ""}`}
              onClick={() => setSelected(key)}
            >
              <img src={url} alt={key} className={styles.avatarImg} />
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <button
            className={isMobile ? styles.liquid_mobile : styles.liquid}
            onClick={handleAccept}
          >
            Accept
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarModal;
export { AVATARS };
