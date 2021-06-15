// © Allan Julie Fontes de Oliveira  - 2021
// Acesse o meu GitHub: https://github.com/Allan28818/NLW5-React-Native

import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.1.75:3333',
})

export default api;