"use client";
import { ProductInfo } from "@/components/ui/Modal";
import ProductCard from "@/components/ui/ProductCard";
import axiosInstance from "@/config/axios";
import { API_URL_USER } from "@/services/http-url_user";
import React, { useEffect, useState } from "react";

function WhatNew() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(API_URL_USER.PRODUCTS.FIND_ALL)
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <p className="uppercase font-medium text-4xl mb-5">Có gì mới?</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {products.length
          ? products.map((e: ProductInfo) => {
              return <ProductCard product={e} key={e.id} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default WhatNew;
