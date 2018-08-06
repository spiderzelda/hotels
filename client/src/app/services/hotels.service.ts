import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any> {
    return this.http.get(
      AppSettings.Global().EndPoints.API + '/hotels');
  }

  filterByName(name: String): Observable<any> {
    return this.http.get(
      AppSettings.Global().EndPoints.API + '/hotels/name?filter=' + name);
  }

  filterByStars(stars: Array<boolean>): Observable<any> {
    return this.http.get(
      AppSettings.Global().EndPoints.API + '/hotels/stars?filter=' + stars);
  }
}
