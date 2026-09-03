import React from "react";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section style={{
      display: "flex", flexDirection: "column", alignItems: "flex-start",
      padding: 0, gap: 14, width: 1420, height: 916, flexShrink: 0,
    }}>
      <div style={{
        width: 1420, height: 916, background: "#FEFEFE",
        borderRadius: 20.4131, position: "relative", overflow: "hidden", flexShrink: 0,
      }}>

        {/* Headshot */}
        <img
          src="/figmaAssets/image-266.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            height: 1040,
            left: "20.49%",
            right: "-12.25%",
            top: "calc(50% - 520px + 130px)",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            objectFit: "cover",
          }}
        />

        {/* Frame 250: left:42, top:calc(50% - 356px/2), w:551, h:356, flex col gap:40 */}
        <div style={{
          position: "absolute", width: 551, height: 356,
          left: 42, top: "calc(50% - 178px)",
          display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 40,
        }}>

          {/* Heading: w:551, h:261, SF Pro Display 500 81px 90px */}
          <h1 style={{
            margin: 0, width: 551, height: 261,
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 81,
            lineHeight: "90px", color: "#111111", whiteSpace: "nowrap",
          }}>For Those Who<br />Demand #1<br />Quality</h1>

          {/* Frame 249: buttons row, w:350, h:55, gap:16 */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16, width: 350, height: 55 }}>

            {/* My NGO button — blue pill, w:134, h:55 */}
            <button style={{
              width: 134, height: 55, background: "#0161FE", borderRadius: 85.0435,
              border: "none", cursor: "pointer", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                display: "flex", flexDirection: "row", alignItems: "center", gap: 10,
              }}>
                <span style={{
                  fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16,
                  lineHeight: "18px", color: "#FFFFFF", whiteSpace: "nowrap",
                }}>My NGO</span>
                <img
                  src="/figmaAssets/vector.svg"
                  alt=""
                  aria-hidden="true"
                  style={{ width: 13.64, height: 10 }}
                />
              </div>
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};
