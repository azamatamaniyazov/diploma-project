import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { CityContext } from "../../../context/CityContext";
import { translateService } from "../../../services/TranslateService";

function TodoBlock() {
  const [todos, setTodos] = useState([]);
  const { lang } = useContext(CityContext);
  const { id } = useAuth();

  useEffect(() => {
    const q = query(collection(db, `${id}`));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, `${id}`, todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, `${id}`, todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (uid) => {
    await deleteDoc(doc(db, `${id}`, uid));
  };

  return (
    <div className="todo-block bg-white p-4 shadow-custom rounded">
      <h2 className="title text-xl font-bold mb-2">
        {translateService("Kúnlik rejeler", lang)}
      </h2>
      <AddTodo />
      <ul className="mt-4 max-h-[424px] flex  flex-col-reverse overflow-x-hidden overflow-y-auto">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <h2 className="text-[#666] text-center">Dizim bos</h2>
        )}
      </ul>
    </div>
  );
}

export default TodoBlock;
