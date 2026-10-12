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
  heading: "Research milestones and market findings",
  description: "Market research, competitor analysis, and audience profiling informed the growth strategy.",
  keyAchievementBody: "Identified high-value audience segments and underperforming content clusters through deep analysis.",
  clientImpactBody: "Research insights reduced wasted ad spend and focused effort on the highest-converting channels.",
};

const quote: PillQuoteTexts = {
  solidLine: "The research was led by data, focusing on where real users discover and convert.",
  mutedLine: "Combining SEMrush audits, GA4 behaviour analysis, and competitor gap studies, the research delivered a clear roadmap for scalable digital growth.",
  textWidth: 920,
  textHeight: 164,
};

const faq: PillFaqTexts = {
  faqHeading: "Market Research & Competitive Analysis",
  activeRow: {
    leftLabel: "Research Scope",
    rightQuestion: "What does the marketing research scope cover?",
    active: true,
    answerText: "The research covers keyword gap analysis, competitor benchmarking, audience segmentation, content audit, channel attribution, and conversion funnel mapping.",
  },
  row2: {
    leftLabel: "Evaluation Methods",
    rightQuestion: "Which research methods were applied?",
  },
  row3: {
    leftLabel: "Research Outcomes",
    rightQuestion: "What are the key actionable outcomes from the research?",
  },
};

