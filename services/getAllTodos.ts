"use server";

export const getAllTodos = async () => {
  const res = await fetch("http://localhost:8081/v1/todo", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
