import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { Post } from '../../../../core/models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input()
  post!: Post; // Use the Post interface
  @Output() like = new EventEmitter<number>();
  @Output() commentsToggled = new EventEmitter<number>(); // Renamed to avoid conflict

  showComments = false;
  isLiking = false;

  toggleComments() {
    this.showComments = !this.showComments;
    this.commentsToggled.emit(this.post.id); // Updated to use the renamed property
  }

  likePost(postId: number) {
    this.isLiking = true;
    this.like.emit(postId);
    setTimeout(() => {
      this.isLiking = false;
    }, 1000); // Simulate a delay for the like action
  }
}
