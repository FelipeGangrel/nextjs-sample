import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import rootActions from "./rootActions";
import rootReducer from "./rootReducer";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppStore["dispatch"]>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper<AppStore>(makeStore);
export const appActions = rootActions;
