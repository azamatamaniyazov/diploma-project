import { useState, useRef } from "react";
import useOutsideAlerter from "../../../hooks/useClickOutside";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";

function AuthForms() {
  const [isLogged, setIsLogged] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const clickHandler = (e) => {
    e.preventDefault();
    setIsLogged(!isLogged);
  };

  return (
    <form
      ref={wrapperRef}
      className="login-form  border bg-white px-4 pt-4 pb-2 flex flex-col items-center animate-fade rounded-lg shadow-lg shadow-gray-300 absolute top-12 right-0"
    >
      {isLogged ? <LoginForm /> : <RegForm />}
      <button onClick={clickHandler}>
        <small className="text-green-400">
          {isLogged ? "dizimnen ótiw" : "kiriw"}
        </small>
      </button>
    </form>
  );
}

export default AuthForms;
