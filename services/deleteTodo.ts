"use server";
import { TTodo } from "@/types";

export const deleteTodo = async (id: TTodo["id"]) => {
  const res = await fetch(`http://localhost:8081/v1/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await res.json();
  if (!res.ok) {
    console.log(responseData?.message || "Failed to delete data", {
      type: "error",
    });
  }

  return responseData;
};
