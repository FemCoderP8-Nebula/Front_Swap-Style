import { useRef } from "react";
import styles from "./image-field.module.css";
import Pen from "../../../../assets/pen.png";

function ImageField({ initialImage, onSave, userOffers, className }) {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Necesitare el servicio de subida de File de la pill de Majo que estara en el form de registro de art
      onSave(file);
    }
  };

  return (
    <figure className={styles.imageWrapper}>
      <img src={initialImage} alt="Article" className={className} />

      {userOffers && (
        <>
          <button className={styles.imgEditButton} onClick={handleIconClick}>
            <img src={Pen} alt="Edit image" className={styles.penIcon} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className={styles.hiddenInput}
            onChange={handleFileChange}
            accept="image/*"
          />
        </>
      )}
    </figure>
  );
}

export default ImageField;