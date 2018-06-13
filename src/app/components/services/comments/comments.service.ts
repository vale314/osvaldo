import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  CommentsGet(){
    const API_URL = environment.apiUrl;
    this.http.get(API_URL+'/api/comments').subscribe(data => {
      console.log(data);
    });
  }

  CommentGet(){
    const API_URL = environment.apiUrl;
    this.http.get(API_URL+'/api/comment').subscribe(data => {
      console.log(data);
    });
  }
}
