import { useContext, useState } from "react";
import Input from "../../atoms/Input/Input"
import { AuthContext } from "../../../context/auth/AuthContext";
import articleService from "../../../service/apiArticle";
import Button from "../../atoms/Button/Button";


const NewArticleForm = () => {

    const {user} = useContext(AuthContext);

    const [newArticleData, setNewArticleData] = useState(
        {
            title: "",
            category: "",
            image: "",
            state: "",
            price: "",
            size: "",
            description: ""

        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewArticleData({
            ...newArticleData,
            [name]: value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response= await articleService.create(newArticleData)
            console.log("¡Article created successfully! :", response);

            setNewArticleData({
            title: "", category: "", image: "", state: "", 
            price: "", size: "", description: ""
        });


        } catch (error) {
                console.error("Error creating article:", error);
        }
    }
    return (
        <section>
            <h1 className={styles.title}>Register Article</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={Styles.fields}>
                    <Input
                        name="title"
                        placeholder="Name Article"
                        value={newArticleData.title}
                        onChange={handleChange}
                        className={styles.Input}
                    />
                    <Input
                        name="category"
                        placeholder="Category"
                        value={newArticleData.category}
                        onChange={handleChange}
                    />
                    <Input
                        name="image"
                        placeholder="Image"
                        value={newArticleData.image}
                        onChange={handleChange}
                    />
                    <Input
                        name="state"
                        placeholder="State"
                        value={newArticleData.state}
                        onChange={handleChange}

                    />
                    <Input
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
                    <Input
                        name="description"
                        placeholder="Description"
                        value={newArticleData.description}
                        onChange={handleChange}
                   />
                </div>
                <div className={styles.actions}>

                    <Button
                        type="submit"
                        text="Register"
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
        </section>
    )
}

export default NewArticleForm;