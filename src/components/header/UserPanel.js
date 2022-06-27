import { LogoutIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useOutsideAlerter from "../../hooks/useClickOutside";
import { removeUser } from "../../slices/userSlice";

function UserPanel() {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideAlerter(wrapperRef);

  const onLogOut = () => {
    dispatch(removeUser());
    localStorage.removeItem("currentUser");
  };

  return (
    <div
      ref={wrapperRef}
      className="user-panel z-40 bg-white border px-4 pt-4 pb-2 flex flex-col items-center animate-fade rounded-lg shadow-lg shadow-gray-300 absolute top-12 right-0"
    >
      <ul className="uppercase text-[11px]">
        <li className="flex items-center">
          <LogoutIcon className="w-5 mr-2" />
          <button
            onClick={onLogOut}
            className="hover:text-red-500 font-semibold"
          >
            Shıǵıw
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserPanel;
