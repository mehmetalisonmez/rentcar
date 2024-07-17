import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
   colors : Color[] = [];
   dataLoaded = false;

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
}
