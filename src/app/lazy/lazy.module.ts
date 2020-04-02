import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BearsComponent } from './bears/bears.component';
import { GodComponent } from './god/god.component';
import { CatsComponent } from './cats/cats.component';
import { SharksComponent } from './sharks/sharks.component';
import { LazyRoutingModule } from './lazy-routing.module'

@NgModule({
  declarations: [
    BearsComponent,
    GodComponent,
    CatsComponent,
    SharksComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
