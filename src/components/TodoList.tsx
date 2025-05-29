import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../hooks/useTodos";
import "../styles/loaderstye.css";

const TodoList: React.FC = () => {
  const { todos, loading, error } = useTodoContext();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // ให้ Loader แสดงค้างไว้อย่างน้อย 1 วินาที
    const timeout = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading || showLoader) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
