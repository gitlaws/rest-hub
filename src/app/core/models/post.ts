// models/post.ts
export interface User {
  name: string;
  id: number;
  profilePicture: string;
}

export interface Comment {
  user: User;
  text: string;
  createdAt: Date;
}

export interface Post {
  id: number;
  content: string;
  comments: Comment[];
  showComments: boolean;
  user?: { name: string; id: number; profilePicture: string };
  createdAt?: Date;
  image?: string;
}
