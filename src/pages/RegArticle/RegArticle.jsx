import NewArticleForm from "../../components/organisms/Article/NewArticleForm";
import useAuth from "../../hooks/useAuth";



const RegArticle = () => {
    const { user } = useAuth();
    return (
        <main role="main">
            <div>
           <NewArticleForm />
            </div>
        </main>
    )
}

export default RegArticle;