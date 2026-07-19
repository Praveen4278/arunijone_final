import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const insights = [
  {
    title:
      "My Rameswaram Trip: Book Pandits & Temple Services with Our New Website",
    image: "/figmaAssets/image-26-1.png",
    imageClassName: "h-[299px] w-[241px]",
    backgroundImage:
      "linear-gradient(0deg, rgba(254, 253, 254, 1) 0%, rgba(254, 253, 254, 1) 100%), url('/figmaAssets/67ac895b30cafb42cfac0a19-frame-202147226836-webp.png')",
  },
  {
    title: "Seafsoft: The Ultimate Seafood Inventory System for Export Success",
    image: "/figmaAssets/image-10-1.png",
    imageClassName: "h-[196px] w-[278px] object-cover",
  },
];

const ArrowIcon = () => (
  <img
    className="h-[19.89px] w-[18.94px]"
    alt=""
    aria-hidden="true"
    src="/figmaAssets/img.svg"
  />
);

export const LatestInsightsSection = (): React.JSX.Element => {
  return (
    <section
      className="w-full overflow-hidden rounded-[20.41px] px-4 py-[51px] sm:px-8 lg:px-12 xl:px-0"
      aria-labelledby="latest-insights-heading"
    >
      <div className="mx-auto flex w-full max-w-[1335px] flex-col gap-[25px]">
        <div className="flex h-[38.75px] w-[116px] items-center justify-center rounded-[204.11px] border-[0.75px] border-[#202833]">
          <span className="[font-family:'SF_Pro_Display-Medium',Helvetica] text-sm font-medium leading-[18px] tracking-[1.79px] text-[#202833]">
            OUR BLOG
          </span>
        </div>
        <header className="flex items-end justify-between gap-6">
          <h2
            id="latest-insights-heading"
            className="[font-family:'SF_Pro_Display-Regular',Helvetica] text-2xl font-normal leading-[38px] text-[#111111] sm:text-4xl"
          >
            Latest insights and trends
          </h2>
          <Button
            type="button"
            className="h-[55px] shrink-0 rounded-[98.68px] bg-[#0161fe] px-[21px] py-[13px] [font-family:'SF_Pro_Display-Medium',Helvetica] text-base font-medium leading-6 text-white hover:bg-[#0161fe]/90"
          >
            <span>View All</span>
            <ArrowIcon />
          </Button>
        </header>
        <div className="grid grid-cols-2 gap-3 sm:gap-[13px]">
          {insights.map((insight) => (
            <article key={insight.title} className="min-w-0">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-0">
                  <div
                    className="flex h-[436px] w-full items-center justify-center overflow-hidden rounded-[20.41px] border-[0.1px] border-[#8e8383] bg-white p-2.5"
                    style={
                      insight.backgroundImage
                        ? {
                            backgroundImage: insight.backgroundImage,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >
                    <img
                      className={insight.imageClassName}
                      alt=""
                      src={insight.image}
                    />
                  </div>
                  <h3 className="mt-[27px] flex min-h-[66px] items-center justify-center text-center [font-family:'SF_Pro_Display-Regular',Helvetica] text-sm font-normal leading-5 text-[#111111cc] sm:text-[32px] sm:leading-10">
                    {insight.title}
                  </h3>
                  <Button
                    type="button"
                    className="mt-[20px] h-[46px] rounded-[98.68px] bg-[#0161fe] px-[21px] py-[13px] [font-family:'SF_Pro_Display-Medium',Helvetica] text-base font-medium leading-5 text-white hover:bg-[#0161fe]/90"
                  >
                    <span>Explore</span>
                    <ArrowIcon />
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
