import { useEffect } from "react";
import {
  //  useDispatch,
  useSelector,
} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "@/reducers";
// import { setUserInfo } from "reducers/authReducer";
import loginHandler from "@/utils/loginHandler";
// import { useLazyGetUserInfoQuery } from "@/src/apis/services/auth";

export default function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state: RootState) => state.auth.token);

  // const [getUserInfo] = useLazyGetUserInfoQuery();
  // const dispatch = useDispatch();

  useEffect(() => {
    const savedToken = localStorage.getItem("token") || "";
    const savedRefreshToken = localStorage.getItem("refreshToken") || "";

    loginHandler({
      token: savedToken,
      refreshToken: savedRefreshToken,
      withoutResetCache: true,
    });

    // if (token) {
    //   getUserInfo()
    //     .unwrap()
    //     .then((res) => dispatch(setUserInfo(res)));
    // }
  }, []);

  useEffect(() => {
    if (typeof token !== "string") return;

    // ! Uncomment this code if you want to redirect user to login page if token is not found
    // if (!token) {
    //   navigate("/login", { replace: true, state: { from: location } });
    // } else if (token && location.pathname === "/login") {
    //   navigate("/", { replace: true });
    // } else if (location.state?.from) {
    //   navigate(location.state.from);
    // }
  }, [token]);
}
