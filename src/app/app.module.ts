// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { EditorModule } from '@tinymce/tinymce-angular';
// components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
// services
import { ProductService } from "./services/product.service";
import { EmployeeService } from "./services/employee.service";
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
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
    NewProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule
  ],
  providers: [
    ProductService,
    EmployeeService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
