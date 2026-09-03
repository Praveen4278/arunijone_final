import React from "react";
import { Link, useLocation } from "wouter";
import MobBanner from "../../components/MobBanner";
import MobFooter from "../../components/MobFooter";
import MobilePageWrapper from "../../components/MobilePageWrapper";
import DesktopPageWrapper from "../../components/DesktopPageWrapper";
import { SiteFooterSection } from "../home/sections/SiteFooterSection";
import { BusinessEcosystemAndCapabilitiesSection } from "../about/sections/BusinessEcosystemAndCapabilitiesSection";

export const ServicePage = (): React.JSX.Element => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
          {/* NavBar: position:absolute, left:10, top:10, w:1420, h:87.76 */}
          <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
            <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>

              {/* Logo group */}
              <div onClick={() => { navigate('/'); window.scrollTo(0, 0); }} style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66, cursor: 'pointer' }}>
                <div style={{ position: 'absolute', width: 66, height: 66, background: '#FFFFFF', borderRadius: 1000 }} />
                <img
                  src="/figmaAssets/logo.png"
                  alt="Arunijone Logo"
                  style={{ position: 'absolute', width: 49, height: 42, top: 'calc(50% - 21px)', left: 'calc(50% - 24.5px)', borderRadius: 12, objectFit: 'cover' }}
                />
              </div>

              {/* Nav links */}
              <div style={{
                position: 'absolute', width: 416, height: 47,
                left: 'calc(50% - 208px)', top: 'calc(50% - 23.5px)',
                display: 'flex', flexDirection: 'row', alignItems: 'center',
                padding: '12px 13px', gap: 72,
              }}>
                {[
                  { label: 'Home',    href: '/',        color: '#111111', w: 44 },
                  { label: 'About',   href: '/about',   color: '#111111', w: 41 },
                  { label: 'Explore', href: '/explore', color: '#0161FE', w: 51 },
                  { label: 'Blogs',   href: '/blog',    color: '#111111', w: 38 },
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

              {/* Contact button */}
              <button 
                onClick={() => navigate("/contact")}
                style={{
                  position: 'absolute', left: 1272.55, top: 'calc(50% - 26.5px - 0.3px)',
                  width: 115, height: 53,
                  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                  padding: '15px 26px', gap: 10,
                  background: '#0161FE', borderRadius: 111.786, border: 'none', cursor: 'pointer',
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                  fontSize: 15.7778, lineHeight: '22px', letterSpacing: -0.0788889,
                  color: '#FFFFFF', width: 63, height: 23,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>Contact</span>
              </button>

            </div>
          </header>

          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 50, paddingTop: 108, marginLeft: 10, marginRight: 10 }}>
            {/* ── 1. HERO SECTION (matching arunijone-main) ── */}
            <div className="relative overflow-hidden bg-[#F6F7F9] rounded-[23.69px]" style={{ height: 822 }}>
              <span className="flex justify-start text-left items-center absolute" style={{ height: 57, width: 350, left: 42, top: 51 }}>
                <span className="whitespace-nowrap bg-[#111111] bg-clip-text text-transparent text-[48px] font-normal leading-[54.33px]">
                  Explore Products
                </span>
              </span>
              <span className="flex justify-start text-left items-center absolute" style={{ height: 57, width: 498, left: 880, top: 51 }}>
                <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent text-[16px] font-normal leading-[22px]">
                  Explore a wide range of services crafted to support your vision. From digital design and marketing growth to industry-specific solutions, I provide the tools and expertise to help your business build, scale, and succeed.
                </span>
              </span>
              <div className="absolute overflow-hidden bg-[#FEFEFE] rounded-[23.69px]" style={{ height: "75.55%", width: "94.08%", left: "3%", top: "19%" }} />
            </div>

            {/* ── 2. OUR ECOSYSTEM & EXPERTISE (matching About page style) ── */}
            <BusinessEcosystemAndCapabilitiesSection />

            {/* ── 5. PROJECTS / SUCCESS STORIES (matching arunijone-main) ── */}
            <div className="relative overflow-hidden bg-[#F6F7F9] rounded-[23.69px] flex flex-col items-center gap-[60px] px-[49px] py-[50px]" style={{ height: 620 }}>
              <div className="relative w-full flex flex-col justify-start items-start gap-[30px]">
                <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 20px", gap: 10, width: 168, height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
                  <span style={{ width: 128, height: 20, fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 500, fontSize: 14, lineHeight: "20px", display: "flex", alignItems: "center", letterSpacing: "2.07195px", textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
                      Our Products
                    </span>
                </div>

                <div className="relative flex flex-row justify-start items-center gap-[532px]" style={{ height: 64, width: "100%" }}>
                  <div className="relative flex flex-row justify-center items-center gap-2.5 pl-[5px] pr-2.5 py-2.5" style={{ height: 44 }}>
                    <span className="flex justify-start text-left items-center relative" style={{ height: 69, width: 377 }}>
                      <span className="bg-[#111111] bg-clip-text text-transparent text-[35px] font-normal leading-[34.01px]">
                        Real Results. Real Impact. <br />
                        Our Success Stories.
                      </span>
                    </span>
                  </div>

                  <div className="relative flex flex-row justify-center items-center gap-2.5 p-2.5" style={{ height: 44, width: 378 }}>
                    <span className="flex justify-start text-left items-center relative" style={{ height: 72, width: 404 }}>
                      <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent text-[16px] font-normal leading-[23.69px]">
                        Discover how my UX/UI design, digital marketing, and equity research projects deliver practical solutions, solve real challenges, and create measurable outcomes.
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Logo grid — 1 card */}
              <div className="relative flex flex-col justify-start items-start gap-5" style={{ width: "100%" }}>
                <div
                  onClick={() => navigate('/portfolio1')}
                  className="relative overflow-hidden bg-white rounded-[17.38px] cursor-pointer"
                  style={{ height: 320, width: "33.33%" }}
                >
                  <img src="/assets/products/images/image_26.png" alt="My Rameswaram Trip" className="absolute object-contain" style={{ height: 222, width: 180, left: "calc(50% - 90px)", top: "calc(50% - 111px)" }} />
                </div>
              </div>
            </div>

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </main>
      </DesktopPageWrapper>

      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/homemob/images/group_5.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[25px] mx-auto pt-[20px] pb-[20px]">

            {/* ── 1. HERO ── */}
            <div className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] w-full rounded-[22.88px]" style={{ height: 494 }}>
              <span className="flex justify-center text-center items-center h-[55px] w-[325px] absolute left-[calc(50%-162.75px)] top-[25px]">
                <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent text-[46px] font-normal leading-[54px]">Explore Products</span>
              </span>
              <span className="flex justify-center text-center items-center h-[111px] w-[320px] absolute left-[calc(50%-159.75px)] top-[110px]">
                <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent text-[16px] font-normal leading-[22px]">
                  Explore a wide range of services crafted to support your vision. From digital design and marketing growth to industry-specific solutions, I provide the tools and expertise to help your business build, scale, and succeed.
                </span>
              </span>
              <div className="absolute overflow-hidden bg-white rounded-[15.26px] left-[2%] top-[52%]" style={{ height: "46.57%", width: "95.93%" }} />
            </div>

            {/* ── 2. ECOSYSTEM ── */}
          <div className="relative overflow-hidden bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px]">
            <div className="absolute w-[359px] h-[306px] left-[calc(50%-179.5px)] top-[35px]">
              <div className="absolute flex flex-col items-center gap-[25px] w-[360px] left-0 top-[calc(50%-151.5px-1.5px)]">
                <div className="w-[162px] h-[35px] flex items-center justify-center">
                  <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] w-[158px] h-[32px] border border-[#202833] rounded-[228.83px]">
                    <span className="whitespace-nowrap text-[12px] font-[500] leading-[18px] tracking-[1.79px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>OUR ECOSYSTEM</span>
                  </div>
                </div>
                <span className="w-[317px] h-[85px] text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Explore Our Business Ecosystem</span>
                <div className="flex flex-col items-start gap-[10px] w-[360px] h-[136px]">
                  <div className="flex flex-row justify-center items-start px-[20px] pb-[23px] gap-[7px] w-[360px] h-[136px] rounded-[15.26px]">
                    <div className="flex flex-col items-center gap-[15px] w-[344px]">
                      <div className="flex flex-row items-center gap-[15px] w-[294px] h-[60.81px]">
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 flex items-center justify-center">
                            <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44.0013" height="44.0013" rx="21.86" fill="rgba(255,255,255,0.30)"/><mask id="mob_sp_p" maskUnits="userSpaceOnUse" x="9" y="10" width="25" height="25"><rect x="9.48249" y="10.3474" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask><g mask="url(#mob_sp_p)"><path d="M13.5082 31.4825C12.9547 31.4825 12.4808 31.2854 12.0866 30.8912C11.6924 30.497 11.4954 30.0232 11.4954 29.4696V18.3989C11.4954 17.8453 11.6924 17.3715 12.0866 16.9773C12.4808 16.5831 12.9547 16.386 13.5082 16.386H17.534V14.3731C17.534 13.8196 17.731 13.3457 18.1252 12.9515C18.5194 12.5574 18.9933 12.3603 19.5468 12.3603H23.5726C24.1261 12.3603 24.6 12.5574 24.9941 12.9515C25.3883 13.3457 25.5854 13.8196 25.5854 14.3731V16.386H29.6112C30.1647 16.386 30.6386 16.5831 31.0327 16.9773C31.4269 17.3715 31.624 17.8453 31.624 18.3989V29.4696C31.624 30.0232 31.4269 30.497 31.0327 30.8912C30.6386 31.2854 30.1647 31.4825 29.6112 31.4825H13.5082ZM19.5468 16.386H23.5726V14.3731H19.5468V16.386ZM29.6112 25.4439H24.579V27.4568H18.5404V25.4439H13.5082V29.4696H29.6112V25.4439ZM20.5533 25.4439H22.5661V23.431H20.5533V25.4439ZM13.5082 23.431H18.5404V21.4182H24.579V23.431H29.6112V18.3989H13.5082V23.431Z" fill="white"/></g></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Products</span>
                        </div>
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px] cursor-pointer" onClick={() => {}}>
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 flex items-center justify-center">
                            <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44.0013" height="44.0013" rx="21.86" fill="#0161FE"/><mask id="mob_sp_s" maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25"><rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask><g mask="url(#mob_sp_s)"><path d="M12.0772 30.193C11.5237 30.193 11.0498 29.9959 10.6556 29.6017C10.2614 29.2075 10.0643 28.7337 10.0643 28.1801H14.0901C13.5365 28.1801 13.0627 27.983 12.6685 27.5888C12.2743 27.1947 12.0772 26.7208 12.0772 26.1673V15.0965C12.0772 14.543 12.2743 14.0691 12.6685 13.6749C13.0627 13.2807 13.5365 13.0836 14.0901 13.0836H30.193C30.7465 13.0836 31.2204 13.2807 31.6146 13.6749C32.0088 14.0691 32.2059 14.543 32.2059 15.0965V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H34.2187C34.2187 28.7337 34.0216 29.2075 33.6274 29.6017C33.2333 29.9959 32.7594 30.193 32.2059 30.193H12.0772ZM22.8586 28.8972C23.0515 28.7043 23.148 28.4653 23.148 28.1801C23.148 27.895 23.0515 27.6559 22.8586 27.463C22.6657 27.2701 22.4267 27.1737 22.1415 27.1737C21.8564 27.1737 21.6173 27.2701 21.4244 27.463C21.2315 27.6559 21.1351 27.895 21.1351 28.1801C21.1351 28.4653 21.2315 28.7043 21.4244 28.8972C21.6173 29.0901 21.8564 29.1866 22.1415 29.1866C22.4267 29.1866 22.6657 29.0901 22.8586 28.8972ZM14.0901 26.1673H30.193V15.0965H14.0901V26.1673Z" fill="white"/></g></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Services</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[10px] w-[132px] h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white  rounded-[17.39px] cursor-pointer" onClick={() => {}}>
                          <div className="w-[32.11px] h-[32.11px] flex-shrink-0 flex items-center justify-center">
                            <svg width="32.11" height="32.11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44.0013" height="44.0013" rx="21.86" fill="#0161FE"/><mask id="mob_sp_pa" maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25"><rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF"/></mask><g mask="url(#mob_sp_pa)"><path d="M22.0179 30.193C22.085 30.193 22.1521 30.1762 22.2192 30.1427C22.2863 30.1091 22.3366 30.0756 22.3702 30.042L30.6229 21.7893C30.8242 21.588 30.971 21.3615 31.0632 21.1099C31.1555 20.8583 31.2016 20.6067 31.2016 20.3551C31.2016 20.0867 31.1555 19.8309 31.0632 19.5877C30.971 19.3445 30.8242 19.1306 30.6229 18.9461L26.3456 14.6688C26.1611 14.4675 25.9472 14.3207 25.704 14.2284C25.4608 14.1362 25.205 14.0901 24.9366 14.0901C24.685 14.0901 24.4334 14.1362 24.1818 14.2284C23.9302 14.3207 23.7037 14.4675 23.5024 14.6688L23.2256 14.9455L25.0875 16.8326C25.3392 17.0674 25.5237 17.3358 25.6411 17.6377C25.7585 17.9397 25.8172 18.2584 25.8172 18.5939C25.8172 19.2984 25.5782 19.8896 25.1001 20.3677C24.6221 20.8457 24.0308 21.0848 23.3263 21.0848C22.9908 21.0848 22.6679 21.0261 22.3576 20.9086C22.0473 20.7912 21.7747 20.6151 21.5399 20.3803L19.6528 18.5184L15.2497 22.9215C15.1993 22.9718 15.1616 23.0264 15.1364 23.0851C15.1113 23.1438 15.0987 23.2067 15.0987 23.2738C15.0987 23.408 15.149 23.5296 15.2497 23.6386C15.3503 23.7476 15.4677 23.8021 15.6019 23.8021C15.669 23.8021 15.7361 23.7854 15.8032 23.7518C15.8703 23.7183 15.9206 23.6847 15.9542 23.6512L19.376 20.2293L20.785 21.6383L17.3883 25.0602C17.338 25.1105 17.3003 25.165 17.2751 25.2237C17.25 25.2824 17.2374 25.3453 17.2374 25.4124C17.2374 25.5466 17.2877 25.664 17.3883 25.7647C17.489 25.8653 17.6064 25.9157 17.7406 25.9157C17.8077 25.9157 17.8748 25.8989 17.9419 25.8653C18.009 25.8318 18.0593 25.7982 18.0928 25.7647L21.5147 22.368L22.9237 23.777L19.527 27.1989C19.4767 27.2324 19.4389 27.2827 19.4138 27.3498C19.3886 27.4169 19.376 27.484 19.376 27.5511C19.376 27.6853 19.4264 27.8027 19.527 27.9034C19.6276 28.004 19.7451 28.0543 19.8793 28.0543C19.9464 28.0543 20.0093 28.0417 20.068 28.0166C20.1267 27.9914 20.1812 27.9537 20.2315 27.9034L23.6534 24.5066L25.0624 25.9157L21.6405 29.3375C21.5902 29.3878 21.5525 29.4424 21.5273 29.5011C21.5021 29.5598 21.4895 29.6227 21.4895 29.6898C21.4895 29.824 21.5441 29.9414 21.6531 30.042C21.7621 30.1427 21.8837 30.193 22.0179 30.193ZM21.9928 32.2059C21.3721 32.2059 20.8228 32.0004 20.3447 31.5894C19.8667 31.1785 19.5857 30.6627 19.5018 30.042C18.9315 29.9582 18.4535 29.7233 18.0677 29.3375C17.6819 28.9517 17.447 28.4737 17.3632 27.9034C16.7929 27.8195 16.319 27.5805 15.9416 27.1863C15.5642 26.7921 15.3335 26.3182 15.2497 25.7647C14.6123 25.6808 14.0923 25.4041 13.6897 24.9344C13.2871 24.4647 13.0858 23.9112 13.0858 23.2738C13.0858 22.9383 13.1487 22.6154 13.2745 22.3051C13.4003 21.9948 13.5807 21.7222 13.8155 21.4873L19.6528 15.6752L22.9489 18.9713C22.9824 19.0216 23.0327 19.0593 23.0998 19.0845C23.1669 19.1096 23.234 19.1222 23.3011 19.1222C23.4521 19.1222 23.5779 19.0761 23.6785 18.9838C23.7792 18.8916 23.8295 18.77 23.8295 18.619C23.8295 18.5519 23.8169 18.4848 23.7918 18.4177C23.7666 18.3506 23.7289 18.3003 23.6785 18.2668L20.0805 14.6688C19.896 14.4675 19.6822 14.3207 19.4389 14.2284C19.1957 14.1362 18.9399 14.0901 18.6715 14.0901C18.4199 14.0901 18.1683 14.1362 17.9167 14.2284C17.6651 14.3207 17.4387 14.4675 17.2374 14.6688L13.6897 18.2416C13.5387 18.3926 13.4129 18.5687 13.3123 18.77C13.2116 18.9713 13.1445 19.1726 13.111 19.3738C13.0774 19.5751 13.0774 19.7806 13.111 19.9903C13.1445 20.2 13.2116 20.397 13.3123 20.5816L11.853 22.0409C11.5678 21.6551 11.3581 21.2315 11.2239 20.7703C11.0897 20.309 11.0394 19.8435 11.073 19.3738C11.1065 18.9042 11.2239 18.4471 11.4252 18.0026C11.6265 17.5581 11.9033 17.1597 12.2555 16.8074L15.8032 13.2598C16.2058 12.874 16.6545 12.5804 17.1493 12.3791C17.6441 12.1778 18.1515 12.0772 18.6715 12.0772C19.1915 12.0772 19.6989 12.1778 20.1938 12.3791C20.6886 12.5804 21.1289 12.874 21.5147 13.2598L21.7915 13.5365L22.0682 13.2598C22.4708 12.874 22.9195 12.5804 23.4144 12.3791C23.9092 12.1778 24.4166 12.0772 24.9366 12.0772C25.4566 12.0772 25.964 12.1778 26.4588 12.3791C26.9536 12.5804 27.394 12.874 27.7798 13.2598L32.0319 17.5119C32.4177 17.8977 32.7113 18.3422 32.9126 18.8455C33.1139 19.3487 33.2145 19.8603 33.2145 20.3803C33.2145 20.9003 33.1139 21.4077 32.9126 21.9025C32.7113 22.3973 32.4177 22.8376 32.0319 23.2234L23.7792 31.451C23.5444 31.6859 23.2718 31.8704 22.9615 32.0046C22.6511 32.1388 22.3282 32.2059 21.9928 32.2059Z" fill="white"/></g></svg>
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

            {/* ── 5. PROJECTS ── */}
            <div className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] w-full rounded-[22.88px] pb-[35px]">
              {/* Badge + Heading + Description cluster */}
              <div className="flex flex-col items-center gap-[30px] pt-[35px]" style={{ width: "100%" }}>
                {/* Badge */}
                <div style={{ boxSizing: "border-box", width: 136, height: 32, border: "1px solid #202833", borderRadius: 228.83, position: "relative", flexShrink: 0 }}>
                  <span style={{
                    position: "absolute", width: 110, height: 14,
                    left: "calc(50% - 110px/2 - 0.12px)", top: "calc(50% - 7px)",
                    fontFamily: "SF Pro Display", fontWeight: 500, fontSize: 12,
                    lineHeight: "14px", display: "flex", alignItems: "center",
                    textAlign: "center", letterSpacing: "1.716px", textTransform: "uppercase", color: "#202833",
                  }}>
                    our products
                  </span>
                </div>
                {/* Heading */}
                <span style={{
                  width: 360.24, height: 79.12,
                  fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 34,
                  lineHeight: "38px", display: "flex", alignItems: "center",
                  textAlign: "center", justifyContent: "center", color: "#111111",
                }}>
                  Our Success Stories Real
Results, Real Impact
                </span>
                {/* Description */}
                <span style={{
                  width: 346, height: 115,
                  fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16,
                  lineHeight: "24px", display: "flex", alignItems: "center",
                  textAlign: "center", color: "rgba(109,109,110,0.8)",
                }}>
                  Discover how MyRameswaramTrip's intuitive booking platform, verified temple services, and comprehensive travel logistics deliver practical solutions, solve real pilgrimage challenges, and create a seamless spiritual journey.
                </span>
              </div>
              {/* Cards */}
              <div className="flex flex-col gap-[15px] w-[calc(100%-16px)] mx-auto mt-[30px]">
                {/* image_26 */}
                <div
                  onClick={() => navigate('/portfolio1')}
                  className="relative overflow-hidden bg-white h-[230px] w-full rounded-[15.26px] flex justify-center items-center cursor-pointer"
                >
                  <img src="/assets/products/images/image_26.png" alt="My Rameswaram Trip" className="h-[160px] w-[140px] object-contain" />
                </div>
              </div>
            </div>

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};