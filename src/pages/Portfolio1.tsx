import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";

const DESIGN_HEIGHT = 10220;

type CoreTab = "Research" | "Design" | "Development" | "Creative" | "Marketing";
type RelatedTab = "Overview" | "Website" | "Mobile App";
type PartnerTab = "Pandit Partner" | "Travel Partner" | "Stay Partner";

const CORE_TABS: CoreTab[] = ["Research", "Design", "Development", "Creative", "Marketing"];
const RELATED_TABS: RelatedTab[] = ["Overview", "Website", "Mobile App"];
const PARTNER_TABS: PartnerTab[] = ["Pandit Partner", "Travel Partner", "Stay Partner"];

const PillButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`h-[78px] min-w-[198px] rounded-[24px] border-0 px-[28px] flex items-center justify-center gap-[22px] text-[18px] leading-[24px] transition-colors ${
      active ? "bg-[#0161FE] text-white" : "bg-white text-[#0161FE]"
    }`}
  >
    <span
      className={`h-[43px] w-[43px] rounded-full flex items-center justify-center ${
        active ? "bg-white/20" : "bg-[#0161FE]"
      }`}
    >
      <img src="/assets/portfolio/images/vector_3.png" alt="" className="h-[20px] w-[20px]" />
    </span>
    <span className="whitespace-nowrap">{label}</span>
  </button>
);

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto h-[38px] w-fit rounded-full border border-[#202833] px-[24px] flex items-center justify-center">
    <span className="text-[#202833] text-[14px] font-medium uppercase tracking-[2.1px]">{children}</span>
  </div>
);

const ResearchCaseStudy = () => (
  <div className="h-[3203px] w-full bg-white rounded-[24px] px-[82px] py-[58px]">
    <div className="flex justify-between items-start">
      <div>
        <SectionBadge>Case Studies</SectionBadge>
        <h2 className="mt-[32px] text-[#111] text-[40px] leading-[44px] font-normal">
          Real Results. Real Impact.
          <br />
          Our Success Stories.
        </h2>
      </div>
      <p className="mt-[48px] w-[426px] text-[#858585] text-[18px] leading-[28px]">
        Discover how our solutions have delivered real results, solved complex challenges, and accelerated business growth.
      </p>
    </div>

    <div className="mt-[82px] mx-auto h-[2770px] w-[822px] rounded-[24px] bg-[#f6f7f9] px-[68px] py-[58px]">
      <div className="mx-auto mb-[48px] h-[360px] w-full overflow-hidden rounded-[18px] bg-white">
        <img src="/assets/portfolio/images/gemini_logo_removed_1.png" alt="" className="h-full w-full object-cover" />
      </div>
      <h3 className="text-center text-[#111] text-[30px] leading-[36px] font-semibold">Executive Summary</h3>
      <div className="mt-[34px] border-t border-[#9b9b9b]" />
      <h4 className="mt-[34px] text-[#111] text-[22px] leading-[30px] font-semibold">Overview of the Project</h4>
      <p className="mt-[26px] text-[#7d7d7d] text-[18px] leading-[30px]">
        MyRameswaramTrip is a region-focused digital platform designed to simplify and enhance pilgrimage and travel experiences in Rameswaram, Tamil Nadu. The ecosystem consists of four tightly connected products:
      </p>
      <ul className="mt-[24px] ml-[26px] space-y-[16px] text-[#7d7d7d] text-[18px] leading-[30px] list-disc">
        <li>A public website for devotees and travelers to book pujas, rituals, attractions, accommodations, and combo packages</li>
        <li>A Pandit Partner App that empowers temple priests to manage puja bookings, pricing, earnings, and direct communication with devotees</li>
        <li>A Travel Partner App that enables local drivers and travel agencies to manage trips, pricing, schedules, and traveler coordination</li>
        <li>A centralized Admin Dashboard to control partners, bookings, inventory, payments, communication, and system operations</li>
      </ul>
      <p className="mt-[28px] text-[#7d7d7d] text-[18px] leading-[30px]">
        The platform focuses on trust, transparency, and cultural sensitivity, ensuring that spiritual services are delivered respectfully while using modern digital tools to reduce friction for all stakeholders.
      </p>
      <h4 className="mt-[40px] text-[#111] text-[22px] leading-[30px] font-semibold">Research Purpose</h4>
      <p className="mt-[18px] text-[#7d7d7d] text-[18px] leading-[30px]">The purpose of this UX research is to:</p>
      <ul className="mt-[18px] ml-[26px] space-y-[13px] text-[#7d7d7d] text-[18px] leading-[30px] list-disc">
        <li>Understand the needs, behaviors, and pain points of key user groups: devotees and travelers, pandits, travel partners, and admin and operations teams</li>
        <li>Evaluate how effectively the current platform supports puja and ritual booking, travel and attraction management, partner autonomy and trust, and administrative efficiency</li>
        <li>Identify usability gaps, workflow issues, and emotional concerns, especially in spiritual and culturally sensitive contexts</li>
        <li>Provide actionable insights to improve puja and ritual booking, operational efficiency, platform adoption, and long-term trust</li>
      </ul>
      <h4 className="mt-[40px] text-[#111] text-[22px] leading-[30px] font-semibold">Key Insights</h4>
      <ul className="mt-[18px] ml-[26px] space-y-[13px] text-[#7d7d7d] text-[18px] leading-[30px] list-disc">
        <li>Trust and spiritual dignity are critical for pandits. Direct payment receipt, pricing control, and personal communication significantly increase acceptance of the platform.</li>
        <li>Partners value autonomy over automation. Both pandits and travel partners prefer flexible pricing and booking acceptance control rather than forced availability.</li>
        <li>Clear dashboards reduce dependency on manual coordination. Simple booking cards, earnings summaries, and status indicators reduce the need for admin calls and WhatsApp follow-ups.</li>
        <li>Admin users face high cognitive load due to the scale and complexity of data across bookings, partners, finances, and communications, requiring better prioritization and visibility.</li>
        <li>Users trust verified labels and transparency more than discounts or promotions, especially for religious services.</li>
        <li>Some features marked coming soon create expectation gaps, leading to uncertainty among users about service availability.</li>
      </ul>
      <h4 className="mt-[40px] text-[#111] text-[22px] leading-[30px] font-semibold">High-Level Recommendations</h4>
      <ul className="mt-[18px] ml-[26px] space-y-[13px] text-[#7d7d7d] text-[18px] leading-[30px] list-disc">
        <li>Strengthen clarity and consistency across platforms by aligning terminology, booking status labels, and pricing logic between website, partner apps, and admin dashboard.</li>
        <li>Improve onboarding and guidance with simple onboarding flows for pandits and travel partners with visual explanations instead of text-heavy instructions.</li>
        <li>Enhance admin usability by introducing role-based dashboards with prioritized KPIs to reduce information overload.</li>
        <li>Reinforce trust signals by highlighting verification, completed services, and real partner profiles more prominently on the website.</li>
        <li>Progressively release coming soon features with clear timelines or phased rollouts to manage user expectations.</li>
        <li>Preserve spiritual UX principles by avoiding aggressive monetization patterns and maintaining a service-first, respectful experience.</li>
      </ul>
    </div>
  </div>
);

const MockupText = () => (
  <p className="w-[340px] text-center text-[#111] text-[28px] leading-[36px]">
    Explore available pujas for your
    <br />
    spiritual needs
  </p>
);

const PhoneFrame = ({
  image,
  className = "",
  imageFit = "cover",
  large = false,
}: {
  image: string;
  className?: string;
  imageFit?: "cover" | "contain";
  large?: boolean;
}) => (
  <div
    className={`relative ${large ? "h-[409.89px] w-[201px] rounded-[38px] border-[8px]" : "h-[258px] w-[126px] rounded-[24px] border-[5px]"} border-[#111] bg-white shadow-sm overflow-hidden ${className}`}
  >
    <div className={`absolute ${large ? "left-[67px] top-[13px] h-[17px] w-[67px]" : "left-[42px] top-[8px] h-[11px] w-[42px]"} rounded-full bg-[#111] z-10`} />
    <img src={image} alt="" className={`h-full w-full object-${imageFit}`} />
  </div>
);

