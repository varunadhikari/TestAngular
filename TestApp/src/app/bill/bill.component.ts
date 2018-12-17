import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { Observable } from 'rxjs';
import { DataService } from './../data.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  products : any;
  tax: number;
  stax: number;
  ctax: number;
  beforetax: number;
  totalAftertax: number;
  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.products = this.dataService.serviceData;
    //console.log(this.dataService.serviceData);
  }

  ngOnInit() {
    console.log(this.products);
    this.totalAftertax = 0;
    this.products.forEach(element => {
    this.totalAftertax = (this.totalAftertax + parseInt(element.totalPrice));
    });

    this.tax = (12*this.totalAftertax)/100;
    this.stax = this.tax/2;
    this.ctax = this.tax/2;

    this.beforetax = this.totalAftertax - (this.tax);

    console.log("Total val"+ this.totalAftertax,"tax"+this.tax);
    

  }


}
