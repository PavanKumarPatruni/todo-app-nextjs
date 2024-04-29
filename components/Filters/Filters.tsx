"use client";
import { SyntheticEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/redux/store";
import {
  fetchTodosAPI,
  setFilter,
  useTodoFilter,
} from "@/redux/slices/TodoSlice";
import { TFilter } from "@/types";

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useTodoFilter();

  const onClick = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      const value = event.currentTarget.name as TFilter;
      dispatch(setFilter(value));
      dispatch(fetchTodosAPI(value));
    },
    [dispatch]
  );

  return (
    <div className="sticky bottom-0 bg-black p-4 flex gap-4">
      <button
        name="ALL"
        className={`rounded-md px-4 py-1 text-stone-400 text-sm ${
          filter === "ALL" ? "border border-stone-400" : ""
        }`}
        onClick={onClick}
      >
        ALL
      </button>
      <button
        name="ACTIVE"
        className={`rounded-md px-4 py-1 text-stone-400 text-sm ${
          filter === "ACTIVE" ? "border border-stone-400" : ""
        }`}
        onClick={onClick}
      >
        ACTIVE
      </button>
      <button
        name="DONE"
        className={`rounded-md px-4 py-1 text-stone-400 text-sm ${
          filter === "DONE" ? "border border-stone-400" : ""
        }`}
        onClick={onClick}
      >
        COMPLETED
      </button>
    </div>
  );
};

export default Filters;
