import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";

const DESIGN_HEIGHT = 1609;

const ContactDesktop = () => {
  const [, navigate] = useLocation();

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
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
                { label: 'Home',    href: '/',        color: '#111111', w: 44 },
                { label: 'About',   href: '/about',   color: '#111111', w: 41 },
                { label: 'Explore', href: '/explore', color: '#111111', w: 51 },
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
            id="_212_126__Frame_1171277065"
            className="absolute h-[1591.00px] w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[108.00px]"
          >
            <div
              id="_212_127__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[296.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_212_128__Frame_174"
                className="absolute h-[66.00px] w-[max-content] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center flex-nowrap gap-[10px] p-2.5 top-[37.62px]"
              >
                <span
                  id="_212_129__Heading_1___Expert_g"
                  className="flex justify-center text-center items-center h-[66.00px] -left-0.25 mr-0.5 w-auto relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[66.00px]"
                  >
                    Connect Instantly on
                  </span>
                </span>
                <div
                  id="_212_130__Frame_1171277059"
                  className="relative h-[35.00px] w-[247.00px]"
                >
                  <img
                    id="_212_131__Vector"
                    src="/assets/images/vector_9.svg"
                    alt="Vector"
                    className="absolute left-[0.00px] top-[0.00px]"
                  />
                </div>
              </div>

              <div
                id="_212_132__Frame_175"
                className="absolute h-[41.00px] w-[413.66px] left-[calc(50%-217.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[129.05px]"
              >
                <span
                  id="_212_133__Adapt_easily_and_sca"
                  className="flex justify-center text-center items-center h-[41.00px] w-[413.66px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
                  >
                    Adapt easily and scale confidently with a flexible system
                    designed to support your business at every stage of growth.
                  </span>
                </span>
              </div>

              <a
                id="_212_134__Background"
                href="https://wa.me/919489456580"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bg-[rgba(37,211,102,1.00)] h-auto w-auto left-[calc(50%-88.00px)] flex flex-row justify-start items-center flex-nowrap gap-3 px-[23px] py-4 rounded-[calc(136.94776916503906px_*_1.0)] top-[210.00px] no-underline cursor-pointer"
              >
                <div
                  id="_212_135__whatsapp-business-ap"
                  className="relative overflow-hidden h-[29.88px] w-[28.63px]"
                >
                  <img
                    id="_212_136__Group"
                    src="/assets/images/group.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                  />
                </div>

                <span
                  id="_212_140__WhatsApp"
                  className="flex justify-start text-left items-center h-[27.00px] w-[88.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.67469596862793px] font-semibold leading-[26.92px] capitalize"
                  >
                    WhatsApp
                  </span>
                </span>
              </a>
            </div>

            <div
              id="_212_141__Section"
              className="relative overflow-hidden h-[323.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_212_142__Frame_174"
                className="absolute h-[66.00px] w-[max-content] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center flex-nowrap gap-[10px] p-2.5 top-[37.62px]"
              >
                <span
                  id="_212_143__Heading_1___Expert_g"
                  className="flex justify-center text-center items-center h-[66.00px] -left-0.25 mr-0.5 w-auto relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[66.00px]"
                  >
                    Share your experience with us on
                  </span>
                </span>
                <div
                  id="_212_144__Frame_1171277058"
                  className="relative h-[43.00px] w-[177.00px]"
                >
                  <div
                    id="_212_145__image_249"
                    className="absolute h-[59.00px] w-[177.00px] left-[0.00px] top-[0.00px]"
                    style={{
                      background:
                        "url(/assets/images/image_249.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_212_146__Frame_175"
                className="absolute h-[62.00px] w-[603.00px] left-[calc(50%-311.67px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[129.05px]"
              >
                <span
                  id="_212_147__Your_feedback_helps_"
                  className="flex justify-center text-center items-center h-[62.00px] w-[603.00px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
                  >
                    Your feedback helps us improve and builds trust for future
                    clients.
                    <br /> If you're happy with the completed project, please take
                    a moment to leave us a review on our Google Business Profile.
                  </span>
                </span>
              </div>

              <div
                id="_212_148__Background"
                className="absolute bg-white h-auto w-auto left-[calc(50%-146.00px)] flex flex-row justify-start items-center flex-nowrap gap-3 px-6 py-[17px] rounded-[calc(142.58309936523438px_*_1.0)] border-[#1e88e5ff] border-solid border-[0.6481050252914429px] top-[231.00px]"
              >
                <div
                  id="_212_149__Frame"
                  className="relative overflow-hidden h-[28.52px] w-[32.41px]"
                >
                  <img
                    id="_212_150__Vector"
                    src="/assets/images/vector_10.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.52)]"
                  />
                  <img
                    id="_212_151__Vector"
                    src="/assets/images/vector_11.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.29)]"
                  />
                  <img
                    id="_212_152__Vector"
                    src="/assets/images/vector_12.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_153__Vector"
                    src="/assets/images/vector_13.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_154__Vector"
                    src="/assets/images/vector_14.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_155__Vector"
                    src="/assets/images/vector_15.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.74)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_156__Vector"
                    src="/assets/images/vector_16.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_157__Vector"
                    src="/assets/images/vector_17.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_158__Vector"
                    src="/assets/images/vector_18.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.70)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_159__Vector"
                    src="/assets/images/vector_19.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_160__Vector"
                    src="/assets/images/vector_20.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.61)] top-[calc(100%_*_0.65)]"
                  />
                </div>

                <span
                  id="_212_161__Google_Business_Prof"
                  className="flex justify-start text-left items-center h-[29.00px] w-[198.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(30,136,229,1.00)] bg-clip-text text-transparent not-italic text-[19.443151473999023px] font-medium leading-[28.03px] capitalize"
                  >
                    Google Business Profile
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_212_162__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[361.00px] w-full rounded-[24.43000030517578px]"
            >
              <div
                id="_212_163__Border"
                className="absolute border h-[36.52px] w-[155.16px] left-[calc(50%-78.29px)] top-[calc(50%-123.51px)] rounded-[244.27999877929688px] border-[#202833ff] border-solid"
              >
                <span
                  id="_212_164__Contact_Us"
                  className="flex justify-center text-center items-center h-[20.23px] w-[114.83px] absolute left-[calc(50%-57.23px)] top-[9.14px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.199999809265137px] font-medium leading-[20.23px] tracking-[2.13700008392334px] uppercase"
                  >
                    Contact Us
                  </span>
                </span>
              </div>

              <span
                id="_212_165__Heading_1___Get_in_t"
                className="flex justify-center text-center items-center h-[59.50px] w-[855.73px] absolute left-[calc(50%-428.00px)] top-[117.93px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[48.900001525878906px] font-normal leading-[56.04px]"
                >
                  Get in touch, let us know how we can help
                </span>
              </span>
              <div
                id="_212_166__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[50.81px] top-[224.81px]"
              >
                <div
                  id="_212_167__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_168__Vector"
                    src="/assets/images/vector_21.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_169__Vector"
                    src="/assets/images/vector_22.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.33)]"
                  />
                </div>

                <span
                  id="_212_170__Email_Addres"
                  className="flex justify-start text-left items-center h-[24.00px] w-[100.00px] absolute left-[94.19px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Email Address
                  </span>
                </span>
                <span
                  id="_212_171__arunijone_gmail_com"
                  className="flex justify-start text-left items-center h-[28.50px] w-[210.15px] absolute left-[94.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    arunijone@gmail.com
                  </span>
                </span>
              </div>

              <div
                id="_212_172__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[510.56px] top-[224.81px]"
              >
                <div
                  id="_212_173__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_174__Vector"
                    src="/assets/images/vector_23.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_175__Vector"
                    src="/assets/images/vector_24.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.30)]"
                  />
                </div>

                <span
                  id="_212_176__Phone_Number"
                  className="flex justify-start text-left items-center h-[24.00px] w-[115.00px] absolute left-[93.44px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Phone Number
                  </span>
                </span>
                <span
                  id="_212_177___91_85085_10983"
                  className="flex justify-start text-left items-center h-[28.50px] w-[170.81px] absolute left-[93.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    +91 85085 10983
                  </span>
                </span>
              </div>

              <div
                id="_212_178__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[970.31px] top-[224.81px]"
              >
                <div
                  id="_212_179__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_180__Vector"
                    src="/assets/images/vector_25.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_181__Vector"
                    src="/assets/images/vector_26.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.30)]"
                  />
                </div>

                <span
                  id="_212_182__Our_Office"
                  className="flex justify-start text-left items-center h-[24.00px] w-[78.00px] absolute left-[93.69px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Our Office
                  </span>
                </span>
                <span
                  id="_212_183__Rameswaram__Tamilnad"
                  className="flex justify-start text-left items-center h-[28.50px] w-[265.38px] absolute left-[93.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    Rameswaram, Tamilnadu
                  </span>
                </span>
              </div>
            </div>

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
      </DesktopPageWrapper>
      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
      <div className="bg-white w-full">
        <MobBanner iconSrc="/assets/contact/images/group.svg" />
        <div className="w-[calc(100%-16px)] flex flex-col gap-[30px] mx-auto pt-[20px] pb-[20px]">

          {/* ── 1. WHATSAPP SECTION ── */}
          <div className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22.88px] flex flex-col items-center pt-[35px] pb-[35px] gap-[16px]">
            <span className="text-center text-[54px] leading-[62px] text-[#111111] px-[16px]" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>
              Connect Instantly on
            </span>
            <img src="/assets/contact/images/vector.svg" alt="" />
            <span className="text-center text-[14px] leading-[20px] px-[16px] max-w-[295px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
              Adapt easily and scale confidently with a flexible system designed to support your business at every stage of growth.
            </span>
            <a href="https://wa.me/919489456580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px] bg-[#25D366] rounded-[110px] px-[18px] py-[13px] no-underline">
              <div className="relative overflow-hidden h-[24px] w-[23px]">
                <img src="/assets/contact/images/group_1.svg" alt="WhatsApp" className="absolute left-[1%] top-[1%]" />
              </div>
              <span className="text-white text-[15px] font-semibold capitalize" style={{ fontFamily: "SF Pro Display" }}>WhatsApp</span>
            </a>
          </div>

          {/* ── 2. GOOGLE REVIEW SECTION ── */}
          <div className="relative overflow-hidden w-full rounded-[22.88px] flex flex-col pt-[35px] pb-[35px] gap-[16px]">
            <div className="flex flex-col gap-[4px] px-[10px] items-center">
              <span className="text-center" style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 54, lineHeight: "62px", color: "#111111" }}>Share your experience with</span>
            <div style={{ position: "relative", width: 274, height: 53, margin: "0 auto" }}>
              <span style={{ position: "absolute", width: 123, height: 42, left: "calc(50% - 61.5px - 75.5px)", top: 0, fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 54, lineHeight: "62px", display: "flex", alignItems: "center", textAlign: "center", color: "#111111" }}>us on</span>
              <div style={{ position: "absolute", width: 144, height: 48, left: 133, top: 5, background: "url(/assets/contact/images/image_250.png) 100% / cover no-repeat" }} />
            </div>
            </div>
            <span className="text-center text-[14px] leading-[20px] px-[16px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
              Your feedback helps us improve and builds trust for future clients. If you're happy with the completed project, please take a moment to leave us a review on our Google Business Profile.
            </span>
            <div className="flex justify-center">
              <div className="bg-white flex items-center gap-[10px] px-[19px] py-[13px] rounded-[113px] border border-[#1e88e5]">
                <div className="relative overflow-hidden h-[22.59px] w-[25.67px]">
                  {["vector_1","vector_2","vector_3","vector_4","vector_5","vector_6","vector_7","vector_8","vector_9","vector_10","vector_11"].map((v, i) => (
                    <img key={i} src={`/assets/contact/images/${v}.svg`} alt="" className="absolute" style={{
                      left: ["9%","9%","1%","25%","50%","74%","1%","25%","70%","50%","61%"][i],
                      top: ["52%","29%","38%","38%","38%","38%","4%","4%","4%","4%","65%"][i],
                    }} />
                  ))}
                </div>
                <span className="text-[15.4px] font-medium capitalize" style={{ fontFamily: "SF Pro Display", color: "rgba(30,136,229,1)" }}>Google Business Profile</span>
              </div>
            </div>
          </div>

          {/* ── 3. CONTACT INFO + FORM ── */}
          <div className="relative bg-[#F6F7F9] w-full rounded-[22.88px] flex flex-col gap-[0px] pt-[35px] pb-[35px]">
            {/* Badge */}
            <div style={{ position: "relative", height: 32, marginBottom: 16 }}>
              <div style={{ boxSizing: "border-box", position: "absolute", width: 125, height: 32, left: "calc(50% - 62.5px)", top: 0, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "SF Pro Display", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: "1.716px", textTransform: "uppercase", color: "#202833" }}>Contact Us</span>
              </div>
            </div>
            {/* Heading */}
            <div className="flex justify-center px-[16px] mb-[30px]">
              <span className="text-center text-[48px] leading-[56px] text-[#111111]" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>
                Get in touch, let us know how we can help
              </span>
            </div>
            {/* Contact cards */}
            {[
              { label: "Email Addres", value: "arunijone@gmail.com", v1: "vector_12", v2: "vector_13", v2style: { left: "29%", top: "33%" } },
              { label: "Phone Number", value: "+91 85085 10983",     v1: "vector_14", v2: "vector_15", v2style: { left: "36%", top: "30%" } },
              { label: "My Location",  value: "Rameswaram, Tamilnadu", v1: "vector_16", v2: "vector_17", v2style: { left: "33%", top: "30%" } },
            ].map(item => (
              <div key={item.label} className="bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.26px] mx-auto mb-[16px] relative">
                <div className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]">
                  <img src={`/assets/contact/images/${item.v1}.svg`} alt="" className="absolute top-[1%]" />
                  <img src={`/assets/contact/images/${item.v2}.svg`} alt="" className="absolute" style={item.v2style} />
                </div>
                <span className="absolute left-[68px] top-[18px] text-[18px] leading-[30px]" style={{ fontFamily: "SF Pro Display", color: "rgba(17,17,17,0.6)" }}>{item.label}</span>
                <span className="absolute left-[68px] top-[44px] text-[18px] leading-[28px] text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>{item.value}</span>
              </div>
            ))}
          </div>

          <MobFooter />
        </div>
      </div>
    </MobilePageWrapper>
    </>
  );
};
export default ContactDesktop;


