import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const containerStyle = {
    width: "350px",
    margin: "120px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer"
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 style={{ marginBottom: "20px", color: "#1f2933" }}>Connexion</h2>

      <input style={inputStyle} placeholder="Email" />
      <input style={inputStyle} type="password" placeholder="Mot de passe" />

      <motion.button
        style={buttonStyle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/dashboard")}
      >
        Se connecter
      </motion.button>
    </motion.div>
  );
}

export default Login;
