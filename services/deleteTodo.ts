"use server";

import { TTodo } from "@/types";

export const deleteTodo = async (id: TTodo["id"]) => {
  const res = await fetch(`http://localhost:8081/v1/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
