import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: any=[];

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.readProduct();

    }

  ngOnInit(): void {
  }

  readProduct() {
    this.apiService.getProducts().subscribe((data) =>{
      this.Products=data;
    });
  }


}
