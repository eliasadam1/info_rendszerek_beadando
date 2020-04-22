import { Component, OnInit, } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']

})
export class CustomerListComponent implements OnInit {

  Customers: any=[];

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.readCustomer();

    }

  ngOnInit(): void {
  }

  readCustomer() {
    this.apiService.getCustomers().subscribe((data) =>{
      this.Customers=data;
    });
  }



}
