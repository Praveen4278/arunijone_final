import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio7CreativeSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>creative</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 7 — Creative</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Creative content for Portfolio 7 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png"
        heading="Creative development and brand communications"
        description="This project developed creative frameworks for communicating B2B value propositions to institutional hospitality buyers."
        keyAchievementBody="Created messaging and positioning that emphasizes reliability, scale, and strategic importance of supplier partnerships in hospitality operations."
        clientImpactBody="Delivered creative assets and communication strategies that enhance supplier brand perception and support procurement team decision-making."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Creative development focused on translating complex supply chain value into clear, compelling narratives for hospitality procurement professionals.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through strategic messaging, visual identity systems, and brand communications tailored to B2B audiences, this creative framework positions suppliers as integral partners in premium hospitality operations.
        </span>
      </div>

      <PillFaqSection
        faqHeading="B2B Brand Communication and Creative Strategy"
        activeRow={{
          leftLabel: "Brand Messaging",
          rightQuestion: "What key messages resonate with hotel procurement teams?",
          active: true,
          answerText: "Effective messages emphasize reliability, product quality, cost efficiency, compliance certifications, and long-term partnership stability.",
        }}
        row2={{
          leftLabel: "Visual Identity",
          rightQuestion: "How should B2B suppliers establish visual differentiation?",
        }}
        row3={{
          leftLabel: "Communication Channels",
          rightQuestion: "Which channels best reach institutional hospitality buyers?",
        }}
      />
    </div>
  );
}
