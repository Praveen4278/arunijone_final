import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const primaryLinks = ["Home", "About", "Service", "Blog"];

const serviceLinks = [
  "UX/UI",
  "Digital Marketing",
  "Equity Research",
  "Developement",
];

const companyLinks = ["MyRameswaramTrip", "Seafsoft", "Contact", "FAQ"];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="self-stretch w-full bg-transparent">
      <Card className="min-h-[361px] w-full overflow-hidden rounded-[20px] border-0 bg-[#232323] text-white shadow-none">
        <CardContent className="flex min-h-[361px] flex-col px-[50px] pb-[41px] pt-[50px]">
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(260px,1fr)_83px_131px_145px] lg:gap-x-[49px]">
            <div className="flex items-start gap-4">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white">
                <img
                  className="ml-[-0.6px] mt-[-0.2px] h-[31.67px] w-[37.3px] object-cover"
                  alt="Arunijone logo final"
                  src="/figmaAssets/arunijone-logo-final-v1-3.svg"
                />
              </div>
              <p className="mt-3 [font-family:'SF_Pro_Display-Regular',Helvetica] text-[28px] font-normal leading-7 tracking-[0] whitespace-nowrap">
                Arunijone
              </p>
            </div>
            <nav aria-label="Primary navigation">
              <ul className="flex flex-col gap-[13.6px]">
                {primaryLinks.map((link) => (
                  <li key={link}>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-[40.8px] w-full justify-start px-[10.3px] py-0 [font-family:'SF_Pro_Display-Regular',Helvetica] text-base font-normal leading-[20.4px] text-white opacity-70 hover:bg-white/10 hover:text-white"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services">
              <ul className="flex flex-col gap-[13.6px]">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-[40.8px] w-full justify-start px-[10.3px] py-0 [font-family:'SF_Pro_Display-Regular',Helvetica] text-left text-base font-normal leading-[20.4px] text-white opacity-70 hover:bg-white/10 hover:text-white"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company information">
              <ul className="flex flex-col gap-[13.6px]">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <Button
                      type="button"
                      variant="ghost"
                      className={`h-[40.8px] w-full justify-start px-[10.3px] py-0 text-left text-base leading-[20.4px] text-white hover:bg-white/10 hover:text-white ${
                        link === "FAQ"
                          ? "[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal"
                          : "[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal opacity-70"
                      }`}
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-7 grid grid-cols-1 items-center gap-5 text-sm leading-[18px] sm:grid-cols-[1fr_auto_1fr]">
            <p className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal tracking-[0]">
              Designed by Arunijone
            </p>
            <p className="text-center [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
              © 2025 Arunijone. All rights reserved.
            </p>
            <div className="flex justify-start sm:justify-end">
              <img
                className="h-[38px] w-full max-w-[404px]"
                alt="Frame"
                src="/figmaAssets/frame-280.svg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
