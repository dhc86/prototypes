import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // cretae a beahaviour subject tof User, initial value is null.
  // anybody who subscribes the the stream, will recieve the current user.
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  public setCurrentUser(newUSer: User): void {
    this.currentUser.next(newUSer);
  }

}
