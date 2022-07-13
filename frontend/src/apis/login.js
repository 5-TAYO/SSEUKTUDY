import API from "./index";

// 로그인
export const login = async body => {
  const res = await API.post("/user/login", body);
  return res.daya.message;
};

export const ex = () => {};
