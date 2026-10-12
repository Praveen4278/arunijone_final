import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillContent from "../components/MobPillContent";
import PillMilestoneSection from "./portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "./portfolio1/sections/PillQuoteSection";
import PillFaqSection from "./portfolio1/sections/PillFaqSection";
import type { PillMilestoneTexts } from "./portfolio1/sections/PillMilestoneSection";
import type { PillQuoteTexts } from "./portfolio1/sections/PillQuoteSection";
import type { PillFaqTexts } from "./portfolio1/sections/PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Key milestones and outcomes of the project",
  description: "This project created a professional digital platform for Midco Kuwait to showcase hotel products, supplies, and hospitality solutions with a clear and structured product experience.",
  keyAchievementBody: "Built an organized product showcase that makes it easier for customers to discover hotel supplies and explore product details.",
  clientImpactBody: "Strengthened Midco Kuwait's digital presence by improving product visibility and simplifying navigation.",
};

const quote: PillQuoteTexts = {
  solidLine: "This project was approached with a user-first mindset, focusing on the needs of hotels, hospitality businesses, and procurement teams.",
  mutedLine: "Through research, content structuring, and user journey analysis, the platform was designed to present products clearly while making product discovery and business enquiries more efficient.",
  textWidth: 920,
  textHeight: 164,
};

const faq: PillFaqTexts = {
  faqHeading: "Midco Kuwait – Hotel Products, Supplies & Hospitality Solutions",
  activeRow: {
    leftLabel: "Overview",
    rightQuestion: "What is the Midco Kuwait platform about?",
    active: true,
    answerText: "This project focuses on designing a user-centered digital platform that showcases hotel products and hospitality solutions. The goal is to create a seamless experience for procurement teams and hospitality businesses by simplifying product discovery and business enquiries through an intuitive interface.",
  },
  row2: {
    leftLabel: "UX Research Approach",
    rightQuestion: "What UX research methods were used in this project?",
  },
  row3: {
    leftLabel: "User Problems Identified",
    rightQuestion: "What key user problems did the research uncover?",
  },
};

