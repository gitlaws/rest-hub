import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { PostComponent } from './post/post.component';
import { Post } from '../../../core/models/post';
import { NotificationComponent } from './notification/notification.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-quickfeed',
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    NotificationComponent,
    CreatePostComponent,
    CommentComponent,
  ],
  templateUrl: './quickfeed.component.html',
  styleUrls: ['./quickfeed.component.scss'], // Corrected from styleUrl to styleUrls
})
export class QuickfeedComponent implements OnInit {
  posts: Post[] = [];
  notificationMessage: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onPostCreated(post: Post) {
    this.posts.unshift(post);
    this.showNotification('Post created successfully!');
  }

  onLikePost(post: Post) {
    this.postService.likePost(post.id).subscribe(() => {
      this.showNotification('Post liked!');
    });
  }

  onToggleComments(post: Post) {
    post.showComments = !post.showComments;
    // Additional logic to handle comment toggling
  }

  showNotification(message: string) {
    this.notificationMessage = message;
    setTimeout(() => {
      this.notificationMessage = null;
    }, 3000);
  }
}
