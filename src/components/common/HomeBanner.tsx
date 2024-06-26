/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/ui/Button";
const LightingFastData = [
  "Build and optimised for eCommerce platforms",
  "Speed of light performance",
  "Maximum security",
  "Developer friendly",
  "Open Sans",
  "24/7 Support",
];

const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/banner.png"
        alt=""
        className="w-full h-[60vh] lg:h-full object-cover"
      />
      <div className="container mx-auto px-4 sm:px-6 absolute left-0 right-0 top-[25vh]">
        <div className="w-full lg:w-1/3 mb-10">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-3 uppercase">
            Sinh ly shop - 90
          </h1>
          <p className="text-xs lg:text-base">
            Sinhlyshop90 mang đến sự khác biệt trong tình yêu , tình dục . Hãy
            thử và cảm nhận .
          </p>
        </div>
        <Button label="Xem thêm" />
      </div>
    </section>
  );
};

export default HomeBanner;
