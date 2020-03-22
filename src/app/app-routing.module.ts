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
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CategoriesComponent } from './categories/categories.component';
import { GlassesComponent } from './glasses/glasses.component';


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
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/products', component: ProductsComponent },
  { path: 'dashboard/employees', component: EmployeesComponent },
  { path: 'dashboard/orders', component: OrdersComponent },

  { path: 'cocktails/ingredients', component: IngredientsComponent },
  { path: 'cocktails/categories', component: CategoriesComponent },
  { path: 'cocktails/glasses', component: GlassesComponent },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'employees/:id', component: EmployeeComponent },
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
