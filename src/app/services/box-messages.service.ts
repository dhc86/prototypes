import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxMessagesService {

  private msgSubject = new Subject();
  private msgBehaviorSubject = new BehaviorSubject<string>("Default Message");
  private msgReplaySubject = new ReplaySubject<string>(5);

  constructor() { }

  sendMessageUsingSubject(message: string) {
      this.msgSubject.next({ message: message });
  }

  sendMessageUsingBehaviorSubject(message: string) {
    this.msgBehaviorSubject.next(message);
  }

  sendMessageUsingReplySubject(message: string) {
    this.msgReplaySubject.next(message);
  }

  clearMessage() {
      this.msgSubject.next();
  }

  getMsgSubject(): Observable<any> {
      return this.msgSubject.asObservable();
  }

  getMsgBehaviorSubject(): Observable<any> {
    return this.msgBehaviorSubject.asObservable();
  }

  getMsgReplySubject(): Observable<any> {
    return this.msgReplaySubject.asObservable();
  }
}
