import { Component } from '@angular/core';
import { Post } from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] =[
      new Post('Premier post', 'contenu du premier post', 1),
      new Post('Deuxième post', 'Lorem ipsum du 2ème post', -1),
      new Post('Et un dernier post', 'Lorem ipsum du dernier post', 8)
  ];

  test = "Bob";

  constructor(){

  }
}
