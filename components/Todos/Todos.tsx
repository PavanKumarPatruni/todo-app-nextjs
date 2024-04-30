import Todo from "../Todo";
import Filters from "../Filters";

import { TTodo } from "@/types";

function Todos({ data }: { data: TTodo[] }) {
  return (
    <div className="flex flex-col divide-y shadow-[0_0px_8px_1px_rgba(91,_91,_91,_0.7)]">
      <div className="min-h-[400px] relative">
        {data.map((todo: TTodo) => (
          <Todo {...todo} key={todo.id} />
        ))}

        {data.length === 0 && (
          <div className="font-medium text-base text-center leading-loose tracking-wider p-8">
            NO TODOS
          </div>
        )}
      </div>

      <Filters />
    </div>
  );
}

export default Todos;
