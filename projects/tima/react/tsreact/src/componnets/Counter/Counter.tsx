import React, { Dispatch, SetStateAction } from "react";

interface ISomeProps {
  item: number;
  setItem: Dispatch<SetStateAction<number>>;
}

const Counter: React.FC<ISomeProps> = ({ item, setItem }) => {
  return (
    <div>
      <div>{item}</div>
      <button onClick={() => setItem(item - 1)}>-</button>

      <button onClick={() => setItem(item + 1)}>+</button>
    </div>
  );
};

export default Counter;
