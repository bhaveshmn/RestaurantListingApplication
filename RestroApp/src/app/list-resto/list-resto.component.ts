import { Component, OnInit } from '@angular/core';
import { RestoDataService } from '../service/resto-data.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  showDeleteSuccessAlert = false;
  deletedRestaurantName = '';

  constructor(protected restoDataService: RestoDataService) { }

  ngOnInit(): void {
    this.restoDataService.getRestaurantsList().subscribe({
      next: (restaurants) => {
        console.log('Data', restaurants);
        this.restoDataService.restaurantsList = restaurants;
      },
      error: (error) => {
        console.log('Unable to get data', error);
      }
    });
  }

  deleteRestaurant(data: any) {
    console.log(data);
    this.restoDataService.deleteRestaurant(data.id).subscribe(() => {
      this.restoDataService.restaurantsList.splice(this.restoDataService.restaurantsList.indexOf(data), 1);
      this.deletedRestaurantName = data.name;
      console.log('Deleting Restaurant with name', data.name);
      console.log('Restaurant deleted successfully');
    })
    this.showDeleteSuccessAlert = true;
    setTimeout(() => {
      this.showDeleteSuccessAlert = false;
      this.deletedRestaurantName = ''
    }, 1000);
  }

  closeUpdateSucessAlert() {
    this.restoDataService.showUpdateSuccessAlert = false;
  }

}
