/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../api/todoApi";
import type { Todo } from "../types/todo";

interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
  edit: (id: number, newText: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch(() => setError("Failed to load todos"))
      .finally(() => setLoading(false));
  }, []);

  const add = async (text: string) => {
    setLoading(true);
    try {
      const newTodo = await addTodo(text);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTodos((prev) => [...prev, newTodo]);
    } catch {
      setError("Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: number) => {
    setLoading(true);
    try {
      await deleteTodo(id);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch {
      setError("Failed to delete todo");
    } finally {
      setLoading(false);
    }
  };

  const toggle = async (id: number) => {
    setLoading(true);
    try {
      const updated = await toggleTodo(id);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (updated) {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? updated : todo))
        );
      }
    } catch {
      setError("Failed to toggle todo");
    } finally {
      setLoading(false);
    }
  };

  const edit = async (id: number, text: string) => {
    setLoading(true);
    try {
      const updated = await editTodo(id, text); // ต้องมีฟังก์ชันนี้ใน todoApi.ts
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (updated) {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? updated : todo))
        );
      }
    } catch {
      setError("Failed to edit todo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, loading, error, add, remove, toggle, edit }}
    >
      {children}
    </TodoContext.Provider>
  );
};
