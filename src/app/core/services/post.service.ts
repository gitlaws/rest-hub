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
        showComments: false,
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

// Somewhere in your component or service where you want to create a post
this.postService
  .createPost({
    id: 1,
    content: 'Post content',
    comments: [],
    showComments: false,
    user: { name: 'User1', id: 1, profilePicture: 'path/to/profile1.jpg' }, // Add user
    createdAt: new Date(), // Add createdAt
    image: 'path/to/image.jpg', // Add image if applicable
  })
  .subscribe(
    (response) => {
      console.log('Post created successfully', response);
    },
    (error) => {
      console.error('Error creating post', error);
    }
  );

// Assigning a new post object
this.post = {
  id: 1,
  content: 'New post content',
  comments: [],
  showComments: false,
  user: { name: 'User1', id: 1, profilePicture: 'path/to/profile1.jpg' }, // Add user
  createdAt: new Date(), // Add createdAt
  image: 'path/to/image.jpg', // Add image if applicable
};
