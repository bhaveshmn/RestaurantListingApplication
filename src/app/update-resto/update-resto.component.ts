import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantData, RestoDataService } from '../service/resto-data.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  showSuccessAlert = false;
  restaurantData: any;

  updateRestoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })

  constructor(private restoDataService: RestoDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit')
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Received id', id);
    // Fetch particular restaurant by its id
    this.restoDataService.getParticularRestaurant(id).subscribe((data: RestaurantData)=> {
      this.restaurantData = data;
      this.populateForm();
    })
  }

  populateForm() {
    this.updateRestoForm.controls.name.setValue(this.restaurantData.name);
    this.updateRestoForm.controls.address.setValue(this.restaurantData.address);
    this.updateRestoForm.controls.email.setValue(this.restaurantData.email);
  }

  closeSucessAlert() {
    this.showSuccessAlert = false;
  }

  updateRestaurant(data: any) {
    this.restoDataService.updateRestaurant(this.restaurantData.id, data).subscribe((result) => {
      console.log('Updated Successfully', result);
      this.showSuccessAlert = true;
      this.router.navigate(['/list']);
    })
    this.updateRestoForm.reset();
    this.restoDataService.updatedRestaurantName = data.name;
    this.restoDataService.showUpdateSuccessAlert = true;
  }

}
