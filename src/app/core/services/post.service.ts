import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface User {
  name: string;
  profilePicture: string;
  id: number;
}

interface Comment {
  user: User;
  text: string;
  createdAt: Date;
}

interface Post {
  id: number;
  content: string;
  comments: Comment[];
  showComments: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://api.example.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const mockPosts: Post[] = [
      {
        id: 1,
        content: 'This is the first post',
        comments: [
          {
            user: {
              name: 'User1',
              profilePicture: 'path/to/profile-pic1',
              id: 0,
            },
            text: 'This is a comment on the first post',
            createdAt: new Date(),
          },
        ],
        showComments: false,
      },
      {
        id: 2,
        content: 'This is the second post',
        comments: [
          {
            user: {
              name: 'User2',
              profilePicture: 'path/to/profile-pic2',
              id: 0,
            },
            text: 'This is a comment on the second post',
            createdAt: new Date(),
          },
        ],
        showComments: false,
      },
    ];

    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError(() => {
        console.error('Failed to fetch posts from backend, using mock data');
        return of(mockPosts);
      })
    );
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  likePost(postId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${postId}/like`, {});
  }
}
