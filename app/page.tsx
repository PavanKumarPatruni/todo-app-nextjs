import AddTodoButton from "@/components/AddTodoButton";
import Todos from "@/components/Todos";

import { getAllTodos } from "@/services/getAllTodos";

import { TTodo } from "@/types";

export const getTodos = async (): Promise<TTodo[]> => {
  const responseData = await getAllTodos();
  return responseData.data;
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen relative flex flex-col gap-4 w-full md:max-w-5xl mx-auto px-4 md:px-24">
      <header className="sticky top-0 z-10">
        <div className="flex flex-col py-6 px-4 md:px-8 bg-black">
          <div className="flex justify-between items-center">
            <h1 className="text-slate-100 font-bold text-4xl my-4">Taskify</h1>
            <AddTodoButton />
          </div>
          <h4 className="text-slate-400">The Ultimate Online Task Manager</h4>
        </div>
      </header>

      <Todos todos={todos} />
    </main>
  );
}
