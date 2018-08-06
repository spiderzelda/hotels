import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule, MatFormFieldModule, MatCheckboxModule, MatCardModule } from '../../../node_modules/@angular/material';
import { SharedService } from '../services/shared.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HotelsService } from '../services/hotels.service';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [FilterComponent, HotelListComponent],
  exports: [FilterComponent, HotelListComponent],
  providers: [SharedService, HotelsService]
})
export class ContentModule { }
