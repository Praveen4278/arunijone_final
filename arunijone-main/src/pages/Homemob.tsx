import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobBanner from "../components/MobBanner";
import MobStatHighlights from "../components/MobStatHighlights";
import MobServiceCategories from "../components/MobServiceCategories";
import MobFooter from "../components/MobFooter";
const HomeUXUI = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div
        id="_274_925__Home_UXUI"
        className="relative overflow-hidden bg-white w-full mx-auto"
      >
        <MobBanner />

        <div
          id="_274_950__Frame_1171277009"
          className="relative w-[calc(100%-16px)] flex flex-col justify-start items-center flex-nowrap gap-[30px] left-[8px] mt-[78px] mb-[30px]"
        >
          <div
            id="_274_951__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[901.00px] w-full rounded-[20px]"
          >
            <span
              id="_274_952__Heading_1___Expert_g"
              className="flex justify-center text-center items-center h-[272.00px] w-[365.00px] absolute left-[calc(50%-182.50px)] top-[25.00px]"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[68.00px]"

              >
                Crafting practical solutions for digital growth.
              </span>
            </span>
            <span
              id="_274_953__Our_flexible_infrast"
              className="flex justify-center text-center items-center h-[65.00px] w-[298.00px] absolute left-[calc(50%-149.50px)] top-[327.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"

              >
                Our flexible infrastructure empowers your business to adapt
                quickly, stay efficient, and scale seamlessly as you grow.
              </span>
            </span>
            <div
              id="_274_954__Frame_93"
              className="absolute h-[46.00px] left-0 right-0 w-full flex flex-row justify-center items-center flex-nowrap gap-3 top-[427.00px]"
            >
              <div
                id="_274_955__About_Me"
                className="relative bg-[rgba(1,97,254,1.00)] h-[47.00px] w-[127.00px] rounded-[95.3499984741211px] cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => navigate("/portfolio1")}
              >
                <div
                  id="_274_956__Frame_89"
                  className="absolute h-[22.88px] w-[91.88px] left-[calc(50%-45.50px)] top-[calc(50%-11.00px)] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                >
                  <span
                    id="_274_957__About_Me"
                    className="flex justify-center text-center items-center h-[16.00px] w-[63.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      About Me
                    </span>
                  </span>
                  <div
                    id="_274_958__67a22e78f02af13d518a"
                    className="relative overflow-hidden h-[22.88px] w-[22.88px]"
                  >
                    <div
                      id="_274_959__67a22e78f02af13d518a"
                      className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                    >
                      <div
                        id="_274_960__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                      >
                        <img
                          id="_274_961__Vector"
                          src="/assets/homemob/images/vector.svg"
                          alt="Vector"
                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div
              id="_274_966__Home_Mobile_Containe"
              className="absolute overflow-hidden bg-white h-[41.20%] w-[97.33%] rounded-[15.260000228881836px] left-1/2 -translate-x-1/2 top-[calc(100%_*_0.58)]"
            >
              <div
                id="_274_967__Container"
                className="absolute inset-0 overflow-hidden rounded-[15.260000228881836px]"
              >
                <div
                  id="_274_968__67a5fbb5273bae41bd4e"
                  className="absolute inset-0 overflow-hidden rounded-[15.260000228881836px]"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                >
                  <div
                    id="_274_969__67a5fbb5273bae41bd4e"
                    className="absolute inset-0 overflow-hidden rounded-[15.260000228881836px]"
                    style={{
                      filter: "blur(0.0px)",
                    }}
                  >
                    <div
                      id="_274_970__Arunijone_v4_1"
                      className="absolute inset-0 h-full w-full rounded-[15.260000228881836px]"
                      style={{
                        backgroundImage:
                          "url(/assets/Home/images/arunijone_v4_2.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center 28%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MobStatHighlights />

          <div
            id="_274_996__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[1156.00px] w-full rounded-[20px]"
          >
            <div
              id="_274_997__Frame_1171276985"
              className="absolute h-[1120.00px] w-[calc(100%-20px)] left-[10px] right-[10px] top-[35.00px]"
            >
              <div
                id="_274_998__Border"
                className="absolute border h-[30.00px] w-[103.00px] left-[calc(50%-52.50px)] rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[0.00px]"
              >
                <span
                  id="_274_999__About_us"
                  className="flex justify-center text-center items-center h-[14.00px] w-[70.00px] absolute left-[calc(50%-34.50px)] top-[calc(50%-7.00px)]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    About us
                  </span>
                </span>
              </div>

              <span
                id="_274_1000__Heading_2___Unlock_o"
                className="flex justify-center text-center items-center h-[117.00px] w-[355.00px] absolute left-[calc(50%-177.50px)] top-[57.00px]"
              >
                <span
                  className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[42.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Unlocking creativity, strategy, and innovation for every
                  business
                </span>
              </span>
              <span
                id="_274_1001__At_Arunijone__I_brin"
                className="flex justify-center text-center items-center h-[99.00px] w-[359.00px] absolute left-[calc(50%-179.50px)] top-[204.00px]"
              >
                <span
                  className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  At Arunijone, I bring together skills from UX/UI design,
                  digital marketing, stock research and product innovation to
                  deliver practical, impactful solutions for individuals and
                  businesses.
                </span>
              </span>
              <div
                id="_274_1002__Paragraph_Background"
                className="absolute bg-[rgba(35,35,35,1.00)] h-[193.80px] w-[49%] left-0 rounded-[15.260000228881836px] top-[506px]"
              >
                <span
                  id="_274_1003__3_"
                  className="flex justify-start text-left items-center h-[53.36px] w-[77.46px] absolute left-[15.25px] top-[15.25px]"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    3+
                  </span>
                </span>
                <span
                  id="_274_1004__Year_driving_growth_"
                  className="flex justify-start text-left items-center h-[92.00px] w-[150.00px] absolute left-[15.38px] top-[86.58px]"
                >
                  <span
                    className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Year driving growth through innovation, insights, and
                    research to enhance digital presence and products.
                  </span>
                </span>
              </div>

              <div
                id="_274_1005__Background"
                className="absolute bg-[rgba(1,97,254,1.00)] h-[241.38px] w-full left-0 rounded-[15.260000228881836px] top-[708px]"
              >
                <div
                  id="_274_1006__SVG"
                  className="absolute h-[38.13px] w-[38.13px] left-[15.25px] top-[15.25px]"
                >
                  <img
                    id="_274_1007__Vector"
                    src="/assets/homemob/images/vector_2.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_274_1008__Vector"
                    src="/assets/homemob/images/vector_3.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.43)] top-[calc(100%_*_0.66)]"
                  />
                  <img
                    id="_274_1009__Vector"
                    src="/assets/homemob/images/vector_4.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.35)] top-[calc(100%_*_0.30)]"
                  />
                </div>

                <span
                  id="_274_1010__95_"
                  className="flex justify-start text-left items-center h-[38.00px] w-[97.00px] absolute left-[15.38px] top-[74.16px]"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    95%
                  </span>
                </span>
                <span
                  id="_274_1011__Client_satisfaction_"
                  className="flex justify-start text-left items-center h-[93.00px] w-[330.00px] absolute left-[15.38px] top-[133.16px]"
                >
                  <span
                    className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Client satisfaction achieved through personalized solutions,
                    proactive support, and a commitment to understanding each
                    client's unique requirements. My focus on excellence ensures
                    that your success remains the priority at every step.
                  </span>
                </span>
              </div>

              <div
                id="_274_1012__Container"
                className="absolute overflow-hidden h-[155.00px] w-full left-0 rounded-[15.260000228881836px] top-[343px]"
              >
                <div
                  id="_274_1013__67b5b9ef1d892948236c"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[154.58px] w-full left-[0.00px] top-[0.00px]"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                ></div>
              </div>

              <div
                id="_274_1014__Container"
                className="absolute overflow-hidden h-[193.80px] w-[49.01%] rounded-[15.260000228881836px] left-[calc(100%_*_0.51)] top-[506px]"
              >
                <div
                  id="_274_1015__67b5b9ee277a689d3cc0"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[193.80px] w-full left-[0.00px] top-[0.00px] rounded-[15.260000228881836px]"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                ></div>
              </div>

              <div
                id="_274_1016__Container"
                className="absolute overflow-hidden h-[155.00px] w-[49%] left-0 rounded-[15.260000228881836px] top-[957px]"
              >
                <div
                  id="_274_1017__67b5b9ebc673f016ac4e"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[154.81px] w-full left-[0.00px] top-[0.00px]"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                ></div>
              </div>

              <div
                id="_274_1018__Container"
                className="absolute overflow-hidden h-[155.00px] w-[49.01%] rounded-[15.260000228881836px] left-[calc(100%_*_0.51)] top-[957px]"
              >
                <div
                  id="_274_1019__67b5b9ec558603222d0b"
                  className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[154.81px] w-full left-[0.00px] top-[0.00px]"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <MobServiceCategories />

          <div
            id="_274_1036__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[625.00px] w-full rounded-[20px]"
          >
            <div
              id="_274_1037__Frame_1171276987"
              className="absolute h-[582.00px] w-full left-[0.00px] top-[35.00px]"
            >
              <div
                id="_274_1038__Border"
                className="absolute border h-[30.00px] w-[97.00px] left-[calc(50%-49.50px)] rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[0.00px]"
              >
                <span
                  id="_274_1039__project"
                  className="flex justify-center text-center items-center h-[14.00px] w-[64.00px] absolute left-[calc(50%-31.50px)] top-[calc(50%-7.00px)]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    project
                  </span>
                </span>
              </div>

              <span
                id="_274_1040__Heading_2___Our_Succ"
                className="flex justify-center text-center items-center h-[108.00px] w-[370.00px] absolute left-[calc(50%-185.50px)] top-[57.00px]"
              >
                <span
                  className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[42.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Real Results. Real Impact. Our Success Stories.
                </span>
              </span>
              <div
                id="_274_1041__Link"
                className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[136.84px] left-[calc(50%-68.55px)] rounded-[95.3499984741211px] top-[200.10px]"
              >
                <div
                  id="_274_1042__Container"
                  className="absolute overflow-hidden h-[calc(100%-6.09px)] w-[60.59px] left-[calc(50%-45.55px)] top-[3.04px]"
                >
                  <span
                    id="_274_1043__See_More"
                    className="flex justify-center text-center items-center h-[16.00px] w-[60.98px] absolute left-[calc(50%-30.30px)] top-[calc(50%-8.05px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[22.00px]"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      See More
                    </span>
                  </span>
                  <span
                    id="_274_1044__See_More"
                    className="flex justify-center text-center items-center h-[16.00px] w-[60.98px] absolute left-[calc(50%-30.30px)] top-[calc(50%+52.31px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-medium leading-[20.14px] tracking-[-0.06700000166893005px]"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      See More
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1045__67a22e78f02af13d518a"
                  className="absolute overflow-hidden h-[22.88px] w-[22.88px] top-[calc(50%-11.44px)] left-[calc(50%+22.67px)]"
                >
                  <div
                    id="_274_1046__67a22e78f02af13d518a"
                    className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                  >
                    <div
                      id="_274_1047__67a22e78f02af13d518a"
                      className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                    >
                      <img
                        id="_274_1048__Vector"
                        src="/assets/homemob/images/vector_15.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_274_1049__Region_-_carousel"
                className="absolute overflow-hidden bg-[rgba(254,254,253,1.00)] h-[212.00px] w-[calc(100%-16.00px)] rounded-[22.8799991607666px] left-[8.00px] top-[282.00px]"
              >
                <div
                  id="_274_1050__image_26"
                  className="absolute h-[270.00px] w-[240.00px] left-[calc(50%-120.00px)] top-[calc(50%-135.00px)]"
                  style={{
                    background:
                      "url(/assets/homemob/images/image_26.png) center / contain no-repeat",
                  }}
                ></div>
              </div>

              <div
                id="_274_1051__Images_Container"
                className="absolute bg-white h-[62.00px] w-[975.60px] flex flex-row justify-start items-start flex-nowrap gap-2 p-2 rounded-[15px] left-[8.09px] top-[504.00px]"
              >
                <div
                  id="_274_1052__Frame_1171276919"
                  className="relative bg-white h-[61.20px] w-[114.41px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px]"
                >
                  <div
                    id="_274_1053__image_26"
                    className="absolute h-[58.00px] w-[52.00px] left-[calc(50%-26px)] top-[calc(50%-29px)]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_26.png) center / contain no-repeat",
                    }}
                  ></div>
                </div>

                <div
                  id="_274_1054__Frame_1171276920"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1055__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[61.20px] w-[114.41px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_274_1056__image_10"
                    className="absolute h-[50.00px] w-[90.00px] left-[calc(50%-45px)] top-[calc(50%-25px)]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_10.png) center / contain no-repeat",
                    }}
                  ></div>
                </div>

                <div
                  id="_274_1057__Frame_1171276921"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1058__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(255,255,254,1.00)0%,rgba(255,255,254,1.00)100%)] h-[61.20px] w-[114.41px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_274_1059__image_81"
                    className="absolute h-[66.38px] w-[99.57px] left-[360.75px] top-[714.45px]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_81.png) center / contain no-repeat",
                    }}
                  ></div>

                  <div
                    id="_274_1060__image_1"
                    className="absolute h-[58.00px] w-[90.00px] left-[calc(50%-45px)] top-[calc(50%-29px)]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_1_1.png) center / contain no-repeat",
                    }}
                  ></div>
                </div>

                <div
                  id="_274_1061__Frame_1171276922"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1062__Image"
                    className="absolute bg-[rgba(254,254,254,1.00)] h-[61.07px] w-[114.28px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.16595745086669922px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_274_1063__image_85"
                    className="absolute h-[39.74px] w-[100.08px] left-[calc(50%-50.23px)] top-[calc(50%-21.33px)]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_85.png) center / contain no-repeat",
                    }}
                  ></div>
                </div>

                <div
                  id="_274_1064__Frame_1171276923"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1065__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[61.07px] w-[114.28px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.16595745086669922px] left-[0.00px] top-[0.00px]"
                  ></div>

                  <div
                    id="_274_1066__image_88"
                    className="absolute h-[36.61px] w-[99.11px] left-[calc(50%-49.52px)] top-[calc(50%-18.39px)]"
                    style={{
                      background:
                        "url(/assets/homemob/images/image_88.png) center / contain no-repeat",
                    }}
                  ></div>
                </div>

                <div
                  id="_274_1067__Frame_1171276924"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1068__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(10,10,10,0.50)0%,rgba(10,10,10,0.50)100%)] h-[61.07px] w-[114.28px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.16595745086669922px] left-[0.00px] top-[0.00px]"
                  ></div>
                </div>

                <div
                  id="_274_1069__Frame_1171276925"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1070__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(10,10,10,0.50)0%,rgba(10,10,10,0.50)100%)] h-[61.07px] w-[114.28px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.16595745086669922px] left-[0.00px] top-[0.00px]"
                  ></div>
                </div>

                <div
                  id="_274_1071__Frame_1171276926"
                  className="relative h-[61.40px] w-[114.61px]"
                >
                  <div
                    id="_274_1072__Image"
                    className="absolute bg-[linear-gradient(0deg,rgba(9,9,9,0.50)0%,rgba(9,9,9,0.50)100%)] h-[61.07px] w-[114.28px] rounded-[4.978723049163818px] border-[#C8C3C3]/50 border-solid border-[0.16595745086669922px] left-[0.00px] top-[0.00px]"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1073__Section"
            className="relative overflow-hidden h-[792.00px] w-full rounded-[22.8799991607666px]"
          >
            <div
              id="_274_1074__Frame_1171276988"
              className="absolute h-[749.00px] w-[calc(100%-16px)] left-[8px] top-[35.00px]"
            >
              <div
                id="_274_1075__Frame_1171276995"
                className="absolute h-[201.44px] w-full left-0 top-[0.00px]"
              >
                <div
                  id="_274_1076__Border"
                  className="absolute border h-[30.00px] w-[103.00px] left-1/2 -translate-x-1/2 rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[0.00px]"
                >
                  <span
                    id="_274_1077__Our_blog"
                    className="flex justify-center text-center items-center h-[14.00px] w-[72.72px] absolute left-[calc(50%-36.50px)] top-[calc(50%-7.00px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Our blog
                    </span>
                  </span>
                </div>

                <span
                  id="_274_1078__Heading_2___Latest_i"
                  className="flex justify-center text-center items-center h-[80.00px] w-[370.00px] absolute left-1/2 -translate-x-1/2 top-[57.00px] -ml-[5px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[34.0px] font-normal leading-[38.00px]"
                    style={{
                      fontFamily: "SF Pro Display",
                    }}
                  >
                    Latest insights and trends
                  </span>
                </span>
                <div
                  id="_274_1079__Link"
                  className="absolute bg-[rgba(1,97,254,1.00)] h-[46.34px] w-[127.20px] left-1/2 -translate-x-1/2 rounded-[95.3499984741211px] top-[155.10px]"
                >
                  <div
                    id="_274_1080__Container"
                    className="absolute overflow-hidden h-[calc(100%-6.09px)] w-[50.95px] left-[calc(50%-40.72px)] top-[3.04px]"
                  ></div>

                  <div
                    id="_274_1081__Frame_251"
                    className="absolute h-[22.88px] w-[81.45px] left-[22.88px] top-[11.73px]"
                  >
                    <span
                      id="_274_1082__View_All"
                      className="flex justify-center text-center items-center h-[16.00px] w-[51.31px] absolute left-[calc(50%-40.72px)] top-[calc(50%-8.06px)]"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[22.00px]"
                        style={{
                          fontFamily: "SF Pro Display",
                        }}
                      >
                        View All
                      </span>
                    </span>
                    <div
                      id="_274_1083__67a22e78f02af13d518a"
                      className="absolute overflow-hidden h-[22.88px] w-[22.88px] top-[calc(50%-11.44px)] left-[calc(50%+17.85px)]"
                    >
                      <div
                        id="_274_1084__67a22e78f02af13d518a"
                        className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_274_1085__67a22e78f02af13d518a"
                          className="absolute overflow-hidden h-[22.88px] w-[22.88px] left-[calc(50%-11.44px)] top-[calc(50%-11.44px)]"
                        >
                          <img
                            id="_274_1086__Vector"
                            src="/assets/homemob/images/vector_16.svg"
                            alt="Vector"
                            className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.25)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="_274_1087__Group_-_1_of_4___Lis"
                className="absolute h-[425.00px] w-full left-0 rounded-[22.8799991607666px] top-[237.00px]"
              >
                <div
                  id="_274_1088__Frame_1171276996"
                  className="absolute h-[50.63px] w-[111.38px] left-[124.00px] top-[461.06px]"
                >
                  <div
                    id="_274_1090__Button_-_previous_sl"
                    role="button"
                    tabIndex={0}
                    className="group absolute overflow-hidden bg-white hover:bg-[rgba(1,97,254,1.00)] active:bg-[rgba(1,97,254,1.00)] focus-visible:bg-[rgba(1,97,254,1.00)] text-[#0161FE] hover:text-white active:text-white focus-visible:text-white flex items-center justify-center h-[49.63px] w-[44.56%] rounded-[1670.8699951171875px] border-[#0161feff] border-solid border-[0.5px] top-[0.00px] cursor-pointer"
                  >
                    <div
                      id="_274_1091__SVG"
                      className="absolute h-[21.09px] w-[21.09px] left-[calc(50%-10.55px)] top-[calc(50%-10.55px)]"
                    >
                      <img
                        id="_274_1092__Vector"
                        src="/assets/homemob/images/vector_17.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.13)] top-[calc(100%_*_0.19)] group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert group-focus-visible:brightness-0 group-focus-visible:invert"
                      />
                    </div>
                  </div>

                  <div
                    id="_274_1093__Button_-_next_slide"
                    role="button"
                    tabIndex={0}
                    className="absolute overflow-hidden bg-[rgba(1,97,254,1.00)] text-white flex items-center justify-center h-[50.63px] w-[45.46%] rounded-[1670.8699951171875px] left-[calc(100%_*_0.55)] top-[0.00px] cursor-pointer"
                  >
                    <div
                      id="_274_1094__SVG"
                      className="absolute h-[21.09px] w-[21.09px] left-[calc(50%-10.55px)] top-[calc(50%-10.55px)]"
                    >
                      <img
                        id="_274_1095__Vector"
                        src="/assets/homemob/images/vector_18.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.13)] top-[calc(100%_*_0.19)] brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="_274_1096__Frame_198"
                  className="absolute h-[68.00px] w-[352.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 pl-0 pr-px py-2.5 left-[3.00px] top-[263.00px]"
                >
                  <span
                    id="_274_1097__My_Rameswaram_Trip__"
                    className="flex justify-center text-center items-center h-[88.00px] w-[343.00px] relative"
                  >
                    <span
                      className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[30.00px]"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      My Rameswaram Trip: Book Pandits &amp; Temple Services
                      with Our New Website
                    </span>
                  </span>
                </div>

                <div
                  id="_274_1098__Frame_1171276951"
                  className="absolute h-[40.00px] w-[360.00px] left-[0.00px] top-[386.00px]"
                >
                  <div
                    id="_274_1099__Frame_124"
                    className="absolute h-[40.10px] w-[168.85px] left-[calc(50%-88.00px)] flex flex-row justify-start items-center flex-nowrap gap-[15px] pl-[7px] pr-0 py-0 top-[0.00px]"
                  >
                    <div
                      id="_274_1100__Group_3"
                      className="relative h-[40.10px] w-[115.74px]"
                    >
                      <div
                        id="_274_1101__Background"
                        className="absolute bg-[rgba(1,97,254,1.00)] h-[18.10px] w-[79.74px] left-[calc(50%-57.87px)] flex flex-row justify-between items-end flex-nowrap px-[18px] py-[11px] rounded-[86.01754760742188px] top-[0.00px]"
                      >
                        <span
                          id="_274_1102__Explore"
                          className="flex justify-center text-center items-center h-[17.43px] w-[58.40px] relative"
                        >
                          <span
                            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.775653839111328px] font-medium leading-[20.65px] tracking-[-0.06845570355653763px]"
                            style={{
                              fontFamily: "SF Pro Display",
                            }}
                          >
                            Explore
                          </span>
                        </span>
                        <div
                          id="_274_1103__Img"
                          className="relative h-[17.34px] w-[16.51px]"
                        >
                          <img
                            id="_274_1104__Vector"
                            src="/assets/homemob/images/vector_19.svg"
                            alt="Vector"
                            className="absolute top-[calc(100%_*_0.07)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      id="_274_1105__Frame_50"
                      className="relative bg-[rgba(1,97,254,1.00)] h-[22.11px] w-[22.11px] flex flex-row justify-start items-center flex-nowrap gap-2 p-2 rounded-[49.684879302978516px]"
                    >
                      <div
                        id="_274_1106__iconamoon_profile"
                        className="relative overflow-hidden h-[20.92px] w-[20.92px]"
                      >
                        <img
                          id="_274_1107__Group"
                          src="/assets/homemob/images/group_1.svg"
                          alt="Group"
                          className="absolute left-[calc(100%_*_0.17)] top-[calc(100%_*_0.17)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_274_1110__Container"
                  className="absolute overflow-hidden h-[55.78%] w-[99.81%] top-[calc(100%_*_-0.00)] rounded-[15.260000228881836px] border-[#8e8383ff]/20 border-solid border-[0.10000000149011612px]"
                >
                  <div
                    id="_274_1111__67ac6ce957e9d82f5cec"
                    className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[237.27px] w-[359.50px] left-[calc(50%-180.25px)] top-[0.00px]"
                  >
                    <div
                      id="_274_1112__image_26"
                      className="absolute h-[297.00px] w-[260.00px] left-[calc(50%-130.00px)] top-[calc(50%-148.50px)]"
                      style={{
                        background:
                          "url(/assets/homemob/images/image_26.png) center / contain no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1113__Section"
            className="relative bg-[rgba(246,247,249,1.00)] h-[1410.00px] w-full rounded-[20px]"
          >
            <div
              id="_274_1114__Border"
              className="absolute border h-[30.00px] w-[122.00px] left-[calc(50%-62.50px)] rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[35.00px]"
            >
              <span
                id="_274_1115__Contact_me"
                className="flex justify-start text-left items-center h-[14.00px] w-[90.00px] absolute left-[calc(50%-45.00px)] top-[calc(50%-7.00px)]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Contact me
                </span>
              </span>
            </div>

            <span
              id="_274_1116__Heading_1___Talk_to_"
              className="flex justify-center text-center items-center h-[100.00px] w-[314.00px] absolute left-[calc(50%-154.50px)] top-[92.00px]"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[46.00px]"

              >
                Connect with Arunijone
              </span>
            </span>
            <span
              id="_274_1117__Learn_about_my_visio"
              className="flex justify-center text-center items-center h-[42.00px] w-[241.00px] absolute left-[calc(50%-120.50px)] top-[222.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"

              >
                Learn about my vision, story, and how I bring ideas to life.
              </span>
            </span>
            <div
              id="_274_1118__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.25px] top-[299.69px]"
            >
              <div
                id="_274_1119__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_274_1120__Vector"
                  src="/assets/homemob/images/vector_20.svg"
                  alt="Vector"
                  className="absolute top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_274_1121__Vector"
                  src="/assets/homemob/images/vector_21.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.33)]"
                />
              </div>

              <span
                id="_274_1122__Email_Addres"
                className="flex justify-start text-left items-center h-[21.00px] w-[104.61px] absolute left-[68.00px] top-[18.25px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Email Addres
                </span>
              </span>
              <span
                id="_274_1123__arunijone_gmail_com"
                className="flex justify-start text-left items-center h-[23.00px] w-[196.65px] absolute left-[68.00px] top-[44.58px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  arunijone@gmail.com
                </span>
              </span>
            </div>

            <div
              id="_274_1124__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.25px] top-[401.45px]"
            >
              <div
                id="_274_1125__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_274_1126__Vector"
                  src="/assets/homemob/images/vector_22.svg"
                  alt="Vector"
                  className="absolute top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_274_1127__Vector"
                  src="/assets/homemob/images/vector_23.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.30)]"
                />
              </div>

              <span
                id="_274_1128__Phone_Number"
                className="flex justify-start text-left items-center h-[21.00px] w-[120.84px] absolute left-[68.00px] top-[18.25px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Phone Number
                </span>
              </span>
              <span
                id="_274_1129___91_85085_10983"
                className="flex justify-start text-left items-center h-[23.00px] w-[165.00px] absolute left-[67.75px] top-[44.55px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  +91 85085 10983
                </span>
              </span>
            </div>

            <div
              id="_274_1130__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.25px] top-[503.22px]"
            >
              <div
                id="_274_1131__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_274_1132__Vector"
                  src="/assets/homemob/images/vector_24.svg"
                  alt="Vector"
                  className="absolute top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_274_1133__Vector"
                  src="/assets/homemob/images/vector_25.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.30)]"
                />
              </div>

              <span
                id="_274_1134__My_Location"
                className="flex justify-start text-left items-center h-[21.00px] w-[103.00px] absolute left-[67.75px] top-[17.78px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  My Location
                </span>
              </span>
              <span
                id="_274_1135__Rameswaram__Tamilnad"
                className="flex justify-start text-left items-center h-[23.00px] w-[248.42px] absolute left-[68.00px] top-[44.58px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Rameswaram, Tamilnadu
                </span>
              </span>
            </div>

            <div
              id="_274_1136__Form_-_Form"
              className="absolute w-[calc(100%-30.75px)] flex flex-col justify-start items-start flex-nowrap gap-4 left-[15.25px] top-[639.75px]"
            >
              {/** Mobile contact form - controlled inputs */}
              <form className="w-full" onSubmit={(e) => { e.preventDefault(); console.log('Mobile contact submit', formData); setFormData({ firstName: '', lastName: '', email: '', budget: '', message: '' }); }}>
                <div className="mb-4">
                  <span className="flex justify-start text-left items-center h-[22.88px] relative">
                    <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]" style={{ fontFamily: "SF Pro Display" }}>
                      Your Name
                    </span>
                  </span>
                  <div style={{ boxShadow: 'none' }} className="relative overflow-hidden bg-white h-[51.39px] w-full rounded-[15.859999656677246px] border border-[#C8C3C3]/35 mt-2.5">
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-full w-full px-6 text-[14px] bg-transparent outline-none border-0 appearance-none contact-input"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="flex justify-start text-left items-center h-[22.88px] relative">
                    <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]" style={{ fontFamily: "SF Pro Display" }}>
                      Last Name
                    </span>
                  </span>
                  <div style={{ boxShadow: 'none' }} className="relative overflow-hidden bg-white h-[51.39px] w-full rounded-[15.859999656677246px] border border-[#C8C3C3]/35 mt-2.5">
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="h-full w-full px-6 text-[14px] bg-transparent outline-none border-0 appearance-none contact-input"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="flex justify-start text-left items-center h-[22.88px] relative">
                    <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]" style={{ fontFamily: "SF Pro Display" }}>
                      Email address
                    </span>
                  </span>
                  <div style={{ boxShadow: 'none' }} className="relative overflow-hidden bg-white h-[51.39px] w-full rounded-[15.859999656677246px] border border-[#C8C3C3]/35 mt-2.5">
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="h-full w-full px-6 text-[14px] bg-transparent outline-none border-0 appearance-none contact-input"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="flex justify-start text-left items-center h-[22.88px] relative">
                    <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]" style={{ fontFamily: "SF Pro Display" }}>
                      What's your Budget?
                    </span>
                  </span>
                  <div style={{ boxShadow: 'none' }} className="relative overflow-hidden bg-white h-[51.39px] w-full rounded-[15.859999656677246px] border border-[#C8C3C3]/35 mt-2.5">
                    <input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Your Budget"
                      className="h-full w-full px-6 text-[14px] bg-transparent outline-none border-0 appearance-none contact-input"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="flex justify-start text-left items-center h-[22.88px] relative">
                    <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]" style={{ fontFamily: "SF Pro Display" }}>
                      Message
                    </span>
                  </span>
                  <div style={{ boxShadow: 'none' }} className="relative overflow-hidden bg-white h-[211.56px] w-full rounded-[15.859999656677246px] border border-[#C8C3C3]/35 mt-2.5">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write something...."
                      className="h-full w-full p-4 text-[14px] bg-transparent outline-none resize-none border-0 appearance-none contact-input"
                    />
                  </div>
                </div>

                <div className="relative">
                  <button type="submit" className="relative bg-[rgba(1,97,254,1.00)] h-[56px] w-full rounded-[95.3499984741211px] text-white font-semibold text-[16px] tracking-wide border-0 outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <MobFooter />

        </div >

        <div
          id="_274_935__Frame_281"
          className="relative h-[89.00px] w-[calc(100%-16px)] left-[8px] mt-[10px] mb-[20px]"
        >
          <div
            id="_274_937__Rectangle_15"
            className="absolute bg-white h-[89.00px] w-full rounded-[72px] left-[0.00px] top-[0.00px]"
          ></div>

          <div
            id="_274_938___"
            className="absolute bg-[rgba(1,97,254,1.00)] border h-[24.00px] w-[76.31px] top-[calc(50%-29.50px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-5 py-[17px] rounded-[95px] border-[#0161feff] border-solid left-[20.05px]"
          >
            <div
              id="_274_939__Frame_260"
              className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-2.5"
            >
              <div
                id="_274_940__Frame_259"
                className="relative w-[78.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5"
              >
                <div
                  id="_274_941__Frame_268"
                  className="relative h-[24.00px] w-[78.00px]"
                >
                  <img
                    id="_274_942__home"
                    src="/assets/homemob/images/home.svg"
                    alt="home"
                    className="absolute left-[calc(100%_*_0.05)] top-[calc(100%_*_0.13)]"
                  />
                  <span
                    id="_274_943__Home"
                    className="flex justify-start text-left items-center h-[20.00px] w-[44.00px] absolute left-[34.00px] top-[2.00px]"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-bold leading-[27.63px] capitalize"
                      style={{
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Home
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <img
            id="_274_944__familiar_face_and_zo"
            src="/assets/homemob/images/familiar_face_and_zone.svg"
            alt="familiar_face_and_zone"
            className="absolute left-[calc(100%_*_0.44)] top-[calc(100%_*_0.38)]"
          />
          <img
            id="_274_946__draw"
            src="/assets/homemob/images/draw.svg"
            alt="draw"
            className="absolute left-[calc(100%_*_0.65)] top-[calc(100%_*_0.40)]"
          />
          <img
            id="_274_948__article_person"
            src="/assets/homemob/images/article_person.svg"
            alt="article_person"
            className="absolute left-[calc(100%_*_0.83)] top-[calc(100%_*_0.40)]"
          />
        </div>

      </div >

    </>
  );
};
export default HomeUXUI;


