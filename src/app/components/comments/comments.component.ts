import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private CommnetsServices:CommentsService) { }

  ngOnInit() {
    this.CommnetsServices.CommentsGet()
  }

}
