import PillMilestoneSection from "./PillMilestoneSection";
import PillQuoteSection from "./PillQuoteSection";
import PillFaqSection from "./PillFaqSection";
import type { PillMilestoneTexts } from "./PillMilestoneSection";
import type { PillQuoteTexts } from "./PillQuoteSection";
import type { PillFaqTexts } from "./PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description:
    "The website design significantly improved the travel planning process for Rameswaram visitors through targeted research, usability analysis, and clear visual design.",
  keyAchievementBody:
    "Improved clarity and navigation by restructuring content around user needs and logical journeys.",
  clientImpactBody:
    "Delivered a smoother, intuitive experience for confident trip planning and temple service access.",
};

const quote: PillQuoteTexts = {
  solidLine:
    "My Rameswaram Trip was designed with a deep understanding of its users.",
  mutedLine:
    "Through extensive research, user journey mapping, and usability testing, we built a website that bridges the gap between logistical travel planning and the spiritual significance of temple visits. Our focus on intuitive design and accessibility ensures a trustworthy, frictionless experience from start to finish.",
};

const faq: PillFaqTexts = {
  faqHeading: "Responsive Web Design and Mobile Accessibility",
  activeRow: {
    leftLabel: "Booking Flow",
    rightQuestion:
      "How does the attraction booking flow design reduce cognitive friction?",
    active: true,
    answerText:
      "The booking flow minimizes cognitive friction by decomposing complex logistical permutations into four strictly sequential tasks - Browse, Compare, Review Details, and Confirm Booking. It enforces dependency validation so users must select an attraction before time slots appear, and presents a highly visible three-step mental model on-screen before the first click, eliminating surprises and preventing unrecoverable upstream form errors.",
  },
  row2: {
    leftLabel: "Screen Architecture",
    rightQuestion: "Which key screens make up the website design system?",
  },
  row3: {
    leftLabel: "Error Prevention",
    rightQuestion:
      "What design patterns prevent errors during the booking process?",
  },
};

export default function DesignSection({ logoSrc }: { logoSrc?: string }) {
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
          padding: "55px 41.5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 100,
          boxSizing: "border-box",
        }}
      >
      {/* Header */}
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
            width: 177,
            height: 38,
            border: "0.969561px solid #202833",
            borderRadius: 236.844,
          }}
        >
          <span
            style={{
              fontFamily: "'SF Pro Display'",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "2.07195px",
              textTransform: "uppercase",
              color: "#202833",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              width: 137,
              height: 20,
            }}
          >
            website design
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 389,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px 10px 10px 0px",
              gap: 10,
              width: 519,
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
                width: 492,
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              The Attraction Booking Flow Screen
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
              The primary objective of this screen is to minimize cognitive friction by breaking down complex logistical permutations
            </span>
          </div>
        </div>
      </div>

      {/* Row 1: Image Left + Text Right */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 90,
            }}
          >
              {/* Left: Image Container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  gap: 10,
                  width: 612,
                  background: "#FFFFFF",
                  borderRadius: 23.6864,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                    height: 426,
                  }}
                >
                  <img
                    src="/assets/portfolio/creative/creative_image_275_4cb19c.png"
                    alt=""
                    style={{
                      width: 551,
                      height: 389,
                      objectFit: "fill",
                      border: "15px solid #F7F9FD",
                      borderRadius: 20,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
              {/* Right: Text */}
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
                      width: 508,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Explore trusted pujas, temple rituals, tours, and local services for a meaningful Rameswaram journey.
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Row 2: Text Left + Image Right */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 90,
            }}
          >
              {/* Left: Text */}
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
                      width: 498,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Browse traditional pujas and rituals, compare services, and choose the right ceremony for your occasion.
                  </span>
                </div>
              </div>
              {/* Right: Image Container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  gap: 10,
                  width: 612,
                  background: "#FFFFFF",
                  borderRadius: 23.6864,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                  }}
                >
                  <img
                    src="/assets/portfolio/creative/creative_image_274_616651.png"
                    alt=""
                    style={{
                      width: 575,
                      height: 297.7,
                      objectFit: "fill",
                      border: "15px solid #F7F9FD",
                      borderRadius: 20,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Row 3: Image Left + Text Right */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 90,
            }}
          >
              {/* Left: Image Container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  gap: 10,
                  width: 612,
                  background: "#FFFFFF",
                  borderRadius: 23.6864,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                    height: 426,
                  }}
                >
                  <img
                    src="/assets/portfolio/creative/creative_image_276.png"
                    alt=""
                    style={{
                      width: 571,
                      height: 384,
                      objectFit: "cover",
                      border: "15px solid #F7F9FD",
                      borderRadius: 20,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
              {/* Right: Text */}
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
                    Explore puja benefits, rituals, timings, inclusions, and pandit details before making your booking.
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Row 4: Text Left + Image Right */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 90,
            }}
          >
              {/* Left: Text */}
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
                      width: 494,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Provide your preferred date, devotee details, and booking information to arrange your puja seamlessly.
                  </span>
                </div>
              </div>
              {/* Right: Image Container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  gap: 10,
                  width: 612,
                  background: "#FFFFFF",
                  borderRadius: 23.6864,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                  }}
                >
                  <img
                    src="/assets/portfolio/creative/creative_image_277.png"
                    alt=""
                    style={{
                      width: 399,
                      height: 390,
                      objectFit: "cover",
                      border: "15px solid #F7F9FD",
                      borderRadius: 20,
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      <PillMilestoneSection {...milestone} mockupImageSrc={logoSrc ?? milestone.mockupImageSrc} />
      <PillQuoteSection {...quote} />
      <PillFaqSection {...faq} />
    </div>
  );
}
