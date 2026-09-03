import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import OverviewSection from "./portfolio1/sections/OverviewSection";
import ResearchSection from "./portfolio1/sections/ResearchSection";
import CreativeSection from "./portfolio1/sections/CreativeSection";
import DesignSection from "./portfolio1/sections/DesignSection";
import MarketingSection from "./portfolio1/sections/MarketingSection";
import DevelopmentSection from "./portfolio1/sections/DevelopmentSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillTabs, { PillTab } from "../components/MobPillTabs";
import MobPillContent, { MobPillContentData } from "../components/MobPillContent";
import MobOverviewMain from "./portfolio1/mob/MobOverviewMain";
import MobResearchMain from "./portfolio1/mob/MobResearchMain";
import MobCreativeMain from "./portfolio1/mob/MobCreativeMain";
import MobDesignMain from "./portfolio1/mob/MobDesignMain";
import MobMarketingMain from "./portfolio1/mob/MobMarketingMain";
import MobDevelopmentMain from "./portfolio1/mob/MobDevelopmentMain";

const Portfolio1UXUIUIDesignWebsite = () => {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<"overview"|"research"|"creative"|"design"|"marketing"|"development">("overview");

  return (
    <>
      <DesktopPageWrapper designHeight={0} dynamicHeight>
          {/* Navbar — same as ServicePage */}
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
              {/* Frame 1171277134 — inner flex column */}
              <div
                id="_231_4686__Frame_1171277134"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: 0, gap: 57,
                  width: '100%',
                }}
              >
                {/* Heading */}
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
                  My Rameswaram Trip – Travel &amp; Temple Service Platform
                </span>

                {/* Metadata Row — Frame 233 */}
                <PortfolioMetadata />

                {/* Image Box */}
                <div
                  id="_231_4687__Image_Box"
                  style={{
                    position: 'relative', overflow: 'hidden',
                    width: 1331, height: 625,
                    borderRadius: 20.4131,
                    flex: 'none', order: 2, alignSelf: 'stretch', flexGrow: 0,
                  }}
                >
                  <div
                    id="_231_4688__67bdaa31ce4ff0b778ed"
                    style={{
                      position: 'absolute', overflow: 'hidden',
                      width: 1335.11, height: 627.5, left: 0, top: 0,
                      background: 'rgba(0,0,0,0.2)',
                    }}
                  >
                    <div
                      id="_231_4689__Gemini_Logo_Removed_"
                      style={{
                        position: 'absolute',
                        width: 1335, height: 628, left: 0, top: 0.5,
                        background: 'url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Expertise Section */}
            <div style={{ width: 1420, background: "#F6F7F9", borderRadius: 20.4131, flexShrink: 0, padding: "50px 0", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 0, gap: 40, width: "100%" }}>
                  {/* Badge */}
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 20px", gap: 10, width: 172, height: 36, border: "0.969561px solid #202833", borderRadius: 236.844, flexShrink: 0 }}>
                    <span style={{ width: 132, height: 18, fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "18px", display: "flex", alignItems: "center", textAlign: "center", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833" }}>our expertise</span>
                  </div>
                  {/* Heading */}
                  <span style={{ width: 466, height: 72, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: "42px", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", color: "#111111", flexShrink: 0 }}>Comprehensive solutions for your business needs</span>
                  {/* Pills container — 2 rows */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: 1336 }}>
                    {/* Row 1: Overview, Research, Design, Development */}
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 0, gap: 20 }}>
                      {/* Overview */}
                      <div onClick={() => setActiveTab("overview")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 194.72, height: 77.72, background: activeTab === "overview" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "overview" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M15.2223 14.3731V20.4369V20.4117V30.4761V14.3731ZM15.2223 32.4889C14.6688 32.4889 14.1949 32.2918 13.8007 31.8976C13.4065 31.5035 13.2094 31.0296 13.2094 30.4761V14.3731C13.2094 13.8196 13.4065 13.3457 13.8007 12.9515C14.1949 12.5574 14.6688 12.3603 15.2223 12.3603H23.2738L29.3124 18.3989V20.9149C28.9937 20.7807 28.6666 20.6759 28.3311 20.6004C27.9956 20.5249 27.6518 20.4704 27.2995 20.4369V19.4053H22.2673V14.3731H15.2223V30.4761H21.2861C21.5544 30.8786 21.8564 31.2518 22.1919 31.5957C22.5273 31.9396 22.8964 32.2373 23.2989 32.4889H15.2223ZM28.5827 28.74C29.0691 28.2535 29.3124 27.658 29.3124 26.9535C29.3124 26.249 29.0691 25.6536 28.5827 25.1671C28.0963 24.6807 27.5008 24.4375 26.7963 24.4375C26.0918 24.4375 25.4963 24.6807 25.0099 25.1671C24.5234 25.6536 24.2802 26.249 24.2802 26.9535C24.2802 27.658 24.5234 28.2535 25.0099 28.74C25.4963 29.2264 26.0918 29.4696 26.7963 29.4696C27.5008 29.4696 28.0963 29.2264 28.5827 28.74ZM31.9291 33.4954L29.2117 30.778C28.8595 31.0128 28.4779 31.1889 28.0669 31.3064C27.6559 31.4238 27.2324 31.4825 26.7963 31.4825C25.5382 31.4825 24.4689 31.0422 23.5883 30.1615C22.7076 29.2809 22.2673 28.2116 22.2673 26.9535C22.2673 25.6955 22.7076 24.6262 23.5883 23.7455C24.4689 22.8649 25.5382 22.4246 26.7963 22.4246C28.0543 22.4246 29.1237 22.8649 30.0043 23.7455C30.8849 24.6262 31.3252 25.6955 31.3252 26.9535C31.3252 27.3897 31.2665 27.8132 31.1491 28.2242C31.0317 28.6351 30.8556 29.0167 30.6207 29.369L33.3381 32.0863L31.9291 33.4954Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 79, height: 30, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", textTransform: "capitalize", color: activeTab === "overview" ? "#FFFFFF" : "#0161FE" }}>Overview</span>
                      </div>
                      {/* Research */}
                      <div onClick={() => setActiveTab("research")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 197.72, height: 77.72, background: activeTab === "research" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "research" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M20.1287 24.1544H24.1544V22.1415H20.1287V24.1544ZM20.1287 21.1351H28.1801V19.1222H20.1287V21.1351ZM20.1287 18.1158H28.1801V16.1029H20.1287V18.1158ZM18.1158 28.1801C17.5623 28.1801 17.0884 27.983 16.6942 27.5888C16.3 27.1947 16.1029 26.7208 16.1029 26.1673V14.0901C16.1029 13.5365 16.3 13.0627 16.6942 12.6685C17.0884 12.2743 17.5623 12.0772 18.1158 12.0772H30.193C30.7465 12.0772 31.2204 12.2743 31.6146 12.6685C32.0088 13.0627 32.2059 13.5365 32.2059 14.0901V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H18.1158ZM18.1158 26.1673H30.193V14.0901H18.1158V26.1673ZM14.0901 32.2059C13.5365 32.2059 13.0627 32.0088 12.6685 31.6146C12.2743 31.2204 12.0772 30.7465 12.0772 30.193V16.1029H14.0901V30.193H28.1801V32.2059H14.0901Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 82, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "research" ? "#FFFFFF" : "#0161FE" }}>Research</span>
                      </div>
                      {/* Design */}
                      <div onClick={() => setActiveTab("design")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 176.72, height: 77.72, background: activeTab === "design" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "design" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M14.0901 31.1994V26.9221L27.3498 13.6875C27.5511 13.4862 27.7776 13.3352 28.0292 13.2346C28.2808 13.134 28.5324 13.0836 28.784 13.0836C29.0524 13.0836 29.3082 13.134 29.5514 13.2346C29.7946 13.3352 30.0085 13.4862 30.193 13.6875L31.602 15.0965C31.8033 15.281 31.9543 15.4949 32.0549 15.7381C32.1555 15.9813 32.2059 16.2371 32.2059 16.5055C32.2059 16.7571 32.1555 17.0087 32.0549 17.2603C31.9543 17.5119 31.8033 17.7384 31.602 17.9397L18.3674 31.1994H14.0901ZM16.1029 29.1866H17.5119L27.4001 19.3235L26.6956 18.5939L25.966 17.8893L16.1029 27.7776V29.1866ZM24.1544 31.1994C25.3957 31.1994 26.5447 30.8891 27.6014 30.2685C28.6582 29.6478 29.1866 28.784 29.1866 27.6769C29.1866 27.0731 29.0272 26.5531 28.7085 26.1169C28.3898 25.6808 27.9621 25.3034 27.4253 24.9847L25.9408 26.4692C26.3266 26.6369 26.6285 26.8214 26.8466 27.0227C27.0647 27.224 27.1737 27.4421 27.1737 27.6769C27.1737 28.0627 26.8676 28.4108 26.2553 28.7211C25.6431 29.0314 24.9428 29.1866 24.1544 29.1866C23.8692 29.1866 23.6302 29.283 23.4373 29.4759C23.2444 29.6688 23.148 29.9078 23.148 30.193C23.148 30.4782 23.2444 30.7172 23.4373 30.9101C23.6302 31.103 23.8692 31.1994 24.1544 31.1994ZM14.6688 23.5002L16.1784 21.9906C15.8429 21.8564 15.5787 21.718 15.3858 21.5754C15.1929 21.4328 15.0965 21.2861 15.0965 21.1351C15.0965 20.9338 15.2475 20.7325 15.5494 20.5312C15.8513 20.33 16.4887 20.0196 17.4616 19.6003C18.9377 18.9629 19.919 18.3842 20.4054 17.8642C20.8919 17.3442 21.1351 16.7571 21.1351 16.1029C21.1351 15.1804 20.7661 14.4465 20.028 13.9014C19.29 13.3562 18.3171 13.0836 17.1094 13.0836C16.3545 13.0836 15.6794 13.2178 15.0839 13.4862C14.4884 13.7546 14.0314 14.0817 13.7127 14.4675C13.5281 14.6855 13.4527 14.9288 13.4862 15.1971C13.5198 15.4655 13.6456 15.6836 13.8636 15.8513C14.0817 16.0358 14.3249 16.1113 14.5933 16.0778C14.8617 16.0442 15.0881 15.9352 15.2726 15.7507C15.5075 15.5158 15.7675 15.3481 16.0526 15.2475C16.3378 15.1468 16.69 15.0965 17.1094 15.0965C17.7971 15.0965 18.3045 15.1971 18.6316 15.3984C18.9587 15.5997 19.1222 15.8345 19.1222 16.1029C19.1222 16.3378 18.9755 16.5516 18.6819 16.7445C18.3884 16.9374 17.7132 17.2771 16.6565 17.7635C15.3146 18.3506 14.3836 18.8832 13.8636 19.3613C13.3436 19.8393 13.0836 20.4306 13.0836 21.1351C13.0836 21.6719 13.2262 22.1289 13.5114 22.5064C13.7965 22.8838 14.1823 23.2151 14.6688 23.5002Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 61, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "design" ? "#FFFFFF" : "#0161FE" }}>Design</span>
                      </div>
                      {/* Development */}
                      <div onClick={() => setActiveTab("development")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 231.72, height: 77.72, background: activeTab === "development" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "development" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M16.1029 27.1768L11.0708 22.1447L16.1029 17.1125L17.5119 18.5215L13.9139 22.1447L17.5119 25.7678L16.1029 27.1768ZM20.5816 30.4981L18.6693 29.8942L23.7015 13.7913L25.6137 14.3951L20.5816 30.4981ZM28.1801 27.1768L26.7711 25.7678L30.3691 22.1447L26.7711 18.5215L28.1801 17.1125L33.2123 22.1447L28.1801 27.1768Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 116, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "development" ? "#FFFFFF" : "#0161FE" }}>Development</span>
                      </div>
                    </div>
                    {/* Row 2: Creative, Marketing */}
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 0, gap: 20 }}>
                      {/* Creative */}
                      <div onClick={() => setActiveTab("creative")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 187.72, height: 77.72, background: activeTab === "creative" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "creative" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M19.6582 28.6781C19.0146 28.6781 18.4636 28.4489 18.0052 27.9906C17.5469 27.5322 17.3177 26.9813 17.3177 26.3376V24.8748C16.206 24.1142 15.3429 23.139 14.7286 21.9492C14.1142 20.7595 13.807 19.4917 13.807 18.1459C13.807 15.864 14.6018 13.9282 16.1914 12.3386C17.7809 10.749 19.7167 9.95425 21.9987 9.95425C24.2807 9.95425 26.2164 10.749 27.806 12.3386C29.3956 13.9282 30.1904 15.864 30.1904 18.1459C30.1904 19.4917 29.8832 20.7546 29.2688 21.9346C28.6544 23.1146 27.7914 24.0947 26.6797 24.8748V26.3376C26.6797 26.9813 26.4505 27.5322 25.9921 27.9906C25.5338 28.4489 24.9828 28.6781 24.3392 28.6781H19.6582ZM19.6582 26.3376H24.3392V23.6461L25.3339 22.9439C26.1335 22.3978 26.7528 21.7005 27.1916 20.8521C27.6305 20.0037 27.8499 19.1016 27.8499 18.1459C27.8499 16.5271 27.2794 15.1472 26.1384 14.0062C24.9974 12.8652 23.6175 12.2947 21.9987 12.2947C20.3799 12.2947 18.9999 12.8652 17.859 14.0062C16.718 15.1472 16.1475 16.5271 16.1475 18.1459C16.1475 19.1016 16.3669 20.0037 16.8057 20.8521C17.2446 21.7005 17.8638 22.3978 18.6635 22.9439L19.6582 23.6461V26.3376ZM19.6582 33.3591C19.3266 33.3591 19.0487 33.2469 18.8244 33.0226C18.6001 32.7983 18.488 32.5204 18.488 32.1888V31.0186H25.5094V32.1888C25.5094 32.5204 25.3973 32.7983 25.173 33.0226C24.9487 33.2469 24.6707 33.3591 24.3392 33.3591H19.6582Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 72, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "creative" ? "#FFFFFF" : "#0161FE" }}>Creative</span>
                      </div>
                      {/* Marketing */}
                      <div onClick={() => setActiveTab("marketing")} style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", padding: "17px 24px", gap: 24, width: 202.72, height: 77.72, background: activeTab === "marketing" ? "#0161FE" : "#FFFFFF", borderRadius: 23.6864, flexShrink: 0 }}>
                        <div style={{ width: 43.72, height: 43.72, background: activeTab === "marketing" ? "rgba(255,255,255,0.3)" : "#0161FE", borderRadius: 38, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                          <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
                            <path d="M28.796 23.1794V20.7839H33.5871V23.1794H28.796ZM30.2334 31.5637L26.4005 28.6891L27.8378 26.7727L31.6707 29.6473L30.2334 31.5637ZM27.8378 17.1906L26.4005 15.2742L30.2334 12.3996L31.6707 14.316L27.8378 17.1906ZM13.2252 30.366V25.5749H12.0274C11.3686 25.5749 10.8047 25.3404 10.3356 24.8713C9.86644 24.4021 9.63188 23.8382 9.63188 23.1794V20.7839C9.63188 20.1251 9.86644 19.5612 10.3356 19.0921C10.8047 18.6229 11.3686 18.3884 12.0274 18.3884H16.8184L22.8072 14.7951V29.1682L16.8184 25.5749H15.6207V30.366H13.2252ZM20.4117 24.9162V19.0471L17.4772 20.7839H12.0274V23.1794H17.4772L20.4117 24.9162ZM24.005 25.9942V17.9692C24.544 18.4483 24.9782 19.0322 25.3076 19.7209C25.637 20.4096 25.8016 21.1632 25.8016 21.9817C25.8016 22.8001 25.637 23.5537 25.3076 24.2424C24.9782 24.9311 24.544 25.515 24.005 25.9942Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span style={{ width: 87, height: 30, fontFamily: "'SF Pro'", fontWeight: 400, fontSize: 20, lineHeight: "30px", display: "flex", alignItems: "center", letterSpacing: -0.592402, textTransform: "capitalize", color: activeTab === "marketing" ? "#FFFFFF" : "#0161FE" }}>Marketing</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Dynamic section — swaps based on active pill */}
            {activeTab === "overview" && <OverviewSection />}
            {activeTab === "research" && <ResearchSection />}
            {activeTab === "creative" && <CreativeSection />}
            {activeTab === "design" && <DesignSection />}
            {activeTab === "marketing" && <MarketingSection />}
            {activeTab === "development" && <DevelopmentSection />}

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
      </DesktopPageWrapper>
      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner
            iconSrc="/assets/p1/images/group.svg"
            avatarSrc="/assets/p1/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">

            {/* HERO */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center pt-[25px] pb-[12px] px-[15px]" style={{ gap: 30 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 21.62, width: '100%' }}>
                <span style={{ width: '100%', fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400, fontSize: 28, lineHeight: '36px', textAlign: 'center', color: '#111111' }}>
                  My Rameswaram Trip – Travel &amp; Temple Service Platform
                </span>
              </div>
              <PortfolioMetadataMobile assetBasePath="/assets/p1/images" siteViewColor="#1B66FE" />
              <div style={{ width: 359.74, height: 230.08, background: '#FFFFFF', borderRadius: 15.26, flexShrink: 0, alignSelf: 'stretch', flexGrow: 0, position: 'relative', overflow: 'hidden' }}>
                <img src="/assets/p1/images/gemini_logo_removed_1.png" alt="" style={{ position: 'absolute', width: 360, height: 230, left: 'calc(50% - 180px - 0.5px)', top: 'calc(50% - 115px + 0.16px)', objectFit: 'cover' }} />
              </div>
            </div>

          {/* PILL TABS */}
          <MobPillTabs active={activeTab} onChange={setActiveTab} />

          {/* TAB MAIN CONTENT */}
          {activeTab === "overview" && <MobOverviewMain />}
          {activeTab === "research" && <MobResearchMain />}
          {activeTab === "creative" && <MobCreativeMain />}
          {activeTab === "design" && <MobDesignMain />}
          {activeTab === "marketing" && <MobMarketingMain />}
          {activeTab === "development" && <MobDevelopmentMain />}

          {/* MILESTONE + QUOTE + FAQ per tab */}
          {activeTab === "overview" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This platform improves travel planning for pilgrims and tourists visiting Rameswaram through user research, usability analysis, and clear, intuitive design.",
              keyAchievementBody: "Improved information clarity and user navigation by structuring content around real user needs and journey flows.",
              clientImpactBody: "The platform offers a smoother, intuitive experience that helps visitors plan trips and access temple services with confidence.",
              quoteSolid: "This project was approached with a user-first mindset, focusing on the needs of pilgrims and travelers visiting Rameswaram.",
              quoteMuted: "Through research, journey mapping, and usability testing, the platform was designed to balance travel convenience with the spiritual context of temple services, ensuring clarity, accessibility, and trust at every step.",
              faqHeading: "My Rameswaram Trip - Travel & Temple Service Platform",
              activeLabel: "Overview",
              activeQuestion: "What is the myrameswaramtrip.com platform overview?",
              activeAnswer: "This platform presents a geographically distributed, user-centered digital overview of myrameswaramtrip.com. The goal is to demonstrate how the service unifies regional pilgrimage touchpoints, from temple bookings to local travel, through an intuitive and trustworthy interface that scales across visitor regions.",
              row2Label: "Coverage Strategy",
              row2Question: "How is the solution built for businesses across regions?",
              row3Label: "User Problems Identified",
              row3Question: "What regional discovery problems did the overview address?",
            }} />
          )}
          {activeTab === "research" && (
            <MobPillContent data={{
              milestoneHeading: "Research milestones and heuristic findings",
              milestoneDescription: "This project evaluated the website usability for pilgrims and tourists visiting Rameswaram through heuristic analysis, UI research, and interface evaluation.",
              keyAchievementBody: "Identified website navigation strengths and structural improvements through analysis of booking flows and information architecture.",
              clientImpactBody: "Provided UX recommendations to build trust, simplify booking forms, and improve mobile accessibility.",
              quoteSolid: "This research was approached with a user-first mindset, focusing on the digital interactions of pilgrims using myrameswaramtrip.com.",
              quoteMuted: "Through heuristic evaluation, interface analysis, and competitive benchmarking, the website was evaluated on how it balances transactional convenience with the critical digital trust required for booking sacred temple services online.",
              faqHeading: "High-Availability Engineering for Faith-Based Ecosystems",
              activeLabel: "Research Scope",
              activeQuestion: "What does the UX research scope cover for this platform?",
              activeAnswer: "The research executes a 25-section heuristic evaluation spanning information architecture, homepage hierarchy, error handling, phygital CTAs, booking flows, constraint-based search, transparent pricing heuristics, real-world variable management, content strategy, policy friction analysis, competitive benchmarking, accessibility, and future UX roadmapping with AI integrations.",
              row2Label: "Evaluation Methods",
              row2Question: "Which UX evaluation methods were applied during the audit?",
              row3Label: "Research Outcomes",
              row3Question: "What are the key actionable outcomes from the research?",
            }} />
          )}
          {activeTab === "creative" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This project created a unified Rameswaram platform for Puja, Scuba Diving, Stays, Cab Booking, Attractions, and Travel Experiences.",
              keyAchievementBody: "Built a user-friendly platform for discovering services, comparing options, viewing details, and making bookings easily.",
              clientImpactBody: "The platform simplifies Rameswaram trip planning, from temple pujas and stays to cabs, scuba diving, and local experiences.",
              quoteSolid: "This AI-driven video campaign was developed with a user-first approach, visually mapping the complete travel journey of pilgrims and tourists visiting Rameswaram.",
              quoteMuted: "The dynamically generated video assets showcase how the platform brings multiple services together, helping users easily discover and visualize Puja Services, Scuba Diving, Stays, Cab Services, and Attractions to drive engagement and booking conversions.",
              faqHeading: "AI Video Generation Architecture and Inference Optimization",
              activeLabel: "Creative Direction",
              activeQuestion: "What is the visual creative direction for the video promotion?",
              activeAnswer: "The campaign leverages premium iPhone 14 Pro device mockups as the consistent visual vessel, presenting four alternating visual narratives that progressively guide users from exploration through ritual discovery, effortless booking, and peaceful accommodation selection in a polished, app-store-quality aesthetic.",
              row2Label: "Asset Production",
              row2Question: "How many creative verticals and layouts were produced for promotion?",
              row3Label: "Visual Impact",
              row3Question: "How does the mobile-first framing elevate the promotional storytelling?",
            }} />
          )}
          {activeTab === "design" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "The website design significantly improved the travel planning process for Rameswaram visitors through targeted research, usability analysis, and clear visual design.",
              keyAchievementBody: "Improved clarity and navigation by restructuring content around user needs and logical journeys.",
              clientImpactBody: "Delivered a smoother, intuitive experience for confident trip planning and temple service access.",
              quoteSolid: "My Rameswaram Trip was designed with a deep understanding of its users.",
              quoteMuted: "Through extensive research, user journey mapping, and usability testing, we built a website that bridges the gap between logistical travel planning and the spiritual significance of temple visits. Our focus on intuitive design and accessibility ensures a trustworthy, frictionless experience from start to finish.",
              faqHeading: "Responsive Web Design and Mobile Accessibility",
              activeLabel: "Booking Flow",
              activeQuestion: "How does the attraction booking flow design reduce cognitive friction?",
              activeAnswer: "The booking flow minimizes cognitive friction by decomposing complex logistical permutations into four strictly sequential tasks - Browse, Compare, Review Details, and Confirm Booking. It enforces dependency validation so users must select an attraction before time slots appear, and presents a highly visible three-step mental model on-screen before the first click.",
              row2Label: "Screen Architecture",
              row2Question: "Which key screens make up the website design system?",
              row3Label: "Error Prevention",
              row3Question: "What design patterns prevent errors during the booking process?",
            }} />
          )}
          {activeTab === "marketing" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "This project strengthened the brand's digital presence through strategic advertising, SEO optimization, social media campaigns, and performance-driven marketing.",
              keyAchievementBody: "Improved online visibility through targeted campaigns, optimized content, and data-driven marketing.",
              clientImpactBody: "Improved digital engagement by using performance insights to reach the right audience.",
              quoteSolid: "This project was approached with a performance-focused mindset, combining audience research, SEO, paid advertising, and social media marketing.",
              quoteMuted: "Campaign performance was continuously analyzed to optimize reach, engagement, traffic, and conversions across digital channels.",
              faqHeading: "Marketing Analytics and Conversion Tracking in Religious Travel",
              activeLabel: "Analytics Stack",
              activeQuestion: "What marketing analytics are implemented to measure platform performance?",
              activeAnswer: "Three integrated measurement panels are deployed: a web analytics dashboard tracking visitors, engagement, traffic sources, and user behavior patterns; an SEO dashboard monitoring keyword rankings, search visibility, clicks, and impressions to grow organic traffic; and a social media campaign dashboard measuring ad performance, audience engagement, reach, and conversion results across paid promotional channels.",
              row2Label: "SEO Strategy",
              row2Question: "How does the marketing approach scale organic search visibility?",
              row3Label: "Campaign ROI",
              row3Question: "How is social media campaign performance and ROI measured?",
            }} />
          )}
          {activeTab === "development" && (
            <MobPillContent data={{
              milestoneHeading: "Key milestones and outcomes of the project",
              milestoneDescription: "The My Rameswaram Trip website was developed as a user-focused platform, helping pilgrims and tourists explore Rameswaram, discover services, and make bookings easily.",
              keyAchievementBody: "Developed a responsive website with clear navigation and streamlined bookings for temple, travel, attractions, and stays.",
              clientImpactBody: "The website simplifies service discovery, trip planning, and bookings for a smoother Rameswaram travel experience.",
              quoteSolid: "The MyRameswaramTrip platform was engineered with a user-first architecture, focusing on the end-to-end digital journey of pilgrims and tourists.",
              quoteMuted: "The web development process centered on integrating highly fragmented local logistics into a single, cohesive application. We built dedicated, scalable modules that allow users to seamlessly discover, evaluate, and book Puja Services, Scuba Diving, Stays, Cab Networks, and Attractions, delivering a high-performance interface that prioritizes transactional clarity and convenience.",
              faqHeading: "Full-Stack Architecture and Web Development",
              activeLabel: "Tech Stack",
              activeQuestion: "What full-stack technology powers the MyRameswaramTrip platform?",
              activeAnswer: "The production infrastructure combines a Golang backend with advanced Goroutine concurrency management and token-bucket rate limiting, a PostgreSQL relational database with mathematically tuned pgxpool connection lifecycles to prevent seasonal database exhaustion, and a Next.js frontend optimized for Core Web Vitals and SEO-driven SSR rendering to dominate organic search, all monitored in real-time via Prometheus metrics and Grafana observability dashboards.",
              row2Label: "Scalability",
              row2Question: "How does the architecture scale for peak pilgrimage traffic?",
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
export default Portfolio1UXUIUIDesignWebsite;


