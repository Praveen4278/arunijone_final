import React from "react";

export const ServiceShowcaseSection = (): React.JSX.Element => {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      style={{ width: 1420, height: 856, background: "#F6F7F9", borderRadius: 20, position: "relative", flexShrink: 0 }}
    >
      <div style={{
        position: "absolute", width: 1327.18, left: 46.82, top: 49,
        display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 28,
      }}>

        {/* Badge */}
        <div style={{
          width: 123, height: 38, border: "0.88934px solid #202833", borderRadius: 225.145,
          display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box",
        }}>
          <span style={{
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 14,
            lineHeight: "20px", letterSpacing: 1.96989, textTransform: "uppercase", color: "#202833",
            whiteSpace: "nowrap",
          }}>About us</span>
        </div>

        {/* Header row */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 301, width: 1327.18, height: 82 }}>
          <h2 id="about-heading" style={{
            width: 553, height: 78, margin: 0,
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 36,
            lineHeight: "38px", color: "#111111",
            display: "flex", alignItems: "center",
          }}>
            Unlocking creativity, strategy, and innovation for every business
          </h2>
          <p style={{
            width: 473, height: 82, margin: 0,
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16,
            lineHeight: "22px", color: "rgba(109,109,110,0.8)",
            display: "flex", alignItems: "center",
          }}>
            Backed by over three years of continuous innovation and research-led strategies, we provide personalized, proactive support to ensure 100% client satisfaction.
          </p>
        </div>

        {/* Frame 1171276999: w:1327.18, h:578.83 */}
        <div style={{ width: 1327.18, height: 578.83, position: "relative", flexShrink: 0 }}>

          {/* R1C1: image-259 — left:0, top:0, right:50.57%, bottom:51.29% */}
          <div style={{ position: "absolute", left: "0%", right: "50.57%", top: "0%", bottom: "51.29%", borderRadius: 22.5181, overflow: "hidden" }}>
            <img src="/figmaAssets/image-259.png" alt="" style={{ position: "absolute", width: 924, height: 397, left: "50%", top: -49, transform: "translateX(-50%)" , objectFit: "cover" }} />
            <img src="/figmaAssets/Gemini_Generated_Image_7md0ic7md0ic7md0.png" alt="" style={{ position: "absolute", visibility: "hidden", width: 691, height: 331, left: -6.82, top: -26.8 }} />
          </div>

          {/* R1C2: dark card "3+" — left:670.68, right:335.17, top:0, h:281.94 */}
          <div style={{
            position: "absolute", left: 670.68, right: 335.17, top: 0, height: 281.94,
            background: "#232323", borderRadius: 18.7651,
          }}>
            <p style={{ position: "absolute", left: 18.76, top: 17.87, width: 76.11, height: 54.25, margin: 0, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 46, lineHeight: "54px", color: "#FFFFFF", display: "flex", alignItems: "center" }}>3+</p>
            <p style={{ position: "absolute", left: 18.5, top: 150.2, width: 283, height: 111, margin: 0, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#FFFFFF", display: "flex", alignItems: "center" }}>
              Years of continuous innovation and valuable insights, helping businesses improve their digital presence, design better products, and make informed decisions through research-led strategies.
            </p>
          </div>

          {/* R1C3: testimonial — left:75.85%, right:0, top:0, bottom:51.29% */}
          <div style={{ position: "absolute", left: "75.85%", right: 0, top: 0, bottom: "51.29%", borderRadius: 22.5181, overflow: "hidden", background: "#C5C6C7" }}>
            <img src="/figmaAssets/testimonial-1.png" alt="" style={{ position: "absolute", width: 320.33, height: 281.94, left: 0, top: 0, objectFit: "cover" }} />
          </div>

          {/* R2C1: blue card "100%" — left:0, right:50.57%, top:51.3%, bottom:0 */}
          <div style={{
            position: "absolute", left: 0, right: "50.57%", top: "51.3%", bottom: 0,
            background: "#0161FE", borderRadius: 18.7651,
          }}>
            {/* SVG icon: left:18.76, top:18.76, w:48.78, h:48.78 */}
            <div style={{ position: "absolute", left: 18.76, top: 18.76, width: 48.78, height: 48.78 }}>
              <img src="/figmaAssets/about_section_icon.svg" alt="" style={{ position: "absolute", left: 0, top: 0, width: 48.78, height: 48.78 }} />
            </div>
            <p style={{ position: "absolute", left: 19.18, top: 119.26, width: 123, height: 55, margin: 0, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 46, lineHeight: "54px", color: "#FFFFFF", display: "flex", alignItems: "center" }}>100%</p>
            <p style={{ position: "absolute", left: 19.18, top: 200.26, width: 609, height: 62, margin: 0, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#FFFFFF", display: "flex", alignItems: "center" }}>
              Client satisfaction achieved through personalized solutions, proactive support, and a commitment to understanding each client's unique requirements. My focus on excellence ensures that your success remains the priority at every step.
            </p>
          </div>

          {/* R2C2: image — left:50.57%, right:25.28%, top:51.3%, bottom:0 */}
          <div style={{ position: "absolute", left: "50.57%", right: "25.28%", top: "51.3%", bottom: 0, borderRadius: 22.5181, overflow: "hidden", background: "rgba(0,0,0,0.2)" }}>
            <img src="/figmaAssets/testimonial-1.png" alt="" style={{ position: "absolute", width: 320, height: 320, left: -0.1, top: 0.05, objectFit: "cover" }} />
          </div>

          {/* R2C3: image-257 — left:75.85%, right:0, top:51.3%, bottom:0 */}
          <div style={{ position: "absolute", left: "75.85%", right: 0, top: "51.3%", bottom: 0, borderRadius: 22.5181, overflow: "hidden", background: "rgba(0,0,0,0.2)" }}>
            <img src="/figmaAssets/image-257.png" alt="" style={{ position: "absolute", width: 320, height: 320, left: 0.36, top: 0.05, objectFit: "cover" }} />
          </div>

        </div>
      </div>
    </section>
  );
};
