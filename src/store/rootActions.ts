import { counterSlice } from "./counter/slices";
import { settingsSlice } from "./settings/slices";

const rootActions = {
  [counterSlice.name]: counterSlice.actions,
  [settingsSlice.name]: settingsSlice.actions,
};

export default rootActions;
