// import { useNavigate } from "react-router-dom";
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

const ArticleDetail = ({ article, userOffers }) => {
    // const navigate = useNavigate();
    const isMobile = useIsMobile();

    // --- Updates (ahora en front por consoleLog hasta que haga el back solo para porbarfuncionalidad) ---
    const handleUpdateTitle = (val) => console.log("Update Title:", val);
    const handleUpdateDescription = (val) => console.log("Update Description:", val);
    const handleUpdatePrice = (val) => console.log("Update Price:", val);
    const handleUpdateSize = (val) => console.log("Update Size:", val);
    const handleUpdateCategory = (val) => console.log("Update Category:", val);
    const handleUpdateStatus = (val) => console.log("Update Status:", val);
    const handleUpdateImage = (file) => console.log("Update Image File:", file);


    const resolvedImage = !article?.image || article?.image === "placeholderdetail"
        ? ImagePlaceholder
        : article?.image;


    return (
        <main className={styles.detailContainer}>
            {isMobile ? (

                <section className={styles.contentWrapper}>

                    <div className={styles.titleCategoryDetail}>
                        <TitleField initialTitle={article?.title} onSave={handleUpdateTitle} userOffers={userOffers} className={styles.articleTitle} />
                        <CategoryField initialValue={article?.category} onSave={handleUpdateCategory} userOffers={userOffers} className={styles.category} />
                    </div>

                    <div className={styles.statusDetail}>
                        <StatusField initialValue={article?.state} onSave={handleUpdateStatus} userOffers={userOffers} className={styles.status} />
                    </div>

                    <div className={styles.imageDetail}>
                        <ImageField initialImage={resolvedImage} onSave={handleUpdateImage} userOffers={userOffers} className={styles.articleImg} />
                    </div>

                    <div className={styles.priceSizeDetail}>
                        <PriceField initialValue={article?.price} onSave={handleUpdatePrice} userOffers={userOffers} className={styles.priceValue} />
                        <SizeField initialValue={article?.size} onSave={handleUpdateSize} userOffers={userOffers} className={styles.sizeValue} />
                    </div>

                    <div className={styles.descriptionDetail}>
                        <DescriptionField initialValue={article?.description} onSave={handleUpdateDescription} userOffers={userOffers} className={styles.descriptionBody} />
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
                            <StatusField initialValue={article?.state} onSave={handleUpdateStatus} userOffers={userOffers} className={styles.status} />
                            <PriceField initialValue={article?.price} onSave={handleUpdatePrice} userOffers={userOffers} className={styles.priceValue} />
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <TitleField initialTitle={article?.title} onSave={handleUpdateTitle} userOffers={userOffers} className={styles.articleTitle} />
                        <div className={styles.descriptionDetailDesktop}>
                            <DescriptionField initialValue={article?.description} onSave={handleUpdateDescription} userOffers={userOffers} className={styles.descriptionBody} />
                        </div>

                        <div className={styles.metaDataDetailDesktop}>
                            <div className={styles.categoryAndUserDetailDesktop}>
                                <CategoryField initialValue={article?.category} onSave={handleUpdateCategory} userOffers={userOffers} className={styles.categoryDesktop} />
                                <p className={styles.userOffers}>{article?.user}</p>
                            </div>
                            <div className={styles.sizeAndDateDetailDesktop}>
                                <SizeField initialValue={article?.size} onSave={handleUpdateSize} userOffers={userOffers} className={styles.sizeValue} />
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