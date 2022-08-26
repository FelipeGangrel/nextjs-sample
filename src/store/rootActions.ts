import { counterSlice } from "./counter/slices";

const rootActions = {
  [counterSlice.name]: {
    ...counterSlice.actions,
  },
};

export default rootActions;
