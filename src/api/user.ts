import { http } from "@/utils/http";

export type UserResult = {
  token: TokenResult;
  user: LoginUserResult;
};

export type RefreshTokenResult = {
  token: TokenResult;
  user: LoginUserResult;
};

export type TokenResult = {
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx-xx-xx xx:xx:xx'） */
  expire: Date;
};

export type LoginUserResult = {
  userInfo: UserVO;
  roleKey: string;
  permissions: Array<string>;
};

export type UserVO = {
  userId: number;
  postId: number;
  postName: string;
  roleId: number;
  roleName: string;
  deptId: number;
  deptName: string;
  username: string;
  nickname: string;
  userType: number;
  email: string;
  phoneNumber: string;
  sex: number;
  avatar: string;
  status: number;
  loginIp: string;
  loginDate: Date;
  creatorId: number;
  creatorName: string;
  createTime: Date;
  updaterId: number;
  updaterName: string;
  updateTime: Date;
  remark: string;
};

export type LoginRequest = {
  username: string;
  password: string;
  loginType: LoginTypeEnum;
};

export type RefreshLoginRequest = {
  refreshToken: string;
  loginType: LoginTypeEnum;
};

export enum LoginTypeEnum {
  NORMAL = "normal",
  REFRESH_TOKEN = "refresh_token",
  WECHAT = "wechat"
}

/** 登录 */
export const getLogin = (data?: LoginRequest) => {
  return http.request<UserResult>("post", "login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: RefreshLoginRequest) => {
  return http.request<RefreshTokenResult>("post", "login", { data });
};
