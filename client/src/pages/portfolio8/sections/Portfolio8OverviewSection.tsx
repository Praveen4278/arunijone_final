import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";
import type { PillMilestoneTexts } from "../../portfolio1/sections/PillMilestoneSection";
import type { PillQuoteTexts } from "../../portfolio1/sections/PillQuoteSection";
import type { PillFaqTexts } from "../../portfolio1/sections/PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description: "This project strengthened Thendral Supermarket's digital presence with a user-friendly platform for showcasing products, offers, and supermarket services.",
  keyAchievementBody: "Created a clear and engaging digital experience for browsing products, promotions, categories, and essential store information.",
  clientImpactBody: "Improved product visibility, customer engagement, and access to Thendral Supermarket's offerings.",
};

const quote: PillQuoteTexts = {
  solidLine: "This project followed a user-first approach, focusing on making product discovery, offers, and store information simple and accessible.",
  mutedLine: "Through structured content, intuitive navigation, and usability-focused design, the platform was designed to create a convenient shopping experience while strengthening the supermarket's digital presence.",
};

const faq: PillFaqTexts = {
  faqHeading: "Thendral Supermarket – Digital Experience & Product Showcase",
  activeRow: {
    leftLabel: "Overview",
    rightQuestion: "What is the My Rameswaram Trip UX/UI project about?",
    active: true,
    answerText: "This Project Focuses On Designing A User-Centered Digital Platform That Combines Pilgrimage Services And Travel Planning For Rameswaram. The Goal Is To Create A Seamless Experience For Devotees And Travelers By Simplifying Temple Services, Travel Bookings, And Local Guidance Through An Intuitive And Respectful Interface.",
  },
  row2: {
    leftLabel: "UX Research Approach",
    rightQuestion: "What UX research methods were used in this project?",
  },
  row3: {
    leftLabel: "User Problems Identified",
    rightQuestion: "What key user problems did the research uncover?",
  },
};

export default function Portfolio8OverviewSection({ logoSrc }: { logoSrc?: string }) {
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
