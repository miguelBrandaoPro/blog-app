import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{

    constructor(){
        const config = {
            apiKey: 'AIzaSyCJaZnU73_V532Lz-ImF1QLk-DBDl2MtlY',
            authDomain: 'my-book-shelves.firebaseapp.com',
            databaseURL: 'https://my-book-shelves.firebaseio.com',
            projectId: 'my-book-shelves',
            storageBucket: 'my-book-shelves.appspot.com',
            messagingSenderId: '876630594737'
        };
        firebase.initializeApp(config);
    }

}
