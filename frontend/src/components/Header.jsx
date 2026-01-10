import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <h2>Hotel Paradise</h2>

      <div style={styles.right}>
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>

        <img
          src="/profile.png"
          alt="profil"
          style={styles.profile}
          onClick={() => navigate("/login")}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "white",
  },
  right: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  profile: {
    width: "35px",
    cursor: "pointer",
  },
};

export default Header;
