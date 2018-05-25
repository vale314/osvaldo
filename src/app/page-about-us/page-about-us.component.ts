import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-page-about-us',
  templateUrl: './page-about-us.component.html',
  styleUrls: ['./page-about-us.component.css']
})
export class PageAboutUsComponent implements OnInit {

  constructor(private background:BackgroundService) { }

  ngOnInit() {
    this.background
  }

}
