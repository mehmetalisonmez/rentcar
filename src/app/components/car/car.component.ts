import { Component, OnInit } from '@angular/core';

import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  currentCar:Car;
  


  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {   //params parametreler
      if(params["brandId"]){
       this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
       this.getCars();
      }
   })
    
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe((response) =>
    {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe((response) =>{
      this.cars = response.data;
      this.dataLoaded = true
    })
  }

  setCurrentCar(car:Car){
    this.currentCar = car
  }
 
}
