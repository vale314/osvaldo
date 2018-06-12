import { Injectable, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {
   }

   url(){
        const API_URL = environment.apiUrl;
        this.http.get(API_URL+'/api/item/'+'123').subscribe(data => {
          console.log(data);
        });
   }
   
}
