import API from "./index";

export const getUserInfo = async () => {
  const res = await API.get("/user/info");
  return res.data;
};

// 린트때문에 하나만 있으면 default 붙여야해서 넣어둡니다.
export const ex = () => {};
