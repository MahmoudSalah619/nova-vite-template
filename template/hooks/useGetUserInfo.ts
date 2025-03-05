// import { useGetUserInfoQuery } from "apis/services/auth";
// import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";

export default function useGetUserInfo() {
  const userData = useSelector((state: RootState) => state.auth.userData);

  const userType = userData?.user_type || "seller";
  return {
    isAdmin: userType === "admin",
    isSeller: userType === "seller",
    role: userType,
    userInfo: userData,
  };
}
