import { IProduct } from "./../types/types";
import { makeAutoObservable } from "mobx";
import useData from "../hooks/useData";

export interface ICart {
  cart: IItem[] | [];
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

  constructor() {
    makeAutoObservable(this);
    this.getCartFromStorage();
  }
  get orderTotal(){
    return this.cart.reduce((previous:number, current:IItem) => {
      return previous+=current.total
    }, 0)
  }
  itemsInCart = () => {
    let itemsInCart = this.cart.reduce((previous: number, current: IItem) => {
      return (previous += current.count);
    }, 0);
    return itemsInCart;
  };
  saveCartToStorage = () => {
    const cart = JSON.stringify(this.cart);
    localStorage.setItem("cart", cart);
  };
  getCartFromStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      this.cart = JSON.parse(cart || "{}");
    }
    return
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
