import HomeBanner from "@/components/common/HomeBanner";
import ServicesBlock from "@/components/content/home-page/ServicesBlock";
import WhatNew from "@/components/content/home-page/WhatNew";

export default function HomeSection() {
  return (
    <>
      <HomeBanner />
      <div className="container mx-auto my-10 lg:my-20 px-5 lg:px-[10%] text-center">
        <div className="flex flex-col gap-10 lg:gap-20">
          <WhatNew /> 
          <ServicesBlock />
        </div>
      </div>
    </>
  );
}
