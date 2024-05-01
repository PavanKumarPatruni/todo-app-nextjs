"use server";
import { TFilter } from "@/types";

export const getAllTodos = async (status: TFilter = "ALL") => {
  const res = await fetch(
    "http://localhost:8081/v1/todo?" + new URLSearchParams({ status }),
    {
      cache: "no-store",
    }
  );

  const responseData = await res.json();
  if (!res.ok || !responseData.success) {
    return {
      error: "Error getting todos",
      data: [],
    };
  }

  return {
    data: responseData.data,
  };
};
