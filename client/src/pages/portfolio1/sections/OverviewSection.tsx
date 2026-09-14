import PillMilestoneSection from "./PillMilestoneSection";
import PillQuoteSection from "./PillQuoteSection";
import PillFaqSection from "./PillFaqSection";
import type { PillMilestoneTexts } from "./PillMilestoneSection";
import type { PillQuoteTexts } from "./PillQuoteSection";
import type { PillFaqTexts } from "./PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description:
    "This platform improves travel planning for pilgrims and tourists visiting Rameswaram through user research, usability analysis, and clear, intuitive design.",
  keyAchievementBody:
    "Improved information clarity and user navigation by structuring content around real user needs and journey flows.",
  clientImpactBody:
    "The platform offers a smoother, intuitive experience that helps visitors plan trips and access temple services with confidence.",
};

const quote: PillQuoteTexts = {
  solidLine:
    "This project was approached with a user-first mindset, focusing on the needs of pilgrims and travelers visiting Rameswaram.",
  mutedLine:
    "Through research, journey mapping, and usability testing, the platform was designed to balance travel convenience with the spiritual context of temple services, ensuring clarity, accessibility, and trust at every step.",
};

const faq: PillFaqTexts = {
  faqHeading: "My Rameswaram Trip – Travel & Temple Service Platform",
  activeRow: {
    leftLabel: "Overview",
    rightQuestion: "What is the myrameswaramtrip.com platform overview?",
    active: true,
    answerText:
      "This platform presents a geographically distributed, user-centered digital overview of myrameswaramtrip.com. The goal is to demonstrate how the service unifies regional pilgrimage touchpoints, from temple bookings to local travel, through an intuitive and trustworthy interface that scales across visitor regions.",
  },
  row2: {
    leftLabel: "Coverage Strategy",
    rightQuestion: "How is the solution built for businesses across regions?",
  },
  row3: {
    leftLabel: "User Problems Identified",
    rightQuestion: "What regional discovery problems did the overview address?",
  },
};

export default function OverviewSection({ logoSrc }: { logoSrc?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div
        id="_231_4745__Frame_1171276963"
        className="relative h-[1179.00px] w-[1416.00px]"
      >
        <span
          id="_231_4747__Heading_2___Comprehe"
          className="flex justify-center text-center items-center h-[82.00px] w-[529.00px] absolute left-[calc(50%-265.00px)] top-[118.00px]"
        >
          <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[45.00px]">
            Solutions built for businesses across regions.
          </span>
        </span>
        <div
          id="_231_4748__Frame_114"
          className="absolute h-[38.00px] w-[180.00px] left-[calc(50%-90.50px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 top-[50.00px]"
        >
          <div
            id="_231_4749__Border"
            className="relative h-[18.06px] w-[138.06px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-5 py-[9px] rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612192153931px]"
          >
            <span
              id="_231_4750__Project_Region"
              className="flex justify-center text-center items-center h-[20.00px] w-[140.00px] relative"
            >
              <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719523429870605px] uppercase">
                Project Region
              </span>
            </span>
          </div>
        </div>
        <div
          id="_231_4751___"
          className="absolute h-[879.00px] w-[1334.00px] left-[calc(50%-667.00px)] top-[250.00px]"
        >
          <img
            id="I231_4751_1364_20923__Group"
            src="/assets/portfolio/images/group_2.svg"
            alt="Group"
            className="absolute left-[calc(100%_*_0.00)]"
          />
        </div>
      </div>
      <PillMilestoneSection {...milestone} mockupImageSrc={logoSrc ?? milestone.mockupImageSrc} />
      <PillQuoteSection {...quote} />
      <PillFaqSection {...faq} />
    </div>
  );
}
