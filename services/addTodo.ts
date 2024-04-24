"use server";

import { TTodo } from "@/types";

export const addTodo = async ({ todo, type }: Pick<TTodo, "todo" | "type">) => {
  const res = await fetch(`http://localhost:8081/v2/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo, type }),
  });

  if (!res.ok) {
    throw new Error("Failed to add data");
  }

  return await res.json();
};
