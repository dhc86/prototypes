import { Injectable } from '@angular/core';
import { AnalyticsImplementation } from '../models/analytics-implementation';
import { Metric } from '../models/Metric';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
constructor(
  ) { }

  // record(metric: Metric): void {
  //   this.implementation.recordEvent(metric);
  // }
}
