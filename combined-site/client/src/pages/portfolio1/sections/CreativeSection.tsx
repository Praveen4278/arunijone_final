import PillMilestoneSection from "./PillMilestoneSection";
import PillQuoteSection from "./PillQuoteSection";
import PillFaqSection from "./PillFaqSection";
import type { PillMilestoneTexts } from "./PillMilestoneSection";
import type { PillQuoteTexts } from "./PillQuoteSection";
import type { PillFaqTexts } from "./PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description:
    "This project created a unified Rameswaram platform for Puja, Scuba Diving, Stays, Cab Booking, Attractions, and Travel Experiences.",
  keyAchievementBody:
    "Built a user-friendly platform for discovering services, comparing options, viewing details, and making bookings easily.",
  clientImpactBody:
    "The platform simplifies Rameswaram trip planning, from temple pujas and stays to cabs, scuba diving, and local experiences.",
};

const quote: PillQuoteTexts = {
  solidLine:
    "This AI-driven video campaign was developed with a user-first approach, visually mapping the complete travel journey of pilgrims and tourists visiting Rameswaram.",
  mutedLine:
    "The dynamically generated video assets showcase how the platform brings multiple services together, helping users easily discover and visualize Puja Services, Scuba Diving, Stays, Cab Services, and Attractions to drive engagement and booking conversions.",
};

const faq: PillFaqTexts = {
  faqHeading: "AI Video Generation Architecture & Inference Optimization",
  activeRow: {
    leftLabel: "Creative Direction",
    rightQuestion:
      "What is the visual creative direction for the video promotion ?",
    active: true,
    answerText:
      "The campaign leverages premium iPhone 14 Pro device mockups as the consistent visual vessel, presenting four alternating visual narratives that progressively guide users from exploration through ritual discovery, effortless booking, and peaceful accommodation selection in a polished, app-store-quality aesthetic.",
  },
  row2: {
    leftLabel: "Asset Production",
    rightQuestion: "How many creative verticals and layouts were produced for promotion?",
  },
  row3: {
    leftLabel: "Visual Impact",
    rightQuestion: "How does the mobile-first framing elevate the promotional storytelling?",
  },
};

function StatusBar() {
  return (
    <div style={{ position: "absolute", left: 27.29, top: 19.5, width: 146.52, height: 8.36 }}>
      {/* Time */}
      <span style={{ position: "absolute", left: 0.1, top: 0, width: 18.1, height: 8, fontFamily: "'SF Pro Text'", fontWeight: 600, fontSize: 6.96, letterSpacing: "-0.02em", color: "#FFFFFF", textAlign: "center" }}>9:41</span>
      {/* Cellular bars */}
      <div style={{ position: "absolute", right: 27.48, top: 1.2, width: 8.92, height: 5.57, display: "flex", alignItems: "flex-end", gap: 1 }}>
        {[2.5, 3.5, 4.5, 5.57].map((h, i) => (
          <div key={i} style={{ width: 1.8, height: h, background: "#FFFFFF", borderRadius: 0.5 }} />
        ))}
      </div>
      {/* Wifi arcs */}
      <div style={{ position: "absolute", right: 16.04, top: 1.25, width: 7.96, height: 5.61, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 0.8 }}>
        {[5.61, 3.8, 2].map((w, i) => (
          <div key={i} style={{ width: w, height: 1.2, background: "#FFFFFF", borderRadius: 1 }} />
        ))}
      </div>
      {/* Battery border */}
      <div style={{ position: "absolute", right: 1.03, top: 0.98, width: 11.61, height: 6.03, border: "0.46px solid rgba(255,255,255,0.35)", borderRadius: 1.99, boxSizing: "border-box" }}>
        {/* Battery fill */}
        <div style={{ position: "absolute", right: 2.06, top: 1.91, width: 9.75, height: 4.18, background: "#FFFFFF", borderRadius: 1.16 }} />
      </div>
      {/* Battery cap */}
      <div style={{ position: "absolute", right: 0.01, top: 3.15, width: 0.62, height: 1.86, background: "rgba(255,255,255,0.4)", borderRadius: 0.5 }} />
    </div>
  );
}

