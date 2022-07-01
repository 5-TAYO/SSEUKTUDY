import axios from "axios";

const BASE_URL = "http://34.199.120.230:8080/sseuktudy-0.0.1-SNAPSHOT";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    withCredentials: true
  }
});

export default API;
