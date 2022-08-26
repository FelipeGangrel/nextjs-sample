import { combineReducers } from "@reduxjs/toolkit";

import { counterSlice } from "./counter/slices";
import { settingsSlice } from "./settings/slices";

export default combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
});
