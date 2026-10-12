import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

const MOCKUP_BASE = "/figmaAssets/portfolio7";

function MockupCard({ src }: { src: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 10,
        width: 612,
        background: "#FFFFFF",
        borderRadius: 23.6864,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          gap: 10,
          height: 426,
          boxSizing: "border-box",
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: 433,
            height: 394,
            objectFit: "cover",
            border: "15px solid #F7F9FD",
            borderRadius: 10,
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

export default function Portfolio7MarketingSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 50,
      }}
    >
      <div
        style={{
          width: 1420,
          background: "#FFFFFF",
          borderRadius: 23.6864,
          padding: "55px 49px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 60,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 15,
            width: "100%",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "9px 20px",
              gap: 10,
              border: "0.969561px solid #202833",
              borderRadius: 236.8444,
            }}
          >
            <span
              style={{
                fontFamily: "'SF Pro Display'",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "19.61px",
                letterSpacing: "0.148em",
                textTransform: "uppercase",
                color: "#202833",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              marketing
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "stretch",
              gap: 298,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px 10px 10px 0px",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 35,
                  lineHeight: "34.01px",
                  color: "#111111",
                  width: 536,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Data-Driven Marketing. Measurable Growth. Stronger Reach.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                gap: 10,
                width: 495,
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "23.69px",
                  color: "rgba(109, 109, 110, 0.8)",
                  width: 464,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Discover how marketing strategies and performance analytics
                helped Midco Kuwait improve product visibility, understand
                audience engagement, and strengthen its digital presence.
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: 60,
              width: 1337,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 426,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1337,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 90,
                }}
              >
                <MockupCard src={`${MOCKUP_BASE}/marketing_mockup_1.png`} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    gap: 40,
                    width: 636,
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'SF Pro Display'",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 36,
                        lineHeight: "45px",
                        color: "#111111",
                        width: 522,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Track Meta post performance, audience engagement, reach,
                      and content results to measure the effectiveness of Midco
                      Kuwait's social media marketing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png"
        heading="Key milestones and outcomes of the project"
        description="This project was approached with a data-driven mindset, focusing on understanding audience behavior and measuring marketing performance."
        keyAchievementBody="Through understanding GCC economic diversification, hotel expansion pipelines, and B2B buyer decision-making processes, this marketing framework positions suppliers as essential partners in hospitality infrastructure development."
        clientImpactBody="Improved market positioning and decision-making through data-driven insights and strategic marketing frameworks."
      />

      <PillQuoteSection
        solidLine="This project was approached with a data-driven mindset, focusing on understanding audience behavior and measuring marketing performance."
        mutedLine="Through understanding GCC economic diversification, hotel expansion pipelines, and B2B buyer decision-making processes, this marketing framework positions suppliers as essential partners in hospitality infrastructure development."
        textWidth={843}
        textHeight={210}
        outerWidth={1415}
        outerMinHeight={410}
        outerPaddingX={309}
      />

      <PillFaqSection
        faqHeading="Midco Kuwait – Digital Marketing, Performance & Growth"
        activeRow={{
          leftLabel: "Overview",
          rightQuestion: "What is the My Rameswaram Trip UX/UI project about?",
          active: true,
          answerText:
            "This Project Focuses On Designing A User-Centered Digital Platform That Combines Pilgrimage Services And Travel Planning For Rameswaram. The Goal Is To Create A Seamless Experience For Devotees And Travelers By Simplifying Temple Services, Travel Bookings, And Local Guidance Through An Intuitive And Respectful Interface.",
        }}
        row2={{
          leftLabel: "UX Research Approach",
          rightQuestion: "What UX research methods were used in this project?",
        }}
        row3={{
          leftLabel: "User Problems Identified",
          rightQuestion: "What key user problems did the research uncover?",
        }}
      />
    </div>
  );
}
