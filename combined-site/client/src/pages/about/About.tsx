import React from "react";
import { Link, useLocation } from "wouter";
import MobBanner from "../../components/MobBanner";
import MobFooter from "../../components/MobFooter";
import MobilePageWrapper from "../../components/MobilePageWrapper";
import { BusinessCapabilitiesPortfolioSection } from "./sections/BusinessCapabilitiesPortfolioSection";
import { BusinessEcosystemAndCapabilitiesSection } from "./sections/BusinessEcosystemAndCapabilitiesSection";
import { GlobalReachMapSection } from "./sections/GlobalReachMapSection";
import { HeroIntroductionSection } from "./sections/HeroIntroductionSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 4580;

export const About = (): React.JSX.Element => {
  const [scale, setScale] = React.useState(1);
  const [, navigate] = useLocation();

  React.useEffect(() => {
    const update = () => {
      setScale(document.documentElement.clientWidth / DESIGN_WIDTH);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      <div className="hidden md:block" style={{ width: "100%", height: `${DESIGN_HEIGHT * scale}px`, overflow: "hidden", position: "relative" }}>
        <div style={{
          position: "absolute", width: DESIGN_WIDTH, height: DESIGN_HEIGHT, background: "white",
          overflow: "hidden",
          transformOrigin: "top center",
          left: "50%",
          top: 0,
          transform: `translateX(-50%) scale(${scale})`,
        }}>
          {/* NavBar */}
          <header style={{ position: "absolute", left: 10, top: 10, width: 1420, height: 87.76 }}>
            <div style={{ width: 1420, height: 87.76, background: "#F6F7F9", borderRadius: 22.3551, position: "relative" }}>

              {/* Logo */}
              <div style={{ position: "absolute", left: 42, top: "calc(50% - 33px + 0.12px)", width: 66, height: 66 }}>
                <div style={{ position: "absolute", width: 66, height: 66, background: "#FFFFFF", borderRadius: 1000 }} />
                <img
                  src="/figmaAssets/logo.png"
                  alt="Arunijone Logo"
                  style={{ position: "absolute", width: 49, height: 42, top: "calc(50% - 21px)", left: "calc(50% - 24.5px)", borderRadius: 12, objectFit: "cover" }}
                />
              </div>

              {/* Nav links */}
              <div style={{
                position: "absolute", width: 416, height: 47,
                left: "calc(50% - 208px)", top: "calc(50% - 23.5px)",
                display: "flex", flexDirection: "row", alignItems: "center",
                padding: "12px 13px", gap: 72,
              }}>
                {[
                  { label: "Home",    href: "/",        color: "#111111", w: 44 },
                  { label: "About",   href: "/about",   color: "#0161FE", w: 41 },
                  { label: "Service", href: "/service", color: "#111111", w: 51 },
                  { label: "Blogs",   href: "/blog",    color: "#111111", w: 38 },
                ].map(({ label, href, color, w }) => (
                  <Link key={label} href={href} style={{
                    width: w, height: 23, textDecoration: "none",
                    fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400,
                    fontSize: 16, lineHeight: "22px", color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{label}</Link>
                ))}
              </div>

              {/* Contact button */}
              <button 
                onClick={() => navigate("/contact")}
                style={{
                  position: "absolute", left: 1272.55, top: "calc(50% - 26.5px - 0.3px)",
                  width: 115, height: 53,
                  display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                  padding: "15px 26px", gap: 10,
                  background: "#0161FE", borderRadius: 111.786, border: "none", cursor: "pointer",
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                  fontSize: 15.7778, lineHeight: "22px", letterSpacing: -0.0788889,
                  color: "#FFFFFF", width: 63, height: 23,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>Contact</span>
              </button>

            </div>
          </header>

          <main style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 50, paddingTop: 108, marginLeft: 10, marginRight: 10 }}>
            <HeroIntroductionSection />
            <BusinessEcosystemAndCapabilitiesSection />
            <BusinessCapabilitiesPortfolioSection />
            <GlobalReachMapSection />
            <ProductShowcaseSection />
            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </main>
        </div>
      </div>

      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/homemob/images/group_2.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">

            {/* ── 1. HERO ── */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center gap-[16px] pt-[24px] pb-[24px]">
              <span className="text-center px-[16px]" style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 40, lineHeight: "46px", color: "#111111" }}>
                Expert guidance, tailored solution
              </span>
              <span className="text-center px-[16px]" style={{ fontFamily: "SF Pro Display", fontSize: 16, lineHeight: "20px", color: "rgba(109,109,110,0.8)" }}>
                Adapt easily and scale confidently with a flexible system designed to support your business at every stage of growth.
              </span>

              {/* Buttons row */}
              <div className="flex flex-row gap-[12px] flex-wrap justify-center px-[16px]">
                <button
                  className="flex items-center gap-[8px] bg-[#0161FE] rounded-[95px] px-[20px] py-[12px] border-0 cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  <span className="text-white text-[14px] font-medium" style={{ fontFamily: "SF Pro Display" }}>Contact</span>
                  <img src="/assets/about/images/vector_3.svg" alt="" style={{ width: 14, height: 10 }} />
                </button>
                <a
                  href="https://wa.me/919489456581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] bg-[#25D366] rounded-[95px] px-[18px] py-[12px] no-underline"
                >
                  <img src="/assets/about/images/group.svg" alt="WhatsApp" style={{ width: 20, height: 20 }} />
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: "SF Pro Display" }}>WhatsApp</span>
                </a>
              </div>

              {/* 2-column grid: photo cards + stat cards — mirrors desktop layout */}
              <div className="flex flex-row gap-[8px] w-[calc(100%-16px)]">
                {/* Left column */}
                <div className="flex flex-col gap-[8px] flex-1">
                  {/* Photo card 1 */}
                  <div className="relative h-[247px] w-full rounded-[15px] overflow-hidden">
                    <img src="/figmaAssets/image-262.png" alt="" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-black/20 rounded-[15px]" />
                  </div>
                  {/* Dark 3+ stat card */}
                  <div className="relative h-[247px] w-full bg-[#232323] rounded-[15px] p-[15px] flex flex-col justify-between">
                    <div className="w-[38px] h-[38px] relative">
                      <img src="/assets/about/images/vector.svg" alt="" className="absolute" style={{ left: "2%", top: "1%" }} />
                      <img src="/assets/about/images/vector_1.svg" alt="" className="absolute" style={{ left: "43%", top: "66%" }} />
                      <img src="/assets/about/images/vector_2.svg" alt="" className="absolute" style={{ left: "35%", top: "30%" }} />
                    </div>
                    <span style={{ fontFamily: "SF Pro Display", fontSize: 46, lineHeight: "54px", color: "white" }}>3+</span>
                    <span style={{ fontFamily: "SF Pro Display", fontSize: 14, lineHeight: "20px", color: "white" }}>
                      Driving growth through innovation, insights, and research to enhance digital presence and products.
                    </span>
                  </div>
                </div>
                {/* Right column */}
                <div className="flex flex-col gap-[8px] flex-1">
                  {/* Blue 100% stat card */}
                  <div className="relative h-[247px] w-full bg-[#0161FE] rounded-[15px] p-[15px] flex flex-col justify-between">
                    <span style={{ fontFamily: "SF Pro Display", fontSize: 14, lineHeight: "20px", color: "white" }}>
                      Adaptability that helps you scale confidently with a flexible system built to support your growth at every stage.
                    </span>
                    <span style={{ fontFamily: "SF Pro Display", fontSize: 46, lineHeight: "54px", color: "white" }}>100%</span>
                  </div>
                  {/* Photo card 2 */}
                  <div className="relative h-[247px] w-full rounded-[15px] overflow-hidden">
                    <img src="/figmaAssets/image-263.png" alt="" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-black/20 rounded-[15px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2. ECOSYSTEM ── */}
          <div className="relative overflow-hidden bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px]">
            <div className="absolute w-[359px] h-[306px] left-[calc(50%-179.5px)] top-[35px]">
              <div className="absolute flex flex-col items-center gap-[25px] w-[360px] left-0 top-[calc(50%-151.5px-1.5px)]">
                {/* Badge */}
                <div className="w-[162px] h-[35px] flex items-center justify-center">
                  <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] w-[158px] h-[32px] border border-[#202833] rounded-[228.83px]">
                    <span className="whitespace-nowrap text-[12px] font-[500] leading-[18px] tracking-[1.79px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>OUR ECOSYSTEM</span>
                  </div>
                </div>
                {/* Heading */}
                <span className="w-[317px] h-[85px] text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Explore Our Business Ecosystem</span>
                {/* Choice Box */}
                <div className="flex flex-col items-start gap-[10px] w-[360px] h-[136px]">
                  <div className="flex flex-row justify-center items-start px-[20px] pb-[23px] gap-[7px] w-[360px] h-[136px] rounded-[15.26px]">
                    <div className="flex flex-col items-center gap-[15px] w-[344px]">
                      {/* Row 1 */}
                      <div className="flex flex-row items-center gap-[15px] w-[294px] h-[60.81px]">
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 4h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Products</span>
                        </div>
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Services</span>
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex flex-row items-center gap-[10px] w-[132px] h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white  rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Partners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* ── 3. EXPERTISE ── */}
          <div className="relative overflow-hidden bg-[#F6F7F9] h-[560px] w-full rounded-[22.88px]">
            <div className="absolute w-[359px] h-[490px] left-[calc(50%-179.5px)] top-[35px]">
              <div className="absolute flex flex-col items-center gap-[25px] w-[360px] left-0 top-0">
                {/* Badge */}
                <div className="w-[138px] h-[32px] flex items-center justify-center">
                  <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] w-[140px] h-[32px] border border-[#202833] rounded-[228.83px]">
                    <span className="whitespace-nowrap text-[12px] font-[500] leading-[14px] tracking-[1.716px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>our expertise</span>
                  </div>
                </div>
                {/* Heading */}
                <span className="w-[321px] h-[85px] text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Our Core Capabilities &amp; Expertise</span>
                {/* Choice Box */}
                <div className="flex flex-col items-start gap-[10px] w-[360px] h-[211px]">
                  <div className="flex flex-row justify-center items-start px-[20px] pb-[23px] gap-[7px] w-[360px] h-[211px] rounded-[15.26px]">
                    <div className="flex flex-col items-center gap-[15px] w-[357px]">
                      {/* Row 1: Research + Design */}
                      <div className="flex flex-row items-center gap-[15px] w-[298px] h-[60.81px]">
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m6 16h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4m-3 0v20M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Research</span>
                        </div>
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Design</span>
                        </div>
                      </div>
                      {/* Row 2: Equity Research Analysis (solo) */}
                      <div className="flex flex-row items-center h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white"/></svg>
                          </div>
                          <span className="whitespace-nowrap text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Equity Research Analysis</span>
                        </div>
                      </div>
                      {/* Row 3: Development + Marketing */}
                      <div className="flex flex-row items-center gap-[10px] h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 3l-5 9 5 9M16 3l5 9-5 9M14 3l-4 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span className="whitespace-nowrap text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Development</span>
                        </div>
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/></svg>
                          </div>
                          <span className="whitespace-nowrap text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Marketing</span>
                        </div>
                      </div>
                      {/* Row 4: Full-Stack Development (solo) */}
                      <div className="flex flex-row items-center h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 3l-5 9 5 9M16 3l5 9-5 9M14 3l-4 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span className="whitespace-nowrap text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Full - Stack Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* ── 4. PROJECT GALLERY ── */}
          <div className="relative overflow-hidden bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px]">
            <div className="absolute w-[359px] h-[306px] left-[calc(50%-179.5px)] top-[35px]">
              <div className="absolute flex flex-col items-center gap-[25px] w-[360px] left-0 top-[calc(50%-151.5px-1.5px)]">
                {/* Badge */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] border border-[#202833] rounded-[228.83px]">
                    <span className="whitespace-nowrap text-[12px] font-[500] leading-[18px] tracking-[1.79px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Project gallery</span>
                  </div>
                </div>
                {/* Heading */}
                <span className="w-[317px] h-[85px] text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Transforming Ideas into Digital Products</span>
                {/* Choice Box */}
                <div className="flex flex-col items-start gap-[10px] w-[360px] h-[136px]">
                  <div className="flex flex-row justify-center items-start px-[20px] pb-[23px] gap-[7px] w-[360px] h-[136px] rounded-[15.26px]">
                    <div className="flex flex-col items-center gap-[15px] w-[344px]">
                      {/* Row 1 */}
                      <div className="flex flex-row items-center gap-[15px] w-[344px] h-[60.81px]">
                        {/* Overview — active */}
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 3h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Overview</span>
                        </div>
                        {/* Website — inactive */}
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Website</span>
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex flex-row items-center gap-[10px] w-[180px] h-[60px]">
                        {/* Mobile App — inactive */}
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white  rounded-[17.39px]">
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 bg-[#0161FE] rounded-[27.91px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2"/><path d="M12 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Mobile App</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* ── 5. GLOBAL REACH ── */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center gap-[16px] px-[15px] py-[30px]">
              <div className="border border-[#202833] rounded-[228px] px-[14px] py-[7px]">
                <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>project regions</span>
              </div>
              <h2 className="text-[26px] leading-[32px] text-center text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Solutions built for businesses across regions.</h2>
              {/* Map — same SVG used in desktop GlobalReachMapSection */}
              <div className="w-full overflow-hidden flex justify-center">
                <img src="/assets/about/images/group_2.svg" alt="Global reach map" className="w-full h-auto" />
              </div>
            </div>

            {/* ── 6. OUR PRODUCTS ── */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center gap-[16px] px-[15px] py-[30px]">
              <h2 className="text-[32px] leading-[38px] text-[#111111] m-0 text-center" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Our Products</h2>
              <p className="text-[14px] leading-[22px] m-0 text-center" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                At Arunijone, I deliver high-impact services and projects focused on UX/UI design, digital marketing, and equity research. Each engagement is driven by strategic thinking, attention to detail, and a commitment to measurable results.
              </p>
              {/* Horizontally scrollable product cards — mirrors desktop carousel */}
              <div className="flex flex-row gap-[15px] overflow-x-auto pb-[4px] w-full" style={{ scrollbarWidth: "none" }}>
                {[
                  { img: "/assets/about/images/image_26.png",  label: "MyRameswaramTrip", w: 146, h: 181 },
                  { img: "/assets/about/images/image_10.png",  label: "Seafsoft",          w: 184, h: 129 },
                  { img: "/assets/about/images/image_1.png",   label: "Arunijone",         w: 120, h: 120 },
                  { img: "/assets/about/images/image_47.png",  label: "Equity Research",   w: 160, h: 80  },
                  { img: "/assets/about/images/image_63.png",  label: "Resora",            w: 160, h: 80  },
                ].map(p => (
                  <div key={p.label} className="flex-shrink-0 bg-white rounded-[15.26px] border border-[#8E8383]/10 flex items-center justify-center overflow-hidden" style={{ width: 274, height: 290 }}>
                    <img src={p.img} alt={p.label} style={{ width: p.w, height: p.h, objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};
