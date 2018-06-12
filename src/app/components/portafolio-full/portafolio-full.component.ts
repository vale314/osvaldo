import { Component, OnInit } from '@angular/core';
import { ItemsServices } from '../services/items/services.service';


@Component({
  selector: 'app-portafolio-full',
  templateUrl: './portafolio-full.component.html',
  styleUrls: ['./portafolio-full.component.css']
})
export class PortafolioFullComponent implements OnInit {

  constructor(private ItemService:ItemsServices) { }

  ngOnInit() {
    this.ItemService.get()
  }

}
