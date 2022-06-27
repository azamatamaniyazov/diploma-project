import { useAuth } from "../../hooks/useAuth";
import Skeleton from "./Skeleton";
import TodoBlock from "./Todo/TodoBlock";

function RightBlock() {
  const { isAuth } = useAuth();
  return (
    <div className="right-block  w-full">
      {isAuth ? <TodoBlock /> : <Skeleton />}
    </div>
  );
}

export default RightBlock;
