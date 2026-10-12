import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillContent from "../components/MobPillContent";
import PillMilestoneSection from "./portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "./portfolio1/sections/PillQuoteSection";
import PillFaqSection from "./portfolio1/sections/PillFaqSection";
import type { PillMilestoneTexts } from "./portfolio1/sections/PillMilestoneSection";
import type { PillQuoteTexts } from "./portfolio1/sections/PillQuoteSection";
import type { PillFaqTexts } from "./portfolio1/sections/PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description: "This project focused on researching, creating, and publishing engaging product videos for Thendral Supermarket's social media platforms to improve product visibility and customer engagement.",
  keyAchievementBody: "Developed product-focused video creatives showcasing supermarket products, offers, features, and benefits through engaging visual content.",
  clientImpactBody: "Improved product awareness and social media engagement by presenting Supermarket's offerings through consistent, appealing video content.",
};

const quote: PillQuoteTexts = {
  solidLine: "Research was conducted with analytical rigor to support strategic business decisions and competitive positioning in target markets.",
  mutedLine: "Through comprehensive market analysis, competitor benchmarking, and trend evaluation, this research provides a solid foundation for strategic planning and resource allocation.",
  textWidth: 920,
  textHeight: 164,
};

const faq: PillFaqTexts = {
  faqHeading: "Thendral Supermarket – Product Video & Social Media Campaign",
  activeRow: {
    leftLabel: "Overview",
    rightQuestion: "What is the Thendral Supermarket video project about?",
    active: true,
    answerText: "This project focuses on creating engaging product videos and social media content for Thendral Supermarket. The goal is to improve product visibility and customer engagement by presenting supermarket offerings through high-quality, compelling visual content.",
  },
  row2: {
    leftLabel: "Video Strategy",
    rightQuestion: "What video content strategy was developed?",
  },
  row3: {
    leftLabel: "Social Media Outcomes",
    rightQuestion: "What were the key outcomes for social media engagement?",
  },
};

const ServiceBlog4Details = () => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* DESKTOP */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
        <header style={{ position: "absolute", left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: "#F6F7F9", borderRadius: 22.3551, position: "relative" }}>
            <div onClick={() => { navigate("/"); window.scrollTo(0, 0); }} style={{ position: "absolute", left: 42, top: "calc(50% - 33px)", width: 66, height: 66, cursor: "pointer" }}>
              <div style={{ position: "absolute", width: 66, height: 66, background: "#FFFFFF", borderRadius: 1000 }} />
              <img src="/figmaAssets/logo.png" alt="Logo" style={{ position: "absolute", width: 49, height: 42, top: "calc(50% - 21px)", left: "calc(50% - 24.5px)", borderRadius: 12, objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", width: 416, height: 47, left: "calc(50% - 208px)", top: "calc(50% - 23.5px)", display: "flex", flexDirection: "row", alignItems: "center", padding: "12px 13px", gap: 72 }}>
              {[
                { label: "Home", href: "/", w: 44 },
                { label: "About", href: "/about", w: 41 },
                { label: "Explore", href: "/explore", w: 51 },
                { label: "Blogs", href: "/blog", w: 38 },
              ].map(({ label, href, w }) => (
                <Link key={label} href={href} style={{ width: w, height: 23, textDecoration: "none", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "22px", color: "#111111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {label}
                </Link>
              ))}
            </div>
            <button onClick={() => navigate("/contact")} style={{ position: "absolute", left: 1272.55, top: "calc(50% - 26.5px)", width: 115, height: 53, display: "flex", justifyContent: "center", alignItems: "center", background: "#0161FE", borderRadius: 111.786, border: "none", cursor: "pointer" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: 15.78, color: "#FFFFFF" }}>Contact</span>
            </button>
          </div>
        </header>

        <div className="absolute h-auto w-[1420px] flex flex-col justify-start items-center gap-[50px] left-[10px] top-[107px]">
          {/* Hero Section */}
          <div style={{ position: "relative", background: "#F6F7F9", width: "100%", borderRadius: 20.4131, overflow: "hidden", flexShrink: 0, padding: "45px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 57, width: "100%" }}>
              <span style={{ width: 1331, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 40.8113, lineHeight: "47px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#111111" }}>
                Equity Research: Informed Investment Decisions Through Expert Analysis
              </span>
              <div style={{ position: "relative", overflow: "hidden", width: 1331, height: 625, borderRadius: 20.4131 }}>
                <div style={{ position: "absolute", overflow: "hidden", width: 1335.11, height: 627.5, left: 0, top: 0, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png" alt="Equity Research" style={{ width: 300, height: 300, objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
              <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>Equity Research</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 284, width: 1322 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 627 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111", width: 617 }}>
                    Evidence-Based Investment Intelligence
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 413 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", width: 404 }}>
                    Discover how our solutions deliver real results and accelerate investment success.
                  </span>
                </div>
              </div>
            </div>

            {/* Content section with padding */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 250px", gap: 40, width: 1322 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                      Professional Equity Analysis
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                        Equity research forms the foundation of sound investment decision-making. Through rigorous fundamental analysis, comparative valuation frameworks, and market intelligence, organizations can identify compelling opportunities and manage portfolio risks systematically. This disciplined approach ensures investment strategies are grounded in substantive research and market insights.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Section */}
          <PillMilestoneSection {...milestone} mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png" />

          {/* Quote Section */}
          <PillQuoteSection {...quote} />

          {/* FAQ Section */}
          <PillFaqSection {...faq} />

          <SiteFooterSection />
          <div style={{ height: 10 }} />
        </div>
      </DesktopPageWrapper>

      {/* MOBILE */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/p8/images/group.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center py-[25px] px-[15px]" style={{ gap: 30 }}>
              <span style={{ width: "100%", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", color: "#111111" }}>
                Equity Research: Informed Investment Decisions Through Expert Analysis
              </span>
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png" alt="Equity Research" style={{ width: 150, height: 150, objectFit: "contain" }} />
              </div>
            </div>

            {/* Main Content */}
            <div style={{ width: "100%", background: "#F6F7F9", borderRadius: 15, padding: "20px", boxSizing: "border-box" }}>
              <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                Equity research forms the foundation of sound investment decision-making. Through rigorous fundamental analysis and market intelligence, organizations can identify compelling opportunities and manage portfolio risks systematically.
              </p>
            </div>

            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This Equity Research service delivers comprehensive investment analysis through fundamental research, market intelligence, and data-driven insights.",
              keyAchievementBody: "Delivered in-depth equity research reports and market analysis that empower investors with actionable insights for informed decision-making.",
              clientImpactBody: "The solution provides institutional-grade research and analytical frameworks that help investors identify opportunities, assess risks, and build resilient portfolios.",
              quoteSolid: "This engagement was approached with a research-first mindset, focusing on the intersection of financial analysis and strategic investment intelligence.",
              quoteMuted: "Through comprehensive company analysis, market trend evaluation, and peer benchmarking, the research framework was designed to balance quantitative rigor with qualitative insights.",
              faqHeading: "Equity Research - Investment Intelligence Platform",
              activeLabel: "Overview",
              activeQuestion: "What is the Equity Research service overview?",
              activeAnswer: "This case study presents a comprehensive equity research engagement that delivers integrated investment analysis across sectors and markets.",
              row2Label: "Research Methodology",
              row2Question: "How is the research methodology structured?",
              row3Label: "Investment Insights",
              row3Question: "What key insights drive the recommendations?",
            }} />

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default ServiceBlog4Details;
