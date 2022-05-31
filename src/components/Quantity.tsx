import React, { FC } from "react";
import { TypeSetState } from "../types";

interface QuantityInterface {
  count: number;
  setCount: TypeSetState<number>;
}

const Quantity: FC<QuantityInterface> = ({ count, setCount }) => {
  return (
    <div className="flex items-center my-2">
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input
        type="number"
        className="mx-2"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <button onClick={() => count < 10 && setCount(count + 1)}>+</button>
    </div>
  );
};

export default Quantity;
