import { observer } from "mobx-react-lite";
import style from "./Counter.module.scss";
const { Wrap, Btn, Inc, Dec, Count } = style;

type Props = { increment: () => void; decrement: () => void; counter: number };

function Counter({ increment, decrement, counter }: Props) {
  const finalClassName = (...classNames: string[]): string => {
    return classNames.join(" ");
  };
  const decDisabled = counter === 0 ? true : false;

  return (
    <div className={Wrap}>
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

export default Counter
