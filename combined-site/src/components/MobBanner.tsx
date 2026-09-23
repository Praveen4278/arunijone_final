import React from "react";


interface MobBannerProps {
  iconSrc?: string;
  avatarSrc?: string;
  className?: string;
}

const MobBanner = ({
  iconSrc = "/assets/homemob/images/group.svg",
  avatarSrc = "/assets/homemob/images/gemini_generated_image_gyuxclgyuxclgyux_2.png",
  className,
}: MobBannerProps) => {
  return (
    <div
      id="mob-banner"
      className={
        className ??
        "absolute bg-[rgba(246,247,249,1.00)] h-[59.00px] w-[calc(100%-18px)] left-[9px] rounded-[22px] top-[9.00px]"
      }
    >
      {/* Avatar */}
      <div
        className="absolute h-[47.00px] w-[49.00px] top-[calc(50%-23.50px)] rounded-[500px] left-[6.00px]"
        style={{
          background: `url(${avatarSrc}) 100% / cover no-repeat`,
        }}
      ></div>

      {/* WhatsApp pill */}
      <div className="absolute bg-[rgba(37,211,102,1.00)] h-[25.00px] w-[91.39px] flex flex-row justify-start items-center flex-nowrap gap-2 px-4 py-[11px] rounded-[calc(95.7407455444336px_*_1.0)] right-[6px] top-[6.00px]">
        <div className="relative overflow-hidden h-[20.00px] w-[20.00px]">
          <img
            src={iconSrc}
            alt="WhatsApp"
            className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
          />
        </div>
        <span className="flex justify-start text-left items-center h-[19.00px] w-[62.00px] relative">
          <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.055556297302246px] font-semibold leading-[18.82px] capitalize">
            WhatsApp
          </span>
        </span>
      </div>
    </div>
  );
};

export default MobBanner;
