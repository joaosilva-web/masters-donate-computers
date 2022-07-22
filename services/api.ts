import axios from "axios";

const api = axios.create({
    baseURL: "https://doar-computador-api.herokuapp.com/",
});

export default api;