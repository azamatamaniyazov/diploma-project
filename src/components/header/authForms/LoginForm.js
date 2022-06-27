import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { CityContext } from "../../../context/CityContext";

function LoginForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const { setShow } = useContext(CityContext);

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const onLogin = async (data) => {
    setIsLoading(true);
    const auth = getAuth();
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser(user));
        localStorage.setItem("currentUser", JSON.stringify(user));
        reset();
        setShow(false);
      })
      .catch(() => setLoginError("login yaki parol qate"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h3 className="text-base font-semibold mb-1">Kiriw</h3>
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
        })}
        className="text-sm py-1.5 px-1 border border-gray-300 outline-0 rounded-lg my-2"
      />
      {errors?.password && (
        <small className="text-red-400">{errors.password.message}</small>
      )}
      <button
        onClick={handleSubmit(onLogin)}
        className="bg-[#00ab49] p-1.5 text-white rounded-3xl w-full"
      >
        {isLoading ? "Kiriw..." : "Kiriw"}
      </button>
      {loginError && <small className="text-red-400">{loginError}</small>}
    </>
  );
}

export default LoginForm;
