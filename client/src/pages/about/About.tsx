import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import MobBanner from "../../components/MobBanner";
import MobFooter from "../../components/MobFooter";
import MobilePageWrapper from "../../components/MobilePageWrapper";
import DesktopPageWrapper from "../../components/DesktopPageWrapper";
import { BusinessEcosystemAndCapabilitiesSection } from "./sections/BusinessEcosystemAndCapabilitiesSection";
import { GlobalReachMapSection } from "./sections/GlobalReachMapSection";
import { HeroIntroductionSection } from "./sections/HeroIntroductionSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export const About = (): React.JSX.Element => {
  const [, navigate] = useLocation();
  const [mobileEco, setMobileEco] = useState<"products" | "services" | "partners">("products");
  const [desktopEco, setDesktopEco] = useState("Products");

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
          {/* NavBar */}
          <header style={{ position: "absolute", left: 10, top: 10, width: 1420, height: 87.76 }}>
            <div style={{ width: 1420, height: 87.76, background: "#F6F7F9", borderRadius: 22.3551, position: "relative" }}>

              {/* Logo */}
              <div onClick={() => { navigate("/"); window.scrollTo(0, 0); }} style={{ position: "absolute", left: 42, top: "calc(50% - 33px + 0.12px)", width: 66, height: 66, cursor: "pointer" }}>
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
                  { label: 'Explore', href: "/explore", color: "#111111", w: 51 },
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
            <BusinessEcosystemAndCapabilitiesSection showServiceCards={false} onEcoChange={setDesktopEco} />
            <GlobalReachMapSection />

            {desktopEco === "Services" && (
            <div style={{
              width: 1420, height: 586, background: "#F6F7F9", borderRadius: 22.5181,
              position: "relative", flexShrink: 0, overflow: "hidden",
            }}>
              {/* Header row */}
              <div style={{ position: "absolute", width: 1340, height: 64, left: 42, top: 49.84, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 439 }}>
                <span style={{ width: 310, height: 54, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 46, lineHeight: "52px", color: "#111111", display: "flex", alignItems: "center" }}>
                  Our Services
                </span>
                <span style={{ width: 639, height: 64, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "22px", color: "rgba(109,109,110,0.8)", display: "flex", alignItems: "center" }}>
                  At Arunijone, we deliver comprehensive business services spanning design, research, marketing, creative strategy, and development. Each engagement is driven by strategic thinking, meticulous execution, and a commitment to delivering measurable results for your brand
                </span>
              </div>
              {/* 4 partner cards */}
              <div style={{ position: "absolute", left: 42.05, top: 164.92, display: "flex", flexDirection: "row", alignItems: "center", gap: 15 }}>
                {/* Card 1 */}
                <div style={{ boxSizing: "border-box", width: 351.53, height: 370.59, border: "0.1px solid rgba(142,131,131,0.12)", borderRadius: 22.5181, background: "#FFFFFF", flexShrink: 0, position: "relative" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Partner 1" style={{ position: "absolute", width: 156.98, height: 156.33, left: "calc(50% - 156.98px/2 + 0.15px)", top: "calc(50% - 156.33px/2 - 0.06px)", objectFit: "contain" }} />
                </div>
                {/* Card 2 */}
                <div style={{ boxSizing: "border-box", width: 351.53, height: 370.59, border: "0.1px solid rgba(142,131,131,0.12)", borderRadius: 22.5181, background: "#FFFFFF", flexShrink: 0, position: "relative" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg" alt="Partner 2" style={{ position: "absolute", width: 200.6, height: 58.23, left: "calc(50% - 200.6px/2 + 0.42px)", top: "calc(50% - 58.23px/2 - 0.1px)", objectFit: "contain" }} />
                </div>
                {/* Card 3 */}
                <div style={{ boxSizing: "border-box", width: 351.53, height: 370.59, border: "0.1px solid rgba(142,131,131,0.12)", borderRadius: 22.5181, background: "#FFFFFF", flexShrink: 0, position: "relative" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png" alt="Partner 3" style={{ position: "absolute", width: 229.73, height: 85.61, left: "calc(50% - 229.73px/2 + 0.46px)", top: "calc(50% - 85.61px/2 - 0.42px)", objectFit: "contain" }} />
                </div>
                {/* Card 4 */}
                <div style={{ boxSizing: "border-box", width: 351.53, height: 370.59, border: "0.1px solid rgba(142,131,131,0.12)", borderRadius: 22.5181, background: "#FFFFFF", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png" alt="Partner 4" style={{ position: "absolute", width: 266, height: 97, left: "calc(50% - 266px/2 + 0.05px)", top: "calc(50% - 97px/2 - 0.22px)", objectFit: "contain" }} />
                </div>
              </div>
            </div>
            )}

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </main>
      </DesktopPageWrapper>

      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/homemob/images/group_2.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[8px] pb-[20px]">

            {/* ── 1. HERO ── */}
            <div className="w-full flex flex-col items-center gap-[16px] pt-[24px] pb-[24px]">
              <span style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 54, lineHeight: "61px", color: "#111111", width: 361.5, height: 167, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", alignSelf: "stretch", flexShrink: 0, margin: "0 auto" }}>
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
                  href="https://wa.me/919489456580"
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
                      <img src="/figmaAssets/about_section_icon.svg" alt="" style={{ width: 38, height: 38, objectFit: "contain" }} />
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
                  <div style={{ position: "relative", height: 247, width: "100%", background: "#0161FE", borderRadius: 15.26 }}>
                    <span style={{ position: "absolute", width: 146, height: 94, left: 14.82, top: 14.95, fontFamily: "SF Pro Display", fontStyle: "normal", fontWeight: 400, fontSize: 14, lineHeight: "20px", display: "flex", alignItems: "center", color: "#FFFFFF" }}>
                      Adaptability that helps you scale confidently with a flexible system built to support your growth at every stage.
                    </span>
                    <span style={{ position: "absolute", width: 119, height: 55, left: 15.44, top: 168, fontFamily: "SF Pro Display", fontStyle: "normal", fontWeight: 400, fontSize: 45.8, lineHeight: "55px", display: "flex", alignItems: "center", color: "#FFFFFF" }}>100%</span>
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
          <div className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22.88px]" style={{ minHeight: 376 }}>
            <div className="absolute w-[359px] h-[306px] left-[calc(50%-179.5px)] top-[35px]">
              <div className="absolute flex flex-col items-center gap-[25px] w-[360px] left-0 top-[calc(50%-151.5px-1.5px)]">
                {/* Badge */}
                <div className="w-[162px] h-[35px] flex items-center justify-center">
                  <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] w-[158px] h-[32px] border border-[#202833] rounded-[228.83px]">
                    <span className="whitespace-nowrap text-[12px] font-[500] leading-[18px] tracking-[1.79px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>OUR ECOSYSTEM</span>
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
                        {/* Products pill */}
                        <div
                          className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] rounded-[18.53px] cursor-pointer"
                          style={{ background: mobileEco === "products" ? "#0161FE" : "#FFFFFF" }}
                          onClick={() => setMobileEco("products")}
                        >
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 flex items-center justify-center">
                            <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "products" ? "rgba(255,255,255,0.30)" : "#0161FE"} />
                              <mask id="mob_ab_p" maskUnits="userSpaceOnUse" x="9" y="10" width="25" height="25"><rect x="9.48249" y="10.3474" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask>
                              <g mask="url(#mob_ab_p)"><path d="M13.5082 31.4825C12.9547 31.4825 12.4808 31.2854 12.0866 30.8912C11.6924 30.497 11.4954 30.0232 11.4954 29.4696V18.3989C11.4954 17.8453 11.6924 17.3715 12.0866 16.9773C12.4808 16.5831 12.9547 16.386 13.5082 16.386H17.534V14.3731C17.534 13.8196 17.731 13.3457 18.1252 12.9515C18.5194 12.5574 18.9933 12.3603 19.5468 12.3603H23.5726C24.1261 12.3603 24.6 12.5574 24.9941 12.9515C25.3883 13.3457 25.5854 13.8196 25.5854 14.3731V16.386H29.6112C30.1647 16.386 30.6386 16.5831 31.0327 16.9773C31.4269 17.3715 31.624 17.8453 31.624 18.3989V29.4696C31.624 30.0232 31.4269 30.497 31.0327 30.8912C30.6386 31.2854 30.1647 31.4825 29.6112 31.4825H13.5082ZM19.5468 16.386H23.5726V14.3731H19.5468V16.386ZM29.6112 25.4439H24.579V27.4568H18.5404V25.4439H13.5082V29.4696H29.6112V25.4439ZM20.5533 25.4439H22.5661V23.431H20.5533V25.4439ZM13.5082 23.431H18.5404V21.4182H24.579V23.431H29.6112V18.3989H13.5082V23.431Z" fill="white"/></g>
                            </svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[24px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "products" ? "#FFFFFF" : "#0161FE" }}>Products</span>
                        </div>
                        {/* Services pill */}
                        <div
                          className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] rounded-[18.53px] cursor-pointer"
                          style={{ background: mobileEco === "services" ? "#0161FE" : "#FFFFFF" }}
                          onClick={() => setMobileEco("services")}
                        >
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 flex items-center justify-center">
                            <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "services" ? "rgba(255,255,255,0.30)" : "#0161FE"} />
                              <mask id="mob_ab_s" maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25"><rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask>
                              <g mask="url(#mob_ab_s)"><path d="M12.0772 30.193C11.5237 30.193 11.0498 29.9959 10.6556 29.6017C10.2614 29.2075 10.0643 28.7337 10.0643 28.1801H14.0901C13.5365 28.1801 13.0627 27.983 12.6685 27.5888C12.2743 27.1947 12.0772 26.7208 12.0772 26.1673V15.0965C12.0772 14.543 12.2743 14.0691 12.6685 13.6749C13.0627 13.2807 13.5365 13.0836 14.0901 13.0836H30.193C30.7465 13.0836 31.2204 13.2807 31.6146 13.6749C32.0088 14.0691 32.2059 14.543 32.2059 15.0965V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H34.2187C34.2187 28.7337 34.0216 29.2075 33.6274 29.6017C33.2333 29.9959 32.7594 30.193 32.2059 30.193H12.0772ZM22.8586 28.8972C23.0515 28.7043 23.148 28.4653 23.148 28.1801C23.148 27.895 23.0515 27.6559 22.8586 27.463C22.6657 27.2701 22.4267 27.1737 22.1415 27.1737C21.8564 27.1737 21.6173 27.2701 21.4244 27.463C21.2315 27.6559 21.1351 27.895 21.1351 28.1801C21.1351 28.4653 21.2315 28.7043 21.4244 28.8972C21.6173 29.0901 21.8564 29.1866 22.1415 29.1866C22.4267 29.1866 22.6657 29.0901 22.8586 28.8972ZM14.0901 26.1673H30.193V15.0965H14.0901V26.1673Z" fill="white"/></g>
                            </svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "services" ? "#FFFFFF" : "#0161FE" }}>Services</span>
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex flex-row items-center gap-[10px] w-[132px] h-[60px]">
                        {/* Partners pill */}
                        <div
                          className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] rounded-[17.39px] cursor-pointer"
                          style={{ background: mobileEco === "partners" ? "#0161FE" : "#FFFFFF" }}
                          onClick={() => setMobileEco("partners")}
                        >
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 flex items-center justify-center">
                            <svg width="32.11" height="32.11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "partners" ? "rgba(255,255,255,0.30)" : "#0161FE"} />
                              <mask id="mob_ab_pa" maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25"><rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask>
                              <g mask="url(#mob_ab_pa)"><path d="M22.0179 30.193C22.085 30.193 22.1521 30.1762 22.2192 30.1427C22.2863 30.1091 22.3366 30.0756 22.3702 30.042L30.6229 21.7893C30.8242 21.588 30.971 21.3615 31.0632 21.1099C31.1555 20.8583 31.2016 20.6067 31.2016 20.3551C31.2016 20.0867 31.1555 19.8309 31.0632 19.5877C30.971 19.3445 30.8242 19.1306 30.6229 18.9461L26.3456 14.6688C26.1611 14.4675 25.9472 14.3207 25.704 14.2284C25.4608 14.1362 25.205 14.0901 24.9366 14.0901C24.685 14.0901 24.4334 14.1362 24.1818 14.2284C23.9302 14.3207 23.7037 14.4675 23.5024 14.6688L23.2256 14.9455L25.0875 16.8326C25.3392 17.0674 25.5237 17.3358 25.6411 17.6377C25.7585 17.9397 25.8172 18.2584 25.8172 18.5939C25.8172 19.2984 25.5782 19.8896 25.1001 20.3677C24.6221 20.8457 24.0308 21.0848 23.3263 21.0848C22.9908 21.0848 22.6679 21.0261 22.3576 20.9086C22.0473 20.7912 21.7747 20.6151 21.5399 20.3803L19.6528 18.5184L15.2497 22.9215C15.1993 22.9718 15.1616 23.0264 15.1364 23.0851C15.1113 23.1438 15.0987 23.2067 15.0987 23.2738C15.0987 23.408 15.149 23.5296 15.2497 23.6386C15.3503 23.7476 15.4677 23.8021 15.6019 23.8021C15.669 23.8021 15.7361 23.7854 15.8032 23.7518C15.8703 23.7183 15.9206 23.6847 15.9542 23.6512L19.376 20.2293L20.785 21.6383L17.3883 25.0602C17.338 25.1105 17.3003 25.165 17.2751 25.2237C17.25 25.2824 17.2374 25.3453 17.2374 25.4124C17.2374 25.5466 17.2877 25.664 17.3883 25.7647C17.489 25.8653 17.6064 25.9157 17.7406 25.9157C17.8077 25.9157 17.8748 25.8989 17.9419 25.8653C18.009 25.8318 18.0593 25.7982 18.0928 25.7647L21.5147 22.368L22.9237 23.777L19.527 27.1989C19.4767 27.2324 19.4389 27.2827 19.4138 27.3498C19.3886 27.4169 19.376 27.484 19.376 27.5511C19.376 27.6853 19.4264 27.8027 19.527 27.9034C19.6276 28.004 19.7451 28.0543 19.8793 28.0543C19.9464 28.0543 20.0093 28.0417 20.068 28.0166C20.1267 27.9914 20.1812 27.9537 20.2315 27.9034L23.6534 24.5066L25.0624 25.9157L21.6405 29.3375C21.5902 29.3878 21.5525 29.4424 21.5273 29.5011C21.5021 29.5598 21.4895 29.6227 21.4895 29.6898C21.4895 29.824 21.5441 29.9414 21.6531 30.042C21.7621 30.1427 21.8837 30.193 22.0179 30.193ZM21.9928 32.2059C21.3721 32.2059 20.8228 32.0004 20.3447 31.5894C19.8667 31.1785 19.5857 30.6627 19.5018 30.042C18.9315 29.9582 18.4535 29.7233 18.0677 29.3375C17.6819 28.9517 17.447 28.4737 17.3632 27.9034C16.7929 27.8195 16.319 27.5805 15.9416 27.1863C15.5642 26.7921 15.3335 26.3182 15.2497 25.7647C14.6123 25.6808 14.0923 25.4041 13.6897 24.9344C13.2871 24.4647 13.0858 23.9112 13.0858 23.2738C13.0858 22.9383 13.1487 22.6154 13.2745 22.3051C13.4003 21.9948 13.5807 21.7222 13.8155 21.4873L19.6528 15.6752L22.9489 18.9713C22.9824 19.0216 23.0327 19.0593 23.0998 19.0845C23.1669 19.1096 23.234 19.1222 23.3011 19.1222C23.4521 19.1222 23.5779 19.0761 23.6785 18.9838C23.7792 18.8916 23.8295 18.77 23.8295 18.619C23.8295 18.5519 23.8169 18.4848 23.7918 18.4177C23.7666 18.3506 23.7289 18.3003 23.6785 18.2668L20.0805 14.6688C19.896 14.4675 19.6822 14.3207 19.4389 14.2284C19.1957 14.1362 18.9399 14.0901 18.6715 14.0901C18.4199 14.0901 18.1683 14.1362 17.9167 14.2284C17.6651 14.3207 17.4387 14.4675 17.2374 14.6688L13.6897 18.2416C13.5387 18.3926 13.4129 18.5687 13.3123 18.77C13.2116 18.9713 13.1445 19.1726 13.111 19.3738C13.0774 19.5751 13.0774 19.7806 13.111 19.9903C13.1445 20.2 13.2116 20.397 13.3123 20.5816L11.853 22.0409C11.5678 21.6551 11.3581 21.2315 11.2239 20.7703C11.0897 20.309 11.0394 19.8435 11.073 19.3738C11.1065 18.9042 11.2239 18.4471 11.4252 18.0026C11.6265 17.5581 11.9033 17.1597 12.2555 16.8074L15.8032 13.2598C16.2058 12.874 16.6545 12.5804 17.1493 12.3791C17.6441 12.1778 18.1515 12.0772 18.6715 12.0772C19.1915 12.0772 19.6989 12.1778 20.1938 12.3791C20.6886 12.5804 21.1289 12.874 21.5147 13.2598L21.7915 13.5365L22.0682 13.2598C22.4708 12.874 22.9195 12.5804 23.4144 12.3791C23.9092 12.1778 24.4166 12.0772 24.9366 12.0772C25.4566 12.0772 25.964 12.1778 26.4588 12.3791C26.9536 12.5804 27.394 12.874 27.7798 13.2598L32.0319 17.5119C32.4177 17.8977 32.7113 18.3422 32.9126 18.8455C33.1139 19.3487 33.2145 19.8603 33.2145 20.3803C33.2145 20.9003 33.1139 21.4077 32.9126 21.9025C32.7113 22.3973 32.4177 22.8376 32.0319 23.2234L23.7792 31.451C23.5444 31.6859 23.2718 31.8704 22.9615 32.0046C22.6511 32.1388 22.3282 32.2059 21.9928 32.2059Z" fill="white"/></g>
                            </svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[20px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "partners" ? "#FFFFFF" : "#0161FE" }}>Partners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services cards — mobile: hidden on About page */}
          </div>

            {/* ── 5. GLOBAL REACH ── */}
            <div className="w-full rounded-[20px] flex flex-col items-center gap-[16px] px-[15px] py-[30px]">
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "8px 16px", gap: 10, width: 173, height: 30, border: "1px solid #202833", borderRadius: 228.83 }}>
                <span style={{ fontFamily: "SF Pro Display", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: "1.716px", textTransform: "uppercase", color: "#202833", width: 141, height: 14, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>Products Region</span>
              </div>
              <h2 className="text-[26px] leading-[32px] text-center text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Solutions built for businesses across regions.</h2>
              {/* Map — same SVG used in desktop GlobalReachMapSection */}
              <div className="w-full overflow-hidden flex justify-center">
                <img src="/assets/about/images/group_2.svg" alt="Global reach map" className="w-full h-auto" />
              </div>
            </div>

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};
