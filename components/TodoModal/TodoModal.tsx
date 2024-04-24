"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "../Modal";
import Dropdown from "../Dropdown";

import { updateTodo } from "@/services/updateTodo";
import { addTodo } from "@/services/addTodo";
import { TYPES } from "@/constants/todo";

import { TTodo, TType } from "@/types";

const TodoModal = ({
  show,
  onClose,
  todo,
}: {
  show: boolean;
  onClose: () => void;
  todo?: TTodo;
}) => {
  const router = useRouter();
  const [todoText, setTodoText] = useState("");
  const [todoType, setTodoType] = useState<TType>("RANDOM");

  const onCancel = useCallback(() => {
    setTodoText("");
    onClose();
  }, [onClose]);

  const onAdd = useCallback(async () => {
    await addTodo({ todo: todoText, type: todoType });

    onCancel();
    router.refresh();
  }, [onCancel, router, todoText, todoType]);

  const onUpdate = useCallback(async () => {
    if (todo) {
      const { id, type, status } = todo;
      await updateTodo({ id, status, todo: todoText, type: todoType });

      onCancel();
      router.refresh();
    }
  }, [onCancel, router, todo, todoText, todoType]);

  const onChange = useCallback((event: any) => {
    setTodoText(event?.target?.value);
  }, []);

  const onDropdownChange = useCallback((value: string) => {
    setTodoType(value as TType);
  }, []);

  useEffect(() => {
    if (todo) {
      setTodoText(todo.todo);
      setTodoType(todo.type);
    }
  }, [todo]);

  useEffect(() => {
    return () => {
      setTodoText("");
      setTodoType("RANDOM");
    };
  }, []);

  return (
    <Modal show={show}>
      <div className="flex flex-col gap-4">
        <h4 className="text-slate-900 font-bold text-xl">
          {todo?.id ? "Update ToDo" : "Add ToDo"}
        </h4>
        <input
          className="border p-2 text-black rounded-lg"
          type="text"
          placeholder="Write here!"
          onChange={onChange}
          value={todoText}
        />
        <Dropdown
          list={TYPES}
          title="Select Type"
          onChange={onDropdownChange}
          selected={todoType}
        />
        <div className="flex justify-end items-center gap-2">
          <button
            className="bg-slate-300 text-black px-4 py-2 rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-700 px-4 py-2 rounded-lg"
            onClick={todo?.id ? onUpdate : onAdd}
          >
            {todo?.id ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TodoModal;
