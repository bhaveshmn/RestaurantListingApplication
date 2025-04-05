import { Component } from '@angular/core';
import { RestaurantData, RestoDataService } from './service/resto-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resto';

  constructor(private restoDataService: RestoDataService) {}

  searchRestro(data: string) {
    if (data.length > 0) {
      let allRestaurants: RestaurantData[] = [...this.restoDataService.restaurantsList];
      this.restoDataService.filteredRestaurantsList = allRestaurants.filter((e) => e.name.toLowerCase().includes(data));
    } else {
      this.restoDataService.filteredRestaurantsList = [...this.restoDataService.restaurantsList];
    }
  }
}
