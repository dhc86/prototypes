import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, interval  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  public number$: Observable<any> = interval(1000);

  constructor() {}

  startCounter() {
    return this.number$;
  }
}
