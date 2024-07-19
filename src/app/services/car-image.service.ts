import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImageDetail } from '../models/carImageDetail';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44398/api/';

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImageDetail>> {
    let newPath = this.apiUrl + 'CarImages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(newPath);
  }
}
