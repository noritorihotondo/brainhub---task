export interface UserEntity {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface CreateUserResponse {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface CreateUserRequest {
  firstname: string;
  lastname: string;
  email: string;
}
