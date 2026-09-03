import React from "react";
import { useLocation } from "wouter";

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
  const [, navigate] = useLocation();
  return (
    <section
      aria-labelledby="services-heading"
      style={{ width: 1420, height: 1002, background: "#F6F7F9", borderRadius: 20.4131, position: "relative", flexShrink: 0 }}
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
            }}>our products</span>
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
            <div
              onClick={() => { navigate("/explore"); window.scrollTo(0, 0); }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "13px 21px 17px",
                gap: 4,
                width: 133,
                height: 55,
                background: "#0161FE",
                borderRadius: 98.6819,
                cursor: "pointer",
                boxSizing: "border-box",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 0,
                  gap: 5,
                  width: 90.94,
                  height: 20,
                }}
              >
                <span
                  style={{
                    width: 67,
                    height: 20,
                    fontFamily: "'SF Pro Display', Helvetica",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  View All
                </span>
                <img
                  src="/assets/Home/images/vector_23.svg"
                  alt=""
                  style={{ width: 18.94, height: 19.89 }}
                />
              </div>
            </div>
          </div>

          {/* Image Box: 1335.15×605, #FEFEFE, border-radius:23.69 */}
          <div onClick={() => { navigate("/portfolio1"); window.scrollTo(0, 0); }} style={{
            width: 1335.15, height: 605, background: "#FEFEFE", borderRadius: 23.6864,
            position: "relative", overflow: "hidden", flexShrink: 0, cursor: "pointer",
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

        {/* Images Container */}
        <div style={{
          width: 159, height: 94, background: "#FFFFFF", borderRadius: 12,
          display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 10, gap: 10,
          position: "absolute", left: "calc(50% - 159px/2)", top: 808,
        }}>
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
        </div>


      </div>
    </section>
  );
};
