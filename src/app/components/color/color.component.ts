import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
   colors : Color[] = [];
   dataLoaded = false;
   currentColor : Color | null = null;
    constructor(private colorService:ColorService){}

    ngOnInit(): void {
        this.getColors()
    }

    getColors(){
      this.colorService.getColors().subscribe((response) => {
        this.colors = response.data;
        this.dataLoaded = true;
      })
    }

    setCurrentColor(color:Color){
      this.currentColor = color;
    }

    getColorsClass(color:Color){
      if(color==this.currentColor){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }

    resetCurrentColor(){
      this.currentColor=null;
    }

    getAllColorsClass(){
      if(this.currentColor==null){
        return "list-group-item active"
      }else{
        return "list-group-item"
      }      
    }

  
}
