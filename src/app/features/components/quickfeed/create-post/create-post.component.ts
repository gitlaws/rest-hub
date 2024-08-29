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
  post: Post; // Add a Post object

  constructor(private postService: PostService) {
    // Initialize the Post object
    this.post = {
      id: 0,
      content: '',
      comments: [],
      showComments: false,
    };
  }

  createPost() {
    if (this.newPostContent.trim()) {
      // Implement post creation logic
      this.newPostContent = '';
    }
  }

  handleClick(post: Post) {
    // Handle the Post object
    console.log(post);
  }
}
