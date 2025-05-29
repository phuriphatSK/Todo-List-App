import { useState } from "react";
import { useTodoContext } from "../hooks/useTodos";

const TodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const { add } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      add(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded px-2 py-1 w-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Add new todo"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
    </form>
  );
};

export default TodoForm;
