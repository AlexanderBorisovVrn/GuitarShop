import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import store from "../../store/RootStore";
import style from "./Counter.module.scss";
const { Wrap, Btn, Inc, Dec, Count } = style;

type Props = { id: string | number };

function Counter({ id }: Props) {
  const [count, setCount] = useState(0);
  const item = store.cartStore.cart.find((item: any) => item.id === id);
  const counter = item ? item.count : 0;

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  const finalClassName = (...classNames: string[]): string => {
    return classNames.join(" ");
  };
  const decDisabled = count === 0 ? true : false;
  const increment = () => {
    store.cartStore.updateCart(id, 1);
  };
  const decrement = () => {
    store.cartStore.updateCart(id, -1);
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
      <span className={Count}>{count}</span>
    </div>
  );
}

export default observer(Counter);
