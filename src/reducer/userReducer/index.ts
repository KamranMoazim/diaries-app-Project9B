import { createSlice } from "@reduxjs/toolkit";
// import { User } from "../../Interfaces/user.interface";



// This creates a slice reducer for the user property in our the application’s store.
// The setUser reducer function accepts a payload containing user data and updates the state with it.
// When no data is passed, we set the state’s user property to null




export const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {

    setUser: (state, action) => {
      return (state = action.payload);
    },

    removerUserData: (state: any) => {
      state.user = null;
    },

  },
});

export const { setUser, removerUserData } = userSlice.actions;
export default userSlice.reducer;
