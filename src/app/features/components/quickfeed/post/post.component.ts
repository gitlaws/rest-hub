import { Component, Input } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: any; // Replace 'any' with the appropriate type

  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }

  likePost(postId: number) {
    // Implement like functionality
  }
}
