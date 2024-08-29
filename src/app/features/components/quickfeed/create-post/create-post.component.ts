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
  post: Post;

  @Output() postCreated = new EventEmitter<Post>();

  constructor(private postService: PostService) {
    this.post = {
      id: 0,
      content: '',
      comments: [],
      showComments: false,
    };
  }

  createPost() {
    if (this.newPostContent.trim()) {
      const newPost: Post = {
        id: Date.now(), // Use a unique ID
        content: this.newPostContent,
        comments: [],
        showComments: false,
        user: { name: 'User1', id: 1, profilePicture: 'path/to/profile1.jpg' },
        createdAt: new Date(),
        image: 'path/to/image.jpg',
      };
      this.postCreated.emit(newPost);
      this.newPostContent = '';
    }
  }

  handleClick(post: Post) {
    console.log(post);
  }
}
