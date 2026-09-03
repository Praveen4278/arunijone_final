import React from "react";
import { useLocation, Link } from "wouter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import { BusinessEcosystemAndCapabilitiesSection } from "./about/sections/BusinessEcosystemAndCapabilitiesSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import MobilePageWrapper from "../components/MobilePageWrapper";

const DESIGN_HEIGHT = 9900;

const Portfolio2 = () => {
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
                  fontSize: 15.7778, lineHeight: '22px', letterSpacing: -0.0788889,
                  color: '#FFFFFF', width: 63, height: 23,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>Contact</span>
              </button>
            </div>
          </header>

        <div
          id="_232_6157__Frame_1171277023"
          className="absolute h-[9846px] w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[100px] left-[10.00px] top-[107.00px]"
        >
          <div
            id="_232_6158__Frame_1171277025"
            className="relative h-[9846px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-[50px]"
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
                  My Rameswaram Trip – Travel & Temple Service Platform
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

            <div
              id="_232_6208__Frame_1171277026"
              className="relative h-[5732.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-[100px]"
            >
              <BusinessEcosystemAndCapabilitiesSection expertiseOnly />
              <div
                id="_232_6209__Frame_1171277019"
                className="relative h-[366.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-10"
              >
                <div
                  id="_232_6210__Frame_1171277020"
                  className="relative h-[366.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[15px]"
                >
                  <div
                    id="_232_6211__Section"
                    className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[366.00px] w-full rounded-[23.686382293701172px]"
                  >
                    <div
                      id="_232_6212__Frame_1171277001"
                      className="absolute h-[266.00px] w-[1015.00px] left-[203.00px] top-[50.00px]"
                    >
                      <span
                        id="_232_6213__Heading_2___Comprehe"
                        className="flex justify-center text-center items-center h-[70.00px] w-[354.00px] absolute left-[calc(50%-177.50px)] top-[68.00px]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[39.47px]"
                        >
                          Related Work Across<br />My Core Services
                        </span>
                      </span>
                      <div
                        id="_232_6214__Frame_114"
                        className="absolute w-[175.00px] left-[calc(50%-88.00px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 top-[0.00px]"
                      >
                        <div
                          id="_232_6215__Border"
                          className="relative flex flex-row justify-center items-center flex-nowrap gap-2.5 px-5 py-[9px] rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612192153931px]"
                        >
                          <span
                            id="_232_6216__Related_works"
                            className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719523429870605px] uppercase"
                          >
                            Related works
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6217__Frame_1171277051"
                        className="absolute h-[78.00px] w-[655.00px] left-[calc(50%-327.50px)] top-[188.00px]"
                      >
                        <div
                          id="_232_6218__Frame_117"
                          className="absolute h-[77.72px] w-[658.00px] left-[calc(50%-329.50px)] flex flex-col justify-start items-start flex-nowrap gap-[30px] top-[0.00px]"
                        >
                          <div
                            id="_232_6219__Frame_115"
                            className="relative h-[77.72px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-5"
                          >
                            <div
                              id="_232_6220__Products_page"
                              className="relative bg-white flex flex-row justify-start items-center flex-nowrap gap-6 px-6 py-[17px] rounded-[23.686382293701172px] cursor-pointer"
                              onClick={() => navigate("/portfolio1")}
                            >
                              <div
                                id="I232_6220_13_14250__SVG"
                                className="relative bg-[rgba(1,97,254,1.00)] h-[43.72px] w-[43.72px] rounded-[38px] flex items-center justify-center flex-shrink-0"
                              >
                                <img
                                  id="I232_6220_13_14251__Vector"
                                  src="/assets/portfolio2/images/vector_2.png"
                                  className="h-[24px] w-[16.69px]"
                                />
                              </div>

                              <span
                                id="I232_6220_13_14252__Overview"
                                className="flex justify-start text-left items-center h-[30.00px] w-[79.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px] capitalize"
                                >
                                  Overview
                                </span>
                              </span>
                            </div>

                            <div
                              id="_232_6221__Products_page"
                              className="relative bg-[rgba(1,97,254,1.00)] flex flex-row justify-start items-center flex-nowrap gap-6 px-6 py-[17px] rounded-[23.686382293701172px]"
                            >
                              <div
                                id="I232_6221_13_13983__SVG"
                                className="relative bg-[rgba(77,144,254,1.00)] h-[43.72px] w-[43.72px] rounded-[38px] flex items-center justify-center flex-shrink-0"
                              >
                                <img
                                  id="I232_6221_13_13986__Vector"
                                  src="/assets/portfolio2/images/image1.png"
                                  alt="Vector"
                                  className="h-[43.72px] w-[43.72px]"
                                />
                              </div>

                              <span
                                id="I232_6221_13_13986__UX_UI"
                                className="flex justify-start text-left items-center h-[30.00px] w-[82.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px] capitalize"
                                >
                                  UI Design
                                </span>
                              </span>
                            </div>

                            <div
                              id="_232_6222__Products_page"
                              className="relative bg-white flex flex-row justify-start items-center flex-nowrap gap-6 px-6 py-[17px] rounded-[23.686382293701172px] cursor-pointer"
                              onClick={() => navigate("/portfolio4")}
                            >
                              <div
                                id="I232_6222_13_14264__SVG"
                                className="relative bg-[rgba(1,97,254,1.00)] h-[43.72px] w-[43.72px] rounded-[38px] flex items-center justify-center flex-shrink-0"
                              >
                                <img
                                  id="I232_6222_13_14266__Vector"
                                  src="/assets/portfolio2/images/image.png"
                                  alt="Vector"
                                />
                              </div>

                              <span
                                id="I232_6222_13_14267__SEO"
                                className="flex justify-start text-left items-center h-[30.00px] w-[110.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px] capitalize"
                                >
                                  UX Research
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div
                id="_232_6234__Frame_1171277022"
                className="relative h-[4800.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
              >
                <div
                  id="_232_6235__Frame_198"
                  className="relative h-[4800.00px] w-[1337.00px] flex flex-col justify-start items-start flex-nowrap gap-[60px]"
                >
                  <div
                    id="_232_6236__Frame_14"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6237__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6238__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6239__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6240__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6241__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6242__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.28px] w-[399.32px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6242_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6243__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              ></div>
                            </div>

                            <div
                              id="_232_6244__Frame_111"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-44.00px)] left-[calc(50%+141.50px)]"
                            >
                              <div
                                id="_232_6246__Section"
                                className="absolute overflow-hidden h-[227.00px] w-[110.00px] top-[-2.00px] rounded-t-[18.0px] left-[4.50px]"
                              >
                                <div
                                  id="_232_6247__Overlay"
                                  className="absolute bg-[rgba(0,0,0,0.40)] h-[calc(100%-10.00px)] w-[calc(100%-3.44px)] left-[1.72px] top-[7.00px]"
                                ></div>

                                <div
                                  id="_232_6248__Hero_mobile"
                                  className="absolute overflow-hidden h-[217.60px] w-[108.80px] left-[0.00px] top-[6.55px]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/hero_mobile.png) 100% / cover no-repeat",
                                  }}
                                >
                                  <div
                                    id="_232_6249__Header"
                                    className="absolute h-[18.71px] w-[114.00px] left-[calc(50%-55.40px)] top-[14.45px]"
                                  >
                                    <div
                                      id="_232_6250__Link"
                                      className="absolute h-[9.35px] w-[59.52px] left-[4.67px] top-[4.67px]"
                                    >
                                      <div
                                        id="_232_6251__MyRameswaramTrip_Log"
                                        className="absolute overflow-hidden h-[9.35px] w-[9.35px] left-[calc(50%-29.76px)] top-[calc(50%-4.68px)]"
                                      >
                                        <div
                                          id="_232_6252__logo-white-bg_svg_fi"
                                          className="absolute overflow-hidden h-[9.35px] w-[9.35px] left-[-0.00px] top-[-0.00px]"
                                        >
                                          <div
                                            id="_232_6253__logo-white-bg_svg"
                                            className="absolute overflow-hidden h-[9.35px] w-[9.35px] left-[calc(50%-4.68px)] top-[calc(50%-4.68px)]"
                                          >
                                            <img
                                              id="_232_6254__Vector"
                                              src="/assets/portfolio2/images/vector_5.svg"
                                              alt="Vector"
                                              className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.00)]"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <span
                                        id="_232_6255__MyRameswaramTrip"
                                        className="flex justify-start text-left items-center h-[6.43px] w-[46.72px] absolute left-[12.87px] top-[1.46px]"
                                      >
                                        <span>
                                          <span
                                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[5.086153030395508px] font-bold leading-[8.18px] tracking-[-0.13153845071792603px]"
                                          >
                                            MyRameswaram
                                          </span>
                                          <span
                                            className="whitespace-nowrap bg-yellow-200 bg-clip-text text-transparent not-italic text-[5.086153030395508px] font-bold leading-[8.18px] tracking-[-0.13153845071792603px]"
                                          >
                                            Trip
                                          </span>
                                        </span>
                                      </span>
                                    </div>

                                    <div
                                      id="_232_6256__Button_-_Open_mobile"
                                      className="absolute h-[11.69px] w-[10.52px] rounded-[2.338461399078369px] right-[4.67px] top-[3.51px]"
                                    >
                                      <div
                                        id="_232_6257__SVG"
                                        className="absolute h-[7.02px] w-[7.02px] left-[2.34px] top-[2.34px]"
                                      >
                                        <img
                                          id="_232_6258__Vector"
                                          src="/assets/portfolio2/images/vector_6.svg"
                                          alt="Vector"
                                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.50)]"
                                        />
                                        <img
                                          id="_232_6259__Vector"
                                          src="/assets/portfolio2/images/vector_7.svg"
                                          alt="Vector"
                                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.75)]"
                                        />
                                        <img
                                          id="_232_6260__Vector"
                                          src="/assets/portfolio2/images/vector_8.svg"
                                          alt="Vector"
                                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="_232_6261__Gradient"
                                  className="absolute bg-[linear-gradient(0.0deg,rgba(0,0,0,0.60)_0.0%,rgba(0,0,0,0.20)_50.0%,rgba(0,0,0,0.00)_100.0%)] h-[calc(100%-8.00px)] w-[calc(100%-2.46px)] left-[1.23px] top-[5.00px]"
                                ></div>

                                <div
                                  id="_232_6262__Overlay_Blur"
                                  className="absolute bg-[rgba(249,115,22,0.20)] h-[22.32px] w-[22.32px] rounded-[2789.408447265625px] left-[11.16px] top-[28.87px]"
                                  style={{
                                    filter: "blur(6.695250034332275px)",
                                  }}
                                ></div>

                                <div
                                  id="_232_6263__Overlay_Blur"
                                  className="absolute bg-[rgba(59,130,246,0.20)] h-[17.85px] w-[17.85px] rounded-[2789.408447265625px] right-[17.86px] bottom-[36.15px]"
                                  style={{
                                    filter: "blur(6.695250034332275px)",
                                  }}
                                ></div>

                                <div
                                  id="_232_6264__Overlay_Border_Overl"
                                  className="absolute bg-[rgba(255,255,255,0.10)] backdrop-blur-[1.1158748865127563px] h-[8.93px] w-[66.56px] left-[calc(50%-33.56px)] rounded-[2789.408447265625px] border-[#ffffff33] border-solid border-[0.2789687216281891px] top-[42.95px]"
                                >
                                  <div
                                    id="_232_6265__SVG"
                                    className="absolute h-[4.46px] w-[4.46px] top-[calc(50%-2.23px)] left-[4.74px]"
                                  >
                                    <img
                                      id="_232_6266__Vector"
                                      src="/assets/portfolio2/images/vector_9.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.09)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6267__5-Star_Rated_Puja___"
                                    className="flex justify-center text-center items-center h-[4.46px] w-[52.10px] absolute left-[calc(50%-22.12px)] top-[2.51px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.3476250171661377px] font-medium leading-[4.46px]"
                                    >
                                      5-Star Rated Puja &amp; Travel Service
                                    </span>
                                  </span>
                                </div>

                                <span
                                  id="_232_6268__Heading_1___Your_Tru"
                                  className="flex justify-center text-center items-center h-[20.50px] w-[99.90px] absolute left-[calc(50%-49.93px)] top-[59.27px]"
                                >
                                  <span>
                                    <span
                                      className="bg-white bg-clip-text text-transparent not-italic text-[8.173783302307129px] font-bold leading-[10.46px]"
                                    >
                                      Your Trusted Partner for
                                      <br />
                                    </span>
                                    <span
                                      className="bg-[linear-gradient(90.0deg,rgba(251,146,60,1.00)_0.0%,rgba(250,204,21,1.00)_100.0%)] bg-clip-text text-transparent not-italic text-[8.173783302307129px] font-bold leading-[10.46px]"
                                    >
                                      Rameswaram Puja &amp; Tours
                                    </span>
                                  </span>
                                </span>
                                <span
                                  id="_232_6269__Book_authentic_Thila"
                                  className="flex justify-center text-center items-center h-[17.44px] w-[87.59px] absolute left-[calc(50%-43.47px)] top-[87.45px]"
                                >
                                  <span
                                    className="bg-gray-200 bg-clip-text text-transparent not-italic text-[3.905562162399292px] font-normal leading-[6.35px]"
                                  >
                                    Book authentic Thila Homam, Pitru Dosh Puja,
                                    and
                                    <br />
                                    Sightseeing Cabs with verified local
                                    experts. Safe,
                                    <br />
                                    transparent, and hassle-free.
                                  </span>
                                </span>
                                <div
                                  id="_232_6270__Link"
                                  className="absolute overflow-hidden bg-orange-700 shadow-[0.0px_1.1158748865127563px_1.6738125085830688px_-1.1158748865127563px_rgba(0,0,0,0.10),0.0px_2.789687395095825px_4.184531211853027px_-0.8369062542915344px_rgba(0,0,0,0.10)] h-[13.39px] w-[71.42px] left-[calc(50%-35.72px)] rounded-[2789.408447265625px] top-[calc(50%+0.19px)]"
                                >
                                  <div
                                    id="_232_6271__SVG"
                                    className="absolute h-[4.46px] w-[4.46px] left-[calc(50%-22.33px)] top-[calc(50%-2.23px)]"
                                  >
                                    <img
                                      id="_232_6272__Vector"
                                      src="/assets/portfolio2/images/vector_10.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.08)]"
                                    />
                                    <img
                                      id="_232_6273__Vector"
                                      src="/assets/portfolio2/images/vector_11.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.50)]"
                                    />
                                    <img
                                      id="_232_6274__Vector"
                                      src="/assets/portfolio2/images/vector_12.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.75)] top-[calc(100%_*_0.37)]"
                                    />
                                    <img
                                      id="_232_6275__Vector"
                                      src="/assets/portfolio2/images/vector_13.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.25)]"
                                    />
                                    <img
                                      id="_232_6276__Vector"
                                      src="/assets/portfolio2/images/vector_14.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.42)]"
                                    />
                                    <img
                                      id="_232_6277__Vector"
                                      src="/assets/portfolio2/images/vector_15.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.58)]"
                                    />
                                    <img
                                      id="_232_6278__Vector"
                                      src="/assets/portfolio2/images/vector_16.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.75)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6279__Book_Puja_Online"
                                    className="flex justify-center text-center items-center h-[4.88px] w-[31.40px] absolute left-[calc(50%-15.64px)] top-[calc(50%-2.52px)]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.905562162399292px] font-semibold leading-[5.58px]"
                                    >
                                      Book Puja Online
                                    </span>
                                  </span>
                                  <div
                                    id="_232_6280__SVG"
                                    className="absolute h-[4.46px] w-[4.46px] top-[calc(50%-2.23px)] left-[calc(50%+17.89px)]"
                                  >
                                    <img
                                      id="_232_6281__Vector"
                                      src="/assets/portfolio2/images/vector_17.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.21)] top-[calc(100%_*_0.50)]"
                                    />
                                    <img
                                      id="_232_6282__Vector"
                                      src="/assets/portfolio2/images/vector_18.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.21)]"
                                    />
                                  </div>
                                </div>

                                <div
                                  id="_232_6283__Link"
                                  className="absolute bg-[linear-gradient(90.0deg,rgba(251,146,60,1.00)_0.0%,rgba(250,204,21,1.00)_100.0%)] h-[13.39px] w-[71.42px] left-[calc(50%-35.72px)] rounded-[2789.408447265625px] top-[calc(50%+18.04px)]"
                                >
                                  <div
                                    id="_232_6284__SVG"
                                    className="absolute h-[4.46px] w-[4.46px] left-[calc(50%-24.18px)] top-[calc(50%-2.22px)]"
                                  >
                                    <img
                                      id="_232_6285__Vector"
                                      src="/assets/portfolio2/images/vector_19.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.16)]"
                                    />
                                    <img
                                      id="_232_6286__Vector"
                                      src="/assets/portfolio2/images/vector_20.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.37)] top-[calc(100%_*_0.41)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6287__Book_Sightseeing_Cab"
                                    className="flex justify-center text-center items-center h-[4.88px] w-[41.77px] absolute left-[calc(50%-17.48px)] top-[calc(50%-2.52px)]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-gray-900 bg-clip-text text-transparent not-italic text-[3.905562162399292px] font-semibold leading-[5.58px]"
                                    >
                                      Book Sightseeing Cabs
                                    </span>
                                  </span>
                                </div>

                                <div
                                  id="_232_6288__Link"
                                  className="absolute overflow-hidden bg-[rgba(255,255,255,0.00)] shadow-[0.0px_1.1158748865127563px_1.6738125085830688px_-1.1158748865127563px_rgba(0,0,0,0.10),0.0px_2.789687395095825px_4.184531211853027px_-0.8369062542915344px_rgba(0,0,0,0.10)] h-[12.27px] w-[41.34px] left-[calc(50%-20.67px)] rounded-[2789.408447265625px] top-[calc(50%+35.89px)]"
                                >
                                  <div
                                    id="_232_6289__SVG"
                                    className="absolute h-[4.46px] w-[4.46px] left-[calc(50%-16.21px)] top-[calc(50%-2.22px)]"
                                  >
                                    <img
                                      id="_232_6290__Vector"
                                      src="/assets/portfolio2/images/vector_21.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.08)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6291__Talk_to_Expert"
                                    className="flex justify-center text-center items-center h-[4.88px] w-[25.81px] absolute left-[calc(50%-9.50px)] top-[calc(50%-2.51px)]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.905562162399292px] font-semibold leading-[5.58px]"
                                    >
                                      Talk to Expert
                                    </span>
                                  </span>
                                </div>

                                <div
                                  id="_232_6292__Overlay_Border_Overl"
                                  className="absolute bg-[rgba(255,255,255,0.10)] backdrop-blur-[1.1158748865127563px] h-[21.76px] w-[calc(100%-61.09px)] rounded-[3.3476250171661377px] border-[#ffffff33] border-solid border-[0.2789687216281891px] left-[4.46px] top-[167.16px]"
                                >
                                  <div
                                    id="_232_6293__SVG"
                                    className="absolute h-[6.70px] w-[6.70px] left-[calc(50%-3.35px)] top-[calc(50%-6.57px)]"
                                  >
                                    <img
                                      id="_232_6294__Vector"
                                      src="/assets/portfolio2/images/vector_22.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.08)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6295__Verified_Pandits"
                                    className="flex justify-center text-center items-center h-[4.18px] w-[24.23px] absolute left-[calc(50%-11.79px)] top-[13.54px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.3476250171661377px] font-medium leading-[4.18px]"
                                    >
                                      Verified Pandits
                                    </span>
                                  </span>
                                </div>

                                <div
                                  id="_232_6296__Overlay_Border_Overl"
                                  className="absolute bg-[rgba(255,255,255,0.10)] backdrop-blur-[1.1158748865127563px] h-[21.76px] w-[calc(100%-61.09px)] rounded-[3.3476250171661377px] border-[#ffffff33] border-solid border-[0.2789687216281891px] left-[56.06px] top-[167.16px]"
                                >
                                  <div
                                    id="_232_6297__SVG"
                                    className="absolute h-[6.70px] w-[6.70px] left-[calc(50%-3.34px)] top-[calc(50%-6.57px)]"
                                  >
                                    <img
                                      id="_232_6298__Vector"
                                      src="/assets/portfolio2/images/vector_23.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.12)] top-[calc(100%_*_0.08)]"
                                    />
                                    <img
                                      id="_232_6299__Vector"
                                      src="/assets/portfolio2/images/vector_24.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.50)]"
                                    />
                                    <img
                                      id="_232_6300__Vector"
                                      src="/assets/portfolio2/images/vector_25.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.14)] top-[calc(100%_*_0.29)]"
                                    />
                                    <img
                                      id="_232_6301__Vector"
                                      src="/assets/portfolio2/images/vector_26.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.18)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6302__Transparent_Pricing"
                                    className="flex justify-center text-center items-center h-[4.18px] w-[29.58px] absolute left-[calc(50%-14.40px)] top-[13.54px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.3476250171661377px] font-medium leading-[4.18px]"
                                    >
                                      Transparent Pricing
                                    </span>
                                  </span>
                                </div>

                                <div
                                  id="_232_6303__Overlay_Border_Overl"
                                  className="absolute bg-[rgba(255,255,255,0.10)] backdrop-blur-[1.1158748865127563px] h-[21.76px] w-[calc(100%-61.09px)] rounded-[3.3476250171661377px] border-[#ffffff33] border-solid border-[0.2789687216281891px] left-[4.46px] top-[192.83px]"
                                >
                                  <div
                                    id="_232_6304__SVG"
                                    className="absolute h-[6.70px] w-[6.70px] left-[calc(50%-3.35px)] top-[calc(50%-6.56px)]"
                                  >
                                    <img
                                      id="_232_6305__Vector"
                                      src="/assets/portfolio2/images/vector_27.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.63)]"
                                    />
                                    <img
                                      id="_232_6306__Vector"
                                      src="/assets/portfolio2/images/vector_28.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.67)] top-[calc(100%_*_0.13)]"
                                    />
                                    <img
                                      id="_232_6307__Vector"
                                      src="/assets/portfolio2/images/vector_29.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.79)] top-[calc(100%_*_0.63)]"
                                    />
                                    <img
                                      id="_232_6308__Vector"
                                      src="/assets/portfolio2/images/vector_30.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.21)] top-[calc(100%_*_0.12)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6309__No_Middleman"
                                    className="flex justify-center text-center items-center h-[4.18px] w-[22.37px] absolute left-[calc(50%-10.94px)] top-[13.53px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.3476250171661377px] font-medium leading-[4.18px]"
                                    >
                                      No Middleman
                                    </span>
                                  </span>
                                </div>

                                <div
                                  id="_232_6310__Overlay_Border_Overl"
                                  className="absolute bg-[rgba(255,255,255,0.10)] backdrop-blur-[1.1158748865127563px] h-[21.76px] w-[calc(100%-61.09px)] rounded-[3.3476250171661377px] border-[#ffffff33] border-solid border-[0.2789687216281891px] left-[56.06px] top-[192.83px]"
                                >
                                  <div
                                    id="_232_6311__SVG"
                                    className="absolute h-[6.70px] w-[6.70px] left-[calc(50%-3.34px)] top-[calc(50%-6.56px)]"
                                  >
                                    <img
                                      id="_232_6312__Vector"
                                      src="/assets/portfolio2/images/vector_31.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.08)]"
                                    />
                                    <img
                                      id="_232_6313__Vector"
                                      src="/assets/portfolio2/images/vector_32.svg"
                                      alt="Vector"
                                      className="absolute left-[calc(100%_*_0.37)] top-[calc(100%_*_0.29)]"
                                    />
                                  </div>

                                  <span
                                    id="_232_6314__Local_Support"
                                    className="flex justify-center text-center items-center h-[4.18px] w-[21.39px] absolute left-[calc(50%-10.47px)] top-[13.53px]"
                                  >
                                    <span
                                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[3.3476250171661377px] font-medium leading-[4.18px]"
                                    >
                                      Local Support
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6315__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6315_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6316__Home_Indicator"
                                className="absolute bg-white h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6317__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6318__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6319__Battery"
                                  src="/assets/portfolio2/images/battery.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6323__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6327__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_232_6332__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6333__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6334__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6335__Frame_25"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6336__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6337__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6338__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6339__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6340__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6341__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6342__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6343__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6344__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6344_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6345__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              ></div>
                            </div>

                            <div
                              id="_232_6346__Frame_134"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-43.00px)] left-[calc(50%+142.50px)]"
                            >
                              <div
                                id="_232_6348___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                              >
                                <div
                                  id="_232_6349__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6350__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6351__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6351_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6352__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6353__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6354__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6355__Battery"
                                  src="/assets/portfolio2/images/battery_1.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6359__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6363__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6368__Frame_44"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6369__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6370__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6371__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6372__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6373__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6374__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.28px] w-[399.32px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6374_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6375__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6376__screencapture-myrame"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[344.53px] w-[400.76px] top-[calc(50%-200.24px)] rounded-[3.676830530166626px] left-[calc(50%+172.39px)]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6377__Frame_111"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-44.00px)] left-[calc(50%+141.50px)]"
                            >
                              <div
                                id="_232_6379___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[234.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[4.00px]"
                              >
                                <div
                                  id="_232_6380__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-7.43px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6381__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6382__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6382_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6383__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6384__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6385__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6386__Battery"
                                  src="/assets/portfolio2/images/battery_2.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6390__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6394__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_232_6399__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6400__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6401__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6402__Frame_37"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6403__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6404__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6405__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6406__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6407__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6408__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6409__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6410__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6411__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6411_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6412__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6413__MacBook_Air__15_inch"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[367.00px] w-[489.00px] rounded-[7px] left-[366.86px] top-[0.09px]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/2.png) 100% / cover no-repeat",
                                  }}
                                ></div>

                                <div
                                  id="_232_6414__Rectangle_1443"
                                  className="absolute bg-white rotate-[90.00deg] origin-[0_0] h-[7.00px] w-[32.00px] left-[366.86px] top-[268.09px]"
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6415__Frame_134"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-43.00px)] left-[calc(50%+142.50px)]"
                            >
                              <div
                                id="_232_6417___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                              >
                                <div
                                  id="_232_6418__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6419__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6420__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6420_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6421__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6422__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6423__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6424__Battery"
                                  src="/assets/portfolio2/images/battery_3.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6428__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6432__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6437__Frame_45"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6438__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6439__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6440__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6441__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6442__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6443__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.28px] w-[399.32px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6443_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6444__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6445__MacBook_Air__15_inch"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[603.00px] w-[489.00px] top-[calc(50%-244.36px)] rounded-[7px] left-[calc(50%+301.62px)]"
                                  style={{
                                    backgroundImage: "url(/assets/portfolio2/images/3.png)",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                ></div>

                                <div
                                  id="_232_6446__Rectangle_1444"
                                  className="absolute bg-[rgba(121,121,121,1.00)] rotate-[90.00deg] origin-[0_0] h-[17.00px] w-[38.00px] left-[352.86px] top-[266.09px]"
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6447__Frame_111"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-44.00px)] left-[calc(50%+141.50px)]"
                            >
                              <div
                                id="_232_6449___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[234.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[4.00px]"
                              >
                                <div
                                  id="_232_6450__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-7.43px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6451__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6452__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6452_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6453__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6454__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6455__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6456__Battery"
                                  src="/assets/portfolio2/images/battery_4.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6460__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6464__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_232_6469__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6470__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6471__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6472__Frame_42"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6473__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6474__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6475__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6476__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6477__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6478__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6479__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6480__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6481__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6481_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6482__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6483__MacBook_Air__15_inch"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[367.00px] w-[489.00px] rounded-[7px] left-[366.86px] top-[0.09px]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/4.png) 100% / cover no-repeat",
                                  }}
                                ></div>

                                <div
                                  id="_232_6484__Rectangle_1443"
                                  className="absolute bg-white rotate-[90.00deg] origin-[0_0] h-[9.00px] w-[39.00px] left-[366.86px] top-[268.09px]"
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6485__Frame_134"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-43.00px)] left-[calc(50%+142.50px)]"
                            >
                              <div
                                id="_232_6487___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                              >
                                <div
                                  id="_232_6488__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6489__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6490__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6490_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6491__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6492__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6493__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6494__Battery"
                                  src="/assets/portfolio2/images/battery_5.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6498__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6502__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6507__Frame_46"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6508__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6509__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6510__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6511__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6512__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6513__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.28px] w-[399.32px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6513_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6514__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6515__screencapture-api-ca"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[367.00px] w-[491.00px] top-[calc(50%-245.24px)] rounded-[10px] left-[calc(50%+183.39px)]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/5.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6516__Frame_111"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-44.00px)] left-[calc(50%+141.50px)]"
                            >
                              <div
                                id="_232_6518___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[234.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[4.00px]"
                              >
                                <div
                                  id="_232_6519__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-7.43px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6520__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6521__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6521_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6522__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6523__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6524__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6525__Battery"
                                  src="/assets/portfolio2/images/battery_6.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6529__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6533__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_232_6538__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6539__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6540__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6541__Frame_39"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6542__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6543__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6544__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6545__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6546__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6547__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6548__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6549__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6550__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6550_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6551__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6552__screencapture-myrame"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[149.00px] w-[489.00px] rounded-[10px] left-[362.86px] top-[0.39px] "
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/6.png) 100% / cover no-repeat",
                                  }}
                                ></div>

                                <div
                                  id="_232_6553__Rectangle_1443"
                                  className="absolute bg-[rgba(255,252,249,1.00)] rotate-[90.00deg] origin-[0_0] h-[7.00px] w-[39.00px] left-[362.86px] top-[268.09px]"
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6554__Frame_134"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-43.00px)] left-[calc(50%+142.50px)]"
                            >
                              <div
                                id="_232_6556___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                              >
                                <div
                                  id="_232_6557__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6558__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6559__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6559_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6560__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6561__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6562__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6563__Battery"
                                  src="/assets/portfolio2/images/battery_7.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6567__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6571__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6576__Frame_41"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6577__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6578__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6579__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6580__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6581__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6582__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6582_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6583__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6584__screencapture-myrame"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[337.00px] w-[252.00px] top-[calc(50%-126.24px)] rounded-[10px] left-[calc(50%+168.39px)]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/7.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="_232_6585__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6586__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6587__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_232_6588__Frame_112"
                      className="absolute h-[242.67px] w-[119.00px] left-[calc(50%-220.00px)] top-[calc(50%-44.00px)]"
                    >
                      <div
                        id="_232_6590___1_Sign_up__New_User"
                        className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                      >
                        <div
                          id="_232_6591__Frame_15"
                          className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                        >
                          <span
                            id="_232_6592__Loading___"
                            className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                          >
                            <span
                              className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                            >
                              Loading...
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6593__iPhone_14_Pro"
                        className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="I232_6593_101_45__Space_Black"
                          className="absolute h-[99.89%] w-[100.23%]"
                          style={{
                            background:
                              "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                          }}
                        ></div>
                      </div>

                      <div
                        id="_232_6594__Home_Indicator"
                        className="absolute bg-white h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                      ></div>

                      <div
                        id="_232_6595__Frame_109"
                        className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                      >
                        <span
                          id="_232_6596__Time"
                          className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                          >
                            9:41
                          </span>
                        </span>
                        <img
                          id="_232_6597__Battery"
                          src="/assets/portfolio2/images/battery_8.svg"
                          alt="Battery"
                          className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                        />
                        <div id="_232_6601__Wifi" className="absolute"></div>

                        <div
                          id="_232_6605__Cellular_Connection"
                          className="absolute"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_232_6610__Frame_43"
                    className="relative h-[426.00px] w-full"
                  >
                    <div
                      id="_232_6611__Frame_133"
                      className="absolute h-[426.00px] w-[1337.00px] flex flex-row justify-start items-center flex-nowrap gap-[90px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_232_6612__Frame_132"
                        className="relative h-[96.00px] w-[635.00px] flex flex-col justify-start items-start flex-nowrap gap-10"
                      >
                        <div
                          id="_232_6613__Frame_131"
                          className="relative h-[76.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_232_6614__Heading_2___Project_"
                            className="flex justify-start text-left items-center h-[76.00px] w-[622.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                            >
                              Explore available pujas for your spiritual needs
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        id="_232_6615__Container"
                        className="relative overflow-hidden bg-white h-[424.50px] w-[610.50px] flex flex-col justify-start items-start flex-nowrap gap-2.5 rounded-[23.686382293701172px]"
                      >
                        <div
                          id="_232_6616__Frame_103"
                          className="relative h-[406.00px] w-[calc(100%-10px-10px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                        >
                          <div
                            id="_232_6617__Image_Paste_Frame"
                            className="relative h-[406.00px] w-full"
                          >
                            <div
                              id="_232_6618__Ipad"
                              className="absolute h-[399.67px] w-[521.74px] left-[calc(50%-260.50px)] top-[calc(50%-200.00px)]"
                            >
                              <div
                                id="_232_6619__iPad_Pro__landscape_"
                                className="absolute rotate-[-90.00deg] origin-[0_0] h-[521.41px] w-[399.42px] left-[0.00px] top-[399.66px]"
                              >
                                <div
                                  id="I232_6619_203_40__IPad_Pro_12_1"
                                  className="absolute h-[100.00%] w-[100.00%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/ipad_pro_12_1.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6620__iPad_Pro_12_9__-_1"
                                className="absolute overflow-hidden bg-[rgba(252,252,245,1.00)] rotate-[-90.00deg] origin-[0_0] h-[488.65px] w-[366.95px] rounded-[7.721344470977783px] left-[16.92px] top-[383.86px]"
                              >
                                <div
                                  id="_232_6621__screencapture-mrt-st"
                                  className="absolute rotate-[90.00deg] origin-[0_0] h-[367.00px] w-[260.00px] rounded-[7px] left-[calc(50%+183.39px)] top-[114.09px]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/8.png) 100% / cover no-repeat",
                                  }}
                                ></div>

                                <div
                                  id="_232_6622__Rectangle_1443"
                                  className="absolute bg-[rgba(255,252,249,1.00)] rotate-[90.00deg] origin-[0_0] h-[7.00px] w-[39.00px] left-[362.86px] top-[268.09px]"
                                ></div>
                              </div>
                            </div>

                            <div
                              id="_232_6623__Frame_134"
                              className="absolute h-[242.67px] w-[119.00px] top-[calc(50%-43.00px)] left-[calc(50%+142.50px)]"
                            >
                              <div
                                id="_232_6625___1_Sign_up__New_User"
                                className="absolute overflow-hidden bg-[rgba(254,255,255,1.00)] h-[227.00px] w-[109.00px] rounded-[8.2394380569458px] left-[5.00px] top-[5.00px]"
                              >
                                <div
                                  id="_232_6626__Frame_15"
                                  className="absolute h-[9.14px] w-[17.49px] left-[calc(50%-12.28px)] top-[calc(50%-6.93px)] flex flex-row justify-center items-center flex-nowrap gap-0.5 px-0.5 py-[3px]"
                                >
                                  <span
                                    id="_232_6627__Loading___"
                                    className="flex justify-center text-center items-start h-[8.00px] w-[16.00px] relative"
                                  >
                                    <span
                                      className="bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[3.8450708389282227px] font-medium leading-[7.42px]"
                                    >
                                      Loading...
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <div
                                id="_232_6628__iPhone_14_Pro"
                                className="absolute h-[242.67px] w-[119.00px] left-[0.00px] top-[0.00px]"
                              >
                                <div
                                  id="I232_6628_101_45__Space_Black"
                                  className="absolute h-[99.89%] w-[100.23%]"
                                  style={{
                                    background:
                                      "url(/assets/portfolio2/images/space_black.png) 100% / cover no-repeat",
                                  }}
                                ></div>
                              </div>

                              <div
                                id="_232_6629__Home_Indicator"
                                className="absolute bg-black h-[1.37px] w-[38.48px] left-[calc(50%-19.39px)] rounded-[27.482677459716797px] bottom-[7.98px]"
                              ></div>

                              <div
                                id="_232_6630__Frame_109"
                                className="absolute h-[4.95px] w-[86.74px] left-[16.17px] top-[11.54px]"
                              >
                                <span
                                  id="_232_6631__Time"
                                  className="flex justify-center text-center items-start h-[5.00px] w-[calc(100%-76.03px)] absolute top-[calc(50%-2.47px)] left-[0.05px]"
                                >
                                  <span
                                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[4.122401714324951px] font-semibold tracking-[-0.08244805783033371px]"
                                  >
                                    9:41
                                  </span>
                                </span>
                                <img
                                  id="_232_6632__Battery"
                                  src="/assets/portfolio2/images/battery_9.svg"
                                  alt="Battery"
                                  className="absolute left-[calc(100%_*_0.91)] top-[calc(100%_*_0.12)]"
                                />
                                <div
                                  id="_232_6636__Wifi"
                                  className="absolute"
                                ></div>

                                <div
                                  id="_232_6640__Cellular_Connection"
                                  className="absolute"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_231_4752__Frame_9"
              className="relative bg-[rgba(246,247,249,1.00)] h-[721.00px] w-full rounded-[23px]"
            >
              <div
                id="_231_4753__Container"
                className="absolute overflow-hidden bg-white h-[619.50px] w-[610.50px] left-[calc(50%-667.00px)] top-[calc(50%-310.50px)] rounded-[23.686382293701172px] border-[#c5c6c7ff] border-solid border-[0.75px]"
              >
                <div
                  id="_231_4754__Frame_103"
                  className="absolute h-[601.00px] w-[592.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5 left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4755__Image_Paste_Frame"
                    className="relative h-[601.00px] w-full"
                  ></div>
                </div>

                <div
                  id="_231_4756__Image_Box"
                  className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[621.00px] w-[612.00px] left-[calc(50%-306.00px)] top-[calc(50%-310.50px)] rounded-[23.686382293701172px]"
                >
                  <div
                    id="_231_4757__Frame_103"
                    className="absolute h-[417.00px] w-[641.00px] left-[calc(50%-331.00px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5 top-[0.00px]"
                  >
                    <div
                      id="_231_4758__Frame_104"
                      className="relative h-[417.00px] w-full"
                    ></div>
                  </div>

                  <div
                    id="_231_4759__67ac895b30cafb42cfac"
                    className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,253,254,1.00)0%,rgba(254,253,254,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_-0.00)] left-[calc(100%_*_0.00)]"
                  >
                    <div
                      id="_231_4760__Frame_102"
                      className="absolute h-[305.00px] w-[278.00px] top-[calc(50%-0.23px)] flex flex-col justify-start items-start flex-nowrap gap-4 px-2.5 py-[3px] right-[0.41px]"
                    >
                      <div
                        id="_231_4761__Frame_107"
                        className="relative h-[231.00px] w-[calc(100%-52px-94px)] flex flex-col justify-center items-center flex-nowrap gap-2.5 pl-[52px] pr-[94px] py-[31px]"
                      >
                        <div
                          id="_231_4762__image_49"
                          className="absolute h-[187.00px] w-[209.00px] left-[calc(50%-104.00px)] top-[calc(50%-93.50px)]"
                          style={{
                            background:
                              "url(/assets/portfolio/images/image_49.png) 100% / cover no-repeat",
                          }}
                        ></div>
                      </div>
                    </div>

                    <img
                      id="_231_4763__Line_3"
                      src="/assets/portfolio/images/line_3.svg"
                      alt="Line_3"
                      className="absolute scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] top-[calc(50%-0.23px)] left-[calc(50%+107.59px)]"
                    />
                    <div
                      id="_231_4764__Frame_105"
                      className="absolute h-[235.00px] w-[440.00px] flex flex-col justify-center items-start flex-nowrap gap-2.5 pl-[58px] pr-[94px] py-[31px] left-[9.59px] top-[3.27px]"
                    >
                      <div
                        id="_231_4765__image_25"
                        className="absolute h-[187.00px] w-[152.00px] left-[calc(50%-76.00px)] top-[calc(50%-93.50px)]"
                        style={{
                          background:
                            "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat",
                        }}
                      ></div>
                    </div>

                    <div
                      id="_231_4766__Frame_107"
                      className="absolute h-[225.00px] w-[145.00px] flex flex-col justify-center items-start flex-nowrap gap-2.5 pl-[39px] pr-[94px] py-[31px] left-[9.59px] top-[320.27px]"
                    >
                      <div
                        id="_231_4767__image_42"
                        className="absolute h-[185.00px] w-[186.00px] left-[calc(50%-93.00px)] top-[calc(50%-92.50px)]"
                        style={{
                          background:
                            "url(/assets/portfolio/images/image_42.png) 100% / cover no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_231_4768__Frame_136"
                className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[120.00px]"
              >
                <span
                  id="_231_4769__Heading_2___Project_"
                  className="flex justify-start text-left items-center h-[90.00px] w-[550.00px] relative"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[45.00px]"
                  >
                    Key milestones and outcomes of the project
                  </span>
                </span>
              </div>

              <div
                id="_231_4770__Frame_137"
                style={{transform:"translateY(0px)"}}
                className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 left-[730.00px] top-[243.00px]"
              >
                <span
                  id="_231_4771__This_project_improve"
                  className="flex justify-start text-left items-center h-[90.00px] w-[549.00px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[30.00px]"
                  >
                    This project improved travel planning for pilgrims and
                    tourists visiting Rameswaram through user research, usability
                    analysis, and clear, intuitive design.
                  </span>
                </span>
              </div>

              <div
                id="_231_4772__Frame_8"
                className="absolute h-[236.00px] w-[300.00px] left-[740.00px] top-[388.00px]"
              >
                <div
                  id="_231_4774__Frame_2"
                  className="absolute h-[236.00px] w-[297.00px] left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4775__Background"
                    style={{transform:"translateY(4px)"}}
                    className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+3.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_231_4776__Frame_3"
                      className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                    >
                      <span
                        id="_231_4777__Improved_information"
                        className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                      >
                        <span
                          className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                        >
                          Improved information clarity and user navigation by
                          structuring content around real user needs and journey
                          flows.
                        </span>
                      </span>
                    </div>

                    <div
                      id="_231_4778__Frame_4"
                      className="absolute h-[29.00px] w-[150.00px] left-[23.00px] top-[105.00px]"
                    >
                      <span
                        id="_231_4779__Key_Achievement"
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
                      id="_231_4780__SVG"
                      className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                    >
                      <img
                        id="_231_4793__Vector"
                        src="/assets/portfolio/images/vector_9.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.01)]"
                      />
                      <img
                        id="_231_4794__Vector"
                        src="/assets/portfolio/images/vector_10.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                      />
                      <img
                        id="_231_4795__Vector"
                        src="/assets/portfolio/images/vector_11.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                      />
                      <img
                        id="_231_4796__Vector"
                        src="/assets/portfolio/images/vector_12.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_231_4785__Frame_7"
                className="absolute h-[236.00px] w-[300.00px] left-[1075.00px] top-[388.00px]"
              >
                <div
                  id="_231_4787__Background"
                    style={{transform:"translateY(4px)"}}
                  className="absolute bg-white h-[calc(100%+-0.00px)] w-[calc(100%+-0.00px)] rounded-[24.43000030517578px] left-[0.00px] top-[0.00px]"
                >
                  <div
                    id="_231_4788__Frame_6"
                    className="absolute h-[66.00px] w-[266.00px] left-[23.00px] top-[144.00px]"
                  >
                    <span
                      id="_231_4789__The_platform_offers_"
                      className="flex justify-start text-left items-center h-[66.00px] w-[266.00px] absolute left-[calc(50%-133.00px)] top-[0.00px]"
                    >
                      <span
                        className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[24.00px]"
                      >
                        The platform offers a smoother, intuitive experience that
                        helps visitors plan trips and access temple services with
                        confidence.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_231_4790__Frame_5"
                    className="absolute h-[29.00px] w-[183.00px] left-[23.00px] top-[105.00px]"
                  >
                    <span
                      id="_231_4791__client_Impact"
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
                    id="_231_4792__SVG"
                    className="absolute h-[52.00px] w-[52.00px] left-[calc(50%-126.00px)] top-[calc(50%-93.00px)]"
                  >
                    <img
                      id="_231_4793__Vector"
                      src="/assets/portfolio/images/vector_9.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_231_4794__Vector"
                      src="/assets/portfolio/images/vector_10.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                    />
                    <img
                      id="_231_4795__Vector"
                      src="/assets/portfolio/images/vector_11.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                    />
                    <img
                      id="_231_4796__Vector"
                      src="/assets/portfolio/images/vector_12.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_231_4797__Border"
                className="absolute h-[38.06px] flex flex-col justify-center items-center flex-nowrap gap-2.5 px-[9px] py-0 rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612788200378px] left-[740.00px] top-[50.00px] whitespace-nowrap"
              >
                <div
                  id="_231_4798__Frame_135"
                  className="relative h-[20.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                >
                  <span
                    id="_231_4799__Milestone"
                    className="flex justify-center items-center h-[20.00px] relative"
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

            <div
              id="_231_4800__Frame_1171277016"
              className="flex flex-row justify-center items-center flex-nowrap gap-[10px] px-[309px]"
              style={{
                width: "1415px",
                minHeight: "410px",
              }}
            >
              <span
                id="_231_4801__This_project_was_app"
                className="flex justify-center text-center items-center flex-none"
                style={{
                  width: "797px",
                  height: "210px",
                  fontFamily: "'SF Pro Display'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "38px",
                  color: "#111111",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <span>
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic"
                  >
                    This project was approached with a user-first mindset, focusing<br />on the needs of pilgrims and travelers visiting Rameswaram.<br />
                  </span><span
                    className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic"
                  >
                    Through research, journey mapping, and usability testing, the<br />platform was designed to balance travel convenience with the<br />spiritual context of temple services, ensuring clarity,<br />accessibility, and trust at every step.
                  </span>
                </span>
              </span>
            </div>

            {/* FAQ Section — Frame_1171276961 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "50px 42px",
                gap: "10px",
                width: "100%",
                height: "750px",
                background: "#F6F7F9",
                borderRadius: "23px",
                boxSizing: "border-box",
                transform: "translate(-1px,-1px)",
                position: "relative",
              }}
            >
              {/* Group 37 */}
              <div style={{ position: "relative", width: "1335px", height: "691px" }}>
                {/* Frame 196 */}
                <div
                  style={{
                    position: "absolute",
                    width: "1335px",
                    height: "691px",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "40px",
                  }}
                >
                  {/* Frame 195 — FAQ badge + title row */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "30px",
                      width: "1335px",
                    }}
                  >
                    {/* FAQ badge */}
                    <div
                      style={{
                        width: "85px",
                        height: "38px",
                        border: "1px solid #202833",
                        borderRadius: "272.07px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'SF Pro Display'",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "23px",
                          letterSpacing: "2.381px",
                          textTransform: "uppercase",
                          color: "#202833",
                        }}
                      >
                        FAQ
                      </span>
                    </div>

                    {/* Frame 194 — title + View All button */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "1335px",
                        height: "91px",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Title */}
                      <span
                       className="ml-[10px]"
                        style={{
                          fontFamily: "'SF Pro Display'",
                          fontWeight: 400,
                          fontSize: "42px",
                          lineHeight: "45px",
                          color: "#111111",
                          width: "770px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        My Rameswaram Trip – Travel & Temple Service Platform
                      </span>

                      {/* View All button */}
                      <div
                        onClick={() => navigate("/faq")}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "3.587px 23.913px",
                          gap: "8.37px",
                          height: "55px",
                          background: "#0161FE",
                          borderRadius: "101.682px",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter'",
                            fontWeight: 500,
                            fontSize: "14.3518px",
                            lineHeight: "21px",
                            letterSpacing: "-0.071759px",
                            color: "#FFFFFF",
                          }}
                        >
                          View All
                        </span>
                        <img
                          src="/assets/portfolio/images/vector_13.svg"
                          alt="arrow right"
                          style={{ width: "24.4px", height: "24.4px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 36 — accordion rows */}
                  <div
                    style={{
                      position: "absolute",
                      width: "1335px",
                      height: "435px",
                      left: "0px",
                      top: "209px",
                    }}
                  >
                    {/* Overview row (active / blue) + answer box */}
                    <div
                      style={{
                        position: "absolute",
                        width: "1335px",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      {/* Blue pill */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "6px 15px",
                          gap: "628px",
                          width: "1335px",
                          height: "69px",
                          background: "#0161FE",
                          borderRadius: "20px",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'SF Pro Display'",
                              fontWeight: 400,
                              fontSize: "27.2px",
                              lineHeight: "36px",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                            }}
                          >
                            Overview
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'SF Pro Display'",
                              fontWeight: 400,
                              fontSize: "18px",
                              lineHeight: "30px",
                              color: "#FFFFFF",
                              transform:"translate(-2px,2px)"
                            }}
                          >
                            What is the My Rameswaram Trip UX/UI project about?
                          </span>
                        </div>
                      </div>

                      {/* Answer box */}
                      <div
                        style={{
                          position: "absolute",
                          width: "1315px",
                          height: "128px",
                          left: "10px",
                          top: "89px",
                          background: "#FFFFFF",
                          borderRadius: "20px",
                          padding: "22px",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "28px",
                            color: "rgba(109, 109, 110, 0.8)",
                            textTransform: "capitalize",
                            width: "1270px",
                            transform:"translateY(1px)"
                          }}
                        >
                          This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.
                        </span>
                      </div>
                    </div>

                    {/* UX Research Approach row */}
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "6px 15px",
                        gap: "461px",
                        width: "1335px",
                        height: "69px",
                        left: "0px",
                        top: "257px",
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "27.2px",
                            lineHeight: "36px",
                            color: "#000000",
                            textTransform: "capitalize",
                          }}
                        >
                          UX Research Approach
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "rgba(17, 17, 17, 0.6)",
                            transform:"translateX(-1px)"
                          }}
                        >
                          What UX research methods were used in this project?
                        </span>
                      </div>
                    </div>

                    {/* User Problems Identified row */}
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "6px 15px",
                        gap: "446px",
                        width: "1335px",
                        height: "69px",
                        left: "0px",
                        top: "366px",
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "27.2px",
                            lineHeight: "36px",
                            color: "#000000",
                            textTransform: "capitalize",
                          }}
                        >
                          User Problems Identified
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'SF Pro Display'",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "rgba(17, 17, 17, 0.6)",
                            transform:"translateY(6px)"
                          }}
                        >
                          What key user problems did the research uncover?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_231_4837__Section"
              className="relative overflow-hidden h-[586.00px] w-full rounded-[22.518083572387695px]"
            >
              <span
                id="_231_4838__Heading_1___About_ou"
                className="flex justify-start text-left items-center h-[54.00px] w-[310.00px] absolute left-[42.00px] top-[50.00px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[51.65px]"
                >
                  Our Products
                </span>
              </span>
              <span
                id="_231_4839__At_Arunijone__I_deli"
                className="flex justify-start text-left items-center h-[64.00px] w-[591.00px] absolute left-[791.00px] top-[50.00px]"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                >
                  At Arunijone, I deliver high-impact services and projects
                  focused on UX/UI design, digital marketing, and equity research.
                  Each engagement is driven by strategic thinking, attention to
                  detail, and a commitment to measurable results.
                </span>
              </span>
              <div
                id="_231_4840__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] left-[-124.94px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] top-[164.92px]"
              >
                <div
                  id="_231_4841__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_231_4842__image_26"
                    className="absolute h-[249.00px] w-[202.00px] left-[calc(50%-100.82px)] top-[calc(50%-124.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4843__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[241.59px] top-[164.92px]"
              >
                <div
                  id="_231_4844__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%] top-[calc(100%_*_0.00)]"
                >
                  <div
                    id="_231_4845__image_10"
                    className="absolute h-[138.00px] w-[196.00px] left-[calc(50%-98.35px)] top-[calc(50%-69.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_10.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4846__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[608.12px] top-[164.92px]"
              >
                <div
                  id="_231_4847__67b5af0cadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <img
                    id="_231_4848__Group_11"
                    src="/assets/portfolio/images/group_11.svg"
                    alt="Group_11"
                    className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.28)]"
                  />
                </div>
              </div>

              <div
                id="_231_4857__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[974.65px] top-[164.92px]"
              >
                <div
                  id="_231_4858__67b5af0a9616f526f030"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_231_4859__image_47"
                    className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-183.92px)] top-[calc(50%-41.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_47.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_231_4860__Container"
                className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[1341.19px] top-[164.92px]"
              >
                <div
                  id="_231_4861__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
                >
                  <div
                    id="_231_4862__image_63"
                    className="absolute h-[74.00px] w-[264.00px] left-[calc(50%-131.95px)] top-[calc(50%-37.22px)]"
                    style={{
                      background:
                        "url(/assets/portfolio/images/image_63.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
        </div>
      </DesktopPageWrapper>
      {/* ====== MOBILE VIEW ====== */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner
            iconSrc="/assets/p2/images/group.svg"
            avatarSrc="/assets/p2/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">

            {/* HERO */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[16px] px-[15px] py-[25px]">
              <h1 className="text-[32px] leading-[40px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>My Rameswaram Trip – Travel &amp; Temple Service Platform</h1>
              <PortfolioMetadataMobile assetBasePath="/assets/p2/images" siteViewColor="rgba(27,102,254,1.00)" />
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200 }}>
                <img src="/assets/portfolio2/images/gemini_logo_removed_1.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* RELATED WORKS */}
            <div className="bg-[#F6F7F9] h-[376px] w-full rounded-[22.88px] flex flex-col items-center gap-[25px] px-[20px] pt-[35px]">
                <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] border border-[#202833] rounded-[228.83px]">
                  <span className="whitespace-nowrap text-[12px] font-[500] leading-[14px] tracking-[1.716px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>related works</span>
                </div>
                <span className="text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Related Work Across My Core Services</span>
                <div className="flex flex-col items-center gap-[15px] w-full">
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio1')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m6 16h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4m-3 0v20M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>UX/UI Design</span>
                    </div>
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio3')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 3l-5 9 5 9M16 3l5 9-5 9M14 3l-4 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Full-Stack Dev</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-[15px] w-full">
                    <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white  rounded-[18.53px] cursor-pointer" onClick={() => navigate('/portfolio4')}>
                      <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white"/></svg>
                      </div>
                      <span className="text-[15px] font-normal leading-[20px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Equity Research</span>
                    </div>
                  </div>
                </div>
            </div>

            {/* CONTENT FRAMES */}
            <div className="flex flex-col gap-[20px]">

              {/* Frame 1 — iPad landscape (no screen) + phone with hero_mobile */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      {/* iPad landscape */}
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }} />
                      </div>
                      {/* Phone + hero_mobile screen */}
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute" style={{ background: "url(/assets/p2/images/hero_mobile.png) 100% / cover no-repeat", height: 127.78, width: 63.89, left: 2.63, top: 3.85, borderRadius: "10.57px 10.57px 0 0" }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 2 — iPad landscape + phone (no screen content) */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }} />
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 3 — iPad landscape + 1.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[3.68px]" style={{ height: 209, width: 243, top: "calc(50% - 121.76px)", left: "calc(50% + 104.61px)", background: "url(/assets/portfolio2/images/1.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 4 — iPad landscape + 2.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[7px]" style={{ height: 217, width: 288, top: "calc(50% - 143.76px)", left: "calc(50% + 108.77px)", background: "url(/assets/portfolio2/images/2.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 5 — iPad landscape + 3.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[7px]" style={{ height: 354, width: 288, top: "calc(50% - 143.76px)", left: "calc(50% + 109.92px)", background: "url(/assets/portfolio2/images/3.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 6 — iPad landscape + 4.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[7px]" style={{ height: 217, width: 293, top: "calc(50% - 146.76px)", left: "calc(50% + 109.23px)", background: "url(/assets/portfolio2/images/4.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 7 — iPad landscape + 5.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[10px]" style={{ height: 219, width: 293, top: "calc(50% - 146.76px)", left: "calc(50% + 109.23px)", background: "url(/assets/portfolio2/images/5.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 8 — iPad landscape + 6.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-t-[7px]" style={{ height: 88, width: 287, top: "calc(50% - 143.76px)", left: "calc(50% + 108.38px)", background: "url(/assets/portfolio2/images/6.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 9 — iPad landscape + 7.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[10px]" style={{ height: 169, width: 126, top: "calc(50% - 62.76px)", left: "calc(50% + 84.54px)", background: "url(/assets/portfolio2/images/7.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

              {/* Frame 10 — iPad landscape + 8.png screen + phone */}
              <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[20px]">
                <div className="relative overflow-hidden bg-white w-full rounded-[13.9px]" style={{ height: 249.27 }}>
                  <div className="relative w-[calc(100%-10px)] mx-auto" style={{ height: 240.15, padding: 5 }}>
                    <div className="relative w-full" style={{ height: 238.41 }}>
                      <div className="absolute" style={{ height: 234.69, width: 306.37, left: "calc(50% - 152.96px)", top: "calc(50% - 117.44px)" }}>
                        <div className="absolute rotate-[-90deg] origin-top-left" style={{ height: 306.10, width: 234.48, left: 0, top: 234.68 }}>
                          <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/ipad_pro_12_1.png) 100% / cover no-repeat" }} />
                        </div>
                        <div className="absolute overflow-hidden rotate-[-90deg] origin-top-left rounded-[4.53px]" style={{ height: 286.94, width: 215.48, left: 9.94, top: 225.41, background: "rgba(252,252,245,1)" }}>
                          <div className="absolute rotate-[90deg] origin-top-left rounded-[7px]" style={{ height: 215, width: 152, top: "calc(50% - 75.76px)", left: "calc(50% + 107.69px)", background: "url(/assets/portfolio2/images/8.png) 100% / cover no-repeat" }} />
                        </div>
                      </div>
                      <div className="absolute" style={{ height: 142.50, width: 69.88, top: "calc(50% - 25.83px)", left: "calc(50% + 83.09px)" }}>
                        <div className="absolute overflow-hidden bg-white rounded-[7px]" style={{ height: 138, width: 64, left: 2.63, top: 2.81 }} />
                        <div className="absolute w-full h-full" style={{ background: "url(/assets/p2/images/space_black.png) 100% / cover no-repeat" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] leading-[26px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display" }}>Explore available pujas for your spiritual needs</p>
              </div>

            </div>

            {/* MILESTONES */}
            <div className="bg-[rgba(246,247,249,1.00)] w-full rounded-[22px] flex flex-col gap-[35px] px-[6px] pt-[35px] pb-[35px]">
              <div className="w-full rounded-[13.96px] overflow-hidden bg-white flex items-center justify-center" style={{ height: 220 }}>
                <img src="/assets/portfolio/images/image_49.png" alt="Milestone" style={{ maxHeight: "85%", maxWidth: "85%", objectFit: "contain" }} />
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
                    <img src="/assets/p2/images/vector_10.svg" alt="" className="absolute" />
                    <img src="/assets/p2/images/vector_11.svg" alt="" className="absolute left-[calc(100%*0.29)] top-[calc(100%*0.29)]" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-center text-[19.1px] font-normal leading-[26.70px] text-[rgba(17,17,17,1.00)]">Key Achievement</span>
                    <span className="text-center text-[13.3px] font-normal leading-[22.83px] text-[rgba(17,17,17,0.60)]">Improved information clarity and user navigation by structuring content around real user needs and journey flows.</span>
                  </div>
                </div>
                <div className="bg-white w-full flex flex-col items-center gap-[18px] p-[22px] rounded-[15.26px]">
                  <div className="relative h-[38.13px] w-[38.13px]">
                    <img src="/assets/p2/images/vector_12.svg" alt="" className="absolute" />
                    <img src="/assets/p2/images/vector_13.svg" alt="" className="absolute left-[calc(100%*0.39)] top-[calc(100%*0.29)]" />
                    <img src="/assets/p2/images/vector_14.svg" alt="" className="absolute left-[calc(100%*0.31)] top-[calc(100%*0.54)]" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-center text-[19.1px] font-normal leading-[26.70px] text-[rgba(17,17,17,1.00)]">Client Impact</span>
                    <span className="text-center text-[13.3px] font-normal leading-[22.83px] text-[rgba(17,17,17,0.60)]">The platform offers a smoother, intuitive experience that helps visitors plan trips and access temple services with confidence.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT TEXT */}
            <div className="relative h-[463.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-2.5 py-0">
              <span className="flex justify-center text-center items-center h-[498.00px] w-full max-w-[370px] relative">
                <span>
                  <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]">This project was approached with a user-first mindset, focusing on the needs of pilgrims and travelers visiting Rameswaram.{" "}</span>
                  <span className="bg-[rgba(112,112,112,1.00)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]">Through research, journey mapping, and usability testing, the platform was designed to balance travel convenience with the spiritual context of temple services, ensuring clarity, accessibility, and trust at every step.</span>
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
                  <div className="absolute h-[181.00px] w-[146.00px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]" style={{ background: "url(/assets/p2/images/image_26.png) 100% / cover no-repeat" }}></div>
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
                  onClick={() => navigate('/portfolio2')}
                  className="absolute border h-[42.63px] w-[100.03px] top-[calc(50%-22.31px)] rounded-[95.35px] border-[#0161fe] border-solid left-[calc(50%+15.96px)] flex items-center justify-center cursor-pointer"
                >
                  <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.17px] tracking-[-0.067px]">Portfolio</span>
                </div>
              </div>
              <div className="absolute overflow-hidden h-[289.64px] w-[274.39px] rounded-[15.26px] border-[#8e8383]/20 border-solid border-[0.1px] left-[233.48px] top-[346.00px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-full w-full">
                  <div className="absolute h-[129.00px] w-[184.00px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]" style={{ background: "url(/assets/p2/images/image_10.png) 100% / cover no-repeat" }}></div>
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
export default Portfolio2;


