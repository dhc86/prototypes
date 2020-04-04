import { Metric } from './Metric';

export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}
