import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface RestaurantData {
  id?: string
  name: string,
  address: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class RestoDataService {
  restaurantsList: RestaurantData[] = [];
  url = 'http://localhost:3000/restaurants';
  updatedRestaurantName = '';
  showUpdateSuccessAlert = false;

  constructor(private http: HttpClient) { }

  getRestaurantsList(): Observable<RestaurantData[]> {
    return this.http.get<RestaurantData[]>(this.url);
  }

  getParticularRestaurant(id: any): Observable<RestaurantData> {
    return this.http.get<RestaurantData>(this.url + "/" + id);
  }

  updateRestaurant(restaurantDataId: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${restaurantDataId}`, data);
  }

  saveRestaurant(restaurantData: any): Observable<any> {
    return this.http.post(this.url, restaurantData);
  }

  deleteRestaurant(restaurantDataId: any): Observable<any> {
    return this.http.delete(`${this.url}/${restaurantDataId}`);
  }

}
