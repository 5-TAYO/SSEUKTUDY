import API from "./index";

export const duplicateEmail = async userId => {
  const res = await API.get(`emailCheck?userId=${userId}`);
  // console.log(res.data);
  return res.data;
};

export const sendCodeMail = async body => {
  // console.log(body);
  const res = await API.post("/email", body);
  return res.data.message;
};

export const checkCode = async (userId, authKey) => {
  const res = await API.get(`email?userId=${userId}&authKey=${authKey}`);
  // console.log(res);
  return res.data;
};

export const join = async body => {
  console.log(body);
  const res = await API.post("/user/main", body);
  return res.data.message;
};

export const ex = () => {};
