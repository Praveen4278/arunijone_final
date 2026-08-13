import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FAQDesktop from "./FAQDesktop";
import MobBanner from "../components/MobBanner";
import MobServiceCategories from "../components/MobServiceCategories";
import MobFooter from "../components/MobFooter";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      <div className="hidden md:block">
        <FAQDesktop />
      </div>

      {/* ====== MOBILE VIEW ====== */}
      <div className="md:hidden bg-white w-full overflow-x-hidden">
        <div
          className="relative overflow-hidden bg-white mx-auto"
          style={{ height: 7800, width: "100%" }}
        >
          <MobBanner iconSrc="/assets/faqmob/images/group.svg" />

          <div
            className="absolute flex flex-col items-end gap-[25px]"
            style={{ height: 7650, width: "calc(100% - 16px)", left: 8, top: 78 }}
          >
            <div
              className="relative overflow-hidden w-full rounded-[22.88px]"
              style={{ height: 592, background: "#F6F7F9" }}
            >
              <span
                className="absolute flex items-center justify-center text-center"
                style={{
                  height: 187.46,
                  width: 352.37,
                  left: "calc(50% - 177px)",
                  top: 35.13,
                  fontFamily: "'SF Pro Display', sans-serif",
                  fontSize: 57.84,
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: "66.33px",
                  letterSpacing: -3.47,
                }}
              >
                Your<br />Questions,<br />Answered
              </span>
              <span
                className="absolute flex items-center justify-center text-center"
                style={{
                  height: 65,
                  width: 295,
                  left: "calc(50% - 147.5px)",
                  top: 258,
                  fontFamily: "'SF Pro Display', sans-serif",
                  fontSize: 16,
                  color: "rgba(109,109,110,0.8)",
                  lineHeight: "24px",
                }}
              >
                Adapt easily and scale confidently with a flexible system designed to support your business at every stage of growth.
              </span>
              <div
                className="absolute overflow-hidden rounded-[15.26px]"
                style={{
                  height: "38.86%",
                  width: "calc(100% - 16px)",
                  left: "8px",
                  top: "60%",
                  background: "#fff",
                }}
              />
            </div>

            {/* Service Categories Mobile */}
            <MobServiceCategories />

            {/* Mobile FAQ Sections */}
            <div
              className="relative w-full flex flex-col items-start gap-[25px]"
            >
              {[
                {
                  label: "FAQ", isFirst: true,
                  overviewTitle: "Overview",
                  overviewQ: "What is the My Rameswaram Trip UX/UI project about?",
                  answer: "This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.",
                  card2Title: ["UX Research", "Approach"],
                  card2Q: "What UX research methods were used in this project?",
                  card3Title: ["User Problems", "Identified"],
                  card3Q: "What key user problems did the research uncover?",
                },
                {
                  label: "project 1", isFirst: false,
                  overviewTitle: "Overview",
                  overviewQ: "What is the My Rameswaram Trip UX/UI project about?",
                  answer: "This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.",
                  card2Title: ["UX Research", "Approach"],
                  card2Q: "What UX research methods were used in this project?",
                  card3Title: ["User Problems", "Identified"],
                  card3Q: "What key user problems did the research uncover?",
                },
                {
                  label: "project 1", isFirst: false,
                  overviewTitle: "Overview",
                  overviewQ: "What is the My Rameswaram Trip UX/UI project about?",
                  answer: "This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.",
                  card2Title: ["UX Research", "Approach"],
                  card2Q: "What UX research methods were used in this project?",
                  card3Title: ["User Problems", "Identified"],
                  card3Q: "What key user problems did the research uncover?",
                },
                {
                  label: "project 1", isFirst: false,
                  overviewTitle: "Aesthetic & Tone",
                  overviewQ: "How does the UI design balance the professional aesthetic of a travel site with the spiritual reverence required for a temple service platform?",
                  answer: "The UI Uses A Segmented Visual Hierarchy. The Main Travel/Booking Sections Employ A Clean, Minimalist Design With Clear CTAs (Like Other Travel Sites). However, The Temple/Ritual Pages Integrate Traditional South Indian Temple Architecture Motifs (E.G., Gopuram-Inspired Section Dividers, Earthy/Saffron/Gold Accents) To Build Trust And Emotional Resonance, While Still Maintaining High Readability",
                  card2Title: ["Complex Status"],
                  card2Q: "What UI element is used to provide feedback for multi-step rituals, like tracking the progress of a Pooja or the 22 Theertham sequence?",
                  card3Title: ["Mobile Usability"],
                  card3Q: "Given that most pilgrims use their phones on-site, what UI considerations were prioritized for mobile usability in the temple area?",
                },
              ].map((sec, idx) => (
                <div
                  key={idx}
                  className="relative w-full rounded-[23px]"
                  style={{ background: "#F6F7F9", minHeight: sec.isFirst ? 1280 : idx === 3 ? 1500 : 1280 }}
                >
                  <div
                    className="absolute flex flex-col items-center gap-[25px]"
                    style={{ width: "calc(100% - 12px)", left: 6, top: 35.47 }}
                  >
                    {/* Label pill */}
                    <div
                      className="flex items-center justify-center"
                      style={{
                        height: 30,
                        width: sec.isFirst ? 62 : 108,
                        border: "1px solid #202833",
                        borderRadius: 228.83,
                      }}
                    >
                      <span style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 12, fontWeight: 500, color: "#202833", letterSpacing: 1.72, textTransform: "uppercase" }}>
                        {sec.label}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-center text-center" style={{ width: 300, margin: "0 auto" }}>
                      <span style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 40, fontWeight: 400, color: "#111111", lineHeight: "46px" }}>
                        My Rameswaram Trip - Travel &amp; Temple Service Platform
                      </span>
                    </div>

                    {/* View All Button */}
                    <div
                      className="flex items-center justify-center cursor-pointer"
                      onClick={() => navigate("/faq-details")}
                      style={{ height: 46, width: 124, background: "#0161FE", borderRadius: 95.35, margin: "6px auto 0" }}
                    >
                      <span style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 13.4, color: "#FFFFFF" }}>View All</span>
                      <img src="/assets/faqmob/images/vector_10.svg" alt="" style={{ width: 22.88, height: 22.88, marginLeft: 4 }} />
                    </div>

                    {/* Overview blue pill */}
                    <div className="flex flex-col items-center" style={{ background: "#0161FE", width: "100%", borderRadius: 15, marginTop: 10, paddingTop: 15, paddingBottom: 20 }}>
                      <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 28, fontWeight: 300, color: "#FFFFFF", textTransform: "capitalize" }}>{sec.overviewTitle}</span>
                      <div className="flex items-center justify-center" style={{ width: 322, marginTop: 10 }}>
                        <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 18.1, fontWeight: 300, color: "#FFFFFF", lineHeight: "27.21px" }}>
                          {sec.overviewQ}
                        </span>
                      </div>
                    </div>

                    {/* Answer box */}
                    <div className="flex items-center justify-center" style={{ background: "#FFFFFF", width: 345, borderRadius: 15, padding: "15px 10px", margin: "10px auto 0" }}>
                      <span className="text-center" style={{ fontFamily: "'SF Pro Rounded', 'SF Pro Display', sans-serif", fontSize: 15, fontWeight: 400, color: "#6D6D6E", lineHeight: "28px", textTransform: "capitalize" }}>
                        {sec.answer}
                      </span>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-[15px]" style={{ width: "100%", background: "#FFFFFF", paddingTop: 20, paddingBottom: 20 }}>
                      <div className="flex items-center justify-center" style={{ width: 280, margin: "0 auto" }}>
                        <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 34, fontWeight: 400, color: "#000000", lineHeight: "42px", textTransform: "capitalize" }}>
                          {sec.card2Title.map((line, i) => (<React.Fragment key={i}>{line}{i < sec.card2Title.length - 1 && <br />}</React.Fragment>))}
                        </span>
                      </div>
                      <div className="flex items-center justify-center" style={{ width: 322, margin: "12px auto 0" }}>
                        <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 18.1, fontWeight: 300, fontStyle: "normal", color: "#6D6D6E", lineHeight: "27.21px" }}>
                          {sec.card2Q}
                        </span>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-[15px]" style={{ width: "100%", background: "#FFFFFF", paddingTop: 20, paddingBottom: 20 }}>
                      <div className="flex items-center justify-center" style={{ width: 280, margin: "0 auto" }}>
                        <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 34, fontWeight: 400, color: "#000000", lineHeight: "42px", textTransform: "capitalize" }}>
                          {sec.card3Title.map((line, i) => (<React.Fragment key={i}>{line}{i < sec.card3Title.length - 1 && <br />}</React.Fragment>))}
                        </span>
                      </div>
                      <div className="flex items-center justify-center" style={{ width: 322, margin: "12px auto 0" }}>
                        <span className="text-center" style={{ fontFamily: "'SF Pro Display', sans-serif", fontSize: 18.1, fontWeight: 300, fontStyle: "normal", color: "#6D6D6E", lineHeight: "27.21px" }}>
                          {sec.card3Q}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Load More - inside last section, absolute bottom */}
                  {idx === 3 && (
                    <div className="absolute w-full flex justify-center" style={{ bottom: 25 }}>
                      <div
                        className="flex items-center justify-center cursor-pointer"
                        style={{
                          height: 51,
                          padding: "3px 35px",
                          border: "1px solid #A7A7A7",
                          borderRadius: 109.08,
                        }}
                      >
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15.4, fontWeight: 500, color: "#444444", letterSpacing: -0.08 }}>Load More</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <MobFooter />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FAQ;