import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images/images.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private ImagesServices:ImagesService) { }

  ngOnInit() {
    this.ImagesServices.get();
  }

}
