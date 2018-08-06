import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { HotelsService } from '../../services/hotels.service';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public hotels: any;
  public innerWidth: any;
  public message: any;

  constructor(private sharedService: SharedService, private hotelService: HotelsService) { }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.sharedService.currentMessage.subscribe(message => this.filterByName(message));
      this.sharedService.stars.subscribe(message => this.filterByStars(message));

      this.hotelService.getHotels().subscribe((x: any) => {
        this.hotels = x;
      });
  }

  intToList(num: number) {
    return  Array(num).fill(0).map((x, i) => i);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  filterByName(name) {
    this.hotelService.filterByName(name).subscribe((x: any) => {
      this.hotels = x;
    });
  }

  filterByStars(stars) {
    this.hotelService.filterByStars(stars).subscribe((x: any) => {
      this.hotels = x;
    });
  }

}
