import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import store from "../../store/RootStore";
import style from "./Counter.module.scss";
const { Wrap, Btn, Inc, Dec, Count } = style;

type Props = { id: string | number };

function Counter({ id }: Props) {
  const [counter, setCounter] = useState(0);

  const finalClassName = (...classNames: string[]): string => {
    return classNames.join(" ");
  };
  const decDisabled = counter === 0 ? true : false;
  const increment = () => {
    store.cartStore.updateCart(id, 1);
    setCounter(counter + 1);
  };
  const decrement = () => {
    store.cartStore.updateCart(id, -1);
    setCounter(counter - 1);
  };
  return (
    <div className={Wrap}>
      Add to cart:&nbsp;
      <button onClick={increment} className={finalClassName(Btn, Inc)}>
        +
      </button>
      <button
        disabled={decDisabled}
        onClick={decrement}
        className={finalClassName(Btn, Dec)}
      >
        -
      </button>
      <span className={Count}>{counter}</span>
    </div>
  );
}

export default observer(Counter);
