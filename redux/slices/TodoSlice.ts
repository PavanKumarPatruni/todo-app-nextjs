import { useSelector } from "react-redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { RootState } from "@/redux/store";
import { getAllTodos } from "@/services/getAllTodos";
import { IStore, TFilter, TTodo } from "@/types";

export const fetchTodosAPI = createAsyncThunk("api/todoList", getAllTodos);

const INITIAL_STATE: IStore<TTodo[]> & { filter: TFilter } = {
  filter: "ALL",
  loading: false,
  data: [],
  error: "",
};

export const TodoSlice = createSlice({
  name: "todoList",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = "ALL";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAPI.pending, (state) => {
        state.data = [];
        state.error = "";
        state.loading = true;
      })
      .addCase(fetchTodosAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchTodosAPI.rejected, (state) => {
        state.loading = false;
        state.error = "error";
        state.data = [];
      })
      .addCase(HYDRATE, (state, action: any) => {
        console.log(state, action);
        const { payload: { data = {} } = {} } = action || {};
        return {
          ...state,
          ...((!data.data.length || data.error) && data),
          isHydrated: true,
        };
      });
  },
});

export const { setFilter, resetFilter } = TodoSlice.actions;

export const useTodoFilter = (): TFilter =>
  useSelector((state: RootState) => state[TodoSlice.name].filter);

export const useTodoSelector = (): typeof INITIAL_STATE =>
  useSelector(
    (state: RootState): typeof INITIAL_STATE =>
      state[TodoSlice.name] || INITIAL_STATE
  );
