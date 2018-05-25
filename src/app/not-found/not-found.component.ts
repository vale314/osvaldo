import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { } from '@types/googlemaps';


declare var jQuery:any;
declare var $ :any;

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function($){
      'use strict';
          jQuery('body').backstretch([
              "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

          ], {duration: 5000, fade: 500, centeredY: true });
      });
  }

}
