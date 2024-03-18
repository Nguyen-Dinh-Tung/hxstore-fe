/* eslint-disable @next/next/no-img-element */
import React from 'react';

function ProductCard() {
    return (
      <div className="text-center border border-white hover:border-black pb-5">
        <img
          src="https://pos.nvncdn.com/b22375-44395/ps/20231121_8ft7eiuWkY.jpeg"
          alt="product"
          className="mb-2"
        />
        <p className="font-medium">Celina Bag</p>
        <p className="text-primary">520.000vnđ</p>
      </div>
    );
}

export default ProductCard;