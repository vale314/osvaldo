import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.css']
})
export class PageServicesComponent implements OnInit {

  constructor(private background:BackgroundService) { }

  ngOnInit() {
  }

}
