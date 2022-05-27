import { IProduct } from "./../types/types";
import { makeAutoObservable } from "mobx";
import axios from "axios";
export interface IFetchData {
  isLoading: boolean;
  data: IProduct | [];
  error: boolean;
}

class FetchData implements IFetchData {
  isLoading: boolean;
  error: boolean;
  data: IProduct | [];
  constructor() {
    this.isLoading = false;
    this.error = false;
    this.data = [];
    makeAutoObservable(this);
  }
  async fetchData() {
    this.isLoading = true;
    try {
      axios.get("/api.json").then((response) => {
        this.data = response.data;
        this.isLoading = false;
      });
    } catch (error) {
      this.error = true;
      console.log(error);
    }
  }
}

export default FetchData;
