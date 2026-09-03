import React from "react";

const sections = [
  { title: "Executive Summary", body: "The digital transformation of pilgrimage travel within the Indian subcontinent represents one of the most complex paradigms in modern user experience (UX) and interaction design. The sector is currently undergoing a structural migration from highly fragmented, opaque offline ecosystems toward structured, digitally governed platforms." },
  { title: "The Macro-Environment of Pilgrimage UX and Digital Trust", body: "To accurately evaluate the interaction design of MyRameswaramTrip, the platform must first be contextualized within the broader dynamics of global digital trust and religious tourism technology. Historically, the pilgrimage ecosystem in emerging markets was defined by acute information asymmetry." },
  { title: "Information Architecture and Cognitive Unburdening", body: "The structural foundation of MyRameswaramTrip.com is engineered to optimize information foraging for a highly specific, high-intent user cohort. The information architecture operates on a flat, highly visible hierarchy that minimizes cognitive load." },
  { title: "Homepage Structure and Visual Hierarchy", body: "The homepage functions as a high-conversion landing environment built explicitly around trust validation and cognitive unburdening. The global navigation bar is distilled into core functional nodes, prominently displaying the brand logo followed by intuitive categories." },
  { title: "Heuristic Evaluation of Error Handling and Feedback States", body: "A critical component of system heuristic evaluation is how a platform communicates its internal status to the end user, particularly during network latency or data retrieval failures. The MyRameswaramTrip interface exhibits sophisticated error-state management within its dynamic modules." },
  { title: "The Phygital Safety Net and Call-to-Action Strategy", body: "Throughout the vertical scroll, the platform employs a sophisticated, dual-layered Call-To-Action strategy designed to capture users at varying stages of transactional readiness." },
  { title: "Transparent Pricing and the Anchoring Heuristic", body: "The presentation of pricing data across the MyRameswaramTrip platform is highly optimized to convey both financial value and unwavering honesty. Each listed attraction prominently features its final price alongside a distinct promotional tag." },
  { title: "Strategic Conclusions", body: "MyRameswaramTrip.com represents a highly effective, elegantly designed, and specialized implementation of digital UX within the complex, inherently trust-deficient ecosystem of Indian pilgrimage travel. Its greatest architectural strengths lie in its hyper-local focus and masterful utilization of content for expectation management." },
];

export default function MobResearchMain() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "30px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", alignSelf: "flex-start", display: "inline-flex" }}>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
          Research Report
        </span>
      </div>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
        The Macro-Environment of Pilgrimage UX and Digital Trust
      </span>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
        Discover how our solutions have delivered real results, solved complex challenges, and accelerated business growth.
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {sections.map(({ title, body }) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#191615" }}>{title}</span>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "#808080" }}>{body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
