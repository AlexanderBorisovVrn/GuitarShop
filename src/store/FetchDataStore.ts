import { IProduct } from "./../types/types";
import { makeAutoObservable } from "mobx";
import axios from "axios";

export interface IFetchData {
  isLoading: boolean;
  data: IProduct[] | [];
  error: boolean;
}

class FetchData implements IFetchData {
  private _URL:string = "/api.json";
  
  isLoading = false;
  error = false;
  data = [];
  constructor() {
    makeAutoObservable(this);
  }
  get newData(){
    return this.data
  }
  fetchData = async () => {
    this.isLoading = true;
    try {
      axios.get(this._URL).then((response) => {
        setTimeout(() => {
          this.data = response.data;
          this.isLoading = false;
        }, 1000);
      });
    } catch (error) {
      this.error = true;
      console.log(error);
      this.isLoading = false;
    }
  };
}

export default FetchData;