const ServiceBlog3Details = () => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* DESKTOP */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
        <header style={{ position: "absolute", left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: "#F6F7F9", borderRadius: 22.3551, position: "relative" }}>
            <div onClick={() => { navigate("/"); window.scrollTo(0, 0); }} style={{ position: "absolute", left: 42, top: "calc(50% - 33px)", width: 66, height: 66, cursor: "pointer" }}>
              <div style={{ position: "absolute", width: 66, height: 66, background: "#FFFFFF", borderRadius: 1000 }} />
              <img src="/figmaAssets/logo.png" alt="Logo" style={{ position: "absolute", width: 49, height: 42, top: "calc(50% - 21px)", left: "calc(50% - 24.5px)", borderRadius: 12, objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", width: 416, height: 47, left: "calc(50% - 208px)", top: "calc(50% - 23.5px)", display: "flex", flexDirection: "row", alignItems: "center", padding: "12px 13px", gap: 72 }}>
              {[
                { label: "Home", href: "/", w: 44 },
                { label: "About", href: "/about", w: 41 },
                { label: "Explore", href: "/explore", w: 51 },
                { label: "Blogs", href: "/blog", w: 38 },
              ].map(({ label, href, w }) => (
                <Link key={label} href={href} style={{ width: w, height: 23, textDecoration: "none", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "22px", color: "#111111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {label}
                </Link>
              ))}
            </div>
            <button onClick={() => navigate("/contact")} style={{ position: "absolute", left: 1272.55, top: "calc(50% - 26.5px)", width: 115, height: 53, display: "flex", justifyContent: "center", alignItems: "center", background: "#0161FE", borderRadius: 111.786, border: "none", cursor: "pointer" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: 15.78, color: "#FFFFFF" }}>Contact</span>
            </button>
          </div>
        </header>

        <div className="absolute h-auto w-[1420px] flex flex-col justify-start items-center gap-[50px] left-[10px] top-[107px]">
          {/* Hero Section */}
          <div style={{ position: "relative", background: "#F6F7F9", width: "100%", borderRadius: 20.4131, overflow: "hidden", flexShrink: 0, padding: "45px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 57, width: "100%" }}>
              <span style={{ width: 1331, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 40.8113, lineHeight: "47px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#111111" }}>
                Midco Kuwait: Premium Hotel Supplies & ERP Solutions
              </span>
              <div style={{ position: "relative", overflow: "hidden", width: 1331, height: 625, borderRadius: 20.4131 }}>
                <div style={{ position: "absolute", overflow: "hidden", width: 1335.11, height: 627.5, left: 0, top: 0, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png" alt="Digital Marketing" style={{ width: 300, height: 300, objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
              <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>RESEARCH REPORT</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 117, width: 1322 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 737 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111", width: 707, height: 69 }}>
                    Our Success Stories Real Results, Real Impact
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 478 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", width: 461 }}>
                    Midco Kuwait empowers hospitality businesses by seamlessly combining premium hotel supplies with an advanced ERP software to optimize inventory and elevate the guest experience.
                  </span>
                </div>
              </div>
            </div>

            {/* Content section with padding */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 250px", gap: 40, width: 1322 }}>
              {/* Section 1: Overview */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                  Overview of the Project
                </span>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 801 }}>
                  Midco Kuwait stands as a premier provider of comprehensive hotel solutions, offering a dual approach that combines physical luxury amenities with advanced operational software. As the hospitality industry in Kuwait grows and guest expectations rise, maintaining top-tier comfort and streamlined management is crucial for hotels looking to stand out. Midco Kuwait addresses this demand by acting as a one-stop shop for both high-quality physical supplies and digital inventory solutions.
                </span>
              </div>

              {/* Section 2: Comprehensive Suite */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    A Comprehensive Suite of Hospitality Supplies
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    Recognized as a leader in hospitality hygiene supplies in Kuwait, Midco Kuwait provides an extensive catalog designed to elevate the guest experience from the lobby to the bedroom. Their primary product categories include:
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Bedroom Essentials: Premium bedsheets, luxurious pillows, pillow covers, and comfortable beds designed for optimal guest rest.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Bathroom & Hygiene Amenities: Guest bathroom amenities, washroom hygiene supplies, air fresheners, and soap and sanitizer dispensers.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Operational Equipment: Hotel furniture, trolleys and carts, wireless calling systems, and insect control solutions to keep facilities running smoothly.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Streamlining Operations */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    Streamlining Operations with ERP Software
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    Beyond supplying physical goods, Midco Kuwait offers a robust Inventory Management ERP (Enterprise Resource Planning) Software tailored specifically for the hospitality sector. Hotel management often struggles with tracking fast-moving goods like linens, toiletries, and cleaning supplies. Midco's software provides a digital infrastructure to:
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Manage and monitor stock levels in real-time.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Track supply orders efficiently.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Optimize inventory to reduce operational costs and prevent shortages.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 4: Strategic Partner */}
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                The hospitality landscape in Kuwait is evolving rapidly, demanding a higher standard of guest experience alongside seamless operational efficiency. To meet these rising expectations, hotels require more than just a basic vendor; they need a strategic partner capable of providing comprehensive solutions. Midco Kuwait has established itself as that trusted partner, delivering a unique combination of premium physical hotel supplies and advanced digital management tools.
              </span>

              {/* Section 5: Market Introduction */}
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                Whether managing a boutique hotel in Al-Shuwaikh or a luxury resort in Kuwait City, property managers are turning to Midco Kuwait to optimize their inventory, elevate guest comfort, and reduce overhead costs. Here is an in-depth look at how their offerings are redefining hospitality management.
              </span>

              {/* Section 6: Product Catalog Deep Dive */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    A Deep Dive into Midco Kuwait's Product Catalog
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    As recognized leaders in hospitality hygiene and operational supplies in Kuwait, Midco Kuwait provides an extensive, high-quality inventory. Their catalog ensures that every touchpoint of the guest journey—from the lobby to the en-suite bathroom—exudes comfort and luxury.
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Premium Bedroom Essentials: Guest rest is paramount. Midco Kuwait supplies luxurious pillows, pillow covers, premium bedsheets, and comfortable beds designed to guarantee ultimate comfort. High-quality hospitality linens are a cornerstone of their catalog.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Bathroom & Hygiene Amenities: A hotel's standard is often judged by its washroom facilities. Midco offers comprehensive guest bathroom amenities, soap and sanitizer dispensers, and specialized washroom hygiene supplies.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Operational & Facility Equipment: Keeping a hotel running requires durable back-of-house equipment. Midco provides robust trolleys and carts for housekeeping staff, hotel furniture, and specialized equipment like wireless calling systems to improve staff communication.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Atmosphere & Pest Control: Maintaining a pristine environment is effortless with their advanced air fresheners and effective insect control and fly traps, ensuring public spaces and rooms remain inviting and hygienic.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 7: Tech Advantage */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    The Tech Advantage: Inventory Management ERP Software
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    Procuring top-tier supplies is only half the battle; managing them efficiently is where many hospitality businesses struggle. Midco Kuwait goes beyond simple product distribution by offering a robust Inventory Management ERP (Enterprise Resource Planning) software tailored for hotel operations.
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    This digital infrastructure allows hotel managers to shift away from manual spreadsheets and embrace automated, real-time tracking. The key benefits of implementing Midco's ERP software include:
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Real-Time Stock Monitoring: The software helps hotels manage stock levels accurately, preventing unexpected shortages of fast-moving items like toiletries or cleaning supplies.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Cost Reduction & Efficiency: By optimizing inventory and tracking orders seamlessly, properties can significantly reduce wasted spend and enhance overall operational efficiency.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Streamlined Procurement: The system simplifies the process of reordering essential amenities, allowing staff to focus less on administrative tasks and more on the guest experience.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 8: Go-To Partner */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                  Why Midco Kuwait is the Go-To Hospitality Partner
                </span>
              </div>
            </div>
          </div>

          {/* Milestone Section */}
          <PillMilestoneSection {...milestone} mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png" />

          {/* Quote Section */}
          <PillQuoteSection {...quote} />

          {/* FAQ Section */}
          <PillFaqSection {...faq} />

          <SiteFooterSection />
          <div style={{ height: 10 }} />
        </div>
      </DesktopPageWrapper>

      {/* MOBILE */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/p7/images/group.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center py-[25px] px-[15px]" style={{ gap: 30 }}>
              <span style={{ width: "100%", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", color: "#111111" }}>
                Midco Kuwait: Premium Hotel Supplies & ERP Solutions
              </span>
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png" alt="Digital Marketing" style={{ width: 150, height: 150, objectFit: "contain" }} />
              </div>
            </div>

            {/* Main Content */}
            <div style={{ width: "100%", background: "#F6F7F9", borderRadius: 15, padding: "20px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Overview of the Project</p>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                    Midco Kuwait stands as a premier provider of comprehensive hotel solutions, offering premium amenities combined with advanced ERP software. The hospitality industry in Kuwait demands top-tier comfort and streamlined management. Midco Kuwait acts as a one-stop shop for both high-quality physical supplies and digital inventory solutions.
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Hospitality Supplies Categories</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Bedroom Essentials: Premium bedsheets, luxurious pillows, pillow covers, and comfortable beds
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Bathroom & Hygiene: Guest amenities, soap dispensers, sanitizers, and hygiene supplies
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Operational Equipment: Hotel furniture, trolleys, wireless calling systems, pest control solutions
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>ERP Software Benefits</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Real-Time Stock Monitoring: Accurate stock level management preventing unexpected shortages
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Cost Reduction: Optimized inventory and seamless order tracking reduce operational costs
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Streamlined Procurement: Simplified reordering for essential amenities and supplies
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Why Choose Midco Kuwait</p>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                    Midco Kuwait is the go-to hospitality partner delivering premium physical supplies combined with advanced digital management tools. Whether managing boutique hotels or luxury resorts in Kuwait City, property managers turn to Midco to optimize inventory, elevate guest comfort, and reduce overhead costs with integrated solutions.
                  </p>
                </div>
              </div>
            </div>

            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This Digital Marketing service delivers comprehensive campaign management through strategic planning, creative execution, and data-driven optimization.",
              keyAchievementBody: "Delivered multi-channel marketing campaigns that drive brand awareness, customer engagement, and measurable conversion results.",
              clientImpactBody: "The solution provides actionable insights and scalable marketing strategies that help businesses reach their target audience effectively and maximize marketing ROI.",
              quoteSolid: "This engagement was approached with a data-driven mindset, focusing on the intersection of creative storytelling and measurable business outcomes.",
              quoteMuted: "Through market research, audience segmentation, and continuous campaign optimization, the strategy was designed to balance brand narrative with performance metrics, ensuring sustained growth and competitive advantage.",
              faqHeading: "Digital Marketing - Strategic Growth Platform",
              activeLabel: "Overview",
              activeQuestion: "What is the Digital Marketing service overview?",
              activeAnswer: "This case study presents a comprehensive digital marketing engagement that delivers integrated campaign management across multiple channels. The goal is to demonstrate how the service unifies strategic planning, creative execution, and analytics into a cohesive growth strategy.",
              row2Label: "Campaign Strategy",
              row2Question: "How is the campaign strategy tailored for different markets?",
              row3Label: "Performance Metrics",
              row3Question: "What key metrics drive the marketing strategy?",
            }} />

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default ServiceBlog3Details;
