import { createSlice } from "@reduxjs/toolkit";
const defaultAuthState = localStorage.getItem("auth") == 1;
const authSlicer =  createSlice({
    name: "auth-slice",
    initialState: {
      authState: defaultAuthState,
    },
    reducers: {
      login(state) {
        localStorage.setItem("auth",1);
        state.authState = true;
      },
      logout(state) {
        localStorage.removeItem("auth");
        state.authState = false;
      },
    },
  });
export const authReducers =  authSlicer.reducer;
export const authActions = authSlicer.actions;
