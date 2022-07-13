import axios from "axios";

// axios instance 생성
const BASE_URL = "http://ssuektudy.kro.kr/";

const API = axios.create({
  baseURL: BASE_URL, // 기본 서버 url
  headers: {
    // 자신이 매번 전달해야하는 객체가 자동으로 삽입
    "Content-Type": "application/json"
  }
});
export default API;
