import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { PostsService } from "../services/posts.service";
import { Post } from "../models/post.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private postsService: PostsService,
                private router: Router
                ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(){
        this.postForm = this.formBuilder.group({
            title: '',
            content: ''
        });
    }

    onSubmitForm(){
        const formValue = this.postForm.value;
        const postForm = new Post(
            formValue['title'],
            formValue['content'].replace(/(?:\r\n|\r|\n)/g, '<br>'),
            0
        );
        this.postsService.addPost(postForm);
        this.router.navigate(['/posts']);
    }

}