const TabletPhoneMockup = ({
  image,
  phoneImage = "/assets/p2/images/screencapturemyrameswaramtrippujas2026011915_20_38_5.png",
  dim = false,
}: {
  image: string;
  phoneImage?: string;
  dim?: boolean;
}) => (
  <div className="relative h-[399.67px] w-[521.74px]">
    <div className="absolute left-0 top-[26.99px] h-[337.56px] w-[473.41px] rounded-[18px] border-[13px] border-[#111] bg-white overflow-hidden shadow-sm">
      <img src={image} alt="" className={`h-full w-full object-cover ${dim ? "brightness-50" : ""}`} />
    </div>
    <PhoneFrame image={phoneImage} className="absolute right-0 top-[118.75px] scale-[1.35] origin-top-right" imageFit="cover" />
  </div>
);

const WebsiteMockupRow = ({
  image,
  reverse = false,
  dim = false,
}: {
  image: string;
  reverse?: boolean;
  dim?: boolean;
}) => (
  <div className={`flex items-center ${reverse ? "justify-end" : "justify-start"} gap-[210px]`}>
    {reverse ? (
      <>
        <MockupText />
        <TabletPhoneMockup image={image} dim={dim} />
      </>
    ) : (
      <>
        <TabletPhoneMockup image={image} dim={dim} />
        <MockupText />
      </>
    )}
  </div>
);

const MobileMockupRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => (
  <div className={`flex items-center ${reverse ? "justify-end" : "justify-start"} gap-[128px]`}>
    {reverse ? (
      <>
        <MockupText />
        <div className="flex items-center gap-[42px]">
          {images.map((image) => (
            <PhoneFrame key={image} image={image} imageFit="contain" large />
          ))}
        </div>
      </>
    ) : (
      <>
        <div className="flex items-center gap-[42px]">
          {images.map((image) => (
            <PhoneFrame key={image} image={image} imageFit="contain" large />
          ))}
        </div>
        <MockupText />
      </>
    )}
  </div>
);

const WebsiteShowcase = () => {
  const rows = [
    { image: "/assets/p2/images/screencapturemyrameswaramtrippujas2026011915_20_38_5.png", reverse: false },
    { image: "/assets/p2/images/screencapturemyrameswaramtripbookings2026011916_19_25_2.png", reverse: true, dim: true },
    { image: "/assets/p2/images/screencapturemyrameswaramtripbookings2026011916_23_30_1.png", reverse: false },
    { image: "/assets/p2/images/screencapturemrtstorageinsouth1objectstoree2enetworksnetinvoices20260119invoicepujaaa2e60ac90gfzruopdf2026011916_25_32_1.png", reverse: true },
    { image: "/assets/p2/images/screencaptureapicashfreecheckout2026011916_16_39_2.png", reverse: false },
    { image: "/assets/p2/images/screencapturemyrameswaramtrippujas2026011915_20_38_5.png", reverse: true },
    { image: "/assets/p2/images/screencapturemyrameswaramtripbookings2026011916_19_25_2.png", reverse: false, dim: true },
    { image: "/assets/p2/images/screencapturemyrameswaramtripbookings2026011916_23_30_1.png", reverse: true },
    { image: "/assets/p2/images/screencapturemrtstorageinsouth1objectstoree2enetworksnetinvoices20260119invoicepujaaa2e60ac90gfzruopdf2026011916_25_32_1.png", reverse: false },
    { image: "/assets/p2/images/screencaptureapicashfreecheckout2026011916_16_39_2.png", reverse: true },
  ];

  return (
    <div className="mx-auto mt-[50px] h-[4800px] w-[1337px] bg-white rounded-[24px] px-[72px] py-[56px]">
      <div className="mx-auto w-full flex flex-col gap-[76px]">
        {rows.map((row, index) => (
          <WebsiteMockupRow key={`${row.image}-${index}`} {...row} />
        ))}
      </div>
    </div>
  );
};

const MobileAppShowcase = () => {
  const rows = [
    { images: ["/assets/p2/images/hero_mobile.png"], reverse: false },
    { images: ["/assets/p2/images/macbook_air_15_inch.png", "/assets/p2/images/macbook_air_15_inch_1.png"], reverse: true },
    { images: ["/assets/p2/images/screencapturemyrameswaramtrippujas2026011915_20_38_5.png"], reverse: false },
    { images: ["/assets/p2/images/macbook_air_15_inch_1.png", "/assets/p2/images/macbook_air_15_inch_2.png"], reverse: true },
    { images: ["/assets/p2/images/macbook_air_15_inch.png", "/assets/p2/images/macbook_air_15_inch_2.png"], reverse: false },
  ];

  return (
    <div className="mx-auto mt-[50px] h-[2370px] w-[1337px] bg-white rounded-[24px] px-[72px] py-[54px]">
      <div className="mx-auto w-full flex flex-col gap-[74px]">
        {rows.map((row, index) => (
          <MobileMockupRow key={`${row.images.join("-")}-${index}`} {...row} />
        ))}
      </div>
    </div>
  );
};

const ProjectRegionSection = () => (
  <section className="relative w-[1416px] h-[1179px] overflow-hidden rounded-[24px]">
    <div className="pt-[50px] text-center">
      <SectionBadge>Project Region</SectionBadge>
      <h2 className="mx-auto mt-[30px] w-[530px] text-[36px] font-normal leading-[45px] text-[#111]">
        Solutions built for businesses across regions.
      </h2>
    </div>
    <img
      src="/assets/about/images/group_2.svg"
      alt="Project region map"
      className="absolute left-[41px] top-[218px] h-[879px] w-[1334px]"
    />
  </section>
);

const RelatedContent = ({ active }: { active: RelatedTab }) => {
  if (active === "Website") {
    return <WebsiteShowcase />;
  }

  if (active === "Mobile App") {
    return (
      <>
        <div className="mt-[42px] bg-[#F6F7F9] rounded-[24px] h-[366px] w-[1420.5px] flex flex-col items-center justify-center">
          <SectionBadge>Partners App</SectionBadge>
          <h3 className="mt-[30px] text-center text-[#111] text-[32px] leading-[40px] font-normal">
            Related Work Across
            <br />
            My Core Services
          </h3>
          <div className="mt-[38px] flex items-center justify-center gap-[20px]">
            {PARTNER_TABS.map((tab, index) => (
              <PillButton key={tab} label={tab} active={index === 2} onClick={() => {}} />
            ))}
          </div>
        </div>
        <MobileAppShowcase />
      </>
    );
  }

  if (active === "Overview") {
    return <ProjectRegionSection />;
  }

  return null;
};

const PortfolioCoreSwitch = () => {
  const [coreTab, setCoreTab] = useState<CoreTab>("Design");
  const [relatedTab, setRelatedTab] = useState<RelatedTab>("Website");

  return (
    <div className="relative w-full flex flex-col gap-[38px]">
      <section className="bg-[#F6F7F9] rounded-[24px] h-[366px] flex flex-col items-center justify-center">
        <SectionBadge>Our View</SectionBadge>
        <h2 className="mt-[34px] text-center text-[#111] text-[36px] leading-[42px] font-normal">
          Explore My Core Service
          <br />
          Categories
        </h2>
        <div className="mt-[38px] flex items-center justify-center gap-[20px]">
          {CORE_TABS.map((tab) => (
            <PillButton key={tab} label={tab} active={coreTab === tab} onClick={() => setCoreTab(tab)} />
          ))}
        </div>
      </section>

      {coreTab === "Research" && <ResearchCaseStudy />}

      {coreTab === "Design" && (
        <>
          <section className="bg-[#F6F7F9] rounded-[24px] h-[366px] px-[40px] py-[50px] flex flex-col items-center">
            <SectionBadge>Related Works</SectionBadge>
            <h2 className="mt-[34px] text-center text-[#111] text-[36px] leading-[42px] font-normal">
              Related Work Across
              <br />
              My Core Services
            </h2>
            <div className="mt-[38px] flex items-center justify-center gap-[20px]">
              {RELATED_TABS.map((tab) => (
                <PillButton key={tab} label={tab} active={relatedTab === tab} onClick={() => setRelatedTab(tab)} />
              ))}
            </div>
          </section>
          <RelatedContent active={relatedTab} />
        </>
      )}

      {coreTab !== "Research" && coreTab !== "Design" && (
        <section className="bg-white rounded-[24px] border border-[#e3e5e8] px-[60px] py-[48px] text-center">
          <h3 className="text-[#111] text-[30px] leading-[38px] font-normal">{coreTab}</h3>
          <p className="mt-[16px] mx-auto max-w-[760px] text-[#7d7d7d] text-[18px] leading-[28px]">
            This section is ready for {coreTab.toLowerCase()} related portfolio content.
          </p>
        </section>
      )}
    </div>
  );
};

