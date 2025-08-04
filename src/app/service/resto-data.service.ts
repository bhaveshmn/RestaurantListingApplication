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
  // This api is local db.json api running on local system
  // url = 'http://localhost:3000/restaurants';

  // This is a Render platform api in which the json server is deployed
  // so that vercel in which UI application is running can get the api data.
  url = "https://json-server-api-xe25.onrender.com/restaurants";
  // url = "https://factual-quilted-chime.glitch.me/restaurants";

  restaurantsList: RestaurantData[] = [];
  filteredRestaurantsList: RestaurantData[] = [];
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
