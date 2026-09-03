import React from "react";

export const QualityCommitmentSection = (): React.JSX.Element => {
  return (
    <section style={{
      display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
      padding: "100px 309px", gap: 10,
      width: 1420, height: 256, flexShrink: 0,
      alignSelf: "stretch", boxSizing: "border-box",
    }}>
      <p style={{
        width: 760, height: 128, margin: 0,
        fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 30,
        lineHeight: "40px", textAlign: "center",
        display: "block", alignItems: "center", color: "#111111",
        flexShrink: 0,
      }}>
        This We deliver high-quality digital solutions while creating meaningful work <span style={{ color: "#7A7A7A" }}>opportunities for individuals with disabilities through our collaboration with </span>Arunijone Philanthropy.
      </p>
    </section>
  );
};
