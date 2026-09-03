import React from "react";

const rows = [
  { src: "/assets/portfolio/creative/creative_iphone_1_57d08f.png", text: "Explore trusted temple, travel, and local services." },
  { src: "/assets/portfolio/creative/creative_iphone_2_52434a.png", text: "Experience traditional ceremonies arranged with care." },
  { src: "/assets/portfolio/creative/creative_iphone_3_4655eb.png", text: "Book authentic pujas and temple services effortlessly." },
  { src: "/assets/portfolio/creative/creative_iphone_4_28e87c.png", text: "Choose trusted accommodations for a peaceful stay." },
];

export function IPhoneMockup({ src, imgW = 109, imgH = 236, imgOffsetX = 0, imgOffsetY = -0.34, imgRadius = 18, theme = "dark" }: {
  src: string;
  imgW?: number;
  imgH?: number;
  imgOffsetX?: number;
  imgOffsetY?: number;
  imgRadius?: number;
  theme?: "dark" | "light";
}) {
  const c = theme === "dark" ? "#FFFFFF" : "#000000";
  const borderColor = theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const capColor = theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    <div style={{ position: "relative", width: 119, height: 242.67, flexShrink: 0 }}>
      <img src="/assets/portfolio/creative/iphone_14_pro_device.png" alt="" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", objectFit: "fill", zIndex: 2 }} />
      <img src={src} alt="" style={{ position: "absolute", width: imgW, height: imgH, left: `calc(50% - ${imgW}px/2 + ${imgOffsetX}px)`, top: `calc(50% - ${imgH}px/2 + ${imgOffsetY}px)`, borderRadius: imgRadius, objectFit: "fill", zIndex: 1 }} />
      <div style={{ position: "absolute", width: 38.48, height: 1.37, left: "calc(50% - 38.48px/2 - 0.15px)", bottom: 7.98, background: c, borderRadius: 27.48, zIndex: 3 }} />
      <div style={{ position: "absolute", left: 16.16, top: 11.54, width: 86.74, height: 4.95, zIndex: 3 }}>
        <span style={{ position: "absolute", left: 0.05, top: "calc(50% - 5px/2 + 0.03px)", fontFamily: "'SF Pro Text'", fontWeight: 600, fontSize: 4.12, letterSpacing: -0.08, color: c }}>9:41</span>
        <div style={{ position: "absolute", right: 16.29, top: 0.71, width: 5.28, height: 3.3, display: "flex", alignItems: "flex-end", gap: 0.6 }}>
          {[1.5, 2, 2.5, 3.3].map((h, i) => <div key={i} style={{ flex: 1, height: h, background: c, borderRadius: 0.3 }} />)}
        </div>
        <div style={{ position: "absolute", right: 9.5, top: 0.74, width: 4.71, height: 3.33, display: "flex", alignItems: "flex-end", gap: 0.5 }}>
          {[1.2, 2.2, 3.33].map((h, i) => <div key={i} style={{ flex: 1, height: h, background: c, borderRadius: 0.3 }} />)}
        </div>
        <div style={{ position: "absolute", right: 0, top: 0.58, width: 7.83, height: 3.57 }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 6.87, height: 3.57, border: `0.27px solid ${borderColor}`, borderRadius: 1.18, boxSizing: "border-box" }}>
            <div style={{ position: "absolute", left: 0.27, top: 0.27, width: 5.2, height: 2.47, background: c, borderRadius: 0.69 }} />
          </div>
          <div style={{ position: "absolute", right: 0, top: 1.24, width: 0.36, height: 1.1, background: capColor, borderRadius: 0.5 }} />
        </div>
      </div>
    </div>
  );
}

export default function MobCreativeMain() {
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ boxSizing: "border-box", width: 161, height: 32, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", textAlign: "center" }}>
            Video Promotion
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "36px", color: "#111111", textAlign: "center", width: 372 }}>
          Video Rendering Pipeline Architecture &amp; Optimization
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", textAlign: "center", width: 343.16 }}>
          This section outlines the backend infrastructure and processing workflows required to stitch, encode, and export high-resolution video advertisements at scale.
        </span>
      </div>

      {rows.map(({ src, text }) => (
        <div
          key={src}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 35,
            width: 359.74,
          }}
        >
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "34px", color: "#111111", textAlign: "center", width: "100%" }}>
            {text}
          </span>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <IPhoneMockup src={src} />
          </div>
        </div>
      ))}
    </div>
  );
}
