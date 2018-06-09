import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-page-portafolio-full',
  templateUrl: './page-portafolio-full.component.html',
  styleUrls: ['./page-portafolio-full.component.css']
})
export class PagePortafolioFullComponent implements OnInit {

  constructor(private background:BackgroundService) { }

  ngOnInit() {
  }

}
