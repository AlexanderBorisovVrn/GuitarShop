import { IProduct } from "./../types/types";
import { makeAutoObservable } from "mobx";
import useData from "../hooks/useData";

export interface ICart {
  cart: IItem[] | [];
  orderTotal: number;
}
export interface IItem {
  id: string | number;
  title: string;
  img: string;
  count: number;
  total: number;
  color: string;
  price: number;
}

export default class CartStore implements ICart {
  cart = [] as any;
  orderTotal = 0;

  constructor() {
    makeAutoObservable(this);
    this.getCartFromStorage();
  }

  saveCartToStorage = () => {
    const cart = JSON.stringify(this.cart);
    localStorage.setItem("cart", cart);
  };
  getCartFromStorage = () => {
    const cart = localStorage.getItem("cart");
    this.cart = JSON.parse(cart || "{}");
  };

  updateCart = (idx: string | number, quantity: number) => {
    const data = useData();
    const itemIdx = this.cart.findIndex((item: IItem) => item.id === idx);
    const guitar: any = data.find(
      (guitar: IProduct) => guitar.model.id === idx
    );
    const { id, name, img, price, color } = guitar.model;

    if (itemIdx === -1) {
      this.cart.push({
        id,
        color,
        title: name,
        img,
        count: 1,
        price,
        total: Number(price),
      });
    }
    if (itemIdx !== -1) {
      this.cart[itemIdx].count += quantity;
      this.cart[itemIdx].total += Number(price) * quantity;
      if (this.cart[itemIdx].count === 0 || quantity === 0) {
        this.cart = this.cart.filter((item: IItem) => item.id !== idx);
      }
    }
    this.saveCartToStorage();
  };
}
