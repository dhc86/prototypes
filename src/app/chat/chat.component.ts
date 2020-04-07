import { Component, OnInit } from '@angular/core';
import { AppData } from './models/app-data';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    let appData = new AppData(this.userService)
  }

}
