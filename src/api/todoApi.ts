import type { Todo } from "../types/todo";
import api from "./axios";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await api.get("/todos");
  return res.data;
};

export const addTodo = async (text: string): Promise<Todo> => {
  const newTodo = { text, completed: false };
  const res = await api.post("/todos", newTodo);
  return res.data;
};

export const deleteTodo = async (id: number): Promise<number> => {
  await api.delete(`/todos/${id}`);
  return id;
};

export const toggleTodo = async (id: number): Promise<Todo> => {
  const res = await api.get(`/todos/${id}`);
  const todo = res.data;
  const updated = { ...todo, completed: !todo.completed };
  const result = await api.put(`/todos/${id}`, updated);
  return result.data;
};

export const editTodo = async (id: number, text: string): Promise<Todo> => {
  const res = await api.patch(`/todos/${id}`, { text });
  return res.data;
};
