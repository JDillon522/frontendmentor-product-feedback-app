import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { environment as env } from "../../../environments/environment";
import { ApiService } from "../api/api.service";
import { GetUser } from "./actions";

export interface IUserState {
  user: IUser
}

export interface IUser {
  id: number;
  username: string;
  name: string;
  image: string;
}

@State<IUserState>({
  name: 'user',
  defaults: {
    user: {
      id: 0,
      username: '',
      name: '',
      image: ''
    }
  }
})
@Injectable()
export class UserState {

  @Selector()
  static user(state: IUserState) {
    return state.user;
  }


  constructor(
    private api: ApiService
  ) { }


  @Action(GetUser)
  public getUser(ctx: StateContext<IUserState>) {
    return this.api.getUserInfo().pipe(
      tap((user: IUser) => {
        ctx.patchState({
          user: user
        });
      })
    )
  }
}
