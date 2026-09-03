import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import PortfolioMetadata from "../components/PortfolioMetadata";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";

const DESIGN_HEIGHT = 4980;
const dynamicHeight = true;

const FAQDetails = () => {
  const [, navigate] = useLocation();

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT} dynamicHeight={dynamicHeight}>
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
              <button onClick={() => navigate('/contact')} style={{
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
            id="_240_245__Frame_1171277074"
            className="absolute h-auto w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          >
            <div
              id="_231_4684__Section"
              style={{
                position: 'relative',
                background: '#F6F7F9',
                height: 'auto', width: '100%',
                borderRadius: 20.4131,
                overflow: 'hidden',
                flexShrink: 0,
                paddingTop: 45,
                paddingBottom: 45,
              }}
            >
              <div
                id="_231_4686__Frame_1171277134"
                style={{
                  position: 'relative',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: 0, gap: 57,
                  width: 1331, margin: '0 auto',
                }}
              >
                <span
                  id="_231_4685__Heading_1___Operatio"
                  style={{
                    width: 1331, minHeight: 49,
                    fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400,
                    fontSize: 40.8113, lineHeight: '47px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', color: '#111111',
                    flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0,
                  }}
                >
                  Seamless Pilgrimage Planning with MyRameswaramTrip
                </span>

                <PortfolioMetadata />

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
              id="_240_295__Frame_1171276955"
              className="relative w-full flex flex-col justify-start items-start flex-nowrap gap-[30px]"
            >
              <div
                id="_240_296__Frame_1171276954"
                className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] w-full flex flex-col justify-start items-center flex-nowrap gap-2.5 px-[42px] py-[50px] rounded-[23px]"
              >
                <div
                  id="_240_297__Group_37"
                  className="relative h-auto w-full"
                >
                  <div
                    id="_240_298__Frame_196"
                    className="relative h-auto w-full flex flex-col justify-start items-start flex-nowrap gap-10"
                  >
                    <div
                      id="_240_299__Frame_195"
                      className="relative w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[30px]"
                    >
                      <div
                        id="_240_300__Border"
                        style={{
                          boxSizing: "border-box",
                          width: 229, height: 38,
                          border: "1px solid #202833",
                          borderRadius: 272.07,
                          position: "relative",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          id="_240_301__myrameswaramtrip"
                          style={{
                            position: "absolute",
                            width: 186, height: 14,
                            left: "calc(50% - 93.5px)",
                            top: "calc(50% - 7px)",
                            fontFamily: "'SF Pro Display'",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: "23px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "2.381px",
                            textTransform: "uppercase",
                            color: "#202833",
                            whiteSpace: "nowrap",
                          }}
                        >
                            myrameswaramtrip
                        </span>
                      </div>

                      <div
                        id="_240_302__Frame_194"
                        className="relative w-[calc(100%-0px-0px)] flex flex-row justify-between items-center"
                      >
                        <div
                          id="_240_303__Frame_193"
                          className="relative h-[71.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                        >
                          <span
                            id="_240_304__Heading_2___Explore_"
                            className="flex justify-start text-left items-center w-[770.00px] relative"
                          >
                            <span
                              className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[42.0px] font-normal leading-[45.00px]"
                            >
                              Seamless Pilgrimage Planning with MyRameswaramTrip
                            </span>
                          </span>
                        </div>


                      </div>
                    </div>

                    <div id="_240_311__Group_36" className="relative h-auto w-full">

                      {/* Overview — sits at the TOP of Project 1 section */}
                      <div
                        id="_240_428__Frame_1171277007"
                        className="relative h-auto w-full flex flex-col justify-start items-start flex-nowrap gap-2.5 mb-[40px]"
                      >
                        <div
                          id="_240_429__Paragraph_Background"
                          className="relative bg-[rgba(1,97,254,1.00)] h-auto min-h-[69.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[628px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_430__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_431__Overview"
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
                            id="_240_432__Frame_188"
                            className="relative h-[30.00px] w-[437.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_434__What_is_the_My_Rames"
                              className="flex justify-start text-left items-center h-[30.00px] w-[446.00px] relative"
                            >
                              <span
                                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                              >
                                What is the My Rameswaram Trip UX/UI project about?
                              </span>
                            </span>
                          </div>
                        </div>
                        <div
                          id="_240_435__Background"
                          className="relative bg-white h-auto w-full flex flex-row justify-start items-center flex-nowrap gap-6 p-[22px] rounded-[20px]"
                        >
                          <span
                            id="_240_436__This_project_focuses"
                            className="flex justify-start text-left items-center w-full relative"
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

                      <div
                        id="_240_312__Frame_1171277056"
                        className="relative h-auto w-full flex flex-col justify-start items-start flex-nowrap gap-[40px]"
                      >
                        <div
                          id="_240_313__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[56.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[461px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_314__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_315__UX_Research_Approach"
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
                            id="_240_316__Frame_188"
                            className="relative h-[30.00px] w-[539.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_317__What_UX_research_met"
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
                          id="_240_318__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[56.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_319__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_320__User_Problems_Identi"
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
                            id="_240_321__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_322__What_key_user_proble"
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
                          id="_240_323__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[56.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_324__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_325__User_Problems_Identi"
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
                            id="_240_326__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_327__What_key_user_proble"
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
                          id="_240_328__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[60.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_329__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_330__User_Problems_Identi"
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
                            id="_240_331__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_332__What_key_user_proble"
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
                          id="_240_333__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[56.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_334__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_335__User_Problems_Identi"
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
                            id="_240_336__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_337__What_key_user_proble"
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
                          id="_240_338__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[56.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_339__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_340__User_Problems_Identi"
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
                            id="_240_341__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_342__What_key_user_proble"
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
                          id="_240_343__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_344__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_345__User_Problems_Identi"
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
                            id="_240_346__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_347__What_key_user_proble"
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
                          id="_240_348__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_349__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_350__User_Problems_Identi"
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
                            id="_240_351__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_352__What_key_user_proble"
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
                          id="_240_353__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_354__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_355__User_Problems_Identi"
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
                            id="_240_356__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_357__What_key_user_proble"
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
                          id="_240_358__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_359__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_360__User_Problems_Identi"
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
                            id="_240_361__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_362__What_key_user_proble"
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
                          id="_240_363__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_364__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_365__User_Problems_Identi"
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
                            id="_240_366__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_367__What_key_user_proble"
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
                          id="_240_368__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_369__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_370__User_Problems_Identi"
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
                            id="_240_371__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_372__What_key_user_proble"
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
                          id="_240_373__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_374__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_375__User_Problems_Identi"
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
                            id="_240_376__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_377__What_key_user_proble"
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
                          id="_240_378__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_379__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_380__User_Problems_Identi"
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
                            id="_240_381__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_382__What_key_user_proble"
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
                          id="_240_383__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_384__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_385__User_Problems_Identi"
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
                            id="_240_386__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_387__What_key_user_proble"
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
                          id="_240_388__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_389__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_390__User_Problems_Identi"
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
                            id="_240_391__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_392__What_key_user_proble"
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
                          id="_240_393__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_394__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_395__User_Problems_Identi"
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
                            id="_240_396__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_397__What_key_user_proble"
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
                          id="_240_398__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_399__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_400__User_Problems_Identi"
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
                            id="_240_401__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_402__What_key_user_proble"
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
                          id="_240_403__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_404__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_405__User_Problems_Identi"
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
                            id="_240_406__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_407__What_key_user_proble"
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
                          id="_240_408__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_409__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_410__User_Problems_Identi"
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
                            id="_240_411__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_412__What_key_user_proble"
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
                          id="_240_413__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_414__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_415__User_Problems_Identi"
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
                            id="_240_416__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_417__What_key_user_proble"
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
                          id="_240_418__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_419__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_420__User_Problems_Identi"
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
                            id="_240_421__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_422__What_key_user_proble"
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
                          id="_240_423__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_424__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_425__User_Problems_Identi"
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
                            id="_240_426__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_427__What_key_user_proble"
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
                          id="_240_428__Paragraph_Background"
                          className="relative bg-white h-auto min-h-[57.00px] w-full flex flex-row justify-start items-center flex-nowrap gap-[446px] pl-[15px] py-[10px] rounded-[20px]"
                        >
                          <div
                            id="_240_429__Frame_189"
                            className="relative h-[37.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_430__User_Problems_Identi"
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
                            id="_240_431__Frame_188"
                            className="relative h-[30.00px] w-[527.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                          >
                            <span
                              id="_240_432__What_key_user_proble"
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
                      </div>


                    </div>
                  </div>
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
          <MobBanner iconSrc="/assets/faq-detailsmob/images/group.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[20px] pb-[20px]">

            {/* ── 1. HERO ── */}
            <div
              className="flex flex-col items-center w-full rounded-[22.88px] bg-[#F6F7F9]"
              style={{ paddingTop: 25, paddingBottom: 8, height: 502, boxSizing: "border-box", gap: 30 }}
            >
              {/* Title */}
              <span
                className="flex items-center text-center"
                style={{
                  width: 359, height: 208,
                  fontFamily: "'SF Pro Display', sans-serif",
                  fontWeight: 400, fontSize: 40.81, lineHeight: "52px",
                  color: "#111111",
                }}
              >
                My Rameswaram Trip &ndash; Travel &amp; Temple Service Platform
              </span>
              {/* White image card */}
              <div
                className="relative overflow-hidden"
                style={{ width: 359.74, height: 230.08, background: "#FFFFFF", borderRadius: 15.26, flexShrink: 0 }}
              >
                <img
                  src="/assets/faqmob/images/gemini_logo_removed_1.png"
                  alt="My Rameswaram Trip"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* ── 2. FAQ SECTION ── */}
            <div className="w-full rounded-[22.88px] bg-[#F6F7F9] flex flex-col items-center" style={{ paddingTop: 35.47, paddingBottom: 35 }}>
              <div className="flex flex-col items-center" style={{ width: 364, gap: 25 }}>

                {/* Badge */}
                <div className="relative flex items-center justify-center" style={{ width: 186, height: 32, border: "1px solid #202833", borderRadius: 228.83, boxSizing: "border-box", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: 1.716, textTransform: "uppercase", color: "#202833" }}>myrameswaramtrip</span>
                </div>

                {/* Heading */}
                <span style={{ width: 351, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 40, lineHeight: "46px", textAlign: "center", color: "#111111" }}>
                  Our Success Stories Real Results, Real Impact
                </span>

                {/* Overview blue card */}
                <div style={{ width: 364, background: "#0161FE", borderRadius: 15, paddingTop: 8.47, paddingBottom: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textTransform: "capitalize", color: "#FFFFFF" }}>Overview</span>
                  <span style={{ width: 322, fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 18.1, lineHeight: "27px", textAlign: "center", color: "#FFFFFF" }}>What is the My Rameswaram Trip UX/UI project about?</span>
                </div>

                {/* Answer box */}
                <div style={{ width: 347, background: "#FFFFFF", borderRadius: 15, padding: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ width: 327, fontFamily: "'SF Pro Rounded'", fontWeight: 400, fontSize: 15, lineHeight: "28px", textAlign: "center", textTransform: "capitalize", color: "#6D6D6E" }}>
                    This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.
                  </span>
                </div>

                {/* UX Research Approach */}
                <div style={{ width: 364, background: "#FFFFFF", borderRadius: 15, paddingTop: 8.47, paddingBottom: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <span style={{ width: 187, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", textTransform: "capitalize", color: "#000000" }}>UX Research Approach</span>
                  <span style={{ width: 322, fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 18.1, lineHeight: "27px", textAlign: "center", color: "rgba(17,17,17,0.6)" }}>What UX research methods were used in this project?</span>
                </div>

                {/* User Problems Identified × 8 */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} style={{ width: 364, background: "#FFFFFF", borderRadius: 15, paddingTop: 8, paddingBottom: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <span style={{ width: 247, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", textTransform: "capitalize", color: "#000000" }}>User Problems Identified</span>
                    <span style={{ width: 322, fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 18.1, lineHeight: "27px", textAlign: "center", color: "rgba(17,17,17,0.6)" }}>What key user problems did the research uncover?</span>
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
export default FAQDetails;
