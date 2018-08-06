import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSource = new BehaviorSubject(undefined);
  currentMessage = this.messageSource.asObservable();
  private starList = new BehaviorSubject(undefined);
  stars = this.starList.asObservable();

  constructor() { }

  filterByName(message: string) {
    this.messageSource.next(message);
  }

  filterByStars(message: String) {
    this.starList.next(message);
  }

}
