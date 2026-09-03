import React from "react";

const ArrowIcon = ({ color }: { color: string }) => (
  <img src="/figmaAssets/img.svg" alt="" aria-hidden="true" style={{ width: 18.94, height: 19.89, filter: color === "white" ? "brightness(0) invert(1)" : undefined }} />
);

const logos = [
  { img: "/figmaAssets/image-26.png",    w: 46,  h: 56  },
  { img: "/figmaAssets/image-10-1.png",  w: 53,  h: 38  },
  { img: "/figmaAssets/frame-1171276921.svg", w: 138.12, h: 74, full: true },
  { img: "/figmaAssets/image-1.png",     w: 62,  h: 49  },
  { img: "/figmaAssets/image-47.png",    w: 118, h: 34  },
  { resora: true },
  { img: "/figmaAssets/image-242.png",   w: 56,  h: 61  },
  { img: "/figmaAssets/image-63.png",    w: 110, h: 31  },
] as const;

export const SuccessStoriesSection = (): React.JSX.Element => {
  return (
    <section
      aria-labelledby="services-heading"
      style={{ width: 1420, height: 1084, background: "#F6F7F9", borderRadius: 20.4131, position: "relative", flexShrink: 0 }}
    >
      {/* Frame 1171276984: 1335.15×983.63, left:42.45, top:50 */}
      <div style={{ position: "absolute", width: 1335.15, left: 42.45, top: 50 }}>

        {/* Frame 1171277103: badge + header + image box, flex col gap:30 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 30, width: 1335.15 }}>

          {/* Badge */}
          <div style={{
            width: 159, height: 39, border: "0.750207px solid #202833", borderRadius: 204.109,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "'SF Pro', Helvetica", fontWeight: 510, fontSize: 14,
              lineHeight: "18px", letterSpacing: 1.78624, textTransform: "uppercase", color: "#202833",
            }}>our services</span>
          </div>

          {/* Header row: heading + View All */}
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: 1335.15, height: 73 }}>
            <h2
              id="services-heading"
              style={{
                width: 500, height: 73, margin: 0,
                fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 36,
                lineHeight: "42px", color: "#111111", display: "flex", alignItems: "center",
              }}
            >
              Real Results. Real Impact.<br />Our Success Stories.
            </h2>
            <button style={{
              display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",
              padding: "13px 21px 17px", gap: 4, width: 133, height: 55,
              background: "#0161FE", borderRadius: 98.6819, border: "none", cursor: "pointer",
            }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, width: 90.94, height: 20 }}>
                <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#FFFFFF" }}>View All</span>
                <ArrowIcon color="white" />
              </div>
            </button>
          </div>

          {/* Image Box: 1335.15×605, #FEFEFE, border-radius:23.69 */}
          <div style={{
            width: 1335.15, height: 605, background: "#FEFEFE", borderRadius: 23.6864,
            position: "relative", overflow: "hidden", flexShrink: 0,
          }}>
            <img
              src="/figmaAssets/image-box.svg"
              alt="Our services showcase"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Open in new — blue circle button: left:1254, top:30 */}
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

        {/* Images Container: 1195×94, white bg, border-radius:12, top:808 relative to inner frame */}
        <div style={{
          width: 1195, height: 94, background: "#FFFFFF", borderRadius: 12,
          display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 10, gap: 10,
          marginTop: 31, marginLeft: "calc((1335.15px - 1195px) / 2)",
        }}>
          {logos.map((logo, i) => (
            <div key={i} style={{
              width: 138.12, height: 74, flexShrink: 0,
              background: "#FFFFFF", border: "0.1px solid #8E8383", borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
            }}>
              {"resora" in logo ? (
                <div style={{ display: "flex", alignItems: "center", gap: 7.6, position: "absolute", left: 23.25, top: 26 }}>
                  <img src="/figmaAssets/vector-1.svg" alt="" style={{ width: 25.35, height: 23.84 }} />
                  <span style={{ fontFamily: "'Poppins', Helvetica", fontWeight: 600, fontSize: 16.5939, lineHeight: "25px", color: "#1F64FF" }}>Resora</span>
                </div>
              ) : "full" in logo && logo.full ? (
                <img src={logo.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <img src={logo.img} alt="" style={{ width: logo.w, height: logo.h, objectFit: "contain" }} />
              )}
            </div>
          ))}
        </div>

        {/* Prev/Next nav buttons: Group 1000008325, position:absolute, top:932, centered */}
        <div style={{
          position: "absolute",
          width: 111.38, height: 50.63,
          left: "calc(50% - 55.69px + 0.12px)", top: 932,
          display: "flex", flexDirection: "row", alignItems: "center", gap: 10,
        }}>
          {/* Prev — white bg, blue border, circle */}
          <button style={{
            width: 50.63, height: 50.63, background: "#FFFFFF",
            border: "0.5px solid #0161FE", borderRadius: "50%",
            boxSizing: "border-box",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <svg width="21.09" height="21.09" viewBox="0 0 24 24" fill="none">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#0161FE"/>
            </svg>
          </button>
          {/* Next — blue bg, circle */}
          <button style={{
            width: 50.63, height: 50.63, background: "#0161FE",
            border: "none", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <svg width="21.09" height="21.09" viewBox="0 0 24 24" fill="none">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#FFFFFF"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};
