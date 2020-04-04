import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  { path: '', component: ReactiveFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'template-driven-form', component: TemplateDriveFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
