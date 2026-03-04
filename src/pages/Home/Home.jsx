import Button from "../../components/atoms/Button/Button";
import FirstText from "../../components/molecules/TextHome/FirstText";
import SecondText from "../../components/molecules/TextHome/SecondText";
import styles from "./home.module.css";

const Home=()=>{
    return(
       
        <main role="main">
            <FirstText/>
            <SecondText/>
        </main>
    )
}

export default Home;