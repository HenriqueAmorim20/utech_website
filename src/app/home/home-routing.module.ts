import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductsComponent } from '../pages/products/products.component';
import { AboutComponent } from '../pages/about/about.component';
import { AccountComponent } from '../pages/account/account.component';
import { CartComponent } from '../pages/cart/cart.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: 'products', pathMatch: 'full', component: ProductsComponent},
  { path: 'about', pathMatch: 'full', component: AboutComponent},
  { path: 'account', pathMatch: 'full', component: AccountComponent},
  { path: 'cart', pathMatch: 'full', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
