import { User } from './user';
import { UsersService } from '../service/users.service';

const me = new User('Diego', 'assets/images/avatars/female-avatar-1.png')
const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
const echo: User    = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
const rev: User     = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: User    = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

export class AppData {

  constructor(private userService: UsersService) {
    this.userService.setCurrentUser(me);
  }

}
