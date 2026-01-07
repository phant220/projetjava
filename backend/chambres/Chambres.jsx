import { useEffect, useState } from "react";
import ChambreService from "../services/ChambreService";

function Chambres() {
  const [chambres, setChambres] = useState([]);
  const [chambre, setChambre] = useState({
    numero: "",
    type: "",
    prix: "",
    disponible: true
  });

  useEffect(() => {
    loadChambres();
  }, []);

  const loadChambres = () => {
    ChambreService.getAll().then(res => setChambres(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ChambreService.create(chambre).then(() => {
      loadChambres();
    });
  };

  const deleteChambre = (id) => {
    ChambreService.delete(id).then(loadChambres);
  };

  const printPage = () => {
    window.print();
  };

  return (
    <div>
      <h2>Gestion des chambres</h2>

      {/* AJOUTER */}
      <form onSubmit={handleSubmit}>
        <input placeholder="Numéro" onChange={e => setChambre({...chambre, numero: e.target.value})} />
        <input placeholder="Type" onChange={e => setChambre({...chambre, type: e.target.value})} />
        <input placeholder="Prix" onChange={e => setChambre({...chambre, prix: e.target.value})} />
        <button>Ajouter</button>
      </form>

      {/* AFFICHER */}
      <table border="1">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chambres.map(c => (
            <tr key={c.id}>
              <td>{c.numero}</td>
              <td>{c.type}</td>
              <td>{c.prix}</td>
              <td>
                {/* SUPPRIMER */}
                <button onClick={() => deleteChambre(c.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* IMPRIMER */}
      <button onClick={printPage}>Imprimer</button>
    </div>
  );
}

export default Chambres;
