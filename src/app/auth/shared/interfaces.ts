export interface User {
  username: string
  password: string
  returnSecureToken: boolean
}

export interface AuthResponse {
  access: string
}

export interface Pets {
  id: number,
  avatar: string,
  name: string,
  birthday?: Date,
  vaccine?: Date,
  pet_owner: number
}
