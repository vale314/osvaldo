import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private PriceService:PriceService) { }

  ngOnInit() {
    this.PriceService.get()
  }

}
