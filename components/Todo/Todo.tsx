import EditTodoButton from "../EditTodoButton";
import DeleteTodoButton from "../DeleteTodoButton";

import { TTodo } from "@/types";
import TodoContent from "../TodoContent";

function Todo(todoObj: TTodo) {
  const { id, status } = todoObj;

  return (
    <div className="flex items-center justify-between p-4">
      <TodoContent {...todoObj} />
      <div className="flex items-center gap-4">
        {status === "ACTIVE" && <EditTodoButton todo={todoObj} />}
        <DeleteTodoButton id={id} />
      </div>
    </div>
  );
}

export default Todo;
