import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeUXUI from "./Homemob.tsx";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import StatHighlights from "../components/StatHighlights";
import ServiceCategoriesSection from "../components/ServiceCategoriesSection";

const DESIGN_HEIGHT = 5964;

const HomeDesktop = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
  });
  const thumbs = [
    "/assets/Home/images/image_26.png",
    "/assets/Home/images/image_10.png",
    "/assets/Home/images/group_10.svg",
    "/assets/Home/images/image_1_1.png",
    "/assets/Home/images/image_47.png",
    "/assets/Home/images/image_63.png",
    "/assets/Home/images/image_242.png",
    "/assets/Home/images/image_242.png", // duplicate entry moved to be the last/main for the last thumb
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simple demo submit - replace with API call if needed
    console.log("Contact form submitted:", formData);
    alert("Message sent (demo). Check console for payload.");
    setFormData({ firstName: "", lastName: "", email: "", budget: "", message: "" });
  };

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
          <Navbar activePage="home" />

          <div
            id="_240_619__Frame_1171277008"
            className="absolute h-[5846.28px] w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[108.00px]"
          >
            <div
              id="_240_620__Hero_Page"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[916.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_240_621__Home_Profile_Picture"
                className="absolute overflow-hidden bg-white h-[832.00px] w-[764.00px] rounded-[20.41314125061035px] left-[43%] top-[calc(50%-416.00px)] z-0 pointer-events-none"
              >
                <div
                  id="_240_622__67a5fbb5273bae41bd4e"
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    filter: "blur(0.0px)",
                  }}
                >
                  <div
                    id="_240_623__67a5fbb5273bae41bd4e"
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      filter: "blur(0.0px)",
                    }}
                  >
                    <div
                      id="_240_624__Arunijone_v4_2"
                      className="absolute inset-0 h-full w-full"
                      style={{
                        background:
                          "url(/assets/Home/images/arunijone_v4_2.png) center / cover no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                id="_240_625__Frame_250"
                className="absolute h-[356.00px] w-[551.00px] top-[calc(50%-178.00px)] flex flex-col justify-start items-start flex-nowrap gap-[30px] left-[42.00px]"
              >
                <span
                  id="_240_626__Heading_1___Expert_g"
                  className="flex justify-start text-left items-center h-[204.00px] relative z-10"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[68.00px]"
                  >
                    Crafting practical solutions for digital growth.
                  </span>
                </span>
                <span
                  id="_240_627__Our_flexible_infrast"
                  className="flex justify-start text-left items-center h-[37.00px] w-[464.00px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                  >
                    Our flexible infrastructure empowers your business to adapt
                    quickly, stay efficient, and scale seamlessly as you grow.
                  </span>
                </span>
                <div
                  id="_240_628__Frame_249"
                  className="relative h-[55.00px] w-[350.00px] flex flex-row justify-start items-center flex-nowrap gap-4"
                >
                  <div
                    id="_240_629__Link"
                    className="relative bg-[rgba(1,97,254,1.00)] h-[calc(100%-0px-0px)] w-[149px] rounded-[85.04350280761719px] cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => navigate("/portfolio1")}
                  >
                    <div
                      id="_240_630__Frame_245"
                      className="absolute h-[15.00px] w-[85.64px] left-[calc(50%-42.82px)] top-[calc(50%-7.00px)] flex flex-row justify-start items-center flex-nowrap gap-1.5"
                    >
                      <span
                        id="_240_631__About_Me"
                        className="flex justify-start text-left items-center h-[15.00px] w-[66.00px] relative"
                      >
                        <span
                          className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[17.96px]"
                        >
                          About Me
                        </span>
                      </span>
                      <img
                        id="_240_632__Vector"
                        src="/assets/Home/images/vector.svg"
                        alt="Vector"
                        className="relative"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <StatHighlights />

            <div
              id="_240_653__About_Us_Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[857.00px] w-full rounded-[20px]"
            >
              <div
                id="_240_654__Frame_1171276983"
                className="absolute h-[756.63px] w-[1327.18px] left-[46.82px] top-[50.00px]"
              >
                <div
                  id="_240_655__Border"
                  className="absolute h-[36.22px] w-[121.22px] rounded-[225.14527893066406px] border-[#202833ff] border-solid border-[0.8893398642539978px] left-[0.18px] top-[0.00px]"
                >
                  <span
                    id="_240_656__About_us"
                    className="flex justify-start text-left items-center h-[16.01px] w-[84.06px] absolute left-[calc(50%-42.50px)] top-[calc(50%-8.00px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[20.00px] tracking-[1.9698877334594727px] uppercase"
                    >
                      About us
                    </span>
                  </span>
                </div>

                <span
                  id="_240_657__Heading_2___Unlock_o"
                  className="flex justify-start text-left items-center h-[78.00px] w-[553.00px] absolute left-[0.18px] top-[68.00px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[38.00px]"
                  >
                    Unlocking creativity, strategy, and innovation for every
                    business
                  </span>
                </span>
                <span
                  id="_240_658__At_Arunijone__I_brin"
                  className="flex justify-start text-left items-center h-[82.00px] w-[473.00px] absolute left-[854.18px] top-[66.00px]"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                  >
                    At Arunijone, I bring together skills from UX/UI design,
                    digital marketing, stock research and product innovation to
                    deliver practical, impactful solutions for individuals and
                    businesses.
                  </span>
                </span>
                <div
                  id="_240_659__Frame_1171276999"
                  className="absolute h-[578.83px] w-[1326.34px] left-[0.00px] top-[176.80px]"
                >
                  <div
                    id="_240_660__Paragraph_Background"
                    className="absolute bg-[rgba(35,35,35,1.00)] h-[281.94px] w-[calc(100%-1006.01px)] rounded-[18.765071868896484px] left-[670.68px] top-[0.00px]"
                  >
                    <span
                      id="_240_661__3_"
                      className="flex justify-start text-left items-center h-[54.25px] w-[76.11px] absolute left-[18.76px] top-[17.87px]"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]"
                      >
                        3+
                      </span>
                    </span>
                    <span
                      id="_240_662__Years_of_continuous_"
                      className="flex justify-start text-left items-center h-[111.00px] w-[283.00px] absolute left-[18.50px] top-[150.20px]"
                    >
                      <span
                        className="bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                      >
                        Years of continuous innovation and valuable insights,
                        helping businesses improve their digital presence, design
                        better products, and make informed decisions through
                        research-led strategies.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_240_663__Background"
                    className="absolute bg-[rgba(1,97,254,1.00)] h-[281.89px] w-[calc(100%-670.68px)] rounded-[18.765071868896484px] left-[0.00px] top-[296.95px]"
                  >
                    <div
                      id="_240_664__SVG"
                      className="absolute h-[48.78px] w-[48.78px] left-[18.76px] top-[18.76px]"
                    >
                      <img
                        id="_240_665__Vector"
                        src="/assets/Home/images/vector_2.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.02)] top-[calc(100%_*_0.01)]"
                      />
                      <img
                        id="_240_666__Vector"
                        src="/assets/Home/images/vector_3.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.43)] top-[calc(100%_*_0.66)]"
                      />
                      <img
                        id="_240_667__Vector"
                        src="/assets/Home/images/vector_4.svg"
                        alt="Vector"
                        className="absolute left-[calc(100%_*_0.35)] top-[calc(100%_*_0.30)]"
                      />
                    </div>

                    <span
                      id="_240_668__95_"
                      className="flex justify-start text-left items-center h-[55.00px] w-[123.00px] absolute left-[19.18px] top-[119.26px]"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]"
                      >
                        95%
                      </span>
                    </span>
                    <span
                      id="_240_669__Client_satisfaction_"
                      className="flex justify-start text-left items-center h-[62.00px] w-[609.00px] absolute left-[19.18px] top-[200.26px]"
                    >
                      <span
                        className="bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[24.00px]"
                      >
                        Client satisfaction achieved through personalized
                        solutions, proactive support, and a commitment to
                        understanding each client’s unique requirements. My focus
                        on excellence ensures that your success remains the
                        priority at every step.
                      </span>
                    </span>
                  </div>

                  <div
                    id="_240_670__Container"
                    className="absolute overflow-hidden h-[48.71%] w-[49.43%] rounded-[22.518085479736328px]"
                  >
                    <div
                      id="_240_671__67b5b9ef1d892948236c"
                      className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[281.94px] w-[655.67px] left-[-0.00px] top-[0.00px]"
                      style={{
                        filter: "blur(0.0px)",
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_673__Container"
                    className="absolute overflow-hidden h-[48.71%] w-[24.15%] rounded-[22.518085479736328px] left-[calc(100%_*_0.76)]"
                  >
                    <div
                      id="_240_674__67b5b9ee277a689d3cc0"
                      className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(197,198,199,1.00)0%,rgba(197,198,199,1.00)100%)] h-[281.94px] w-[320.33px] left-[0.00px] top-[0.00px]"
                      style={{
                        filter: "blur(0.0px)",
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_676__Container"
                    className="absolute overflow-hidden h-[48.70%] w-[24.15%] rounded-[22.518085479736328px] left-[calc(100%_*_0.5064)] top-[calc(100%_*_0.51)]"
                  >
                    <div
                      id="_240_677__67b5b9ebc673f016ac4e"
                      className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[281.89px] w-[320.33px] left-[-0.00px] top-[0.00px]"
                      style={{
                        filter: "blur(0.0px)",
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_678__Container"
                    className="absolute overflow-hidden h-[48.70%] w-[24.15%] rounded-[22.518085479736328px] left-[calc(100%_*_0.76)] top-[calc(100%_*_0.51)]"
                  >
                    <div
                      id="_240_679__67b5b9ec558603222d0b"
                      className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[281.89px] w-[320.33px] left-[0.00px] top-[0.00px]"
                      style={{
                        filter: "blur(0.0px)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <ServiceCategoriesSection badgeLabel="Project Category" />

            <div
              id="_240_690__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[1084.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_240_692__List"
                className="absolute h-[604.40px] w-[calc(100%-84.89px)] left-[42.45px] top-[224.60px]"
              ></div>

              <div
                id="_240_693__Frame_1171276984"
                className="absolute h-[983.63px] w-[1335.15px] left-[calc(50%-668.00px)] top-[50.00px]"
              >
                <div
                  id="_240_694__Border"
                  className="absolute h-[39.37px] w-[127px] rounded-[204.109px] border-[#202833] border-solid border-[0.750207px] left-[0px] top-[0px]"
                >
                  <span
                    id="_240_695__Projects"
                    className="flex justify-start text-left items-center h-[15px] w-[81px] absolute left-[calc(50%-40.5px)] top-[calc(50%-7.68px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[18.00px] tracking-[1.7862437963485718px] uppercase"
                    >
                      Projects
                    </span>
                  </span>
                </div>

                <span
                  id="_240_696__Heading_2___Our_Succ"
                  className="flex justify-start text-left items-center h-[73.00px] w-[424.00px] absolute left-[0.00px] top-[70.00px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[42.00px]"
                  >
                    Real Results. Real Impact. Our Success Stories.
                  </span>
                </span>
                <div
                  id="_240_697__Image_Box"
                  className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[605.00px] w-[1334.00px] left-[calc(50%-667.57px)] top-[calc(50%-318.82px)] rounded-[23.686382293701172px]"
                >
                  {selectedIndex === 6 ? (
                    <div
                      id="_240_698__resora_main"
                      className="absolute h-[480.00px] w-[388.00px] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                      style={{
                        // white background to match other images
                        background: 'transparent',
                      }}
                    >
                      <div className="text-center">
                        <img
                          src="/assets/Home/images/vector_19.svg"
                          alt="Resora"
                          className="mx-auto mb-6 w-24 h-24"
                        />
                        <div className="text-[48px] leading-[1]">
                          <span className="text-[#1F64FF] font-semibold">R</span>
                          <span className="text-[#1F64FF] font-medium">e</span>
                          <span className="text-black font-medium">sora</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      id="_240_698__image_26"
                      src={thumbs[selectedIndex]}
                      alt="Project"
                      className="absolute h-[480.00px] w-[388.00px] object-contain"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                      loading="lazy"
                    />
                  )}

                  <img
                    id="_240_699__Group_1000008339"
                    src="/assets/Home/images/group_1000008339.svg"
                    alt="Group_1000008339"
                    className="absolute left-[calc(100%_*_0.94)] top-[calc(100%_*_0.05)]"
                  />
                </div>

                <div
                  id="_240_704__Images_Container"
                  className="absolute bg-white h-[74.00px] w-[1175.00px] left-[calc(50%-598.57px)] flex flex-row justify-start items-start flex-nowrap gap-2.5 p-2.5 rounded-xl top-[808.00px]"
                >
                  <div
                    id="_240_705__Frame_1171276919"
                    className={`relative bg-white h-[73.80px] w-[137.92px] rounded-md border-[#8d8282ff]//20 border-solid border-[0.10000000149011612px] cursor-pointer`}
                    onClick={() => setSelectedIndex(0)}
                  >
                    <img
                      id="_240_706__image_26"
                      src="/assets/Home/images/image_26.png"
                      className="absolute h-[56.00px] w-[46.00px] left-[calc(50%-23.06px)] top-[calc(50%-28.00px)] object-contain"
                    />
                  </div>

                  <div
                    id="_240_707__Frame_1171276920"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(1)}
                  >
                    <div
                      id="_240_708__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(255,255,255,1.00)0%,rgba(255,255,255,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <div
                      id="_240_709__image_10"
                      className="absolute h-[38.00px] w-[53.00px] left-[calc(50%-26.19px)] top-[calc(50%-19.00px)]"
                      style={{
                        background:
                          "url(/assets/Home/images/10.png) center / contain no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_710__Frame_1171276921"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(2)}
                  >
                    <div
                      id="_240_711__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(255,255,254,1.00)0%,rgba(255,255,254,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <img
                      id="_240_712__Group_10"
                      src="/assets/Home/images/group_10.svg"
                      alt="Group_10"
                      className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.18)]"
                    />
                  </div>

                  <div
                    id="_240_721__Frame_1171276922"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(3)}
                  >
                    <div
                      id="_240_722__Image"
                      className={`absolute h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <div
                      id="_240_723__image_1"
                      className="absolute h-[49.00px] w-[62.00px] left-[calc(50%-31.44px)] top-[calc(50%-24.00px)]"
                      style={{
                        background:
                          "url(/assets/Home/images/11.png) center / contain no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_724__Frame_1171276924"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(4)}
                  >
                    <div
                      id="_240_725__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <div
                      id="_240_726__image_47"
                      className="absolute h-[34.00px] w-[118.00px] left-[calc(50%-58.69px)] top-[calc(50%-17.00px)]"
                      style={{
                        background:
                          "url(/assets/Home/images/12.png) center / contain no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_727__Frame_1171276926"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(5)}
                  >
                    <div
                      id="_240_728__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <div
                      id="_240_729__image_63"
                      className="absolute h-[31.00px] w-[110.00px] left-[14.13px] top-[21.00px]"
                      style={{
                        background:
                          "url(/assets/Home/images/13.png) center / contain no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                      }}
                    ></div>
                  </div>

                  <div
                    id="_240_730__Frame_1171276925"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(6)}
                  >
                    <div
                      id="_240_731__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <img
                      id="_240_733__Vector"
                      src="/assets/Home/images/14.png"
                      alt="Vector"
                      className="absolute h-[26.47px] w-[91px] left-[23.25px] top-[26.00px]"
                    />

                  </div>

                  <div
                    id="_240_735__Frame_1171276923"
                    className={`relative h-[74.00px] w-[138.13px] cursor-pointer`}
                    onClick={() => setSelectedIndex(7)}
                  >
                    <div
                      id="_240_736__Image"
                      className={`absolute bg-[linear-gradient(0deg,rgba(254,254,254,1.00)0%,rgba(254,254,254,1.00)100%)] h-[73.80px] w-[137.92px] rounded-md border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px] left-[0.00px] top-[0.00px]`}
                    ></div>

                    <div
                      id="_240_737__image_242"
                      className="absolute h-[61.00px] w-[56.00px] left-[calc(50%-27.56px)] top-[calc(50%-31.00px)]"
                      style={{
                        background:
                          "url(/assets/Home/images/15.png) center / contain no-repeat",
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="_240_738__Background"
                  className="absolute bg-[rgba(1,97,254,1.00)] h-[20.00px] w-[90.78px] flex flex-row justify-evenly items-end flex-nowrap px-[21px] py-[13px] rounded-[98.68194580078125px] left-[calc(50%+534.79px)] top-[87.00px]"
                >
                  <div
                    id="_240_739__Frame_256"
                    className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                  >
                    <span
                      id="_240_740__View_All"
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate("/products")}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/products'); }}
                      className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative cursor-pointer"
                    >
                      <span
                        className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                      >
                        View All
                      </span>
                    </span>
                    <div
                      id="_240_741__Img"
                      className="relative h-[19.89px] w-[18.94px]"
                    >
                      <img
                        id="_240_742__Vector"
                        src="/assets/Home/images/vector_20.svg"
                        alt="Vector"
                        className="absolute top-[calc(100%_*_0.07)]"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="_240_744__Button_-_previous_sl"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedIndex((selectedIndex - 1 + thumbs.length) % thumbs.length)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIndex((selectedIndex - 1 + thumbs.length) % thumbs.length); }}
                  className="absolute group overflow-hidden bg-white hover:bg-[rgba(1,97,254,1.00)] transition-colors h-[50.63px] rounded-[1670.87px] border-[#0161FE] border-solid border-[0.5px] left-[45.84%] right-[50.37%] top-[932px] cursor-pointer"
                >
                  <div
                    id="_240_745__SVG"
                    className="absolute h-[21.09px] w-[21.09px] left-[calc(50%-10.55px)] top-[calc(50%-10.55px)]"
                  >
                    <img
                      id="_240_746__Vector"
                      src="/assets/Home/images/vector_21.svg"
                      alt="Vector"
                      className="absolute left-[12.5%] top-[18.74%] transition duration-150 filter group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                </div>
                <div
                  id="_240_747__Button_-_next_slide"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedIndex((selectedIndex + 1) % thumbs.length)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIndex((selectedIndex + 1) % thumbs.length); }}
                  className="absolute group overflow-hidden bg-white hover:bg-[rgba(1,97,254,1.00)] transition-colors h-[50.63px] rounded-[1670.87px] border-[#0161FE] border-solid border-[0.5px] left-[50.39%] right-[45.82%] top-[932px] cursor-pointer"
                >
                  <div
                    id="_240_748__SVG"
                    className="absolute h-[21.09px] w-[21.09px] left-[calc(50%-10.55px)] top-[calc(50%-10.55px)]"
                  >
                    <img
                      id="_240_749__Vector"
                      src="/assets/Home/images/vector_21.svg"
                      alt="Vector"
                      className="absolute left-[12.5%] top-[18.74%] rotate-180 transition duration-150 filter group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_240_750__Section"
              className="relative overflow-hidden h-[849.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_240_752__Border"
                className="absolute h-[37.25px] w-[114.50px] rounded-[204.10891723632812px] border-[#202833ff] border-solid border-[0.7502073645591736px] left-[42.00px] top-[50.00px]"
              >
                <span
                  id="_240_753__Our_blog"
                  className="flex justify-start text-left items-center h-[14.00px] w-[81.00px] absolute left-[calc(50%-40.00px)] top-[calc(50%-6.37px)]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[18.00px] tracking-[1.7862437963485718px] uppercase"
                  >
                    Our blog
                  </span>
                </span>
              </div>

              <span
                id="_240_754__Heading_2___Latest_i"
                className="flex justify-start text-left items-center h-[36.39px] w-[475.00px] absolute left-[42.00px] top-[119.14px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[38.00px]"
                >
                  Latest insights and trends
                </span>
              </span>
              <div
                id="_240_755__Background"
                className="absolute bg-[rgba(1,97,254,1.00)] h-[20.00px] w-[90.78px] flex flex-row justify-evenly items-end flex-nowrap px-[21px] py-[13px] rounded-[98.68194580078125px] left-[calc(50%+533.41px)] top-[109.47px]"
              >
                <div
                  id="_240_756__Frame_256"
                  className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                >
                  <span
                    id="_240_757__View_All"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate("/blog")}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/blog'); }}
                    className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative cursor-pointer"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                    >
                      View All
                    </span>
                  </span>
                  <div
                    id="_240_758__Img"
                    className="relative h-[19.89px] w-[18.94px]"
                  >
                    <img
                      id="_240_759__Vector"
                      src="/assets/Home/images/vector_23.svg"
                      alt="Vector"
                      className="absolute top-[calc(100%_*_0.07)]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_240_760__Listitem___Link"
                className="absolute h-[613.00px] w-[calc(100%-759.00px)] rounded-[20.41314125061035px] left-[42.00px] top-[186.00px]"
              >
                <div
                  id="_240_761__Image_Box"
                  className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[435.80px] w-[660.80px] left-[calc(50%-330.95px)] top-[calc(50%-304.31px)] rounded-[23.686382293701172px] border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px]"
                >
                  <div
                    id="_240_762__Frame_103"
                    className="absolute h-[417.00px] w-[641.00px] left-[calc(50%-330.50px)] flex flex-col justify-start items-center flex-nowrap gap-2.5 p-2.5 top-[0.00px]"
                  >
                    <div
                      id="_240_763__Frame_104"
                      className="relative h-[417.00px] w-full flex items-center justify-center"
                    >
                      <img
                        id="_240_767__image_26"
                        src="/assets/Home/images/image_26.png"
                        alt="My Rameswaram Trip"
                        className="h-[299.00px] w-[241.00px] object-contain"
                      />
                    </div>
                  </div>
                </div>

                <span
                  id="_240_768__My_Rameswaram_Trip__"
                  className="flex justify-center text-center items-center h-[66.00px] w-[651.00px] absolute left-[0.00px] top-[469.00px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[32.0px] font-normal leading-[40.00px]"
                  >
                    My Rameswaram Trip: Book Pandits &amp; Temple Services with
                    Our New Website
                  </span>
                </span>
                <div
                  id="_240_769__Frame_1171276961"
                  className="absolute h-[46.00px] w-[661.00px] left-[0.00px] top-[569.00px]"
                >
                  <div
                    id="_240_770__Frame_126"
                    className="absolute h-[46.00px] w-[196.50px] left-[calc(50%-98.50px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_240_771__Group_3"
                      className="relative h-[46.00px] w-[132.78px]"
                    >
                      <div
                        id="_240_772__Background"
                        onClick={() => navigate('/blog')}

                        className="absolute bg-[rgba(1,97,254,1.00)] h-[20.00px] w-[90.78px] left-[calc(50%-66.39px)] flex flex-row justify-evenly items-end flex-nowrap px-[21px] py-[13px] rounded-[98.68194580078125px] top-[0.00px] cursor-pointer"
                      >
                        <div
                          id="_240_773__Frame_256"
                          className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px] cursor-pointer"
                        >
                          <span
                            id="_240_774__Explore"
                            role="button"
                            tabIndex={0}
                            onClick={() => navigate('/blog')}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/blog')}
                            className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative cursor-pointer"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                            >
                              Explore
                            </span>
                          </span>
                          <div
                            id="_240_775__Img"
                            className="relative h-[19.89px] w-[18.94px]"
                          >
                            <img
                              id="_240_776__Vector"
                              src="/assets/Home/images/vector_24.svg"
                              alt="Vector"
                              className="absolute top-[calc(100%_*_0.07)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <img
                      id="_240_779__Group"
                      src="/assets/Home/images/group_1.png"
                      alt="Group"
                      className="absolute h-[43.72px] w-[43.72px] ml-[152.78px]"
                    />
                  </div>
                </div>
              </div>

              <div
                id="_240_782__Listitem___Link"
                className="absolute h-[613.00px] w-[calc(100%-759.00px)] rounded-[20.41314125061035px] left-[716.00px] top-[186.00px]"
              >
                <div
                  id="_240_783__Container"
                  className="absolute overflow-hidden bg-white h-[71.09%] w-[99.97%] rounded-[20.41314125061035px] border-[#8e8383ff]//20 border-solid border-[0.10000000149011612px]"
                >
                  <div
                    id="_240_784__Frame_103"
                    className="absolute bg-white h-[417.00px] w-[641.00px] left-[calc(50%-330.50px)] top-[calc(50%-216.00px)] flex flex-col justify-start items-start flex-nowrap gap-2.5 p-2.5"
                  >
                    <div
                      id="_240_785__Frame_104"
                      className="relative h-[417.00px] w-full"
                    >
                      <img
                        id="_240_786__image_10"
                        src="/assets/Home/images/image_10.png"
                        alt="Seafsoft"
                        className="absolute h-[196.00px] w-[278.00px] left-[calc(50%-138.50px)] top-[calc(50%-97.50px)] object-contain"
                      />
                    </div>
                  </div>
                </div>

                <span
                  id="_240_787__Seafsoft__The_Ultima"
                  className="flex justify-center text-center items-center h-[75.00px] w-[655.00px] absolute left-[6.00px] top-[466.00px]"
                >
                  <span
                    className="bg-[rgba(17,17,17,0.80)] bg-clip-text text-transparent not-italic text-[32.0px] font-normal leading-[40.00px]"
                  >
                    Seafsoft: The Ultimate Seafood Inventory System for Export
                    Success
                  </span>
                </span>
                <div
                  id="_240_788__Frame_1171276962"
                  className="absolute h-[46.00px] w-[655.00px] left-[6.00px] top-[569.00px]"
                >
                  <div
                    id="_240_789__Frame_127"
                    className="absolute h-[46.00px] w-[196.50px] left-[calc(50%-98.50px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_240_790__Group_3"
                      className="relative h-[46.00px] w-[132.78px]"
                    >
                      <div
                        id="_240_791__Background"
                        onClick={() => navigate('/blog')}

                        className="absolute bg-[rgba(1,97,254,1.00)] h-[20.00px] w-[90.78px] left-[calc(50%-66.39px)] flex flex-row justify-evenly items-end flex-nowrap px-[21px] py-[13px] rounded-[98.68194580078125px] top-[0.00px] cursor-pointer"
                      >
                        <div
                          id="_240_792__Frame_256"

                          className="relative h-[20.00px] flex flex-row justify-start items-center flex-nowrap gap-[5px]"
                        >
                          <span
                            id="_240_793__Explore"
                            role="button"
                            tabIndex={0}
                            onClick={() => navigate('/blog')}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/blog')}
                            className="flex justify-center text-center items-center h-[20.00px] w-[67.00px] relative cursor-pointer"
                          >
                            <span
                              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                            >
                              Explore
                            </span>
                          </span>
                          <div
                            id="_240_794__Img"
                            className="relative h-[19.89px] w-[18.94px]"
                          >
                            <img
                              id="_240_795__Vector"
                              src="/assets/Home/images/vector_25.svg"
                              alt="Vector"
                              className="absolute top-[calc(100%_*_0.07)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <img
                      id="_240_798__Group"
                      src="/assets/Home/images/group_1.png"
                      alt="Group"
                      className="absolute h-[43.72px] w-[43.72px] ml-[152.78px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_240_801__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[677.00px] w-full rounded-[20px]"
            >
              <div
                id="_240_802__Frame_1171276994"
                className="absolute h-[577.00px] w-[1338.00px] left-[41.00px] top-[50.00px]"
              >
                <div
                  id="_240_803__Border"
                  className="absolute h-[38px] w-[140px] rounded-[199.268px] border-[#202833] border-solid border-[0.711772px] left-[0px] top-[0px]"
                >
                  <span
                    id="_240_804__Contact_Us"
                    className="flex justify-start text-left items-center h-[15px] w-[102px] absolute left-[calc(50%-51px)] top-[calc(50%-7.5px+0.5px)]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[18.00px] tracking-[1.7438422441482544px] uppercase"
                    >
                      Contact Us
                    </span>
                  </span>
                </div>

                <span
                  id="_240_805__Heading_1___Talk_to_"
                  className="flex justify-start text-left items-center h-[39.00px] w-[463.00px] absolute left-[0.00px] top-[68.00px] z-10"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[40.0px] font-normal leading-[45.71px]"
                  >
                    Connect with Arunijone
                  </span>
                </span>
                <span
                  id="_240_806__Learn_about_my_visio"
                  className="flex justify-start text-left items-center h-[16.01px] w-[409.00px] absolute left-[1.45px] top-[122.66px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[28.00px]"
                  >
                    Learn about my vision, story, and how I bring ideas to life.
                  </span>
                </span>
                <div
                  id="_240_807__Background"
                  className="absolute bg-white h-[69.73px] w-[calc(100%-686.05px)] rounded-[15px] left-[0.45px] top-[340.75px]"
                >
                  <div
                    id="_240_808__SVG"
                    className="absolute h-[43.18px] w-[43.18px] top-[calc(50%-21.59px)] left-[20.28px]"
                  >
                    <img
                      id="_240_809__Vector"
                      src="/assets/Home/images/vector_26.svg"
                      alt="Vector"
                      className="absolute top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_240_810__Vector"
                      src="/assets/Home/images/vector_27.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.33)]"
                    />
                  </div>

                  <span
                    id="_240_811__Email_Addres"
                    className="flex justify-start text-left items-center h-[14.00px] w-[122.00px] absolute left-[83.55px] top-[13.25px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[19.88px]"
                    >
                      Email Addres
                    </span>
                  </span>
                  <span
                    id="_240_812__arunijone_gmail_com"
                    className="flex justify-start text-left items-center h-[20.00px] w-[199.00px] absolute left-[83.55px] top-[36.25px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[23.25px]"
                    >
                      arunijone@gmail.com
                    </span>
                  </span>
                </div>

                <div
                  id="_240_813__Background"
                  className="absolute bg-white h-[69.73px] w-[calc(100%-686.05px)] rounded-[15px] left-[0.45px] top-[423.76px]"
                >
                  <div
                    id="_240_814__SVG"
                    className="absolute h-[43.18px] w-[43.18px] top-[calc(50%-21.58px)] left-[20.28px]"
                  >
                    <img
                      id="_240_815__Vector"
                      src="/assets/Home/images/vector_28.svg"
                      alt="Vector"
                      className="absolute top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_240_816__Vector"
                      src="/assets/Home/images/vector_29.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.30)]"
                    />
                  </div>

                  <span
                    id="_240_817__Phone_Number"
                    className="flex justify-start text-left items-center h-[14.00px] w-[116.00px] absolute left-[83.55px] top-[13.24px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[19.88px]"
                    >
                      Phone Number
                    </span>
                  </span>
                  <span
                    id="_240_818___91_85085_10983"
                    className="flex justify-start text-left items-center h-[18.00px] w-[167.00px] absolute left-[83.55px] top-[38.24px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[23.25px]"
                    >
                      +91 85085 10983
                    </span>
                  </span>
                </div>

                <div
                  id="_240_819__Background"
                  className="absolute bg-white h-[69.73px] w-[calc(100%-686.05px)] rounded-[15px] left-[0.45px] top-[506.77px]"
                >
                  <div
                    id="_240_820__SVG"
                    className="absolute h-[43.18px] w-[43.18px] top-[calc(50%-21.59px)] left-[20.28px]"
                  >
                    <img
                      id="_240_821__Vector"
                      src="/assets/Home/images/vector_30.svg"
                      alt="Vector"
                      className="absolute top-[calc(100%_*_0.01)]"
                    />
                    <img
                      id="_240_822__Vector"
                      src="/assets/Home/images/vector_31.svg"
                      alt="Vector"
                      className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.30)]"
                    />
                  </div>

                  <span
                    id="_240_823__My_Location"
                    className="flex justify-start text-left items-center h-[14.00px] w-[100.00px] absolute left-[83.55px] top-[14.23px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[19.88px]"
                    >
                      My Location
                    </span>
                  </span>
                  <span
                    id="_240_824__Rameswaram"
                    className="flex justify-start text-left items-center h-[16.00px] w-[260.00px] absolute left-[83.55px] top-[40.23px]"
                  >
                    <span
                      className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[23.25px]"
                    >
                      Rameswaram
                    </span>
                  </span>
                </div>

                <div
                  id="_240_825__Form_-_Form"
                  className="absolute left-[686px] right-0 top-[68px] bottom-0"
                >
                  <form onSubmit={handleSubmit} className="relative h-full w-full">
                    {/* Your Name label */}
                    <label
                      className="absolute flex items-center"
                      style={{ left: "-0.39px", top: "2.34px", width: "80px", height: "16px", fontSize: "16px", fontWeight: 500, lineHeight: "20px", color: "#111111" }}
                    >
                      Your Name
                    </label>
                    {/* Your Name input */}
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="absolute bg-white rounded-[15px] border-[0.711772px] border-[rgba(17,17,17,0.1)] focus:outline-none focus:border-[rgba(17,17,17,0.3)] placeholder:text-[rgba(17,17,17,0.4)] text-[16px] font-normal"
                      style={{ height: "46.49px", left: "-0.39px", right: "332.26px", top: "30.38px", paddingLeft: "20.63px", paddingRight: "20.64px", boxSizing: "border-box" }}
                    />

                    {/* Last Name label */}
                    <label
                      className="absolute flex items-center"
                      style={{ left: "331.61px", top: "2.34px", width: "78px", height: "16px", fontSize: "16px", fontWeight: 500, lineHeight: "20px", color: "#111111" }}
                    >
                      Last Name
                    </label>
                    {/* Last Name input */}
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="absolute bg-white rounded-[15px] border-[0.711772px] border-[rgba(17,17,17,0.1)] focus:outline-none focus:border-[rgba(17,17,17,0.3)] placeholder:text-[rgba(17,17,17,0.4)] text-[16px] font-normal"
                      style={{ height: "46.49px", left: "331.43px", right: "0.44px", top: "30.38px", paddingLeft: "20.63px", paddingRight: "20.64px", boxSizing: "border-box" }}
                    />

                    {/* Email address label */}
                    <label
                      className="absolute flex items-center"
                      style={{ left: "-0.39px", top: "90.34px", width: "101px", height: "16px", fontSize: "16px", fontWeight: 500, lineHeight: "20px", color: "#111111" }}
                    >
                      Email address
                    </label>
                    {/* What’s Your Budget label */}
                    <label
                      className="absolute flex items-center"
                      style={{ left: "332px", top: "90px", width: "138px", height: "16px", fontSize: "16px", fontWeight: 500, lineHeight: "20px", color: "#111111" }}
                    >
                      What’s Your Budget
                    </label>
                    {/* Email input */}
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="absolute bg-white rounded-[15px] border-[0.711772px] border-[rgba(17,17,17,0.1)] focus:outline-none focus:border-[rgba(17,17,17,0.3)] placeholder:text-[rgba(17,17,17,0.4)] text-[16px] font-normal"
                      style={{ height: "47px", left: "0px", right: "332px", top: "118px", paddingLeft: "20.63px", paddingRight: "20.69px", boxSizing: "border-box" }}
                    />
                    {/* Budget input */}
                    <input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Your budget"
                      className="absolute bg-white rounded-[15px] border-[0.711772px] border-[rgba(17,17,17,0.1)] focus:outline-none focus:border-[rgba(17,17,17,0.3)] placeholder:text-[rgba(17,17,17,0.4)] text-[16px] font-normal"
                      style={{ height: "47px", left: "332px", right: "0px", top: "118px", paddingLeft: "20px", paddingRight: "22px", boxSizing: "border-box" }}
                    />

                    {/* Message label */}
                    <label
                      className="absolute flex items-center"
                      style={{ left: "-0.39px", top: "178.34px", width: "66px", height: "16px", fontSize: "16px", fontWeight: 500, lineHeight: "20px", color: "#111111" }}
                    >
                      Message
                    </label>
                    {/* Message textarea */}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write something...."
                      className="absolute bg-white rounded-[15px] border-[0.711772px] border-[rgba(17,17,17,0.1)] focus:outline-none focus:border-[rgba(17,17,17,0.3)] placeholder:text-[rgba(17,17,17,0.4)] text-[16px] font-normal overflow-auto resize-none"
                      style={{ height: "235.79px", left: "-0.39px", right: "0.45px", top: "206.5px", paddingLeft: "20.39px", paddingTop: "20.5px", paddingRight: "20.39px", boxSizing: "border-box" }}
                    />

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="absolute bg-[#0161FE] text-white text-[20px] font-medium flex items-center justify-center focus:outline-none hover:opacity-95 cursor-pointer border-0"
                      style={{ height: "55px", left: "0px", right: "0px", top: "454px", borderRadius: "83.0282px" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </DesktopPageWrapper>

      {/* Mobile View */}
      <div className="md:hidden overflow-x-hidden">
        <HomeUXUI />
      </div>

    </>
  );
};
export default HomeDesktop;
