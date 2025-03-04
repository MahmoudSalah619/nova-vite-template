import api from "..";
import {
  AuthTokenResponse,
  CheckResetCodeBody,
  FirstLoginPasswordBody,
  ForgotPasswordResponse,
  GetResetCodeBody,
  LoginBody,
  ResetPassword,
  User,
} from "../types/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<User, void>({
      query: () => ({
        url: "/users/get_me/",
      }),
      forceRefetch: () => true,
    }),

    login: build.mutation<AuthTokenResponse, LoginBody>({
      query: (body) => ({
        url: "/users/login/",
        method: "POST",
        body,
      }),
    }),

    firstLoginPassword: build.mutation<
      ForgotPasswordResponse,
      FirstLoginPasswordBody
    >({
      query: (body) => ({
        url: "/change_first_password/",
        method: "PUT",
        body,
      }),
    }),

    getResetCode: build.mutation<ForgotPasswordResponse, GetResetCodeBody>({
      query: (body) => ({
        url: "/forget_password/send_reset_email/",
        method: "POST",
        body,
      }),
    }),

    checkResetCode: build.mutation<unknown, CheckResetCodeBody>({
      query: (body) => ({
        url: "/forget_password/check_reset_code/",
        method: "POST",
        body,
      }),
    }),

    resetPassword: build.mutation<unknown, ResetPassword>({
      query: (body) => ({
        url: "/forget_password/reset_password/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
  useLoginMutation,
  useFirstLoginPasswordMutation,
  useGetResetCodeMutation,
  useCheckResetCodeMutation,
  useResetPasswordMutation,
} = authApi;
