export interface PillMilestoneTexts {
  mockupImageSrc?: string;
  heading: string;
  description: string;
  keyAchievementTitle?: string;
  keyAchievementBody: string;
  clientImpactTitle?: string;
  clientImpactBody: string;
  badgeText?: string;
}

export default function PillMilestoneSection({
  mockupImageSrc = "/assets/portfolio/images/image_26.png",
  heading,
  description,
  keyAchievementTitle = "Key Achievement",
  keyAchievementBody,
  clientImpactTitle = "client Impact",
  clientImpactBody,
  badgeText = "Milestone",
}: PillMilestoneTexts) {
  return (
    <div
      className="relative w-full rounded-[23px]"
      style={{ minHeight: 721, background: "rgba(246,247,249,1.00)" }}
    >
      <div
        className="absolute left-[calc(50%-667.00px)] top-[calc(50%-310.50px)] h-[619.50px] w-[610.50px] overflow-hidden rounded-[23.686382293701172px] border-[0.75px] border-solid border-[#c5c6c7ff] bg-white"
      >
        <div className="absolute left-[0.00px] top-[0.00px] h-[601.00px] w-[592.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5">
          <div className="relative h-[601.00px] w-full"></div>
        </div>
        <div
          style={{
            position: "absolute",
            width: 612,
            height: 621,
            left: "calc(50% - 306px)",
            top: "calc(50% - 310.5px)",
            borderRadius: 23.6864,
            overflow: "hidden",
            background: "#FFFFFF",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 10,
              gap: 10,
              position: "absolute",
              width: 612,
              height: 621,
              left: 0,
              top: 0,
            }}
          >
            <div style={{ width: 592, height: 601, flexShrink: 0, alignSelf: "stretch" }} />
          </div>
          <div
            style={{
              position: "absolute",
              width: 288,
              height: 357,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, calc(-50% - 0.5px))",
            }}
          >
            {/* Shadow dots */}
            <div style={{ position: 'absolute', left: '42.5%',  right: '54.21%', top: '45.74%', bottom: '45.93%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '44.07%', right: '38.25%', top: '36.08%', bottom: '36.27%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '33.6%',  right: '60.63%', top: '39.57%', bottom: '39.8%',  background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '38.06%', right: '57.43%', top: '42.66%', bottom: '42.88%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '66.11%', right: '25.33%', top: '34.65%', bottom: '34.85%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '25.49%', right: '51.18%', top: '25.9%',  bottom: '34.87%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '34.63%', right: '34.46%', top: '65.66%', bottom: '25.87%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            <div style={{ position: 'absolute', left: '51.39%', right: '34.49%', top: '25.87%', bottom: '65.85%', background: '#0161FE', border: '0.368668px solid #0161FE' }} />
            {/* Group 13 — logo centered */}
            <div style={{ position: 'absolute', width: 288, height: 288, left: 'calc(50% - 144px)', top: 'calc(50% - 144px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={mockupImageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[730.00px] top-[120.00px] h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
        <span className="flex h-[90.00px] w-[550.00px] justify-start items-center text-left relative">
          <span className="text-[36.0px] font-normal leading-[45.00px] bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic">
            {heading}
          </span>
        </span>
      </div>

      <div
        className="absolute left-[730.00px] top-[243.00px] h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
        style={{ transform: "translateY(0px)" }}
      >
        <span className="flex h-[90.00px] w-[549.00px] justify-start items-center text-left relative">
          <span className="text-[20.0px] font-normal leading-[30.00px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic">
            {description}
          </span>
        </span>
      </div>

      <div className="absolute left-[740.00px] top-[388.00px] h-[236.00px] w-[300.00px]">
        <div className="absolute left-[0.00px] top-[0.00px] h-[236.00px] w-[297.00px]">
          <div
            className="absolute left-[0.00px] top-[0.00px] h-[calc(100%+-0.00px)] w-[calc(100%+3.00px)] rounded-[24.43000030517578px] bg-white"
            style={{ transform: "translateY(4px)" }}
          >
            <div className="absolute left-[23.00px] top-[144.00px] h-[66.00px] w-[266.00px]">
              <span className="absolute left-[calc(50%-133.00px)] top-[0.00px] flex h-[66.00px] w-[266.00px] justify-start items-center text-left">
                <span className="text-[14.0px] font-normal leading-[24.00px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic">
                  {keyAchievementBody}
                </span>
              </span>
            </div>

            <div className="absolute left-[23.00px] top-[105.00px] h-[29.00px] w-[150.00px]">
              <span className="absolute left-[calc(50%-75.00px)] top-[0.00px] flex h-[29.00px] w-[146.00px] justify-center items-center text-center">
                <span className="whitespace-nowrap text-[22.0px] font-normal leading-[28.50px] tracking-[-1.0px] capitalize bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic">
                  {keyAchievementTitle}
                </span>
              </span>
            </div>

            <div className="absolute left-[calc(50%-126.00px)] top-[calc(50%-93.00px)] h-[52.00px] w-[52.00px]">
              <img src="/assets/portfolio/images/milestone_new_icon.svg" alt="" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[1075.00px] top-[388.00px] h-[236.00px] w-[300.00px]">
        <div
          className="absolute left-[0.00px] top-[0.00px] h-[calc(100%+-0.00px)] w-[calc(100%+-0.00px)] rounded-[24.43000030517578px] bg-white"
          style={{ transform: "translateY(4px)" }}
        >
          <div className="absolute left-[23.00px] top-[144.00px] h-[66.00px] w-[266.00px]">
            <span className="absolute left-[calc(50%-133.00px)] top-[0.00px] flex h-[66.00px] w-[266.00px] justify-start items-center text-left">
              <span className="text-[14.0px] font-normal leading-[24.00px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic">
                {clientImpactBody}
              </span>
            </span>
          </div>

          <div className="absolute left-[23.00px] top-[105.00px] h-[29.00px] w-[183.00px]">
            <span className="absolute left-[calc(50%-90.50px)] top-[0.00px] flex h-[29.00px] w-[192.00px] justify-start items-center text-left">
              <span className="whitespace-nowrap text-[22.0px] font-normal leading-[28.50px] capitalize bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic">
                {clientImpactTitle}
              </span>
            </span>
          </div>

          <div className="absolute left-[calc(50%-126.00px)] top-[calc(50%-93.00px)] h-[52.00px] w-[52.00px]">
            <img src="/assets/p1/images/client_impact_icon.svg" alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>

      <div className="absolute left-[740.00px] top-[50.00px] h-[38.06px] flex flex-col justify-center items-center flex-nowrap gap-2.5 rounded-[236.84442138671875px] border-[0.9695612788200378px] border-solid border-[#202833ff] px-[9px] py-0 whitespace-nowrap">
        <div className="relative h-[20.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
          <span className="flex h-[20.00px] justify-center items-center relative">
            <span className="whitespace-nowrap text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719525814056396px] uppercase bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic">
              {badgeText}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
