"use client";
import { useCallback } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { deleteTodo } from "@/services/deleteTodo";

import { TTodo } from "@/types";

function DeleteTodoButton({ id }: { id: TTodo["id"] }) {
  const router = useRouter();

  const onDeleteClick = useCallback(async () => {
    const res = await deleteTodo(id);
    if (res.error) {
      toast.error(res.error);

      return;
    }

    router.refresh();
  }, [id, router]);

  return (
    <button onClick={onDeleteClick}>
      <Image src="/icons/delete.svg" width={24} height={24} alt="delete" />
    </button>
  );
}

export default DeleteTodoButton;
