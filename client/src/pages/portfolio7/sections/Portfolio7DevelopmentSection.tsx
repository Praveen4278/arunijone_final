import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio7DevelopmentSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>development</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 7 — Development</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Development content for Portfolio 7 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png"
        heading="Technical infrastructure and platform development"
        description="This project engineered scalable e-commerce and data management systems supporting B2B hospitality supplier operations."
        keyAchievementBody="Built multi-tenant digital platforms integrating product catalogs, pricing systems, and procurement workflows for enterprise hospitality buyers."
        clientImpactBody="Delivered production infrastructure enabling rapid digital transformation and market expansion for traditional hospitality suppliers."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          Development prioritized scalability, integration with procurement workflows, and support for enterprise B2B operations at scale.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through modern e-commerce architecture, inventory management systems, and seamless integration with hospitality procurement platforms, this development enables suppliers to meet the operational demands of rapidly expanding hotel portfolios.
        </span>
      </div>

      <PillFaqSection
        faqHeading="B2B E-Commerce and Supplier Platform Development"
        activeRow={{
          leftLabel: "Platform Architecture",
          rightQuestion: "How is the e-commerce platform structured for B2B operations?",
          active: true,
          answerText: "The platform combines product catalog management, dynamic pricing, inventory tracking, order management, and procurement integrations to support complex B2B workflows.",
        }}
        row2={{
          leftLabel: "Integration",
          rightQuestion: "How does the platform integrate with hotel procurement systems?",
        }}
        row3={{
          leftLabel: "Scalability",
          rightQuestion: "Can the system support rapid growth and expansion?",
        }}
      />
    </div>
  );
}
