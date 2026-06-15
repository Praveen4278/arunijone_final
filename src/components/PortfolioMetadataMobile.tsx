import React from "react";

interface Props {
  assetBasePath: string;
  nameCorp?: string;
  duration?: string;
  releaseDate?: string;
  workAs?: string;
  siteView?: string;
  siteViewColor?: string;
}

const PortfolioMetadataMobile = ({
  assetBasePath,
  nameCorp = "Prodtege Digitech",
  duration = "3 Months",
  releaseDate = "Jannuary 1, 2026",
  workAs = "UX Researcher",
  siteView = "myrameswaramtrip.com",
  siteViewColor = "rgba(17,17,17,1.00)",
}: Props) => {
  return (
    <div className="relative h-[469.07px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-5">
      {/* Name Corp */}
      <div className="relative h-[57.02px] flex flex-col justify-start items-start flex-nowrap gap-2">
        <div className="relative h-[23.88px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[23.00px] w-[76.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[22.88px]">
              Name Corp
            </span>
          </span>
        </div>
        <div className="relative h-[24.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[24.00px] w-[135.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[23.81px]">
              {nameCorp}
            </span>
          </span>
        </div>
      </div>

      {/* Project Duration */}
      <div className="relative h-[60.02px] flex flex-col justify-start items-start flex-nowrap gap-2">
        <div className="relative h-[23.88px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[23.00px] w-[105.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[22.88px]">
              Project Duration
            </span>
          </span>
        </div>
        <div className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[27.00px] w-[72.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[26.70px]">
              {duration}
            </span>
          </span>
        </div>
      </div>

      {/* Release Date */}
      <div className="relative h-[60.01px] flex flex-col justify-start items-start flex-nowrap gap-2">
        <div className="relative h-[23.88px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[23.00px] w-[86.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[22.88px]">
              Release Date
            </span>
          </span>
        </div>
        <div className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[27.00px] w-[131.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[26.70px]">
              {releaseDate}
            </span>
          </span>
        </div>
      </div>

      {/* Work As */}
      <div className="relative h-[60.01px] flex flex-col justify-start items-start flex-nowrap gap-2">
        <div className="relative h-[23.88px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[23.00px] w-[55.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[22.88px]">
              Work As
            </span>
          </span>
        </div>
        <div className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[27.00px] w-[113.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[26.70px]">
              {workAs}
            </span>
          </span>
        </div>
      </div>

      {/* Site View */}
      <div className="relative h-[60.01px] flex flex-col justify-start items-start flex-nowrap gap-2">
        <div className="relative h-[23.88px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[23.00px] w-[60.00px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[22.88px]">
              Site View
            </span>
          </span>
        </div>
        <div className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap">
          <span className="flex justify-center text-center items-center h-[27.00px] w-[181.00px] relative">
            <span
              className="whitespace-nowrap bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[26.70px]"
              style={{ color: siteViewColor }}
            >
              {siteView}
            </span>
          </span>
        </div>
      </div>

      {/* Work By */}
      <div className="relative h-[72.00px] w-[184.00px] flex flex-col justify-start items-start flex-nowrap gap-3">
        <div className="relative w-[calc(100%-0px-0px)] flex flex-row justify-center items-center flex-nowrap gap-2.5">
          <span className="flex justify-center text-center items-center h-[16.50px] relative">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[16.0px] font-light leading-[20.41px]">
              Work By
            </span>
          </span>
        </div>
        <div className="absolute h-[43.72px] w-[97.44px] left-[calc(50%-48.50px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 top-[28.50px]">
          {/* First avatar */}
          <div className="relative h-[23.72px] w-[23.72px] flex flex-row justify-start items-center flex-nowrap gap-2.5 p-2.5">
            <div className="absolute h-[43.72px] w-[43.72px] left-[0.00px] top-[0.00px]">
              <img
                src={`${assetBasePath}/vector.svg`}
                alt="Vector"
                className="absolute"
              />
              <div className="absolute overflow-hidden h-[24.00px] w-[24.00px] left-[10.00px] top-[9.86px]">
                <img
                  src={`${assetBasePath}/group_1.svg`}
                  alt="Group"
                  className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.17)]"
                />
              </div>
            </div>
          </div>
          {/* Second avatar */}
          <div className="relative h-[43.72px] w-[43.72px]">
            <img
              src={`${assetBasePath}/vector_1.svg`}
              alt="Vector"
              className="absolute"
            />
            <div className="absolute overflow-hidden h-[24.00px] w-[24.00px] left-[10.00px] top-[9.86px]">
              <img
                src={`${assetBasePath}/group_2.svg`}
                alt="Group"
                className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.17)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMetadataMobile;
