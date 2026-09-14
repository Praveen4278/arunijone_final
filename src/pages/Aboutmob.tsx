import React from "react";
import { useNavigate } from "react-router-dom";
import MobBanner from "../components/MobBanner";
import MobServiceCategories from "../components/MobServiceCategories";
import MobFooter from "../components/MobFooter";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="_274_1225__About"
        className="relative overflow-hidden bg-white w-full min-h-screen flex flex-col"
      >
        <MobBanner iconSrc="/assets/homemob/images/group_2.svg" />

        <div
          id="_274_1235__Frame_1171277011"
          className="w-[calc(100%-16px)] mx-auto flex flex-col items-center gap-[25px] mt-[78px]"
        >
          <div
            id="_274_1236__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-auto w-full rounded-[20px] py-6 px-4 flex flex-col items-center text-center"
          >
            <span
              id="_274_1237__Heading_1___Expert_g"
              className="text-[54px] font-normal leading-[61.24px] text-[#111] max-w-[356px] mt-6"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[54.0px] font-normal leading-[61.24px]"

              >
                Expert
                <br />
                guidance,
                <br />
                tailored solution
              </span>
            </span>
            <span
              id="_274_1238__Adapt_easily_and_sca"
              className="text-[16px] font-normal leading-[20.41px] text-[rgba(109,109,110,0.80)] max-w-[299px] mt-4"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"

              >
                Adapt easily and scale confidently with a flexible system
                designed to support your business at every stage of growth.
              </span>
            </span>
            <div
              id="_274_1239__Frame_308"
              className="flex justify-center gap-x-4 mt-8"
            >
              <div
                id="_274_1240__Link"
                className="bg-[#0161fe] h-[46.34px] w-[126.33px] rounded-[95.3499984741211px] border-0 flex items-center justify-center"
                onClick={() => navigate('/contact')}
              >
                <div
                  id="_274_1241__Container"
                  className="overflow-hidden h-[calc(100%-6.09px)] w-[50.08px] flex items-center justify-center"
                >
                  <span
                    id="_274_1242__Contact"
                    className="text-center text-[13.4px] font-medium leading-[20.14px] tracking-[-0.067px] text-white"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      Contact
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1243__Frame_254"
                  className="flex items-center gap-[7px]"
                >
                  <span
                    id="_274_1244__Contact"
                    className="text-center text-[14px] font-medium leading-[20.14px] tracking-[-0.067px] text-white"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}

                    >
                      Contact
                    </span>
                  </span>
                  <div
                    id="_274_1245__67a22e78f02af13d518a"
                    className="relative overflow-hidden h-[22.88px] w-[22.88px]"
                  >
                    <div
                      id="_274_1246__67a22e78f02af13d518a"
                      className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_274_1247__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                      >
                        <img
                          id="_274_1248__Vector"
                          src="/assets/homemob/images/vector_35.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_274_1249__Background"
                className="bg-[rgba(37,211,102,1.00)] h-[46.34px] w-[142px] flex items-center justify-center gap-2.5 px-[18px] py-[13px] rounded-[95.3499984741211px]"
              >
                <div
                  id="_274_1250__whatsapp-business-ap"
                  className="overflow-hidden h-[24px] w-[23px]"
                >
                  <img
                    id="_274_1251__Group"
                    src="/assets/homemob/images/group_3.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                  />
                </div>

                <span
                  id="_274_1255__WhatsApp"
                  className="text-left text-[15px] font-semibold leading-[21.62px] text-white"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.0px] font-semibold leading-[21.62px] capitalize"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    WhatsApp
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full mt-8">
              {/* Left Column */}
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <div className="h-[247px] w-full rounded-[15px] overflow-hidden">
                    <img
                      src="/assets/about/images/image 262.webp"
                      alt=""
                      className="h-full w-full object-cover rounded-[15px]"
                    />
                  </div>
                  <div className="h-[247px] w-full bg-[#232323] rounded-[15px] p-4 text-white">
                    <div className="relative h-[38.13px] w-[38.13px]">
                      <img src="/assets/homemob/images/vector_36.svg" alt="Vector" className="h-[38px] w-[38px]" />
                    </div>
                    <div className="text-[45.8px] font-normal leading-[53.36px] mt-4">3+</div>
                    <p className="text-[14px] leading-[20px] mt-2">
                      Driving growth through innovation, insights, and research to
                      enhance digital presence and products.
                    </p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="flex flex-col gap-2">
                  <div className="h-[247px] w-full bg-[#0161fe] rounded-[15px] p-4 text-white">
                    <p className="text-[14px] leading-[20px]">
                      Adaptability that helps you scale confidently with a flexible
                      system built to support your growth at every stage.
                    </p>
                    <div className="text-[45.8px] font-normal leading-[54.92px] mt-16">95%</div>
                  </div>
                  <div className="h-[247px] w-full rounded-[15px] overflow-hidden">
                    <img
                      src="/assets/about/images/image 263.webp"
                      alt=""
                      className="h-full w-full object-cover rounded-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1271__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-auto w-full rounded-[22.8799991607666px] py-6 px-4 flex flex-col items-center text-center"
          >
            <div
              id="_274_1272__Frame_94"
              className="h-[30px] w-[158px] flex justify-center"
            >
              <div
                id="_274_1273__Border"
                className="border h-[12px] w-[126px] flex items-center justify-center px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1274__project_regions"
                  className="text-center text-[12px] font-medium leading-[14px] tracking-[1.715999960899353px] uppercase text-[#202833]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    project regions
                  </span>
                </span>
              </div>
            </div>

            <span
              id="_274_1275__Heading_2___Comprehe"
              className="flex justify-center text-center items-center h-[118.00px] w-[275.00px] absolute left-[calc(50%-136.50px)] top-[90.00px]"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"

              >
                Solutions built for businesses across regions.
              </span>
            </span>
            <div
              id="_274_1276__Choice_Box"
              className="flex flex-col items-center gap-2.5 w-full mt-6"
            >
              <div
                id="_274_1277__Background"
                className="h-[101px] w-[calc(100%-40px)] flex justify-center items-start gap-[7px] pt-0 pb-[23px] px-5 rounded-[15.260000228881836px]"
              >
                <div
                  id="_274_1278__Frame_185"
                  className="h-[124px] w-[344px] flex flex-col items-center gap-2.5"
                >
                  <div
                    id="_274_1279__Frame_1171276958"
                    className="w-[302px] flex justify-start items-start gap-2.5"
                  >
                    <div
                      id="_274_1280__Frame_177"
                      className="h-[57.07px] w-[136px] flex items-center gap-2.5"
                    >
                      <div
                        id="_274_1281__Mob_website_button"
                        className="bg-[#0161fe] h-[33.07px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px]"
                      >
                        <div
                          id="I274_1281_13_12958__SVG"
                        className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                        >
                          <div
                            id="I274_1281_13_12959__SVG"
                          className="absolute bg-[rgba(77,144,254,1.00)] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
                          >
                            <img
                              id="I274_1281_13_12960__Vector"
                              src="/assets/homemob/images/vector_39.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.67)]"
                            />
                            <img
                              id="I274_1281_13_12961__Vector"
                              src="/assets/homemob/images/vector_40.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.25)]"
                            />
                            <img
                              id="I274_1281_13_12962__Vector"
                              src="/assets/homemob/images/vector_41.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                            />
                            <img
                              id="I274_1281_13_12963__Vector"
                              src="/assets/homemob/images/vector_42.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.62)] top-[calc(100%_*_0.50)]"
                            />
                          </div>
                        </div>

                        <span
                          id="I274_1281_13_12964__Website"
                          className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-white"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                            style={{
                              fontFamily: "SF Pro Display",
                            }}
                          >
                            Website
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_274_1282__Frame_177"
                      className="h-[57.07px] w-[156px] flex items-center gap-2.5"
                    >
                      <div
                        id="_274_1283__Mobile_App_Button"
                        className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                      >
                        <div
                          id="I274_1283_13_12997__SVG"
                          className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                        >
                          <img
                            id="I274_1283_13_12998__Vector"
                            src="/assets/homemob/images/vector_43.svg"
                            alt="Vector"
                            className="absolute left-[calc(50%-7.68px)] top-[calc(50%-7.43px)]"
                          />
                        </div>

                        <span
                          id="I274_1283_13_12999__Application"
                          className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                            style={{
                              fontFamily: "SF Pro Display",
                            }}
                          >
                            Application
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_274_1284__Frame_1171276960"
                    className="w-[324px] flex justify-start items-start gap-2.5"
                  >
                    <div
                      id="_274_1285__Mobile_SAAS_Button"
                      className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1285_13_13003__SVG"
                        className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <div
                          id="I274_1285_13_13004__SVG"
                          className="absolute bg-[#0161fe] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
                        >
                          <img
                            id="I274_1285_13_13005__Vector"
                            src="/assets/homemob/images/vector_44.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.67)]"
                          />
                          <img
                            id="I274_1285_13_13006__Vector"
                            src="/assets/homemob/images/vector_45.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.25)]"
                          />
                          <img
                            id="I274_1285_13_13007__Vector"
                            src="/assets/homemob/images/vector_46.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                          />
                          <img
                            id="I274_1285_13_13008__Vector"
                            src="/assets/homemob/images/vector_47.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.62)] top-[calc(100%_*_0.50)]"
                          />
                        </div>
                      </div>

                      <span
                        id="I274_1285_13_13009__Says"
                        className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                          style={{
                            fontFamily: "SF Pro Display",
                          }}
                        >
                          Says
                        </span>
                      </span>
                    </div>

                    <div
                      id="_274_1286__Mobile_Admin_Button"
                      className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1286_13_13013__SVG"
                        className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <img
                          id="I274_1286_13_13014__Vector"
                          src="/assets/homemob/images/vector_48.svg"
                          alt="Vector"
                          className="absolute left-[calc(50%-7.68px)] top-[calc(50%-7.43px)]"
                        />
                      </div>

                      <span
                        id="I274_1286_13_13015__Admin_Dashborad"
                          className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                          style={{
                            fontFamily: "SF Pro Display",
                          }}
                        >
                          Admin Dashborad
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <img src="/assets/homemob/images/group_4.svg" alt="Group" className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="w-full mt-6">
            <MobServiceCategories />
          </div>

          <div
            id="_274_1305__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-auto w-[calc(100%-16px)] mx-auto flex flex-col items-center gap-[11px] px-2 py-[14px] rounded-[22.8799991607666px] mt-6"
          >
            <div
              id="_274_1306__Frame_94"
              className="h-[24px] w-full flex justify-center"
            >
              <div
                id="_274_1307__Border"
                className="border h-[14px] w-[99px] flex items-center justify-center px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1308__Tools_i_know"
                  className="text-center text-[12px] font-medium leading-[14px] tracking-[1.715999960899353px] uppercase text-[#202833]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Tools i know
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_274_1309__Frame_95"
              className="w-full flex flex-col items-center gap-[11px] mt-3"
            >
              <div
                id="_274_1311__Frame_184"
                className="h-[60.81px] w-[278px] flex justify-start items-start gap-2.5"
              >
                <div
                  id="_274_1312__Background"
                  className="bg-white h-[32.81px] flex items-center gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1313__SVG"
                    className="bg-[#0161fe] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                  >
                    <img
                      id="_274_1314__Vector"
                      src="/assets/homemob/images/vector_59.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-6.88px)] top-[calc(50%-9.41px)]"
                    />
                  </div>

                  <span
                    id="_274_1315__Figma"
                    className="text-left text-[16px] font-normal leading-[22px] capitalize text-[#0161fe]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Figma
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1316__Background"
                  className="bg-white h-[32.81px] flex items-center gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1317__SVG"
                    className="bg-[#0161fe] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                  >
                    <div
                      id="_274_1318__lineicons_canva"
                      className="overflow-hidden h-[24px] w-[24px]"
                    >
                      <img
                        id="_274_1319__Vector"
                        src="/assets/homemob/images/vector_60.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.37)]"
                      />
                    </div>
                  </div>

                  <span
                    id="_274_1320__Canva"
                    className="text-left text-[16px] font-normal leading-[22px] capitalize text-[#0161fe]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Canva
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1321__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-auto w-[calc(100%-16px)] mx-auto flex flex-col items-center gap-[11px] px-2 py-[14px] rounded-[22.8799991607666px] mt-6"
          >
            <div
              id="_274_1322__Frame_94"
              className="h-[24px] w-full flex justify-center"
            >
              <div
                id="_274_1323__Border"
                className="border h-[14px] w-[100px] flex items-center justify-center px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1324__Skills_i_know"
                  className="text-center text-[12px] font-medium leading-[14px] tracking-[1.715999960899353px] uppercase text-[#202833]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Skills i know
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_274_1325__Frame_95"
              className="w-full flex flex-col items-center gap-[11px] mt-3"
            >
              <div
                id="_274_1327__Frame_184"
                className="h-[60.81px] w-[278px] flex justify-start items-start gap-2.5"
              >
                <div
                  id="_274_1328__Background"
                  className="bg-white h-[32.81px] flex items-center gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1329__SVG"
                    className="bg-[#0161fe] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                  >
                    <img
                      id="_274_1330__Vector"
                      src="/assets/homemob/images/vector_61.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-6.88px)] top-[calc(50%-9.41px)]"
                    />
                  </div>

                  <span
                    id="_274_1331__Figma"
                    className="text-left text-[16px] font-normal leading-[22px] capitalize text-[#0161fe]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Figma
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1332__Background"
                  className="bg-white h-[32.81px] flex items-center gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1333__SVG"
                    className="bg-[#0161fe] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                  >
                    <div
                      id="_274_1334__lineicons_canva"
                      className="overflow-hidden h-[24px] w-[24px]"
                    >
                      <img
                        id="_274_1335__Vector"
                        src="/assets/homemob/images/vector_62.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.08)] top-[calc(100%_*_0.37)]"
                      />
                    </div>
                  </div>

                  <span
                    id="_274_1336__Canva"
                    className="text-left text-[16px] font-normal leading-[22px] capitalize text-[#0161fe]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Canva
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1337__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-auto w-full rounded-[20px] py-6 px-4 flex flex-col items-center text-center mt-6"
          >
            <div
              id="_274_1338__Frame_94"
              className="h-[30px] w-[155px] flex justify-center"
            >
              <div
                id="_274_1339__Border"
                className="border h-[12px] w-[120px] flex items-center justify-center px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1340__Project_Galary"
                  className="text-center text-[12px] font-medium leading-[14px] tracking-[1.715999960899353px] uppercase text-[#202833]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Project Galary
                  </span>
                </span>
              </div>
            </div>

            <span
              id="_274_1341__Heading_2___Comprehe"
              className="flex justify-center text-center items-center h-[142px] w-[275px] text-[34px] font-normal leading-[38px] text-[#111] max-w-[275px] mt-6"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"

              >
                A showcase of projects crafted for real business needs.
              </span>
            </span>
            <div
              id="_274_1342__Choice_Box"
              className="flex flex-col items-center gap-2.5 w-full mt-6"
            >
              <div
                id="_274_1343__Background"
                className="h-[101px] w-[calc(100%-40px)] flex justify-center items-start gap-[7px] pt-0 pb-[23px] px-5 rounded-[15.260000228881836px]"
              >
                <div
                  id="_274_1344__Frame_185"
                  className="h-[124px] w-[344px] flex flex-col items-center gap-2.5"
                >
                  <div
                    id="_274_1345__Frame_1171276958"
                    className="w-[302px] flex justify-start items-start gap-2.5"
                  >
                    <div
                      id="_274_1346__Frame_177"
                      className="h-[57.07px] w-[136px] flex items-center gap-2.5"
                    >
                      <div
                        id="_274_1347__Mob_website_button"
                        className="bg-[#0161fe] h-[33.07px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px]"
                      >
                        <div
                          id="I274_1347_13_12958__SVG"
                          className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                        >
                          <div
                            id="I274_1347_13_12959__SVG"
                            className="absolute bg-[rgba(77,144,254,1.00)] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
                          >
                            <img
                              id="I274_1347_13_12960__Vector"
                              src="/assets/homemob/images/vector_63.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.67)]"
                            />
                            <img
                              id="I274_1347_13_12961__Vector"
                              src="/assets/homemob/images/vector_64.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.25)]"
                            />
                            <img
                              id="I274_1347_13_12962__Vector"
                              src="/assets/homemob/images/vector_65.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                            />
                            <img
                              id="I274_1347_13_12963__Vector"
                              src="/assets/homemob/images/vector_66.svg"
                              alt="Vector"
                              className="absolute left-[calc(100%_*_0.62)] top-[calc(100%_*_0.50)]"
                            />
                          </div>
                        </div>

                        <span
                          id="I274_1347_13_12964__Website"
                          className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-white"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                            style={{
                              fontFamily: "SF Pro Display",
                            }}
                          >
                            Website
                          </span>
                        </span>
                      </div>
                    </div>

                    <div
                      id="_274_1348__Frame_177"
                      className="h-[57.07px] w-[156px] flex items-center gap-2.5"
                    >
                      <div
                        id="_274_1349__Mobile_App_Button"
                        className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                      >
                        <div
                          id="I274_1349_13_12997__SVG"
                          className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                        >
                          <img
                            id="I274_1349_13_12998__Vector"
                            src="/assets/homemob/images/vector_67.svg"
                            alt="Vector"
                            className="absolute left-[calc(50%-7.68px)] top-[calc(50%-7.43px)]"
                          />
                        </div>

                        <span
                          id="I274_1349_13_12999__Application"
                          className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                        >
                          <span
                            className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                            style={{
                              fontFamily: "SF Pro Display",
                            }}
                          >
                            Application
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_274_1350__Frame_1171276960"
                    className="w-[324px] flex justify-start items-start gap-2.5"
                  >
                    <div
                      id="_274_1351__Mobile_SAAS_Button"
                      className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1351_13_13003__SVG"
                        className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <div
                          id="I274_1351_13_13004__SVG"
                          className="absolute bg-[#0161fe] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
                        >
                          <img
                            id="I274_1351_13_13005__Vector"
                            src="/assets/homemob/images/vector_68.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.67)]"
                          />
                          <img
                            id="I274_1351_13_13006__Vector"
                            src="/assets/homemob/images/vector_69.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.25)]"
                          />
                          <img
                            id="I274_1351_13_13007__Vector"
                            src="/assets/homemob/images/vector_70.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                          />
                          <img
                            id="I274_1351_13_13008__Vector"
                            src="/assets/homemob/images/vector_71.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.62)] top-[calc(100%_*_0.50)]"
                          />
                        </div>
                      </div>

                      <span
                        id="I274_1351_13_13009__Says"
                        className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                          style={{
                            fontFamily: "SF Pro Display",
                          }}
                        >
                          Says
                        </span>
                      </span>
                    </div>

                    <div
                      id="_274_1352__Mobile_Admin_Button"
                      className="bg-white h-[32.87px] flex items-center gap-[17px] px-[17px] py-3 rounded-[17.394439697265625px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1352_13_13013__SVG"
                        className="relative bg-[#0161fe] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <img
                          id="I274_1352_13_13014__Vector"
                          src="/assets/homemob/images/vector_72.svg"
                          alt="Vector"
                          className="absolute left-[calc(50%-7.68px)] top-[calc(50%-7.43px)]"
                        />
                      </div>

                      <span
                        id="I274_1352_13_13015__Admin_Dashborad"
                        className="text-left text-[15px] font-normal leading-[20.29px] capitalize text-[#0161fe]"
                      >
                        <span
                          className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[20.29px] capitalize"
                          style={{
                            fontFamily: "SF Pro Display",
                          }}
                        >
                          Admin Dashborad
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="_274_1397__Frame_1171276980"
            className="relative bg-[rgba(246,247,249,1.00)] h-auto w-full rounded-[20px] py-6 px-4 flex flex-col items-center text-center mt-6"
          >
            <div
              id="_274_1398__Section"
              className="w-full flex flex-col items-center"
            >
              <div
                id="_274_1399__Border"
                className="border h-[30px] w-[134px] flex items-center justify-center rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1400__Certification"
                  className="text-center text-[12px] font-medium leading-[13.73px] tracking-[1.715999960899353px] uppercase text-[#202833]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[13.73px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Certification
                  </span>
                </span>
              </div>

              <span
                id="_274_1401__Heading_2___Explore_"
                className="text-center text-[34px] font-normal leading-[38px] text-[#111] max-w-[334.58px] mt-6"
              >
                <span
                  className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  My journey: certifications and key achievements
                </span>
              </span>
              <span
                id="_274_1402__A_collection_of_cert"
              className="text-center text-[16px] font-normal leading-[22px] text-[rgba(109,109,110,0.80)] max-w-[357px] mt-4"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  A collection of certifications reflecting my learning, skills,
                  and professional growth.
                </span>
              </span>
              <div
                id="_274_1403__Frame_288"
              className="w-full flex flex-col items-center gap-[15px] mt-8"
              >
                <div
                  id="_274_1404__Background"
                className="bg-[#0161fe] h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1405__SVG"
                  className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1406__Vector"
                      src="/assets/homemob/images/vector_73.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1407__Vector"
                      src="/assets/homemob/images/vector_74.svg"
                      alt="Vector"
                      className="relative left-[calc(50%-8.10px)] top-[calc(50%-8.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1408__Google_UX_Design"
                  className="text-left text-[18px] font-normal leading-[22px] capitalize text-white"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Google UX Design
                    </span>
                  </span>
                  <div
                    id="_274_1409__Background"
                    className="relative bg-[rgba(130,170,249,1.00)] h-[174px] w-[calc(100%-180px)] rounded-[10px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1410__Googel_UX_Design_2"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) 100% / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1411__Background"
                  className="bg-white h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1412__SVG"
                    className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1413__Vector"
                      src="/assets/homemob/images/vector_75.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1414__Vector"
                      src="/assets/homemob/images/vector_76.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                    />
                    <img
                      id="_274_1415__Vector"
                      src="/assets/homemob/images/vector_77.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                    />
                    <img
                      id="_274_1416__Vector"
                      src="/assets/homemob/images/vector_78.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                    />
                  </div>

                  <span
                    id="_274_1417__Financial_consulting"
                    className="text-left text-[18px] font-normal leading-[22px] capitalize text-[#111]"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Financial consulting
                    </span>
                  </span>
                  <div
                    id="_274_1418__Background"
                    className="relative bg-[rgba(197,198,199,1.00)] h-[174px] w-[calc(100%-180px)] rounded-[10px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1419__Googel_UX_Design_2"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1420__Background"
                  className="bg-white h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1421__SVG"
                    className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1422__Vector"
                      src="/assets/homemob/images/vector_79.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1423__Vector"
                      src="/assets/homemob/images/vector_80.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.29)] top-[calc(100%_*_0.67)]"
                    />
                    <img
                      id="_274_1424__Vector"
                      src="/assets/homemob/images/vector_81.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.46)] top-[calc(100%_*_0.30)]"
                    />
                    <img
                      id="_274_1425__Vector"
                      src="/assets/homemob/images/vector_82.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.32)] top-[calc(100%_*_0.42)]"
                    />
                    <img
                      id="_274_1426__Vector"
                      src="/assets/homemob/images/vector_83.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.60)] top-[calc(100%_*_0.52)]"
                    />
                  </div>

                  <span
                    id="_274_1427__Technology_solutions"
                    className="text-left text-[18px] font-normal leading-[22px] capitalize text-[#111]"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Technology solutions
                    </span>
                  </span>
                  <div
                    id="_274_1428__Background"
                    className="relative bg-[rgba(197,198,199,1.00)] h-[174px] w-[calc(100%-186px)] rounded-[15px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1429__Googel_UX_Design_3"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1430__Background"
                  className="bg-white h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1431__SVG"
                    className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1432__Vector"
                      src="/assets/homemob/images/vector_84.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1433__Vector"
                      src="/assets/homemob/images/vector_85.svg"
                      alt="Vector"
                      className="relative left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1434__Risk_Management"
                    className="text-left text-[18px] font-normal leading-[22px] capitalize text-[#111]"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Risk Management
                    </span>
                  </span>
                  <div
                    id="_274_1435__Background"
                    className="relative bg-[rgba(197,198,199,1.00)] h-[174px] w-[calc(100%-186px)] rounded-[15px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1436__Googel_UX_Design_4"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1437__Background"
                  className="bg-white h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1438__SVG"
                    className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1439__Vector"
                      src="/assets/homemob/images/vector_86.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1440__Vector"
                      src="/assets/homemob/images/vector_87.svg"
                      alt="Vector"
                      className="relative left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1441__Risk_Management"
                    className="text-left text-[18px] font-normal leading-[22px] capitalize text-[#111]"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Risk Management
                    </span>
                  </span>
                  <div
                    id="_274_1442__Background"
                    className="relative bg-[rgba(197,198,199,1.00)] h-[174px] w-[calc(100%-186px)] rounded-[15px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1443__Googel_UX_Design_4"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1444__Background"
                  className="bg-white h-[190px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px] flex items-center justify-between px-4"
                >
                  <div
                    id="_274_1445__SVG"
                    className="relative h-[42.70px] w-[42.70px]"
                  >
                    <img
                      id="_274_1446__Vector"
                      src="/assets/homemob/images/vector_88.svg"
                      alt="Vector"
                      className="relative left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1447__Vector"
                      src="/assets/homemob/images/vector_89.svg"
                      alt="Vector"
                      className="relative left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1448__Risk_Management"
                    className="text-left text-[18px] font-normal leading-[22px] capitalize text-[#111]"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[22.00px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Risk Management
                    </span>
                  </span>
                  <div
                    id="_274_1449__Background"
                    className="relative bg-[rgba(197,198,199,1.00)] h-[174px] w-[calc(100%-186px)] rounded-[15px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1450__Googel_UX_Design_4"
                      className="h-[148px] w-[192px] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1451__Section"
                  className="relative overflow-hidden h-auto w-full rounded-[22.8799991607666px] py-6 px-4 flex flex-col items-center text-center mt-6"
          >
            <span
              id="_274_1452__Heading_1___About_ou"
                    className="text-center text-[45px] font-normal leading-[52.49px] text-[#111] max-w-[246px] mt-6"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[45.0px] font-normal leading-[52.49px]"

              >
                Our Projects
              </span>
            </span>
            <span
              id="_274_1453__At_Arunijone__I_deli"
              className="text-center text-[16px] font-normal leading-[22px] text-[rgba(109,109,110,0.80)] max-w-[335px] mt-4"
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
              id="_274_1454__Container_wrapper"
              className="w-full flex justify-center mt-8"
            >
              <div id="_274_1454__Container"
                className="relative overflow-hidden h-[289.64px] w-[274.39px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px]"
              >
                <div id="_274_1455__67b5af0aadbf9fd23486"
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)]"
                >
                  <div id="_274_1456__image_26"
                    className="absolute h-[181px] w-[146px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]"
                  style={{
                    background:
                      "url(/assets/homemob/images/image_26.png) center / cover no-repeat",
                  }}
                ></div>
              </div>
              </div>
              </div>

              <div
              id="_274_1457__Frame_309"
                    className="flex justify-center gap-x-4 mt-8"
            >
              <div
                id="_274_1458__Link"
                      className="bg-[#0161fe] h-[46.34px] w-[126.33px] rounded-[95.3499984741211px] border-0 flex items-center justify-center"
                onClick={() => navigate('/contact')}
              >
                <div
                  id="_274_1459__Container"
                        className="overflow-hidden h-[calc(100%-6.09px)] w-[50.08px] flex items-center justify-center"
                >
                  <span
                    id="_274_1460__Contact"
                          className="text-center text-[13.4px] font-medium leading-[20.14px] tracking-[-0.067px] text-white"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      Contact
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1461__Frame_254"
                        className="flex items-center gap-[7px]"
                >
                  <span
                    id="_274_1462__Contact"
                          className="text-center text-[14px] font-medium leading-[20.14px] tracking-[-0.067px] text-white"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Contact
                    </span>
                  </span>
                  <div
                    id="_274_1463__67a22e78f02af13d518a"
                    className="overflow-hidden h-[22.88px] w-[22.88px] flex items-center justify-center"
                  >
                    <div
                      id="_274_1464__67a22e78f02af13d518a"
                      className="overflow-hidden h-[22.88px] w-[22.88px]"
                    >
                      <div
                        id="_274_1465__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                      >
                        <img
                          id="_274_1466__Vector"
                          src="/assets/homemob/images/vector_90.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_274_1467__Link"
                      className="border h-[42.63px] w-[100.03px] rounded-[95.3499984741211px] border-[#0161feff] border-solid flex items-center justify-center"
                onClick={() => navigate('/portfolio1')}
              >
                <span
                  id="_274_1468__Portfolio" className="text-center text-[14px] font-medium leading-[19.17px] tracking-[-0.067px] text-[#0161fe]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.17px] tracking-[-0.06700000166893005px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Portfolio
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_274_1469__Container_wrapper"
              className="w-full flex justify-center mt-8"
            >
              <div id="_274_1469__Container"
                className="relative overflow-hidden h-[289.64px] w-[294.39px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px]"
              >
                <div id="_274_1470__67b5af0b7a74e5519cee"
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)]"
                >
                  <div id="_274_1471__image_10"
                    className="absolute h-[129px] w-[184px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]"
                  style={{
                    background:
                      "url(/assets/homemob/images/image_10.png) center / cover no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
          </div>

          <MobFooter />
        </div>
      </div>

    </>
  );
};
export default About;
