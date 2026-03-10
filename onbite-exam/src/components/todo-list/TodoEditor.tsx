import { useCreateTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

function TodoEditor() {
  const addTodo = useCreateTodo();

  const [todo, setTodo] = useState("");

  const handleTodo = () => {
    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="할일 입력..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={handleTodo}>추가</Button>
    </div>
  );
}

export default TodoEditor;
