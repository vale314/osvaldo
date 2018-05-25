import { Component, OnInit, ViewChild ,AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-maps-a',
  templateUrl: './maps-a.component.html',
  styleUrls: ['./maps-a.component.css']
})
export class MapsAComponent implements OnInit {
  @ViewChild('mapwrapper') gmapElement: any;
  map: google.maps.Map;

  ngOnInit(){   
      
    }
    
    
    ngAfterViewInit(){
      var mapProp = {
        center: new google.maps.LatLng(18.5793, 73.8143),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      var marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: {lat: 18.5793, lng: 73.8143},
        map: this.map
      });
  }
}
