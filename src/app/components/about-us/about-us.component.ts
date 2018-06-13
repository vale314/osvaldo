import { Component, OnInit } from '@angular/core';
import { AboutUsIconsService } from '../services/about-us/about-us-icons.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private AboutUsIconsServices:AboutUsIconsService) { }

  ngOnInit() {
    this.AboutUsIconsServices.get()
  }


}
