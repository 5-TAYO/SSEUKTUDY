import { createSlice } from "@reduxjs/toolkit";

export const initialJoinState = {
  // 회원가입을 위한 초기값 전달
  value: {
    userId: "",
    userPw: "",
    userNickname: "",
    userSocial: ""
  }
};

// actions를 위한 js파일을 따로 만들 필요가 없음
export const joinSlice = createSlice({
  name: "join", // 리듀서 이름은 무엇으로 할 것인지
  initialState: initialJoinState, // 들어갈 데이터의 초기값 잡기
  reducers: {
    // 상태가 변하면 어떻게 실행될지 정하는 부분
    // 우리가 바꾸고 싶은 데이터를 원하는 곳에 넘겨주는 역할
    join: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    finish: state => {
      // eslint-disable-next-line no-param-reassign
      state.value = initialJoinState;
    }
  }
});

export const { join, finish } = joinSlice.actions; // join이름의 함수를 action 기능이 작동하도록 다른 곳에서 사용할 예정

export default joinSlice.reducer;
