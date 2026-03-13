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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiReserve from "../../../service/apiReserve";
import useCountdown from "../../../hooks/useCountdown";
import { getImageUrl } from "../../../utils/imageUrl";

const ArticleDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAuth();
    const isMobile = useIsMobile();
    const [currentArticle, setCurrentArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const userOffers = user?.id === currentArticle?.idUser;
    const isReservedByMe = currentArticle?.isReserved && user?.id === currentArticle?.reservedByUserId;
    const isReservedByOther = currentArticle?.isReserved && user?.id !== currentArticle?.reservedByUserId;
    const timeLeft = useCountdown(currentArticle?.isReserved ? currentArticle?.expiryDate : null);


    const fetchArticle = async () => {
        try {
            const data = await articleService.getById(id);
            console.log(data);
            setCurrentArticle(data);
        } catch (error) {
            console.error("Error fetching article:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchArticle();
    }, [id]);

    const handleToggleReserve = async () => {
        try {
            await apiReserve.toggle(currentArticle.id, user.id);
            fetchArticle();
        } catch (error) {
            console.error("Error toggling reservation:", error);
        }
    };

    const handleUpdateTitle = async (val) => {
        try {
            await articleService.updateTitle(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateDescription = async (val) => {
        try {
            await articleService.updateDescription(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdatePrice = async (val) => {
        try {
            await articleService.updatePrice(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateSize = async (val) => {
        try {
            await articleService.updateSize(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateCategory = async (val) => {
        try {
            await articleService.updateCategory(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateStatus = async (val) => {
        try {
            await articleService.updateState(currentArticle.id, val);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const handleUpdateImage = async (file) => {
        try{
            await articleService.updateImage(currentArticle.id, file);
            fetchArticle();
            console.log("Updated and rendered");
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const resolvedImage = getImageUrl(currentArticle?.image) ?? ImagePlaceholder;

    if (isLoading) return <p>Loading...</p>;
    if (!currentArticle) return <p>Article not found</p>;
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
                        <p className={styles.userOffers}>{currentArticle?.user}</p>
                        <p className={styles.date}>{currentArticle?.date}</p>
                    </div>

                    <section className={styles.btnsDetail}>
                        {currentArticle?.isReserved && timeLeft && (
                            <div className={styles.countdown}>
                                <p>Reserved — expires in: {String(timeLeft.hours).padStart(2, "0")}:
                                    {String(timeLeft.minutes).padStart(2, "0")}:
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </p>
                            </div>
                        )}
                        {!userOffers && user && (
                            <Button
                                text={isReservedByOther ? "Not available" : isReservedByMe ? "Cancel" : "Book"}
                                BtnClass={isReservedByOther ? "disabled" : isReservedByMe ? "reserved" : "neon"}
                                onClick={handleToggleReserve}
                                disabled={isReservedByOther} />
                        )}
                        <Button text="Back" BtnClass="cancel" onClick={() => navigate(-1)} />
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
                                <p className={styles.userOffers}>{currentArticle?.user}</p>
                            </div>
                            <div className={styles.sizeAndDateDetailDesktop}>
                                <SizeField initialValue={currentArticle.size} onSave={handleUpdateSize} userOffers={userOffers} className={styles.sizeValue} />
                                <p className={styles.date}>{currentArticle?.date}</p>
                            </div>
                        </div>

                        <section className={styles.btnsDetailDesktop}>
                            {currentArticle?.isReserved && timeLeft && (
                                <div className={styles.countdown}>
                                    <p>Reserved — expires in: {String(timeLeft.hours).padStart(2, "0")}:
                                        {String(timeLeft.minutes).padStart(2, "0")}:
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </p>
                                </div>
                            )}
                            {!userOffers && user && (
                            <Button
                            text={isReservedByOther ? "Not available" : isReservedByMe ? "Cancel" : "Book"} 
                            BtnClass={isReservedByOther ? "disabled" : isReservedByMe ? "reserved" : "neon"} 
                            onClick={handleToggleReserve}
                            disabled={isReservedByOther}
                            />
                            )}
                            <Button text="Back" BtnClass="cancel" onClick= {() => navigate (-1)}/>
                        </section>
                    </div>
                </section>
            )}
        </main>
    );
};

export default ArticleDetail;