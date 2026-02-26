import { User } from "../../users/entities/user.entity";

export class tweet {
    private _user: User;
    private _tweet: string
    
    constructor(user: string, tweet: string) {
        this._user
        this._tweet = tweet;
    }

    get user() {
        return this._user;
    }
    get tweet() {
        return this._tweet;
    }

}

