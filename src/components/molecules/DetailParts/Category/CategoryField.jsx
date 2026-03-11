import { useState } from "react";
import styles from "./category-field.module.css";
import Pen from "../../../../assets/pen.png";

function CategoryField({ initialValue, onSave, userOffers, className }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(initialValue);

    const categoryOptions = [
        "TOP", "TSHIRT", "SHIRT", "SWEATER", "JACKET",
        "BOTTOM", "SKIRT", "DRESS", "BAGS", "SHOES", "JEWELRY"
    ];

    const handleSave = (newValue) => {
        if (newValue && newValue !== initialValue) {
            onSave(newValue);
        }
        setIsEditing(false);
    };

    return (
        <div className={`${styles.categoryWrapper} ${className}`}>
            {isEditing ? (
                <select
                    className={styles.selectCategory}
                    value={tempValue}
                    onChange={(e) => {
                        const val = e.target.value;
                        setTempValue(val);
                        handleSave(val);
                    }}
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                >
                    {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <>
                    <p className={className}>{initialValue}</p>
                    {userOffers && (
                        <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                            <img src={Pen} alt="Edit category" className={styles.penIcon} />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

export default CategoryField;