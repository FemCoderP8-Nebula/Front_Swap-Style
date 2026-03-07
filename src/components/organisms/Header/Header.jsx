import styles from "./header.module.css";
import Logo from "../../../assets/NEW_LOGO.png";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/user.png";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <header>
      <img
        src={Logo}
        alt="Swap & Style"
        title="Return to Home"
        className={styles.logo}
        onClick={() => navigate("/home")}
      />
      <nav>
        {!user ? (
          <Link to="/home/login" className={styles.login}>
            Login
          </Link>
        ) : (
          <img
            src={user.avatar || Avatar}
            alt="avatar"
            title="Profile"
            className={styles.avatar}
            onClick={() => navigate("/home/profile")}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
