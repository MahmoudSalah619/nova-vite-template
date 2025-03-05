import { useRoutes } from "react-router-dom";

import { useSelector } from "react-redux";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import { RootState } from "@/reducers";
import routesList from "./routesList";

export default function useGenerateRoutes() {
  const { role } = useGetUserInfo();
  const isSignedIn = useSelector((state: RootState) => state.auth.token);
  const activeRoutes = !isSignedIn
    ? routesList.auth
    : [...routesList.common, ...routesList[role]];

  // console.log(isSignedIn, "isSignedIn");

  const routes = useRoutes(activeRoutes);

  return routes;
}
