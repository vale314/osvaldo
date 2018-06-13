import { Component, OnInit } from '@angular/core';
import { AboutUsTextService } from '../../services/about-us/about-us-text.service';

@Component({
  selector: 'app-about-us-text',
  templateUrl: './about-us-text.component.html',
  styleUrls: ['./about-us-text.component.css']
})
export class AboutUsTextComponent implements OnInit {

  constructor(private AboutUsTextServices:AboutUsTextService) { }

  ngOnInit() {
    this.AboutUsTextServices.get()
  }

}
