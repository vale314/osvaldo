import { Component, OnInit } from '@angular/core';
import { CaruselService } from '../services/carusel/carusel.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

  constructor(private CaruselService:CaruselService) { }

  ngOnInit() {
    this.CaruselService.get()
  }

}
