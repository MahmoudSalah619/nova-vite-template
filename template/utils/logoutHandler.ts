import store from "@/reducers";
import { logout } from "@/reducers/authReducer";

export default function logoutHandler() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  store.dispatch(logout());
}
