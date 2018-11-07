import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(posts =>{
      this.posts = posts;
    });
  }
}
