import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { useAuth } from "../../../hooks/useAuth";

function AddTodo() {
  const [title, setTitle] = useState("");
  const { id } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, `${id}`), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="h-9 flex justify-between items-center">
        <input
          className="h-full w-full px-2 mr-1 outline-none border-2 rounded"
          type="text"
          placeholder="Jańa rejeńizdi qosıń"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="h-full bg-green-500 text-white p-2 rounded">
          <PlusIcon className="w-5" />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
