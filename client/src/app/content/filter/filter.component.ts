import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public innerWidth: any;
  public message: any;
  public hotelName: string;
  public star5 = false;
  public star4 = false;
  public star3 = false;
  public star2 = false;
  public star1 = false;
  public allstar = true;
  public nameTag = false;


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.sharedService.currentMessage.subscribe(message => this.message = message);
  }

  intToList(num: number) {
    return Array(num).fill(0).map((x, i) => i);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  filterByName() {
    this.nameTag = false;
    if (this.hotelName !== '') {
      this.nameTag = true;
    }
    this.sharedService.filterByName(this.hotelName);
  }

  filterByStars(event) {
    if (event.source.id !== 'mat-checkbox-1' && this.allstar === true) {
      this.allstar = false;
    }
    if (event.source.id === 'mat-checkbox-1' && event.checked === true) {
      this.star1 = false;
      this.star2 = false;
      this.star3 = false;
      this.star4 = false;
      this.star5 = false;
      this.sharedService.filterByStars('0');
    } else {
      this.createStarsString();
    }

  }

  createStarsString() {
    let starList = '';
    if (this.allstar) { starList += '0'; }
      if (this.star1) { starList += '1'; }
      if (this.star2) { starList += '2'; }
      if (this.star3) { starList += '3'; }
      if (this.star4) { starList += '4'; }
      if (this.star5) { starList += '5'; }
      if (this.noStars()) { starList = '0'; }
      this.sharedService.filterByStars(starList);
  }

  starsToFalse() {

    this.star1 = false;
    this.star2 = false;
    this.star3 = false;
    this.star4 = false;
    this.star5 = false;
  }

  noStars() {
    return (!this.star1 && !this.star2 && !this.star3 && !this.star4 && !this.star5 && !this.allstar);
  }

  cancelNameFilter() {
    this.nameTag = false;
    this.hotelName = '';
    this.filterByName();
  }

  cancelStarFilter(stars) {
    switch (stars) {
      case 1:
        this.star1 = false;
        break;
      case 2:
        this.star2 = false;
        break;
      case 3:
        this.star3 = false;
        break;
      case 4:
        this.star4 = false;
        break;
      case 5:
        this.star5 = false;
        break;
      default:
        break;
    }
    this.createStarsString();
  }

}
