import { Dispatch, SetStateAction } from "react";

export interface ProductInterface {
  _id: string;
  name: string;
  imgPath: string;
  price: number;
}

export interface CartItemInterface extends ProductInterface {
  count: number;
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;
