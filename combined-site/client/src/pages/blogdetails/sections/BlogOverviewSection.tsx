import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";
import type { PillMilestoneTexts } from "../../portfolio1/sections/PillMilestoneSection";
import type { PillQuoteTexts } from "../../portfolio1/sections/PillQuoteSection";
import type { PillFaqTexts } from "../../portfolio1/sections/PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the blog",
  description: "This blog improved content clarity and reader engagement through structured research, usability analysis, and clear, intuitive design.",
  keyAchievementBody: "Improved content clarity and reader navigation by structuring information around real user needs and reading flows.",
  clientImpactBody: "The blog offers a smoother, intuitive reading experience that helps visitors find and engage with content confidently.",
};

const quote: PillQuoteTexts = {
  solidLine: "This blog was approached with a reader-first mindset, focusing on the needs of the target audience.",
  mutedLine: "Through research, content mapping, and usability testing, the platform was designed to balance information delivery with engaging storytelling, ensuring clarity, accessibility, and trust at every step.",
};

const faq: PillFaqTexts = {
  faqHeading: "Blog Title Goes Here – Subtitle of the Blog Post",
  activeRow: {
    leftLabel: "Overview",
    rightQuestion: "What is this blog post about?",
    active: true,
    answerText: "This blog post covers the key insights, research findings, and design decisions that shaped the project. It aims to provide a clear and engaging narrative for readers interested in the topic.",
  },
  row2: {
    leftLabel: "Coverage Strategy",
    rightQuestion: "How is the content structured for the target audience?",
  },
  row3: {
    leftLabel: "Key Insights",
    rightQuestion: "What key insights did the research uncover?",
  },
};

export default function BlogOverviewSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div className="relative h-[1179.00px] w-[1416.00px]">
        <span className="flex justify-center text-center items-center h-[82.00px] w-[529.00px] absolute left-[calc(50%-265.00px)] top-[118.00px]">
          <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[45.00px]">
            Solutions built for businesses across regions.
          </span>
        </span>
        <div className="absolute h-[38.00px] w-[180.00px] left-[calc(50%-90.50px)] flex flex-col justify-start items-start gap-2.5 top-[50.00px]">
          <div className="relative h-[18.06px] w-[138.06px] flex flex-row justify-center items-center gap-2.5 px-5 py-[9px] rounded-[236px] border-[#202833ff] border-solid border-[0.97px]">
            <span className="flex justify-center text-center items-center h-[20.00px] w-[140.00px] relative">
              <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.07px] uppercase">
                Project Region
              </span>
            </span>
          </div>
        </div>
        <div className="absolute h-[879.00px] w-[1334.00px] left-[calc(50%-667.00px)] top-[250.00px]">
          <img src="/assets/portfolio/images/group_2.svg" alt="Group" className="absolute left-[calc(100%_*_0.00)]" />
        </div>
      </div>
      <PillMilestoneSection {...milestone} />
      <PillQuoteSection {...quote} />
      <PillFaqSection {...faq} />
    </div>
  );
}
