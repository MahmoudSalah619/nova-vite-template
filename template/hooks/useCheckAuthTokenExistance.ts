import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/reducers/authReducer";

export default function useCheckAuthTokenExistance() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const userToken = localStorage.getItem("token");
      if (userToken) {
        dispatch(login(userToken));
      }
    })();
  }, [dispatch]);
}
