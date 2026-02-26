import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { LoginDTO } from './dtos/login.dto';
import { TweetDTO } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class AppService {

  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
  }





  getHello(): string {
    return 'Hello World!';
  }

  login(body: LoginDTO) {
    const { username, avatar } = body;
    return this.users.push(new User(username, avatar));
  }

  createTweet(Body: TweetDTO) {
    const { username, tweet } = Body;
    const user = this.getUserByUsername(username);
    if (!user) throw new Error("User does not exist!");

    return this.tweets.push(new Tweet(user, tweet));
  }
  private getUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}
