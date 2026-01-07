import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
    cursor: "pointer"
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "30px"
  };

  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", background: "#f8fafc", minHeight: "100vh" }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Tableau de bord
      </motion.h1>

      <div style={containerStyle}>
        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }} onClick={() => navigate("/chambres")}>
          Chambres
        </motion.div>
        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }}>
          Clients
        </motion.div>
        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }}>
          Réservations
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
