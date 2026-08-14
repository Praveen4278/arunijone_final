import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import { BusinessEcosystemAndCapabilitiesSection } from "./about/sections/BusinessEcosystemAndCapabilitiesSection";


const DESIGN_HEIGHT = 5042;

const BlogDesktop = () => {

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66 }}>
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
                { label: 'Service', href: '/service', color: '#111111', w: 51 },
                { label: 'Blogs',   href: '/blog',    color: '#0161FE', w: 38 },
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
            <button style={{
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
          id="_236_945__Frame_1171277066"
          className="absolute h-[5450.00px] w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
        >
          <div
            id="_236_946__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[822.00px] w-full rounded-[23.686382293701172px]"
          >
            <span
              id="_236_947__Heading_1___Explore_"
              className="flex justify-start text-left items-center h-[57.00px] w-[350.00px] absolute left-[42.00px] top-[51.00px]"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-normal leading-[54.33px]"
              >
                Explore Products
              </span>
            </span>
            <span
              id="_236_948__Explore_a_wide_range"
              className="flex justify-start text-left items-center h-[57.00px] w-[498.00px] absolute left-[880.00px] top-[51.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
              >
                Explore a wide range of services crafted to support your vision.
                From digital design and marketing growth to industry-specific
                solutions, I provide the tools and expertise to help your
                business build, scale, and succeed.
              </span>
            </span>
            <div
              id="_236_949__Container"
              className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[75.55%] w-[94.08%] rounded-[23.686382293701172px] left-[calc(100%_*_0.03)] top-[calc(100%_*_0.19)]"
            ></div>
          </div>

          <BusinessEcosystemAndCapabilitiesSection />

          <div
            id="_236_960__Big_box"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[2808.00px] w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[60px] pt-[50px] pr-[49px] pb-[55px] pl-[49px] rounded-[23.686382293701172px] flex-none self-stretch flex-grow-0"
          >
            <div
              id="_236_961__Frame_129"
              className="relative h-[132.00px] w-[1322.00px] flex flex-col justify-start items-start flex-nowrap gap-[30px]"
            >
              <div
                id="_236_962__Border"
                className="relative flex flex-row justify-center items-center flex-nowrap gap-2.5 px-5 py-[9px] rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612788200378px]"
              >
                <span
                  id="_236_963__Projects"
                  className="flex justify-start text-left items-center h-[20.00px] w-[83.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719525814056396px] uppercase"
                  >
                    Projects
                  </span>
                </span>
              </div>

              <div
                id="_236_964__Frame_128"
                className="relative h-[64.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[511px]"
              >
                <div
                  id="_236_965__Frame_126"
                  className="relative h-[44.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                >
                  <span
                    id="_236_966__Heading_2___Our_Succ"
                    className="flex justify-start text-left items-center h-[69.00px] w-[377.00px] relative"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[35.0px] font-normal leading-[34.01px]"
                    >
                      Real Results. Real Impact. <br />
                      Our Success Stories.
                    </span>
                  </span>
                </div>

                <div
                  id="_236_967__Frame_127"
                  className="relative w-[393.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                >
                  <span
                    id="_236_968__Discover_how_my_UX_U"
                    className="flex justify-start text-left items-center h-[72.00px] w-[404.00px] relative"
                  >
                    <span
                      className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                    >
                      Discover how my UX/UI design, digital marketing, and
                      equity research projects deliver practical solutions,
                      solve real challenges, and create measurable outcomes.
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_236_969__Frame_1171276978"
              className="relative flex flex-col justify-start items-start flex-nowrap gap-[30px]"
            >
              <div
                id="_236_970__Frame_1171276976"
                className="relative h-[476.00px] w-[1323.00px]"
              >
                <div
                  id="_236_971__Frame_1171276940"
                  className="absolute h-[320.00px] w-[1320.01px] flex flex-row justify-start items-center flex-nowrap gap-[20px] left-[0.99px] top-[0.00px]"
                >
                  <div
                    id="_236_972__Frame_1171276973"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_973__Frame_1171276938"
                      className="absolute h-[320.00px] w-[426.67px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_974__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_236_975__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_236_976__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_236_977__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <div
                                id="_236_978__image_26"
                                className="absolute h-[222.00px] w-[180.00px] left-[calc(50%-89.62px)] top-[calc(50%-111.18px)]"
                                style={{
                                  background:
                                    "url(/assets/Home/images/image_26.png) 100% / cover no-repeat",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_979__Frame_1171276936"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_980__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_981__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_982__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_983__image_10"
                            className="absolute h-[136.00px] w-[193.00px] left-[calc(50%-96.29px)] top-[calc(50%-68.18px)]"
                            style={{
                              background:
                                "url(/assets/Home/images/image_10.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_984__Frame_1171276939"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_985__Frame_125"
                      className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_986__Image_Box"
                        className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                      >
                        <div
                          id="_236_987__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_236_988__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_236_989__Group_11"
                              src="/assets/blogs/images/group_11.svg"
                              alt="Group_11"
                              className="absolute left-[calc(100%_*_0.30)] top-[calc(100%_*_0.24)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_236_998__Frame_1171276975"
                  className="absolute h-[136.00px] w-[1321.00px] left-[-0.50px] flex flex-row justify-start items-start flex-nowrap gap-5 top-[340.00px]"
                >
                  <div
                    id="_236_999__Frame_124"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1000__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1001__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1002__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1003__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1004__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1005__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1006__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1007__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1008__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1009__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1010__Vector"
                                  src="/assets/blogs/images/vector_14.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1016__Frame_1171276942"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1017__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1018__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1019__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1020__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1021__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1022__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1023__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1024__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1025__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1026__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1027__Vector"
                                  src="/assets/blogs/images/vector_15.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1033__Frame_1171276943"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1034__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1035__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1036__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1037__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1038__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1039__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1040__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1041__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1042__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1043__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1044__Vector"
                                  src="/assets/blogs/images/vector_16.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
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
                id="_236_1050__Frame_1171276978"
                className="relative h-[476.00px] w-[1323.00px]"
              >
                <div
                  id="_236_1051__Frame_1171276940"
                  className="absolute h-[320.00px] w-[1320.01px] flex flex-row justify-start items-center flex-nowrap gap-[20px] left-[0.99px] top-[0.00px]"
                >
                  <div
                    id="_236_1052__Frame_1171276973"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1053__Frame_1171276938"
                      className="absolute h-[320.00px] w-[426.67px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1054__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_236_1055__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_236_1056__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_236_1057__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <div
                                id="_236_1058__image_47"
                                className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-182.62px)] top-[calc(50%-40.68px)]"
                                style={{
                                  background:
                                    "url(/assets/blogs/images/image_47.png) 100% / cover no-repeat",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1059__Frame_1171276936"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1060__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1061__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_1062__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_1063__image_63"
                            className="absolute h-[76.17px] w-[271.85px] left-[calc(50%-135.72px)] top-[calc(50%-38.27px)]"
                            style={{
                              background:
                                "url(/assets/blogs/images/image_63.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1064__Frame_1171276939"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1065__Frame_125"
                      className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1066__Image_Box"
                        className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                      >
                        <div
                          id="_236_1067__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_236_1068__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_236_1070__Vector"
                              src="/assets/blogs/images/vector_17.svg"
                              alt="Vector"
                              className="absolute left-[99.22px] top-[122.60px]"
                            />
                            <span
                              id="_236_1071__Resora"
                              className="flex justify-start text-left items-start h-[58.00px] w-[136.00px] absolute left-[176.52px] top-[126.04px]"
                            >
                              <span>
                                <span
                                  className="whitespace-nowrap bg-[rgba(31,100,255,1.00)] bg-clip-text text-transparent not-italic text-[38.86934280395508px] font-semibold"
                                >
                                  R
                                </span>
                                <span
                                  className="whitespace-nowrap bg-[rgba(31,100,255,1.00)] bg-clip-text text-transparent not-italic text-[38.86934280395508px] font-medium"
                                >
                                  e
                                </span>
                                <span
                                  className="whitespace-nowrap bg-black bg-clip-text text-transparent not-italic text-[38.86934280395508px] font-medium"
                                >
                                  sora
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_236_1072__Frame_1171276975"
                  className="absolute h-[136.00px] w-[1321.00px] left-[-0.50px] flex flex-row justify-start items-start flex-nowrap gap-5 top-[340.00px]"
                >
                  <div
                    id="_236_1073__Frame_124"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1074__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1075__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1076__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1077__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1078__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1079__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1080__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1081__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1082__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1083__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1084__Vector"
                                  src="/assets/blogs/images/vector_18.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1090__Frame_1171276942"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1091__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1092__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1093__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1094__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1095__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1096__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1097__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1098__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1099__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1100__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1101__Vector"
                                  src="/assets/blogs/images/vector_19.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1107__Frame_1171276943"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1108__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1109__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1110__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1111__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1112__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1113__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1114__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1115__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1116__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1117__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1118__Vector"
                                  src="/assets/blogs/images/vector_20.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
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
                id="_236_1124__Frame_1171276977"
                className="relative h-[476.00px] w-[1323.00px]"
              >
                <div
                  id="_236_1125__Frame_1171276940"
                  className="absolute h-[320.00px] w-[1320.01px] flex flex-row justify-start items-center flex-nowrap gap-[20px] left-[0.99px] top-[0.00px]"
                >
                  <div
                    id="_236_1126__Frame_1171276973"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1127__Frame_1171276938"
                      className="absolute h-[320.00px] w-[426.67px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1128__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_236_1129__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                         
                              <div
                                id="_236_1132__image_242"
                                className="absolute h-[199.00px] w-[184.00px] left-[calc(50%-91.62px)] top-[calc(50%-99.68px)]"
                                style={{
                                  background:
                                    "url(/assets/products/images/image_242.png) 100% / cover no-repeat",
                                }}
                              ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1133__Frame_1171276936"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1134__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1135__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_1136__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_1137__image_1"
                            className="absolute h-[133.00px] w-[168.00px] left-[calc(50%-84.14px)] top-[calc(50%-66.68px)]"
                            style={{
                              background:
                                "url(/assets/blogs/images/image_1.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1138__Frame_1171276939"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1139__Frame_125"
                      className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1140__Image_Box"
                        className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                      >
                        <div
                          id="_236_1141__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_236_1142__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_236_1143__Group_1000008334"
                              src="/assets/blogs/images/group_1000008334.svg"
                              alt="Group_1000008334"
                              className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.20)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_236_1146__Frame_1171276975"
                  className="absolute h-[136.00px] w-[1321.00px] left-[-0.50px] flex flex-row justify-start items-start flex-nowrap gap-5 top-[340.00px]"
                >
                  <div
                    id="_236_1147__Frame_124"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1148__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1149__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1150__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1151__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1152__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1153__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1154__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1155__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1156__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1157__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1158__Vector"
                                  src="/assets/blogs/images/vector_21.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1164__Frame_1171276942"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1165__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1166__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1167__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1168__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1169__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1170__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1171__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1172__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1173__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1174__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1175__Vector"
                                  src="/assets/blogs/images/vector_22.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1181__Frame_1171276943"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1182__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1183__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1184__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1185__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1186__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1187__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1188__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1189__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1190__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1191__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1192__Vector"
                                  src="/assets/blogs/images/vector_23.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
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
                id="_236_1198__Frame_1171276979"
                className="relative h-[476.00px] w-[1323.00px]"
              >
                <div
                  id="_236_1199__Frame_1171276940"
                  className="absolute h-[320.00px] w-[1320.01px] flex flex-row justify-start items-center flex-nowrap gap-[20px] left-[0.99px] top-[0.00px]"
                >
                  <div
                    id="_236_1200__Frame_1171276973"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1201__Frame_1171276938"
                      className="absolute h-[320.00px] w-[426.67px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1202__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_236_1203__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_236_1204__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_236_1205__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <div
                                id="_236_1206__image_247"
                                className="absolute h-[84.00px] w-[185.00px] left-[calc(50%-92.47px)] top-[calc(50%-42.18px)] rounded-[89px]"
                                style={{
                                  background:
                                    "url(/assets/blogs/images/image_247.png) 100% / cover no-repeat",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1207__Frame_1171276936"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1208__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1209__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_1210__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_1211__image_15"
                            className="absolute h-[90.00px] w-[243.00px] left-[calc(50%-121.29px)] top-[calc(50%-45.18px)]"
                            style={{
                              background:
                                "url(/assets/blogs/images/image_15.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1212__Frame_1171276939"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1213__Frame_125"
                      className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1214__Image_Box"
                        className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                      >
                        <div
                          id="_236_1215__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_236_1216__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <div
                              id="_236_1217__Screenshot_2025-12-1"
                              className="absolute h-[109.00px] w-[268.00px] left-[calc(50%-133.96px)] top-[calc(50%-54.18px)] rounded-[45px]"
                              style={{
                                background:
                                "url(/assets/products/images/screenshot_20251219_at_103139_pm_1.png) 100% / cover no-repeat"
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_236_1218__Frame_1171276975"
                  className="absolute h-[136.00px] w-[1321.00px] left-[-0.50px] flex flex-row justify-start items-start flex-nowrap gap-5 top-[340.00px]"
                >
                  <div
                    id="_236_1219__Frame_124"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1220__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1221__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1222__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1223__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1224__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1225__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1226__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1227__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1228__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1229__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1230__Vector"
                                  src="/assets/blogs/images/vector_24.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1236__Frame_1171276942"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1237__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1238__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1239__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1240__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1241__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1242__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1243__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1244__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1245__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1246__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1247__Vector"
                                  src="/assets/blogs/images/vector_25.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1253__Frame_1171276943"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1254__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1255__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1256__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1257__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1258__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1259__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1260__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1261__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1262__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1263__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1264__Vector"
                                  src="/assets/blogs/images/vector_26.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
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
                id="_236_1270__Frame_1171276980"
                className="relative h-[476.00px] w-[1323.00px]"
              >
                <div
                  id="_236_1271__Frame_1171276940"
                  className="absolute h-[320.00px] w-[1320.01px] flex flex-row justify-start items-center flex-nowrap gap-[20px] left-[0.99px] top-[0.00px]"
                >
                  <div
                    id="_236_1272__Frame_1171276974"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1273__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1274__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_1275__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_1276__image-removebg-previ"
                            className="absolute h-[200.00px] w-[204.00px] left-[calc(50%-101.79px)] top-[calc(50%-100.18px)]"
                            style={{
                              background:
                                "url(/assets/products/images/imageremovebgpreview_4.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1277__Frame_1171276936"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1278__Image_Box"
                      className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_236_1279__Frame_103"
                        className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                      >
                        <div
                          id="_236_1280__Frame_104"
                          className="relative h-[306.00px] w-full"
                        >
                          <div
                            id="_236_1281__image_248"
                            className="absolute h-[200.00px] w-[210.00px] left-[calc(50%-104.79px)] top-[calc(50%-100.18px)]"
                            style={{
                              background:
                                "url(/assets/products/images/image_248.png) 100% / cover no-repeat",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1282__Frame_1171276939"
                    className="relative h-[320.00px] w-[426.67px]"
                  >
                    <div
                      id="_236_1283__Frame_125"
                      className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                    ></div>
                  </div>
                </div>

                <div
                  id="_236_1284__Frame_1171276975"
                  className="absolute h-[136.00px] w-[1321.00px] left-[-0.50px] flex flex-row justify-start items-start flex-nowrap gap-5 top-[340.00px]"
                >
                  <div
                    id="_236_1285__Frame_1171276994"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1286__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1287__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1288__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1289__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1290__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1291__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1292__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1293__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1294__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1295__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1296__Vector"
                                  src="/assets/blogs/images/vector_27.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1302__Frame_1171276942"
                    className="relative h-[136.00px] w-[427.00px] flex flex-col justify-start items-start flex-nowrap gap-5"
                  >
                    <div
                      id="_236_1303__Frame_122"
                      className="relative h-[70.00px] w-full flex flex-col justify-start items-start flex-nowrap gap-[15px] px-2.5 py-0"
                    >
                      <div
                        id="_236_1304__Frame_120"
                        className="relative h-[70.00px] w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[5px]"
                      >
                        <span
                          id="_236_1305__Tuna_Fish_Guide__Qua"
                          className="flex justify-center text-center items-center h-[70.00px] w-full relative"
                        >
                          <span
                            className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[25.0px] font-normal leading-[35.00px]"
                          >
                            Tuna Fish Guide: Quality, Processing, and Global
                            Demand
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_236_1306__Frame_1171276974"
                      className="relative h-[46.00px] w-full"
                    >
                      <div
                        id="_236_1307__Frame_126"
                        className="relative h-[46.00px] w-full flex flex-row justify-center items-center top-[0.00px]"
                      >
                        <div
                          id="_236_1308__Group_3"
                          className="relative h-[46.00px] w-[132.78px]"
                        >
                          <div
                            id="_236_1309__Background"
                            className="relative bg-[rgba(1,97,254,1.00)] h-auto w-auto flex flex-row justify-center items-center flex-nowrap px-[21px] py-[11px] rounded-[98.68194580078125px]"
                          >
                            <div
                              id="_236_1310__Frame_256"
                              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                            >
                              <span
                                id="_236_1311__Explore"
                                className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative"
                              >
                                <span
                                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                                >
                                  Explore
                                </span>
                              </span>
                              <div
                                id="_236_1312__Img"
                                className="relative h-[19.89px] w-[18.94px]"
                              >
                                <img
                                  id="_236_1313__Vector"
                                  src="/assets/blogs/images/vector_28.svg"
                                  alt="Vector"
                                  className="absolute top-[calc(100%_*_0.07)]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_236_1319__Frame_1171276993"
                    className="relative h-[136.00px] w-[427.00px]"
                  ></div>
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
        <MobBanner iconSrc="/assets/homemob/images/group_5.svg" />
        <div className="w-[calc(100%-16px)] flex flex-col gap-[25px] mx-auto pt-[20px] pb-[20px]">

          {/* HERO */}
          <div className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22px] flex flex-col items-center pt-[24px] pb-[24px] gap-[16px]">
            <h1 className="text-center text-[46px] leading-[54px] text-[#111111] m-0 px-[16px]" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>Explore Blogs</h1>
            <p className="text-center text-[16px] leading-[24px] m-0 px-[16px] max-w-[320px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
              We offer a comprehensive range of services designed to meet the unique needs of your business. From strategy development to risk management, our expert team is dedicated to driving your success.
            </p>
            <div className="relative overflow-hidden bg-white w-[calc(100%-16px)] rounded-[15px]" style={{ height: 230 }} />
          </div>

          {/* Business Ecosystem */}
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
                        <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white rounded-[18.53px]">
                          <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/></svg>
                          </div>
                          <span className="text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Services</span>
                        </div>
                      </div>
                      {/* Row 2 */}
                      <div className="flex flex-row items-center gap-[10px] w-[132px] h-[60px]">
                        <div className="flex flex-row items-center px-[17.62px] py-[12.48px] gap-[17.62px] h-[60px] bg-white rounded-[17.39px]">
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

          {/* Core Capabilities & Expertise */}
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
                <div className="flex flex-col items-center gap-[10px] w-[360px]">
                  <div className="flex flex-col items-center gap-[15px] w-full px-[20px]">
                    {/* Row 1: Research + Design */}
                    <div className="flex flex-row items-center gap-[15px] h-[60.81px]">
                      <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-[#0161FE] rounded-[18.53px]">
                        <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[rgba(255,255,255,0.3)] rounded-[29.73px] flex items-center justify-center">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m6 16h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4m-3 0v20M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-normal leading-[24px] capitalize text-white" style={{ fontFamily: "SF Pro Display" }}>Research</span>
                      </div>
                      <div className="flex flex-row items-center px-[18.78px] py-[13.3px] gap-[18.78px] h-[60.81px] bg-white rounded-[18.53px]">
                        <div className="w-[34.21px] h-[34.21px] flex-shrink-0 bg-[#0161FE] rounded-[29.73px] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/></svg>
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-normal leading-[22px] capitalize text-[#0161FE]" style={{ fontFamily: "SF Pro Display" }}>Design</span>
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

          {/* BLOG CARDS */}
          <div className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22px] flex flex-col gap-[25px] px-[8px] pt-[38px] pb-[30px]">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="border border-[#202833] rounded-[228px] px-[16px] py-[8px]">
                <span className="text-[12px] font-medium tracking-[1.7px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>Case Studies</span>
              </div>
            </div>
            {/* Heading */}
            <div className="flex justify-center px-[8px]">
              <span className="text-center text-[34px] leading-[38px] text-[#111111]" style={{ fontFamily: "SF Pro Display", fontWeight: 400 }}>
                Real Results. Real Impact.<br />Our Success Stories
              </span>
            </div>
            {/* Description */}
            <div className="flex justify-center px-[8px]">
              <span className="text-center text-[16px] leading-[23px]" style={{ fontFamily: "SF Pro Display", color: "rgba(109,109,110,0.8)" }}>
                Explore how we drive impactful results for our clients.
              </span>
            </div>
            {/* Cards */}
            <div className="flex flex-col gap-[25px]">
              {[
                { img: "/assets/bl/images/image_26.png",    imgH: 195, imgW: 157, title: "My Rameswaram Trip: Book Pandits & Temple Services with Our New Website" },
                { img: "/assets/bl/images/image_10.png",    imgH: 123, imgW: 174, title: "Seafsoft: The Ultimate Seafood Inventory System for Export Success" },
                { img: "/assets/bl/images/image_1.png",     imgH: 133, imgW: 168, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_242.png",   imgH: 159, imgW: 148, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_47.png",    imgH: 79,  imgW: 356, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_63.png",    imgH: 76,  imgW: 272, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_247.png",   imgH: 84,  imgW: 185, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_15.png",    imgH: 90,  imgW: 243, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/screenshot_20251219_at_103139_pm_1.png", imgH: 89, imgW: 219, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
                { img: "/assets/bl/images/image_248.png",   imgH: 152, imgW: 160, title: "Tuna Fish Guide: Quality, Processing, and Global Demand" },
              ].map((card, i) => (
                <div key={i} className="flex flex-col gap-[25px]">
                  {/* Image container */}
                  <div className="relative overflow-hidden bg-white w-full rounded-[15px] flex items-center justify-center" style={{ height: 230 }}>
                    <div style={{
                      height: card.imgH, width: card.imgW,
                      background: `url(${card.img}) 100% / cover no-repeat`,
                      position: "absolute",
                      left: `calc(50% - ${card.imgW / 2}px)`,
                      top: `calc(50% - ${card.imgH / 2}px)`,
                    }} />
                  </div>
                  {/* Title */}
                  <div className="flex justify-center px-[7px]">
                    <span className="text-center text-[24px] leading-[30.5px]" style={{ fontFamily: "SF Pro Display", color: "rgba(17,17,17,0.8)" }}>
                      {card.title}
                    </span>
                  </div>
                  {/* Explore button */}
                  <div className="flex justify-center">
                    <div className="bg-[#0161FE] flex items-center gap-[5px] px-[18px] py-[11px] rounded-[86px]">
                      <span className="text-white text-[13.8px] font-medium" style={{ fontFamily: "SF Pro Display" }}>Explore</span>
                      <img src="/assets/bl/images/vector_10.svg" alt="" style={{ height: 17, width: 17 }} />
                    </div>
                  </div>
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
export default BlogDesktop;


