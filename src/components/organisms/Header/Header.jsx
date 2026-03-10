import styles from "./header.module.css";
import Logo from "../../../assets/NEW_LOGO.png";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/user.png";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Logout from "../../../assets/logout.png";
import AVATARS from "../../atoms/Avatars/CollectionAvatars";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

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
          <div className={styles.fieldLogin}>
            <Link to="/home/login" className={styles.login}>
              Login
            </Link>
          </div>
        ) : (
          <div className={styles.field_logged}>
            <div className={styles.fieldAvatar}>
              <img
                src={AVATARS[user.avatar] || Avatar}
                alt="avatar"
                title="Profile"
                className={styles.avatar}
                onClick={() => navigate("/home/panel")}
              />
            </div>
            <div className={styles.fieldLogout}>
              <img
                src={Logout}
                alt="LogOut"
                onClick={handleLogout}
                className={styles.logout_icon}
                title="Close session"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
