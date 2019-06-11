export interface UserModel {
  id: number;
  login: string;
  registrationInstant: string;
  token?: string;
  isLogged: boolean;
  privileges: Array<string>;
}
