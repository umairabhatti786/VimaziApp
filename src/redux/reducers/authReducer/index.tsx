import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface SignupState {
  full_name: string;
  email: string;
  password: string;
  phone_number: string;
  country: string;
}
export interface AuthState {
  user: any;
  signupState: SignupState;
}
export const initialState: AuthState = {
  user: null,
  signupState: {
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    country: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },

     setSignupState: (state, { payload }: PayloadAction<any>) => {
      state.signupState = payload;
    },
  },

  
});

export const { setAuthData,setSignupState } = authSlice.actions;
export default authSlice.reducer;

export const getUserData = (state: RootState) => state?.auth.user;
export const getSignupState = (state: RootState) => state?.auth.signupState;

export const getToken = (state: RootState) => state?.auth.user?.token;
