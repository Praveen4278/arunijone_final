import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio8MarketingSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>marketing</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 8 — Marketing</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Marketing content for Portfolio 8 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png"
        heading="Marketing strategy and launch planning"
        description="This project developed comprehensive go-to-market strategies for new product and service offerings targeting specific customer segments."
        keyAchievementBody="Identified optimal marketing channels, messaging frameworks, and audience segmentation to drive brand awareness and customer acquisition."
        clientImpactBody="Delivered integrated marketing strategy supporting successful product launch, market penetration, and sustained growth."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Marketing strategy was developed with customer-centric insight and market-driven positioning to maximize reach and impact.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through audience research, competitive analysis, channel optimization, and integrated campaigns, this marketing framework drives brand visibility, customer engagement, and measurable business results.
        </span>
      </div>

      <PillFaqSection
        faqHeading="Marketing Strategy and Customer Acquisition"
        activeRow={{
          leftLabel: "Target Audience",
          rightQuestion: "Who is the primary target customer segment?",
          active: true,
          answerText: "Primary targets are identified through market research, psychographic profiling, and behavioral analysis to ensure marketing efficiency and relevance.",
        }}
        row2={{
          leftLabel: "Marketing Channels",
          rightQuestion: "Which channels deliver optimal reach and ROI?",
        }}
        row3={{
          leftLabel: "Measurement",
          rightQuestion: "How is marketing performance tracked and optimized?",
        }}
      />
    </div>
  );
}
