import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const showcaseImages = [
  {
    src: "/figmaAssets/image-260.png",
    alt: "Image",
    className: "h-full w-full object-cover",
  },
  {
    src: "/figmaAssets/image-257.png",
    alt: "Image",
    className: "h-full w-full object-cover",
  },
];

export const ServiceShowcaseSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden rounded-[20px] bg-[#f6f7f9] px-3 py-4 sm:px-6 sm:py-8 lg:px-[47px] lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1327px] flex-col gap-4 lg:gap-7">
        <Badge
          variant="outline"
          className="flex h-[38px] w-fit items-center rounded-[225.15px] border-[0.89px] border-[#202833] bg-transparent px-5 [font-family:'SF_Pro_Display-Medium',Helvetica] text-sm font-medium tracking-[1.97px] text-[#202833] hover:bg-transparent"
        >
          ABOUT US
        </Badge>
        <header className="grid gap-4 lg:grid-cols-[553px_minmax(0,473px)] lg:items-center lg:justify-between lg:gap-8">
          <h2 className="max-w-[553px] [font-family:'SF_Pro_Display-Regular',Helvetica] text-xl font-normal leading-[1.05] text-[#111111] sm:text-3xl lg:text-4xl lg:leading-[38px]">
            Unlocking creativity, strategy, and innovation for every business
          </h2>
          <p className="max-w-[473px] [font-family:'SF_Pro_Display-Regular',Helvetica] text-xs font-normal leading-[1.35] text-[#6d6d6ecc] sm:text-sm lg:text-base lg:leading-[22px]">
            At Arunijone, I bring together skills from UX/UI design, digital
            marketing, stock research and product innovation to deliver
            practical, impactful solutions for individuals and businesses.
          </p>
        </header>
        <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-[15px]">
          <div className="col-span-2 aspect-[656/282] overflow-hidden rounded-[12px] bg-[url('/figmaAssets/image-259.png')] bg-cover bg-center lg:rounded-[22.52px]" />
          <Card className="aspect-[321/282] rounded-[12px] border-0 bg-[#232323] text-white shadow-none lg:rounded-[18.77px]">
            <CardContent className="flex h-full flex-col justify-between p-2 sm:p-3 lg:p-[18.8px]">
              <p className="[font-family:'SF_Pro_Display-Regular',Helvetica] text-base font-normal leading-none sm:text-2xl lg:text-[46px] lg:leading-[54px]">
                3+
              </p>
              <p className="[font-family:'SF_Pro_Display-Regular',Helvetica] text-[5px] font-normal leading-[1.45] sm:text-[9px] lg:text-base lg:leading-6">
                Years of continuous innovation and valuable insights, helping
                businesses improve their digital presence, design better
                products, and make informed decisions through research-led
                strategies.
              </p>
            </CardContent>
          </Card>
          <Card className="aspect-[320/282] overflow-hidden rounded-[12px] border-0 bg-[#c5c6c7] shadow-none lg:rounded-[22.52px]">
            <CardContent className="h-full p-0">
              <img
                className={showcaseImages[0].className}
                alt={showcaseImages[0].alt}
                src={showcaseImages[0].src}
              />
            </CardContent>
          </Card>
          <img
            className="col-span-2 aspect-[656/282] h-full w-full rounded-[12px] object-cover lg:rounded-[22.52px]"
            alt="Background"
            src="/figmaAssets/background.png"
          />
          <div className="aspect-[320/282] rounded-[12px] bg-[url('/figmaAssets/67b5b9ebc673f016ac4e6456-frame-202147226954-webp.png')] bg-cover bg-[100%_100%] lg:rounded-[22.52px]" />
          <Card className="aspect-[320/282] overflow-hidden rounded-[12px] border-0 bg-black/20 shadow-none lg:rounded-[22.52px]">
            <CardContent className="h-full p-0">
              <img
                className={showcaseImages[1].className}
                alt={showcaseImages[1].alt}
                src={showcaseImages[1].src}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <img
        className="pointer-events-none absolute right-[-400px] top-[-122px] hidden h-[1254px] w-[1254px] object-cover min-[1500px]:block"
        alt=""
        aria-hidden="true"
        src="/figmaAssets/image-252.png"
      />
    </section>
  );
};
