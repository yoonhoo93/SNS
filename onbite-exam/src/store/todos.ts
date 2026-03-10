import type { Todo } from "@/type/types";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


const initalState: {
	todos: Todo[]
} = {
	todos: []
}

const useTodosStore = create(
	immer(
		combine(initalState, (set) => ({
			actions: {
				createTodo: (content: string) => {
					set((state) => {
						state.todos.push({
							id: new Date().getTime(),
							content: content
						})
					})
				},
				deleteTodo: (targetId: number) => {
					set((state) => {
						state.todos = state.todos.filter((todo) => todo.id !== targetId)
					})
				}
			}
		}))
	)
)

export const useTodos = () => {
	const todolist = useTodosStore(s => s.todos)
	return todolist
}

export const useCreateTodo = () => {
	const addTodo = useTodosStore(s => s.actions.createTodo)
	return addTodo
}
export const useDeleteTodo = () => {
	const deleteTodo = useTodosStore(s => s.actions.deleteTodo)
	return deleteTodo
}