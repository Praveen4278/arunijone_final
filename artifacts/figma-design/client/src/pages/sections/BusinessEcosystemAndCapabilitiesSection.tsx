import React, { useState } from "react";

const pillBase: React.CSSProperties = {
  display: "flex", flexDirection: "row", alignItems: "center",
  padding: "17px 24px", gap: 24, height: 77.72, borderRadius: 23.6864,
  border: "none", cursor: "pointer",
};

const iconBase: React.CSSProperties = {
  width: 43.72, height: 43.72, borderRadius: 38, flexShrink: 0,
  display: "flex", alignItems: "center", justifyContent: "center",
};

const labelBase: React.CSSProperties = {
  fontFamily: "'SF Pro', Helvetica", fontWeight: 400, fontSize: 20,
  lineHeight: "30px", letterSpacing: -0.592402, textTransform: "capitalize",
};

interface PillItem { label: string; icon: string; width?: number; fontSize?: number; }

interface SectionPanelProps {
  badge: string;
  badgeWidth: number;
  title: string;
  titleWidth: number;
  items: PillItem[];
  selected: string;
  onSelect: (s: string) => void;
  height: number;
}

const SectionPanel = ({ badge, badgeWidth, title, titleWidth, items, selected, onSelect, height }: SectionPanelProps) => (
  <section style={{
    width: 1420, height, background: "#F6F7F9", borderRadius: 20.4131,
    position: "relative", flexShrink: 0,
  }}>
    {/* Inner frame: 1336.32×265.72, left:42, top:49.72 */}
    <div style={{
      position: "absolute", width: 1336.32, left: 42, top: 49.72,
      display: "flex", flexDirection: "column", alignItems: "center", gap: 40,
    }}>
      {/* Badge */}
      <div style={{
        width: badgeWidth, height: 36, border: "0.969561px solid #202833",
        borderRadius: 236.844, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "9px 20px", boxSizing: "border-box",
      }}>
        <span style={{
          fontFamily: "'SF Pro', Helvetica", fontWeight: 510, fontSize: 14,
          lineHeight: "18px", letterSpacing: 1.79, textTransform: "uppercase", color: "#202833",
          whiteSpace: "nowrap",
        }}>{badge}</span>
      </div>

      {/* Heading */}
      <h2 style={{
        width: titleWidth, height: 72, margin: 0,
        fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 36,
        lineHeight: "42px", color: "#111111", textAlign: "center",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {title}
      </h2>

      {/* Pills row */}
      <div style={{
        display: "flex", flexDirection: "row", justifyContent: "center",
        alignItems: "center", gap: 20, width: 1336.32, height: 77.72,
      }}>
        {items.map((item) => {
          const active = selected === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onSelect(item.label)}
              style={{
                ...pillBase,
                width: item.width,
                background: active ? "#0161FE" : "#FFFFFF",
              }}
            >
              <div style={{ ...iconBase, background: active ? "#4D90FE" : "#0161FE" }}>
                <img src={item.icon} alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain" }} />
              </div>
              <span style={{ ...labelBase, color: active ? "#FFFFFF" : "#0161FE", ...(item.fontSize ? { fontSize: item.fontSize } : {}) }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </section>
);

const ecosystemItems: PillItem[] = [
  { label: "Products",  icon: "/figmaAssets/svg-3.svg", width: 194.72 },
  { label: "Services",  icon: "/figmaAssets/svg-1.svg", width: 190.72 },
  { label: "Partners",  icon: "/figmaAssets/svg-5.svg", width: 189.72 },
];

const expertiseItems: PillItem[] = [
  { label: "Research",         icon: "/figmaAssets/svg.svg",   width: 192.72 },
  { label: "Design",           icon: "/figmaAssets/svg-4.svg", width: 192.72 },
  { label: "Development",      icon: "/figmaAssets/svg-2.svg", width: 192.72, fontSize: 16 },
  { label: "Creative",         icon: "/figmaAssets/svg-9.svg", width: 192.72 },
  { label: "Marketing",        icon: "/figmaAssets/svg-7.svg", width: 192.72 },
];

export const BusinessEcosystemAndCapabilitiesSection = (): React.JSX.Element => {
  const [selectedEco, setSelectedEco] = useState("Services");
  const [selectedExp, setSelectedExp] = useState("Design");

  return (
    <div style={{ width: 1420, height: 783, display: "flex", flexDirection: "column", gap: 50, flexShrink: 0 }}>
      <SectionPanel
        badge="OUR ECOSYSTEM"
        badgeWidth={189}
        title="Explore Our Business Ecosystem"
        titleWidth={466}
        items={ecosystemItems}
        selected={selectedEco}
        onSelect={setSelectedEco}
        height={367}
      />
      <SectionPanel
        badge="OUR EXPERTISE"
        badgeWidth={176}
        title="Our Core Capabilities & Expertise"
        titleWidth={466}
        items={expertiseItems}
        selected={selectedExp}
        onSelect={setSelectedExp}
        height={366}
      />
    </div>
  );
};
