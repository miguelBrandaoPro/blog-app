import { Component, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Subscription} from "rxjs/internal/Subscription";
import { Post } from "../models/post.model";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

    posts: any[];
    postsSubscription: Subscription;

    constructor(private postsService: PostsService){

    }

    ngOnInit() {
        this.postsSubscription = this.postsService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postsService.emitPosts();
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
