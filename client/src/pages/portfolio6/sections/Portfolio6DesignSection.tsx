import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

const MOCKUP_BASE = "/figmaAssets/portfolio6";

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
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: 14,
          }}
        />
      </div>
    </div>
  );
}

type Row = {
  mockup: string;
  text: string;
  mockupLeft: boolean;
};

const rows: Row[] = [
  {
    mockup: `${MOCKUP_BASE}/mockup_1_search.png`,
    text: "Explore and filter available rooms by dates, guests, location, price, and preferences to quickly find the stay that best fits your needs.",
    mockupLeft: true,
  },
  {
    mockup: `${MOCKUP_BASE}/mockup_2_detail.png`,
    text: "View room photos, amenities, pricing, availability, reviews, and essential details in one place—helping users compare their options and make a confident booking decision.",
    mockupLeft: false,
  },
  {
    mockup: `${MOCKUP_BASE}/mockup_3_amenities.png`,
    text: "Explore room amenities and facilities at a glance, from Wi-Fi and room service to pools, parking, accessibility, and more—helping users choose a stay that fits their needs.",
    mockupLeft: true,
  },
  {
    mockup: `${MOCKUP_BASE}/mockup_4_booking.png`,
    text: "Review your selected room, stay dates, guests, amenities, and complete price breakdown in one place before confirming your reservation.",
    mockupLeft: false,
  },
  {
    mockup: `${MOCKUP_BASE}/mockup_5_card.png`,
    text: "Compare room options at a glance with photos, pricing, ratings, amenities, and essential details—all presented in a simple booking card designed for quick decisions.",
    mockupLeft: true,
  },
];

export default function Portfolio6DesignSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "stretch",
          alignItems: "stretch",
          gap: 50,
        }}
      >
        <div
          style={{
            width: 1420,
            alignSelf: "center",
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
              width: 1322,
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
                website design
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "stretch",
                gap: 511,
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
                    width: 375,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  A simpler way to discover and book stays
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
                  width: 413,
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
                    width: 404,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  The Resora website makes room discovery and booking simple,
                  intuitive, and effortless, guiding users smoothly from
                  browsing to reservation.
                </span>
              </div>
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
            {rows.map(({ mockup, text, mockupLeft }, idx) => (
              <div
                key={idx}
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
                  {mockupLeft ? (
                    <>
                      <MockupCard src={mockup} />
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
                            {text}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
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
                            {text}
                          </span>
                        </div>
                      </div>
                      <MockupCard src={mockup} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg"
        heading="Key milestones and outcomes of the project"
        description="The Resora website was designed to simplify the room discovery and booking journey, creating a clear and intuitive experience from searching for a stay to completing a reservation."
        keyAchievementBody="Designed a user-friendly booking interface for discovering, comparing, and selecting rooms with ease."
        clientImpactBody="Created a smoother booking experience that improves usability, clarity, and confidence throughout the reservation journey."
      />

      <PillQuoteSection
        solidLine="The Resora website was designed with a user-first approach, focusing on making room discovery and booking simple and intuitive."
        mutedLine="Each screen was crafted to present essential information clearly, from room search and filters to room details and booking, creating a smooth and confident experience throughout the journey."
        textWidth={843}
        textHeight={210}
        outerWidth={1415}
        outerMinHeight={410}
        outerPaddingX={309}
      />

      <PillFaqSection
        faqHeading="Resora – Marketing Strategy & Digital Growth"
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
