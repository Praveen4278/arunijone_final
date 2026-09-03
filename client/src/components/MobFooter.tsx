import React from "react";
import { useLocation } from "wouter";

const MobFooter = () => {
  const [, navigate] = useLocation();

  return (
    <div
      id="_274_1158__Section"
      className="relative overflow-hidden w-full"
      style={{ height: 756 }}
    >
      <div
        id="_274_1159__Background"
        className="absolute left-[0.5px] right-[0.5px] top-0"
        style={{ height: 756, background: "#232323", borderRadius: 20 }}
      >
        {/* Logo circle */}
        <div style={{ position: "absolute", width: 50, height: 50, left: "calc(50% - 25px - 0.5px)", top: 40, background: "#FFFFFF", borderRadius: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/figmaAssets/arunijone-logo-final-v1-3.svg" alt="Arunijone" style={{ width: 37.3, height: 31.67, objectFit: "cover" }} />
        </div>

        {/* Arunijone text */}
        <span style={{ position: "absolute", width: 97, height: 25, left: "calc(50% - 48.5px)", top: 105, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 24, lineHeight: "28px", display: "flex", alignItems: "center", color: "#FFFFFF" }}>
          Arunijone
        </span>

        {/* Left nav: Home / About / Explore / Blog — left:23, top:180 */}
        <div style={{ position: "absolute", width: 116, left: 23, top: 180 }}>
          {[
            { label: "Home",    w: 65.86, top: 0,      path: "/" },
            { label: "About",   w: 70.08, top: 45.75,  path: "/about" },
            { label: "Explore", w: 69.79, top: 91.5,   path: "/explore" },
            { label: "Blog",    w: 32.56, top: 137.25, path: "/blog" },
          ].map(({ label, w, top, path }) => (
            <div key={label} style={{ position: "absolute", height: 30.5, left: 0, right: 0.22, top, opacity: 0.7 }}>
              <span
                role="button" tabIndex={0}
                onClick={() => navigate(path)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(path)}
                style={{ position: "absolute", width: w, height: 19, left: 0, top: 4.82, fontFamily: label === "Explore" ? "Inter" : "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "22px", display: "flex", alignItems: "center", color: "#FFFFFF", cursor: "pointer" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Right nav: Research / Design / Development / Creative / Marketing — left:178, top:180 */}
        <div style={{ position: "absolute", width: 151, left: 178, top: 180 }}>
          {[
            { label: "Research",    w: 66.65, top: 0,      lft: 29.54 },
            { label: "Design",      w: 126,   top: 44.88,  lft: 28.62 },
            { label: "Development", w: 121,   top: 90.88,  lft: 28.62 },
            { label: "Creative",    w: 99,    top: 136.88, lft: 29.08 },
            { label: "Marketing",   w: 99,    top: 181.88, lft: 29.08 },
          ].map(({ label, w, top, lft }) => (
            <div key={label} style={{ position: "absolute", height: label === "Research" ? 30 : 31, left: lft, top, opacity: 0.7 }}>
              <span style={{ position: "absolute", width: w, height: 19, left: label === "Research" ? 0 : -0.92, top: label === "Research" ? 4.82 : label === "Design" ? 4.78 : label === "Development" ? 5.03 : 5.27, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "22px", display: "flex", alignItems: "center", color: "#FFFFFF" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Company links: MyRameswaramTrip / Contact / FAQ — left:23, top:363 */}
        <div style={{ position: "absolute", width: 154, left: 23, top: 363 }}>
          <div style={{ position: "absolute", height: 30, left: 0.13, right: -39.13, top: 0.27, opacity: 0.7 }}>
            <span
              role="button" tabIndex={0}
              onClick={() => window.open("https://myrameswaramtrip.com", "_blank")}
              style={{ position: "absolute", width: 154, height: 19, left: 0.13, top: 5.27, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "22px", display: "flex", alignItems: "center", color: "#FFFFFF", cursor: "pointer" }}
            >
              MyRameswaramTrip
            </span>
          </div>
          <div style={{ position: "absolute", height: 30.5, left: 0, right: 0.22, top: 45.27, opacity: 0.7 }}>
            <span
              role="button" tabIndex={0}
              onClick={() => navigate("/contact")}
              style={{ position: "absolute", width: 84.22, height: 19, left: 0, top: 4.82, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "22px", display: "flex", alignItems: "center", color: "#FFFFFF", cursor: "pointer" }}
            >
              Contact
            </span>
          </div>
          <div style={{ position: "absolute", height: 30.5, left: 0, right: 0.22, top: 90.77 }}>
            <span
              role="button" tabIndex={0}
              onClick={() => navigate("/faq")}
              style={{ position: "absolute", width: 64.85, height: 19, left: 0, top: 4.82, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "22px", display: "flex", alignItems: "center", color: "#FFFFFF", opacity: 0.7, cursor: "pointer" }}
            >
              FAQ
            </span>
          </div>
        </div>

        {/* Social icons row 1 — Frame 285: 5 icons, top:564.25 */}
        <div style={{ position: "absolute", width: 247.85, height: 43.17, left: "calc(50% - 247.85px/2 - 0.58px)", top: 564.25, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
          {[
            { src: "/assets/homemob/images/vector_26.svg", w: 16, h: 16 },
            { src: "/assets/homemob/images/vector_27.svg", w: 11, h: 19 },
            { src: "/assets/homemob/images/vector_28.svg", w: 19, h: 19 },
            { src: "/assets/homemob/images/vector_30.svg", w: 19, h: 15 },
            { src: "/assets/homemob/images/vector_31.svg", w: 19, h: 19 },
          ].map(({ src, w, h }, i) => (
            <div key={i} style={{ boxSizing: "border-box", width: 43.17, height: 43.17, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 45.77, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={src} alt="" style={{ width: w, height: h }} />
            </div>
          ))}
        </div>

        {/* Social icons row 2 — Frame 286: 3 icons, top:622.25 */}
        <div style={{ position: "absolute", width: 145.51, height: 43.17, left: "calc(50% - 145.51px/2 - 0.57px)", top: 622.25, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
          {[
            { src: "/assets/homemob/images/vector_32.svg", w: 20, h: 15 },
            { src: "/assets/homemob/images/vector_33.svg", w: 19, h: 19 },
            { src: "/assets/homemob/images/vector_34.svg", w: 17, h: 12 },
          ].map(({ src, w, h }, i) => (
            <div key={i} style={{ boxSizing: "border-box", width: 43.17, height: 43.17, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 45.77, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={src} alt="" style={{ width: w, height: h }} />
            </div>
          ))}
        </div>

        {/* Copyright — top:696 */}
        <div style={{ position: "absolute", width: 180, height: 20, left: "calc(50% - 180px/2 - 0.5px)", top: 696 }}>
          <span style={{ position: "absolute", width: 191, height: 16, left: "calc(50% - 191px/2 + 0.5px)", top: "calc(50% - 8px)", fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 13.4, lineHeight: "20px", display: "flex", alignItems: "center", color: "#FFFFFF" }}>
            © 2025 Arunijone. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
