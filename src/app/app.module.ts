// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';
// components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProductComponent } from './new-product/new-product.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
// services
import { ProductService } from "./services/product.service";
import { EmployeeService } from "./services/employee.service";
import { OrderService } from './services/order.service';
import { CocktailService } from './services/cocktail.service';
import { CategoryService } from './services/category.service';
import { IngredientService } from './services/ingredient.service';
import { GlassService } from './services/glass.service';
// resolvers
import { ProductResolverService } from './resolvers/product-resolver.service';
import { NewProductCanDeactivateService } from './guards/new-product-can-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    EmployeesComponent,
    EmployeeComponent,
    ProductComponent,
    NotFoundComponent,
    NavbarComponent,
    OrdersComponent,
    OrderComponent,
    SpinnerComponent,
    DashboardComponent,
    NewProductComponent,
    CocktailsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true,
    })
  ],
  providers: [
    ProductService,
    EmployeeService,
    OrderService,
    ProductResolverService,
    NewProductCanDeactivateService,
    CocktailService,
    CategoryService,
    IngredientService,
    GlassService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
