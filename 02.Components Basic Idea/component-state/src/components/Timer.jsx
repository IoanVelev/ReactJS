import { useState } from 'react'

export default function Counter() {
    let [time, setTime] = useState(0);

    setTimeout(() => {
        //setCount(oldCount => oldCount + 1);
        setTime(time + 1);
    }, 1000)

  return (
    <>
      <h2>Timer</h2>

      <p>{time}</p>
    </>
  );
}
