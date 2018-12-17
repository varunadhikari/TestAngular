import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormControl, FormBuilder ,FormArray} from '@angular/forms';
import {Router} from "@angular/router"
import { DataService } from './../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public formdata : FormGroup;
  public prod : FormArray;
  public numberOfproducts: number;
  constructor(private formBuilder: FormBuilder,private router: Router,private dataService: DataService) { 
    this.numberOfproducts = 2;
  } 

  ngOnInit() {
      this.formdata = this.formBuilder.group({
        prod: this.formBuilder.array([ this.createProduct() ])
      });
 
  }

  onSubmit(data){
    this.dataService.serviceData = data.prod; 
    this.router.navigate(['/bill']) 
  }

  arrayProduct(){
    return Array(this.numberOfproducts);
  }

  createProduct(): FormGroup {
  return this.formBuilder.group({
         sno:'',
         productName:'',
         quantity:'',
         rate:'',
         totalPrice:''
  });
}

addProduct(): void {
  this.prod = this.formdata.get('prod') as FormArray;
  this.prod.push(this.createProduct());
}

}
