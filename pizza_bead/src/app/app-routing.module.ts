import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'product-list'},
  {path: 'product-create', component:ProductCreateComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'customer-create', component:CustomerCreateComponent},
  {path: 'customer-list', component:CustomerListComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
