import React from "react";
import { useLocation } from "wouter";

const SERVICE_THUMBS = [
  { route: "/portfolio5", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg", alt: "Ecosystem Logo 1" },
  { route: "/portfolio6", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg", alt: "Resora" },
  { route: "/portfolio7", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png", alt: "Ecosystem Logo 3" },
  { route: "/portfolio8", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png", alt: "Ecosystem Logo 4" },
];

export const SuccessStoriesSection = ({ activeEco = "Products" }: { activeEco?: string }): React.JSX.Element => {
  const [, navigate] = useLocation();
  const isServices = activeEco === "Services";

  // Services (Figma designed width 603): 4×138.13 + 3×10 gap + 2×10 padding = 602.52 ≈ 603
  // Products: 1 thumb = 159w
  const thumbContainerWidth = isServices ? 603 : 159;

  return (
    <section
      aria-labelledby="services-heading"
      style={{
        width: 1420,
        height: 1002,
        background: "#F6F7F9",
        borderRadius: 20.4131,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Inner frame */}
      <div style={{ position: "absolute", width: 1335.15, left: 42.45, top: 50 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 30, width: 1335.15 }}>

          {/* Badge */}
          <div style={{
            width: isServices ? 170 : 159,
            height: 39,
            border: "0.750207px solid #202833",
            borderRadius: 204.109,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "'SF Pro', Helvetica", fontWeight: 510, fontSize: 14,
              lineHeight: "18px", letterSpacing: 1.78624, textTransform: "uppercase", color: "#202833",
            }}>{isServices ? "our services" : "our products"}</span>
          </div>

          {/* Header row: heading + View All */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: 1335.15, height: 73 }}>
            <h2
              id="services-heading"
              style={{
                width: 500, height: 73, margin: 0,
                fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 36,
                lineHeight: "42px", color: "#111111", display: "flex", alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {isServices
                ? <>Proven Outcomes. Lasting Impact.<br />Explore Our Services.</>
                : <>Real Results. Real Impact.<br />Our Success Stories.</>}
            </h2>
            <div
              onClick={() => { navigate("/explore"); window.scrollTo(0, 0); }}
              style={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",
                padding: "13px 21px 17px", gap: 4,
                width: 133, height: 55,
                background: "#0161FE", borderRadius: 98.6819,
                cursor: "pointer", boxSizing: "border-box", flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 0, gap: 5, width: 90.94, height: 20 }}>
                <span style={{ width: 67, height: 20, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 16, lineHeight: "24px", display: "flex", alignItems: "center", textAlign: "center", color: "#FFFFFF", whiteSpace: "nowrap" }}>View All</span>
                <img src="/assets/Home/images/vector_23.svg" alt="" style={{ width: 18.94, height: 19.89 }} />
              </div>
            </div>
          </div>

          {/* ── Main image box ── */}
          <div
            onClick={() => { navigate(isServices ? "/portfolio5" : "/portfolio1"); window.scrollTo(0, 0); }}
            style={{
              width: 1335.15, height: 605, background: "#FEFEFE", borderRadius: 23.6864,
              position: "relative", overflow: "hidden", flexShrink: 0, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {isServices
              ? <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Service 1" style={{ position: "absolute", width: 312.61, height: 311.33, left: "calc(50% - 312.61px/2 - 0.27px)", top: "calc(50% - 311.33px/2 + 0.17px)", objectFit: "contain" }} />
              : <img src="/figmaAssets/image-box.svg" alt="Our services showcase" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            }
            <div style={{
              position: "absolute", width: 50, height: 50, left: 1254, top: 30,
              background: "#0161FE", borderRadius: 500,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="#FFFFFF"/>
              </svg>
            </div>
          </div>

        </div>

        {/* ── Thumbnail row — centered below the image box ── */}
        <div style={{
          width: thumbContainerWidth,
          height: 94,
          background: "#FFFFFF",
          borderRadius: 12,
          display: "flex", flexDirection: "row", alignItems: "flex-start",
          padding: 10, gap: 10,
          position: "absolute",
          left: `calc(50% - ${thumbContainerWidth / 2}px)`,
          top: 808,
          boxSizing: "border-box",
        }}>
          {isServices ? (
            // 4 service logo thumbs — Figma node 1570:69947 specs: 138.13x74 cards, 6px radius, #8E8383 0.1px border
            SERVICE_THUMBS.map((thumb, i) => {
              // Per-logo Figma positions within 138.13x74 frame
              // i=0: logo1 SVG at (44.13, 13), 49.17x48.96
              // i=1: Resora group at (23.25, 26), 91x26.47
              // i=2: logo3 PNG at (25.75, 21), 87x32
              // i=3: logo4 PNG at (23.63, 21), 91x33
              const specs = [
                { left: 44.13, top: 13, w: 49.17, h: 48.96 },
                { left: 23.25, top: 26, w: 91, h: 26.47 },
                { left: 25.75, top: 21, w: 87, h: 32 },
                { left: 23.63, top: 21, w: 91, h: 33 },
              ];
              const s = specs[i];
              return (
                <div
                  key={thumb.route}
                  onClick={() => { navigate(thumb.route); window.scrollTo(0, 0); }}
                  style={{
                    boxSizing: "border-box",
                    width: 138.13, height: 74,
                    background: "#FEFEFE",
                    border: "0.1px solid rgba(142,131,131,0.3)",
                    borderRadius: 6,
                    flexShrink: 0, position: "relative", cursor: "pointer",
                  }}
                >
                  <img
                    src={thumb.img}
                    alt={thumb.alt}
                    style={{
                      position: "absolute",
                      left: s.left,
                      top: s.top,
                      width: s.w,
                      height: s.h,
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })
          ) : (
            // 1 product thumb
            <div
              onClick={() => { navigate("/portfolio1"); window.scrollTo(0, 0); }}
              style={{
                boxSizing: "border-box", width: 138.12, height: 74,
                background: "#FFFFFF", border: "0.1px solid rgba(142,131,131,0.3)", borderRadius: 6,
                flexShrink: 0, position: "relative", cursor: "pointer",
              }}
            >
              <img src="/figmaAssets/image-26.png" alt="" style={{
                position: "absolute", width: 46, height: 56,
                left: "calc(50% - 46px/2 - 0.06px)", top: "calc(50% - 56px/2)",
                objectFit: "contain",
              }} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
