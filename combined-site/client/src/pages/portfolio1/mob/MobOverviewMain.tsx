import React from "react";

export default function MobOverviewMain() {
  return (
    <div
      style={{
        width: "100%",
        padding: "30px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", display: "inline-flex" }}>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
          Project Region
        </span>
      </div>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111", textAlign: "center" }}>
        Solutions built for businesses across regions.
      </span>
      <img src="/assets/portfolio/images/group_2.svg" alt="Global reach map" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}
