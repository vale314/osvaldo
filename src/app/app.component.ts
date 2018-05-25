import { Component, OnInit, ViewChild ,AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { } from '@types/googlemaps';


declare var jQuery:any;
declare var $ :any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('mapwrapper') gmapElement: any;
  map: google.maps.Map;

  ngOnInit(){
    
    jQuery(document).ready(function($){
      'use strict';
            jQuery('body').backstretch([
              "../assets/images/bg/bg1.jpg",
              "../assets/images/bg/bg2.jpg",
              "../assetsimages/bg/bg3.jpg"
          ], {duration: 5000, fade: 500, centeredY: true });

        
      });

      
      
    }
    
    
    ngAfterViewInit(){
      var mapProp = {
        center: new google.maps.LatLng(18.5793, 73.8143),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
  }


}



