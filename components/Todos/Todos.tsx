import Todo from "../Todo";

import { TTodo } from "@/types";

function Todos({ todos }: { todos: TTodo[] }) {
  return (
    <div className="flex flex-col divide-y">
      {todos.map((todo: TTodo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todos;
