import { Injectable } from '@nestjs/common';
import { User } from './users/entities/user.entity';


@Injectable()
export class AppService {

  private users: User[];
  constructor() {
    this.users = [];
  }



  getHello(): string {
    return 'Hello World!';
  }
}
