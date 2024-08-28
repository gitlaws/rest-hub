import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
}
