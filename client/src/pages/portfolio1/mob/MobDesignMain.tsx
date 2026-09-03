import React from "react";

const rows = [
  { src: "/assets/portfolio/creative/creative_image_275_4cb19c.png", text: "Explore trusted pujas, temple rituals, tours, and local services for a meaningful Rameswaram journey." },
  { src: "/assets/portfolio/creative/creative_image_274_616651.png", text: "Browse traditional pujas and rituals, compare services, and choose the right ceremony for your occasion." },
  { src: "/assets/portfolio/creative/creative_image_276.png", text: "Explore puja benefits, rituals, timings, inclusions, and pandit details before making your booking." },
  { src: "/assets/portfolio/creative/creative_image_277.png", text: "Provide your preferred date, devotee details, and booking information to arrange your puja seamlessly." },
];

export default function MobDesignMain() {
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
            Website Design
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
          The Attraction Booking Flow Screen
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
          The primary objective of this screen is to minimize cognitive friction by breaking down complex logistical permutations.
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
            style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover", border: "10px solid #F7F9FD", boxSizing: "border-box" }}
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
