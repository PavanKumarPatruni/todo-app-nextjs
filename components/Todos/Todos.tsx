"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import Todo from "../Todo";
import Filters from "../Filters";

import { getAllTodos } from "@/services/getAllTodos";

import { TTodo, TFilter } from "@/types";

function Todos() {
  const filterRef = useRef<TFilter>("ALL");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = useCallback(async (filter: TFilter) => {
    filterRef.current = filter;
    setLoading(true);
    const responseData = await getAllTodos(filter);
    setTodos(responseData.data);
    setLoading(false);
  }, []);

  const onSelect = useCallback(
    (filter: TFilter) => {
      fetchTodos(filter);
    },
    [fetchTodos]
  );

  const onUpdate = useCallback(() => {
    fetchTodos(filterRef.current);
  }, [fetchTodos]);

  useEffect(() => {
    fetchTodos("ALL");
  }, [fetchTodos]);

  return (
    <div className="flex flex-col divide-y shadow-[0_0px_8px_1px_rgba(91,_91,_91,_0.7)]">
      <div className="min-h-[400px] relative">
        {loading && (
          <div className="font-medium text-base text-center leading-loose tracking-wider p-8">
            LOADING
          </div>
        )}

        {!loading &&
          todos.map((todo: TTodo) => (
            <Todo {...todo} key={todo.id} onUpdate={onUpdate} />
          ))}

        {!loading && todos.length === 0 && (
          <div className="font-medium text-base text-center leading-loose tracking-wider p-8">
            NO TODOS
          </div>
        )}
      </div>

      <Filters onSelect={onSelect} />
    </div>
  );
}

export default Todos;
