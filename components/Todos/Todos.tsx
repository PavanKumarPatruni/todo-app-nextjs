"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Todo from "../Todo";
import Filters from "../Filters";

import { fetchTodosAPI, useTodoSelector } from "@/redux/slices/TodoSlice";
import { AppDispatch } from "@/redux/store";

import { TTodo } from "@/types";

function Todos() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, data } = useTodoSelector();

  useEffect(() => {
    dispatch(fetchTodosAPI());
  }, [dispatch]);

  return (
    <div className="flex flex-col divide-y shadow-[0_0px_8px_1px_rgba(91,_91,_91,_0.7)]">
      <div className="min-h-[400px] relative">
        {loading && (
          <div className="font-medium text-base text-center leading-loose tracking-wider p-8">
            LOADING
          </div>
        )}

        {!loading &&
          data.map((todo: TTodo) => <Todo {...todo} key={todo.id} />)}

        {!loading && data.length === 0 && (
          <div className="font-medium text-base text-center leading-loose tracking-wider p-8">
            NO TODOS
          </div>
        )}
      </div>

      <Filters />
    </div>
  );
}

export default Todos;
