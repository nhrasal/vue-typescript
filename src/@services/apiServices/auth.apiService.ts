import { WatsonApiInstance } from "./../../@config/api.config";
// import { isExpired } from "vuejs-jwt";

type LoginPayload = {
  phoneNumber: String;
  password: String;
};
type SignupPayload = {
  phoneNumber: String;
  password: String;
  name: String;
  // userType: String;
};
type RefreshToken = {
  refreshToken: String;
};

export const AuthService = {
  login: (loginPayload: LoginPayload) =>
    WatsonApiInstance.post("auth/panel_login", loginPayload),

  refreshToken: (refreshToken: RefreshToken) =>
    WatsonApiInstance.post("auth/refresh-token", refreshToken),

  signup: (signupPayload: SignupPayload) =>
    WatsonApiInstance.post("auth/panel_register", signupPayload),
};
const removeToken = () => {
  localStorage.removeItem("reshop_accessToken");
  localStorage.removeItem("refreshToken"); 
};
const loginRedirect = () => {
  removeToken();
  window.location.href = "login";
};
export const AuthHeader = () => {
  const accessToken = localStorage.getItem("reshop_accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // const accessTokenExpired = isExpired(accessToken);
  // const refreshTokenExpired = isExpired(refreshToken);

  // console.log("accessTokenExpired:", accessTokenExpired);
  // console.log("accessToken:", decodeToken(accessToken));
  // console.log("refreshTokenExpired:", refreshTokenExpired);
  // console.log("refreshToken:", refreshToken);

  // if (accessToken && !accessTokenExpired) {
  //   return { Authorization: "Bearer " + accessToken };
  // } else if (
  //   accessToken &&
  //   accessTokenExpired &&
  //   refreshToken &&
  //   !refreshTokenExpired
  // ) {
  //   removeToken();
  //   AuthService.refreshToken({ refreshToken }).subscribe(
  //     (res: any) => {
  //       localStorage.setItem("reshop_accessToken", res.payload.accessToken);
  //       localStorage.setItem("refreshToken", res.payload.refreshToken);
  //     },
  //     (error:any) => {
  //       loginRedirect();
  //     }
  //   );
  // } else {
  //   loginRedirect();
  // }
};
