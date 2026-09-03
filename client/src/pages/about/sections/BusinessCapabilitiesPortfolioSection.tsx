import React, { useState } from "react";

export const BusinessCapabilitiesPortfolioSection = ({ badgeLabel = "Project gallery" }: { badgeLabel?: string }): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState("Overview");

  const pillStyle = (key: string, width: number): React.CSSProperties => ({
    display: "flex", flexDirection: "row", alignItems: "center",
    padding: "17px 24px", gap: 24,
    width, height: 77.72, boxSizing: "border-box",
    background: activeBtn === key ? "#0161FE" : "#FFFFFF",
    border: "none", borderRadius: 23.6864, cursor: "pointer", flexShrink: 0,
  });

  const iconBg = (key: string): React.CSSProperties => ({
    width: 43.72, height: 43.72, flexShrink: 0, borderRadius: 38, position: "relative",
    background: activeBtn === key ? "rgba(255,255,255,0.3)" : "#0161FE",
  });

  const labelStyle = (key: string, width: number): React.CSSProperties => ({
    width, height: 30,
    fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
    fontSize: 20, lineHeight: "30px",
    display: "flex", alignItems: "center", textTransform: "capitalize",
    color: activeBtn === key ? "#FFFFFF" : "#0161FE",
  });

  return (
    <div style={{
      position: "relative", overflow: "hidden",
      width: 1420, height: 366,
      background: "#F6F7F9", borderRadius: 23.6864,
      flexShrink: 0,
    }}>
      {/* Frame 1171277001 */}
      <div style={{ position: "absolute", width: 1015, height: 266, left: 203, top: 50 }}>

        {/* Frame 114 — badge */}
        <div style={{
          position: "absolute",
          left: "50%", top: 0,
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          padding: 0, gap: 10,
        }}>
          <div style={{
            boxSizing: "border-box",
            display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
            padding: "9px 20px", gap: 10,
            width: 195, height: 38,
            border: "0.969561px solid #202833", borderRadius: 236.844,
          }}>
            <span style={{
              fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 500,
              fontSize: 14, lineHeight: "20px",
              width: 155, height: 20,
              display: "flex", alignItems: "center", textAlign: "center",
              letterSpacing: 2.07195, textTransform: "uppercase", color: "#202833",
              whiteSpace: "nowrap",
            }}>
              {badgeLabel}
            </span>
          </div>
        </div>

        {/* Heading */}
        <span style={{
          position: "absolute",
          width: 354, height: 70,
          left: "calc(50% - 177px)", top: 76,
          fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
          fontSize: 36, lineHeight: "42px",
          display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center",
          color: "#111111",
        }}>
          Transforming Ideas into Digital Products
        </span>

        {/* Frame 1171277051 — pills row */}
        <div style={{ position: "absolute", width: 1015, height: 78, left: 0, top: 186 }}>
          {/* Frame 117 > Frame 115 */}
          <div style={{
            position: "absolute",
            width: 658, height: 77.72,
            left: "calc(50% - 329px)", top: 0,
            display: "flex", flexDirection: "row", alignItems: "center",
            padding: 0, gap: 20,
          }}>

            {/* Overview — active by default */}
            <div onClick={() => setActiveBtn("Overview")} style={pillStyle("Overview", 194.72)}>
              <div style={iconBg("Overview")}>
                <img src="/assets/about/images/vector_20.svg" alt=""
                  style={{ position: "absolute", width: 16.69, height: 24, left: 14, top: 10 }} />
              </div>
              <span style={labelStyle("Overview", 79)}>Overview</span>
            </div>

            {/* Website */}
            <div onClick={() => setActiveBtn("Website")} style={pillStyle("Website", 184.72)}>
              <div style={iconBg("Website")}>
                <div style={{ position: "absolute", overflow: "hidden", width: 21, height: 21, left: "calc(50% - 10.5px)", top: "calc(50% - 10.5px)" }}>
                  <img src="/assets/about/images/vector_21.svg" alt=""
                    style={{ position: "absolute", left: 0, top: 0, width: "95.45%", height: "95.45%" }} />
                </div>
              </div>
              <span style={labelStyle("Website", 69)}>Website</span>
            </div>

            {/* Mobile App */}
            <div onClick={() => setActiveBtn("Mobile App")} style={pillStyle("Mobile App", 211.72)}>
              <div style={iconBg("Mobile App")}>
                <div style={{ position: "absolute", overflow: "hidden", width: 21, height: 21, left: "calc(50% - 10.5px)", top: "calc(50% - 10.5px)" }}>
                  <img src="/assets/about/images/vector_21.svg" alt=""
                    style={{ position: "absolute", left: 0, top: 0, width: "95.45%", height: "95.45%" }} />
                </div>
              </div>
              <span style={labelStyle("Mobile App", 96)}>Mobile App</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