function IPhoneMockup({ src, borderRadius = 12 }: { src: string; borderRadius?: number }) {
  return (
    <div style={{ position: "absolute", left: "calc(50% - 100.5px)", top: -2, width: 201, height: 409.89 }}>
      {/* Device frame */}
      <img
        src="/assets/portfolio/creative/iphone_14_pro_device.png"
        alt=""
        style={{ position: "absolute", left: 0, top: 0, width: 201.46, height: 409.43, objectFit: "cover", zIndex: 2 }}
      />
      {/* Screenshot clipped with rounded corners */}
      <div style={{ position: "absolute", left: 7.75, top: 8, width: 185, height: 393, borderRadius, overflow: "hidden", zIndex: 1 }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
      </div>
      {/* Home indicator */}
      <div style={{ position: "absolute", left: 67.76, top: 394.1, width: 64.99, height: 2.32, background: "#FFFFFF", borderRadius: 46.42, zIndex: 3 }} />
      {/* Status bar */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", zIndex: 3 }}>
        <StatusBar />
      </div>
    </div>
  );
}

function IPhoneContainer({ src, borderRadius }: { src: string; borderRadius?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 10, width: 612, background: "#FFFFFF", borderRadius: 23.6864 }}>
      <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "stretch", padding: 10, gap: 10, height: 426 }}>
        <div style={{ position: "relative", width: "100%", height: 406 }}>
          <IPhoneMockup src={src} borderRadius={borderRadius} />
        </div>
      </div>
    </div>
  );
}

const rows = [
  { phone: "/assets/portfolio/creative/creative_iphone_1_57d08f.png", text: "Explore trusted temple, travel, and local services.", phoneLeft: true },
  { phone: "/assets/portfolio/creative/creative_iphone_2_52434a.png", text: "Experience traditional ceremonies arranged with care.", phoneLeft: false },
  { phone: "/assets/portfolio/creative/creative_iphone_3_4655eb.png", text: "Book authentic pujas and temple services effortlessly.", phoneLeft: true },
  { phone: "/assets/portfolio/creative/creative_iphone_4_28e87c.png", text: "Choose trusted accommodations for a peaceful stay.", phoneLeft: false },
];

export default function CreativeSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{ width: 1420, background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 41.5px", display: "flex", flexDirection: "column", alignItems: "center", gap: 100, boxSizing: "border-box" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322.5, height: 142 }}>
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 20px", gap: 10, height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "19.61px", letterSpacing: "0.148em", textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
              video promotion
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch", gap: 421 }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 527 }}>
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34.01px", color: "#111111", width: 497 }}>
                Video Rendering Pipeline Architecture &amp; Optimization
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 372 }}>
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "23.69px", color: "rgba(109, 109, 110, 0.8)", width: 358 }}>
                This section outlines the backend infrastructure and processing workflows required to stitch, encode, and export high-resolution video advertisements at scale.
              </span>
            </div>
          </div>
        </div>

        {/* Rows */}
        {rows.map(({ phone, text, phoneLeft }, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 60, width: 1337 }}>
              <div style={{ position: "relative", width: "100%", height: 426 }}>
                <div style={{ position: "absolute", left: 0, top: 0, width: 1337, display: "flex", flexDirection: "row", alignItems: "center", gap: 90 }}>
                  {phoneLeft ? (
                    <>
                      <IPhoneContainer src={phone} />
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 40, width: 636 }}>
                        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "45px", color: "#111111", width: 486, textAlign: "center" }}>{text}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 40, width: 636 }}>
                        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "45px", color: "#111111", width: 522, textAlign: "center" }}>{text}</span>
                      </div>
                      <IPhoneContainer src={phone} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PillMilestoneSection {...milestone} />
      <PillQuoteSection {...quote} />
      <PillFaqSection {...faq} />
    </div>
  );
}
