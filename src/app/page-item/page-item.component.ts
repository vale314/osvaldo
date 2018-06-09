import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  constructor(private background:BackgroundService) { }

  ngOnInit() {
  }

}
