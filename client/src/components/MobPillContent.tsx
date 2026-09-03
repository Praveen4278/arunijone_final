import React from "react";
import { useLocation } from "wouter";

export interface MobPillContentData {
  // Temple image
  mockupImageSrc?: string;
  // Milestone
  milestoneHeading: string;
  milestoneDescription: string;
  keyAchievementBody: string;
  clientImpactBody: string;
  // Quote
  quoteSolid: string;
  quoteMuted: string;
  // FAQ
  faqHeading: string;
  activeLabel: string;
  activeQuestion: string;
  activeAnswer: string;
  row2Label: string;
  row2Question: string;
  row3Label: string;
  row3Question: string;
}

export default function MobPillContent({ data }: { data: MobPillContentData }) {
  const [, navigate] = useLocation();
  return (
    <>
      {/* MILESTONE WRAPPER — silver bg starts here, wraps temple card + milestone content */}
      <div
        style={{
          width: "100%",
          background: "#F6F7F9",
          borderRadius: 22,
          padding: "30px 12px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >

      {/* TEMPLE IMAGE CARD */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {/* Container */}
        <div
          style={{
            boxSizing: "border-box",
            width: 360.7,
            height: 366,
            background: "#FFFFFF",
            border: "0.442029px solid #C5C6C7",
            borderRadius: 13.9601,
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Image Box */}
          <div
            style={{
              position: "absolute",
              width: 360.7,
              height: 366,
              left: "calc(50% - 180.35px)",
              top: "calc(50% - 183px)",
              background: "#FEFEFE",
              borderRadius: 13.9601,
            }}
          />
          {/* Frame 103 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 5.89372,
              gap: 5.89,
              position: "absolute",
              width: 360.7,
              height: 366,
              left: 0,
              top: 0,
            }}
          >
            {/* Image Paste Frame */}
            <div
              style={{
                width: 348.91,
                height: 354.21,
                alignSelf: "stretch",
                flexGrow: 0,
                position: "relative",
                overflow: "hidden",
                borderRadius: 9,
              }}
            >
              {/* Frame 105 — centered image */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "18.2705px 55.401px 18.2705px 34.1836px",
                  gap: 5.89,
                  position: "absolute",
                  width: 349,
                  height: 357,
                  left: 5.76,
                  top: 1.62,
                }}
              >
                {/* image 25 */}
                <img
                  src={data.mockupImageSrc ?? "/assets/portfolio/images/image_26.png"}
                  alt=""
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 222,
                    left: "calc(50% - 90px)",
                    top: "calc(50% - 111px)",
                    objectFit: "cover",
                    flexShrink: 0,
                    zIndex: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MILESTONE */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              border: "1px solid #202833",
              borderRadius: 228,
              padding: "6px 16px",
              display: "inline-flex",
            }}
          >
            <span
              style={{
                fontFamily: "'SF Pro Display'",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: 1.716,
                textTransform: "uppercase",
                color: "#202833",
                whiteSpace: "nowrap",
              }}
            >
              Milestone
            </span>
          </div>
        </div>

        {/* Heading + Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span
            style={{
              fontFamily: "'SF Pro Display'",
              fontWeight: 400,
              fontSize: 26,
              lineHeight: "34px",
              color: "#111111",
              textAlign: "center",
            }}
          >
            {data.milestoneHeading}
          </span>
          <span
            style={{
              fontFamily: "'SF Pro Display'",
              fontWeight: 300,
              fontSize: 14,
              lineHeight: "22px",
              color: "rgba(17,17,17,0.8)",
              textAlign: "center",
            }}
          >
            {data.milestoneDescription}
          </span>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Key Achievement */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 15,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <img
              src="/assets/portfolio/images/milestone_new_icon.svg"
              alt=""
              style={{ width: 38, height: 38, objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "26px",
                  color: "#111111",
                  textAlign: "center",
                }}
              >
                Key Achievement
              </span>
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "22px",
                  color: "rgba(109,109,110,0.8)",
                  textAlign: "center",
                }}
              >
                {data.keyAchievementBody}
              </span>
            </div>
          </div>

          {/* Client Impact */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 15,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <img
              src="/assets/p1/images/client_impact_icon.svg"
              alt=""
              style={{ width: 38, height: 38, objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "26px",
                  color: "#111111",
                  textAlign: "center",
                }}
              >
                Client Impact
              </span>
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "22px",
                  color: "rgba(109,109,110,0.8)",
                  textAlign: "center",
                }}
              >
                {data.clientImpactBody}
              </span>
            </div>
          </div>
        </div>
      </div>

      </div>{/* end MILESTONE WRAPPER */}

      {/* QUOTE */}
      <div
        style={{
          width: "100%",
          padding: "30px 16px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "'SF Pro Display'",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "32px",
            textAlign: "center",
            display: "block",
          }}
        >
          <span style={{ color: "#111111" }}>{data.quoteSolid} </span>
          <span style={{ color: "rgba(17,17,17,0.6)" }}>{data.quoteMuted}</span>
        </span>
      </div>

      {/* FAQ */}
      <div
        style={{
          width: "100%",
          background: "#F6F7F9",
          borderRadius: 23,
          padding: "30px 16px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Badge */}
        <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", display: "inline-flex" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>FAQ</span>
        </div>

        {/* Heading */}
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 34, lineHeight: "42px", color: "#111111", textAlign: "center" }}>
          {data.faqHeading}
        </span>

        {/* View All button */}
        <div
          onClick={() => { navigate("/faq-details"); window.scrollTo(0, 0); }}
          style={{ background: "#0161FE", borderRadius: 95, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 20px" }}
        >
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 13, lineHeight: "20px", color: "#FFFFFF" }}>View All</span>
          <img src="/assets/faqmob/images/vector_10.svg" alt="" style={{ width: 20, height: 20 }} />
        </div>

        {/* Active FAQ card (blue) */}
        <div style={{ width: "100%", background: "#0161FE", borderRadius: 15, padding: "18px 16px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 22, lineHeight: "30px", color: "#FFFFFF", textAlign: "center", textTransform: "capitalize" }}>{data.activeLabel}</span>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "#FFFFFF", textAlign: "center" }}>{data.activeQuestion}</span>
        </div>

        {/* Active answer card (white) */}
        <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 15, padding: "18px 16px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 15, lineHeight: "26px", color: "#6D6D6E", textAlign: "center" }}>{data.activeAnswer}</span>
        </div>

        {/* Row 2 card */}
        <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 15, padding: "18px 16px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 22, lineHeight: "30px", color: "#111111", textAlign: "center", textTransform: "capitalize" }}>{data.row2Label}</span>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "rgba(17,17,17,0.6)", textAlign: "center" }}>{data.row2Question}</span>
        </div>

        {/* Row 3 card */}
        <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 15, padding: "18px 16px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 22, lineHeight: "30px", color: "#111111", textAlign: "center", textTransform: "capitalize" }}>{data.row3Label}</span>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 15, lineHeight: "24px", color: "rgba(17,17,17,0.6)", textAlign: "center" }}>{data.row3Question}</span>
        </div>
      </div>
    </>
  );
}
