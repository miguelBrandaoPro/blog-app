import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";
import {Subject} from "rxjs/internal/Subject";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor() {
        this.getPosts();
    }

    posts : Post[] = [];
    postsSubject = new Subject<Post[]>();

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if(postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    addPost(post: Post){
        this.posts.push(post);
        this.savePosts();
        this.emitPosts();
    }

    updateLoveItsPost(post: Post, value: number) {
        const postIndexToUpdate = this.posts.findIndex(
            (postEl) => {
                if(postEl === post) {
                    return true;
                }
            }
        );
        this.posts[postIndexToUpdate].loveIts = this.posts[postIndexToUpdate].loveIts+value;
        this.savePosts();
        this.emitPosts();
    }


    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data: DataSnapshot) => {
                    this.posts = data.val() ? data.val() : [];
                    this.emitPosts();
                }
            );
    }

}
