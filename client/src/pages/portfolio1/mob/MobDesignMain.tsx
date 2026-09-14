import React from "react";
import { IPhoneMockup } from "./MobCreativeMain";

const rows = [
  {
    src: "/assets/portfolio/design/design_image_279.png",
    text: "Explore trusted pujas, temple rituals, tours, and local services for a meaningful Rameswaram journey.",
    imgW: 109, imgH: 236, imgOffsetX: 0, imgOffsetY: -0.34, imgRadius: 18, theme: "dark" as const,
  },
  {
    src: "/assets/portfolio/design/design_image_280.png",
    text: "Browse traditional pujas and rituals, compare services, and choose the right ceremony for your occasion.",
    imgW: 116, imgH: 241, imgOffsetX: 0.5, imgOffsetY: 0.12, imgRadius: 21, theme: "dark" as const,
  },
  {
    src: "/assets/portfolio/design/design_image_281.png",
    text: "Explore puja benefits, rituals, timings, inclusions, and pandit details before making your booking.",
    imgW: 113, imgH: 237, imgOffsetX: 1, imgOffsetY: 1.06, imgRadius: 15, theme: "light" as const,
  },
  {
    src: "/assets/portfolio/design/design_image_282.png",
    text: "Provide your preferred date, devotee details, and booking information to arrange your puja seamlessly.",
    imgW: 112, imgH: 240, imgOffsetX: 0.5, imgOffsetY: -0.48, imgRadius: 19, theme: "light" as const,
  },
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ boxSizing: "border-box", width: 144, height: 32, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", textAlign: "center" }}>
            Website Design
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "36px", color: "#111111", textAlign: "center", width: 372 }}>
          The Attraction Booking Flow Screen
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", textAlign: "center", width: 343.16 }}>
          The primary objective of this screen is to minimize cognitive friction by breaking down complex logistical permutations.
        </span>
      </div>

      {rows.map(({ src, text, imgW, imgH, imgOffsetX, imgOffsetY, imgRadius, theme }) => (
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
            <IPhoneMockup src={src} imgW={imgW} imgH={imgH} imgOffsetX={imgOffsetX} imgOffsetY={imgOffsetY} imgRadius={imgRadius} theme={theme} />
          </div>
        </div>
      ))}
    </div>
  );
}
