import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestoDataService } from '../service/resto-data.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {
  showSuccessAlert = false;

  constructor(private restoDataService: RestoDataService) {}

  restoForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })

  saveRestaurant(data: any) {
    console.log('Saving Data', data);
    this.restoDataService.saveRestaurant(data).subscribe((a) => {
      this.showSuccessAlert = true;
      console.log('Data saved - ', a);
    });
    this.restoForm.reset();
  }

  closeSucessAlert() {
    this.showSuccessAlert = false;
  }

}
