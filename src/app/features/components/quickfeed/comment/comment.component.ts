import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comments: Comment[] = []; // Provide a default value
  newCommentText: string = '';

  addComment() {
    if (this.newCommentText.trim()) {
      // Implement adding comment logic
      this.newCommentText = '';
    }
  }
}
