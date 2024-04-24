"use server";

import { TTodo } from "@/types";

export const updateTodo = async ({
  todo,
  status,
  type,
  id,
}: Omit<TTodo, "createdAt" | "updatedAt">) => {
  const res = await fetch(`http://localhost:8081/v2/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo,
      status,
      type,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  return await res.json();
};
