import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroActions = [
  {
    label: "My NGO",
    variant: "primary",
  },
  {
    label: "Download Resume",
    variant: "secondary",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-start gap-3.5 self-stretch">
      <Card className="relative h-[212px] w-full overflow-hidden rounded-[4.72px] border-0 bg-[#fefefe] shadow-none min-[640px]:h-[916px] min-[640px]:rounded-[20.41px]">
        <CardContent className="relative h-full w-full p-0">
          <img
            className="absolute left-[20.49%] top-[calc(50%-90px)] h-[196px] w-[91.76%] object-cover min-[640px]:top-[calc(50%-390px)] min-[640px]:h-[848px]"
            alt="Image"
            src="/figmaAssets/image-266.png"
          />
          <div className="absolute left-[10px] top-[63px] flex w-[127px] flex-col items-start gap-[9px] min-[640px]:left-[42px] min-[640px]:top-[calc(50%-178px)] min-[640px]:w-[551px] min-[640px]:gap-10">
            <h1 className="flex h-[60px] items-center font-medium tracking-[0] text-[#111111] [font-family:'SF_Pro_Display-Medium',Helvetica] text-[19px] leading-[21px] min-[640px]:h-[261px] min-[640px]:text-[81px] min-[640px]:leading-[90px]">
              For Those Who Demand #1 Quality
            </h1>
            <div className="flex h-[13px] w-[81px] items-center gap-[4px] min-[640px]:h-[55px] min-[640px]:w-[350px] min-[640px]:gap-4">
              {heroActions.map((action) =>
                action.variant === "primary" ? (
                  <Button
                    key={action.label}
                    type="button"
                    className="h-full flex-1 rounded-[20px] bg-[#0161fe] px-0 py-0 text-white hover:bg-[#0161fe] min-[640px]:rounded-[85.04px]"
                  >
                    <span className="inline-flex items-center gap-[2px] min-[640px]:gap-2.5">
                      <span className="flex w-[14px] items-center whitespace-nowrap [font-family:'SF_Pro_Display-Regular',Helvetica] text-[4px] font-normal leading-[4px] min-[640px]:w-[60px] min-[640px]:text-base min-[640px]:leading-[18px]">
                        {action.label}
                      </span>
                      <img
                        className="h-[3px] w-[4px] min-[640px]:h-[11.27px] min-[640px]:w-[14.92px]"
                        alt=""
                        aria-hidden="true"
                        src="/figmaAssets/vector.svg"
                      />
                    </span>
                  </Button>
                ) : (
                  <Button
                    key={action.label}
                    type="button"
                    variant="ghost"
                    className="h-full w-[46px] rounded-[20px] px-0 py-0 text-center [font-family:'SF_Pro_Display-Regular',Helvetica] text-[4px] font-normal leading-[4px] text-transparent [-webkit-text-stroke:0.2px_#0161fe] hover:bg-transparent min-[640px]:w-[200px] min-[640px]:rounded-[85px] min-[640px]:text-base min-[640px]:leading-[17.1px] min-[640px]:[-webkit-text-stroke:0.75px_#0161fe]"
                  >
                    {action.label}
                  </Button>
                ),
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
