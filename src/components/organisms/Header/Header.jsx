import styles from "./header.module.css";
import Logo from "../../../assets/NEW_LOGO.png";
import { Link } from 'react-router-dom';
import Avatar from "../../../assets/user.png";
import { useNavigate } from 'react-router';

function Header(){
    const navigate = useNavigate();
    return(

        <header>
            <img src={Logo} 
            alt="Swap & Style" 
            title="Volver al inicio" 
            className={styles.logo} 
            onClick={() => navigate("/home")}/>
            <nav>
               <Link to="/login" className={styles.login}>Login</Link>
                <img src={Avatar} alt="avatar" title="avatar" className={styles.avatar}/>
            </nav>
        </header>
    )
}

export default Header;