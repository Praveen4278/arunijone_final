import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio7MarketingSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>marketing</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 7 — Marketing</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Marketing content for Portfolio 7 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        heading="Marketing strategy and market positioning"
        description="This project developed market positioning strategies for B2B hospitality suppliers in emerging GCC markets with expanding infrastructure."
        keyAchievementBody="Identified key marketing channels and messaging frameworks for reaching hotel procurement teams within rapidly growing hospitality sectors."
        clientImpactBody="Provided comprehensive go-to-market strategy leveraging macroeconomic tailwinds and infrastructure expansion to drive supplier visibility and partnerships."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Marketing strategies were grounded in macroeconomic analysis, competitive positioning, and the unique procurement patterns of institutional hospitality buyers.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through understanding GCC economic diversification, hotel expansion pipelines, and B2B buyer decision-making processes, this marketing framework positions suppliers as essential partners in hospitality infrastructure development.
        </span>
      </div>

      <PillFaqSection
        faqHeading="B2B Hospitality Marketing and Supplier Strategy"
        activeRow={{
          leftLabel: "Target Audience",
          rightQuestion: "Who are the key decision-makers in hotel procurement?",
          active: true,
          answerText: "Primary buyers include hotel general managers, procurement directors, and operations teams. Secondary influencers include brand standards representatives from international hotel chains.",
        }}
        row2={{
          leftLabel: "Market Entry",
          rightQuestion: "What channels work best for reaching hospitality buyers?",
        }}
        row3={{
          leftLabel: "Competitive Edge",
          rightQuestion: "How do suppliers differentiate in crowded markets?",
        }}
      />
    </div>
  );
}
