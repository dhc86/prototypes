import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
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
