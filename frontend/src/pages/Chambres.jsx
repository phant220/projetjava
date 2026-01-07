import { useState } from "react";
import { motion } from "framer-motion";

function Chambres() {
  const [chambres, setChambres] = useState([]);
  const [numero, setNumero] = useState("");

  const pageStyle = {
    padding: "30px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh"
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  };

  const inputStyle = {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1"
  };

  const btnStyle = {
    padding: "10px 15px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  };

  const ajouter = () => {
    if (!numero) return;
    setChambres([...chambres, { numero }]);
    setNumero("");
  };

  const supprimer = (index) => {
    setChambres(chambres.filter((_, i) => i !== index));
  };

  const imprimer = () => window.print();

  return (
    <div style={pageStyle}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Gestion des chambres
      </motion.h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          style={inputStyle}
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Numéro de chambre"
        />
        <motion.button
          style={btnStyle}
          onClick={ajouter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Ajouter
        </motion.button>
      </div>

      {chambres.map((c, i) => (
        <motion.div
          key={i}
          style={cardStyle}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Chambre n° {c.numero}
          <motion.button
            style={{ ...btnStyle, marginLeft: "20px", backgroundColor: "#ef4444" }}
            onClick={() => supprimer(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Supprimer
          </motion.button>
        </motion.div>
      ))}

      <motion.button
        style={{ ...btnStyle, marginTop: "20px" }}
        onClick={imprimer}
        whileHover={{ scale: 1.05 }}
      >
        Imprimer
      </motion.button>
    </div>
  );
}

export default Chambres;
