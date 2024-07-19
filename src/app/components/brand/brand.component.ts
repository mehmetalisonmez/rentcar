import { Component } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent {
  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand: Brand | null = null;

  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
    this.getBrands();
   
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
    
  }

  getClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllClass() {
    if (this.currentBrand == null) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentBrand() {
    this.currentBrand = null;
  }
}
