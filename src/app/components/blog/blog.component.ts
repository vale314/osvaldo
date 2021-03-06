import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private BlogService:BlogService) { }

  ngOnInit() {
    this.BlogService.get()
  }

}
