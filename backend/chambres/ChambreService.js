import axios from "axios";

const API_URL = "http://localhost:8080/api/chambres";

class ChambreService {
  getAll() {
    return axios.get(API_URL);
  }

  create(chambre) {
    return axios.post(API_URL, chambre);
  }

  update(id, chambre) {
    return axios.put(`${API_URL}/${id}`, chambre);
  }

  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new ChambreService();
