import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio8CreativeSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>creative</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 8 — Creative</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Creative content for Portfolio 8 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png"
        heading="Creative direction and brand development"
        description="This project developed creative frameworks and brand positioning for new market entries and portfolio expansion."
        keyAchievementBody="Created compelling brand narratives and creative assets that communicate value propositions and differentiate offerings in competitive markets."
        clientImpactBody="Delivered creative assets and brand guidelines supporting successful market launch and sustained brand recognition."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Creative development was anchored in market research and strategic positioning to ensure brand consistency and market relevance.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through strategic brand storytelling, visual identity development, and integrated creative campaigns, this framework establishes strong market presence and audience engagement.
        </span>
      </div>

      <PillFaqSection
        faqHeading="Brand Development and Creative Strategy"
        activeRow={{
          leftLabel: "Brand Identity",
          rightQuestion: "What defines the brand's core positioning?",
          active: true,
          answerText: "Brand positioning emphasizes quality, innovation, customer focus, and market leadership. Visual identity reflects these values through cohesive design and messaging.",
        }}
        row2={{
          leftLabel: "Creative Execution",
          rightQuestion: "How is the brand brought to life across touchpoints?",
        }}
        row3={{
          leftLabel: "Market Differentiation",
          rightQuestion: "How does creative strategy drive competitive advantage?",
        }}
      />
    </div>
  );
}
