// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CategoriesComponent } from './categories/categories.component';
import { GlassesComponent } from './glasses/glasses.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
// services
import { ProductService } from "./services/product.service";
import { EmployeeService } from "./services/employee.service";
import { OrderService } from './services/order.service';
import { CocktailService } from './services/cocktail.service';
import { CategoryService } from './services/category.service';
import { IngredientService } from './services/ingredient.service';
import { GlassService } from './services/glass.service';
import { BaseHttpService } from './services/base-http.service';
// resolvers
import { ProductResolverService } from './resolvers/product-resolver.service';
import { NewProductCanDeactivateService } from './guards/new-product-can-deactivate.service';
// interceptor
import { HttpIntercept } from './interceptors/http-intercept';
// UI widgets
import { MainTableWidgetComponent } from './shared/main-table/main-table-widget.component';
import { AddItemButtonComponent } from './shared/add-item-button/add-item-button.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { NewGlassComponent } from './new-glass/new-glass.component';
import { NewCocktailComponent } from './new-cocktail/new-cocktail.component';

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
    CocktailsComponent,
    IngredientsComponent,
    CategoriesComponent,
    GlassesComponent,
    SubNavbarComponent,
    MainTableWidgetComponent,
    AddItemButtonComponent,
    NewCategoryComponent,
    NewIngredientComponent,
    NewGlassComponent,
    NewCocktailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    GlassService,
    BaseHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercept,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
