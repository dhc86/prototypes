import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss']
})
export class ChatThreadsComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      (user: User)=> {
        this.currentUser = user
      }
    )
  }

}
