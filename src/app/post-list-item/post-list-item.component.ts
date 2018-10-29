import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../models/post.model";
import { PostsService } from "../services/posts.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt(){
    this.postsService.updateLoveItsPost(this.post, 1);
    this.postsService.emitPosts();
  }

  onHateIt(){
    this.postsService.updateLoveItsPost(this.post, -1);
    this.postsService.emitPosts();
  }


  onDelete(){
    this.postsService.removePost(this.post);
    this.postsService.emitPosts();
  }

}
