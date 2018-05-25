import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private background:BackgroundService) { }


  ngOnInit(){
    this.background
  }

}
