import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const successStoryLogos = [
  {
    type: "icon",
    icon: "/figmaAssets/image-26.png",
    iconClassName: "h-14 w-[46px]",
  },
  {
    type: "image-overlay",
    background: "/figmaAssets/image.png",
    overlay: "/figmaAssets/image-10-1.png",
    overlayClassName: "h-[38px] w-[53px]",
  },
  {
    type: "frame",
    frame: "/figmaAssets/frame-1171276921.svg",
  },
  {
    type: "icon",
    icon: "/figmaAssets/image-1.png",
    iconClassName: "h-[49px] w-[62px] object-cover",
  },
  {
    type: "image-overlay",
    background: "/figmaAssets/image-2.png",
    overlay: "/figmaAssets/image-47.png",
    overlayClassName: "h-[34px] w-[118px]",
  },
  {
    type: "resora",
    background: "/figmaAssets/image-3.png",
    icon: "/figmaAssets/vector-1.svg",
  },
  {
    type: "image-overlay",
    background: "/figmaAssets/image-4.png",
    overlay: "/figmaAssets/image-242.png",
    overlayClassName: "h-[61px] w-14",
  },
  {
    type: "image-overlay",
    background: "/figmaAssets/image-5.png",
    overlay: "/figmaAssets/image-63.png",
    overlayClassName: "h-[31px] w-[110px] object-cover",
  },
] as const;

export const SuccessStoriesSection = (): React.JSX.Element => {
  return (
    <section className="w-full overflow-hidden rounded-[20.41px] bg-[#f6f7f9] px-3 py-6 sm:px-6 sm:py-10 lg:px-[42px] lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1335px] flex-col">
        <div className="flex flex-col gap-[30px]">
          <span className="flex h-[39px] w-[159px] items-center justify-center rounded-[204.11px] border-[0.75px] border-[#202833] [font-family:'SF_Pro-Medium',Helvetica] text-sm font-medium tracking-[1.79px] text-[#202833]">
            OUR SERVICES
          </span>
          <header className="flex items-center justify-between gap-5">
            <h2 className="max-w-[424px] [font-family:'SF_Pro_Display-Regular',Helvetica] text-2xl font-normal leading-[30px] text-[#111111] sm:text-4xl sm:leading-[42px]">
              Real Results. Real Impact. Our Success Stories.
            </h2>
            <Button
              type="button"
              className="h-[55px] shrink-0 rounded-[98.68px] bg-[#0161fe] px-[21px] py-[13px] [font-family:'SF_Pro_Display-Medium',Helvetica] text-base font-medium text-white hover:bg-[#0161fe]/90"
            >
              <span>View All</span>
              <img
                className="ml-[5px] h-[19.89px] w-[18.94px]"
                alt=""
                src="/figmaAssets/img.svg"
              />
            </Button>
          </header>
          <img
            className="w-full self-stretch"
            alt="Image box"
            src="/figmaAssets/image-box.svg"
          />
        </div>
        <div className="mt-[31px] w-full overflow-x-auto pb-1">
          <div className="mx-auto flex h-[94px] w-max min-w-full items-start gap-2.5 rounded-xl bg-white p-2.5 lg:w-[1195px]">
            {successStoryLogos.map((logo, index) => (
              <Card
                key={`${logo.type}-${index}`}
                className="relative h-[74px] w-[138px] shrink-0 overflow-hidden rounded-md border-[0.1px] border-[#8e8383] bg-white shadow-none"
              >
                <CardContent className="flex h-full w-full items-center justify-center p-0">
                  {logo.type === "icon" && (
                    <img
                      className={logo.iconClassName}
                      alt=""
                      src={logo.icon}
                    />
                  )}

                  {logo.type === "frame" && (
                    <img
                      className="h-full w-full"
                      alt="Frame"
                      src={logo.frame}
                    />
                  )}

                  {logo.type === "image-overlay" && (
                    <>
                      <img
                        className="h-full w-full object-cover"
                        alt=""
                        src={logo.background}
                      />
                      <img
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${logo.overlayClassName}`}
                        alt=""
                        src={logo.overlay}
                      />
                    </>
                  )}

                  {logo.type === "resora" && (
                    <>
                      <img
                        className="h-full w-full object-cover"
                        alt=""
                        src={logo.background}
                      />
                      <div className="absolute left-1/2 top-1/2 flex h-[26px] w-[93px] -translate-x-1/2 -translate-y-1/2 items-start gap-[7.6px]">
                        <img
                          className="h-[23.84px] w-[25.35px]"
                          alt=""
                          src={logo.icon}
                        />
                        <span className="mt-[1.5px] h-[25px] w-[58px] [font-family:'Poppins',Helvetica] text-[16.6px] font-normal leading-normal tracking-[0]">
                          <span className="font-semibold text-[#1f64ff]">
                            R
                          </span>
                          <span className="font-medium text-[#1f64ff]">e</span>
                          <span className="font-medium text-black">sora</span>
                        </span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <img
          className="mx-auto mt-[30px] h-[50.63px] w-[111.38px]"
          alt="Group"
          src="/figmaAssets/group-1000008325.png"
        />
      </div>
    </section>
  );
};
