import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comment, User } from '../../../../core/models/comment.model';

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
      const newComment: Comment = {
        user: { name: 'Current User', profilePicture: 'path/to/profile-pic' },
        text: this.newCommentText,
        createdAt: new Date(),
      };
      this.comments.push(newComment);
      this.newCommentText = '';
    }
  }
}
