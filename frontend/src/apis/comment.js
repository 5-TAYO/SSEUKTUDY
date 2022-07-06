import API from "./index";

export const createComment = async body => {
  const res = await API.post("/comment", body, {
    headers: {
      "access-token":
        "eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjU3MTE2OTIyMzUxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTcxMTc1MjIsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJfaWQiOiJzc2FmeSJ9.WhEkhPFSc6k0CesxSRMlF43-fgLD4-_W33cL5BhFGbo"
    }
  });
  return res.data.message;
};

// 린트때문에 하나만 있으면 default 붙여야해서 넣어둡니다.
export const ex = () => {};
