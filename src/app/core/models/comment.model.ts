export interface User {
  name: string;
  profilePicture: string;
}

export interface Comment {
  user: User;
  text: string;
  createdAt: Date;
}
