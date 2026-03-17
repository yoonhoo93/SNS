import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

function TodoItem({ id, content }: { id: number; content: string }) {
  const deleteTodo = useDeleteTodo();
  const navi = useNavigate();
  return (
    <div className="flex items-center justify-between border p-2">
      <div onClick={() => navi(id)}>{content}</div>
      <Button variant={"destructive"} onClick={() => deleteTodo(id)}>
        삭제
      </Button>
    </div>
  );
}

export default TodoItem;
