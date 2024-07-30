import { useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);

    setTimeout(() => {
        //setCount(oldCount => oldCount + 1);
        setCount(count + 1);
    }, 1000)

  return (
    <>
      <h2>Counter</h2>

      <p>{count}</p>
    </>
  );
}
