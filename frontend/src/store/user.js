import { createSlice } from "@reduxjs/toolkit";

export const initialUserState = {
  value: {
    userId: "",
    userPw: "",
    userNickname: "",
    userSocial: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    logout: state => {
      // eslint-disable-next-line no-param-reassign
      state.value = initialUserState;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
