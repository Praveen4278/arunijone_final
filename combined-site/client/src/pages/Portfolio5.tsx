import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import OverviewSection from "./portfolio1/sections/OverviewSection";
import Portfolio5ResearchSection from "./portfolio5/sections/Portfolio5ResearchSection";
import Portfolio5DesignSection from "./portfolio5/sections/Portfolio5DesignSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillTabs from "../components/MobPillTabs";
import MobPillContent, { MobPillContentData } from "../components/MobPillContent";
import MobOverviewMain from "./portfolio1/mob/MobOverviewMain";
import MobResearchMain from "./portfolio1/mob/MobResearchMain";
import MobCreativeMain from "./portfolio1/mob/MobCreativeMain";
import MobDesignMain from "./portfolio1/mob/MobDesignMain";
import MobMarketingMain from "./portfolio1/mob/MobMarketingMain";
import MobDevelopmentMain from "./portfolio1/mob/MobDevelopmentMain";

const Portfolio5ServiceCaseStudy = () => {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<"overview"|"research"|"design"|"creative"|"marketing"|"development">("overview");

  return (
    <>
      <DesktopPageWrapper designHeight={0} dynamicHeight>
          <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
            <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>
              <div onClick={() => { navigate('/'); window.scrollTo(0, 0); }} style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66, cursor: 'pointer' }}>
                <div style={{ position: 'absolute', width: 66, height: 66, background: '#FFFFFF', borderRadius: 1000 }} />
                <img
                  src="/figmaAssets/logo.png"
                  alt="Arunijone Logo"
                  style={{ position: 'absolute', width: 49, height: 42, top: 'calc(50% - 21px)', left: 'calc(50% - 24.5px)', borderRadius: 12, objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute', width: 416, height: 47,
                left: 'calc(50% - 208px)', top: 'calc(50% - 23.5px)',
                display: 'flex', flexDirection: 'row', alignItems: 'center',
                padding: '12px 13px', gap: 72,
              }}>
                {[
                  { label: 'Home',      href: '/',          color: '#111111', w: 44 },
                  { label: 'About',     href: '/about',     color: '#111111', w: 41 },
                  { label: 'Explore',   href: '/explore',   color: '#111111', w: 51 },
                  { label: 'Blogs',     href: '/blog',      color: '#111111', w: 38 },
                ].map(({ label, href, color, w }) => (
                  <Link key={label} href={href} style={{
                    width: w, height: 23, textDecoration: 'none',
                    fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400,
                    fontSize: 16, lineHeight: '22px', color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>{label}</Link>
                ))}
              </div>
              <button
                onClick={() => navigate('/contact')}
                style={{
                position: 'absolute', left: 1272.55, top: 'calc(50% - 26.5px - 0.3px)',
                width: 115, height: 53,
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                padding: '15px 26px', gap: 10,
                background: '#0161FE', borderRadius: 111.786, border: 'none', cursor: 'pointer',
              }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                  fontSize: 15.7778, lineHeight: '22px', letterSpacing: -0.0788889,
                  color: '#FFFFFF', width: 63, height: 23,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>Contact</span>
              </button>
            </div>
          </header>


          <div
            id="_231_4683__Frame_1171277014"
            className="absolute h-auto w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          >
            <div
              id="_231_4684__Section"
              style={{
                position: 'relative',
                background: '#F6F7F9',
                width: '100%',
                borderRadius: 20.4131,
                overflow: 'hidden',
                flexShrink: 0,
                padding: '45px',
                boxSizing: 'border-box',
              }}
            >
              <div
                id="_231_4686__Frame_1171277134"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: 0, gap: 57,
                  width: '100%',
                }}
              >
                <span
                  id="_231_4685__Heading_1___Operatio"
                  style={{
                    width: 1331, height: 49,
                    fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400,
                    fontSize: 40.8113, lineHeight: '47px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', color: '#111111',
                    flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0,
                  }}
                >
                  Find Pattu: The Art of Instant Music Recognition
                </span>

                <PortfolioMetadata
                  nameCorp="Client Alpha"
                  duration="4 Months"
                  releaseDate="2025"
                  siteView="service1.example.com"
                  siteViewColor="#0D5CFF"
                  siteViewHref="https://service1.example.com"
                />

                <div
                  id="_231_4687__Image_Box"
                  style={{
                    position: 'relative', overflow: 'hidden',
                    width: 1331, height: 625,
                    borderRadius: 20.4131,
                    flex: 'none', order: 2, alignSelf: 'stretch', flexGrow: 0,
                  }}
                >
                  {/* White backdrop */}
                  <div style={{ position: 'absolute', width: 1335.11, height: 627.5, left: 0, top: 0, background: '#FFFFFF' }} />
                  {/* Decorative blue dots scattered around the logo */}
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '38%',  top: '20%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '58%',  top: '18%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '64%',  top: '35%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '62%',  top: '62%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '42%',  top: '72%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '34%',  top: '55%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '36%',  top: '38%',  background: '#0161FE' }} />
                  <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: '55%',  top: '74%',  background: '#0161FE' }} />
                  {/* Logo — Group 12, centered, on top */}
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Service 1" style={{ position: 'absolute', width: 301, height: 299.73, left: 'calc(50% - 150.5px)', top: 'calc(50% - 149.865px)', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

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
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M15.2223 14.3731V20.4369V20.4117V30.4761V14.3731ZM15.2223 32.4889C14.6688 32.4889 14.1949 32.2918 13.8007 31.8976C13.4065 31.5035 13.2094 31.0296 13.2094 30.4761V14.3731C13.2094 13.8196 13.4065 13.3457 13.8007 12.9515C14.1949 12.5574 14.6688 12.3603 15.2223 12.3603H23.2738L29.3124 18.3989V20.9149C28.9937 20.7807 28.6666 20.6759 28.3311 20.6004C27.9956 20.5249 27.6518 20.4704 27.2995 20.4369V19.4053H22.2673V14.3731H15.2223V30.4761H21.2861C21.5544 30.8786 21.8564 31.2518 22.1919 31.5957C22.5273 31.9396 22.8964 32.2373 23.2989 32.4889H15.2223ZM28.5827 28.74C29.0691 28.2535 29.3124 27.658 29.3124 26.9535C29.3124 26.249 29.0691 25.6536 28.5827 25.1671C28.0963 24.6807 27.5008 24.4375 26.7963 24.4375C26.0918 24.4375 25.4963 24.6807 25.0099 25.1671C24.5234 25.6536 24.2802 26.249 24.2802 26.9535C24.2802 27.658 24.5234 28.2535 25.0099 28.74C25.4963 29.2264 26.0918 29.4696 26.7963 29.4696C27.5008 29.4696 28.0963 29.2264 28.5827 28.74ZM31.9291 33.4954L29.2117 30.778C28.8595 31.0128 28.4779 31.1889 28.0669 31.3064C27.6559 31.4238 27.2324 31.4825 26.7963 31.4825C25.5382 31.4825 24.4689 31.0422 23.5883 30.1615C22.7076 29.2809 22.2673 28.2116 22.2673 26.9535C22.2673 25.6955 22.7076 24.6262 23.5883 23.7455C24.4689 22.8649 25.5382 22.4246 26.7963 22.4246C28.0543 22.4246 29.1237 22.8649 30.0043 23.7455C30.8849 24.6262 31.3252 25.6955 31.3252 26.9535C31.3252 27.3897 31.2665 27.8132 31.1491 28.2242C31.0317 28.6351 30.8556 29.0167 30.6207 29.369L33.3381 32.0863L31.9291 33.4954Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 79, height: 30, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", textTransform: "capitalize", color: activeTab === "overview" ? "#FFFFFF" : "#0161FE" }}>Overview</span>
                      </div>
                      <div onClick={() => setActiveTab("research")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 197.72, height: 77.72, background: activeTab === "research" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "research" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M20.1287 24.1544H24.1544V22.1415H20.1287V24.1544ZM20.1287 21.1351H28.1801V19.1222H20.1287V21.1351ZM20.1287 18.1158H28.1801V16.1029H20.1287V18.1158ZM18.1158 28.1801C17.5623 28.1801 17.0884 27.983 16.6942 27.5888C16.3 27.1947 16.1029 26.7208 16.1029 26.1673V14.0901C16.1029 13.5365 16.3 13.0627 16.6942 12.6685C17.0884 12.2743 17.5623 12.0772 18.1158 12.0772H30.193C30.7465 12.0772 31.2204 12.2743 31.6146 12.6685C32.0088 13.0627 32.2059 13.5365 32.2059 14.0901V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H18.1158ZM18.1158 26.1673H30.193V14.0901H18.1158V26.1673ZM14.0901 32.2059C13.5365 32.2059 13.0627 32.0088 12.6685 31.6146C12.2743 31.2204 12.0772 30.7465 12.0772 30.193V16.1029H14.0901V30.193H28.1801V32.2059H14.0901Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 82, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "research" ? "#FFFFFF" : "#0161FE" }}>Research</span>
                      </div>
                      <div onClick={() => setActiveTab("design")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 176.72, height: 77.72, background: activeTab === "design" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "design" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M14.0901 31.1994V26.9221L27.3498 13.6875C27.5511 13.4862 27.7776 13.3352 28.0292 13.2346C28.2808 13.134 28.5324 13.0836 28.784 13.0836C29.0524 13.0836 29.3082 13.134 29.5514 13.2346C29.7946 13.3352 30.0085 13.4862 30.193 13.6875L31.602 15.0965C31.8033 15.281 31.9543 15.4949 32.0549 15.7381C32.1555 15.9813 32.2059 16.2371 32.2059 16.5055C32.2059 16.7571 32.1555 17.0087 32.0549 17.2603C31.9543 17.5119 31.8033 17.7384 31.602 17.9397L18.3674 31.1994H14.0901ZM16.1029 29.1866H17.5119L27.4001 19.3235L26.6956 18.5939L25.966 17.8893L16.1029 27.7776V29.1866ZM24.1544 31.1994C25.3957 31.1994 26.5447 30.8891 27.6014 30.2685C28.6582 29.6478 29.1866 28.784 29.1866 27.6769C29.1866 27.0731 29.0272 26.5531 28.7085 26.1169C28.3898 25.6808 27.9621 25.3034 27.4253 24.9847L25.9408 26.4692C26.3266 26.6369 26.6285 26.8214 26.8466 27.0227C27.0647 27.224 27.1737 27.4421 27.1737 27.6769C27.1737 28.0627 26.8676 28.4108 26.2553 28.7211C25.6431 29.0314 24.9428 29.1866 24.1544 29.1866C23.8692 29.1866 23.6302 29.283 23.4373 29.4759C23.2444 29.6688 23.148 29.9078 23.148 30.193C23.148 30.4782 23.2444 30.7172 23.4373 30.9101C23.6302 31.103 23.8692 31.1994 24.1544 31.1994ZM14.6688 23.5002L16.1784 21.9906C15.8429 21.8564 15.5787 21.718 15.3858 21.5754C15.1929 21.4328 15.0965 21.2861 15.0965 21.1351C15.0965 20.9338 15.2475 20.7325 15.5494 20.5312C15.8513 20.33 16.4887 20.0196 17.4616 19.6003C18.9377 18.9629 19.919 18.3842 20.4054 17.8642C20.8919 17.3442 21.1351 16.7571 21.1351 16.1029C21.1351 15.1804 20.7661 14.4465 20.028 13.9014C19.29 13.3562 18.3171 13.0836 17.1094 13.0836C16.3545 13.0836 15.6794 13.2178 15.0839 13.4862C14.4884 13.7546 14.0314 14.0817 13.7127 14.4675C13.5281 14.6855 13.4527 14.9288 13.4862 15.1971C13.5198 15.4655 13.6456 15.6836 13.8636 15.8513C14.0817 16.0358 14.3249 16.1113 14.5933 16.0778C14.8617 16.0442 15.0881 15.9352 15.2726 15.7507C15.5075 15.5158 15.7675 15.3481 16.0526 15.2475C16.3378 15.1468 16.69 15.0965 17.1094 15.0965C17.7971 15.0965 18.3045 15.1971 18.6316 15.3984C18.9587 15.5997 19.1222 15.8345 19.1222 16.1029C19.1222 16.3378 18.9755 16.5516 18.6819 16.7445C18.3884 16.9374 17.7132 17.2771 16.6565 17.7635C15.3146 18.3506 14.3836 18.8832 13.8636 19.3613C13.3436 19.8393 13.0836 20.4306 13.0836 21.1351C13.0836 21.6719 13.2262 22.1289 13.5114 22.5064C13.7965 22.8838 14.1823 23.2151 14.6688 23.5002Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 61, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "design" ? "#FFFFFF" : "#0161FE" }}>Design</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {activeTab === "overview" && <OverviewSection logoSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" />}
            {activeTab === "research" && <Portfolio5ResearchSection />}
            {activeTab === "design" && <Portfolio5DesignSection />}

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
      </DesktopPageWrapper>
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner
            iconSrc="/assets/p5/images/group.svg"
            avatarSrc="/assets/p5/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">

            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center pt-[25px] pb-[16px] px-[15px]" style={{ gap: 30 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 21.62, width: 359.5, minWidth: 359.5, height: 208.73 }}>
                <span style={{ width: 359, height: 208, fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400, fontSize: 40.8113, lineHeight: '52px', display: 'flex', alignItems: 'center', textAlign: 'center', color: '#111111' }}>
                  Service 1 – UX/UI Design &amp; Development Platform
                </span>
              </div>
              <PortfolioMetadataMobile
                assetBasePath="/assets/p5/images"
                siteViewColor="#1B66FE"
                nameCorp="Client Alpha"
                duration="4 Months"
                releaseDate="2025"
                siteView="service1.example.com"
                siteViewHref="https://service1.example.com"
              />
              <div style={{ width: '100%', height: 230.08, background: '#FFFFFF', borderRadius: 15.26, flexShrink: 0, alignSelf: 'stretch', flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="" style={{ width: 180, height: 180, objectFit: 'contain', borderRadius: 15.26 }} />
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
              milestoneDescription: "This UX/UI design & development platform delivers business-focused results through targeted research, design, and engineering execution.",
              keyAchievementBody: "Delivered a production-ready platform built around user-centered design, reducing friction in critical business flows.",
              clientImpactBody: "The solution offers a polished, intuitive experience that helps teams ship product faster and users convert confidently.",
              quoteSolid: "This engagement was approached with a user-first mindset, focusing on the intersection of design and scalable engineering.",
              quoteMuted: "Through research, journey mapping, and component-driven engineering, the platform was designed to balance usability with performance, ensuring accessibility, trust, and maintainable code quality at every step.",
              faqHeading: "Service 1 - UX/UI Design & Development Platform",
              activeLabel: "Overview",
              activeQuestion: "What is the Service 1 platform overview?",
              activeAnswer: "This case study presents a UX/UI design and full-stack development engagement that delivered a scalable, user-centered digital platform. The goal is to demonstrate how the service unifies product thinking, interaction design, and production engineering into a cohesive, trustworthy interface.",
              row2Label: "Coverage Strategy",
              row2Question: "How is the solution built for businesses across regions?",
              row3Label: "User Problems Identified",
              row3Question: "What discovery problems did the overview address?",
            }} />
          )}
          {activeTab === "research" && (
            <MobPillContent data={{
              milestoneHeading: "Research milestones and heuristic findings",
              milestoneDescription: "This project evaluated usability through heuristic analysis, UI research, and structural evaluation.",
              keyAchievementBody: "Identified structural improvements and navigation strengths through analysis of key user flows.",
              clientImpactBody: "Provided UX recommendations to build trust, simplify complex forms, and improve accessibility.",
              quoteSolid: "The research was approached with a user-first mindset, focusing on the digital interactions of real users.",
              quoteMuted: "Through heuristic evaluation, interface analysis, and competitive benchmarking, the product was evaluated on how it balances transactional convenience with digital trust and product clarity.",
              faqHeading: "Research Architecture & Heuristic Evaluation",
              activeLabel: "Research Scope",
              activeQuestion: "What does the UX research scope cover for this service?",
              activeAnswer: "The research executes a multi-section heuristic evaluation spanning information architecture, hierarchy, error handling, CTAs, booking flows, search, pricing heuristics, content strategy, friction analysis, competitive benchmarking, accessibility, and future UX roadmapping.",
              row2Label: "Evaluation Methods",
              row2Question: "Which UX evaluation methods were applied during the audit?",
              row3Label: "Research Outcomes",
              row3Question: "What are the key actionable outcomes from the research?",
            }} />
          )}
          {activeTab === "creative" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This project created a unified creative direction across brand, product screens, and promotional assets.",
              keyAchievementBody: "Built a user-friendly visual system for discovering services, comparing options, viewing details, and engaging.",
              clientImpactBody: "The creative system strengthens brand recall and makes product discovery feel effortless.",
              quoteSolid: "This creative campaign was developed with a user-first approach, visually mapping the complete product journey.",
              quoteMuted: "The dynamically presented assets showcase how the platform brings multiple services together, helping users easily discover and visualize the offering to drive engagement.",
              faqHeading: "Creative Direction & Asset Production",
              activeLabel: "Creative Direction",
              activeQuestion: "What is the visual creative direction for the promotion?",
              activeAnswer: "The campaign leverages premium device mockups as the consistent visual vessel, presenting alternating visual narratives that progressively guide users from exploration through discovery, booking, and confirmation in an app-store-quality aesthetic.",
              row2Label: "Asset Production",
              row2Question: "How many creative verticals and layouts were produced for promotion?",
              row3Label: "Visual Impact",
              row3Question: "How does the mobile-first framing elevate the promotional storytelling?",
            }} />
          )}
          {activeTab === "design" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "The design improved the experience through targeted research, usability analysis, and clear visual design.",
              keyAchievementBody: "Improved clarity and navigation by restructuring content around user needs and logical journeys.",
              clientImpactBody: "Delivered a smoother, intuitive experience for confident product usage and service access.",
              quoteSolid: "The platform was designed with a deep understanding of its users.",
              quoteMuted: "Through extensive research, user journey mapping, and usability testing, we built a product that bridges the gap between logistical flows and the emotional significance of each step. Our focus on intuitive design and accessibility ensures a trustworthy, frictionless experience.",
              faqHeading: "Responsive Web Design and Mobile Accessibility",
              activeLabel: "Booking Flow",
              activeQuestion: "How does the core booking flow design reduce cognitive friction?",
              activeAnswer: "The flow minimizes cognitive friction by decomposing complex permutations into strictly sequential tasks — Browse, Compare, Review Details, and Confirm. It enforces dependency validation so users select a service before time slots appear, and presents a visible step model on-screen before the first click.",
              row2Label: "Screen Architecture",
              row2Question: "Which key screens make up the design system?",
              row3Label: "Error Prevention",
              row3Question: "What design patterns prevent errors during the booking process?",
            }} />
          )}
          {activeTab === "marketing" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This engagement strengthened the brand's digital presence through strategic advertising, SEO, social media, and performance-driven marketing.",
              keyAchievementBody: "Improved online visibility through targeted campaigns, optimized content, and data-driven marketing.",
              clientImpactBody: "Improved digital engagement by using performance insights to reach the right audience.",
              quoteSolid: "This project was approached with a performance-focused mindset, combining audience research, SEO, paid advertising, and social media marketing.",
              quoteMuted: "Campaign performance was continuously analyzed to optimize reach, engagement, traffic, and conversions across digital channels.",
              faqHeading: "Marketing Analytics and Conversion Tracking",
              activeLabel: "Analytics Stack",
              activeQuestion: "What marketing analytics are implemented to measure platform performance?",
              activeAnswer: "Three integrated measurement panels are deployed: a web analytics dashboard tracking visitors, engagement, traffic sources, and user behavior; an SEO dashboard monitoring keyword rankings, search visibility, clicks, and impressions; and a social media campaign dashboard measuring ad performance, audience engagement, reach, and conversion results.",
              row2Label: "SEO Strategy",
              row2Question: "How does the marketing approach scale organic search visibility?",
              row3Label: "Campaign ROI",
              row3Question: "How is social media campaign performance and ROI measured?",
            }} />
          )}
          {activeTab === "development" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "The platform was developed as a user-focused product, helping teams discover, explore, and use services easily.",
              keyAchievementBody: "Developed a responsive platform with clear navigation and streamlined core flows.",
              clientImpactBody: "The website simplifies service discovery, product planning, and bookings for a smoother overall experience.",
              quoteSolid: "The platform was engineered with a user-first architecture, focusing on the end-to-end digital journey.",
              quoteMuted: "The web development process centered on integrating fragmented logistics into a single, cohesive application, with dedicated scalable modules that let users seamlessly discover, evaluate, and book services, delivering a high-performance interface that prioritizes transactional clarity and convenience.",
              faqHeading: "Full-Stack Architecture and Web Development",
              activeLabel: "Tech Stack",
              activeQuestion: "What full-stack technology powers the platform?",
              activeAnswer: "The production infrastructure combines a modern backend with advanced concurrency and rate limiting, a relational database with tuned connection-pool lifecycles to prevent seasonal database exhaustion, and a React/TypeScript frontend optimized for Core Web Vitals and SEO-driven rendering, all monitored in real-time via metrics and observability dashboards.",
              row2Label: "Scalability",
              row2Question: "How does the architecture scale for peak traffic?",
              row3Label: "Observability",
              row3Question: "How is production system health and performance monitored?",
            }} />
          )}

          <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>




    </>
  );
};
export default Portfolio5ServiceCaseStudy;