const Portfolio1UXUIUIDesignWebsite = () => {
  const navigate = useNavigate();

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
          <Navbar activePage="home" />

          <div
            id="_231_4683__Frame_1171277014"
            className="absolute w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          >
            <div
              id="_231_4684__Section"
              className="relative overflow-hidden bg-[#F6F7F9] h-[926.00px] w-full rounded-[20.41314125061035px]"
            >
              {/* Heading */}
              <span
                id="_231_4685__Heading_1___Operatio"
                className="absolute flex justify-center text-center items-center h-[49.00px] w-[1329.00px] left-[calc(50%-664.00px)] top-[45.00px]"
              >
                <span className="whitespace-nowrap text-[#111111] text-[40.811283111572266px] font-normal leading-[47px] not-italic">
                  My Rameswaram Trip – Travel &amp; Temple Service Platform
                </span>
              </span>

              {/* Metadata Row — Frame 233 */}
              <PortfolioMetadata />

              {/* Image Box */}
              <div
                id="_231_4687__Image_Box"
                className="absolute overflow-hidden h-[67.49%] w-[1331.00px] left-[calc(50%-665.00px)] top-[27.65%] rounded-[20.41314125061035px]"
              >
                <div
                  id="_231_4688__67bdaa31ce4ff0b778ed"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[627.50px] w-[1335.11px] left-[0.00px] top-[0.00px]"
                  style={{ filter: "blur(0.0px)" }}
                >
                  <div
                    id="_231_4689__Gemini_Logo_Removed_"
                    className="absolute h-[628.00px] w-[1335.00px] left-[0.00px] top-[0.00px]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <PortfolioCoreSwitch />

            <div
              id="_231_4752__Frame_9"

              style={{transform:"translateY(-1px)"}}  
              className="relative bg-[rgba(246,247,249,1.00)] h-[721.00px] w-full rounded-[23px]"
            >
              <div
                id="_231_4753__Container"
                className="absolute overflow-hidden bg-white h-[619.50px] w-[610.50px] left-[calc(50%-667.00px)] top-[calc(50%-310.50px)] rounded-[23.686382293701172px] border-[#c5c6c7ff] border-solid border-[0.75px]"
              >
                <div
                  id="_231_4754__Frame_103"
                  className="absolute h-[601.00px] w-[592.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5 left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4755__Image_Paste_Frame"
                    className="relative h-[601.00px] w-full"
                  ></div>
                </div>

                <div
                  id="_231_4756__Image_Box"
                  className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[621.00px] w-[612.00px] left-[calc(50%-306.00px)] top-[calc(50%-310.50px)] rounded-[23.686382293701172px]"
                >
                  <div
                    id="_231_4757__Frame_103"
                    className="absolute h-[417.00px] w-[641.00px] left-[calc(50%-331.00px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5 top-[0.00px]"
                  >
                    <div
                      id="_231_4758__Frame_104"
                      className="relative h-[417.00px] w-full"
                    ></div>
                  </div>

                  <div
                    id="_231_4759__67ac895b30cafb42cfac"
                    className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,253,254,1.00)0%,rgba(254,253,254,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.00)]"
                  >
                    <div
                      id="_231_4760__Frame_102"
                      className="absolute h-[305.00px] w-[278.00px] top-[calc(50%-0.23px)] flex flex-col justify-start items-start flex-nowrap gap-4 px-2.5 py-[3px] right-[0.41px]"
                    >
                      <div
                        id="_231_4761__Frame_107"
                        className="relative h-[231.00px] w-[calc(100%-52px-94px)] flex flex-col justify-center items-center flex-nowrap gap-2.5 pl-[52px] pr-[94px] py-[31px]"
                      >
                        <div
                          id="_231_4762__image_49"
                          className="absolute h-[187.00px] w-[209.00px] left-[calc(50%-104.00px)] top-[calc(50%-93.50px)]"
                          style={{
                            background:
                              "url(/assets/portfolio/images/image_49.png) 100% / cover no-repeat",
                          }}
                        ></div>
                      </div>
                    </div>

                    <img
                      id="_231_4763__Line_3"
                      src="/assets/portfolio/images/line_3.svg"
                      alt="Line_3"
                      className="absolute scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] top-[calc(50%-0.23px)] left-[calc(50%+107.59px)]"
                    />
                    <div
                      id="_231_4764__Frame_105"
                      className="absolute h-[235.00px] w-[440.00px] flex flex-col justify-center items-start flex-nowrap gap-2.5 pl-[58px] pr-[94px] py-[31px] left-[9.59px] top-[3.27px]"
                    >
                      <div
                        id="_231_4765__image_25"
                        className="absolute h-[187.00px] w-[152.00px] left-[calc(50%-76.00px)] top-[calc(50%-93.50px)]"
                        style={{
                          background:
                            "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat",
                        }}
                      ></div>
                    </div>

                    <div
                      id="_231_4766__Frame_107"
                      className="absolute h-[225.00px] w-[145.00px] flex flex-col justify-center items-start flex-nowrap gap-2.5 pl-[39px] pr-[94px] py-[31px] left-[9.59px] top-[320.27px]"
                    >
                      <div
                        id="_231_4767__image_42"
                        className="absolute h-[185.00px] w-[186.00px] left-[calc(50%-93.00px)] top-[calc(50%-92.50px)]"
                        style={{
                          background:
                            "url(/assets/portfolio/images/image_42.png) 100% / cover no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_231_4768__Frame_136"
                style={{transform:"translateY(3px)"}}
                className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[120.00px]"
              >
                <span
                  id="_231_4769__Heading_2___Project_"
                  className="flex justify-start text-left items-center h-[90.00px] w-[550.00px] relative"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[45.00px]"
                  >
                    Key milestones and outcomes of the project
                  </span>
                </span>
              </div>

              <div
                id="_231_4770__Frame_137"
                style={{transform:"translateY(0px)"}}
                className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[243.00px]"
              >
                <span
                  id="_231_4771__This_project_improve"
                  className="flex justify-start text-left items-center h-[90.00px] w-[549.00px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px]"
                  >
                    This project improved travel planning for pilgrims and
                    tourists visiting Rameswaram through user research, usability
                    analysis, and clear, intuitive design.
                  </span>
                </span>
              </div>

              <div
                id="_231_4772__Frame_8"
                className="absolute h-[236.00px] w-[300.00px] left-[740.00px] top-[388.00px]"
              >
                <div
                  id="_231_4774__Frame_2"
                  className="absolute h-[236.00px] w-[297.00px] left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4775__Background"
                    style={{transform:"translateY(4px)"}}
                    className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+3.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_231_4776__Frame_3"
                      className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                    >
                      <span
                        id="_231_4777__Improved_information"
                        className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                      >
                        <span
                          className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                        >
                          Improved information clarity and user navigation by
                          structuring content around real user needs and journey
                          flows.
                        </span>
                      </span>
                    </div>

                    <div
                      id="_231_4778__Frame_4"
                      className="absolute h-[29.00px] w-[150.00px] left-[23.00px] top-[105.00px]"
                    >
                      <span
                        id="_231_4779__Key_Achievement"
                        className="flex justify-center text-center items-center h-[29.00px] w-[146.00px] absolute left-[calc(50%-75.00px)] top-[0.00px]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22.0px] font-normal leading-[28.50px] tracking-[-1.0px] capitalize"
                        >
                          Key Achievement
                        </span>
                      </span>
                    </div>

                    <div
                      id="_231_4780__SVG"
                      className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                    >
                      <img
                        id="_231_4793__Vector"
                        src="/assets/portfolio/images/vector_9.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.01)]"
                      />
                      <img
                        id="_231_4794__Vector"
                        src="/assets/portfolio/images/vector_10.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                      />
                      <img
                        id="_231_4795__Vector"
                        src="/assets/portfolio/images/vector_11.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                      />
                      <img
                        id="_231_4796__Vector"
                        src="/assets/portfolio/images/vector_12.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_231_4785__Frame_7"
                className="absolute h-[236.00px] w-[300.00px] left-[1075.00px] top-[388.00px]"
              >
                <div
                  id="_231_4787__Background"
                    style={{transform:"translateY(4px)"}}
                  className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+-0.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4788__Frame_6"
                    className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                  >
                    <span
                      id="_231_4789__The_platform_offers_"
                      className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                    >
                      <span
                        className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                      >
                        The platform offers a smoother, intuitive experience that
                        helps visitors plan trips and access temple services with
                        confidence.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_231_4790__Frame_5"
                    className="absolute h-[29.00px] w-[183.00px] left-[23.00px] top-[105.00px]"
                  >
                    <span
                      id="_231_4791__client_Impact"
                      className="flex justify-start text-left items-center h-[29.00px] w-[192.00px] absolute left-[calc(50%-90.50px)] top-[0.00px]"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22.0px] font-normal leading-[28.50px] capitalize"
                      >
                        client Impact
                      </span>
                    </span>
                  </div>

                  <div
                    id="_231_4792__SVG"
                    className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                  >
                    <img
                      id="_231_4793__Vector"
                      src="/assets/portfolio/images/vector_9.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_231_4794__Vector"
                      src="/assets/portfolio/images/vector_10.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                    />
                    <img
                      id="_231_4795__Vector"
                      src="/assets/portfolio/images/vector_11.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                    />
                    <img
                      id="_231_4796__Vector"
                      src="/assets/portfolio/images/vector_12.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_231_4797__Border"
                style={{transform:"translateY(-1px)"}}
                className="absolute h-[38.06px] w-[116.06px] flex items-center justify-center rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612788200378px] left-[740.00px] top-[50.00px]"
              >
                <div
                  id="_231_4798__Frame_135"
                  className="relative flex h-full w-full items-center justify-center"
                >
                  <span
                    id="_231_4799__Milestone"
                    className="flex h-full w-full items-center justify-center text-center"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719525814056396px] uppercase"
                    >
                      Milestone
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_231_4800__Frame_1171277016"
              className="flex flex-row justify-center items-center flex-nowrap gap-[10px] px-[309px]"
              style={{
                width: "1415px",
                minHeight: "410px",
              }}
            >
              <span
                id="_231_4801__This_project_was_app"
                className="flex justify-center text-center items-center flex-none"
                style={{
                  width: "797px",
                  height: "210px",
                  fontFamily: "'SF Pro Display'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "38px",
                  color: "#111111",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <span>
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic"
                  >
                    This project was approached with a user-first mindset, focusing<br />on the needs of pilgrims and travelers visiting Rameswaram.<br />
                  </span><span
                    className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic"
                  >
                    Through research, journey mapping, and usability testing, the<br />platform was designed to balance travel convenience with the<br />spiritual context of temple services, ensuring clarity,<br />accessibility, and trust at every step.
                  </span>
                </span>
              </span>
            </div>

            {/* FAQ Section — Frame_1171276961 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "50px 42px",
                gap: "10px",
                width: "100%",
                height: "791px",
                background: "#F6F7F9",
                borderRadius: "23px",
                boxSizing: "border-box",
                transform: "translate(-1px,-1px)",
                position: "relative",
              }}
            >
              {/* Group 37 */}
              <div style={{ position: "relative", width: "1335px", height: "691px" }}>
                {/* Frame 196 */}
                <div
                  style={{
                    position: "absolute",
                    width: "1335px",
                    height: "691px",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "40px",
                  }}
                >
                  {/* Frame 195 — FAQ badge + title row */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "30px",
                      width: "1335px",
                    }}
                  >
                    {/* FAQ badge */}
                    <div
                      style={{
                        width: "85px",
                        height: "38px",
                        border: "1px solid #202833",
                        borderRadius: "272.07px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'SF Pro Display'",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "23px",
                          letterSpacing: "2.381px",
                          textTransform: "uppercase",
                          color: "#202833",
                        }}
                      >
                        FAQ
                      </span>
                    </div>

                    {/* Frame 194 — title + View All button */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "1335px",
                        height: "91px",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Title */}
                      <span
                       className="ml-[10px]"
                        style={{
                          fontFamily: "'SF Pro Display'",
                          fontWeight: 400,
                          fontSize: "42px",
                          lineHeight: "45px",
                          color: "#111111",
                          width: "770px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        My Rameswaram Trip – Travel &amp; Temple Service Platform
                      </span>

                      {/* View All button */}
                      <div
                        onClick={() => navigate("/faq")}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "3.587px 23.913px",
                          gap: "8.37px",
                          height: "55px",
                          background: "#0161FE",
                          borderRadius: "101.682px",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter'",
                            fontWeight: 500,
                            fontSize: "14.3518px",
                            lineHeight: "21px",
                            letterSpacing: "-0.071759px",
                            color: "#FFFFFF",
                          }}
                        >
                          View All
                        </span>
                        <img
                          src="/assets/portfolio/images/vector_13.svg"
                          alt="arrow right"
                          style={{ width: "24.4px", height: "24.4px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 36 — accordion rows */}
                  <div
                    style={{
                      position: "absolute",
                      width: "1335px",
                      height: "435px",
                      left: "0px",
                      top: "209px",
                    }}
                  >
                    {/* Overview row (active / blue) + answer box */}
                    <div
                      style={{
                        position: "absolute",
                        width: "1335px",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      {/* Blue pill */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "6px 15px",
                          gap: "628px",
                          width: "1335px",
                          height: "69px",
                          background: "#0161FE",
                          borderRadius: "20px",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'SF Pro Display'",
                              fontWeight: 400,
                              fontSize: "27.2px",
                              lineHeight: "36px",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                            }}
                          >
                            Overview
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'SF Pro Display'",
                              fontWeight: 400,
                              fontSize: "18px",
                              lineHeight: "30px",
                              color: "#FFFFFF",
                              transform:"translate(-2px,2px)"
                            }}
                          >
                            What is the My Rameswaram Trip UX/UI project about?
                          </span>
                        </div>
                      </div>

                      {/* Answer box */}
                      <div
                        style={{
                          position: "absolute",
                          width: "1315px",
                          height: "128px",
                          left: "10px",
                          top: "89px",
                          background: "#FFFFFF",
                          borderRadius: "20px",
                          padding: "22px",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "28px",
                            color: "rgba(109, 109, 110, 0.8)",
                            textTransform: "capitalize",
                            width: "1270px",
                            transform:"translateY(1px)"
                          }}
                        >
                          This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.
                        </span>
                      </div>
                    </div>

                    {/* UX Research Approach row */}
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "6px 15px",
                        gap: "461px",
                        width: "1335px",
                        height: "69px",
                        left: "0px",
                        top: "257px",
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "27.2px",
                            lineHeight: "36px",
                            color: "#000000",
                            textTransform: "capitalize",
                          }}
                        >
                          UX Research Approach
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "rgba(17, 17, 17, 0.6)",
                            transform:"translateX(-1px)"
                          }}
                        >
                          What UX research methods were used in this project?
                        </span>
                      </div>
                    </div>

                    {/* User Problems Identified row */}
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "6px 15px",
                        gap: "446px",
                        width: "1335px",
                        height: "69px",
                        left: "0px",
                        top: "366px",
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "27.2px",
                            lineHeight: "36px",
                            color: "#000000",
                            textTransform: "capitalize",
                          }}
                        >
                          User Problems Identified
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "rgba(17, 17, 17, 0.6)",
                            transform:"translateY(6px)"
                          }}
                        >
                          What key user problems did the research uncover?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_231_4837__Section"
              className="relative overflow-hidden h-[586.00px] w-full rounded-[22.518083572387695px]"
            >
              <span
                id="_231_4838__Heading_1___About_ou"
                className="flex justify-start text-left items-center h-[54.00px] w-[310.00px] absolute left-[42.00px] top-[50.00px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[51.65px]"
                >
                  Our Products
                </span>
              </span>
              <span
                id="_231_4839__At_Arunijone__I_deli"
                className="flex justify-start text-left items-center h-[64.00px] w-[591.00px] absolute left-[791.00px] top-[50.00px]"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                >
                  At Arunijone, I deliver high-impact services and projects
                  focused on UX/UI design, digital marketing, and equity research.
                  Each engagement is driven by strategic thinking, attention to
                  detail, and a commitment to measurable results.
                </span>
              </span>
              <div
                id="_231_4840__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] left-[-124.94px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] top-[164.92px]"
              >
                <div
                  id="_231_4841__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_231_4842__image_26"
                    className="absolute h-[249.00px] w-[202.00px] left-[calc(50%-100.82px)] top-[calc(50%-124.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4843__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[241.59px] top-[164.92px]"
              >
                <div
                  id="_231_4844__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_231_4845__image_10"
                    className="absolute h-[138.00px] w-[196.00px] left-[calc(50%-98.35px)] top-[calc(50%-69.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_10.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4846__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[608.12px] top-[164.92px]"
              >
                <div
                  id="_231_4847__67b5af0cadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <img
                    id="_231_4848__Group_11"
                    src="/assets/portfolio/images/group_11.svg"
                    alt="Group_11"
                    className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.28)]"
                  />
                </div>
              </div>

              <div
                id="_231_4857__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[974.65px] top-[164.92px]"
              >
                <div
                  id="_231_4858__67b5af0a9616f526f030"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_231_4859__image_47"
                    className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-183.92px)] top-[calc(50%-41.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_47.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4860__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[1341.19px] top-[164.92px]"
              >
                <div
                  id="_231_4861__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_231_4862__image_63"
                    className="absolute h-[74.00px] w-[264.00px] left-[calc(50%-131.95px)] top-[calc(50%-37.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_63.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
      </DesktopPageWrapper>

      {/* ====== MOBILE VIEW ====== */}
      <div className="md:hidden bg-white w-full overflow-x-hidden">
        <div
          id="_259_336__Portfolio_1_UX_UI_-_"
          className="relative overflow-hidden bg-white h-[6737px] w-full mx-auto"
        >
          <MobBanner
            iconSrc="/assets/p1/images/group.svg"
            avatarSrc="/assets/p1/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />

          <div
            id="_259_346__Frame_1171277017"
            className="absolute h-[6630px] w-[calc(100%-16px)] flex flex-col justify-start items-center flex-nowrap gap-[25px] left-[8.00px] top-[78.00px]"
          >
            <div
              id="_259_347__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[968.00px] w-[calc(100%-7px-7px)] flex flex-col justify-start items-start flex-nowrap pt-[25px] pb-[7px] px-[7px] rounded-[calc(22.8799991607666px_*_1.0)]"
            >
              <div
                id="_259_348__Container"
                className="relative w-full flex flex-col justify-start items-start flex-nowrap gap-[30px]"
              >
                <div
                  id="_259_349__Container"
                  className="relative h-[707.80px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-[30px]"
                >
                  <div
                    id="_259_350__Container"
                    className="relative h-[208.73px] flex flex-col justify-start items-center flex-nowrap gap-[21px]"
                  >
                    <div
                      id="_259_351__Heading_1"
                      className="relative h-[208.73px] w-full flex flex-col justify-start items-center flex-nowrap"
                    >
                      <span
                        id="_259_352__My_Rameswaram_Trip__"
                        className="flex justify-center text-center items-center h-[208.00px] w-full max-w-[359px] mx-auto relative"
                      >
                        <span
                          className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[40.811283111572266px] font-normal leading-[52.00px]"

                        >
                          My Rameswaram Trip – Travel &amp; Temple Service
                          Platform
                        </span>
                      </span>
                    </div>
                  </div>

                  <PortfolioMetadataMobile assetBasePath="/assets/p1/images" siteViewColor="rgba(27,102,254,1.00)" />
                </div>

                <div
                  id="_259_396__Container"
                  className="relative overflow-hidden bg-white h-[230.08px] w-full rounded-[15.260000228881836px]"
                >
                  <div
                    id="_259_397__Gemini_Logo_Removed_"
                    className="absolute h-[230.00px] w-[431.00px] left-[calc(50%-215.50px)] top-[calc(50%-115.20px)]"
                    style={{
                      background:
                        "url(/assets/p1/images/gemini_logo_removed_1.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              id="_259_398__Frame_1171276932"
              className="relative h-[403.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-2.5"
            >
              <div
                id="_259_399__Section"
                className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[403.00px] w-full rounded-[22.8799991607666px]"
              >
                <div
                  id="_259_400__Frame_94"
                  className="absolute h-[30.00px] w-[145.00px] left-[calc(50%-72.00px)] top-[35.00px]"
                >
                  <div
                    id="_259_401__Border"
                    className="absolute border h-[12.00px] w-[113.00px] left-[calc(50%-73.00px)] top-[calc(50%-15.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
                  >
                    <span
                      id="_259_402__related_works"
                      className="flex justify-center text-center items-center h-[14.00px] w-[115.00px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"

                      >
                        related works
                      </span>
                    </span>
                  </div>
                </div>

                <span
                  id="_259_403__Heading_2___Comprehe"
                  className="flex justify-center text-center items-center h-[118.00px] w-[275.00px] absolute left-[calc(50%-137.00px)] top-[90.00px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                  >
                    Related Work Across<br />My Core Services
                  </span>
                </span>
                <div
                  id="_259_404__Choice_Box"
                  className="absolute h-[130.00px] w-full left-[0px] flex flex-col justify-start items-start flex-nowrap gap-2.5 top-[238.00px]"
                >
                  <div
                    id="_259_405__Background"
                    className="relative h-[107.00px] w-[calc(100%-20px-20px)] flex flex-row justify-center items-start flex-nowrap gap-[7px] pt-0 pb-[23px] px-5 rounded-[calc(15.260000228881836px_*_1.0)]"
                  >
                    <div
                      id="_259_406__Frame_185"
                      className="relative w-[344.00px] flex flex-col justify-start items-center flex-nowrap gap-2.5"
                    >
                      <div
                        id="_259_407__Frame_177"
                        className="relative h-[60.00px] w-[324.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                      >
                        <div
                          id="_259_408__Products_page_M"
                          className="relative bg-[rgba(1,97,254,1.00)] h-[34.00px] flex flex-row justify-start items-center flex-nowrap gap-[18px] px-[18px] py-[13px] rounded-[calc(18.533363342285156px_*_1.0)]"
                        >
                          <div
                            id="I259_408_13_14140__SVG"
                            className="relative bg-[rgba(255,255,255,0.30)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                          >
                            <img
                              id="I259_408_13_14141__Vector"
                              src="/assets/p1/images/vector_2.svg"
                              alt="Vector"
                              className="absolute left-[calc(50%-8.88px)] top-[calc(50%-8.00px)]"
                            />
                          </div>

                          <span
                            id="I259_408_13_14142__Overview"
                            className="flex justify-start text-left items-center h-[24.00px] w-[72.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize"

                            >
                              Overview
                            </span>
                          </span>
                        </div>

                        <div
                          id="_259_409__Products_page_M"
                          onClick={() => navigate("/portfolio2")}
                          className="relative bg-white h-[34.00px] flex flex-row justify-start items-center flex-nowrap gap-[18px] px-[18px] py-[13px] rounded-[calc(18.533363342285156px_*_1.0)] cursor-pointer"
                        >
                          <div
                            id="I259_409_13_14317__SVG"
                            className="relative bg-[rgba(1,97,254,1.00)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                          >
                            <div
                              id="I259_409_13_14318__Frame_1171276965"
                              className="absolute h-[14.58px] w-[14.48px] left-[9.68px] top-[10.10px]"
                            >
                              <div
                                id="I259_409_13_14319__Frame_312"
                                className="absolute h-[14.58px] w-[14.48px] left-[calc(50%-7.24px)] top-[calc(50%-7.29px)]"
                              >
                                <img
                                  id="I259_409_13_14320__Vector"
                                  src="/assets/p1/images/vector_3.svg"
                                  alt="Vector"
                                  className="absolute left-[calc(100%_*_0.84)] top-[calc(100%_*_0.58)]"
                                />
                                <img
                                  id="I259_409_13_14321__Vector"
                                  src="/assets/p1/images/vector_4.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.26)]"
                                />
                                <img
                                  id="I259_409_13_14322__Vector"
                                  src="/assets/p1/images/vector_5.svg"
                                  alt="Vector"
                                  className="absolute left-[calc(100%_*_0.28)]"
                                />
                              </div>
                            </div>
                          </div>

                          <span
                            id="I259_409_13_14323__UX_UI"
                            className="flex justify-start text-left items-center h-[22.00px] w-[61.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[21.62px] capitalize"

                            >
                              UI Design
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_259_410__Frame_181"
                        className="relative h-[60.00px] w-[170.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                      >
                        <div
                          id="_259_411__Products_page_M"
                          onClick={() => navigate("/portfolio4")}
                          className="relative bg-white h-[36.00px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)] cursor-pointer"
                        >
                          <div
                            id="I259_411_13_14327__SVG"
                            className="relative bg-[rgba(1,97,254,1.00)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                          >
                            <img
                              id="I259_411_13_14328__Vector"
                              src="/assets/p1/images/vector_6.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.67)]"
                            />
                            <img
                              id="I259_411_13_14329__Vector"
                              src="/assets/p1/images/vector_7.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.25)]"
                            />
                            <img
                              id="I259_411_13_14330__Vector"
                              src="/assets/p1/images/vector_8.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                            />
                            <img
                              id="I259_411_13_14331__Vector"
                              src="/assets/p1/images/vector_9.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.62)] top-[calc(100%_*_0.50)]"
                            />
                          </div>

                          <span
                            id="I259_411_13_14332__SEO"
                            className="flex justify-start text-left items-center h-[21.00px] w-[82.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"

                            >
                              UX Research
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_259_420__Frame_1171276969"
              className="relative bg-[rgba(246,247,249,1.00)] h-[1184.00px] w-full rounded-[22px]"
            >
              <div
                id="_259_421__Container"
                className="absolute h-[1112.78px] w-[calc(100%-12px)] left-[6px] flex flex-col justify-start items-start flex-nowrap gap-[35px] top-[35.53px]"
              >
                <div
                  id="_259_422__Container"
                  className="relative overflow-hidden bg-white h-[365.12px] w-full rounded-[13.960089683532715px] border-[#c5c6c7ff] border-solid border-[0.4420289993286133px]"
                >
                  <div
                    id="_259_423__Frame_103"
                    className="absolute h-[356.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[5px] p-[5px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_259_424__Image_Paste_Frame"
                      className="relative h-[354.21px] w-full"
                    ></div>
                  </div>

                  <div
                    id="_259_425__Image_Box"
                    className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[366.00px] w-full left-[0px] top-[calc(50%-183.00px)] rounded-[13.960089683532715px]"
                  >
                    <div
                      id="_259_426__Frame_103"
                      className="absolute h-[247.56px] w-[379.57px] left-[calc(50%-195.08px)] flex flex-col justify-start items-start flex-nowrap gap-[5px] p-[5px] top-[0.00px]"
                    >
                      <div
                        id="_259_427__Frame_104"
                        className="relative h-[245.77px] w-full"
                      ></div>
                    </div>

                    <div
                      id="_259_428__67ac895b30cafb42cfac"
                      className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,253,254,1.00)0%,rgba(254,253,254,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.00)]"
                    >
                      <div
                        id="_259_429__Frame_102"
                        className="absolute h-[181.29px] w-[165.63px] top-[calc(50%-0.14px)] flex flex-col justify-start items-start flex-nowrap gap-[9px] px-[5px] py-px right-[0.24px]"
                      >
                        <div
                          id="_259_430__Frame_107"
                          className="relative h-[136.69px] w-[calc(100%-30px-55px)] flex flex-col justify-center items-center flex-nowrap gap-[5px] pl-[30px] pr-[55px] py-[18px]"
                        >
                          <div
                            id="_259_431__image_49"
                            className="absolute h-[110.11px] w-[123.30px] left-[calc(50%-61.29px)] top-[calc(50%-55.11px)]"
                            style={{
                              background:
                                "url(/assets/p1/images/image_49.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>

                      <img
                        id="_259_432__Line_3"
                        src="/assets/p1/images/line_3.svg"
                        alt="Line_3"
                        className="absolute scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] top-[calc(50%-0.14px)] left-[calc(50%+63.41px)]"
                      />
                      <div
                        id="_259_433__Frame_105"
                        className="absolute h-[139.04px] w-[259.91px] flex flex-col justify-center items-start flex-nowrap gap-[5px] pl-[34px] pr-[55px] py-[18px] left-[5.65px] top-[1.92px]"
                      >
                        <div
                          id="_259_434__image_25"
                          className="absolute h-[150.97px] w-[122.00px] left-[calc(50%-61.34px)] top-[calc(50%-75.29px)]"
                          style={{
                            background:
                              "url(/assets/p1/images/image_25.png) 100% / cover no-repeat",
                          }}
                        ></div>
                      </div>

                      <div
                        id="_259_435__Frame_107"
                        className="absolute h-[133.15px] w-[86.85px] flex flex-col justify-center items-start flex-nowrap gap-[5px] pl-[22px] pr-[55px] py-[18px] left-[5.65px] top-[188.76px]"
                      >
                        <div
                          id="_259_436__image_42"
                          className="absolute h-[108.95px] w-[109.71px] left-[calc(50%-29.81px)] top-[calc(50%-54.52px)]"
                          style={{
                            background:
                              "url(/assets/p1/images/image_42.png) 100% / cover no-repeat",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_259_437__Container"
                  className="relative h-[231.97px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-[25px]"
                >
                  <div
                    id="_259_438__Border"
                    className="relative border h-[13.97px] flex flex-row justify-center items-center flex-nowrap pt-[7px] pb-2 px-4 rounded-[calc(228.8300018310547px_*_1.0)] border-[#202833ff] border-solid"
                  >
                    <div
                      id="_259_439__Container"
                      className="relative h-[14.72px] w-[79.00px] flex flex-col justify-start items-center flex-nowrap"
                    >
                      <span
                        id="_259_440__Milestone"
                        className="flex justify-center text-center items-center h-[14.00px] w-[79.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[11.399999618530273px] font-medium leading-[13.73px] tracking-[1.715999960899353px] uppercase"

                        >
                          Milestone
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    id="_259_441__Frame_1171277002"
                    className="relative h-[176.00px] w-full"
                  >
                    <div
                      id="_259_442__Heading_2"
                      className="absolute h-[77.00px] w-[343.12px] top-[-0.50px] flex flex-col justify-start items-center flex-nowrap left-[8.31px]"
                    >
                      <span
                        id="_259_443__Key_milestones_and_o"
                        className="flex justify-center text-center items-center h-[77.00px] w-[342.00px] relative"
                      >
                        <span
                          className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.29999923706055px] font-normal leading-[38.13px]"

                        >
                          Key milestones and outcomes of the project
                        </span>
                      </span>
                    </div>

                    <div
                      id="_259_444__Container"
                      className="absolute h-[69.63px] w-full flex flex-col justify-start items-center flex-nowrap left-[0.00px] top-[106.50px]"
                    >
                      <span
                        id="_259_445__This_project_improve"
                        className="flex justify-center text-center items-center h-[69.00px] w-full relative"
                      >
                        <span
                          className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[15.300000190734863px] font-light leading-[22.88px]"

                        >
                          This project improved travel planning for pilgrims and
                          tourists visiting Rameswaram through user research,
                          usability analysis, and clear, intuitive design.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="_259_446__Container"
                  className="relative h-[444.81px] flex flex-col justify-start items-start flex-nowrap gap-[30px]"
                >
                  <div
                    id="_259_447__Background"
                    className="relative bg-white h-[163.41px] w-full flex flex-col justify-start items-center flex-nowrap gap-[18px] p-[22px] rounded-[calc(15.260000228881836px_*_1.0)]"
                  >
                    <div
                      id="_259_448__SVG"
                      className="relative h-[38.13px] w-[38.13px]"
                    >
                      <img
                        id="_259_449__Vector"
                        src="/assets/p1/images/vector_10.svg"
                        alt="Vector"
                        className="absolute"
                      />
                      <img
                        id="_259_450__Vector"
                        src="/assets/p1/images/vector_11.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.29)]"
                      />
                    </div>

                    <div
                      id="_259_451__Container"
                      className="relative h-[105.45px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <div
                        id="_259_452__Container"
                        className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap"
                      >
                        <span
                          id="_259_453__Key_Achievement"
                          className="flex justify-center text-center items-center h-[27.00px] w-[139.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[19.100000381469727px] font-normal leading-[26.70px]"

                          >
                            Key Achievement
                          </span>
                        </span>
                      </div>

                      <div
                        id="_259_454__Container"
                        className="relative h-[69.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap"
                      >
                        <span
                          id="_259_455__Improved_information"
                          className="flex justify-center text-center items-center h-[69.00px] w-[313.00px] relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[13.300000190734863px] font-normal leading-[22.83px]"

                          >
                            Improved information clarity and user navigation by
                            structuring content around real user needs and journey
                            flows.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_259_456__Background"
                    className="relative bg-white h-[163.41px] w-full flex flex-col justify-start items-center flex-nowrap gap-[18px] p-[22px] rounded-[calc(15.260000228881836px_*_1.0)]"
                  >
                    <div
                      id="_259_457__SVG"
                      className="relative h-[38.13px] w-[38.13px]"
                    >
                      <img
                        id="_259_458__Vector"
                        src="/assets/p1/images/vector_12.svg"
                        alt="Vector"
                        className="absolute"
                      />
                      <img
                        id="_259_459__Vector"
                        src="/assets/p1/images/vector_13.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.39)] top-[calc(100%_*_0.29)]"
                      />
                      <img
                        id="_259_460__Vector"
                        src="/assets/p1/images/vector_14.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.54)]"
                      />
                    </div>

                    <div
                      id="_259_461__Container"
                      className="relative h-[105.45px] flex flex-col justify-start items-start flex-nowrap gap-2"
                    >
                      <div
                        id="_259_462__Container"
                        className="relative h-[27.69px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap"
                      >
                        <span
                          id="_259_463__Client_Impact"
                          className="flex justify-center text-center items-center h-[27.00px] w-[106.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[19.100000381469727px] font-normal leading-[26.70px]"

                          >
                            Client Impact
                          </span>
                        </span>
                      </div>

                      <div
                        id="_259_464__Container"
                        className="relative h-[69.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap"
                      >
                        <span
                          id="_259_465__The_platform_offers_"
                          className="flex justify-center text-center items-center h-[69.00px] w-[313.00px] relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[13.300000190734863px] font-normal leading-[22.83px]"

                          >
                            The platform offers a smoother, intuitive experience
                            that helps visitors plan trips and access temple
                            services with confidence.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_259_466__Frame_192"
              className="relative h-[463.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-2.5 py-0"
            >
              <span
                id="_259_467__This_project_was_app"
                className="flex justify-center text-center items-center h-[498.00px] w-full max-w-[370px] relative"
              >
                <span>
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"

                  >
                    This project was approached with a user-first mindset, focusing on the needs of pilgrims and travelers visiting Rameswaram.{" "}
                  </span>
                  <span
                    className="bg-[rgba(112,112,112,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"

                  >
                    Through research, journey mapping, and usability testing, the platform was designed to balance travel convenience with the spiritual context of temple services, ensuring clarity, accessibility, and trust at every step.
                  </span>
                </span>
              </span>
            </div>

            <div
              id="_259_468__Frame_1171276953"
              className="relative bg-[rgba(246,247,249,1.00)] h-[1230.00px] w-full rounded-[23px]"
            >
              <div
                id="_259_470__Frame_270"
                className="absolute h-[1159.00px] w-[calc(100%-12px)] flex flex-col justify-start items-center flex-nowrap gap-[25px] left-[6px] top-[35.47px]"
              >
                <div
                  id="_259_471__Border"
                  className="relative border h-[30.00px] w-[62.00px] rounded-[228.8300018310547px] border-[#202833ff] border-solid"
                >
                  <span
                    id="_259_472__FAQ"
                    className="flex justify-center text-center items-center h-[14.00px] w-[29.00px] absolute left-[calc(50%-14.00px)] top-[calc(50%-7.47px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[13.73px] tracking-[1.715999960899353px] uppercase"

                    >
                      FAQ
                    </span>
                  </span>
                </div>

                <div
                  id="_259_473__Frame_1171277004"
                  className="relative h-[683.00px] w-full"
                >
                  <div
                    id="_259_474__Frame_1171277003"
                    className="absolute h-[253.00px] w-[300.00px] left-[32.00px] top-[0.47px]"
                  >
                    <span
                      id="_259_475__Heading_2___Our_Succ"
                      className="flex justify-center text-center items-center h-[176.00px] w-[300.00px] absolute left-[0.00px] top-[0.47px]"
                    >
                      <span
                        className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[40.0px] font-normal leading-[46.00px]"

                      >
                        My Rameswaram Trip – Travel &amp; Temple Service Platform
                      </span>
                    </span>
                    <div
                      id="_259_476__Link"
                      onClick={() => navigate("/faq")}
                      className="absolute bg-[rgba(1,97,254,1.00)] h-[46.00px] w-[124.00px] left-[calc(50%-62.00px)] rounded-[95.3499984741211px] top-[206.53px] cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div
                        id="_259_477__Container"
                        className="absolute overflow-hidden h-[calc(100%-6.00px)] w-[52.00px] left-[calc(50%-40.58px)] top-[3.06px]"
                      >
                        <span
                          id="_259_478__View_All"
                          className="flex justify-center text-center items-center h-[16.00px] w-[60.98px] absolute left-[calc(50%-30.00px)] top-[calc(50%-7.93px)]"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-normal leading-[20.14px] tracking-[-0.06700000166893005px]"

                          >
                            View All
                          </span>
                        </span>
                        <span
                          id="_259_479__See_More"
                          className="flex justify-center text-center items-center h-[16.00px] w-[60.98px] absolute left-[calc(50%-30.00px)] top-[calc(50%+52.45px)]"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"

                          >
                            See More
                          </span>
                        </span>
                      </div>

                      <div
                        id="_259_480__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] top-[calc(50%-11.27px)] left-[calc(50%+19.09px)]"
                      >
                        <div
                          id="_259_481__67a22e78f02af13d518a"
                          className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                        >
                          <div
                            id="_259_482__67a22e78f02af13d518a"
                            className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                          >
                            <img
                              id="_259_483__Vector"
                              src="/assets/p1/images/vector_15.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_259_485__Background"
                    className="absolute bg-white h-[209.00px] w-[360.00px] left-[50%] -translate-x-[50%] flex flex-row justify-start items-center flex-nowrap gap-6 p-2.5 rounded-[15px] top-[451.53px]"
                  >
                    <span
                      id="_259_486__This_project_focuses"
                      className="flex justify-center text-center items-center h-[211.00px] w-full relative"
                    >
                      <span
                        className="bg-[rgba(109,109,110,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[28.00px] capitalize"

                      >
                        This project focuses on designing a user-centered digital
                        platform that combines pilgrimage services and travel
                        planning for Rameswaram. The goal is to create a seamless
                        experience for devotees and travelers by simplifying
                        temple services, travel bookings, and local guidance
                        through an intuitive and respectful interface.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_259_487__Paragraph_Background"
                    className="absolute bg-[rgba(1,97,254,1.00)] h-[149.00px] w-full rounded-[15px] left-[0.00px] top-[287.53px]"
                  >
                    <div
                      id="_259_488__Frame_189"
                      className="absolute h-[37.00px] w-[111.00px] left-[calc(50%-65.50px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.47px]"
                    >
                      <span
                        id="_259_489__Overview"
                        className="flex justify-start text-left items-center h-[37.00px] w-[111.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize"

                        >
                          Overview
                        </span>
                      </span>
                    </div>

                    <div
                      id="_259_490__Frame_188"
                      className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-171.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[65.47px]"
                    >
                      <span
                        id="_259_491__What_is_the_My_Rames"
                        className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative"
                      >
                        <span
                          className="bg-white bg-clip-text text-transparent not-italic text-[18.100000381469727px] font-light leading-[27.21px]"

                        >
                          What is the My Rameswaram Trip UX/UI project about?
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="_259_492__Group_33"
                  className="relative h-[185.00px] w-full"
                >
                  <div
                    id="_259_493__Paragraph_Background"
                    className="absolute bg-white h-[185.00px] w-full rounded-[15px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_259_494__Frame_189"
                      className="absolute h-[73.00px] w-[187.00px] left-[calc(50%-103.00px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.47px]"
                    >
                      <span
                        id="_259_495__UX_Research_Approach"
                        className="flex justify-center text-center items-center h-[73.00px] w-[187.00px] relative"
                      >
                        <span
                          className="bg-black bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize"

                        >
                          UX Research Approach
                        </span>
                      </span>
                    </div>

                    <div
                      id="_259_496__Frame_188"
                      className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-171.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[101.47px]"
                    >
                      <span
                        id="_259_497__What_UX_research_met"
                        className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative"
                      >
                        <span
                          className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.100000381469727px] font-light leading-[27.21px]"

                        >
                          What UX research methods were used in this project?
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="_259_498__Group_34"
                  className="relative h-[184.00px] w-full"
                >
                  <div
                    id="_259_499__Paragraph_Background"
                    className="absolute bg-white h-[184.00px] w-full rounded-[15px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_259_500__Frame_189"
                      className="absolute h-[73.00px] w-[247.00px] left-[calc(50%-133.00px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.00px]"
                    >
                      <span
                        id="_259_501__User_Problems_Identi"
                        className="flex justify-center text-center items-center h-[73.00px] w-[247.00px] relative"
                      >
                        <span
                          className="bg-black bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize"

                        >
                          User Problems Identified
                        </span>
                      </span>
                    </div>

                    <div
                      id="_259_502__Frame_188"
                      className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-171.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[101.00px]"
                    >
                      <span
                        id="_259_503__What_key_user_proble"
                        className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative"
                      >
                        <span
                          className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.100000381469727px] font-light leading-[27.21px]"

                        >
                          What key user problems did the research uncover?
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_259_504__Section"
              className="relative overflow-hidden h-[661.00px] w-full rounded-[22.8799991607666px]"
            >
              <span
                id="_259_505__Heading_1___About_ou"
                className="flex justify-center text-center items-center h-[55.00px] w-[246.00px] absolute left-[calc(50%-124.00px)] top-[35.00px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[45.0px] font-normal leading-[52.49px]"

                >
                  Our Projects
                </span>
              </span>
              <span
                id="_259_506__At_Arunijone__I_deli"
                className="flex justify-center text-center items-center h-[109.00px] w-[335.00px] absolute left-[calc(50%-168.00px)] top-[120.00px]"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"

                >
                  At Arunijone, I deliver high-impact services and projects
                  focused on UX/UI design, digital marketing, and equity research.
                  Each engagement is driven by strategic thinking, attention to
                  detail, and a commitment to measurable results.
                </span>
              </span>
              <div
                id="_259_507__Container"
                className="absolute overflow-hidden h-[289.64px] w-[274.39px] left-[-56.36px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px] top-[346.00px]"
              >
                <div
                  id="_259_508__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_259_509__image_26"
                    className="absolute h-[181.00px] w-[146.00px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]"
                    style={{
                      background:
                        "url(/assets/p1/images/image_26.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_259_510__Frame_309"
                className="absolute h-[46.34px] w-[235.98px] left-[calc(50%-118.00px)] top-[264.00px]"
              >
                <div
                  id="_259_511__Link"
                  onClick={() => navigate('/contact')}
                  className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[126.33px] left-[calc(50%-117.99px)] top-[calc(50%-23.17px)] rounded-[95.3499984741211px]"
                >
                  <div
                    id="_259_512__Container"
                    className="absolute overflow-hidden h-[calc(100%-6.09px)] w-[50.08px] left-[calc(50%-40.28px)] top-[3.05px]"
                  >
                    <span
                      id="_259_513__Contact"
                      className="flex justify-center text-center items-center h-[16.00px] w-[50.74px] absolute left-[calc(50%-25.04px)] top-[calc(50%+52.32px)]"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"

                      >
                        Contact
                      </span>
                    </span>
                  </div>

                  <div
                    id="_259_514__Frame_254"
                    className="absolute h-[22.88px] w-[80.62px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[22.88px] top-[11.74px]"
                  >
                    <span
                      id="_259_515__Contact"
                      className="flex justify-center text-center items-center h-[16.00px] w-[50.74px] relative"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"

                      >
                        Contact
                      </span>
                    </span>
                    <div
                      id="_259_516__67a22e78f02af13d518a"
                      className="relative overflow-hidden h-[22.88px] w-[22.88px]"
                    >
                      <div
                        id="_259_517__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_259_518__67a22e78f02af13d518a"
                          className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                        >
                          <img
                            id="_259_519__Vector"
                            src="/assets/p1/images/vector_16.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_259_520__Link"
                  onClick={() => navigate('/portfolio1')}
                  className="absolute border h-[42.63px] w-[100.03px] top-[calc(50%-22.31px)] rounded-[95.3499984741211px] border-[#0161feff] border-solid left-[calc(50%+15.96px)]"
                >
                  <span
                    id="_259_521__Portfolio"
                    className="flex justify-center text-center items-center h-[17.00px] w-[50.00px] absolute left-[calc(50%-25.34px)] top-[calc(50%-8.37px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.17px] tracking-[-0.06700000166893005px]"

                    >
                      Portfolio
                    </span>
                  </span>
                </div>
              </div>

              <div
                id="_259_522__Container"
                className="absolute overflow-hidden h-[289.64px] w-[274.39px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px] left-[233.48px] top-[346.00px]"
              >
                <div
                  id="_259_523__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_259_524__image_10"
                    className="absolute h-[129.00px] w-[184.00px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]"
                    style={{
                      background:
                        "url(/assets/p1/images/image_10.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <MobFooter />
          </div>
        </div>
      </div>{/* end mobile view */}



    </>
  );
};
export default Portfolio1UXUIUIDesignWebsite;
