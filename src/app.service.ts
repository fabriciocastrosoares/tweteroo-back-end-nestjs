import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { LoginDTO } from './dtos/login.dto';
import { TweetDTO } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class AppService {
  private LIMIT = 15;
  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  login(body: LoginDTO) {
    const { username, avatar } = body;
    return this.users.push(new User(username, avatar));
  }

  createTweet(Body: TweetDTO) {
    const { username, tweet } = Body;
    const user = this.getUserByUsername(username);
    if (!user) throw new Error('User does not exist!');

    return this.tweets.push(new Tweet(user, tweet));
  }

  getTweets(page?: number) {
    let tweets: Tweet[] = [];

    if (page) {
      const { start, end } = this.calculatePageLimits(page);
      tweets = this.tweets.slice(start, end);
    } else {
      tweets = this.tweets.slice(-this.LIMIT);
    }

    return this.fromatTweets(tweets);
  }

  getTweetsFromUser(username: string) {
    const tweetsFromUser = this.tweets.filter((tweet) => {
      return tweet.user.username === username;
    });
    return this.fromatTweets(tweetsFromUser);
  }

  private calculatePageLimits(page: number): { start: any; end: any } {
    return {
      start: (page - 1) * this.LIMIT,
      end: page * this.LIMIT,
    };
  }

  private fromatTweets(tweets: Tweet[]) {
    return tweets.map((tweet) => {
      const { username, avatar } = tweet.user;
      return {
        username,
        avatar,
        tweet: tweet.tweet,
      };
    });
  }

  private getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
