import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";   // ton composant login
import Dashboard from "./pages/Dashboard.jsx";  // futur dashboard
import Chambres from "./pages/Chambres.jsx";    // futur CRUD

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chambres" element={<Chambres />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
