import { Injectable } from '@angular/core';

import * as $ from 'jquery';
import { } from '@types/googlemaps';


declare var jQuery:any;
declare var $ :any;


@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() {
    jQuery(document).ready(function($){
      'use strict';
            jQuery('body').backstretch([
              "../assets/images/bg/bg1.jpg",
              "../assets/images/bg/bg2.jpg",
              "../assetsimages/bg/bg3.jpg"
          ], {duration: 5000, fade: 500, centeredY: true });

        
      });
   }
}
