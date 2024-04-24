"use client";
import { useCallback, useState } from "react";
import Image from "next/image";

import TodoModal from "../TodoModal";

import { TTodo } from "@/types";

const EditTodoButton = ({ todo }: { todo: TTodo }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <button onClick={onShowModal}>
        <Image src="/icons/edit.svg" width={24} height={24} alt="edit" />
      </button>
      {showModal && (
        <TodoModal show={showModal} onClose={onCloseModal} todo={todo} />
      )}
    </>
  );
};

export default EditTodoButton;
