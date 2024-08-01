import { useState, useEffect } from "react";

export default function Effect() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Initial render");
  }, []);

  useEffect(() => {
    console.log('Update counter');
  },[count]);

  const onClickHandler = () => {
    setCount(oldCount => oldCount + 1);
  }

  return (
    <>
      <h2>Effect</h2>
      <div>{count}</div>
      <button onClick={onClickHandler}>+</button>

    </>
  );
}
