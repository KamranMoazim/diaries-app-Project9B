import { createSlice } from "@reduxjs/toolkit";   // , current, PayloadAction
// import { AuthResponse } from "../../services/mirage/routes/user";




// In this file, we’re creating a slice for the auth property of our app’s state using the createSlice() function introduced earlier.
// The reducers property holds a map of reducer functions for updating values in the auth slice.
// The returned object contains automatically generated action creators and a single slice reducer.
// We would need to use these in other files






interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {

    saveToken: (state, { payload }: { payload: AuthState }) => {
      if (payload) {
        state.token = payload.token;
        state.isAuthenticated = payload.isAuthenticated;
      }
    },
    
    removeUser(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
    
  },
});

export const { saveToken, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
