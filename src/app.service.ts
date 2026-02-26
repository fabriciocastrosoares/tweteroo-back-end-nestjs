import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { LoginDTO } from './dtos/login.dto';

@Injectable()
export class AppService {

  private users: User[];
  constructor() {
    this.users = [];
  }

  getHello(): string {
    return 'Hello World!';
  }

  login(body: LoginDTO) {
    const { username, avatar } = body;
    return this.users.push(new User(username, avatar));
  }
}
