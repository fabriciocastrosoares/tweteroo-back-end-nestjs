import { IsNotEmpty, IsString } from 'class-validator';

export class TweetDTO {
  @IsString()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  username: string;

  @IsString()
  @IsNotEmpty({
    message: 'All field are required!',
  })
  tweet: string;
}
