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

export default function Portfolio8MarketingSection() {
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
                Product Visibility. Social Media Growth. Creative Marketing That Connects.
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
                Showcase Thendral Supermarket’s products through engaging social media campaigns, creative product videos, and promotional content designed to increase reach, engagement, and customer interest.
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
                      Track ad performance, audience engagement, reach, and campaign results across social media platforms.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png"
        heading="Key milestones and outcomes of the project"
        description="This project focused on promoting Thendral Supermarket's product range through creative visual content and targeted social media marketing."
        keyAchievementBody="Created product-focused videos and promotional creatives highlighting groceries, biscuits, beverages, and everyday essentials."
        clientImpactBody="Increased product visibility and strengthened social media presence through consistent, engaging, and customer-focused marketing."
      />

      <PillQuoteSection
        solidLine="This project was approached with a data-driven mindset, focusing on understanding hospitality procurement dynamics and B2B buyer decision-making."
        mutedLine="Through understanding GCC economic diversification, hotel expansion pipelines, and B2B buyer decision-making processes, this marketing framework positions Midco Kuwait as an essential partner in hospitality infrastructure development."
        textWidth={843}
        textHeight={210}
        outerWidth={1415}
        outerMinHeight={410}
        outerPaddingX={309}
      />

      <PillFaqSection
        faqHeading="Midco Kuwait – Strategic B2B Marketing & Market Positioning"
        activeRow={{
          leftLabel: "Overview",
          rightQuestion: "What is the Midco Kuwait marketing strategy about?",
          active: true,
          answerText: "This project focuses on strategic B2B marketing positioning for Midco Kuwait, showcasing their comprehensive hospitality supplies, ERP solutions, and market leadership. The goal is to establish Midco Kuwait as a trusted partner for hospitality businesses seeking premium supplies and innovative inventory management solutions.",
        }}
        row2={{
          leftLabel: "Market Research Approach",
          rightQuestion: "What market research methods were used in this project?",
        }}
        row3={{
          leftLabel: "Strategic Positioning",
          rightQuestion: "What key positioning strategies were developed?",
        }}
      />
    </div>
  );
}
