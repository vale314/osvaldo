import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-page-portfolio',
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.css']
})
export class PagePortfolioComponent implements OnInit {

  constructor(private background:BackgroundService) { }

  ngOnInit() {
  }

}
