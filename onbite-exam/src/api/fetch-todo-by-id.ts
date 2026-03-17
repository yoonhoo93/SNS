import { API_URL } from "@/lib/constants";
import type { Todo } from "@/type/types";

export async function fetchTodoById(id: number) {
  const response = await fetch(`${API_URL}/todos/${id}`);
  console.log(response);
  if (!response.ok) throw new Error("fetch failed");
  const data: Todo = await response.json();
  return data;
}
