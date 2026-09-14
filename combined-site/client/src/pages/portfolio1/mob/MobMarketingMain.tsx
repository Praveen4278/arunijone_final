import React from "react";

const rows = [
  { src: "/assets/portfolio/marketing/marketing_analytics_1.png", text: "Monitor visitors, engagement, traffic sources, and user behavior to measure website performance." },
  { src: "/assets/portfolio/marketing/marketing_seo_2.png", text: "Track rankings, search visibility, clicks, impressions, and SEO performance to grow organic traffic." },
  { src: "/assets/portfolio/marketing/marketing_social_3.png", text: "Track ad performance, audience engagement, reach, and campaign results across social media platforms." },
];

export default function MobMarketingMain() {
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
        alignItems: "center",
        gap: 30,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ boxSizing: "border-box", width: 159, height: 32, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
            Marketing
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "36px", color: "#111111", textAlign: "center", width: 372 }}>
          Analytics Architecture and Marketing Integrations
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", textAlign: "center", width: 343.16 }}>
         This section details the technical framework used to capture user telemetry, outlining the implementation of data, event pipelines, and server-side tracking.
        </span>
      </div>

      {rows.map(({ src, text }) => (
        <div
          key={src}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 35,
            width: "100%",
          }}
        >
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "34px", color: "#111111", textAlign: "center", width: "100%" }}>
            {text}
          </span>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <img src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }} />
          </div>
        </div>
      ))}
    </div>
  );
}
