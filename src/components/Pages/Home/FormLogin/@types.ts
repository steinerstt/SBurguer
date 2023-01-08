import { iUser } from "../../../../stores/useUserStore/@types";

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormLoginProps {
  handleAlterForm: () => void;
}

export interface iHandleLoginResponse {
  token: string;
  user: iUser;
}
