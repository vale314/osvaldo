import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private FooterService:FooterService) { }

  ngOnInit() {
    this.FooterService.get()
  }

}
