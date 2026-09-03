import React from "react";
import { useLocation, Link } from "wouter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import PortfolioMetadataMobile from "../components/PortfolioMetadataMobile";
import MobFooter from "../components/MobFooter";
import MobilePageWrapper from "../components/MobilePageWrapper";

const DESIGN_HEIGHT = 7772;

const Portfolio4 = () => {
  const [, navigate] = useLocation();

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        {/* Navbar */}
        <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>
            <div onClick={() => { navigate('/'); window.scrollTo(0, 0); }} style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66, cursor: 'pointer' }}>
              <div style={{ position: 'absolute', width: 66, height: 66, background: '#FFFFFF', borderRadius: 1000 }} />
              <img src="/figmaAssets/logo.png" alt="Arunijone Logo" style={{ position: 'absolute', width: 49, height: 42, top: 'calc(50% - 21px)', left: 'calc(50% - 24.5px)', borderRadius: 12, objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', width: 416, height: 47, left: 'calc(50% - 208px)', top: 'calc(50% - 23.5px)', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '12px 13px', gap: 72 }}>
              {[
                { label: 'Home', href: '/', color: '#111111', w: 44 },
                { label: 'About', href: '/about', color: '#111111', w: 41 },
                { label: 'Explore', href: '/explore', color: '#111111', w: 51 },
                { label: 'Blogs', href: '/blog', color: '#111111', w: 38 },
              ].map(({ label, href, color, w }) => (
                <Link key={label} href={href} style={{ width: w, height: 23, textDecoration: 'none', fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16, lineHeight: '22px', color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{label}</Link>
              ))}
            </div>
            <button style={{ position: 'absolute', right: 42, top: 'calc(50% - 22px)', width: 120, height: 44, background: '#0161FE', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 14, color: '#FFFFFF' }}>
              Contact Us
            </button>
          </div>
        </header>

        {/* Main frame */}
        <div
          id="_236_334__Frame_1171277049"
          className="absolute flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          style={{ width: 1420 }}
        >
          {/* Hero Section — from Portfolio3 combined-site */}
          <div
            id="_231_4684__Section"
            style={{ position: 'relative', background: '#F6F7F9', height: 926, width: '100%', borderRadius: 20.4131, overflow: 'hidden', flexShrink: 0 }}
          >
            <div
              id="_231_4686__Frame_1171277134"
              style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 57, width: 1331, height: 836.5, left: 45, top: 45 }}
            >
              <span
                id="_231_4685__Heading_1"
                style={{ width: 1331, height: 49, fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400, fontSize: 40.8113, lineHeight: '47px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#111111', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}
              >
                My Rameswaram Trip – Travel &amp; Temple Service Platform
              </span>
              <PortfolioMetadata />
              <div
                id="_231_4687__Image_Box"
                style={{ position: 'relative', overflow: 'hidden', width: 1331, height: 625, borderRadius: 20.4131, flex: 'none', order: 2, alignSelf: 'stretch', flexGrow: 0 }}
              >
                <div
                  id="_231_4688__overlay"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[627.50px] w-[1335.11px] left-[0.00px] top-[0.00px]"
                  style={{ filter: "blur(0.0px)" }}
                >
                  <div
                    id="_231_4689__image"
                    className="absolute h-[628.00px] w-[1335.00px] left-[0.00px] top-[0.00px]"
                    style={{ background: "url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Our View Section — from Portfolio3 combined-site */}
          <div className="relative h-[366px] w-full flex flex-col justify-start items-start">
            <div className="relative overflow-hidden bg-[#F6F7F9] h-[366px] w-full rounded-[20.41px]">
              <div className="absolute h-[266px] w-[1015px] left-[203px] top-[50px]">
                <div className="absolute h-[38px] w-[133px] left-[calc(50%-66.5px)] top-[0px] flex flex-col justify-start items-start gap-2.5">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '9px 20px', gap: 10, width: 133, height: 38, boxSizing: 'border-box', border: '0.9696px solid #202833', borderRadius: 236.844 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '2.07px', textTransform: 'uppercase', color: '#202833', whiteSpace: 'nowrap' }}>Our View</span>
                  </div>
                </div>
                <span className="flex justify-center text-center items-center h-[72px] w-[466px] absolute left-[calc(50%-233px)] top-[56px]">
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 36, lineHeight: '42px', color: '#111111', textAlign: 'center' }}>Explore My Core Service Categories</span>
                </span>
                <div className="absolute w-[1015px] h-[78px] left-[0px] top-[188px]">
                  <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, left: 'calc(50% - 507.5px)', top: 0 }}>
                    {/* Research */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686 }}>
                      <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                        <img src="/assets/portfolio2/images/vector_3.svg" alt="Research" style={{ position: 'absolute', left: 'calc(50% - 12px)', top: 'calc(50% - 12px)', width: 24, height: 24 }} />
                      </div>
                      <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE' }}>Research</span>
                    </div>
                    {/* Design */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#0161FE', borderRadius: 23.686 }}>
                      <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                        <img src="/assets/portfolio2/images/image1.png" alt="Design" style={{ position: 'absolute', left: 0, top: 0, width: 43.72, height: 43.72, borderRadius: 38 }} />
                      </div>
                      <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#FFFFFF' }}>Design</span>
                    </div>
                    {/* Development */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686 }}>
                      <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                        <img src="/assets/about/images/vector_35.svg" alt="Development" style={{ position: 'absolute', left: 'calc(50% - 12px)', top: 'calc(50% - 12px)', width: 24, height: 24 }} />
                      </div>
                      <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE' }}>Development</span>
                    </div>
                    {/* Creative */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686 }}>
                      <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                        <img src="/assets/about/images/vector_37.svg" alt="Creative" style={{ position: 'absolute', left: 'calc(50% - 12px)', top: 'calc(50% - 12px)', width: 24, height: 24 }} />
                      </div>
                      <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE' }}>Creative</span>
                    </div>
                    {/* Marketing */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '17px 24px', gap: 24, background: '#FFFFFF', borderRadius: 23.686 }}>
                      <div style={{ position: 'relative', width: 43.72, height: 43.72, background: '#0161FE', borderRadius: 38 }}>
                        <img src="/assets/about/images/vector_39.svg" alt="Marketing" style={{ position: 'absolute', left: 'calc(50% - 12px)', top: 'calc(50% - 12px)', width: 24, height: 24 }} />
                      </div>
                      <span style={{ fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20, lineHeight: '30px', textTransform: 'capitalize', color: '#0161FE' }}>Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big Box Image */}
          <div
            id="_236_399__Big_box_image"
            className="relative w-full h-auto rounded-[23.686px] overflow-hidden"
            style={{ background: "url(/assets/portfolio4/images/image.png) 100% / cover no-repeat", minHeight: "3203px" }}
          >
            <div className="absolute inset-0 flex items-center justify-center mt-[3023px]">
              <div style={{ boxSizing: "border-box", background: "rgb(255,255,255)", display: "flex", flexDirection: "row", alignItems: "center", padding: "3.84783px 35px", gap: "8.98px", width: "371px", height: "59px", border: "1px solid #A7A7A7", borderRadius: "109.078px" }}>
                <div style={{ width: "301px", height: "24px", fontFamily: "'SF Pro Display'", fontWeight: "500", fontSize: "16.5px", lineHeight: "23px", display: "flex", alignItems: "center", textAlign: "center", letterSpacing: "-0.0769778px", whiteSpace: "nowrap", wordSpacing: "3px" }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.open("/research-report", "_blank"); }} style={{ color: "#2F61FE", textDecoration: "none", cursor: "pointer", fontWeight: "500" }}>Click here</a>
                  <span style={{ color: "#000000", marginLeft: "4px" }}>to view the full research report</span>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining sections */}
          <div
            id="_236_525__Frame_1171277024"
            className="relative h-[3069.28px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[50px]"
          >
            <div
              id="_231_4752__Frame_9"
              style={{ position: 'relative', background: 'rgba(246,247,249,1)', height: 750, width: 1420, borderRadius: 23, flexShrink: 0, overflow: 'visible' }}
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

            {/* FAQ Section */}
            <div id="_236_576__Frame_1171277023" className="relative bg-[rgba(246,247,249,1.00)] h-[814.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 px-[42px] py-[50px] rounded-[23px]" style={{ width: '100%' }}>
              <div id="_236_577__Group_37" className="relative h-[714.00px] w-[1335.00px]">
                <div id="_236_578__Frame_196" className="absolute h-[714.00px] w-[1335.00px] flex flex-col justify-start items-start flex-nowrap gap-10 left-[0.00px] top-[0.00px]">
                  <div id="_236_579__Frame_195" className="relative w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[30px]">
                    <div id="_236_580__Border" className="relative border h-[36.00px] w-[83.00px] rounded-[272.07000732421875px] border-[#202833ff] border-solid">
                      <span className="flex justify-start text-left items-center h-[14.00px] w-[35.00px] absolute left-[calc(50%-17.50px)] top-[calc(50%-7.00px)]">
                        <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[22.54px] tracking-[2.38100004196167px] uppercase">FAQ</span>
                      </span>
                    </div>
                    <div id="_236_582__Frame_194" className="relative h-[91.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[409px]">
                      <div id="_236_583__Frame_193" className="relative h-[71.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                        <span className="flex justify-start text-left items-center h-[90.00px] w-[770.00px] relative">
                          <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[42.0px] font-normal leading-[45.00px]">My Rameswaram Trip - Travel &amp; Temple Service Platform</span>
                        </span>
                      </div>
                      <div id="_236_585__Link" className="relative bg-[rgba(1,97,254,1.00)] h-[49.00px] flex flex-row justify-start items-center flex-nowrap gap-2 px-[23px] py-[3px] rounded-[101.68245697021484px] cursor-pointer" onClick={() => navigate("/faq")}>
                        <span className="flex justify-center text-center items-center h-[17.04px] w-[54.74px] relative">
                          <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.351792335510254px] font-medium leading-[21.47px] tracking-[-0.07175896316766739px]">View All</span>
                        </span>
                        <div className="relative overflow-hidden h-[24.40px] w-[24.40px]">
                          <div className="absolute overflow-hidden h-[24.40px] w-[24.40px] left-[calc(50%-12.20px)] top-[calc(50%-12.20px)]">
                            <img src="/assets/portfolio4/images/vector_13.svg" alt="Vector" className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_236_591__Group_36" className="absolute h-[505px] w-[1335px] left-[0px] top-[209px]">
                    <div id="_236_592__Paragraph_Background" className="absolute bg-white h-[57.00px] w-[1315px] flex flex-row justify-start items-center flex-nowrap gap-[446px] px-[15px] py-1.5 rounded-[20px] left-[0.00px] top-[364.00px]">
                      <div className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                        <span className="flex justify-start text-left items-center h-[37.00px] w-[278.00px] relative">
                          <span className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize">User Problems Identified</span>
                        </span>
                      </div>
                      <div className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                        <span className="flex justify-start text-left items-center h-[30.00px] w-[517.00px] relative">
                          <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]">What key user problems did the research uncover?</span>
                        </span>
                      </div>
                    </div>
                    <div id="_236_597__Paragraph_Background" className="absolute bg-white h-[57.00px] w-[1315px] flex flex-row justify-start items-center flex-nowrap gap-[461px] px-[15px] py-1.5 rounded-[20px] left-[0.00px] top-[257.00px]">
                      <div className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                        <span className="flex justify-start text-left items-center h-[37.00px] w-[266.00px] relative">
                          <span className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize">UX Research Approach</span>
                        </span>
                      </div>
                      <div className="relative h-[30.00px] w-[539.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                        <span className="flex justify-start text-left items-center h-[30.00px] w-[532.00px] relative">
                          <span className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]">What UX research methods were used in this project?</span>
                        </span>
                      </div>
                    </div>
                    <div id="_236_602__Frame_1171277007" className="absolute h-[69.00px] w-[1335.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 left-[0.00px] top-[0.00px]">
                      <div id="_236_603__Paragraph_Background" className="relative bg-[rgba(1,97,254,1.00)] h-[57.00px] w-[1315px] flex flex-row justify-start items-center flex-nowrap gap-[628px] px-[15px] py-1.5 rounded-[20px]">
                        <div className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                          <span className="flex justify-start text-left items-center h-[37.00px] w-[108.00px] relative">
                            <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[27.200000762939453px] font-normal leading-[36.27px] capitalize">Overview</span>
                          </span>
                        </div>
                        <div className="relative h-[30.00px] w-[437.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5">
                          <span className="flex justify-start text-left items-center h-[30.00px] w-[446.00px] relative">
                            <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]">What is the My Rameswaram Trip UX/UI project about?</span>
                          </span>
                        </div>
                      </div>
                      <div id="_236_609__Background" className="absolute bg-white flex flex-row items-center flex-nowrap rounded-[20px]" style={{ width: 1315, height: 128, left: 'calc(50% - 1315px / 2)', top: 89, padding: 22, gap: 24, isolation: 'isolate' }}>
                        <span className="flex justify-start text-left items-center h-[84.00px] w-[1270.00px] absolute left-[22.00px] top-[22.00px]">
                          <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.00px] capitalize">This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Products Section */}
            <div id="_236_611__Section" style={{ transform: "translateY(-65px)" }} className="relative overflow-hidden h-[586.00px] w-full rounded-[22.518083572387695px]">
              <span className="flex justify-start text-left items-center h-[54.00px] w-[310.00px] absolute left-[42.00px] top-[50.00px]">
                <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[51.65px]">Our Products</span>
              </span>
              <span className="flex justify-start text-left items-center h-[64.00px] w-[591.00px] absolute left-[791.00px] top-[50.00px]">
                <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]">At Arunijone, I deliver high-impact services and projects focused on UX/UI design, digital marketing, and equity research. Each engagement is driven by strategic thinking, attention to detail, and a commitment to measurable results.</span>
              </span>
              <div id="_236_614__Container" className="absolute overflow-hidden h-[370.39px] w-[351.33px] left-[-124.94px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] top-[164.92px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]">
                  <div className="absolute h-[249.00px] w-[202.00px] left-[calc(50%-100.82px)] top-[calc(50%-124.22px)]" style={{ background: "url(/assets/Home/images/image_26.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
              <div id="_236_617__Container" className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[241.59px] top-[164.92px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]">
                  <div className="absolute h-[138.00px] w-[196.00px] left-[calc(50%-98.35px)] top-[calc(50%-69.22px)]" style={{ background: "url(/assets/portfolio3/images/image_10.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
              <div id="_236_620__Container" className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[608.12px] top-[164.92px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]">
                  <img src="/assets/portfolio4/images/group_11.svg" alt="Group_11" className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.28)]" />
                </div>
              </div>
              <div id="_236_631__Container" className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[974.65px] top-[164.92px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]">
                  <div className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-183.92px)] top-[calc(50%-41.22px)]" style={{ background: "url(/assets/portfolio4/images/image_47.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
              <div id="_236_634__Container" className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22.518083572387695px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[1341.19px] top-[164.92px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]">
                  <div className="absolute h-[74.00px] w-[264.00px] left-[calc(50%-131.95px)] top-[calc(50%-37.22px)]" style={{ background: "url(/assets/portfolio4/images/image_63.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
            </div>

            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </div>
        </div>
      </DesktopPageWrapper>

      {/* Mobile View */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner
            iconSrc="/assets/p4/images/group.svg"
            avatarSrc="/assets/p4/images/gemini_generated_image_gyuxclgyuxclgyux_2.png"
          />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">

            {/* HERO */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[16px] px-[15px] py-[25px]">
              <h1 className="text-[32px] leading-[40px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>My Rameswaram Trip – Travel &amp; Temple Service Platform</h1>
              <PortfolioMetadataMobile assetBasePath="/assets/p4/images" siteViewColor="rgba(27,102,254,1.00)" />
              <div className="w-full rounded-[15px] overflow-hidden bg-white flex items-center justify-center" style={{ height: 200 }}>
                <img src="/assets/p4/images/gemini_logo_removed_1.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* OUR VIEW */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[25px]">
              <div className="border border-[#202833] rounded-[228px] px-[14px] py-[7px] self-start">
                <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Our View</span>
              </div>
              <h2 className="text-[24px] leading-[30px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Explore My Core Service Categories</h2>
            </div>
            {/* CASE STUDIES */}
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col gap-[14px] px-[15px] py-[25px]">
              <div className="border border-[#202833] rounded-[228px] px-[14px] py-[7px] self-start">
                <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Case Studies</span>
              </div>
              <h2 className="text-[24px] leading-[30px] text-[#111111] m-0" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Our Success Stories Real Results, Real Impact</h2>
              <p className="text-[14px] leading-[22px] m-0" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                Explore how we drive impactful results for our clients.
              </p>
              <div className="flex flex-col gap-[10px]">
                <div className="bg-white rounded-[15px] px-[14px] py-[12px] border border-[#C8C3C3]/40">
                  <span className="text-[18px] leading-[28px] text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Executive Summary</span>
                  <p className="text-[13px] leading-[20px] m-0 mt-[6px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                    MyRameswaramTrip is a region-focused digital platform designed to simplify and enhance pilgrimage and travel experiences in Rameswaram, Tamil Nadu.
                  </p>
                </div>
                <div className="bg-white rounded-[15px] px-[14px] py-[12px] border border-[#C8C3C3]/40">
                  <span className="text-[18px] leading-[28px] text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Research Purpose</span>
                  <p className="text-[13px] leading-[20px] m-0 mt-[6px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                    Understand the needs, behaviors, and pain points of key user groups including devotees, pandits, travel partners, and admin teams.
                  </p>
                </div>
                <div className="bg-white rounded-[15px] px-[14px] py-[12px] border border-[#C8C3C3]/40">
                  <span className="text-[18px] leading-[28px] text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>Key Insights</span>
                  <p className="text-[13px] leading-[20px] m-0 mt-[6px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                    Trust and spiritual dignity are critical for pandits. Partners value autonomy over automation. Clear dashboards reduce dependency on manual coordination.
                  </p>
                </div>
                <div className="bg-white rounded-[15px] px-[14px] py-[12px] border border-[#C8C3C3]/40">
                  <span className="text-[18px] leading-[28px] text-[#111111]" style={{ fontFamily: "SF Pro Display" }}>High-Level Recommendations</span>
                  <p className="text-[13px] leading-[20px] m-0 mt-[6px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                    Strengthen clarity across platforms, improve onboarding, enhance admin usability, reinforce trust signals, and preserve spiritual UX principles.
                  </p>
                </div>
              </div>
              <button className="self-start flex items-center gap-[6px] bg-white border border-[#a7a7a7] rounded-[109px] px-[20px] py-[12px] cursor-pointer" onClick={() => window.open('/research-report', '_blank')}>
                <span className="text-[#2F61FE] text-[14px] font-medium" style={{ fontFamily: "SF Pro Display" }}>Click here</span>
                <span className="text-[#000000] text-[14px] font-medium" style={{ fontFamily: "SF Pro Display" }}>&nbsp;to view the full research report</span>
              </button>
            </div>

            {/* MILESTONE */}
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
                    <img src="/assets/p4/images/vector_10.svg" alt="" className="absolute" />
                    <img src="/assets/p4/images/vector_11.svg" alt="" className="absolute left-[calc(100%*0.29)] top-[calc(100%*0.29)]" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-center text-[19.1px] font-normal leading-[26.70px] text-[rgba(17,17,17,1.00)]">Key Achievement</span>
                    <span className="text-center text-[13.3px] font-normal leading-[22.83px] text-[rgba(17,17,17,0.60)]">Improved information clarity and user navigation by structuring content around real user needs and journey flows.</span>
                  </div>
                </div>
                <div className="bg-white w-full flex flex-col items-center gap-[18px] p-[22px] rounded-[15.26px]">
                  <div className="relative h-[38.13px] w-[38.13px]">
                    <img src="/assets/p4/images/vector_12.svg" alt="" className="absolute" />
                    <img src="/assets/p4/images/vector_13.svg" alt="" className="absolute left-[calc(100%*0.39)] top-[calc(100%*0.29)]" />
                    <img src="/assets/p4/images/vector_14.svg" alt="" className="absolute left-[calc(100%*0.31)] top-[calc(100%*0.54)]" />
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
                        <img src="/assets/p4/images/vector_15.svg" alt="" style={{ width: 13, height: 10, filter: "brightness(0) invert(1)" }} />
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
                  <div className="absolute h-[181.00px] w-[146.00px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]" style={{ background: "url(/assets/p4/images/image_26_1.png) 100% / cover no-repeat" }}></div>
                </div>
              </div>
              <div className="absolute h-[46.34px] w-[235.98px] left-[calc(50%-118.00px)] top-[264.00px]">
                <div
                  onClick={() => navigate('/contact')}
                  className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[126.33px] left-[calc(50%-117.99px)] top-[calc(50%-23.17px)] rounded-[95.35px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-[7px]"
                >
                  <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.067px]">Contact</span>
                  <div className="flex items-center justify-center">
                    <img src="/assets/p4/images/vector_16.svg" alt="" style={{ width: 13, height: 10, filter: "brightness(0) invert(1)" }} />
                  </div>
                </div>
                <div
                  onClick={() => navigate('/portfolio4')}
                  className="absolute border h-[42.63px] w-[100.03px] top-[calc(50%-22.31px)] rounded-[95.35px] border-[#0161fe] border-solid left-[calc(50%+15.96px)] flex items-center justify-center cursor-pointer"
                >
                  <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.17px] tracking-[-0.067px]">Portfolio</span>
                </div>
              </div>
              <div className="absolute overflow-hidden h-[289.64px] w-[274.39px] rounded-[15.26px] border-[#8e8383]/20 border-solid border-[0.1px] left-[233.48px] top-[346.00px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-full w-full">
                  <div className="absolute h-[129.00px] w-[184.00px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]" style={{ background: "url(/assets/p4/images/image_10.png) 100% / cover no-repeat" }}></div>
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

export default Portfolio4;
