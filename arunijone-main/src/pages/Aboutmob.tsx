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
        className="relative bg-white w-full mx-auto"
      >
        <MobBanner iconSrc="/assets/homemob/images/group_2.svg" />

        <div
          id="_274_1235__Frame_1171277011"
          className="w-[calc(100%-16px)] flex flex-col justify-start items-center flex-nowrap gap-[25px] mx-auto mt-[78px] pb-8"
        >
          <div
            id="_274_1236__Section"
            className="bg-[rgba(246,247,249,1.00)] w-full rounded-[20px] flex flex-col items-center pt-6 pb-8 gap-4"
          >
            <span className="flex justify-center text-center items-center w-full px-4">
              <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[54.0px] font-normal leading-[61.24px]">
                Expert<br />guidance,<br />tailored solution
              </span>
            </span>
            <span className="flex justify-center text-center items-center w-[299.00px] max-w-full px-4">
              <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]">
                Adapt easily and scale confidently with a flexible system
                designed to support your business at every stage of growth.
              </span>
            </span>
            <div className="flex flex-row items-center justify-center gap-3">
              <div
                className="relative bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[126.33px] rounded-[95.35px] cursor-pointer"
                onClick={() => navigate('/contact')}
              >
                <div className="absolute h-[22.88px] w-[80.62px] flex flex-row justify-start items-center gap-[7px] left-[22.88px] top-[11.73px]">
                  <span className="flex justify-center text-center items-center h-[16.00px] w-[50.74px] relative">
                    <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.14px]" style={{ fontFamily: "SF Pro Display" }}>
                      Contact
                    </span>
                  </span>
                  <div className="relative overflow-hidden h-[22.88px] w-[22.88px]">
                    <div className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]">
                      <img src="/assets/homemob/images/vector_35.svg" alt="Vector" className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative bg-[rgba(37,211,102,1.00)] h-[46px] flex flex-row justify-start items-center gap-2.5 px-[18px] rounded-[110px] cursor-pointer"
              >
                <div className="relative overflow-hidden h-[24.00px] w-[23.00px]">
                  <img src="/assets/homemob/images/group_3.svg" alt="Group" className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]" />
                </div>
                <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.0px] font-semibold leading-[21.62px] capitalize" style={{ fontFamily: "SF Pro Display" }}>
                  WhatsApp
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-[8px] w-[calc(100%-16px)] mx-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-[8px] flex-1">
                <div
                  id="_274_1267__Container"
                  className="relative w-full rounded-[15.260000228881836px] overflow-hidden"
                >
                  <img
                    src="/assets/homemob/images/67b319b2780f114067368440_frame202147223323webp.png"
                    alt=""
                    className="w-full h-auto block"
                  />
                  <div
                    id="_274_1268__67b319b2780f11406736"
                    className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] rounded-[15.260000228881836px]"
                    style={{ filter: "blur(0.0px)" }}
                  ></div>
                </div>
                <div
                  id="_274_1260__Background"
                  className="relative h-[247.17px] w-full bg-[rgba(35,35,35,1.00)] rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1261__SVG"
                    className="absolute h-[38.13px] w-[38.13px] left-[15.25px] top-[15.25px]"
                  >
                    <img id="_274_1262__Vector" src="/assets/homemob/images/vector_36.svg" alt="Vector" className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.01)]" />
                    <img id="_274_1263__Vector" src="/assets/homemob/images/vector_37.svg" alt="Vector" className="absolute left-[calc(100%_*_0.43)] top-[calc(100%_*_0.66)]" />
                    <img id="_274_1264__Vector" src="/assets/homemob/images/vector_38.svg" alt="Vector" className="absolute left-[calc(100%_*_0.35)] top-[calc(100%_*_0.30)]" />
                  </div>
                  <span
                    id="_274_1265__3_"
                    className="flex justify-start text-left items-center h-[54.00px] w-[60.00px] absolute left-[15.38px] top-[68.47px]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[45.79999923706055px] font-normal leading-[53.36px]"
                      style={{ fontFamily: "SF Pro Display" }}
                    >
                      3+
                    </span>
                  </span>
                  <span
                    id="_274_1266__Driving_growth_throu"
                    className="flex justify-start text-left items-center h-[94.00px] w-[148.00px] absolute left-[15.38px] top-[137.47px]"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                      style={{ fontFamily: "SF Pro Display" }}
                    >
                      Driving growth through innovation, insights, and research to
                      enhance digital presence and products.
                    </span>
                  </span>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col gap-[8px] flex-1">
                <div
                  id="_274_1257__Paragraph_Background"
                  className="relative h-[247.17px] w-full bg-[rgba(1,97,254,1.00)] rounded-[15.260000228881836px]"
                >
                  <span
                    id="_274_1258__Adaptability_that_he"
                    className="flex justify-start text-left items-center h-[94.00px] w-[146.00px] absolute left-[14.82px] top-[14.95px]"
                  >
                    <span
                      className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                      style={{ fontFamily: "SF Pro Display" }}
                    >
                      Adaptability that helps you scale confidently with a flexible
                      system built to support your growth at every stage.
                    </span>
                  </span>
                  <span
                    id="_274_1259__95_"
                    className="flex justify-start text-left items-center h-[55.00px] w-[96.68px] absolute left-[15.25px] top-[178.00px]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[45.79999923706055px] font-normal leading-[54.92px]"
                      style={{ fontFamily: "SF Pro Display" }}
                    >
                      95%
                    </span>
                  </span>
                </div>
                {/* Grey BR placeholder */}
                <div
                  id="_274_1269__Container"
                  className="relative w-full rounded-[15.260000228881836px] overflow-hidden"
                >
                  <img
                    src="/assets/homemob/images/67a5fbb5273bae41bd4e018f_frame202147223583webp.png"
                    alt=""
                    className="w-full h-auto block"
                  />
                  <div
                    id="_274_1270__67a5fbb5273bae41bd4e"
                    className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] rounded-[15.260000228881836px]"
                    style={{ filter: "blur(0.0px)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1271__Section"
            className="w-full rounded-[22.8799991607666px] flex flex-col items-center pt-8 pb-6 gap-4"
          >
            <div className="flex justify-center">
              <div className="border h-[30px] flex flex-row justify-center items-center gap-2.5 px-4 py-2 rounded-[228.83px] border-[#202833ff] border-solid">
                <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.716px] uppercase" style={{ fontFamily: "SF Pro Display" }}>
                  project regions
                </span>
              </div>
            </div>
            <span className="flex justify-center text-center items-center w-[275.00px] max-w-full">
              <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]">
                Solutions built for businesses across regions.
              </span>
            </span>
            <div
              id="_274_1276__Choice_Box"
              className="w-full flex flex-col items-center gap-2.5"
            >
              <div
                id="_274_1277__Background"
                className="w-full flex flex-col items-center gap-2.5 px-4"
              >
                  <div
                    id="_274_1279__Frame_1171276958"
                    className="relative w-[302.00px] flex flex-row justify-start items-start flex-nowrap gap-2.5"
                  >
                    <div
                      id="_274_1280__Frame_177"
                      className="relative h-[57.07px] w-[136.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                    >
                      <div
                        id="_274_1281__Mob_website_button"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[33.07px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)]"
                      >
                        <div
                          id="I274_1281_13_12958__SVG"
                          className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                          className="flex justify-start text-left items-center h-[21.00px] w-[52.00px] relative"
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
                      className="relative h-[57.07px] w-[156.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                    >
                      <div
                        id="_274_1283__Mobile_App_Button"
                        className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                      >
                        <div
                          id="I274_1283_13_12997__SVG"
                          className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                          className="flex justify-start text-left items-center h-[21.00px] w-[71.00px] relative"
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
                    className="relative w-[324.00px] flex flex-row justify-start items-start flex-nowrap gap-2.5"
                  >
                    <div
                      id="_274_1285__Mobile_SAAS_Button"
                      className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1285_13_13003__SVG"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <div
                          id="I274_1285_13_13004__SVG"
                          className="absolute bg-[rgba(1,97,254,1.00)] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
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
                        className="flex justify-start text-left items-center h-[21.00px] w-[31.00px] relative"
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
                      className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                    >
                      <div
                        id="I274_1286_13_13013__SVG"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                        className="flex justify-start text-left items-center h-[21.00px] w-[114.00px] relative"
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

            <div
              id="_274_1287___"
              className="relative w-full flex justify-center mt-6"
            >
              <img
                id="I274_1287_1364_20923__Group"
                src="/assets/homemob/images/group_4.svg"
                alt="Group"
                className="w-full max-w-[364px] h-auto"
              />
            </div>
          </div>

          <MobServiceCategories />

          <div
            id="_274_1305__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[146.00px] w-[calc(100%-16px)] mx-auto flex flex-col justify-center items-center flex-nowrap gap-[11px] px-2 py-[14px] rounded-[22.8799991607666px]"
          >
            <div
              id="_274_1306__Frame_94"
              className="relative h-[24.00px] w-full flex justify-center"
            >
              <div
                id="_274_1307__Border"
                className="relative border h-[14.00px] w-[99.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1308__Tools_i_know"
                  className="flex justify-center text-center items-center h-[14.00px] w-[101.00px] relative"
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
              className="relative mt-3 w-[calc(100%-0px-0px)] flex flex-col justify-start items-center flex-nowrap gap-[11px]"
            >
              <div
                id="_274_1311__Frame_184"
                className="relative h-[60.81px] w-[278.00px] flex flex-row justify-start items-start flex-nowrap gap-2.5"
              >
                <div
                  id="_274_1312__Background"
                  className="relative bg-white h-[32.81px] flex flex-row justify-start items-center flex-nowrap gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1313__SVG"
                    className="relative bg-[rgba(1,97,254,1.00)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
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
                    className="flex justify-start text-left items-center h-[22.00px] w-[42.00px] relative"
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
                  className="relative bg-white h-[32.81px] flex flex-row justify-start items-center flex-nowrap gap-[18px] px-[18px] py-[13px] rounded-[18.533363342285156px]"
                >
                  <div
                    id="_274_1317__SVG"
                    className="relative bg-[rgba(1,97,254,1.00)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px]"
                  >
                    <div
                      id="_274_1318__lineicons_canva"
                      className="absolute overflow-hidden h-[24.00px] w-[24.00px] left-[4.68px] top-[4.70px]"
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
                    className="flex justify-start text-left items-center h-[22.00px] w-[44.00px] relative"
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
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] w-[calc(100%-16px)] mx-auto flex flex-col justify-center items-center flex-nowrap gap-[11px] px-2 py-[14px] rounded-[22.8799991607666px]"
          >
            <div
              id="_274_1322__Frame_94"
              className="relative h-[24.00px] w-full flex justify-center"
            >
              <div
                id="_274_1323__Border"
                className="relative border h-[14.00px] w-[100.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-4 py-2 rounded-[228.8300018310547px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1324__Skills_i_know"
                  className="flex justify-center text-center items-center h-[14.00px] w-[102.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    Skills i know
                  </span>
                </span>
              </div>
            </div>

            <div className="relative mt-3 w-full flex flex-col justify-start items-center gap-[10px]">
              {/* Row 1 */}
              <div className="flex flex-row justify-center items-center flex-wrap gap-[10px]">
                {[
                  { label: "User Research", icon: "/assets/about/images/draw_2.svg" },
                  { label: "Wireframing", icon: "/assets/about/images/draw_3.svg" },
                  { label: "Prototyping", icon: "/assets/about/images/draw_4.svg" },
                  { label: "Visual Design", icon: "/assets/about/images/draw_5.svg" },
                  { label: "Usability", icon: "/assets/about/images/draw_6.svg" },
                  { label: "Testing", icon: "/assets/about/images/draw_7.svg" },
                  { label: "Design Systems", icon: "/assets/about/images/draw_8.svg" },
                  { label: "Responsive UI", icon: "/assets/about/images/draw_9.svg" },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="relative bg-white h-[32.81px] flex flex-row justify-start items-center flex-nowrap gap-[14px] px-[14px] py-[13px] rounded-[18.533363342285156px]"
                  >
                    <div className="relative bg-[rgba(1,97,254,1.00)] h-[34.21px] w-[34.21px] rounded-[29.73302459716797px] flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="absolute left-[calc(100%_*_0.23)] top-[calc(100%_*_0.23)]"
                      />
                    </div>
                    <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[15.0px] font-normal leading-[22.00px] capitalize" style={{ fontFamily: "SF Pro Display" }}>
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="_274_1337__Section"
            className="bg-[rgba(246,247,249,1.00)] w-full rounded-[20px] flex flex-col items-center pt-8 pb-6 gap-4"
          >
            <div
              id="_274_1338__Frame_94"
              className="flex justify-center"
            >
              <div
                id="_274_1339__Border"
                className="border flex flex-row justify-center items-center gap-2.5 px-4 py-2 rounded-[228.83px] border-[#202833ff] border-solid"
              >
                <span
                  id="_274_1340__Project_Galary"
                  className="flex justify-center text-center items-center h-[14.00px] w-[122.00px] relative"
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
              className="flex justify-center text-center items-center w-[275.00px] max-w-full"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"

              >
                A showcase of projects crafted for real business needs.
              </span>
            </span>
            <div
              id="_274_1342__Choice_Box"
              className="w-full flex flex-col items-center gap-2.5"
            >
              <div
                id="_274_1343__Background"
                className="w-full flex flex-col items-center gap-2.5 px-4"
              >
                  <div
                    id="_274_1345__Frame_1171276958"
                    className="relative w-[302.00px] flex flex-row justify-start items-start flex-nowrap gap-2.5"
                  >
                    <div
                      id="_274_1346__Frame_177"
                      className="relative h-[57.07px] w-[136.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                    >
                      <div
                        id="_274_1347__Mob_website_button"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[33.07px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)]"
                      >
                        <div
                          id="I274_1347_13_12958__SVG"
                          className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                          className="flex justify-start text-left items-center h-[21.00px] w-[52.00px] relative"
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
                      className="relative h-[57.07px] w-[156.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
                    >
                      <div
                        id="_274_1349__Mobile_App_Button"
                        className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)]"
                      >
                        <div
                          id="I274_1349_13_12997__SVG"
                          className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                          className="flex justify-start text-left items-center h-[21.00px] w-[71.00px] relative"
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
                    className="relative w-[324.00px] flex flex-row justify-start items-start flex-nowrap gap-2.5"
                  >
                    <div
                      id="_274_1351__Mobile_SAAS_Button"
                      className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)]"
                    >
                      <div
                        id="I274_1351_13_13003__SVG"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
                      >
                        <div
                          id="I274_1351_13_13004__SVG"
                          className="absolute bg-[rgba(1,97,254,1.00)] h-[106.55%] w-[106.55%] left-[calc(100%_*_-0.01)] top-[calc(100%_*_-0.05)] rounded-[29.73302459716797px]"
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
                        className="flex justify-start text-left items-center h-[21.00px] w-[31.00px] relative"
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
                      className="relative bg-white h-[32.87px] flex flex-row justify-start items-center flex-nowrap gap-[17px] px-[17px] py-3 rounded-[calc(17.394439697265625px_*_1.0)]"
                    >
                      <div
                        id="I274_1352_13_13013__SVG"
                        className="relative bg-[rgba(1,97,254,1.00)] h-[32.11px] w-[32.11px] rounded-[27.905855178833008px]"
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
                        className="flex justify-start text-left items-center h-[21.00px] w-[114.00px] relative"
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

            <div
              id="_274_1353__Frame_1171276990"
              className="absolute h-[289.84px] w-[564.43px] left-[-48px] top-[416.00px]"
            >
              <div
                id="_274_1354__Container"
                className="absolute overflow-hidden h-[289.84px] w-[274.59px] rounded-[15.260000228881836px] left-[0.00px] top-[0.00px]"
              >
                <div
                  id="_274_1355__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[100.00%] w-[100.00%]"
                ></div>
              </div>

              <div
                id="_274_1356__Container"
                className="absolute overflow-hidden h-[289.84px] w-[175px] rounded-l-[15.260000228881836px] left-[289.84px] top-[0.00px]"
              >
                <div
                  id="_274_1357__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[100.00%] w-[100.00%]"
                ></div>
              </div>
            </div>

            <div
              id="_274_1358__Frame_1171276989"
              className="absolute h-[289.84px] w-[854.43px] left-[-188px] top-[726.00px]"
            >
              <div
                id="_274_1359__Container"
                className="absolute overflow-hidden h-[289.84px] w-[274.59px] rounded-r-[15.260000228881836px] left-[0.00px] top-[0.00px]"
              >
                <div
                  id="_274_1360__67b5af0aadbf9fd23486"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[100.00%] w-[100.00%]"
                ></div>
              </div>

              <div
                id="_274_1361__Container"
                className="absolute overflow-hidden h-[289.84px] w-[290.59px] left-[calc(50%-137.38px)] rounded-[15.260000228881836px] top-[0.00px]"
              >
                <div
                  id="_274_1362__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[100.00%] w-[100.00%]"
                ></div>
              </div>

              <div
                id="_274_1363__Container"
                className="absolute overflow-hidden h-[289.84px] w-[10px] rounded-l-[15.260000228881836px] left-[calc(50%+152.62px)] top-[0.00px] ml-4"
              >
                <div
                  id="_274_1364__67b5af0b7a74e5519cee"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[100.00%] w-[100.00%]"
                ></div>
              </div>
            </div>
          </div>

          <div
            id="_274_1397__Frame_1171276980"
            className="relative bg-[rgba(246,247,249,1.00)] h-[1580.00px] w-full rounded-[20px]"
          >
            <div
              id="_274_1398__Section"
              className="absolute h-[1512.00px] w-full left-0 top-[35.00px]"
            >
              <div
                id="_274_1399__Border"
                className="absolute border h-[30.00px] w-[134.00px] left-[calc(50%-68.00px)] rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[0.00px]"
              >
                <span
                  id="_274_1400__Certification"
                  className="flex justify-center text-center items-center h-[14.00px] w-[110.00px] absolute left-[calc(50%-55.00px)] top-[calc(50%-7.00px)]"
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
                className="flex justify-center text-center items-center h-[117.25px] w-[334.58px] absolute left-[calc(50%-167.94px)] top-[57.85px]"
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
                className="flex justify-center text-center items-center h-[49.00px] w-[357.00px] absolute left-[calc(50%-177.00px)] top-[206.00px]"
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
                className="absolute h-[1215.00px] w-full left-[-0.50px] flex flex-col justify-start items-start flex-nowrap gap-[15px] top-[290.00px]"
              >
                <div
                  id="_274_1404__Background"
                  className="relative bg-[rgba(1,97,254,1.00)] h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15px]"
                >
                  <div
                    id="_274_1405__SVG"
                    className="absolute h-[42.70px] w-[42.70px] left-[15.25px] top-[22.88px]"
                  >
                    <img
                      id="_274_1406__Vector"
                      src="/assets/homemob/images/vector_73.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1407__Vector"
                      src="/assets/homemob/images/vector_74.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-8.10px)] top-[calc(50%-8.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1408__Google_UX_Design"
                    className="flex justify-start text-left items-center h-[41.00px] w-[117.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(130,170,249,1.00)] h-[174.00px] w-[calc(100%-180.00px)] rounded-[10px] left-[171.50px] top-[8.00px]"
                  >
                    <div
                      id="_274_1410__Googel_UX_Design_2"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-115.00px)] top-[calc(50%-74.00px)] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) 100% / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1411__Background"
                  className="relative bg-white h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1412__SVG"
                    className="absolute h-[42.70px] w-[42.70px] left-[15.25px] top-[22.88px]"
                  >
                    <img
                      id="_274_1413__Vector"
                      src="/assets/homemob/images/vector_75.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1414__Vector"
                      src="/assets/homemob/images/vector_76.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.63)] top-[calc(100%_*_0.52)]"
                    />
                    <img
                      id="_274_1415__Vector"
                      src="/assets/homemob/images/vector_77.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.31)] top-[calc(100%_*_0.39)]"
                    />
                    <img
                      id="_274_1416__Vector"
                      src="/assets/homemob/images/vector_78.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.42)] top-[calc(100%_*_0.29)]"
                    />
                  </div>

                  <span
                    id="_274_1417__Financial_consulting"
                    className="flex justify-start text-left items-center h-[41.00px] w-[90.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(197,198,199,1.00)] h-[174.00px] w-[calc(100%-180.00px)] top-[calc(50%-87.00px)] rounded-[10px] left-[171.50px]"
                  >
                    <div
                      id="_274_1419__Googel_UX_Design_2"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-115.00px)] top-[calc(50%-74.00px)] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1420__Background"
                  className="relative bg-white h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1421__SVG"
                    className="absolute h-[22.47%] w-[11.86%] left-[calc(100%_*_0.04)] top-[calc(100%_*_0.12)]"
                  >
                    <img
                      id="_274_1422__Vector"
                      src="/assets/homemob/images/vector_79.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1423__Vector"
                      src="/assets/homemob/images/vector_80.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.67)]"
                    />
                    <img
                      id="_274_1424__Vector"
                      src="/assets/homemob/images/vector_81.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.46)] top-[calc(100%_*_0.30)]"
                    />
                    <img
                      id="_274_1425__Vector"
                      src="/assets/homemob/images/vector_82.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.42)]"
                    />
                    <img
                      id="_274_1426__Vector"
                      src="/assets/homemob/images/vector_83.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.60)] top-[calc(100%_*_0.52)]"
                    />
                  </div>

                  <span
                    id="_274_1427__Technology_solutions"
                    className="flex justify-start text-left items-center h-[39.00px] w-[101.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(197,198,199,1.00)] h-[174.00px] w-[calc(100%-186.00px)] rounded-[15px] left-[178.00px] top-[8.00px]"
                  >
                    <div
                      id="_274_1429__Googel_UX_Design_3"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-118.50px)] top-[calc(50%-74.00px)] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1430__Background"
                  className="relative bg-white h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1431__SVG"
                    className="absolute h-[42.70px] w-[42.70px] left-[15.25px] top-[22.88px]"
                  >
                    <img
                      id="_274_1432__Vector"
                      src="/assets/homemob/images/vector_84.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1433__Vector"
                      src="/assets/homemob/images/vector_85.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1434__Risk_Management"
                    className="flex justify-start text-left items-center h-[47.00px] w-[113.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(197,198,199,1.00)] h-[174.00px] w-[calc(100%-186.00px)] rounded-[15px] left-[178.00px] top-[8.00px]"
                  >
                    <div
                      id="_274_1436__Googel_UX_Design_4"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-118.50px)] top-[calc(50%-74.00px)] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1437__Background"
                  className="relative bg-white h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1438__SVG"
                    className="absolute h-[42.70px] w-[42.70px] left-[15.25px] top-[22.88px]"
                  >
                    <img
                      id="_274_1439__Vector"
                      src="/assets/homemob/images/vector_86.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1440__Vector"
                      src="/assets/homemob/images/vector_87.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1441__Risk_Management"
                    className="flex justify-start text-left items-center h-[47.00px] w-[113.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(197,198,199,1.00)] h-[174.00px] w-[calc(100%-186.00px)] rounded-[15px] left-[178.00px] top-[8.00px]"
                  >
                    <div
                      id="_274_1443__Googel_UX_Design_4"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-118.50px)] top-[calc(50%-74.00px)] rounded-[5px]"
                      style={{
                        background:
                          "url(/assets/homemob/images/googel_ux_design_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_274_1444__Background"
                  className="relative bg-white h-[190.00px] w-[calc(100%-16px)] mx-auto rounded-[15.260000228881836px]"
                >
                  <div
                    id="_274_1445__SVG"
                    className="absolute h-[42.70px] w-[42.70px] left-[15.25px] top-[22.88px]"
                  >
                    <img
                      id="_274_1446__Vector"
                      src="/assets/homemob/images/vector_88.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_274_1447__Vector"
                      src="/assets/homemob/images/vector_89.svg"
                      alt="Vector"
                      className="absolute left-[calc(50%-8.10px)] top-[calc(50%-7.23px)]"
                    />
                  </div>

                  <span
                    id="_274_1448__Risk_Management"
                    className="flex justify-start text-left items-center h-[47.00px] w-[113.00px] absolute left-[15.50px] top-[90.00px]"
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
                    className="absolute bg-[rgba(197,198,199,1.00)] h-[174.00px] w-[calc(100%-186.00px)] rounded-[15px] left-[178.00px] top-[8.00px]"
                  >
                    <div
                      id="_274_1450__Googel_UX_Design_4"
                      className="absolute h-[148.00px] w-[192.00px] left-[calc(50%-118.50px)] top-[calc(50%-74.00px)] rounded-[5px]"
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
            className="relative overflow-hidden h-[695.00px] w-full rounded-[22.8799991607666px]"
          >
            <span
              id="_274_1452__Heading_1___About_ou"
              className="flex justify-center text-center items-center h-[55.00px] w-[246.00px] absolute left-[calc(50%-123.50px)] top-[35.00px]"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[45.0px] font-normal leading-[52.49px]"

              >
                Our Projects
              </span>
            </span>
            <span
              id="_274_1453__At_Arunijone__I_deli"
              className="flex justify-center text-center items-center h-[109.00px] w-[335.00px] absolute left-[calc(50%-167.50px)] top-[120.00px]"
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
              id="_274_1454__Container"
              className="absolute overflow-hidden h-[289.64px] w-[274.39px] left-[-56.36px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px] top-[346.00px]"
            >
              <div
                id="_274_1455__67b5af0aadbf9fd23486"
                className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[100.00%] w-[100.00%]"
              >
                <div
                  id="_274_1456__image_26"
                  className="absolute h-[181.00px] w-[146.00px] left-[calc(50%-72.94px)] top-[calc(50%-90.92px)]"
                  style={{
                    background:
                      "url(/assets/homemob/images/image_26.png) center / cover no-repeat",
                  }}
                ></div>
              </div>
            </div>

            <div
              id="_274_1457__Frame_309"
              className="absolute h-[46.34px] w-[235.98px] left-[calc(50%-117.50px)] top-[264.00px]"
            >
              <div
                id="_274_1458__Link"
                className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[126.33px] left-[calc(50%-117.99px)] top-[calc(50%-23.17px)] rounded-[95.3499984741211px]"
                onClick={() => navigate('/contact')}
              >
                <div
                  id="_274_1459__Container"
                  className="absolute overflow-hidden h-[calc(100%-6.09px)] w-[50.08px] left-[calc(50%-40.28px)] top-[3.05px]"
                >
                  <span
                    id="_274_1460__Contact"
                    className="flex justify-center text-center items-center h-[16.00px] w-[50.74px] absolute left-[calc(50%-25.04px)] top-[calc(50%+52.32px)]"
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
                  className="absolute h-[22.88px] w-[80.62px] flex flex-row justify-start items-center flex-nowrap gap-[7px] left-[22.88px] top-[11.74px]"
                >
                  <span
                    id="_274_1462__Contact"
                    className="flex justify-center text-center items-center h-[16.00px] w-[50.74px] relative"
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
                    className="relative overflow-hidden h-[22.88px] w-[22.88px]"
                  >
                    <div
                      id="_274_1464__67a22e78f02af13d518a"
                      className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
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
                className="absolute border h-[42.63px] w-[100.03px] top-[calc(50%-22.31px)] rounded-[95.3499984741211px] border-[#0161feff] border-solid left-[calc(50%+15.96px)]"
                onClick={() => navigate('/portfolio1')}
              >
                <span
                  id="_274_1468__Portfolio"
                  className="flex justify-center text-center items-center h-[17.00px] w-[50.00px] absolute left-[calc(50%-25.34px)] top-[calc(50%-8.37px)]"
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
              id="_274_1469__Container"
              className="absolute overflow-hidden h-[289.64px] w-[294.39px] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px] left-[233.48px] top-[346.00px] "
            >
              <div
                id="_274_1470__67b5af0b7a74e5519cee"
                className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[100.00%] w-[100.00%]"
              >
                <div
                  id="_274_1471__image_10"
                  className="absolute h-[129.00px] w-[184.00px] left-[calc(50%-91.78px)] top-[calc(50%-64.92px)]"
                  style={{
                    background:
                      "url(/assets/homemob/images/image_10.png) center / cover no-repeat",
                  }}
                ></div>
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
