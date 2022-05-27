import FetchDataStore from "./FetchDataStore";

class RootStore{
  fetchStore:  FetchDataStore;
  
  constructor(){
    this.fetchStore =new FetchDataStore()
  }
}

export default new RootStore();