"use client";
import { useCallback, useState } from "react";

import TodoModal from "../TodoModal";

const AddTodoButton = () => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <button
        className="bg-blue-700 px-4 py-2 rounded-lg"
        onClick={onShowModal}
      >
        Add
      </button>
      <TodoModal show={showModal} onClose={onCloseModal} />
    </>
  );
};

export default AddTodoButton;
