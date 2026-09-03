import React from "react";
import { useLocation, Link } from "wouter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import MobilePageWrapper from "../components/MobilePageWrapper";

const DESIGN_HEIGHT = 8526;

const Portfolio3 = () => {
  const [, navigate] = useLocation();

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
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
                  fontSize: 16, lineHeight: '22px', color: '#FFFFFF',
                }}>Contact</span>
              </button>
            </div>
          </header>

          <div
            id="_233_7443__Frame_1171277032"
            className="absolute h-[8409.28px] w-[1420.50px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          >
            <div
              id="_231_4684__Section"
              style={{
                position: 'relative',
                background: '#F6F7F9',
                height: 926, width: '100%',
                borderRadius: 20.4131,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {/* Frame 1171277134 — inner flex column */}
              <div
                id="_231_4686__Frame_1171277134"
                style={{
                  position: 'absolute',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: 0, gap: 57,
                  width: 1331, height: 836.5, left: 45, top: 45,
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
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[627.50px] w-[1335.11px] left-[0.00px] top-[0.00px]"
                  style={{ filter: "blur(0.0px)" }}
                >
                  <div
                    id="_231_4689__Gemini_Logo_Removed_"
                    className="absolute h-[628.00px] w-[1335.00px] left-[0.00px] top-[0.00px]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
              </div>
            </div>

            {/* Figma Node 1326:6697 - Our View section with Service Categories */}
            <div className="relative h-[366px] w-full flex flex-col justify-start items-start">
            <div
              id="_figma_1326_6697__Section"
              className="relative overflow-hidden bg-[#F6F7F9] h-[366px] w-full rounded-[20.41px]"
            >
              <div className="absolute h-[266px] w-[1015px] left-[203px] top-[50px]">
                {/* Our View Badge */}
                <div className="absolute h-[38px] w-[133px] left-[calc(50%-66.5px)] top-[0px] flex flex-col justify-start items-start gap-2.5">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '9px 20px', gap: 10, width: 133, height: 38, boxSizing: 'border-box', border: '0.9696px solid #202833', borderRadius: 236.844 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '2.07px', textTransform: 'uppercase', color: '#202833', whiteSpace: 'nowrap' }}>Our View</span>
                  </div>
                </div>

                {/* Heading */}
                <span className="flex justify-center text-center items-center h-[72px] w-[466px] absolute left-[calc(50%-233px)] top-[56px]">
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: '42px', color: '#111111', textAlign: 'center' }}>Explore My Core Service Categories</span>
                </span>

                {/* Service Category Buttons */}
                <div className="absolute w-[1015px] h-[78px] left-[0px] top-[188px]">
                  <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, left: 'calc(50% - 507.5px)', top: 0 }}>
                  {/* Research Button (white bg, blue text/icon) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '17px 24px',
                      gap: 24,
                      background: '#FFFFFF',
                      borderRadius: 23.686382293701172,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 43.72,
                        height: 43.72,
                        background: '#0161FE',
                        borderRadius: 38,
                      }}
                    >
                      <img
                        src="/assets/portfolio2/images/vector_3.svg"
                        alt="Research icon"
                        style={{
                          position: 'absolute',
                          left: 'calc(50% - 12px)',
                          top: 'calc(50% - 12px)',
                          width: 24,
                          height: 24,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'SF Pro Display', Helvetica",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '30px',
                        letterSpacing: '-0.0296em',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#0161FE',
                      }}
                    >
                      Research
                    </span>
                  </div>

                  {/* Design Button (blue bg, white text - selected) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '17px 24px',
                      gap: 24,
                      background: '#0161FE',
                      borderRadius: 23.686382293701172,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 43.72,
                        height: 43.72,
                        background: '#0161FE',
                        borderRadius: 38,
                      }}
                    >
                      <img
                        src="/assets/portfolio2/images/image1.png"
                        alt="Design icon"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: 43.72,
                          height: 43.72,
                          borderRadius: 38,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'SF Pro Display', Helvetica",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '30px',
                        letterSpacing: '-0.0296em',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFFFFF',
                      }}
                    >
                      Design
                    </span>
                  </div>

                  {/* Development Button (white bg, blue text/icon) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '17px 24px',
                      gap: 24,
                      background: '#FFFFFF',
                      borderRadius: 23.686382293701172,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 43.72,
                        height: 43.72,
                        background: '#0161FE',
                        borderRadius: 38,
                      }}
                    >
                      <img
                        src="/assets/about/images/vector_35.svg"
                        alt="Development icon"
                        style={{
                          position: 'absolute',
                          left: 'calc(50% - 12px)',
                          top: 'calc(50% - 12px)',
                          width: 24,
                          height: 24,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'SF Pro Display', Helvetica",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '30px',
                        letterSpacing: '-0.0296em',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#0161FE',
                      }}
                    >
                      Development
                    </span>
                  </div>

                  {/* Creative Button (white bg, blue text/icon) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '17px 24px',
                      gap: 24,
                      background: '#FFFFFF',
                      borderRadius: 23.686382293701172,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 43.72,
                        height: 43.72,
                        background: '#0161FE',
                        borderRadius: 38,
                      }}
                    >
                      <img
                        src="/assets/about/images/vector_37.svg"
                        alt="Creative icon"
                        style={{
                          position: 'absolute',
                          left: 'calc(50% - 12px)',
                          top: 'calc(50% - 12px)',
                          width: 24,
                          height: 24,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'SF Pro Display', Helvetica",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '30px',
                        letterSpacing: '-0.0296em',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#0161FE',
                      }}
                    >
                      Creative
                    </span>
                  </div>

                  {/* Marketing Button (white bg, blue text/icon) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '17px 24px',
                      gap: 24,
                      background: '#FFFFFF',
                      borderRadius: 23.686382293701172,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 43.72,
                        height: 43.72,
                        background: '#0161FE',
                        borderRadius: 38,
                      }}
                    >
                      <img
                        src="/assets/about/images/vector_39.svg"
                        alt="Marketing icon"
                        style={{
                          position: 'absolute',
                          left: 'calc(50% - 12px)',
                          top: 'calc(50% - 12px)',
                          width: 24,
                          height: 24,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'SF Pro Display', Helvetica",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: '30px',
                        letterSpacing: '-0.0296em',
                        textTransform: 'capitalize',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#0161FE',
                      }}
                    >
                      Marketing
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Figma Node 1326:6709 - RELATED WORKS Section */}
            <div className="relative h-[366px] w-full flex flex-col justify-start items-start">
            <div
              id="_figma_1326_6709__Section"
              className="relative overflow-hidden bg-[#F6F7F9] h-[366px] w-full rounded-[23.69px]"
            >
              <div className="absolute h-[266px] w-[1015px] left-[203px] top-[50px]">
                {/* Heading */}
                <span className="flex justify-center text-center items-center h-[70px] w-[354px] absolute left-[calc(50%-177.5px)] top-[68px]">
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: '45px', color: '#111111', textAlign: 'center' }}>Related Work Across<br />My Core Services</span>
                </span>
                {/* Badge */}
                <div className="absolute h-[38px] w-[175px] left-[calc(50%-88px)] top-[0px] flex flex-col justify-start items-start gap-2.5">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '9px 20px', gap: 10, width: 175, height: 38, boxSizing: 'border-box', border: '0.9696px solid #202833', borderRadius: 236.844 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '2.07px', textTransform: 'uppercase', color: '#202833', whiteSpace: 'nowrap' }}>Related works</span>
                  </div>
                </div>
                {/* Buttons row */}
                <div className="absolute w-[1015px] h-[78px] left-[0px] top-[188px]">
                  <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 30, width: 658, height: 77.72, left: 'calc(50% - 329px)', top: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, width: 658, height: 77.72 }}>
                      {/* Overview (white, blue text/icon) */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: '17px 24px',
                          gap: 24,
                          background: '#FFFFFF',
                          borderRadius: 23.686382293701172,
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: 43.72,
                            height: 43.72,
                            background: '#0161FE',
                            borderRadius: 38,
                          }}
                        >
                          <img
                            src="/assets/portfolio/images/vector_2.png"
                            alt="Overview"
                            style={{
                              position: 'absolute',
                              left: 'calc(50% - 8px)',
                              top: 'calc(50% - 12px)',
                              width: 16.69,
                              height: 24,
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: "'SF Pro Display', Helvetica",
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 20,
                            lineHeight: '30px',
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0161FE',
                          }}
                        >
                          Overview
                        </span>
                      </div>

                      {/* Website (white, blue text/icon) */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: '17px 24px',
                          gap: 24,
                          background: '#FFFFFF',
                          borderRadius: 23.686382293701172,
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: 43.72,
                            height: 43.72,
                            background: '#0161FE',
                            borderRadius: 38,
                          }}
                        >
                          <img
                            src="/assets/portfolio/images/vector_2.png"
                            alt="Website"
                            style={{
                              position: 'absolute',
                              left: 'calc(50% - 8px)',
                              top: 'calc(50% - 12px)',
                              width: 16.69,
                              height: 24,
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: "'SF Pro Display', Helvetica",
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 20,
                            lineHeight: '30px',
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0161FE',
                          }}
                        >
                          Website
                        </span>
                      </div>

                      {/* Mobile App (blue, white text - selected) */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: '17px 24px',
                          gap: 24,
                          background: '#0161FE',
                          borderRadius: 23.686382293701172,
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            width: 43.72,
                            height: 43.72,
                            background: 'rgba(255,255,255,0.30)',
                            borderRadius: 38,
                          }}
                        >
                          <img
                            src="/assets/portfolio2/images/image1.png"
                            alt="Mobile App"
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              width: 43.72,
                              height: 43.72,
                              borderRadius: 38,
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: "'SF Pro Display', Helvetica",
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 20,
                            lineHeight: '30px',
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#FFFFFF',
                          }}
                        >
                          Mobile App
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Figma Node 1326:6721 - PARTNERS APP Section */}
            <div className="relative h-[366px] w-full flex flex-col justify-start items-start">
            <div
              id="_figma_1326_6721__Section"
              className="relative overflow-hidden bg-[#F6F7F9] h-[366px] w-full rounded-[23.69px]"
            >
              <div className="absolute h-[266px] w-[1015px] left-[203px] top-[50px]">
                {/* Heading */}
                <span className="flex justify-center text-center items-center h-[70px] w-[354px] absolute left-[calc(50%-177.5px)] top-[68px]">
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: '45px', color: '#111111', textAlign: 'center' }}>Related Work Across<br />My Core Services</span>
                </span>
                {/* Badge */}
                <div className="absolute h-[38px] left-[50%] -translate-x-1/2 top-[0px] flex flex-col justify-start items-start gap-2.5">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: "9px 20px", gap: 10, height: 38, whiteSpace: "nowrap", boxSizing: 'border-box', border: '0.9696px solid #202833', borderRadius: 236.844 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '2.07px', textTransform: 'uppercase', color: '#202833', whiteSpace: 'nowrap' }}>Partners app</span>
                  </div>
                </div>
                {/* Buttons row */}
                <div className="absolute w-[1015px] h-[78px] left-[0px] top-[188px]">
                  <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 30, width: 658, height: 77.72, left: 'calc(50% - 329px)', top: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, width: 658, height: 77.72 }}>
                      {/* Pandit Partner */}
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686382293701172 }}>
                        <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                          <img src="/assets/portfolio/images/vector_2.png" alt="Pandit Partner" style={{ position: 'absolute', left: 'calc(50% - 8px)', top: 'calc(50% - 12px)', width: 16.69, height: 24 }} />
                        </div>
                        <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE', whiteSpace: 'nowrap' }}>Pandit Partner</span>
                      </div>
                      {/* Travel Partner */}
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686382293701172 }}>
                        <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                          <img src="/assets/portfolio/images/vector_2.png" alt="Travel Partner" style={{ position: 'absolute', left: 'calc(50% - 8px)', top: 'calc(50% - 12px)', width: 16.69, height: 24 }} />
                        </div>
                        <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE', whiteSpace: 'nowrap' }}>Travel Partner</span>
                      </div>
                      {/* Stay Partner (selected) */}
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#0161FE', borderRadius: 23.686382293701172 }}>
                        <div style={{ position: 'relative', width: 43.72, height: 43.72, background: 'rgba(255,255,255,0.30)', borderRadius: 38 }}>
                          <img src="/assets/portfolio2/images/image1.png" alt="Stay Partner" style={{ position: 'absolute', left: 0, top: 0, width: 43.72, height: 43.72, borderRadius: 38 }} />
                        </div>
                        <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#FFFFFF', whiteSpace: 'nowrap' }}>Stay Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div
              id="_233_7493__Frame_1171277034"
              className="relative w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[100px]"
            >
              <div
                id="_233_7494__Frame_1171277033"
                className="relative w-[1420.5px] flex flex-col justify-start items-center flex-nowrap gap-[100px]"
              >
                <div
                   id="_233_7520__Frame_1171277022"
                  className="relative h-[2370.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                >
                  <div
                    id="_233_7521__Frame_198"
                    className="relative h-[2370.00px] w-[1337.00px] flex flex-col justify-start items-start flex-nowrap gap-[60px]"
                  >
                    <div
                      id="_233_7522__Frame_11"
                      className="relative h-[426.00px] w-full"
                    >
                      <div
                        id="_233_7523__Frame_133"
                        className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7524__Container"
                          className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                        >
                          <div
                            id="_233_7525__Frame_103"
                            className="relative h-[404.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                          >
                            <div
                              id="_233_7526__Image_Paste_Frame"
                              className="relative h-[406.00px] w-full"
                            >
                              <div
                                id="_233_7527__Frame_110"
                                style={{
                                      background:
                                        "url(/assets/portfolio3/images/image.png) 100% / cover no-repeat",
                                    }}
                                className="absolute h-[409.89px] w-[201.00px] top-[-2.00px] left-[195.50px]"
                              >
                                

                                <div
                                  id="_233_7531__iPhone_14_Pro"
                                  className="absolute h-[409.89px] w-[201.00px] left-[0.00px] top-[0.00px]"
                                >
                                  <div
                                    id="I233_7531_101_45__Space_Black"
                                    className="absolute h-[99.89%] w-[100.23%]"
                                    style={{
                                      background:
                                        "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                    }}
                                  ></div>
                                </div>

                                <div
                                  id="_233_7532__Home_Indicator"
                                  className="absolute bg-white h-[2.32px] w-[64.99px] left-[calc(50%-32.74px)] rounded-[46.42032241821289px] bottom-[13.47px]"
                                ></div>

                                <div
                                  id="_233_7533__Frame_109"
                                  className="absolute h-[8.36px] w-[146.52px] left-[27.29px] top-[19.50px]"
                                >
                                  <span
                                    id="_233_7534__Time"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-128.41px)] absolute top-[calc(50%-4.18px)] left-[0.10px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[6.963047981262207px] font-semibold tracking-[-0.13926099240779877px]"
                                    >
                                      9:41
                                    </span>
                                  </span>
                                  <img
                                    id="_233_7535__Battery"
                                    src="/assets/portfolio3/images/battery.svg"
                                    alt="Battery"
                                    className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                  />
                                  <div
                                    id="_233_7539__Wifi"
                                    className="absolute"
                                  ></div>

                                  <div
                                    id="_233_7543__Cellular_Connection"
                                    className="absolute"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="_233_7548__Frame_132"
                          className="relative h-[110.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                        >
                          <div
                            id="_233_7549__Frame_131"
                            className="relative h-[90.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_233_7550__Heading_2___Project_"
                              className="flex justify-center text-center items-center h-[90.00px] w-[622.00px] relative"
                            >
                              <span
                                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[45.00px]"
                              >
                                Explore available pujas for your
                                spiritual needs
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_233_7551__Frame_19"
                      className="relative h-[426.00px] w-full"
                    >
                      <div
                        id="_233_7552__Frame_133"
                        className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7553__Frame_132"
                          className="relative h-[98.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                        >
                          <div
                            id="_233_7554__Frame_131"
                            className="relative h-[78.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_233_7555__Heading_2___Project_"
                              className="flex justify-center text-center items-center h-[78.00px] w-[622.00px] relative"
                            >
                              <span
                                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.81px]"
                              >
                                Explore available pujas for your
                                spiritual needs
                              </span>
                            </span>
                          </div>
                        </div>

                        <div
                          id="_233_7556__Container"
                          className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                        >
                          <div
                            id="_233_7557__Frame_103"
                            className="relative h-[404.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                          >
                            <div
                              id="_233_7558__Image_Paste_Frame"
                              className="relative h-[406.00px] w-full"
                            >
                              <div
                                id="_233_7559__Frame_1171277081"
                                className="absolute h-[394.41px] w-[418.00px] left-[calc(50%-209.50px)] top-[calc(50%-197.00px)]"
                              >
                                <div
                                  id="_233_7560__Frame_114"
                                  className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                >
                                  <div
                                    id="_233_7562___1_Sign_up__New_User"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7563__Frame_1"
                                      className="absolute h-[18.90px] w-[65.90px] left-[calc(50%-36.95px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7564__Welcome"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[65.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7565__Frame_2"
                                      className="absolute h-[14.57px] w-[118.90px] left-[calc(50%-63.21px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7566__Sign_up_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[118.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign up to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7567__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.71px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.64px]"
                                    >
                                      <span
                                        id="_233_7568__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7569__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.57px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.32px]"
                                    >
                                      <img
                                        id="_233_7570__16"
                                        src="/assets/portfolio3/images/16.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7572__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.55px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.31px]"
                                    >
                                      <div
                                        id="_233_7573__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7574__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7574_136_155__vector"
                                            src="/assets/portfolio3/images/vector_5.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7574_136_156__vector"
                                            src="/assets/portfolio3/images/vector_6.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7574_136_157__vector"
                                            src="/assets/portfolio3/images/vector_7.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7574_136_158__vector"
                                            src="/assets/portfolio3/images/vector_8.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7575__Sign_up_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[68.11px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7576__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7577__Group"
                                          src="/assets/portfolio3/images/group_2.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7580__Sign_up_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[63.21px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7582__Frame_4"
                                      className="absolute h-[10.90px] w-[22.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+29.08px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7583__Log_In"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[22.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Log In
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7584__Frame_3"
                                      className="absolute h-[9.90px] w-[86.90px] left-[calc(50%-60.35px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7585__Already_have_an_acco"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[86.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Already have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7586__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.12px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7587__Line"
                                        src="/assets/portfolio3/images/line.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7588__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7589__Line"
                                        src="/assets/portfolio3/images/line_1.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7590__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                  >
                                    <div
                                      id="I233_7590_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7591__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.17px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7592__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.01px)] left-[0.11px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7593__Battery"
                                      src="/assets/portfolio3/images/battery_1.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7597__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7601__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7606__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>

                                <div
                                  id="_233_7607__Frame_115"
                                  className="absolute h-[393.07px] w-[192.75px] left-[225.25px] top-[1.33px]"
                                >
                                  <div
                                    id="_233_7609___1_Log_in__Existing_"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7610__Frame_1"
                                      className="absolute h-[18.90px] w-[107.90px] left-[calc(50%-57.96px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7611__Welcome_Back_"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[107.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome Back!
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7612__Frame_2"
                                      className="absolute h-[14.57px] w-[116.90px] left-[calc(50%-62.46px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7613__Sign_in_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[116.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign in to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7614__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.73px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.65px]"
                                    >
                                      <span
                                        id="_233_7615__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7616__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.58px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.31px]"
                                    >
                                      <img
                                        id="_233_7617__16"
                                        src="/assets/portfolio3/images/16_1.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7619__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.54px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.32px]"
                                    >
                                      <div
                                        id="_233_7620__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7621__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7621_136_155__vector"
                                            src="/assets/portfolio3/images/vector_9.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7621_136_156__vector"
                                            src="/assets/portfolio3/images/vector_10.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7621_136_157__vector"
                                            src="/assets/portfolio3/images/vector_11.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7621_136_158__vector"
                                            src="/assets/portfolio3/images/vector_12.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7622__Continue_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[73.45px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7623__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7624__Group"
                                          src="/assets/portfolio3/images/group_3.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7627__Continue_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[69.44px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7629__Frame_4"
                                      className="absolute h-[10.90px] w-[28.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+22.72px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7630__Sign_Up"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[28.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Sign Up
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7631__Frame_3"
                                      className="absolute h-[9.90px] w-[78.90px] left-[calc(50%-59.70px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7632__Don_t_have_an_accoun"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[78.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Don't have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7633__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.15px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7634__Line"
                                        src="/assets/portfolio3/images/line_2.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7635__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7636__Line"
                                        src="/assets/portfolio3/images/line_3.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7637__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[-0.01px] top-[-0.00px]"
                                  >
                                    <div
                                      id="I233_7637_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7638__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.16px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7639__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.00px)] left-[0.10px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7640__Battery"
                                      src="/assets/portfolio3/images/battery_2.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7644__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7648__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7653__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_233_7654__Frame_31"
                      className="relative h-[426.00px] w-full"
                    >
                      <div
                        id="_233_7655__Frame_133"
                        className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7656__Container"
                          className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                        >
                          <div
                            id="_233_7657__Frame_103"
                            className="relative h-[404.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                          >
                            <div
                              id="_233_7658__Image_Paste_Frame"
                              className="relative h-[406.00px] w-full"
                            >
                              <div
                                id="_233_7659__Frame_110"
                                className="absolute h-[409.89px] w-[201.00px] top-[-2.00px] left-[195.50px]"
                              >
                                <div
                                  id="_233_7661___1_Splash"
                                  className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[395.50px] w-[182.43px] rounded-[18.56812858581543px] left-[8.36px] top-[8.82px]"
                                >
                                  <div
                                    id="_233_7663__Rectangle_3"
                                    className="absolute h-[60.49px] w-[60.12px] rounded-[162.40573120117188px] left-[61.27px] top-[130.44px]"
                                  ></div>

                                  <div
                                    id="_233_7664__Frame_1"
                                    className="absolute h-[24.28px] w-[91.28px] left-[calc(50%-49.64px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[200.54px]"
                                  >
                                    <span
                                      id="_233_7665__Find_Pattu"
                                      className="flex justify-start text-left items-start h-[23.00px] w-[90.00px] relative"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[19.496536254882812px] font-bold"
                                      >
                                        Find Pattu
                                      </span>
                                    </span>
                                  </div>

                                  <div
                                    id="_233_7666__Frame_2"
                                    className="absolute h-[11.28px] w-[81.28px] left-[calc(50%-44.43px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[227.92px]"
                                  >
                                    <span
                                      id="_233_7667__Music___Brain_Traini"
                                      className="flex justify-start text-left items-start h-[10.00px] w-[80.00px] relative"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.355657577514648px] font-medium"
                                      >
                                        Music &amp; Brain Training
                                      </span>
                                    </span>
                                  </div>

                                  <div
                                    id="_233_7668__Frame_3"
                                    className="absolute h-[8.28px] w-[68.28px] left-[calc(50%-38.14px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[346.30px]"
                                  >
                                    <span
                                      id="_233_7669__Made_with_love_for_m"
                                      className="flex justify-start text-left items-start h-[7.00px] w-[67.00px] relative"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent italic text-[6.034641742706299px] font-semibold"
                                      >
                                        Made with love for music
                                      </span>
                                    </span>
                                  </div>

                                  <img
                                    id="_233_7670__Group_7"
                                    src="/assets/portfolio3/images/group_7.svg"
                                    alt="Group_7"
                                    className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.85)]"
                                  />
                                  <img
                                    id="_233_7673__Group_8"
                                    src="/assets/portfolio3/images/group_8.svg"
                                    alt="Group_8"
                                    className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.30)]"
                                  />
                                </div>

                                <div
                                  id="_233_7682__iPhone_14_Pro"
                                  className="absolute h-[409.89px] w-[201.00px] left-[0.00px] top-[0.00px]"
                                >
                                  <div
                                    id="I233_7682_101_45__Space_Black"
                                    className="absolute h-[99.89%] w-[100.23%]"
                                    style={{
                                      background:
                                        "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                    }}
                                  ></div>
                                </div>

                                <div
                                  id="_233_7683__Home_Indicator"
                                  className="absolute bg-black h-[2.32px] w-[64.99px] left-[calc(50%-32.74px)] rounded-[46.42032241821289px] bottom-[13.47px]"
                                ></div>

                                <div
                                  id="_233_7684__Frame_109"
                                  className="absolute h-[8.36px] w-[146.52px] left-[27.29px] top-[19.50px]"
                                >
                                  <span
                                    id="_233_7685__Time"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-128.41px)] absolute top-[calc(50%-4.18px)] left-[0.10px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.963047981262207px] font-semibold tracking-[-0.13926099240779877px]"
                                    >
                                      9:41
                                    </span>
                                  </span>
                                  <img
                                    id="_233_7686__Battery"
                                    src="/assets/portfolio3/images/battery_3.svg"
                                    alt="Battery"
                                    className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                  />
                                  <div
                                    id="_233_7690__Wifi"
                                    className="absolute"
                                  ></div>

                                  <div
                                    id="_233_7694__Cellular_Connection"
                                    className="absolute"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="_233_7699__Frame_132"
                          className="relative h-[98.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                        >
                          <div
                            id="_233_7700__Frame_131"
                            className="relative h-[78.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_233_7701__Heading_2___Project_"
                              className="flex justify-center text-center items-center h-[78.00px] w-[622.00px] relative"
                            >
                              <span
                                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.81px]"
                              >
                                Explore available pujas for your
                                spiritual needs
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_233_7702__Frame_30"
                      className="relative h-[426.00px] w-full"
                    >
                      <div
                        id="_233_7703__Frame_133"
                        className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7704__Frame_132"
                          className="relative h-[98.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                        >
                          <div
                            id="_233_7705__Frame_131"
                            className="relative h-[78.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_233_7706__Heading_2___Project_"
                              className="flex justify-center text-center items-center h-[78.00px] w-[622.00px] relative"
                            >
                              <span
                                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.81px]"
                              >
                                Explore available pujas for your
                                spiritual needs
                              </span>
                            </span>
                          </div>
                        </div>

                        <div
                          id="_233_7707__Container"
                          className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                        >
                          <div
                            id="_233_7708__Frame_103"
                            className="relative h-[404.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                          >
                            <div
                              id="_233_7709__Image_Paste_Frame"
                              className="relative h-[406.00px] w-full"
                            >
                              <div
                                id="_233_7710__Frame_1171277081"
                                className="absolute h-[394.41px] w-[418.00px] left-[calc(50%-209.50px)] top-[calc(50%-197.00px)]"
                              >
                                <div
                                  id="_233_7711__Frame_114"
                                  className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                >
                                  <div
                                    id="_233_7713___1_Sign_up__New_User"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7714__Frame_1"
                                      className="absolute h-[18.90px] w-[65.90px] left-[calc(50%-36.95px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7715__Welcome"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[65.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7716__Frame_2"
                                      className="absolute h-[14.57px] w-[118.90px] left-[calc(50%-63.21px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7717__Sign_up_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[118.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign up to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7718__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.71px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.64px]"
                                    >
                                      <span
                                        id="_233_7719__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7720__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.57px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.32px]"
                                    >
                                      <img
                                        id="_233_7721__16"
                                        src="/assets/portfolio3/images/16_2.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7723__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.55px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.31px]"
                                    >
                                      <div
                                        id="_233_7724__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7725__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7725_136_155__vector"
                                            src="/assets/portfolio3/images/vector_13.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7725_136_156__vector"
                                            src="/assets/portfolio3/images/vector_14.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7725_136_157__vector"
                                            src="/assets/portfolio3/images/vector_15.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7725_136_158__vector"
                                            src="/assets/portfolio3/images/vector_16.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7726__Sign_up_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[68.11px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7727__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7728__Group"
                                          src="/assets/portfolio3/images/group_4.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7731__Sign_up_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[63.21px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7733__Frame_4"
                                      className="absolute h-[10.90px] w-[22.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+29.08px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7734__Log_In"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[22.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Log In
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7735__Frame_3"
                                      className="absolute h-[9.90px] w-[86.90px] left-[calc(50%-60.35px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7736__Already_have_an_acco"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[86.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Already have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7737__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.12px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7738__Line"
                                        src="/assets/portfolio3/images/line_4.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7739__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7740__Line"
                                        src="/assets/portfolio3/images/line_5.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7741__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                  >
                                    <div
                                      id="I233_7741_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7742__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.17px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7743__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.01px)] left-[0.11px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7744__Battery"
                                      src="/assets/portfolio3/images/battery_4.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7748__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7752__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7757__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>

                                <div
                                  id="_233_7758__Frame_115"
                                  className="absolute h-[393.07px] w-[192.75px] left-[225.25px] top-[1.33px]"
                                >
                                  <div
                                    id="_233_7760___1_Log_in__Existing_"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7761__Frame_1"
                                      className="absolute h-[18.90px] w-[107.90px] left-[calc(50%-57.96px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7762__Welcome_Back_"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[107.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome Back!
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7763__Frame_2"
                                      className="absolute h-[14.57px] w-[116.90px] left-[calc(50%-62.46px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7764__Sign_in_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[116.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign in to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7765__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.73px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.65px]"
                                    >
                                      <span
                                        id="_233_7766__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7767__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.58px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.31px]"
                                    >
                                      <img
                                        id="_233_7768__16"
                                        src="/assets/portfolio3/images/16_3.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7770__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.54px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.32px]"
                                    >
                                      <div
                                        id="_233_7771__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7772__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7772_136_155__vector"
                                            src="/assets/portfolio3/images/vector_17.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7772_136_156__vector"
                                            src="/assets/portfolio3/images/vector_18.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7772_136_157__vector"
                                            src="/assets/portfolio3/images/vector_19.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7772_136_158__vector"
                                            src="/assets/portfolio3/images/vector_20.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7773__Continue_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[73.45px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7774__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7775__Group"
                                          src="/assets/portfolio3/images/group_5.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7778__Continue_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[69.44px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7780__Frame_4"
                                      className="absolute h-[10.90px] w-[28.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+22.72px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7781__Sign_Up"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[28.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Sign Up
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7782__Frame_3"
                                      className="absolute h-[9.90px] w-[78.90px] left-[calc(50%-59.70px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7783__Don_t_have_an_accoun"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[78.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Don't have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7784__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.15px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7785__Line"
                                        src="/assets/portfolio3/images/line_6.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7786__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7787__Line"
                                        src="/assets/portfolio3/images/line_7.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7788__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[-0.01px] top-[-0.00px]"
                                  >
                                    <div
                                      id="I233_7788_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7789__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.16px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7790__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.00px)] left-[0.10px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7791__Battery"
                                      src="/assets/portfolio3/images/battery_5.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7795__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7799__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7804__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_233_7805__Frame_32"
                      className="relative h-[426.00px] w-full"
                    >
                      <div
                        id="_233_7806__Frame_133"
                        className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7807__Container"
                          className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                        >
                          <div
                            id="_233_7808__Frame_103"
                            className="relative h-[404.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                          >
                            <div
                              id="_233_7809__Image_Paste_Frame"
                              className="relative h-[406.00px] w-full"
                            >
                              <div
                                id="_233_7810__Frame_1171277081"
                                className="absolute h-[394.41px] w-[418.00px] left-[calc(50%-209.50px)] top-[calc(50%-197.00px)]"
                              >
                                <div
                                  id="_233_7811__Frame_114"
                                  className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                >
                                  <div
                                    id="_233_7813___1_Sign_up__New_User"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7814__Frame_1"
                                      className="absolute h-[18.90px] w-[65.90px] left-[calc(50%-36.95px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7815__Welcome"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[65.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7816__Frame_2"
                                      className="absolute h-[14.57px] w-[118.90px] left-[calc(50%-63.21px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7817__Sign_up_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[118.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign up to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7818__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.71px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.64px]"
                                    >
                                      <span
                                        id="_233_7819__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7820__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.57px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.32px]"
                                    >
                                      <img
                                        id="_233_7821__16"
                                        src="/assets/portfolio3/images/16_4.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7823__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.55px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.31px]"
                                    >
                                      <div
                                        id="_233_7824__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7825__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7825_136_155__vector"
                                            src="/assets/portfolio3/images/vector_21.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7825_136_156__vector"
                                            src="/assets/portfolio3/images/vector_22.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7825_136_157__vector"
                                            src="/assets/portfolio3/images/vector_23.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7825_136_158__vector"
                                            src="/assets/portfolio3/images/vector_24.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7826__Sign_up_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[68.11px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7827__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7828__Group"
                                          src="/assets/portfolio3/images/group_6.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7831__Sign_up_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[63.21px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Sign up with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7833__Frame_4"
                                      className="absolute h-[10.90px] w-[22.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+29.08px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7834__Log_In"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[22.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Log In
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7835__Frame_3"
                                      className="absolute h-[9.90px] w-[86.90px] left-[calc(50%-60.35px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7836__Already_have_an_acco"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[86.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Already have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7837__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.12px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7838__Line"
                                        src="/assets/portfolio3/images/line_8.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7839__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7840__Line"
                                        src="/assets/portfolio3/images/line_9.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7841__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[0.00px] top-[0.00px]"
                                  >
                                    <div
                                      id="I233_7841_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7842__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.17px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7843__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.01px)] left-[0.11px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7844__Battery"
                                      src="/assets/portfolio3/images/battery_6.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7848__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7852__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7857__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>

                                <div
                                  id="_233_7858__Frame_115"
                                  className="absolute h-[393.07px] w-[192.75px] left-[225.25px] top-[1.33px]"
                                >
                                  <div
                                    id="_233_7860___1_Log_in__Existing_"
                                    className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[379.27px] w-[174.95px] rounded-[13.354632377624512px] left-[8.01px] top-[8.46px]"
                                  >
                                    <div
                                      id="_233_7861__Frame_1"
                                      className="absolute h-[18.90px] w-[107.90px] left-[calc(50%-57.96px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[100.60px]"
                                    >
                                      <span
                                        id="_233_7862__Welcome_Back_"
                                        className="flex justify-center text-center items-start h-[18.00px] w-[107.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(53,58,102,1.00)] bg-clip-text text-transparent not-italic text-[15.135249137878418px] font-bold"
                                        >
                                          Welcome Back!
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7863__Frame_2"
                                      className="absolute h-[14.57px] w-[116.90px] left-[calc(50%-62.46px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[123.31px]"
                                    >
                                      <span
                                        id="_233_7864__Sign_in_to_your_voca"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[116.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-medium leading-[12.02px]"
                                        >
                                          Sign in to your vocal brain training
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7865__Frame_15"
                                      className="absolute h-[14.57px] w-[77.90px] left-[calc(50%-42.73px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-[5px] top-[335.65px]"
                                    >
                                      <span
                                        id="_233_7866__Need_help__Contact_S"
                                        className="flex justify-center text-center items-start h-[13.00px] w-[77.00px] relative"
                                      >
                                        <span
                                          className="bg-[rgba(119,119,119,1.00)] bg-clip-text text-transparent not-italic text-[6.232161998748779px] font-medium leading-[12.02px]"
                                        >
                                          Need help? Contact Support
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7867__Frame_12"
                                      className="absolute h-[29.84px] w-[19.15px] left-[calc(50%-13.58px)] flex flex-row justify-start items-center flex-nowrap gap-1 p-1 top-[58.31px]"
                                    >
                                      <img
                                        id="_233_7868__16"
                                        src="/assets/portfolio3/images/16_5.svg"
                                        alt="_16"
                                        className="relative"
                                      />
                                    </div>

                                    <div
                                      id="_233_7870__Frame_16"
                                      className="absolute h-[59.65px] w-[157.08px] left-[calc(50%-78.54px)] flex flex-col justify-start items-start flex-nowrap gap-1 top-[200.32px]"
                                    >
                                      <div
                                        id="_233_7871__Frame_12"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <div
                                          id="_233_7872__google"
                                          className="relative overflow-hidden h-[8.95px] w-[8.95px]"
                                        >
                                          <img
                                            id="I233_7872_136_155__vector"
                                            src="/assets/portfolio3/images/vector_25.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.51)] top-[calc(100%_*_0.42)]"
                                          />
                                          <img
                                            id="I233_7872_136_156__vector"
                                            src="/assets/portfolio3/images/vector_26.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.59)]"
                                          />
                                          <img
                                            id="I233_7872_136_157__vector"
                                            src="/assets/portfolio3/images/vector_27.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.06)] top-[calc(100%_*_0.30)]"
                                          />
                                          <img
                                            id="I233_7872_136_158__vector"
                                            src="/assets/portfolio3/images/vector_28.svg"
                                            alt="vector"
                                            className="absolute left-[calc(100%_*_0.11)] top-[calc(100%_*_0.06)]"
                                          />
                                        </div>

                                        <span
                                          id="_233_7873__Continue_with_Google"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[73.45px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Google
                                          </span>
                                        </span>
                                      </div>

                                      <div
                                        id="_233_7874__Frame_13"
                                        className="relative bg-white shadow-[0.0px_0.0px_0.8903088569641113px_0.0px_rgba(0,0,0,0.25)] h-[15.34px] w-[calc(100%-4px-4px)] flex flex-row justify-center items-center flex-nowrap gap-1 px-1 py-1.5 rounded-[4.970891952514648px]"
                                      >
                                        <img
                                          id="_233_7875__Group"
                                          src="/assets/portfolio3/images/group_9.svg"
                                          alt="Group"
                                          className="relative"
                                        />
                                        <span
                                          id="_233_7878__Continue_with_Apple"
                                          className="flex justify-center text-center items-start h-[9.35px] w-[69.44px] relative"
                                        >
                                          <span
                                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[6.959247589111328px] font-semibold leading-[11.13px]"
                                          >
                                            Continue with Apple
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <div
                                      id="_233_7880__Frame_4"
                                      className="absolute h-[10.90px] w-[28.90px] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 left-[calc(50%+22.72px)] top-[288.02px]"
                                    >
                                      <span
                                        id="_233_7881__Sign_Up"
                                        className="flex justify-start text-left items-start h-[10.00px] w-[28.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[8.012778282165527px] font-semibold"
                                        >
                                          Sign Up
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7882__Frame_3"
                                      className="absolute h-[9.90px] w-[78.90px] left-[calc(50%-59.70px)] flex flex-row justify-center items-center flex-nowrap gap-1 p-1 top-[288.46px]"
                                    >
                                      <span
                                        id="_233_7883__Don_t_have_an_accoun"
                                        className="flex justify-start text-left items-start h-[9.00px] w-[78.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(59,59,59,1.00)] bg-clip-text text-transparent not-italic text-[7.567624568939209px] font-semibold"
                                        >
                                          Don't have an account?
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_233_7884__or"
                                      className="absolute h-[8.01px] w-[124.20px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[23.15px] top-[273.32px]"
                                    >
                                      <img
                                        id="_233_7885__Line"
                                        src="/assets/portfolio3/images/line_10.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                      <span
                                        id="_233_7886__Or"
                                        className="flex justify-center text-center items-start h-[8.00px] w-[7.00px] relative"
                                      >
                                        <span
                                          className="whitespace-nowrap bg-[rgba(108,114,120,1.00)] bg-clip-text text-transparent not-italic text-[5.341853141784668px] font-normal leading-[150.00%] tracking-[0px]"
                                        >
                                          Or
                                        </span>
                                      </span>
                                      <img
                                        id="_233_7887__Line"
                                        src="/assets/portfolio3/images/line_11.svg"
                                        alt="Line"
                                        className="relative"
                                      />
                                    </div>
                                  </div>

                                  <div
                                    id="_233_7888__iPhone_14_Pro"
                                    className="absolute h-[393.07px] w-[192.75px] left-[-0.01px] top-[-0.00px]"
                                  >
                                    <div
                                      id="I233_7888_101_45__Space_Black"
                                      className="absolute h-[99.89%] w-[100.23%]"
                                      style={{
                                        background:
                                          "url(/assets/portfolio3/images/space_black.png) 100% / cover no-repeat",
                                      }}
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7889__Frame_109"
                                    className="absolute h-[8.01px] w-[140.50px] left-[26.16px] top-[18.70px]"
                                  >
                                    <span
                                      id="_233_7890__Time"
                                      className="flex justify-center text-center items-start h-[8.00px] w-[calc(100%-123.14px)] absolute top-[calc(50%-4.00px)] left-[0.10px]"
                                    >
                                      <span
                                        className="whitespace-nowrap bg-[rgba(44,44,44,1.00)] bg-clip-text text-transparent not-italic text-[6.677316188812256px] font-semibold tracking-[-0.13354633748531342px]"
                                      >
                                        9:41
                                      </span>
                                    </span>
                                    <img
                                      id="_233_7891__Battery"
                                      src="/assets/portfolio3/images/battery_7.svg"
                                      alt="Battery"
                                      className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                    />
                                    <div
                                      id="_233_7895__Wifi"
                                      className="absolute"
                                    ></div>

                                    <div
                                      id="_233_7899__Cellular_Connection"
                                      className="absolute"
                                    ></div>
                                  </div>

                                  <div
                                    id="_233_7904__Home_Indicator"
                                    className="absolute bg-black h-[2.23px] w-[62.32px] left-[calc(50%-31.39px)] rounded-[44.515438079833984px] bottom-[12.91px]"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="_233_7905__Frame_132"
                          className="relative h-[98.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                        >
                          <div
                            id="_233_7906__Frame_131"
                            className="relative h-[78.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_233_7907__Heading_2___Project_"
                              className="flex justify-center text-center items-center h-[78.00px] w-[622.00px] relative"
                            >
                              <span
                                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.81px]"
                              >
                                Explore available pujas for your
                                spiritual needs
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_233_7908__Frame_1171277031"
                style={{ position: 'relative', height: 750, width: 1420.5, flexShrink: 0 }}
              >
                <div
                  id="_233_7909__Frame_9"
                  style={{ position: 'absolute', background: 'rgba(246,247,249,1)', height: 750, width: 1420.5, borderRadius: 23, left: 0, top: 0, overflow: 'visible' }}
                >
                  <div
                    id="_233_7910__Container"
                    className="absolute overflow-hidden bg-white h-[619.50px] w-[610.50px] left-[calc(50%-667.00px)] top-[calc(50%-310.50px)] rounded-[23.686382293701172px]"
                  >
                    <div
                      id="_233_7911__Frame_103"
                      className="absolute h-[601.00px] w-[592.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5 left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_233_7912__Image_Paste_Frame"
                        className="relative h-[601.00px] w-full"
                      ></div>
                    </div>

                    <div
                      id="_233_7913__image_50"
                      className="absolute h-[491.00px] w-[491.00px] left-[calc(50%-245.00px)] top-[calc(50%-245.50px)]"
                      style={{
                        background:
                          "url(/assets/portfolio3/images/image_50.png) 100% / cover no-repeat",
                      }}
                    ></div>
                  </div>

                  <div
                    id="_233_7914__Frame_136"
                    className="absolute h-[78.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[120.00px]"
                  >
                    <span
                      id="_233_7915__Heading_2___Project_"
                      className="flex justify-start text-left items-center h-[78.00px] w-[550.00px] relative"
                    >
                      <span
                        className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[38.81px]"
                      >
                        Key milestones and outcomes of the project
                      </span>
                    </span>
                  </div>

                  <div
                    id="_233_7916__Frame_137"
                    className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[243.00px]"
                  >
                    <span
                      id="_233_7917__This_project_improve"
                      className="flex justify-start text-left items-center h-[90.00px] w-[549.00px] relative"
                    >
                      <span
                        className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px]"
                      >
                        This project improved travel planning for pilgrims and
                        tourists visiting Rameswaram through user research,
                        usability analysis, and clear, intuitive design.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_233_7918__Frame_8"
                    className="absolute h-[236.00px] w-[300.00px] left-[740.00px] top-[388.00px]"
                  >
                    <div
                      id="_233_7920__Frame_2"
                      className="absolute h-[236.00px] w-[297.00px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_233_7921__Background"
                        className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+3.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_233_7922__Frame_3"
                          className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                        >
                          <span
                            id="_233_7923__Improved_information"
                            className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                          >
                            <span
                              className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                            >
                              Improved information clarity and user navigation by
                              structuring content around real user needs and
                              journey flows.
                            </span>
                          </span>
                        </div>

                        <div
                          id="_233_7924__Frame_4"
                          className="absolute h-[29.00px] w-[150.00px] left-[23.00px] top-[105.00px]"
                        >
                          <span
                            id="_233_7925__Key_Achievement"
                            className="flex justify-center text-center items-center h-[29.00px] w-[146.00px] absolute left-[calc(50%-75.00px)] top-[0.00px]"
                          >
                            <span
                              className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22.0px] font-normal leading-[28.50px] tracking-[-1.0px] capitalize"
                            >
                              Key Achievement
                            </span>
                          </span>
                        </div>

                        <div
                          id="_233_7926__SVG"
                          className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                        >
                          <img
                            id="_233_7927__Vector"
                            src="/assets/portfolio3/images/vector_29.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.01)]"
                          />
                          <img
                            id="_233_7928__Vector"
                            src="/assets/portfolio3/images/vector_30.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                          />
                          <img
                            id="_233_7929__Vector"
                            src="/assets/portfolio3/images/vector_31.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                          />
                          <img
                            id="_233_7930__Vector"
                            src="/assets/portfolio3/images/vector_32.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_233_7931__Frame_7"
                    className="absolute h-[236.00px] w-[300.00px] left-[1075.00px] top-[388.00px]"
                  >
                    <div
                      id="_233_7933__Background"
                      className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+-0.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_233_7934__Frame_6"
                        className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                      >
                        <span
                          id="_233_7935__The_platform_offers_"
                          className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                        >
                          <span
                            className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                          >
                            The platform offers a smoother, intuitive experience
                            that helps visitors plan trips and access temple
                            services with confidence.
                          </span>
                        </span>
                      </div>

                      <div
                        id="_233_7936__Frame_5"
                        className="absolute h-[29.00px] w-[183.00px] left-[23.00px] top-[105.00px]"
                      >
                        <span
                          id="_233_7937__client_Impact"
                          className="flex justify-start text-left items-center h-[29.00px] w-[192.00px] absolute left-[calc(50%-90.50px)] top-[0.00px]"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22.0px] font-normal leading-[28.50px] capitalize"
                          >
                            client Impact
                          </span>
                        </span>
                      </div>

                      <div
                        id="_233_7938__SVG"
                        className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                      >
                        <img
                          id="_233_7939__Vector"
                          src="/assets/portfolio3/images/vector_33.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.01)]"
                        />
                        <img
                          id="_233_7940__Vector"
                          src="/assets/portfolio3/images/vector_34.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                        />
                        <img
                          id="_233_7941__Vector"
                          src="/assets/portfolio3/images/vector_35.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                        />
                        <img
                          id="_233_7942__Vector"
                          src="/assets/portfolio3/images/vector_36.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    id="_233_7943__Border"
                    className="absolute h-[40px] w-[136px] flex flex-col justify-start items-start flex-nowrap gap-[10px] px-[9px] py-0 rounded-[236.844px] border-[#202833] border-solid border-[0.969561px] left-[730px] top-[50px]"
                  >
                    <div
                      id="_233_7944__Frame_135"
                      className="relative h-[40px] w-[118px] flex flex-row justify-center items-center flex-nowrap gap-[10px] p-[10px]"
                    >
                      <span
                        id="_233_7945__Milestone"
                        className="flex justify-start text-left items-center h-[20px] w-[91px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719525814056396px] uppercase"
                        >
                          Milestone
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_233_7946__Frame_1171277016"
              className="relative h-[410px] w-full flex flex-row justify-center items-center flex-nowrap gap-2.5"
            >
              <span
                id="_233_7947__This_project_was_app"
                className="flex justify-center text-center items-center h-[210.00px] w-[797.00px] relative"
              >
                <span style={{ width: '797px', textAlign: 'center' }}>
                  <span style={{ color: 'rgba(17,17,17,1.00)', fontSize: '30px', fontWeight: 400, lineHeight: '38px', fontStyle: 'normal' }}>
                    This project was approached with a user-first mindset,
                    focusing<br /> on the needs of pilgrims and travelers visiting
                    Rameswaram.
                  </span>
                  <span style={{ color: 'rgba(17,17,17,0.60)', fontSize: '30px', fontWeight: 400, lineHeight: '38px', fontStyle: 'normal' }}>
                    <br />Through research, journey mapping, and usability testing, the
                    platform was designed to balance travel convenience with the
                    spiritual context of temple services, ensuring clarity,
                    accessibility, and trust at every step.
                  </span>
                </span>
              </span>
            </div>

            <div
              id="_233_7948__Frame_1171276961"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[791px] flex flex-col justify-start items-start flex-nowrap gap-2.5 pl-[42px] pr-[43px] py-[50px] rounded-[23px]"
              style={{ width: "100%", transform: "translateY(3px)" }}
            >
              <div
                id="_233_7949__Group_37"
                className="relative h-[691px] w-[1335.00px]"
              >
                <div
                  id="_233_7950__Frame_196"
                  className="relative h-auto w-[1335.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                >
                  <div
                    id="_233_7951__Frame_195"
                    className="relative w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[30px]"
                  >
                    <div
                      id="_233_7952__Border"
                      className="relative border h-[36.00px] w-[83.00px] rounded-[272.07000732421875px] border-[#202833ff] border-solid"
                    >
                      <span
                        id="_233_7953__FAQ"
                        className="flex justify-start text-left items-center h-[14.00px] w-[35.00px] absolute left-[calc(50%-17.50px)] top-[calc(50%-7.00px)]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[22.54px] tracking-[2.38100004196167px] uppercase"
                        >
                          FAQ
                        </span>
                      </span>
                    </div>

                    <div
                      id="_233_7954__Frame_194"
                      className="relative h-[91.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[409px]"
                    >
                      <div
                        id="_233_7955__Frame_193"
                        className="relative h-[71.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                      >
                        <span
                          id="_233_7956__Heading_2___Explore_"
                          className="flex justify-start text-left items-center h-[90.00px] w-[770.00px] relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[42.0px] font-normal leading-[45.00px]"
                          >
                            My Rameswaram Trip – Travel &amp; Temple Service
                            Platform
                          </span>
                        </span>
                      </div>

                      <div
                        id="_233_7957__Link"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[49.00px] flex flex-row justify-start items-center flex-nowrap gap-2 px-[23px] py-[3px] rounded-[101.68245697021484px] cursor-pointer"
                        onClick={() => navigate("/faq")}
                      >
                        <span
                          id="_233_7958__View_All"
                          className="flex justify-center text-center items-center h-[17.04px] w-[54.74px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.351792335510254px] font-medium leading-[21.47px] tracking-[-0.07175896316766739px]"
                          >
                            View All
                          </span>
                        </span>
                        <div
                          id="_233_7959__67a22e78f02af13d518a"
                          className="relative overflow-hidden h-[24.40px] w-[24.40px]"
                        >
                          <div
                            id="_233_7960__67a22e78f02af13d518a"
                            className="absolute overflow-hidden h-[24.40px] w-[24.40px] left-[-0.00px] top-[-0.00px]"
                          >
                            <div
                              id="_233_7961__67a22e78f02af13d518a"
                              className="absolute overflow-hidden h-[24.40px] w-[24.40px] left-[calc(50%-12.20px)] top-[calc(50%-12.20px)]"
                            >
                              <img
                                id="_233_7962__Vector"
                                src="/assets/portfolio3/images/vector_37.svg"
                                alt="Vector"
                                className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="_233_7963__Group_36" className="relative h-auto w-[1335px]">
                    <div
                      id="_233_7964__Paragraph_Background"
                      className="absolute bg-white h-[57.00px] w-[1305.00px] flex flex-row justify-start items-center flex-nowrap gap-[446px] px-[15px] py-1.5 rounded-[20px] left-[0.00px] top-[424.00px]"
                      style={{ transform: "translateY(-61px)" }}
                    >
                      <div
                        id="_233_7965__Frame_189"
                        className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                      >
                        <span
                          id="_233_7966__User_Problems_Identi"
                          className="flex justify-start text-left items-center h-[37.00px] w-[278.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize"
                          >
                            User Problems Identified
                          </span>
                        </span>
                      </div>

                      <div
                        id="_233_7967__Frame_188"
                        className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                      >
                        <span
                          id="_233_7968__What_key_user_proble"
                          className="flex justify-start text-left items-center h-[30.00px] w-[517.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                          >
                            What key user problems did the research uncover?
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_233_7969__Paragraph_Background"
                      className="absolute bg-white h-[57.00px] w-[1305.00px] flex flex-row justify-start items-center flex-nowrap gap-[461px] px-[15px] py-1.5 rounded-[20px] left-[0.00px] top-[317.00px]"
                      style={{ transform: "translateY(-61px)" }}
                    >
                      <div
                        id="_233_7970__Frame_189"
                        className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                      >
                        <span
                          id="_233_7971__UX_Research_Approach"
                          className="flex justify-start text-left items-center h-[37.00px] w-[266.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize"
                          >
                            UX Research Approach
                          </span>
                        </span>
                      </div>

                      <div
                        id="_233_7972__Frame_188"
                        className="relative h-[30.00px] w-[539.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                      >
                        <span
                          id="_233_7973__What_UX_research_met"
                          className="flex justify-start text-left items-center h-[30.00px] w-[532.00px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                          >
                            What UX research methods were used in this
                            project?
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_233_7974__Frame_1171277007"
                      className="absolute h-[69.00px] w-[1335.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_233_7975__Paragraph_Background"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[69.00px] w-[1308.00px] flex flex-row justify-start items-center flex-nowrap gap-[628px] px-[15px] py-1.5 rounded-[20px]"
                      >
                        <div
                          id="_233_7976__Frame_189"
                          className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_233_7977__Overview"
                            className="flex justify-start text-left items-center h-[37.00px] w-[108.00px] relative"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize"
                            >
                              Overview
                            </span>
                          </span>
                        </div>

                        <div
                          id="_233_7978__Frame_188"
                          className="relative h-[30.00px] w-[437.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_233_7979__Frame_1171277006"
                            className="relative h-[30.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5"
                          >
                            <span
                              id="_233_7980__What_is_the_My_Rames"
                              className="flex justify-start text-left items-center h-[30.00px] w-[446.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                              >
                                What is the My Rameswaram Trip UX/UI project
                                about?
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_233_7981__Background"
                        className="absolute bg-white flex flex-row items-center flex-nowrap rounded-[20px]"
                        style={{ width: 1315, height: 128, left: 'calc(50% - 1315px / 2)', top: 89, padding: 22, gap: 24, isolation: 'isolate' }}
                      >
                        <span
                          id="_233_7982__This_project_focuses"
                          className="flex justify-start text-left items-center h-[84.00px] w-[1270.00px] absolute left-[22.00px] top-[22.00px]"
                        >
                          <span
                            className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.00px] capitalize"
                          >
                            This project focuses on designing a user-centered
                            digital platform that combines pilgrimage services
                            and travel planning for Rameswaram. The goal is to
                            create a seamless experience for devotees and
                            travelers by simplifying temple services, travel
                            bookings, and local guidance through an intuitive
                            and respectful interface.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_233_7983__Section"
              className="relative overflow-hidden h-[586.00px] w-full rounded-[22.518083572387695px]"
              style={{ transform: "translateY(3px)" }}
            >
              <span
                id="_233_7984__Heading_1___About_ou"
                className="flex justify-start text-left items-center h-[54.00px] w-[310.00px] absolute left-[42.00px] top-[50.00px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[51.65px]"
                >
                  Our Products
                </span>
              </span>
              <span
                id="_233_7985__At_Arunijone__I_deli"
                className="flex justify-start text-left items-center h-[64.00px] w-[591.00px] absolute left-[791.00px] top-[50.00px]"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                >
                  At Arunijone, I deliver high-impact services and projects
                  focused on UX/UI design, digital marketing, and equity
                  research. Each engagement is driven by strategic thinking,
                  attention to detail, and a commitment to measurable results.
                </span>
              </span>
              <div
                id="_233_7986__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] left-[-124.94px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] top-[164.92px]"
              >
                <div
                  id="_233_7987__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_233_7988__image_26"
                    className="absolute h-[350.00px] w-[280.00px]"
                    style={{
                      background:
                        "url(/assets/portfolio2/images/image_26.png) 100% / cover no-repeat",
                      left: "calc(50% - 105px)",
                      top: "calc(50% - 175px)",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_233_7989__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[241.59px] top-[164.92px]"
              >
                <div
                  id="_233_7990__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_233_7991__image_10"
                    className="absolute h-[138px] w-[196px]"
                    style={{
                      background:
                        "url(/assets/portfolio2/images/image_10.png) center / contain no-repeat",
                      left: "calc(50% - 98px)",
                      top: "calc(50% - 69px)",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_233_7992__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[608.12px] top-[164.92px]"
              >
                <div
                  id="_233_7993__67b5af0cadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <img
                    id="_233_7994__Group_11"
                    src="/assets/portfolio2/images/group_11.svg"
                    alt="Group_11"
                    className="absolute h-[161px] w-[161.69px]"
                    style={{
                      left: "calc(50% - 80.85px)",
                      top: "calc(50% - 80.5px)",
                    }}
                  />
                </div>
              </div>

              <div
                id="_233_8000__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[974.65px] top-[164.92px]"
              >
                <div
                  id="_233_8001__67b5af0a9616f526f030"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_233_8002__image_47"
                    className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-183.92px)] top-[calc(50%-41.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio2/images/image_47.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_233_8003__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[1341.19px] top-[164.92px]"
              >
                <div
                  id="_233_8004__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_233_8005__image_63"
                    className="absolute h-[74.00px] w-[264.00px] left-[calc(50%-131.95px)] top-[calc(50%-37.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio2/images/image_63.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
      </DesktopPageWrapper>
      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner
            iconSrc="/assets/p3/images/group.svg"
            avatarSrc="/assets/p3/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">

            {/* HERO */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[16px] px-[15px] py-[25px]">
              <h1 className="text-[32px] leading-[40px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Full-Stack Development Projects</h1>
              <PortfolioMetadataMobile assetBasePath="/assets/p3/images" siteViewColor="rgba(27,102,254,1.00)" />
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200 }}>
                <img src="/assets/p3/images/gemini_logo_removed_1.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* RELATED WORKS — Overview / Website / Mobile App */}
            <div className="bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px] flex flex-col items-center gap-[25px] px-[20px] pt-[35px]">
                <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] border border-[#202833] rounded-[228.83px]">
                  <span className="whitespace-nowrap text-[12px] font-[500] leading-[14px] tracking-[1.716px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Related works</span>
                </div>
                <span className="text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Related Work Across My Core Services</span>
                <div className="flex flex-col items-center gap-[15px] w-full">
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio1')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m6 16h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4m-3 0v20M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[24px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Overview</span>
                    </div>
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio2')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Website</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio3')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2"/><circle cx="12" cy="18" r="1" fill="white"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Mobile App</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* PARTNERS APP */}
            <div className="bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px] flex flex-col items-center gap-[25px] px-[20px] pt-[35px]">
                <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] border border-[#202833] rounded-[228.83px]">
                  <span className="whitespace-nowrap text-[12px] font-[500] leading-[14px] tracking-[1.716px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Partners app</span>
                </div>
                <span className="text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Related Work Across My Core Services</span>
                <div className="flex flex-col items-center gap-[15px] w-full">
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px]">
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="white"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[24px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Pandit Partner</span>
                    </div>
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px]">
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Travel Partner</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Stay Partner</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* CONTENT FRAMES — phone mockups */}
            <div className="flex flex-col gap-[20px]">
              {[
                { screen: <div className="absolute overflow-hidden bg-orange-600 h-[234px] w-[107.94px] rounded-[10.99px] left-[5.95px] top-[5.22px]"><div className="absolute h-[110px] w-[82px] left-[calc(50%-26px)] top-[calc(50%-55px)]" style={{ background: "url(/assets/portfolio3/images/image_44.png) 100% / cover no-repeat" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18_1.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18_2.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18_3.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18_4.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
                { screen: <div className="absolute overflow-hidden bg-white h-[230.19px] w-[106.18px] rounded-[8.11px] left-[4.88px] top-[5.17px]"><img src="/assets/p3/images/group_18_5.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.10)", top: "calc(100% * 0.30)" }} /></div> },
              ].map((frame, i) => (
                <div key={i} className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                  <p className="text-[34px] leading-[38px] text-[#111111] m-0 text-center" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Plan your Rameswaram trip with trust, clarity, and ease</p>
                  <div className="relative overflow-hidden bg-white w-full rounded-[15.26px]" style={{ height: 248.05 }}>
                    <div className="absolute overflow-hidden w-full" style={{ height: 248.05, left: 0, top: 0 }}>
                      <div className="absolute" style={{ height: 242.67, width: 119, left: "calc(50% - 59.26px)", top: "calc(50% - 121.06px)" }}>
                        {frame.screen}
                        <div className="absolute" style={{ height: 242.67, width: 119, left: 0, top: 0, background: "url(/assets/p3/images/space_black.png) 100% / cover no-repeat" }} />
                        <div className="absolute bg-white" style={{ height: 1.37, width: 38.48, left: "calc(50% - 19.39px)", bottom: 7.98, borderRadius: 27.48 }} />
                        <div className="absolute" style={{ height: 4.95, width: 86.74, left: 16.17, top: 11.54 }}>
                          <span className="absolute" style={{ top: "calc(50% - 2.47px)", left: 0.05, fontFamily: "SF Pro Display", fontSize: 4.12, fontWeight: 600, color: "white", whiteSpace: "nowrap" }}>9:41</span>
                          <img src="/assets/p3/images/battery.svg" alt="" className="absolute" style={{ left: "calc(100% * 0.91)", top: "calc(100% * 0.12)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MILESTONE + image_50 */}
            <div className="bg-[rgba(246,247,249,1.00)] w-full rounded-[22px] flex flex-col gap-[35px] px-[6px] pt-[35px] pb-[35px]">
              <div className="w-full rounded-[13.96px] overflow-hidden bg-white flex items-center justify-center" style={{ height: 220 }}>
                <img src="/assets/portfolio3/images/image_50.png" alt="Milestone" style={{ maxHeight: "85%", maxWidth: "85%", objectFit: "contain" }} />
              </div>
              <div className="w-full flex flex-col items-center gap-[25px]">
                <div className="border border-[#202833] rounded-[228.83px] px-4 py-[7px]">
                  <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[11.4px] font-medium leading-[13.73px] tracking-[1.716px] uppercase">Milestone</span>
                </div>
                <div className="w-full flex flex-col gap-[10px]">
                  <span className="text-center text-[34.3px] font-normal leading-[38.13px] text-[rgba(17,17,17,1.00)]">Key milestones and outcomes of the project</span>
                  <span className="text-center text-[15.3px] font-light leading-[22.88px] text-[rgba(17,17,17,0.80)]">This project improved travel planning for pilgrims and tourists visiting Rameswaram through user research, usability analysis, and clear, intuitive design.</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[30px]">
                <div className="bg-white w-full flex flex-col items-center gap-[18px] p-[22px] rounded-[15.26px]">
                  <div className="relative h-[38.13px] w-[38.13px]">
                    <img src="/assets/p3/images/vector_10.svg" alt="" className="absolute" />
                    <img src="/assets/p3/images/vector_11.svg" alt="" className="absolute left-[calc(100%*0.29)] top-[calc(100%*0.29)]" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-center text-[19.1px] font-normal leading-[26.70px] text-[rgba(17,17,17,1.00)]">Key Achievement</span>
                    <span className="text-center text-[13.3px] font-normal leading-[22.83px] text-[rgba(17,17,17,0.60)]">Improved information clarity and user navigation by structuring content around real user needs and journey flows.</span>
                  </div>
                </div>
                <div className="bg-white w-full flex flex-col items-center gap-[18px] p-[22px] rounded-[15.26px]">
                  <div className="relative h-[38.13px] w-[38.13px]">
                    <img src="/assets/p3/images/vector_12.svg" alt="" className="absolute" />
                    <img src="/assets/p3/images/vector_13.svg" alt="" className="absolute left-[calc(100%*0.39)] top-[calc(100%*0.29)]" />
                    <img src="/assets/p3/images/vector_14.svg" alt="" className="absolute left-[calc(100%*0.31)] top-[calc(100%*0.54)]" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-center text-[19.1px] font-normal leading-[26.70px] text-[rgba(17,17,17,1.00)]">Client Impact</span>
                    <span className="text-center text-[13.3px] font-normal leading-[22.83px] text-[rgba(17,17,17,0.60)]">The platform offers a smoother, intuitive experience that helps visitors plan trips and access temple services with confidence.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* THIS PROJECT WAS APPROACHED */}
            <div className="relative h-[463.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-2.5 py-0">
              <span className="flex justify-center text-center items-center h-[498.00px] w-full max-w-[370px] relative">
                <span>
                  <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]" style={{ fontFamily: "SF Pro Display" }}>This project was approached with a user-first mindset, focusing on the needs of pilgrims and travelers visiting Rameswaram.&nbsp;</span>
                  <span className="bg-[rgba(112,112,112,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]" style={{ fontFamily: "SF Pro Display" }}>Through research, journey mapping, and usability testing, the platform was designed to balance travel convenience with the spiritual context of temple services, ensuring clarity, accessibility, and trust at every step.</span>
                </span>
              </span>
            </div>

            {/* FAQ */}
            <div className="relative bg-[rgba(246,247,249,1.00)] h-[1230.00px] w-full rounded-[23px]">
              <div className="absolute h-[1159.00px] w-[calc(100%-12px)] flex flex-col justify-start items-center flex-nowrap gap-[25px] left-[6px] top-[35.47px]">
                <div className="relative border h-[30.00px] w-[62.00px] rounded-[228.83px] border-[#202833] border-solid">
                  <span className="flex justify-center text-center items-center h-[14.00px] w-[29.00px] absolute left-[calc(50%-14.00px)] top-[calc(50%-7.47px)]">
                    <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[13.73px] tracking-[1.716px] uppercase">FAQ</span>
                  </span>
                </div>
                <div className="relative h-[683.00px] w-full">
                  <div className="absolute h-[253.00px] w-[300.00px] left-[32.00px] top-[0.47px]">
                    <span className="flex justify-center text-center items-center h-[176.00px] w-[300.00px] absolute left-0 top-[0.47px]">
                      <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[40.0px] font-normal leading-[46.00px]">My Rameswaram Trip – Travel &amp; Temple Service Platform</span>
                    </span>
                    <div
                      onClick={() => navigate("/faq")}
                      className="absolute bg-[rgba(1,97,254,1.00)] h-[46.00px] w-[124.00px] left-[calc(50%-62.00px)] rounded-[95.35px] top-[206.53px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-[7px]"
                    >
                      <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.067px]">View All</span>
                      <div className="flex items-center justify-center">
                        <img src="/assets/p1/images/vector_15.svg" alt="" style={{ width: 13, height: 10, filter: "brightness(0) invert(1)" }} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white h-[209.00px] w-[360.00px] left-[50%] -translate-x-[50%] flex flex-row justify-start items-center flex-nowrap gap-6 p-2.5 rounded-[15px] top-[451.53px]">
                    <span className="flex justify-center text-center items-center h-[211.00px] w-full relative">
                      <span className="bg-[rgba(109,109,110,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[28.00px] capitalize">This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.</span>
                    </span>
                  </div>
                  <div className="absolute bg-[rgba(1,97,254,1.00)] h-[149.00px] w-full rounded-[15px] left-0 top-[287.53px]">
                    <div className="absolute h-[37.00px] w-[111.00px] left-[calc(50%-65.50px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.47px]">
                      <span className="flex justify-start text-left items-center h-[37.00px] w-[111.00px] relative">
                        <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize">Overview</span>
                      </span>
                    </div>
                    <div className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-161.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[65.47px]">
                      <span className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative">
                        <span className="bg-white bg-clip-text text-transparent not-italic text-[18.1px] font-light leading-[27.21px]">What is the My Rameswaram Trip UX/UI project about?</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[185.00px] w-full">
                  <div className="absolute bg-white h-[185.00px] w-full rounded-[15px] left-0 top-0">
                    <div className="absolute h-[73.00px] w-[187.00px] left-[calc(50%-103.00px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.47px]">
                      <span className="flex justify-center text-center items-center h-[73.00px] w-[187.00px] relative">
                        <span className="bg-black bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize">UX Research Approach</span>
                      </span>
                    </div>
                    <div className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-161.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[101.47px]">
                      <span className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative">
                        <span className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.1px] font-light leading-[27.21px]">What UX research methods were used in this project?</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[184.00px] w-full">
                  <div className="absolute bg-white h-[184.00px] w-full rounded-[15px] left-0 top-0">
                    <div className="absolute h-[73.00px] w-[247.00px] left-[calc(50%-133.00px)] flex flex-row justify-center items-start flex-nowrap gap-2.5 p-2.5 top-[8.00px]">
                      <span className="flex justify-center text-center items-center h-[73.00px] w-[247.00px] relative">
                        <span className="bg-black bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[36.27px] capitalize">User Problems Identified</span>
                      </span>
                    </div>
                    <div className="absolute h-[55.00px] w-[322.00px] left-[calc(50%-161.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[101.00px]">
                      <span className="flex justify-center text-center items-center h-[55.00px] w-[322.00px] relative">
                        <span className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.1px] font-light leading-[27.21px]">What key user problems did the research uncover?</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OUR PROJECTS */}
            <div className="relative overflow-hidden h-[661.00px] w-full rounded-[22.88px]">
              <span className="flex justify-center text-center items-center h-[55.00px] w-[246.00px] absolute left-[calc(50%-124.00px)] top-[35.00px]">
                <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[45.0px] font-normal leading-[52.49px]">Our Projects</span>
              </span>
              <span className="flex justify-center text-center items-center h-[109.00px] w-[335.00px] absolute left-[calc(50%-168.00px)] top-[120.00px]">
                <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">At Arunijone, I deliver high-impact services and projects focused on UX/UI design, digital marketing, and equity research. Each engagement is driven by strategic thinking, attention to detail, and a commitment to measurable results.</span>
              </span>
              <div className="absolute overflow-hidden h-[289.64px] w-[274.39px] left-[-56.36px] rounded-[15.26px] border-[#8e8383]/20 border-solid border-[0.1px] top-[346.00px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-full w-full">
                  <div className="absolute h-[181.00px] w-[146.00px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]" style={{ background: "url(/assets/p3/images/image_26.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
              <div className="absolute h-[46.34px] w-[235.98px] left-[calc(50%-118.00px)] top-[264.00px]">
                <div
                  onClick={() => navigate('/contact')}
                  className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[126.33px] left-[calc(50%-117.99px)] top-[calc(50%-23.17px)] rounded-[95.35px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-[7px]"
                >
                  <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.067px]">Contact</span>
                  <div className="flex items-center justify-center">
                    <img src="/assets/p1/images/vector_16.svg" alt="" style={{ width: 13, height: 10, filter: "brightness(0) invert(1)" }} />
                  </div>
                </div>
                <div
                  onClick={() => navigate('/portfolio3')}
                  className="absolute border h-[42.63px] w-[100.03px] top-[calc(50%-22.31px)] rounded-[95.35px] border-[#0161fe] border-solid left-[calc(50%+15.96px)] flex items-center justify-center cursor-pointer"
                >
                  <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.17px] tracking-[-0.067px]">Portfolio</span>
                </div>
              </div>
              <div className="absolute overflow-hidden h-[289.64px] w-[274.39px] rounded-[15.26px] border-[#8e8383]/20 border-solid border-[0.1px] left-[233.48px] top-[346.00px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-full w-full">
                  <div className="absolute h-[129.00px] w-[184.00px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]" style={{ background: "url(/assets/p3/images/image_10.png) 100% / cover no-repeat" }}></div>
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
export default Portfolio3;


