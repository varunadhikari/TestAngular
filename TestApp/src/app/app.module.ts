import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule, Routes} from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { DataService } from './data.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },{
    path: 'products',
    component: ProductsComponent
  },{
    path: 'bill',
    component: BillComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
