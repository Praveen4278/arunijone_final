import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio6DevelopmentSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>development</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 6 — Development</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Development content for Portfolio 6 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        heading="Development milestones and technical architecture"
        description="This project implemented a robust white-label booking platform with advanced search optimization, multi-tenant data isolation, and channel management integration."
        keyAchievementBody="Built high-performance Elasticsearch + Redis dual-system architecture supporting faceted search, real-time availability, and sub-100ms query response times."
        clientImpactBody="Delivered production-ready infrastructure enabling rapid deployment of branded booking applications across multiple resort properties with zero data leakage."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Development prioritized architectural scalability, data security, and performance optimization to support enterprise-grade hospitality operations at scale.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through careful implementation of hybrid search systems, payment tokenization, GDPR-compliant data handling, and cross-platform deployment strategies, this platform delivers secure, compliant, and performant direct booking capabilities.
        </span>
      </div>

      <PillFaqSection
        faqHeading="Hotel Booking Platform Development and Infrastructure"
        activeRow={{
          leftLabel: "Architecture",
          rightQuestion: "How is the backend system structured for scalability?",
          active: true,
          answerText: "The platform uses a dual-system architecture combining Elasticsearch for faceted search and Redis for real-time availability. This hybrid approach ensures both sophisticated filtering and absolute inventory accuracy.",
        }}
        row2={{
          leftLabel: "Security",
          rightQuestion: "How are payment and guest data protected?",
        }}
        row3={{
          leftLabel: "Performance",
          rightQuestion: "What optimizations ensure fast booking experiences?",
        }}
      />
    </div>
  );
}
