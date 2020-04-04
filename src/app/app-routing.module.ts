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
import { IngredientsComponent } from './cocktails/ingredients/ingredients.component';
import { CategoriesComponent } from './cocktails/categories/categories.component';
import { GlassesComponent } from './cocktails/glasses/glasses.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewGlassComponent } from './new-glass/new-glass.component';
import { NewCocktailComponent } from './new-cocktail/new-cocktail.component';
import { AllBoxesComponent } from './boxes/all-boxes/all-boxes.component';


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
  { path: 'employees/:id', component: EmployeeComponent },

  { path: 'cocktails/ingredients', component: IngredientsComponent },
  { path: 'cocktails/ingredients/new', component: NewIngredientComponent },
  { path: 'cocktails/categories', component: CategoriesComponent },
  { path: 'cocktails/categories/new', component: NewCategoryComponent },
  { path: 'cocktails/glasses', component: GlassesComponent },
  { path: 'cocktails/glasses/new', component: NewGlassComponent },
  { path: 'cocktails/cocktails', component: CocktailsComponent },
  { path: 'cocktails/cocktails/new', component: NewCocktailComponent },
  { path: 'all-boxes', component: AllBoxesComponent },
  { path: 'cocktails', redirectTo: '/cocktails/cocktails', },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(mod => mod.LazyModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(mod => mod.FormsTabModule)
  },
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
