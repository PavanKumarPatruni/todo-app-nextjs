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

  const responseData = await res.json();
  if (!res.ok) {
    console.log(responseData?.message || "Failed to fetch data", {
      type: "error",
    });
  }

  return responseData;
};
