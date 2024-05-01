"use client";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { updateTodo } from "@/services/updateTodo";

import { TStatus, TTodo } from "@/types";

function TodoContent(todoObj: TTodo) {
  const { todo, type, status } = todoObj;
  const router = useRouter();

  const todoClass = useMemo(() => {
    if (status === "DONE") return "text-slate-500 line-through";

    return "text-slate-100";
  }, [status]);

  const typeClass = useMemo(() => {
    if (type === "CODING") return "bg-red-300 text-red-950";
    if (type === "GOALS") return "bg-yellow-300 text-yellow-950";
    if (type === "GROCERIES") return "bg-emerald-300 text-emerald-950";
    if (type === "SHOPPING") return "bg-blue-300 text-blue-950";
    if (type === "WORKOUT") return "bg-pink-300 text-pink-950";

    return "bg-purple-300 text-purple-950";
  }, [type]);

  const triggerUpdateApi = useCallback(
    async ({ status }: { status: TStatus }) => {
      const res = await updateTodo({ ...todoObj, status });
      if (res.error) {
        toast.error(res.error);

        return;
      }

      router.refresh();
    },
    [router, todoObj]
  );

  const onClick = useCallback(() => {
    status === "DONE"
      ? triggerUpdateApi({ status: "ACTIVE" })
      : triggerUpdateApi({ status: "DONE" });
  }, [status, triggerUpdateApi]);

  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={onClick}>
      {status === "ACTIVE" && (
        <Image
          src="/icons/radio_unchecked.svg"
          width={24}
          height={24}
          alt="done"
        />
      )}
      {status === "DONE" && (
        <Image
          src="/icons/radio_checked.svg"
          width={24}
          height={24}
          alt="reset"
        />
      )}

      <span
        className={`w-[64px] font-medium text-[9px] text-center leading-loose tracking-wider px-1 rounded ${typeClass}`}
      >
        {type}
      </span>
      <span className={todoClass}>{todo}</span>
    </div>
  );
}

export default TodoContent;
