import TodoEditor from "@/components/todo-list/TodoEditor";
import TodoItem from "@/components/todo-list/TodoItem";
import { useTodos } from "@/store/todos";

function TodoListPage() {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">todoListPage</h1>
      <TodoEditor />

      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoListPage;
