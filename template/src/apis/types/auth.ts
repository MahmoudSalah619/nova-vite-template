export interface AuthTokenResponse {
  refresh_token: string;
  access_token: string;
  is_new: boolean;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface FirstLoginPasswordBody {
  new_password: string;
  new_password2: string;
}

export interface User {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  is_new?: boolean;
  user_type: "admin" | "seller";
}

export interface ForgotPasswordResponse {
  details?: string;
  detail?: string;
  data?: {
    detail?: string;
  };
}
export interface GetResetCodeBody {
  email: string;
}

export interface CheckResetCodeBody {
  email: string;
  code: string;
}

export interface ResetPassword {
  email: string;
  code: string;
  password: string;
}
