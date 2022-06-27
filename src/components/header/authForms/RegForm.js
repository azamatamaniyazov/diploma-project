import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice";
import { CityContext } from "../../../context/CityContext";

function RegForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const { setShow } = useContext(CityContext);

  const onSubmit = async (data) => {
    const auth = getAuth();
    setIsLoading(true);
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser(user));
        localStorage.setItem("currentUser", JSON.stringify(user));
        setShow(false);
        reset();
        setAuthError(null);
      })
      .catch(() => setAuthError("email dizimnen otken"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h3 className="text-base font-semibold mb-1">Dizimnen ótiw</h3>
      <input
        type="email"
        placeholder="email pochta"
        {...register("email", {
          required: "toltirin'",
          pattern: {
            value: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
            message: "duris email kiritin",
          },
        })}
        className="text-sm py-1.5 px-1 border border-gray-300 outline-0 rounded-lg"
      />
      {errors?.email && (
        <small className="text-red-400">{errors.email.message}</small>
      )}
      <input
        type="password"
        placeholder="parol"
        {...register("password", {
          required: "toltirin'",
          minLength: { value: 6, message: "apiwayi parol" },
        })}
        className="text-sm py-1.5 px-1 border border-gray-300 outline-0 rounded-lg my-2"
      />
      {errors?.password && (
        <small className="text-red-400">{errors.password.message}</small>
      )}
      {errors?.phone && (
        <small className="text-center text-red-400">
          {errors.phone.message}
        </small>
      )}
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-[#00ab49] p-1.5 text-white rounded-3xl w-full"
      >
        {isLoading ? "Jiberiw..." : "Jiberiw"}
      </button>
      {authError && (
        <small className="text-center text-red-400">{authError}</small>
      )}
    </>
  );
}

export default RegForm;
