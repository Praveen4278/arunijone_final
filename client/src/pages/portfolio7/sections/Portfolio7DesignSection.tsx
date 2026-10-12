import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio7DesignSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>design</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 7 — Design</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Design content for Portfolio 7 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png"
        heading="Design research and B2B supplier analysis"
        description="This project evaluated B2B hospitality supplier positioning and digital platform design through competitive analysis and UX audit."
        keyAchievementBody="Identified critical design gaps in enterprise e-commerce platforms and supplier digital presence within the hospitality supply vertical."
        clientImpactBody="Provided comprehensive design recommendations for improving product discovery, pricing clarity, and supplier credibility for hospitality procurement teams."
      />

      <PillQuoteSection
        solidLine="This design evaluation emphasized operational clarity and brand credibility for B2B suppliers navigating complex hospitality procurement workflows."
        mutedLine="Through analysis of supplier digital presence, competitor benchmarking, and hospitality procurement patterns, this evaluation provides a strategic framework for positioning specialized suppliers within evolving digital marketplaces."
        textWidth={843}
        textHeight={210}
        outerWidth={1415}
        outerMinHeight={410}
        outerPaddingX={309}
      />

      <PillFaqSection
        faqHeading="B2B Hospitality Supply Chain and Digital Positioning"
        activeRow={{
          leftLabel: "Market Positioning",
          rightQuestion: "How do suppliers differentiate in the B2B hospitality space?",
          active: true,
          answerText: "Effective positioning emphasizes product quality, supply reliability, competitive pricing, and trusted partnerships. Digital presence, transparent ordering systems, and responsive customer support build credibility with hotel procurement teams.",
        }}
        row2={{
          leftLabel: "Digital Strategy",
          rightQuestion: "What digital transformation is needed for traditional suppliers?",
        }}
        row3={{
          leftLabel: "Market Growth",
          rightQuestion: "How do macroeconomic trends impact hospitality suppliers?",
        }}
      />
    </div>
  );
}
