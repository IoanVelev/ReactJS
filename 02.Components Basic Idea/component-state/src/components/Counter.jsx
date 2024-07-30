import { useState } from "react";
import KillCounter from "./KillCounter";
import './Counter.css'

export default function Counter() {
  let [count, setCount] = useState(0);

  const incrementBtnClickHandler = () => {
    setCount(count + 1);
  };

  const decrementBtnClickHanlder = () => {
    setCount(count - 1);
  };

  const resetBtnClickHanlder = () => {
    setCount(0);
  };

  let countStatus = `Positive ${count}`;

  if (count < 0) {
    countStatus = `Negative ${count}`;
  }

  return (
    <>
      <h2>Counter</h2>
      <KillCounter count={count} />

      <p className={count < 0 ? 'negative-text' : 'positive-text'}>{countStatus}</p>

      <button onClick={incrementBtnClickHandler}>+</button>
      <button onClick={resetBtnClickHanlder}>Reset counter</button>
      <button onClick={decrementBtnClickHanlder}>-</button>
    </>
  );
}
