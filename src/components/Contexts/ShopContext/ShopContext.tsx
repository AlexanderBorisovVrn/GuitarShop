import React from 'react'
import store from '../../../store/RootStore'
interface  IShopContext {
  deleteItemGroupFromCart:(id:number|string)=>void
}


export const ShopContext = React.createContext<IShopContext>(null!)

export const ShopProvider=({ children }: { children: React.ReactNode })=>{
const deleteItemGroupFromCart = (id:number|string)=>{
  store.cartStore.updateCart(id,0)
}

const value = {
  deleteItemGroupFromCart
}

return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

