import React from "react";


const MobStatHighlights = () => {
  return (
    <div
      id="mob-stat-highlights"
      className="relative h-[305.00px] w-full"
    >
      <div className="absolute h-[305.00px] w-full left-[0.00px] top-[0.00px]">
        <div className="absolute bg-white h-[305.00px] w-full left-0 top-0">
          {/* Top row: 95% + 3+ */}
          <div className="absolute h-[148.00px] w-full left-0 top-[-10.00px] flex flex-row justify-center items-start flex-nowrap gap-2">
            {/* 95% */}
            <div className="relative w-[173.00px] flex flex-col justify-start items-center flex-nowrap">
              <div className="relative h-[66.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                <span className="flex justify-center text-center items-center h-[46.00px] w-[77.00px] relative">
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[38.0px] font-normal leading-[45.77px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    95%
                  </span>
                </span>
              </div>
              <div className="relative w-[calc(100%-10px-10px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5">
                <span className="flex justify-center text-center items-center w-[151.00px] relative">
                  <span
                    className="bg-[rgba(109,109,110,0.60)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.02px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    Client satisfaction across multi-service projects
                  </span>
                </span>
              </div>
            </div>

            {/* 3+ */}
            <div className="relative w-[164.00px] flex flex-col justify-start items-center flex-nowrap">
              <div className="relative h-[66.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                <span className="flex justify-center text-center items-center h-[46.00px] w-[46.00px] relative">
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[38.0px] font-normal leading-[45.77px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    3+
                  </span>
                </span>
              </div>
              <div className="relative w-[calc(100%-10px-10px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5">
                <span className="flex justify-center text-center items-center w-[162.00px] relative">
                  <span
                    className="bg-[rgba(109,109,110,0.60)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.51px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    Innovative solutions delivered in UX, marketing, and research
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row: 5L+ + 5K+ */}
          <div className="absolute h-[157.00px] w-full left-0 flex flex-row justify-center items-start flex-nowrap gap-[3px] top-[148.00px]">
            {/* ₹5L+ */}
            <div className="relative w-[173.00px] flex flex-col justify-start items-center flex-nowrap gap-0.5 pt-0 pb-4 px-0">
              <div className="relative h-[66.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 pt-3 pb-2.5 px-2.5">
                <span className="flex justify-center text-center items-center h-[46.00px] w-[87.00px] relative">
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[38.0px] font-normal leading-[45.77px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    ₹5L+
                  </span>
                </span>
              </div>
              <div className="relative flex flex-row justify-center items-start flex-nowrap gap-2.5 pt-[9px] pb-2.5 px-0">
                <span className="flex justify-center text-center items-center w-[162.00px] relative">
                  <span
                    className="bg-[rgba(109,109,110,0.60)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.51px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    Worth of strategic insights provided across industries
                  </span>
                </span>
              </div>
            </div>

            {/* 5K+ */}
            <div className="relative w-[186.00px] flex flex-col justify-start items-center flex-nowrap">
              <div className="relative h-[66.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 pt-3 pb-2.5 px-2.5">
                <span className="flex justify-center text-center items-center h-[46.00px] w-[66.00px] relative">
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[38.0px] font-normal leading-[45.77px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    5K+
                  </span>
                </span>
              </div>
              <div className="relative w-[calc(100%-10px-10px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 pt-[9px] pb-2.5 px-2.5">
                <span className="flex justify-center text-center items-center w-[178.00px] relative">
                  <span
                    className="bg-[rgba(109,109,110,0.60)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.51px]"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    People indirectly reached through digital platforms and client
                    networks
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobStatHighlights;
