import React from "react";

const rows = [
  { src: "/assets/portfolio/creative/creative_iphone_1_57d08f.png", text: "Explore trusted temple, travel, and local services." },
  { src: "/assets/portfolio/creative/creative_iphone_2_52434a.png", text: "Experience traditional ceremonies arranged with care." },
  { src: "/assets/portfolio/creative/creative_iphone_3_4655eb.png", text: "Book authentic pujas and temple services effortlessly." },
  { src: "/assets/portfolio/creative/creative_iphone_4_28e87c.png", text: "Choose trusted accommodations for a peaceful stay." },
];

function StatusBar() {
  return (
    <div style={{ position: "absolute", left: 27.29, top: 19.5, width: 146.52, height: 8.36 }}>
      <span style={{ position: "absolute", left: 0.1, top: 0, width: 18.1, height: 8, fontFamily: "'SF Pro Text'", fontWeight: 600, fontSize: 6.96, letterSpacing: "-0.02em", color: "#FFFFFF", textAlign: "center" }}>9:41</span>
      <div style={{ position: "absolute", right: 27.48, top: 1.2, width: 8.92, height: 5.57, display: "flex", alignItems: "flex-end", gap: 1 }}>
        {[2.5, 3.5, 4.5, 5.57].map((h, i) => (
          <div key={i} style={{ width: 1.8, height: h, background: "#FFFFFF", borderRadius: 0.5 }} />
        ))}
      </div>
      <div style={{ position: "absolute", right: 16.04, top: 1.25, width: 7.96, height: 5.61, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 0.8 }}>
        {[5.61, 3.8, 2].map((w, i) => (
          <div key={i} style={{ width: w, height: 1.2, background: "#FFFFFF", borderRadius: 1 }} />
        ))}
      </div>
      <div style={{ position: "absolute", right: 1.03, top: 0.98, width: 11.61, height: 6.03, border: "0.46px solid rgba(255,255,255,0.35)", borderRadius: 1.99, boxSizing: "border-box" }}>
        <div style={{ position: "absolute", right: 2.06, top: 1.91, width: 9.75, height: 4.18, background: "#FFFFFF", borderRadius: 1.16 }} />
      </div>
      <div style={{ position: "absolute", right: 0.01, top: 3.15, width: 0.62, height: 1.86, background: "rgba(255,255,255,0.4)", borderRadius: 0.5 }} />
    </div>
  );
}

function IPhoneMockup({ src }: { src: string }) {
  return (
    <div style={{ position: "relative", width: 201, height: 410, flexShrink: 0 }}>
      <img
        src="/assets/portfolio/creative/iphone_14_pro_device.png"
        alt=""
        style={{ position: "absolute", left: 0, top: 0, width: 201.46, height: 409.43, objectFit: "cover", zIndex: 2 }}
      />
      <div style={{ position: "absolute", left: 7.75, top: 8, width: 185, height: 393, borderRadius: 12, overflow: "hidden", zIndex: 1 }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
      </div>
      <div style={{ position: "absolute", left: 67.76, top: 394.1, width: 64.99, height: 2.32, background: "#FFFFFF", borderRadius: 46.42, zIndex: 3 }} />
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", zIndex: 3 }}>
        <StatusBar />
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
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", alignSelf: "flex-start", display: "inline-flex" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
            Video Promotion
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
          Video Rendering Pipeline Architecture &amp; Optimization
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
          This section outlines the backend infrastructure and processing workflows required to stitch, encode, and export high-resolution video advertisements at scale.
        </span>
      </div>

      {rows.map(({ src, text }) => (
        <div
          key={src}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            background: "#F6F7F9",
            borderRadius: 16,
            padding: "24px 16px",
          }}
        >
          <IPhoneMockup src={src} />
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
