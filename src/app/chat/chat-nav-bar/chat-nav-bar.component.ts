import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})
export class ChatNavBarComponent implements OnInit {
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
