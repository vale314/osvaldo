import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private get:ItemService,private route: ActivatedRoute) {
     
   }

  ngOnInit() {
   this.get.url()
  }

  url(){
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
        console.log(this.route.snapshot.paramMap.get('id'))
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
