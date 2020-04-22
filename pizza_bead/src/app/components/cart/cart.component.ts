import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { Router} from '@angular/router';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import { Product } from 'src/app/models/product';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Products: any=[];

  constructor(
    private router: Router,
    private apiService:ApiService,
    
    ) {
      
    // this.readProduct();
   
    }

  ngOnInit(): void {
  }
 

/*
  readProduct() {
    this.apiService.getProducts().subscribe((data) =>{
      this.Products=data;
    });
  }

*/
}
