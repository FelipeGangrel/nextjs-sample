import { combineReducers } from "@reduxjs/toolkit";

import { counterSlice } from "./counter/slices";

export default combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
