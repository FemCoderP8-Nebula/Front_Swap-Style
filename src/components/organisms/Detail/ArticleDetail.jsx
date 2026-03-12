import styles from "./article-detail.module.css";
import useIsMobile from "../../../hooks/classChange";
import ImagePlaceholder from "../../../assets/placeholderdetail.png";
import Button from "../../atoms/Button/Button";
import TitleField from "../../molecules/DetailParts/Title/TitleField";
import DescriptionField from "../../molecules/DetailParts/Description/DescriptionField";
import CategoryField from "../../molecules/DetailParts/Category/CategoryField";
import StatusField from "../../molecules/DetailParts/Status/StatusField";
import PriceField from "../../molecules/DetailParts/Price/PriceField";
import SizeField from "../../molecules/DetailParts/Size/SizeField";
import ImageField from "../../molecules/DetailParts/Image/ImageField";
import useAuth from "../../../hooks/useAuth";
import articleService from "../../../service/apiArticle";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";


const ArticleDetail = ({ article}) => {

    const { user } = useAuth();

    const userOffers = user?.id === article?.idUser;
    // const navigate = useNavigate();

    const isMobile = useIsMobile();
    const [currentArticle, setCurrentArticle] = useState(article);

    const handleUpdateTitle = async (val) => {
        try {
            const updatedArticle = await articleService.updateTitle(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateDescription = async (val) => {
        try {
            const updatedArticle = await articleService.updateDescription(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdatePrice = async (val) => {
        try {
            const updatedArticle = await articleService.updatePrice(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateSize = async (val) => {
        try {
            const updatedArticle = await articleService.updateSize(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateCategory = async (val) => {
        try {
            const updatedArticle = await articleService.updateCategory(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateStatus = async (val) => {
        try {
            const updatedArticle = await articleService.updateState(currentArticle.id, val);
            setCurrentArticle(updatedArticle);
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };


    //provisional para imagen
    const handleUpdateImage = (file) => console.log("Update Image File:", file);
    const resolvedImage = !article?.image || article?.image === "placeholderdetail"
        ? ImagePlaceholder
        : article?.image;


    return (
        <main className={styles.detailContainer}>
            {isMobile ? (

                <section className={styles.contentWrapper}>

                    <div className={styles.titleCategoryDetail}>
                        <TitleField initialTitle={currentArticle.title} onSave={handleUpdateTitle} userOffers={userOffers} className={styles.articleTitle} />
                        <CategoryField initialValue={currentArticle.category} onSave={handleUpdateCategory} userOffers={userOffers} className={styles.category} />
                    </div>

                    <div className={styles.statusDetail}>
                        <StatusField initialValue={currentArticle.state} onSave={handleUpdateStatus} userOffers={userOffers} className={styles.status} />
                    </div>

                    <div className={styles.imageDetail}>
                        <ImageField initialImage={resolvedImage} onSave={handleUpdateImage} userOffers={userOffers} className={styles.articleImg} />
                    </div>

                    <div className={styles.priceSizeDetail}>
                        <PriceField initialValue={currentArticle.price} onSave={handleUpdatePrice} userOffers={userOffers} className={styles.priceValue} />
                        <SizeField initialValue={currentArticle.size} onSave={handleUpdateSize} userOffers={userOffers} className={styles.sizeValue} />
                    </div>

                    <div className={styles.descriptionDetail}>
                        <DescriptionField initialValue={currentArticle.description} onSave={handleUpdateDescription} userOffers={userOffers} className={styles.descriptionBody} />
                    </div>

                    <div className={styles.metaDataDetail}>
                        <p className={styles.userOffers}>{article?.user}</p>
                        <p className={styles.date}>{article?.date}</p>
                    </div>

                    <section className={styles.btnsDetail}>
                        <Button text="Book" BtnClass="neon" />
                        <Button text="Cancel" BtnClass="cancel" />
                    </section>
                </section>

            ) : (

                <section className={styles.contentWrapper}>
                    <div className={styles.leftColumn}>
                        <div className={styles.imageDetailDesktop}>
                            <ImageField initialImage={resolvedImage} onSave={handleUpdateImage} userOffers={userOffers} className={styles.articleImg} />
                        </div>
                        <div className={styles.statusPriceDetailDesktop}>
                            <StatusField initialValue={currentArticle.state} onSave={handleUpdateStatus} userOffers={userOffers} className={styles.status} />
                            <PriceField initialValue={currentArticle.price} onSave={handleUpdatePrice} userOffers={userOffers} className={styles.priceValue} />
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <TitleField initialTitle={currentArticle.title} onSave={handleUpdateTitle} userOffers={userOffers} className={styles.articleTitle} />
                        <div className={styles.descriptionDetailDesktop}>
                            <DescriptionField initialValue={currentArticle.description} onSave={handleUpdateDescription} userOffers={userOffers} className={styles.descriptionBody} />
                        </div>

                        <div className={styles.metaDataDetailDesktop}>
                            <div className={styles.categoryAndUserDetailDesktop}>
                                <CategoryField initialValue={currentArticle.category} onSave={handleUpdateCategory} userOffers={userOffers} className={styles.categoryDesktop} />
                                <p className={styles.userOffers}>{article?.user}</p>
                            </div>
                            <div className={styles.sizeAndDateDetailDesktop}>
                                <SizeField initialValue={currentArticle.size} onSave={handleUpdateSize} userOffers={userOffers} className={styles.sizeValue} />
                                <p className={styles.date}>{article?.date}</p>
                            </div>
                        </div>

                        <section className={styles.btnsDetailDesktop}>
                            <Button text="Book" BtnClass="neon" />
                            <Button text="Back" BtnClass="cancel" />
                        </section>
                    </div>
                </section>
            )}
        </main>
    );
};

export default ArticleDetail;