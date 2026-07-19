import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    label: "Email Addres",
    value: "arunijone@gmail.com",
    icon: "/figmaAssets/svg-10.svg",
  },
  {
    label: "Phone Number",
    value: "+91 9489456581",
    icon: "/figmaAssets/svg-6.svg",
  },
  {
    label: "My Location",
    value: "Rameswaram",
    icon: "/figmaAssets/svg-8.svg",
  },
];

export const ContactInformationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-information-heading"
      className="w-full rounded-[20px] bg-[#f6f7f9] px-[41px] py-[50px]"
    >
      <div className="flex min-h-[302px] flex-col justify-between gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_652px] lg:gap-10">
        <header className="flex flex-col items-start">
          <p className="flex h-[38px] items-center justify-center rounded-[199.27px] border-[0.71px] border-solid border-[#202833] px-[18px] [font-family:'SF_Pro_Display-Medium',Helvetica] text-sm font-medium leading-[18px] tracking-[1.74px] text-[#202833]">
            CONTACT US
          </p>
          <h2
            id="contact-information-heading"
            className="mt-[30px] [font-family:'SF_Pro_Display-Regular',Helvetica] text-[40px] font-normal leading-[45.7px] text-[#111111]"
          >
            Connect with Arunijone
          </h2>
          <p className="mt-2 [font-family:'SF_Pro_Display-Regular',Helvetica] text-base font-normal leading-7 text-[#6d6d6ecc]">
            Learn about my vision, story, and how I bring ideas to life.
          </p>
        </header>
        <address className="m-0 flex flex-col gap-[13.3px] lg:mt-4">
          {contactDetails.map((detail) => (
            <Card
              key={detail.label}
              className="h-[69.73px] rounded-[15px] border-0 bg-white shadow-none"
            >
              <CardContent className="flex h-full items-center gap-5 p-0 pl-5">
                <img
                  className="h-[43px] w-[43px] shrink-0"
                  alt=""
                  aria-hidden="true"
                  src={detail.icon}
                />
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="[font-family:'SF_Pro_Display-Light',Helvetica] text-lg font-light leading-[19.9px] text-[#11111199]">
                    {detail.label}
                  </p>
                  <p className="mt-1 [font-family:'SF_Pro_Display-Regular',Helvetica] text-xl font-normal leading-[23.2px] text-[#111111]">
                    {detail.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </address>
      </div>
    </section>
  );
};
