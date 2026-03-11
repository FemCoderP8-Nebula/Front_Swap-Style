import ArticleDetail from "../../components/organisms/Detail/ArticleDetail";

const Detail = () => {

  const mockArticle = {
    title: "Braided leather mules",
    category: "Footwear",
    state: "New",
    price: "20",
    size: "36",
    description: `Elevate your summer wardrobe with these premium woven leather mules by SOLANA. These shoes combine Italian craftsmanship with effortless elegance.
    Featuring a comfortable block heel and a sophisticated tan finish, they are the perfect sustainable choice for those looking to add a touch of luxury to their second-hand collection.`,
    user: "John Doe",
    date: "28/02/26",
    image: "placeholderdetail"
  };

  return (
    <main role="main">
      {/* Pasamos los datos de prueba y simulamos que NO somos el dueño (false) */}
      <ArticleDetail article={mockArticle} userOffers={true} />
    </main>
  );
};

export default Detail