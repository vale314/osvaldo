import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private StatsService:StatsService) { }

  ngOnInit() {
    this.StatsService.get()
  }

}
