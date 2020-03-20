import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersComponent } from './orders/orders.component';
// import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductResolverService } from './resolvers/product-resolver.service';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductCanDeactivateService } from './guards/new-product-can-deactivate.service';
import { CocktailsComponent } from './cocktails/cocktails.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'products/new',
    component: NewProductComponent,
    canDeactivate: [ NewProductCanDeactivateService ]
  },
  { path: 'products/:id/orders', component: OrdersComponent },
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolverService
    }
  },
  { path: 'products', component: ProductsComponent },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'employees/:id', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
  // not created yet
  // { path: 'products/:name/:id', component: ProductComponent },
  // { path: 'products', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
