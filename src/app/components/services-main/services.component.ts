import { Component, OnInit } from '@angular/core';
import { ServicesIconsMainService } from '../services/services-main/services-icons-main.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private ServicesIconsMainService:ServicesIconsMainService) { }

  ngOnInit() {
    console.log('hello')
    this.ServicesIconsMainService.get()
  }

}
