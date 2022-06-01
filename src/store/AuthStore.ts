import { makeAutoObservable } from "mobx";

export interface IAuth {
  isAuthOpen: boolean;
  isAuth: boolean;
  user: string;
}

export default class AuthStore implements IAuth {
  isAuthOpen = false;
  isAuth = false;
  user = "";

  constructor() {
    makeAutoObservable(this);
  }

  onAuthInvisible = () => {
    this.isAuthOpen = false;
  };
  onAuthVisible = () => {
    this.isAuthOpen = true;
  };
  signin = (newUser: string) => {
    this.user = newUser;
    this.isAuth = true;
    this.onAuthInvisible();
  };
  signout = () => {
    this.user = "";
    this.isAuth=false;
  };
}
