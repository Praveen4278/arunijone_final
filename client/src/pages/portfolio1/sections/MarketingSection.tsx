import PillMilestoneSection from "./PillMilestoneSection";
import PillQuoteSection from "./PillQuoteSection";
import PillFaqSection from "./PillFaqSection";
import type { PillMilestoneTexts } from "./PillMilestoneSection";
import type { PillQuoteTexts } from "./PillQuoteSection";
import type { PillFaqTexts } from "./PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description:
    "This project strengthened the brand’s digital presence through strategic advertising, SEO optimization, social media campaigns, and performance-driven marketing.",
  keyAchievementBody:
    "Improved online visibility through targeted campaigns, optimized content, and data-driven marketing.",
  clientImpactBody:
    "Improved digital engagement by using performance insights to reach the right audience.",
};

const quote: PillQuoteTexts = {
  solidLine:
    "This project was approached with a performance-focused mindset, combining audience research, SEO, paid advertising, and social media marketing.",
  mutedLine:
    "Campaign performance was continuously analyzed to optimize reach, engagement, traffic, and conversions across digital channels.",
};

const faq: PillFaqTexts = {
  faqHeading: "Marketing Analytics and Conversion Tracking in Religious Travel",
  activeRow: {
    leftLabel: "Analytics Stack",
    rightQuestion:
      "What marketing analytics are implemented to measure platform performance?",
    active: true,
    answerText:
      "Three integrated measurement panels are deployed: a web analytics dashboard tracking visitors, engagement, traffic sources, and user behavior patterns; an SEO dashboard monitoring keyword rankings, search visibility, clicks, and impressions to grow organic traffic; and a social media campaign dashboard measuring ad performance, audience engagement, reach, and conversion results across paid promotional channels.",
  },
  row2: {
    leftLabel: "SEO Strategy",
    rightQuestion:
      "How does the marketing approach scale organic search visibility?",
  },
  row3: {
    leftLabel: "Campaign ROI",
    rightQuestion:
      "How is social media campaign performance and ROI measured?",
  },
};

export default function MarketingSection({ logoSrc }: { logoSrc?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
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
            width: 1322.5,
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
              width: 132,
              height: 38,
              border: "0.969561px solid #202833",
              borderRadius: 236.844,
            }}
          >
            <span
              style={{
                fontFamily: "'SF Pro Display'",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "19.61px",
                letterSpacing: "0.148em",
                textTransform: "uppercase",
                color: "#202833",
                whiteSpace: "nowrap",
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
              gap: 421,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px 10px 10px 0px",
                gap: 10,
                width: 527,
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 35,
                  lineHeight: "34.01px",
                  color: "#111111",
                  width: 497,
                }}
              >
                Analytics Architecture and Marketing Integrations
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
                width: 372,
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "23.69px",
                  color: "rgba(109, 109, 110, 0.8)",
                  width: 358,
                }}
              >
                This section details the technical framework used to capture user telemetry, outlining the implementation of data, event pipelines, and server-side tracking.
              </span>
            </div>
          </div>
        </div>

        {/* 3 Rows Container */}
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 100,
            width: "100%",
          }}
        >
          {/* Row 1: Image Left + Text Right */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 1337, gap: 90 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 10, width: 612, background: "#FFFFFF", borderRadius: 23.6864 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <img src="/assets/portfolio/marketing/marketing_analytics_1.png" alt="" style={{ width: 518, height: 398, objectFit: "cover", border: "15px solid #F7F9FD", borderRadius: 10, boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 40, width: 636 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "45px", color: "#111111", width: 522, textAlign: "center" }}>
                  Monitor visitors, engagement, traffic sources, and user behavior to measure website performance.
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Text Left + Image Right */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 1337, gap: 90 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 40, width: 636 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "45px", color: "#111111", width: 540, textAlign: "center" }}>
                  Track rankings, search visibility, clicks, impressions, and SEO performance to grow organic traffic.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 10, width: 612, background: "#FFFFFF", borderRadius: 23.6864 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <img src="/assets/portfolio/marketing/marketing_seo_2.png" alt="" style={{ width: 517, height: 398, objectFit: "cover", border: "15px solid #F7F9FD", borderRadius: 10, boxSizing: "border-box" }} />
              </div>
            </div>
          </div>

          {/* Row 3: Image Left + Text Right */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 1337, gap: 90 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 10, width: 612, background: "#FFFFFF", borderRadius: 23.6864 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <img src="/assets/portfolio/marketing/marketing_social_3.png" alt="" style={{ width: 580, height: 386, objectFit: "cover", border: "15px solid #F7F9FD", borderRadius: 10, boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", gap: 40, width: 636 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "45px", color: "#111111", width: 522, textAlign: "center" }}>
                  Track ad performance, audience engagement, reach, and campaign results across social media platforms.
                </span>
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