const ServiceBlog2Details = () => {
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
                Resora: Modern Hotel Reservation Platform
              </span>
              <div style={{ position: "relative", overflow: "hidden", width: 1331, height: 625, borderRadius: 20.4131 }}>
                <div style={{ position: "absolute", overflow: "hidden", width: 1335.11, height: 627.5, left: 0, top: 0, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg" alt="Resora" style={{ width: 300, height: 300, objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
              <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>BLOG</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 267, width: 1322 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 581 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111", width: 571, height: 69 }}>
                    Resora: Your All-in-One Platform for Effortless Hotel Bookings
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 478 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", width: 461 }}>
                    Resora is a modern hotel reservation platform designed to take the friction out of travel planning. With transparent pricing, real-time room availability, verified guest reviews, and flexible cancellation policies.
                  </span>
                </div>
              </div>
            </div>

            {/* Content section with padding */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 250px", gap: 40, width: 1322 }}>
              {/* Section 1: Overview of the Project */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                  Overview of the Project
                </span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 801 }}>
                    Planning your next vacation, weekend getaway, or corporate business trip begins with securing the right accommodation. The Resora hotel booking website has emerged as a premier digital platform for travelers seeking a seamless, reliable, and cost-effective way to reserve rooms worldwide. Whether you are hunting for a luxurious beachfront resort, a budget-friendly city hostel, or a long-term vacation rental, Resora provides a unified portal to compare prices, verify amenities, and lock in your reservation with confidence.
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 801 }}>
                    Navigating the crowded landscape of online travel agencies can be overwhelming. This comprehensive guide explores how the Resora hotel reservation system works, the unique benefits it offers to modern travelers, and tips for leveraging the platform to find the best hotel deals on the market.
                  </span>
                </div>
              </div>

              {/* Section 2: Key Features */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    Key Features of the Resora Hotel Booking Website
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    To stand out in the competitive travel tech space, a booking platform must prioritize user experience, data security, and inventory diversity. The Resora platform integrates several advanced features designed to streamline travel planning from search to checkout.
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Smart Search and Interactive Mapping: Resora features an intuitive search engine powered by advanced algorithms. Users can filter properties by exact location, price range, star rating, and specific amenities (such as pet-friendly rooms, free Wi-Fi, or swimming pools). The integrated interactive map allows travelers to pinpoint hotels based on their proximity to local landmarks, airports, or business centers.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Comprehensive Global Inventory: The platform aggregates listings ranging from five-star luxury brands and boutique independent hotels to cozy bed-and-breakfasts and affordable motels. This extensive inventory ensures that travelers of all budget levels can find appropriate lodging.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Real-Time Availability and Instant Confirmation: Resora synchronizes directly with hotel property management systems (PMS) to display live room availability. Once a booking is completed, users receive instant digital confirmations via email and SMS, eliminating the anxiety of pending reservations.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Transparent Pricing and No Hidden Fees: The pricing model on the Resora hotel booking website is designed for absolute transparency. The initial search results display the total cost of the stay, inclusive of standard taxes and platform fees, ensuring travelers are not surprised at the final checkout step.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Verified Guest Reviews: To maintain quality control and trust, Resora only allows users who have actually completed a stay at a property to leave a review. This authentic feedback system helps future guests make informed decisions based on cleanliness, staff hospitality, and overall value.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Why Choose Resora */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                    Why Choose Resora for Your Online Hotel Reservations?
                  </span>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                    With numerous travel portals available, selecting the right one can directly impact your travel budget and overall trip satisfaction. Here is why Resora is rapidly becoming the go-to choice for savvy travelers.
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Unbeatable Price Guarantees and Exclusive Deals: Resora negotiates directly with hospitality partners to offer highly competitive rates. The platform frequently runs seasonal promotions, early-bird booking discounts, and flash sales. Additionally, registered members often gain access to exclusive "member-only" pricing that undercuts standard public rates.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Flexible Cancellation Policies: Understanding that travel plans can change unexpectedly, the Resora hotel booking website highlights properties offering flexible cancellation policies. Users can easily filter their search to only show hotels that provide free cancellation or "pay at the property" options, offering peace of mind in uncertain times.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Secure and Diverse Payment Gateways: Security is paramount when handling travel transactions. Resora utilizes military-grade encryption to protect personal and financial data. The platform supports a wide array of payment methods, including major credit/debit cards, digital wallets (like Apple Pay and Google Pay), and localized payment gateways, catering to an international user base.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      24/7 Dedicated Customer Support: Travel emergencies do not adhere to standard business hours. Resora provides round-the-clock customer support through live chat, email, and phone. Whether you need to modify a reservation, request a late check-in, or resolve a discrepancy at the front desk, the support team is readily available to advocate for the guest.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Verified Guest Reviews: To maintain quality control and trust, Resora only allows users who have actually completed a stay at a property to leave a review. This authentic feedback system helps future guests make informed decisions based on cleanliness, staff hospitality, and overall value.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 4: Step-by-Step Guide */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>
                  Step-by-Step Guide: Booking Your Stay
                </span>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781 }}>
                  Using the Resora platform is designed to be frictionless. Follow these simple steps to lock in your next accommodation:
                </span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0, width: 822 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Enter Trip Details: On the homepage, input your destination, check-in and check-out dates, and the number of guests/rooms required.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Filter and Compare: Use the sidebar filters to narrow down the results based on your budget, preferred star rating, and must-have amenities. Toggle the map view to ensure the location suits your itinerary.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Review the Property: Click on a hotel profile to view high-resolution photos, read verified guest reviews, and check the specific room policies (e.g., breakfast inclusion, cancellation terms).
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Select Your Room: Choose the specific room category that fits your needs. Pay close attention to the bed configuration and view type.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Secure Checkout: Enter your guest details and payment information on the encrypted checkout page. Review the final price breakdown before clicking confirm.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080" }}>
                      Receive Confirmation: Instantly receive your digital booking voucher, which contains the hotel's contact information, reservation number, and GPS directions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 791 }}>
                Whether you are a digital nomad requiring strong Wi-Fi in a bustling metropolis or a family seeking a quiet mountain retreat, the Resora hotel booking website provides the tools, transparency, and inventory to make travel planning entirely stress-free.
              </span>
            </div>
          </div>

          {/* Milestone Section */}
          <PillMilestoneSection {...milestone} mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg" />

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
          <MobBanner iconSrc="/assets/p6/images/group.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center py-[25px] px-[15px]" style={{ gap: 30 }}>
              <span style={{ width: "100%", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", color: "#111111" }}>
                Resora: Modern Hotel Reservation Platform
              </span>
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg" alt="Resora" style={{ width: 150, height: 150, objectFit: "contain" }} />
              </div>
            </div>

            {/* Main Content */}
            <div style={{ width: "100%", background: "#F6F7F9", borderRadius: 15, padding: "20px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Overview of the Project</p>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: "0 0 10px 0" }}>
                    Planning your next vacation, weekend getaway, or corporate business trip begins with securing the right accommodation. The Resora hotel booking website has emerged as a premier digital platform for travelers seeking a seamless, reliable, and cost-effective way to reserve rooms worldwide.
                  </p>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                    Navigating the crowded landscape of online travel agencies can be overwhelming. This comprehensive guide explores how the Resora hotel reservation system works, the unique benefits it offers to modern travelers, and tips for leveraging the platform to find the best hotel deals.
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Key Features</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Smart Search and Interactive Mapping: Resora features an intuitive search engine powered by advanced algorithms with filters for location, price, star rating, and amenities.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Comprehensive Global Inventory: From five-star luxury brands to budget-friendly hostels, ensuring travelers of all budget levels can find appropriate lodging.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Real-Time Availability: Resora synchronizes directly with hotel property management systems to display live room availability and instant digital confirmations.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Transparent Pricing: The initial search results display the total cost inclusive of taxes and fees, ensuring no surprises at checkout.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Verified Guest Reviews: Only users who have completed a stay can leave reviews, maintaining quality control and authentic feedback.
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Why Choose Resora</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Unbeatable Price Guarantees: Competitive rates with seasonal promotions, early-bird discounts, and exclusive member-only pricing.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Flexible Cancellation Policies: Users can easily filter search to show hotels with free cancellation or "pay at the property" options.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • Secure Payment: Military-grade encryption with support for credit cards, digital wallets, and localized payment gateways.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      • 24/7 Customer Support: Round-the-clock assistance through live chat, email, and phone for any travel emergencies.
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 500, lineHeight: "20px", color: "#111111", margin: "0 0 10px 0" }}>Step-by-Step Booking Guide</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      1. Enter Trip Details: Input your destination, check-in/check-out dates, and number of guests/rooms.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      2. Filter and Compare: Use sidebar filters for budget, star rating, and amenities. Toggle map view for location verification.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      3. Review the Property: View high-resolution photos, verified reviews, and room policies.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      4. Select Your Room: Choose the room category matching your needs, considering bed configuration and view type.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      5. Secure Checkout: Enter guest details and payment information on the encrypted page, review the price breakdown.
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                      6. Receive Confirmation: Get instant digital booking voucher with hotel contact info, reservation number, and GPS directions.
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                  Whether you are a digital nomad or a family seeking a quiet retreat, the Resora hotel booking website provides the tools, transparency, and inventory to make travel planning entirely stress-free.
                </p>
              </div>
            </div>

            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This financial platform delivers comprehensive investment management through intelligent automation, portfolio analytics, and wealth optimization.",
              keyAchievementBody: "Delivered an advanced financial management system that streamlines investment tracking and portfolio rebalancing across multiple asset classes.",
              clientImpactBody: "The solution provides actionable financial insights and automated portfolio management that helps wealth managers serve clients with greater efficiency.",
              quoteSolid: "This engagement was approached with a fintech-first mindset, focusing on the intersection of financial analysis and seamless user experience.",
              quoteMuted: "Through comprehensive financial modeling, automated workflows, and real-time analytics, the platform was designed to balance sophistication with accessibility.",
              faqHeading: "Resora - Wealth Management & Investment Platform",
              activeLabel: "Overview",
              activeQuestion: "What is the Resora platform overview?",
              activeAnswer: "This case study presents a fintech engagement that delivers comprehensive wealth management and portfolio optimization.",
              row2Label: "Portfolio Analytics",
              row2Question: "How does the platform analyze portfolio performance?",
              row3Label: "Wealth Optimization",
              row3Question: "What wealth optimization strategies does Resora employ?",
            }} />

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default ServiceBlog2Details;
