import FetchDataStore from "./FetchDataStore";
import AuthStore from "./AuthStore";
import CartStore from "./CartStore";
class RootStore{
  fetchStore:FetchDataStore;
  authStore:AuthStore
  cartStore:CartStore
  constructor(){
    this.fetchStore =new FetchDataStore();
    this.authStore = new AuthStore();
    this.cartStore = new CartStore();
  }
}

export default new RootStore();