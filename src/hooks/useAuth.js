import { useSelector } from "react-redux";

export function useAuth() {
  const { currentUser } = useSelector((state) => state.user);
  return {
    isAuth: !!currentUser?.email,
    email: currentUser?.email,
    token: currentUser?.stsTokenManager.accessToken,
    id: currentUser?.uid,
  };
}
