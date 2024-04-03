/* eslint-disable @next/next/no-img-element */
import React from "react";
import Modal, { ProductInfo } from "./Modal";
import { baseApi } from "@/config/axios";

function ProductCard(props: any) {
  const product: ProductInfo = props.product;

  return (
    <div className="text-center border border-white hover:border-black pb-5 cursor-pointer">
      <img
        src={`${baseApi}/${product.urlIMG}`}
        alt="product"
        className="mb-2"
      />
      <p className="font-medium">{product.name}</p>
      <p className="text-primary">{product.price}</p>
      <Modal product={product} />
    </div>
  );
}

export default ProductCard;
