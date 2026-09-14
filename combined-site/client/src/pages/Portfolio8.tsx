import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import OverviewSection from "./portfolio1/sections/OverviewSection";
import Portfolio8ResearchSection from "./portfolio8/sections/Portfolio8ResearchSection";
import Portfolio8CreativeSection from "./portfolio8/sections/Portfolio8CreativeSection";
import Portfolio8MarketingSection from "./portfolio8/sections/Portfolio8MarketingSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillTabs from "../components/MobPillTabs";
import MobPillContent from "../components/MobPillContent";
import MobOverviewMain from "./portfolio1/mob/MobOverviewMain";
import MobResearchMain from "./portfolio1/mob/MobResearchMain";
import MobCreativeMain from "./portfolio1/mob/MobCreativeMain";
import MobDesignMain from "./portfolio1/mob/MobDesignMain";
import MobMarketingMain from "./portfolio1/mob/MobMarketingMain";
import MobDevelopmentMain from "./portfolio1/mob/MobDevelopmentMain";

const Portfolio8ServiceCaseStudy = () => {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<"overview"|"research"|"creative"|"marketing"|"design"|"development">("overview");

  const PAGE_TITLE = "Service 4 – Equity Research & Investment Strategy Platform";
  const META_CORP = "Client Delta";
  const META_DURATION = "4 Months";
  const META_RELEASE = "July 1, 2026";
  const META_SITE = "service4.example.com";
  const META_HREF = "https://service4.example.com";
  const HERO_IMG = "/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png";
  const MOBILE_HERO_IMG = "/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png";

  return (
    <>
      <DesktopPageWrapper designHeight={0} dynamicHeight>
        {/* Navbar */}
        <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>
            <div onClick={() => { navigate('/'); window.scrollTo(0, 0); }} style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66, cursor: 'pointer' }}>
              <div style={{ position: 'absolute', width: 66, height: 66, background: '#FFFFFF', borderRadius: 1000 }} />
              <img src="/figmaAssets/logo.png" alt="Arunijone Logo" style={{ position: 'absolute', width: 49, height: 42, top: 'calc(50% - 21px)', left: 'calc(50% - 24.5px)', borderRadius: 12, objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', width: 416, height: 47, left: 'calc(50% - 208px)', top: 'calc(50% - 23.5px)', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '12px 13px', gap: 72 }}>
              {[
                { label: 'Home',    href: '/',        color: '#111111', w: 44 },
                { label: 'About',   href: '/about',   color: '#111111', w: 41 },
                { label: 'Explore', href: '/explore', color: '#111111', w: 51 },
                { label: 'Blogs',   href: '/blog',    color: '#111111', w: 38 },
              ].map(({ label, href, color, w }) => (
                <Link key={label} href={href} style={{ width: w, height: 23, textDecoration: 'none', fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16, lineHeight: '22px', color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{label}</Link>
              ))}
            </div>
            <button onClick={() => navigate('/contact')} style={{ position: 'absolute', left: 1272.55, top: 'calc(50% - 26.5px - 0.3px)', width: 115, height: 53, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '15px 26px', gap: 10, background: '#0161FE', borderRadius: 111.786, border: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 15.7778, lineHeight: '22px', letterSpacing: -0.0788889, color: '#FFFFFF', width: 63, height: 23, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Contact</span>
            </button>
          </div>
        </header>

        <div className="absolute h-auto w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]">
          {/* Hero section */}
          <div style={{ position: 'relative', background: '#F6F7F9', width: '100%', borderRadius: 20.4131, overflow: 'hidden', flexShrink: 0, padding: '45px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 57, width: '100%' }}>
              <span style={{ width: 1331, height: 49, fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400, fontSize: 40.8113, lineHeight: '47px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#111111', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}>
                {PAGE_TITLE}
              </span>
              <PortfolioMetadata nameCorp={META_CORP} duration={META_DURATION} releaseDate={META_RELEASE} siteView={META_SITE} siteViewColor="#0D5CFF" siteViewHref={META_HREF} />
              <div style={{ position: 'relative', overflow: 'hidden', width: 1331, height: 625, borderRadius: 20.4131, flex: 'none', order: 2, alignSelf: 'stretch', flexGrow: 0 }}>
                <div style={{ position: 'absolute', width: 1335.11, height: 627.5, left: 0, top: 0, background: '#FFFFFF' }}>
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '38%',  top: '20%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '58%',  top: '18%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '64%',  top: '35%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '62%',  top: '62%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '42%',  top: '72%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '34%',  top: '55%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '36%',  top: '38%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '55%',  top: '74%',  background: '#0161FE' }} />
                  <img src={HERO_IMG} alt={PAGE_TITLE} style={{ position: 'absolute', width: 301, height: 299.73, left: 'calc(50% - 150.5px)', top: 'calc(50% - 149.865px)', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Our Expertise pills */}
          <div style={{ width: 1420, background: "#F6F7F9", borderRadius: 20.4131, flexShrink: 0, padding: "50px 0", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 0, gap: 40, width: "100%" }}>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 20px", gap: 10, width: 172, height: 36, border: "0.969561px solid #202833", borderRadius: 236.844, flexShrink: 0 }}>
                <span style={{ width: 132, height: 18, fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "18px", display: "flex", alignItems: "center", textAlign: "center", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833" }}>our expertise</span>
              </div>
              <span style={{ width: 466, height: 72, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "42px", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", color: "#111111", flexShrink: 0 }}>Comprehensive solutions for your business needs</span>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: 1336 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 0, gap: 20 }}>
                  <div onClick={() => setActiveTab("overview")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 194.72, height: 77.72, background: activeTab === "overview" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                    <div style={{ width: 43.72, height: 43.72, background: activeTab === "overview" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                      <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}><path d="M15.2223 14.3731V20.4369V20.4117V30.4761V14.3731ZM15.2223 32.4889C14.6688 32.4889 14.1949 32.2918 13.8007 31.8976C13.4065 31.5035 13.2094 31.0296 13.2094 30.4761V14.3731C13.2094 13.8196 13.4065 13.3457 13.8007 12.9515C14.1949 12.5574 14.6688 12.3603 15.2223 12.3603H23.2738L29.3124 18.3989V20.9149C28.9937 20.7807 28.6666 20.6759 28.3311 20.6004C27.9956 20.5249 27.6518 20.4704 27.2995 20.4369V19.4053H22.2673V14.3731H15.2223V30.4761H21.2861C21.5544 30.8786 21.8564 31.2518 22.1919 31.5957C22.5273 31.9396 22.8964 32.2373 23.2989 32.4889H15.2223ZM28.5827 28.74C29.0691 28.2535 29.3124 27.658 29.3124 26.9535C29.3124 26.249 29.0691 25.6536 28.5827 25.1671C28.0963 24.6807 27.5008 24.4375 26.7963 24.4375C26.0918 24.4375 25.4963 24.6807 25.0099 25.1671C24.5234 25.6536 24.2802 26.249 24.2802 26.9535C24.2802 27.658 24.5234 28.2535 25.0099 28.74C25.4963 29.2264 26.0918 29.4696 26.7963 29.4696C27.5008 29.4696 28.0963 29.2264 28.5827 28.74ZM31.9291 33.4954L29.2117 30.778C28.8595 31.0128 28.4779 31.1889 28.0669 31.3064C27.6559 31.4238 27.2324 31.4825 26.7963 31.4825C25.5382 31.4825 24.4689 31.0422 23.5883 30.1615C22.7076 29.2809 22.2673 28.2116 22.2673 26.9535C22.2673 25.6955 22.7076 24.6262 23.5883 23.7455C24.4689 22.8649 25.5382 22.4246 26.7963 22.4246C28.0543 22.4246 29.1237 22.8649 30.0043 23.7455C30.8849 24.6262 31.3252 25.6955 31.3252 26.9535C31.3252 27.3897 31.2665 27.8132 31.1491 28.2242C31.0317 28.6351 30.8556 29.0167 30.6207 29.369L33.3381 32.0863L31.9291 33.4954Z" fill="currentColor"/></svg>
                    </div>
                    <span style={{ width: 79, height: 30, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", textTransform: "capitalize", color: activeTab === "overview" ? "#FFFFFF" : "#0161FE" }}>Overview</span>
                  </div>
                  <div onClick={() => setActiveTab("research")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 197.72, height: 77.72, background: activeTab === "research" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                    <div style={{ width: 43.72, height: 43.72, background: activeTab === "research" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                      <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}><path d="M20.1287 24.1544H24.1544V22.1415H20.1287V24.1544ZM20.1287 21.1351H28.1801V19.1222H20.1287V21.1351ZM20.1287 18.1158H28.1801V16.1029H20.1287V18.1158ZM18.1158 28.1801C17.5623 28.1801 17.0884 27.983 16.6942 27.5888C16.3 27.1947 16.1029 26.7208 16.1029 26.1673V14.0901C16.1029 13.5365 16.3 13.0627 16.6942 12.6685C17.0884 12.2743 17.5623 12.0772 18.1158 12.0772H30.193C30.7465 12.0772 31.2204 12.2743 31.6146 12.6685C32.0088 13.0627 32.2059 13.5365 32.2059 14.0901V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H18.1158ZM18.1158 26.1673H30.193V14.0901H18.1158V26.1673ZM14.0901 32.2059C13.5365 32.2059 13.0627 32.0088 12.6685 31.6146C12.2743 31.2204 12.0772 30.7465 12.0772 30.193V16.1029H14.0901V30.193H28.1801V32.2059H14.0901Z" fill="currentColor"/></svg>
                    </div>
                    <span style={{ width: 82, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "research" ? "#FFFFFF" : "#0161FE" }}>Research</span>
                  </div>
                  <div onClick={() => setActiveTab("creative")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 187.72, height: 77.72, background: activeTab === "creative" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                    <div style={{ width: 43.72, height: 43.72, background: activeTab === "creative" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                      <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}><path d="M19.6582 28.6781C19.0146 28.6781 18.4636 28.4489 18.0052 27.9906C17.5469 27.5322 17.3177 26.9813 17.3177 26.3376V24.8748C16.206 24.1142 15.3429 23.139 14.7286 21.9492C14.1142 20.7595 13.807 19.4917 13.807 18.1459C13.807 15.864 14.6018 13.9282 16.1914 12.3386C17.7809 10.749 19.7167 9.95425 21.9987 9.95425C24.2807 9.95425 26.2164 10.749 27.806 12.3386C29.3956 13.9282 30.1904 15.864 30.1904 18.1459C30.1904 19.4917 29.8832 20.7546 29.2688 21.9346C28.6544 23.1146 27.7914 24.0947 26.6797 24.8748V26.3376C26.6797 26.9813 26.4505 27.5322 25.9921 27.9906C25.5338 28.4489 24.9828 28.6781 24.3392 28.6781H19.6582ZM19.6582 26.3376H24.3392V23.6461L25.3339 22.9439C26.1335 22.3978 26.7528 21.7005 27.1916 20.8521C27.6305 20.0037 27.8499 19.1016 27.8499 18.1459C27.8499 16.5271 27.2794 15.1472 26.1384 14.0062C24.9974 12.8652 23.6175 12.2947 21.9987 12.2947C20.3799 12.2947 18.9999 12.8652 17.859 14.0062C16.718 15.1472 16.1475 16.5271 16.1475 18.1459C16.1475 19.1016 16.3669 20.0037 16.8057 20.8521C17.2446 21.7005 17.8638 22.3978 18.6635 22.9439L19.6582 23.6461V26.3376ZM19.6582 33.3591C19.3266 33.3591 19.0487 33.2469 18.8244 33.0226C18.6001 32.7983 18.488 32.5204 18.488 32.1888V31.0186H25.5094V32.1888C25.5094 32.5204 25.3973 32.7983 25.173 33.0226C24.9487 33.2469 24.6707 33.3591 24.3392 33.3591H19.6582Z" fill="currentColor"/></svg>
                    </div>
                    <span style={{ width: 72, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "creative" ? "#FFFFFF" : "#0161FE" }}>Creative</span>
                  </div>
                  <div onClick={() => setActiveTab("marketing")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 202.72, height: 77.72, background: activeTab === "marketing" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                    <div style={{ width: 43.72, height: 43.72, background: activeTab === "marketing" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                      <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}><path d="M28.796 23.1794V20.7839H33.5871V23.1794H28.796ZM30.2334 31.5637L26.4005 28.6891L27.8378 26.7727L31.6707 29.6473L30.2334 31.5637ZM27.8378 17.1906L26.4005 15.2742L30.2334 12.3996L31.6707 14.316L27.8378 17.1906ZM13.2252 30.366V25.5749H12.0274C11.3686 25.5749 10.8047 25.3404 10.3356 24.8713C9.86644 24.4021 9.63188 23.8382 9.63188 23.1794V20.7839C9.63188 20.1251 9.86644 19.5612 10.3356 19.0921C10.8047 18.6229 11.3686 18.3884 12.0274 18.3884H16.8184L22.8072 14.7951V29.1682L16.8184 25.5749H15.6207V30.366H13.2252ZM20.4117 24.9162V19.0471L17.4772 20.7839H12.0274V23.1794H17.4772L20.4117 24.9162ZM24.005 25.9942V17.9692C24.544 18.4483 24.9782 19.0322 25.3076 19.7209C25.637 20.4096 25.8016 21.1632 25.8016 21.9817C25.8016 22.8001 25.637 23.5537 25.3076 24.2424C24.9782 24.9311 24.544 25.515 24.005 25.9942Z" fill="currentColor"/></svg>
                    </div>
                    <span style={{ width: 87, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "marketing" ? "#FFFFFF" : "#0161FE" }}>Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {activeTab === "overview" && <OverviewSection logoSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png" />}
          {activeTab === "research" && <Portfolio8ResearchSection />}
          {activeTab === "creative" && <Portfolio8CreativeSection />}
          {activeTab === "marketing" && <Portfolio8MarketingSection />}

          <SiteFooterSection />
          <div style={{ height: 10 }} />
        </div>
      </DesktopPageWrapper>

      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/homemob/images/group_5.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">

            {/* HERO */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center pt-[25px] pb-[16px] px-[15px]" style={{ gap: 30 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 21.62, width: 359.5, minWidth: 359.5 }}>
                <span style={{ width: 359, fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400, fontSize: 36, lineHeight: '44px', display: 'flex', alignItems: 'center', textAlign: 'center', color: '#111111' }}>
                  {PAGE_TITLE}
                </span>
              </div>
              <PortfolioMetadataMobile
                assetBasePath="/assets/services/images"
                siteViewColor="#1B66FE"
                nameCorp={META_CORP}
                duration={META_DURATION}
                releaseDate={META_RELEASE}
                siteView={META_SITE}
                siteViewHref={META_HREF}
              />
              <div style={{ width: '100%', height: 230.08, background: '#FFFFFF', borderRadius: 15.26, flexShrink: 0, alignSelf: 'stretch', flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={MOBILE_HERO_IMG} alt={PAGE_TITLE} style={{ width: 180, height: 180, objectFit: 'contain' }} />
              </div>
            </div>

            <MobPillTabs active={activeTab} onChange={setActiveTab} />

            {activeTab === "overview" && <MobOverviewMain />}
            {activeTab === "research" && <MobResearchMain />}
            {activeTab === "creative" && <MobCreativeMain />}
            {activeTab === "design" && <MobDesignMain />}
            {activeTab === "marketing" && <MobMarketingMain />}
            {activeTab === "development" && <MobDevelopmentMain />}

            {activeTab === "overview" && (
              <MobPillContent data={{
                milestoneHeading: "Key milestones and outcomes of the project",
                milestoneDescription: "This equity research & investment strategy platform delivers data-driven investment insights through rigorous financial analysis and structured reporting.",
                keyAchievementBody: "Delivered comprehensive equity research reports covering valuation, competitive positioning, and investment thesis.",
                clientImpactBody: "The research platform gave investors clear, actionable insights to support informed investment decisions.",
                quoteSolid: "This engagement was approached with an evidence-based mindset, grounding every insight in financial data.",
                quoteMuted: "Through fundamental analysis, sector research, and financial modelling, the platform was designed to balance depth of insight with clarity of presentation for investment decision-making.",
                faqHeading: "Service 4 - Equity Research & Investment Strategy Platform",
                activeLabel: "Overview",
                activeQuestion: "What is the Service 4 equity research platform overview?",
                activeAnswer: "This case study covers an equity research and investment strategy engagement that delivered structured research reports, financial models, and investment recommendations for a portfolio of companies.",
                row2Label: "Coverage Strategy",
                row2Question: "How is the research built for investors across regions?",
                row3Label: "Research Problems Identified",
                row3Question: "What investment challenges did the research address?",
              }} />
            )}
            {activeTab === "research" && (
              <MobPillContent data={{
                milestoneHeading: "Research milestones and analytical findings",
                milestoneDescription: "Fundamental analysis, financial modelling, and sector research formed the foundation of the investment strategy.",
                keyAchievementBody: "Identified mispriced opportunities and key risk factors through rigorous bottom-up analysis.",
                clientImpactBody: "Research insights supported investment decisions with a clear, well-documented analytical framework.",
                quoteSolid: "The research was grounded in financial fundamentals, not market sentiment.",
                quoteMuted: "Through DCF modelling, comparable company analysis, and sector deep-dives, the research delivered a comprehensive view of each investment opportunity.",
                faqHeading: "Financial Analysis & Investment Research Methodology",
                activeLabel: "Research Scope",
                activeQuestion: "What does the equity research scope cover?",
                activeAnswer: "The research covers financial statement analysis, DCF valuation, comparable company analysis, industry research, management quality assessment, and risk factor evaluation.",
                row2Label: "Evaluation Methods",
                row2Question: "Which financial research methods were applied?",
                row3Label: "Research Outcomes",
                row3Question: "What are the key investment conclusions from the research?",
              }} />
            )}
            {activeTab === "creative" && (
              <MobPillContent data={{
                milestoneHeading: "Key creative milestones",
                milestoneDescription: "Research reports, presentation decks, and investor materials were designed for clarity and impact.",
                keyAchievementBody: "Produced professional research reports and investor decks that communicate complex analysis clearly.",
                clientImpactBody: "Well-designed materials elevated the credibility and accessibility of the investment research.",
                quoteSolid: "Financial data was visualised to tell a clear, compelling investment story.",
                quoteMuted: "Charts, tables, and infographics were designed to make complex financial analysis immediately understandable for investment committee review.",
                faqHeading: "Research Report Design & Investor Communication",
                activeLabel: "Creative Direction",
                activeQuestion: "What is the creative direction for the research reports?",
                activeAnswer: "A professional, data-forward visual language was developed for research reports, covering financial charts, summary tables, executive briefs, and investor presentation templates.",
                row2Label: "Asset Production",
                row2Question: "What research materials and formats were produced?",
                row3Label: "Visual Impact",
                row3Question: "How does the visual design improve report clarity?",
              }} />
            )}
            {activeTab === "design" && (
              <MobPillContent data={{
                milestoneHeading: "Key design milestones",
                milestoneDescription: "Financial dashboards, report templates, and data visualisation systems were designed.",
                keyAchievementBody: "Designed a scalable report template system that maintains professional standards across all research output.",
                clientImpactBody: "Design templates reduced report production time and ensured consistent quality.",
                quoteSolid: "Every design element served the clarity of the financial narrative.",
                quoteMuted: "Typography, layout, and data visualisation were carefully balanced to ensure research reports were both rigorous and readable.",
                faqHeading: "Financial Dashboard & Report Template Design",
                activeLabel: "Design System",
                activeQuestion: "What does the research design system include?",
                activeAnswer: "The design system covers report templates, financial chart standards, data table formats, executive summary layouts, and presentation slide masters.",
                row2Label: "Screen Architecture",
                row2Question: "Which key templates make up the research design system?",
                row3Label: "Data Clarity",
                row3Question: "How does the design system improve financial data communication?",
              }} />
            )}
            {activeTab === "marketing" && (
              <MobPillContent data={{
                milestoneHeading: "Key distribution milestones",
                milestoneDescription: "Research distribution, investor communications, and platform marketing were executed.",
                keyAchievementBody: "Research was distributed to a targeted investor audience through structured communication channels.",
                clientImpactBody: "Effective distribution maximised the reach and impact of the investment research.",
                quoteSolid: "Research distribution was as strategic as the research itself.",
                quoteMuted: "Targeted investor communications, email distributions, and platform publishing ensured research reached the right audience at the right time.",
                faqHeading: "Research Distribution & Investor Communications",
                activeLabel: "Analytics Stack",
                activeQuestion: "What metrics were tracked for research distribution?",
                activeAnswer: "Email open rates, report downloads, investor engagement metrics, and platform visit analytics were tracked to measure research distribution effectiveness.",
                row2Label: "Distribution Strategy",
                row2Question: "How is equity research distributed to investors?",
                row3Label: "Engagement ROI",
                row3Question: "How is investor engagement with research measured?",
              }} />
            )}
            {activeTab === "development" && (
              <MobPillContent data={{
                milestoneHeading: "Key technical milestones",
                milestoneDescription: "Financial models, data pipelines, and research publishing infrastructure were built.",
                keyAchievementBody: "Built robust financial models and automated data pipelines for efficient research production.",
                clientImpactBody: "Technical infrastructure reduced model build time and improved research accuracy and consistency.",
                quoteSolid: "Financial models were engineered for accuracy, auditability, and scalability.",
                quoteMuted: "Excel-based financial models with structured assumptions, scenario analysis, and sensitivity tables were built to institutional standards with full audit trails.",
                faqHeading: "Financial Modelling & Research Infrastructure",
                activeLabel: "Tech Stack",
                activeQuestion: "What tools power the equity research infrastructure?",
                activeAnswer: "Excel for financial modelling, Python for data aggregation, Bloomberg/Capital IQ for data inputs, and structured report templates for consistent research output.",
                row2Label: "Scalability",
                row2Question: "How do the financial models scale for portfolio coverage?",
                row3Label: "Observability",
                row3Question: "How is model accuracy and research quality monitored?",
              }} />
            )}

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default Portfolio8ServiceCaseStudy;
