import { Component, OnInit } from '@angular/core';
import { ServicesSecondaryService } from '../services/services-secondary/services-secondary.service';

@Component({
  selector: 'app-services-secondary',
  templateUrl: './services-secondary.component.html',
  styleUrls: ['./services-secondary.component.css']
})
export class ServicesSecondaryComponent implements OnInit {

  constructor(private ServicesSecondary:ServicesSecondaryService) { }

  ngOnInit() {
    this.ServicesSecondary.getServices();
  }

}
