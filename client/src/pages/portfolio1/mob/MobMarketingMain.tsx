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
        gap: 30,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", alignSelf: "flex-start", display: "inline-flex" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
            Marketing
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
          Analytics Architecture and Marketing Integrations
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
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
            gap: 16,
            background: "#F6F7F9",
            borderRadius: 16,
            padding: "16px",
          }}
        >
          <img
            src={src}
            alt=""
            style={{ width: "100%", height: "auto", borderRadius: 10, objectFit: "cover", border: "10px solid #F7F9FD", boxSizing: "border-box" }}
          />
          <span
            style={{
              fontFamily: "'SF Pro Display'",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "28px",
              color: "#111111",
              textAlign: "center",
            }}
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
