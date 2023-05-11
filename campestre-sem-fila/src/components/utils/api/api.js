import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/campestre-sem-fila/api/v1',
    timeout: 10000
});

export default api;