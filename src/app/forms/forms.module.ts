import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsImplementation } from '../models/analytics-implementation';
import { Metric } from '../models/Metric';
@NgModule({
  declarations: [
    FormsComponent,
    ReactiveFormComponent,
    TemplateDriveFormComponent,
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // inject Values...
    {provide: 'MY_CONSTANT', useValue: 'DHC'},
    // this does not work...
    // AnalyticsService
    // then use a factory:
    // {
    //   provide: AnalyticsService ,
    //   useFactory() {
    //     // create an implementation that will log the event
    //     const loggingImplementation: AnalyticsImplementation = {
    //       recordEvent: (metric: Metric): void => {
    //         console.log('The metric is:', metric); }
    //       };
    //     return new AnalyticsService(loggingImplementation);
    //   }
    // }
  ]
})
export class FormsTabModule { }

