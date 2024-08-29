// post.model.ts
export interface User {
  name: string;
  profilePicture: string;
}

export interface Comment {
  user: User;
  text: string;
  createdAt: Date;
}

export interface Post {
  showComments: boolean;
  id: number;
  content: string;
  comments: Comment[];
}
