export interface UserModel {
  username: string;
  email: string;
  password: string;
  id: number;
}

export interface UserLogin {
  email: string;
  password: string;
}
