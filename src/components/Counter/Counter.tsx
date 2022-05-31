import React, { useEffect, useState } from 'react';
import style from './Counter.module.scss';
const {Wrap,Btn,Inc,Dec,Count} = style;

type Props = {}

export default function Counter({}: Props) {
const [counter,setCounter] = useState(0);
const finalClassName = (...classNames:string[]):string=>{
 return classNames.join(' ')
}
const decDisabled = counter===0?true:false;
const increment = ()=>setCounter(counter+1);
const decrement = ()=>setCounter(counter-1);
  return (
    <div className={Wrap}>
      Add to cart:&nbsp;
      <button onClick={increment} className={finalClassName(Btn,Inc)}>+</button>
      <button disabled={decDisabled} onClick={decrement} className={finalClassName(Btn,Dec)}>-</button>
      <span className={Count}>{counter}</span>
    </div>
  )
}