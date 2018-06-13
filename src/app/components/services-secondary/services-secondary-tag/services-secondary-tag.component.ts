import { Component, OnInit } from '@angular/core';
import { ServicesSecondaryService } from '../../services/services-secondary/services-secondary.service';

@Component({
  selector: 'app-services-secondary-tag',
  templateUrl: './services-secondary-tag.component.html',
  styleUrls: ['./services-secondary-tag.component.css']
})
export class ServicesSecondaryTagComponent implements OnInit {

  constructor(private ServiceSecondary:ServicesSecondaryService) { }

  ngOnInit() {
    this.ServiceSecondary.getIcons();
  }

}
