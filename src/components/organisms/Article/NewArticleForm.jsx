import { useContext, useState } from "react";
import Input from "../../atoms/Input/Input"
import articleService from "../../../service/apiArticle";
import Button from "../../atoms/Button/Button";
import styles from "./NewArticleForm.module.css";
import { useNavigate } from "react-router-dom";
import MessageModal from "../ModalMessage/MessageModal";
import checkGif from "../../../assets/check.gif";
import useAuth from "../../../hooks/useAuth";


const NewArticleForm = () => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [serverErrors, setServerErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [newArticleData, setNewArticleData] = useState(
        {
            title: "",
            category: "",
            image: null,
            state: "",
            price: "",
            size: "",
            description: ""

        });

    const getError = (field) => serverErrors[field];

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (serverErrors[name]) {
            setServerErrors((prev) => ({ ...prev, [name]: undefined }));
        }

        if (type === "file") {
            setNewArticleData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setNewArticleData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id) {
        setServerErrors({ general: "User session not found. Please login again." });
        return;
    }

    if (!newArticleData.image) {
        setServerErrors({ image: "Please select an image." });
        return;
    }

    setIsLoading(true);
    setServerErrors({});

        try {
            const formData = new FormData();

            Object.keys(newArticleData).forEach((key) => {
                if (newArticleData[key] !== null) {
                    formData.append(key, newArticleData[key]);
                }
            });

            const response = await articleService.create(user.id, formData)
            console.log("¡Article created successfully! :", response);
            setShowModal(true);

            setNewArticleData({
                title: "", category: "", image: null, state: "",
                price: "", size: "", description: ""
            });


        } catch (error) {
            console.error("Error creating article:", error);
            if (error.response?.status === 400 && error.response?.data) {
                setServerErrors(error.response.data);
            } else {
                setServerErrors({ general: "Something went wrong. Please try again." });
            }
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Register Article</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fields}>

                    <Input
                        name="title"
                        placeholder="Title"
                        value={newArticleData.title}
                        onChange={handleChange}
                        className={styles.Input}
                    />

                    <select className={styles.select} name="category" value={newArticleData.category} onChange={handleChange}>
                        <option value="">Select category</option>
                        <option value="TOP">Top</option>
                        <option value="TSHIRT">Tshirt</option>
                        <option value="SHIRT">Shirt</option>
                        <option value="SWEATER">Sweater</option>
                        <option value="JACKET">Jacket</option>
                        <option value="BOTTOM">Bottom</option>
                        <option value="SKIRT">Skirt</option>
                        <option value="DRESS">Dress</option>
                        <option value="BAGS">Bags</option>
                        <option value="SHOES">Shoes</option>
                        <option value="JEWELRY">Jewelry</option>

                    </select>
                    <Input
                        type="file"
                        name="image"
                        placeholder="Image"
                        onChange={handleChange}
                    />
                    {getError("image") && <p className={styles.error}>{getError("image")}</p>}
                </div>

                <select className={styles.wstate} name="state" value={newArticleData.state} onChange={handleChange}>
                    <option value="">Select state</option>
                    <option value="NEW">New</option>
                    <option value="LIKE_NEW">Like-new</option>
                    <option value="GOOD">Good</option>
                    <option value="USED">Used</option>
                </select>

                <div className={styles.row}>
                    <Input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newArticleData.price}
                        onChange={handleChange}

                    />
                    <Input
                        name="size"
                        placeholder="Size"
                        value={newArticleData.size}
                        onChange={handleChange}

                    />
                </div>
                <div className={styles.descWrapper}>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newArticleData.description}
                        onChange={handleChange}
                        className={styles.textarea} 
                    />
                    {getError("description") && <p className={styles.error}>{getError("description")}</p>}
                </div>
                <div className={styles.actions}>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        text={isLoading ? "Registering..." : "Register"}
                        BtnClass="neon"
                    />
                    <Button
                        type="button"
                        text="Cancel"
                        BtnClass="cancel"
                        path="/home"
                    />
                </div>
            </form>
            {showModal && (
                <MessageModal
                    image={checkGif}
                    message="Article Created Successfully"
                    btnText="Wardrobe"
                    btnPath="/home/wardrobe"
                    btnClass="liquid"
                />
            )}
        </section>
    )
}

export default NewArticleForm;