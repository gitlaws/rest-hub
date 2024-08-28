import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-quickfeed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quickfeed.component.html',
  styleUrl: './quickfeed.component.scss',
})
export class QuickfeedComponent {



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent  {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
}

}
