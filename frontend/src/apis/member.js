import API from "./index";

export const getStudyPreQuestions = async studyId => {
  const res = await API.get(`/member/apply?studyId=${studyId}`);
  return res.data;
};

export const joinStudy = async body => {
  const res = await API.post("/member/apply", body);
  return res.data.message;
};
// 린트때문에 하나만 있으면 default 붙여야해서 넣어둡니다.
export const ex = () => {};
