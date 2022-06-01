import FetchDataStore from "./FetchDataStore";
import AuthStore from "./AuthStore";

class RootStore{
  fetchStore:FetchDataStore;
  authStore:AuthStore
  
  constructor(){
    this.fetchStore =new FetchDataStore();
    this.authStore = new AuthStore();
  }
}

export default new RootStore();