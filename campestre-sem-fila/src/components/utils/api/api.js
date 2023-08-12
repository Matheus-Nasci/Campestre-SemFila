import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.199.109:8080/campestre-sem-fila/api/v1',
    timeout: 10000
});

export default api;