import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio6DesignSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>design</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Portfolio 6 — Design</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>Design content for Portfolio 6 will be added here.</span>
        </div>
      </div>

      <PillMilestoneSection
        heading="Design milestones and system evaluation"
        description="This project evaluated resort booking application design through UI/UX analysis, usability testing, and accessibility compliance review."
        keyAchievementBody="Identified core design patterns and interaction models for high-converting mobile booking interfaces with multi-persona support."
        clientImpactBody="Provided comprehensive design framework for building accessible, performant, and user-friendly direct booking applications."
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 40, padding: "60px 49px", background: "#F6F7F9", borderRadius: 23.6864 }}>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "45px", textAlign: "center", color: "#111111",
          maxWidth: 900,
        }}>
          This design process was grounded in user research, accessibility standards, and mobile-first optimization principles to maximize conversion and user satisfaction.
        </span>
        <span style={{
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 18, lineHeight: "28px", textAlign: "center", color: "rgba(109, 109, 110, 0.8)",
          maxWidth: 900,
        }}>
          Through iterative prototyping, usability testing with hospitality professionals, and compliance verification, this design system ensures seamless guest experiences while supporting complex operational requirements of premium resorts.
        </span>
      </div>

      <PillFaqSection
        faqHeading="Booking Application Design and User Experience"
        activeRow={{
          leftLabel: "Mobile First",
          rightQuestion: "How does the design prioritize mobile user experience?",
          active: true,
          answerText: "Mobile-first design ensures rapid load times, optimized touch interactions, and streamlined checkout flows. The interface prioritizes critical information above the fold and reduces cognitive load for high-intent travelers.",
        }}
        row2={{
          leftLabel: "Accessibility",
          rightQuestion: "What accessibility standards are implemented?",
        }}
        row3={{
          leftLabel: "Conversion",
          rightQuestion: "How does design drive direct booking conversions?",
        }}
      />
    </div>
  );
}
