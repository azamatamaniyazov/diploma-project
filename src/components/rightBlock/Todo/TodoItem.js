import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function TodoItem({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <li className="flex justify-between items-center mb-2 bg-[#f2f2f2] w-full py-3 px-2 rounded">
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
        className={`${
          todo.completed && "line-through"
        } outline-none bg-transparent`}
      />
      <div className="flex items-center">
        <CheckCircleIcon
          onClick={() => toggleComplete(todo)}
          className="w-5 cursor-pointer text-green-500"
        />
        <PencilIcon
          onClick={() => handleEdit(todo, newTitle)}
          className="w-5 cursor-pointer text-blue-500 ml-0.5"
        />
        <TrashIcon
          onClick={() => handleDelete(todo.id)}
          className="w-5 cursor-pointer text-red-600 ml-0.5"
        />
      </div>
    </li>
  );
}

export default TodoItem;
