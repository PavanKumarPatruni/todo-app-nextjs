"use client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Toast = ({ message }: { message?: string | null }) => {
  useEffect(() => {
    message?.length && toast.error(message);
  }, [message]);

  return <></>;
};

export default Toast;
