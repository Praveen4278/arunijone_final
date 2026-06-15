import React from "react";


interface ServiceCategoriesSectionProps {
  badgeLabel?: string;
}

const ServiceCategoriesSection = ({
  badgeLabel = "Project Category",
}: ServiceCategoriesSectionProps) => {
  return (
    <div
      id="service-categories-section"
      className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[503.00px] w-full rounded-[20.41314125061035px]"
    >
      <div
        id="service-categories-border"
        className="absolute h-[36.50px] w-fit px-[20px] left-[50%] -translate-x-1/2 top-[calc(50%-202.50px)] rounded-[204.1089324951172px] border-[#202833ff] border-solid border-[0.750207245349884px] flex items-center justify-center"
      >
        <span className="flex justify-center text-center items-center">
          <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[18.00px] tracking-[1.7862435579299927px] uppercase">
            {badgeLabel}
          </span>
        </span>
      </div>

      <span className="flex justify-center text-center items-center h-[72.00px] w-[466.00px] absolute left-[calc(50%-232.45px)] top-[118.00px]">
        <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[42.00px] text-center">
          Explore My Core Service Categories
        </span>
      </span>

      <div
        id="service-categories-cards"
        className="absolute h-[213.20px] w-[1336.32px] flex flex-row justify-start items-center flex-nowrap gap-3.5 left-[42.00px] top-[240.00px]"
      >
        {/* UX/UI */}
        <div className="relative bg-[rgba(1,97,254,1.00)] h-[212.20px] w-[322.57px] rounded-[20.41314125061035px] border-[rgba(142,131,131,0.35)] border-solid border-[0.5px]">
          <div className="absolute h-[38.10px] w-[38.10px] left-[calc(50%-19.04px)] top-[calc(50%-62.38px)]">
            <img
              src="/assets/Home/images/vector_5.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.01)]"
            />
            <img
              src="/assets/Home/images/vector_6.svg"
              alt="Vector"
              className="absolute left-[calc(50%-8.24px)] top-[calc(50%-8.50px)]"
            />
          </div>
          <span className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] absolute left-[calc(50%-33.39px)] top-[108.02px]">
            <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize">
              UX/UI
            </span>
          </span>
          <span className="flex justify-center text-center items-center h-[39.00px] w-[236.00px] absolute left-[calc(50%-118.23px)] top-[139.90px]">
            <span className="bg-[rgba(255,255,255,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">
              Designing intuitive experiences that elevate your brand.
            </span>
          </span>
        </div>

        {/* Digital Marketing */}
        <div className="relative bg-white h-[212.20px] w-[322.59px] rounded-[20.41314125061035px] border-[rgba(142,131,131,0.35)] border-solid border-[0.5px]">
          <div className="absolute h-[38.10px] w-[38.10px] left-[calc(50%-19.05px)] top-[calc(50%-62.59px)]">
            <img
              src="/assets/Home/images/vector_7.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.01)]"
            />
            <div className="absolute h-[14.58px] w-[14.48px] left-[11.64px] top-[11.75px]">
              <img src="/assets/Home/images/vector_8.svg" alt="Vector" className="absolute left-[calc(100%_*_0.84)] top-[calc(100%_*_0.58)]" />
              <img src="/assets/Home/images/vector_9.svg" alt="Vector" className="absolute top-[calc(100%_*_0.26)]" />
              <img src="/assets/Home/images/vector_10.svg" alt="Vector" className="absolute left-[calc(100%_*_0.28)]" />
            </div>
          </div>
          <span className="flex justify-center text-center items-center h-[20.00px] w-[128.00px] absolute left-[calc(50%-63.81px)] top-[107.90px]">
            <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize">
              Digital Marketing
            </span>
          </span>
          <span className="flex justify-center text-center items-center h-[44.00px] w-[258.00px] absolute left-[calc(50%-128.81px)] top-[139.77px]">
            <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">
              Building smart campaigns that connect you with customers.
            </span>
          </span>
        </div>

        {/* Equity Research Analysis */}
        <div className="relative bg-white h-[212.20px] w-[322.57px] rounded-[20.41314125061035px] border-[rgba(142,131,131,0.35)] border-solid border-[0.5px]">
          <div className="absolute h-[38.10px] w-[38.10px] left-[calc(50%-18.59px)] top-[calc(50%-62.59px)]">
            <div className="absolute h-[98.91%] w-[98.91%] top-[calc(100%_*_0.01)]">
              <img src="/assets/Home/images/vector_11.svg" alt="Vector" className="absolute" />
              <img src="/assets/Home/images/vector_12.svg" alt="Vector" className="absolute left-[calc(100%_*_0.28)] top-[calc(100%_*_0.67)]" />
              <img src="/assets/Home/images/vector_13.svg" alt="Vector" className="absolute left-[calc(100%_*_0.45)] top-[calc(100%_*_0.30)]" />
              <img src="/assets/Home/images/vector_14.svg" alt="Vector" className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.42)]" />
              <img src="/assets/Home/images/vector_15.svg" alt="Vector" className="absolute left-[calc(100%_*_0.60)] top-[calc(100%_*_0.52)]" />
            </div>
          </div>
          <span className="flex justify-center text-center items-center h-[20.00px] w-[188.00px] absolute left-[calc(50%-94.39px)] top-[107.90px]">
            <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize">
              Equity Research Analysis
            </span>
          </span>
          <span className="flex justify-center text-center items-center h-[39.00px] w-[231.00px] absolute left-[calc(50%-115.39px)] top-[142.77px]">
            <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">
              Delivering data-driven insights to strengthen decisions.
            </span>
          </span>
        </div>

        {/* Full-Stack Development */}
        <div className="relative bg-white h-[212.20px] w-[322.59px] rounded-[20.41314125061035px] border-[rgba(142,131,131,0.35)] border-solid border-[0.5px]">
          <div className="absolute h-[38.10px] w-[38.10px] left-[calc(50%-19.05px)] top-[calc(50%-62.59px)]">
            <div className="absolute h-[37.68px] w-[37.68px] left-[0.38px] top-[0.34px]">
              <img src="/assets/Home/images/vector_16.svg" alt="Vector" className="absolute" />
              <img src="/assets/Home/images/vector_17.svg" alt="Vector" className="absolute left-[calc(100%_*_0.26)] top-[calc(100%_*_0.28)]" />
            </div>
          </div>
          <span className="flex justify-center text-center items-center h-[20.00px] w-[198.00px] absolute left-[calc(50%-98.77px)] top-[107.90px]">
            <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize">
              Full-Stack Developement
            </span>
          </span>
          <span className="flex justify-center text-center items-center h-[43.00px] w-[254.00px] absolute left-[calc(50%-126.77px)] top-[142.77px]">
            <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">
              Creating reliable systems that support your business growth.
            </span>
          </span>
          <img
            src="/assets/Home/images/team.png"
            alt="Team"
            className="absolute h-[28.00px] w-[62.00px] left-[calc(55%-31px+100.03px)] top-[15.77px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoriesSection;
