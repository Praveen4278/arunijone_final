import React from "react";

const linkStyle: React.CSSProperties = {
  fontFamily: "'SF Pro Display', Helvetica",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "20px",
  color: "#FFFFFF",
  opacity: 0.7,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  height: 40.8,
  paddingLeft: 10.27,
  cursor: "pointer",
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const SiteFooterSection = (): React.JSX.Element => {
  return (
    <footer style={{ width: 1420, height: 361.28, position: "relative", flexShrink: 0 }}>
      {/* Background */}
      <div style={{
        position: "absolute", height: 361.28, left: 0, right: 0, top: 0,
        background: "#232323", borderRadius: 20,
      }} />

      {/* Logo — Frame 290: left:50, top:50, width:180, height:49 */}
      <div style={{ position: "absolute", width: 180, height: 49, left: 50, top: 50, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 50, height: 50, background: "#FFFFFF", borderRadius: 1000, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <img
            src="/figmaAssets/arunijone-logo-final-v1-3.svg"
            alt="Arunijone logo"
            style={{ width: 37.3, height: 31.67, objectFit: "cover" }}
          />
        </div>
        <span style={{
          fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 28,
          lineHeight: "28px", color: "#FFFFFF",
        }}>
          Arunijone
        </span>
      </div>

      {/* Primary nav — Frame 14: left:910.73, top:50.16, width:82.61, height:204 */}
      <nav aria-label="Primary" style={{ position: "absolute", width: 82.61, left: 910.73, top: 50.16 }}>
        {["Home", "About", "Service", "Blog"].map((label, i) => (
          <button
            key={label}
            onClick={() => scrollToSection(label.toLowerCase())}
            style={{ ...linkStyle, position: "absolute", left: 0, right: 0, top: i * 54.4, background: "none", border: "none" }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Services nav — Group 43: left:1043.34, top:50.16, width:131, height:204 */}
      <nav aria-label="Services" style={{ position: "absolute", width: 131, left: 1043.34, top: 50.16 }}>
        {["UX/UI", "Digital Marketing", "Equity Research", "Developement"].map((label, i) => (
          <button
            key={label}
            onClick={() => scrollToSection("service")}
            style={{ ...linkStyle, position: "absolute", left: 0, right: 0, top: i * 54.4, background: "none", border: "none" }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Company nav — Group 42: left:1224.34, top:50.16, width:145.34, height:203.87 */}
      <nav aria-label="Company" style={{ position: "absolute", width: 145.34, left: 1224.34, top: 50.16 }}>
        {[
          { label: "MyRameswaramTrip", href: "https://myrameswaramtrip.com" },
          { label: "Seafsoft", sectionId: "service" },
          { label: "Contact", sectionId: "contact" },
          { label: "FAQ", sectionId: "contact", bold: true },
        ].map((link, i) => (
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...linkStyle, position: "absolute", left: 0, right: 0, top: i * 54.4 }}
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.label}
              onClick={() => link.sectionId && scrollToSection(link.sectionId)}
              style={{
                ...linkStyle,
                position: "absolute", left: 0, right: 0, top: i * 54.4,
                background: "none", border: "none",
                fontWeight: link.bold ? 600 : 400,
                opacity: link.bold ? 1 : 0.7,
              }}
            >
              {link.label}
            </button>
          )
        ))}
      </nav>

      {/* Bottom bar */}
      {/* "Designed by Arunijone" — left:50.62, top:292 */}
      <p style={{
        position: "absolute", left: 50.62, top: 292,
        fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 14,
        lineHeight: "18px", color: "#FFFFFF", margin: 0,
      }}>
        Designed by Arunijone
      </p>

      {/* Copyright — centered horizontally, top:292.16 */}
      <p style={{
        position: "absolute", width: 222, left: "calc(50% - 111px)", top: 292.16,
        fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 14,
        lineHeight: "18px", color: "#FFFFFF", margin: 0, textAlign: "center", whiteSpace: "nowrap",
      }}>
        © 2025 Arunijone. All rights reserved.
      </p>

      {/* Social icons row — Frame 280: left:965.7, top:282.24, width:403.78, height:38.22 */}
      <img
        src="/figmaAssets/frame-280.svg"
        alt="Social media links"
        style={{ position: "absolute", width: 403.78, height: 38.22, right: 50.62, top: 282.24 }}
      />
    </footer>
  );
};
