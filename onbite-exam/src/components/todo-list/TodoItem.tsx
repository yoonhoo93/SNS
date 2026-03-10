import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";

function TodoItem({ id, content }: { id: number; content: string }) {
  const deleteTodo = useDeleteTodo();
  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"} onClick={() => deleteTodo(id)}>
        삭제
      </Button>
    </div>
  );
}

export default TodoItem;
