// The ""createSlice()"" function helps simplify the process of creating action creators and slice reducers.
// It accepts an initial state, an object full of reducer functions, and a “slice name”, and 
// automatically generates action creators and action types corresponding to the reducers and your state.
// It also returns a single reducer function, which can be passed to Redux’s ""combineReducers()"" function as a “slice reducer”.

// Remember that the state is a single tree, and a single root reducer manages changes to that tree.
// For maintainability, it is recommended to split your root reducer into “slices,” and 
// have a “slice reducer” provide an initial value and calculate the updates to a corresponding slice of the state.
// These slices can be joined into a single reducer function by using ""combineReducers()"".

// There are additional options for configuring the store. 
// For example, you can pass an array of your own middleware to ""configureStore()"" or 
// start up your app from a saved state using the ""preloadedState"" option. When you supply the middleware option,
// you have to define all the ""middleware"" you want added to the store.
// If you would like to retain the defaults when setting up your store, you can use ""getDefaultMiddleware()"" to get the default list of middleware:





import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authReducer/index";
import userReducer from "./userReducer/index";
import dairyReducer from "./dairyReducer/index";
import entryReducer from "./entryReducer/index";

export default combineReducers({ authReducer, userReducer, dairyReducer, entryReducer });

// In this file, we’ve combined our slice reducers into a single root reducer with the combineReducers() function.
// We’ve also exported the RootState type, which will be useful later when we’re selecting values from the store.
// We can now use the root reducer (the default export of this file) to set up our store.
