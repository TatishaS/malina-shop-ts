import { ProductInterface } from "../../types";

export enum actionTypes {
  CART_QUANTITY_ITEM = "CART_QUANTITY_ITEM",
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
}

interface CartAddItemPayloadInterface {
  product: ProductInterface;
  count: number;
}

interface CartAddItemInterface {
  type: actionTypes.CART_ADD_ITEM;
  payload: CartAddItemPayloadInterface;
}

interface CartRemoveItemInterface {
  type: actionTypes.CART_REMOVE_ITEM;
  payload: string;
}

export type TypeActionCart = CartAddItemInterface | CartRemoveItemInterface;
