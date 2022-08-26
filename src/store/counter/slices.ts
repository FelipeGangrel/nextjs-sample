import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CounterState } from "contracts/counter";

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});
