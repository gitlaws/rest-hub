import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../../core/models/post';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'], // Corrected styleUrls
})
export class CreatePostComponent {
  newPostContent: string = '';
  post: Post; // Add a Post object

  @Output() postCreated = new EventEmitter<Post>(); // Add EventEmitter

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
      const newPost: Post = {
        showComments: false,
        id: 1,
        content: this.newPostContent, // Use the newPostContent
        comments: [],
      };
      this.postCreated.emit(newPost);
      this.newPostContent = ''; // Clear the input after emitting
    }
  }

  handleClick(post: Post) {
    // Handle the Post object
    console.log(post);
  }
}
