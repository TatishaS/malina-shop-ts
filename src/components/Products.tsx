import React from "react";
import { ProductInterface } from "../types";
import ProductItem from "./ProductItem";

const products: ProductInterface[] = [
  {
    _id: "ifdgsd78e",
    name: "SHISEIDO COLORGEL LIPBALM",
    imgPath:
      "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDE3NjQ5NXxpbWFnZS9qcGVnfHByb2R1Y3RzL2g2OC9oYzYvMTA2MjYxMzEwMDEzNzQuanBnfGExYWNhNWJhYjA1YWRiYjg4Njc0ZDliMzI1MjYyYTE5ODkwMmU3OWE4OGQwYjBmZTE5MmQ0Y2IyZjY5MGIwNTM",
    price: 35,
  },
  {
    _id: "ifd8731ery",
    name: "SHISEIDO SYNCHRO SKIN INVISIBLE SILK LOOSE POWDER",
    imgPath:
      "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDE0MzAxMnxpbWFnZS9qcGVnfHByb2R1Y3RzL2gwMy9oMTIvMTA2Mjc1NjY3NjQwNjIuanBnfDJiOGJhYjA1NjI2ZTJhNjM2MWFjMzUxOTU4MGU0NThkNWQ2MGMxMGZkYzYzYjcxNzgyNGQ4NzIwNWM4NDZlOGE",
    price: 55,
  },
  {
    _id: "78seterb",
    name: "SHISEIDO SYNCHRO SKIN COMPACT POWDER",
    imgPath:
      "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDE3MzQ1M3xpbWFnZS9qcGVnfHByb2R1Y3RzL2gzZS9oNjAvMTA2NzA0OTIzNTI1NDIuanBnfDRiZGFlZDkyOWYwN2FiZWRmOTAxMjFlNjQ0YjYxZjc5ODM4MWJkYTA0ZjhjODNhZGJmYTU3YjUwYmUxZGRkOTI",
    price: 50,
  },
  {
    _id: "4o89dsfhgf",
    name: "SHISEIDO INNERGLOW CHEEKPOWDER",
    imgPath:
      "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDE3NDc0N3xpbWFnZS9qcGVnfHByb2R1Y3RzL2g1NC9oOWQvMTAyMzIwOTY4MTcxODIuanBnfDQyOWJjOTBjN2ZjYTBiMTFlNmU5ZjU3ZTVlYzA5MjFlZTA3ZGE2NzQ4N2UwZGU4NjI4ZTdiOGNiNGQ1YmQyYjQ",
    price: 30,
  },
  {
    _id: "1klo752n",
    name: "SHISEIDO POWDER GEL EYESHADOW",
    imgPath:
      "https://api.rivegauche.ru/medias6/730852177116.jpg?context=bWFzdGVyfGltYWdlc3w2MjMyMzN8aW1hZ2UvanBlZ3xoMTIvaGI0LzEwODAzMzE3Mjc2NzAyLzczMDg1MjE3NzExNi5qcGd8ODJjYTJlNzUyMTc0NTkyYjAzNjJlZjczMmI1MzA0YTQ1OWZhOWU3MDkwZTAxMTY2ODc3MTlmNzVkNjY0MzY2Mw",
    price: 40,
  },
];

const Products = () => {
  return (
    <div>
      {products.map((p) => (
        <ProductItem product={p} key={p._id} />
      ))}
    </div>
  );
};

export default Products;
