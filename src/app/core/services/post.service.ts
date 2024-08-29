import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://your-backend-url/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const mockPosts: Post[] = [
      {
        id: 1,
        content: 'This is the first post',
        comments: [
          {
            user: { name: 'User1', profilePicture: 'path/to/profile-pic1' },
            text: 'This is a comment on the first post',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: 2,
        content: 'This is the second post',
        comments: [
          {
            user: { name: 'User2', profilePicture: 'path/to/profile-pic2' },
            text: 'This is a comment on the second post',
            createdAt: new Date(),
          },
        ],
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
