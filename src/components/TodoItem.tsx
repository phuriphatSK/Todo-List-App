import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodoContext } from "../hooks/useTodos";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggle, remove, edit } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      edit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center border-b py-2">
      <button
        onClick={() => toggle(todo.id)}
        className="mr-3 text-xl text-green-500 hover:scale-110 transition-transform"
        title={todo.completed ? "Mark as Not Done" : "Mark as Done"}
      >
        {todo.completed ? <BsCircle /> : <BsCheckCircleFill />}
      </button>

      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border rounded px-2 py-1 mr-2 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700"
          title={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? "💾" : "✏️"}
        </button>
        <button
          onClick={() => remove(todo.id)}
          className="text-red-500 hover:text-red-700 text-xl"
          title="Delete"
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
