import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  cars : Car[] =[]
  dataLoaded = false
 constructor(private carService:CarService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {   //params parametreler
      if(params["carId"]){
       this.getCarById(params["carId"])
      }
    })
  }
   


  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

}
