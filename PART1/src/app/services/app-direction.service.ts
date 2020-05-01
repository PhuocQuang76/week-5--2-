import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDirectionService {

  constructor(private http: HttpClient) {

  }

  getDirection(from:string, to:string) : Observable<any>{
    let key:string = 'KUG0z7qEYKPwPplFHTgJvMmqKKr3m5vk';
    let url:string =
      `http://open.mapquestapi.com/directions/v2/route?key=${key}&from=${from}&to=${to}`;
    return this.http.jsonp(url, 'callback')
  }
}
