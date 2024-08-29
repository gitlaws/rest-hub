import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { PostComponent } from './post/post.component';
import { Post } from '../../../core/models/post';
import { NotificationComponent } from './notification/notification.component';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-quickfeed',
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    NotificationComponent,
    CreatePostComponent,
  ],
  templateUrl: './quickfeed.component.html',
  styleUrls: ['./quickfeed.component.scss'], // Corrected from styleUrl to styleUrls
})
export class QuickfeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {} // Corrected from PostService to postService

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
