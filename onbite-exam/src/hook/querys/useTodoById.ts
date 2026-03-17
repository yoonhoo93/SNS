import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export const useTodoById = (id: number) => {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
  });
};
