import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44309/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarById(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getcardetailsbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+ "cars/getcarsdetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+ "cars/getcarsdetailsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

 

  
}
