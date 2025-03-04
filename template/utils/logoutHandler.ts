import store from "@/template/reducers";
import { logout } from "@/template/reducers/authReducer";

export default function logoutHandler() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  store.dispatch(logout());
}
