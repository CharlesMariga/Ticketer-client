export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
}

export interface IUserResponse {
  status: string;
  token: string;
  data: {
    user: IUser;
  };
}
