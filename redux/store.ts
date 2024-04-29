import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { TodoSlice } from "@/redux/slices/TodoSlice";

interface ISimpleMap {
  [field: string]: Reducer;
}

const reducerMap: ISimpleMap = {
  [TodoSlice.name]: TodoSlice.reducer,
};

export const appReducer = combineReducers(reducerMap);

export const makeStore = () => {
  return configureStore({
    reducer: appReducer,
    devTools: false,
  });
};

export const wrapper = createWrapper(makeStore, { debug: false });
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
