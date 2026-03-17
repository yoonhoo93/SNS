import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = () => {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
  });
};
