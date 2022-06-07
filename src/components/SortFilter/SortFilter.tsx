import React from 'react'
import { IProduct } from '../../types/types'
interface ISortOptions{
  priceUp:()=>IProduct[],
  priceDown:()=>IProduct[]
}
type Props = {
  data:IProduct[],
  options:ISortOptions,
  children:React.ReactNode
}

export default function SortFilter({children,data,options}: Props) {
  
}