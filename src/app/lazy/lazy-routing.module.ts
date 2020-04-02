import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BearsComponent } from './bears/bears.component';
import { GodComponent } from './god/god.component';
import { CatsComponent } from './cats/cats.component';
import { SharksComponent } from './sharks/sharks.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path: '', component: BearsComponent},
  { path: 'cats', component: CatsComponent },
  { path: 'god', component: GodComponent },
  { path: 'sharks', component: SharksComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
