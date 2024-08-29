import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  newPostContent: string = '';

  constructor(private postService: PostService) {}

  createPost() {
    if (this.newPostContent.trim()) {
      // Implement post creation logic
      this.newPostContent = '';
    }
  }
}
