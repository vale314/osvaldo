import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private CommentService:CommentsService) { }

  ngOnInit() {
    this.CommentService.CommentGet()
  }

}
