import API from "./index";

export const getStudyList = async body => {
  console.log("req", body);
  const res = await API.post("/study/list", body);
  console.log("res", res.data);
  return res.data.data;
};

export const getStudyDetail = async studyId => {
  const res = await API.get(`/study/item?studyId=${studyId}`);
  return res.data.data;
};

// 린트때문에 하나만 있으면 default 붙여야해서 넣어둡니다.
export const ex = () => {};
