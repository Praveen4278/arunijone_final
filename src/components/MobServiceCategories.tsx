import React from "react";
import { useNavigate } from "react-router-dom";

const MobServiceCategories = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] w-full rounded-[20px]"
      style={{
        width: "375px",
        height: "625px",
      }}
    >
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: "370px",
          height: "582px",
          left: "3px",
          top: "35px",
          gap: "25px",
        }}
      >
        {/* Badge */}
        <div
          className="border border-[#202833] rounded-[228.83px] flex items-center justify-center"
          style={{
            width: "126px",
            height: "32px",
          }}
        >
          <span
            className="font-medium text-[12px] leading-[14px] uppercase text-[#202833]"
            style={{
              fontFamily: "SF Pro Display",
              letterSpacing: "1.716px",
            }}
          >
            our services
          </span>
        </div>

        {/* Heading */}
        <span
          className="text-[#111111] text-center"
          style={{
            fontFamily: "SF Pro Display",
            fontWeight: 400,
            fontSize: "36px",
            lineHeight: "42px",
            width: "370px",
            height: "auto",
          }}
        >
          Proven Outcomes. Lasting Impact. Explore Our Services.
        </span>

        {/* See More Button */}
        <div
          className="bg-[#0161FE] rounded-[95.35px] flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            width: "136.84px",
            height: "46.34px",
          }}
          onClick={() => navigate("/explore")}
        >
          <span
            className="text-[#FFFFFF] text-center"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              width: "60.59px",
            }}
          >
            See More
          </span>
          <div
            className="relative overflow-hidden"
            style={{
              width: "22.88px",
              height: "22.88px",
            }}
          >
            <img
              src="/assets/homemob/images/vector_15.svg"
              alt="arrow"
              className="absolute"
              style={{
                left: "calc(100% * 0.17)",
                top: "calc(100% * 0.25)",
              }}
            />
          </div>
        </div>

        {/* Showcase Area */}
        <div
          className="bg-[#FEFEFD] border border-[#8E8383] rounded-[22.88px] flex items-center justify-center"
          style={{
            height: "212px",
            left: "8px",
            right: "8px",
            position: "relative",
            width: "calc(100% - 16px)",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "140.49px",
              height: "139.91px",
              backgroundImage:
                "url(/assets/homemob/images/ecosystem_logo_1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Service Thumbnails Container */}
        <div
          className="bg-[#FFFFFF] rounded-[15px] flex flex-row items-start gap-[8.3px]"
          style={{
            width: "361px",
            height: "78.6px",
            padding: "8.29787px",
            position: "relative",
          }}
        >
          {/* Thumbnail 1 */}
          <div
            className="relative bg-white border border-[#8E8383] rounded-[4.97872px]"
            style={{
              width: "114.61px",
              height: "61.4px",
            }}
          >
            <div
              className="absolute"
              style={{
                width: "90px",
                height: "50px",
                left: "calc(50% - 45px)",
                top: "calc(50% - 25px)",
                backgroundImage:
                  "url(/assets/homemob/images/ecosystem_logo_1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Thumbnail 2 */}
          <div
            className="relative bg-white border border-[#8E8383] rounded-[4.97872px]"
            style={{
              width: "105px",
              height: "62px",
            }}
          >
            <div
              className="absolute"
              style={{
                width: "80px",
                height: "45px",
                left: "calc(50% - 40px)",
                top: "calc(50% - 22.5px)",
                backgroundImage:
                  "url(/assets/homemob/images/ecosystem_logo_2.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Thumbnail 3 */}
          <div
            className="relative bg-white border border-[#8E8383] rounded-[4.97872px]"
            style={{
              width: "105px",
              height: "62px",
            }}
          >
            <div
              className="absolute"
              style={{
                width: "80px",
                height: "45px",
                left: "calc(50% - 40px)",
                top: "calc(50% - 22.5px)",
                backgroundImage:
                  "url(/assets/homemob/images/ecosystem_logo_3.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobServiceCategories;
