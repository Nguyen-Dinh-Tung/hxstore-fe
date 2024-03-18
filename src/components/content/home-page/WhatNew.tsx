import ProductCard from "@/components/ui/ProductCard";
import React from "react";

function WhatNew() {
  return (
    <div>
      <p className="uppercase font-medium text-4xl mb-5">Có gì mới?</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default WhatNew;
