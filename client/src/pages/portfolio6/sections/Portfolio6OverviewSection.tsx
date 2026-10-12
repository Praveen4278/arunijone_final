import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio6OverviewSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{
        width: 1420, background: "#FFFFFF", borderRadius: 23.6864,
        padding: "55px 49px", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 60, boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", width: 160, height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>overview</span>
          </div>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111" }}>Key milestones and outcomes of the project</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "0px 250px", gap: 40, width: 1322 }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
            The research focused on understanding how users search, compare, and book rooms online. These insights helped identify booking pain points and shape a clearer, faster, and more intuitive experience for Resora users.
          </span>
        </div>
      </div>

      <PillMilestoneSection
        mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg"
        heading="Key milestones and outcomes of the project"
        description="The research focused on understanding how users search, compare, and book rooms online. These insights helped identify booking pain points and shape a clearer, faster, and more intuitive experience for Resora users."
        keyAchievementBody="Identified user needs and booking challenges to simplify room discovery, comparison, and reservation."
        clientImpactBody="Research insights helped create a smoother booking journey, improving clarity, usability, and user confidence."
      />

      <PillQuoteSection
        solidLine="Resora is designed to simplify the room booking experience by helping users discover, compare, and reserve accommodations with ease."
        mutedLine="The website brings essential room details, pricing, availability, and booking information together in a clear and intuitive interface, making the journey from search to reservation seamless and trustworthy."
      />

      <PillFaqSection
        faqHeading="Resora – Simplifying Room Discovery & Booking"
        activeRow={{
          leftLabel: "Overview",
          rightQuestion: "What is the My Rameswaram Trip UX/UI project about?",
          active: true,
          answerText: "This Project Focuses On Designing A User-Centered Digital Platform That Combines Pilgrimage Services And Travel Planning For Rameswaram. The Goal Is To Create A Seamless Experience For Devotees And Travelers By Simplifying Temple Services, Travel Bookings, And Local Guidance Through An Intuitive And Respectful Interface.",
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
