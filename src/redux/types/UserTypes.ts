import { DefaultState } from ".";
import { FriendsListState } from "./FriendsTypes";

export enum UserTypes {
  USER_SUCCESS = "USER_SUCCESS",
  USER_ERROR = "USER_ERROR",
  USER_CLEAR = "USER_CLEAR",
}

export type UserData = {
  nick: string | null;
  imgUrl: string | null;
  mail: string | null;
  friends: FriendsListState;
};

export interface UserState extends DefaultState {
  state: UserData;
}