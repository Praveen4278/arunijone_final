import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillContent from "../components/MobPillContent";
import BlogResearchSection from "./blogdetails/sections/BlogResearchSection";

const BlogDetails = () => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ===== DESKTOP ===== */}
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

          {/* Hero — no metadata row */}
          <div style={{ position: "relative", background: "#F6F7F9", width: "100%", borderRadius: 20.4131, overflow: "hidden", flexShrink: 0, padding: "45px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 57, width: "100%" }}>
              <span style={{ width: 1331, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 40.8113, lineHeight: "47px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#111111" }}>
                A Complete Guide to Planning a Seamless Rameswaram Pilgrimage with MyRameswaramTrip
              </span>
              <div style={{ position: "relative", overflow: "hidden", width: 1331, height: 625, borderRadius: 20.4131 }}>
                <div style={{ position: "absolute", overflow: "hidden", width: 1335.11, height: 627.5, left: 0, top: 0, background: "rgba(0,0,0,0.2)" }}>
                  <div style={{ position: "absolute", width: 1335, height: 628, left: 0, top: 0.5, background: "url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat" }} />
                </div>
              </div>
            </div>
          </div>

          <BlogResearchSection />

          <SiteFooterSection />
          <div style={{ height: 10 }} />
        </div>
      </DesktopPageWrapper>

      {/* ===== MOBILE ===== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/p1/images/group.svg" avatarSrc="/assets/p1/images/gemini_generated_image_gyuxclgyuxclgyux_2.png" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center py-[25px] px-[15px]" style={{ gap: 30 }}>
              <span style={{ width: "100%", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", color: "#111111" }}>
                Blog Title Goes Here – Subtitle of the Blog Post
              </span>
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200 }}>
                <img src="/assets/portfolio/images/gemini_logo_removed_1.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <MobPillContent data={{
              milestoneHeading: "Research milestones and key findings",
              milestoneDescription: "This blog evaluated content usability and reader experience through structured research, heuristic analysis, and interface evaluation.",
              keyAchievementBody: "Identified content navigation strengths and structural improvements through analysis of reading flows and information architecture.",
              clientImpactBody: "Provided content recommendations to build trust, simplify structure, and improve reader accessibility.",
              quoteSolid: "This research was approached with a reader-first mindset, focusing on the digital interactions of the target audience.",
              quoteMuted: "Through heuristic evaluation, content analysis, and competitive benchmarking, the blog was evaluated on how it balances informational clarity with the engagement required to retain and convert readers.",
              faqHeading: "Blog Research – Insights & Methodology",
              activeLabel: "Research Scope",
              activeQuestion: "What does the research scope cover for this blog?",
              activeAnswer: "The research covers a comprehensive evaluation spanning information architecture, content hierarchy, readability, call-to-action placement, competitive benchmarking, accessibility, and future content roadmapping.",
              row2Label: "Evaluation Methods",
              row2Question: "Which research methods were applied during the audit?",
              row3Label: "Research Outcomes",
              row3Question: "What are the key actionable outcomes from the research?",
            }} />

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default BlogDetails;
