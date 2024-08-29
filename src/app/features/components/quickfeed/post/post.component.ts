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
  @Input() post: any;
  @Output() like = new EventEmitter<number>();
  @Output() toggleComments = new EventEmitter<number>();

  showComments = false;
  isLiking = false;

  toggleComments() {
    this.showComments = !this.showComments;
    this.toggleComments.emit(this.post.id);
  }

  likePost(postId: number) {
    this.isLiking = true;
    this.like.emit(postId);
    setTimeout(() => {
      this.isLiking = false;
    }, 1000); // Simulate a delay for the like action
  }
}
