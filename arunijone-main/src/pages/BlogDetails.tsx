import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobFooter from "../components/MobFooter";

const DESIGN_HEIGHT = 5919;

const BlogDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop */}
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        <Navbar activePage="home" />
        <div className="absolute h-[5690.28px] w-[1420.00px] flex flex-col justify-start items-center flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]">

          {/* Hero */}
          <div className="relative overflow-hidden bg-[#F6F7F9] h-[926.00px] w-full rounded-[20px]">
            <span className="absolute flex justify-center text-center items-center h-[49.00px] w-[1329.00px] left-[calc(50%-664.00px)] top-[45.00px]">
              <span className="whitespace-nowrap text-[#111111] text-[40px] font-normal leading-[47px]">
                Blog Title Goes Here – Subtitle of the Blog Post
              </span>
            </span>
            <div className="absolute overflow-hidden h-[67.49%] w-[1331.00px] left-[calc(50%-665.00px)] top-[27.65%] rounded-[20px]">
              <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.20)0%,rgba(0,0,0,0.20)100%)] h-[627.50px] w-[1335.11px] left-[0px] top-[0px]">
                <div className="absolute h-[628.00px] w-[1335.00px] left-[0px] top-[0px]" style={{ background: "url(/assets/portfolio/images/gemini_logo_removed_1.png) 100% / cover no-repeat" }}></div>
              </div>
            </div>
          </div>

          {/* Related Works */}
          <div className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[366.00px] w-full rounded-[23px]">
            <div className="absolute h-[266.00px] w-[1015.00px] left-[203.00px] top-[50.00px]">
              <span className="flex justify-center text-center items-center h-[70.00px] w-[354.00px] absolute left-[calc(50%-177.50px)] top-[68.00px]">
                <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36px] font-normal leading-[45px]">
                  Related Work Across<br />My Core Services
                </span>
              </span>
              <div className="absolute h-[38.00px] w-[175.00px] left-[calc(50%-88.00px)] top-[0px]">
                <div className="relative h-[18.06px] w-[133.06px] flex flex-row justify-center items-center gap-2.5 px-5 py-[9px] rounded-[236px] border-[#202833ff] border-solid border-[0.97px]">
                  <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14px] font-medium leading-[19.61px] tracking-[2.07px] uppercase">Related works</span>
                </div>
              </div>
              <div className="absolute h-[78.00px] w-[1015.00px] left-[0px] top-[188.00px]">
                <div className="absolute h-[77.72px] w-[658.00px] left-[calc(50%-329.50px)] top-[0px]">
                  <div className="relative h-[77.72px] w-full flex flex-row justify-start items-center gap-5">
                    <div className="relative bg-[rgba(1,97,254,1.00)] h-[43.72px] flex flex-row justify-start items-center gap-6 px-6 py-[17px] rounded-[23px]">
                      <div className="relative h-[43.72px] w-[43.72px] rounded-[38px]">
                        <img src="/assets/portfolio/images/vector_2.png" alt="Vector" className="absolute" />
                      </div>
                      <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[20px] font-normal leading-[30px] capitalize">Overview</span>
                    </div>
                    <div onClick={() => navigate("/portfolio2")} className="relative bg-white h-[43.72px] flex flex-row justify-start items-center gap-6 px-6 py-[17px] rounded-[23px] cursor-pointer">
                      <div className="relative bg-[rgba(1,97,254,1.00)] h-[43.72px] w-[43.72px] rounded-[38px]">
                        <img src="/assets/portfolio/images/vector_3.png" alt="Vector" className="absolute" />
                      </div>
                      <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[20px] font-normal leading-[30px] capitalize">UI Design</span>
                    </div>
                    <div onClick={() => navigate("/portfolio4")} className="relative bg-white h-[43.72px] flex flex-row justify-start items-center gap-6 px-6 py-[17px] rounded-[23px] cursor-pointer">
                      <div className="relative bg-[rgba(1,97,254,1.00)] h-[43.72px] w-[43.72px] rounded-[38px]">
                        <img src="/assets/portfolio/images/vector_3.png" alt="Vector" className="absolute" />
                      </div>
                      <span className="whitespace-nowrap bg-[rgba(1,97,254,1.00)] bg-clip-text text-transparent not-italic text-[20px] font-normal leading-[30px] capitalize">UX Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Region */}
          <div className="relative h-[1179.00px] w-[1416.00px]" style={{ transform: "translateY(-1px)" }}>
            <span className="flex justify-center text-center items-center h-[82.00px] w-[529.00px] absolute left-[calc(50%-265.00px)] top-[118.00px]">
              <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36px] font-normal leading-[45px]">Solutions built for businesses across regions.</span>
            </span>
            <div className="absolute h-[38.00px] w-[180.00px] left-[calc(50%-90.50px)] top-[50.00px]">
              <div className="relative h-[18.06px] w-[138.06px] flex flex-row justify-center items-center gap-2.5 px-5 py-[9px] rounded-[236px] border-[#202833ff] border-solid border-[0.97px]">
                <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14px] font-medium leading-[19.61px] tracking-[2.07px] uppercase">Project Region</span>
              </div>
            </div>
            <div className="absolute h-[879.00px] w-[1334.00px] left-[calc(50%-667.00px)] top-[250.00px]">
              <img src="/assets/portfolio/images/group_2.svg" alt="Group" className="absolute left-[calc(100%_*_0.00)]" />
            </div>
          </div>

          {/* Milestone */}
          <div className="relative bg-[rgba(246,247,249,1.00)] h-[721.00px] w-full rounded-[23px]" style={{ transform: "translateY(-1px)" }}>
            <div className="absolute overflow-hidden bg-white h-[619.50px] w-[610.50px] left-[calc(50%-667.00px)] top-[calc(50%-310.50px)] rounded-[23px] border-[#c5c6c7ff] border-solid border-[0.75px]">
              <div className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[621.00px] w-[612.00px] left-[calc(50%-306.00px)] top-[calc(50%-310.50px)] rounded-[23px]">
                <div className="absolute overflow-hidden bg-[linear-gradient(0deg,rgba(254,253,254,1.00)0%,rgba(254,253,254,1.00)100%)] h-full w-full">
                  <div className="absolute h-[305.00px] w-[278.00px] top-[calc(50%-0.23px)] flex flex-col justify-start items-start gap-4 px-2.5 py-[3px] right-[0.41px]">
                    <div className="relative h-[231.00px] w-[calc(100%-52px-94px)] flex flex-col justify-center items-center gap-2.5 pl-[52px] pr-[94px] py-[31px]">
                      <div className="absolute h-[187.00px] w-[209.00px] left-[calc(50%-104.00px)] top-[calc(50%-93.50px)]" style={{ background: "url(/assets/portfolio/images/image_49.png) 100% / cover no-repeat" }}></div>
                    </div>
                  </div>
                  <img src="/assets/portfolio/images/line_3.svg" alt="Line_3" className="absolute scale-x-[-1.0] scale-y-[-1.0] origin-[0_0] top-[calc(50%-0.23px)] left-[calc(50%+107.59px)]" />
                  <div className="absolute h-[235.00px] w-[440.00px] flex flex-col justify-center items-start gap-2.5 pl-[58px] pr-[94px] py-[31px] left-[9.59px] top-[3.27px]">
                    <div className="absolute h-[187.00px] w-[152.00px] left-[calc(50%-76.00px)] top-[calc(50%-93.50px)]" style={{ background: "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat" }}></div>
                  </div>
                  <div className="absolute h-[225.00px] w-[145.00px] flex flex-col justify-center items-start gap-2.5 pl-[39px] pr-[94px] py-[31px] left-[9.59px] top-[320.27px]">
                    <div className="absolute h-[185.00px] w-[186.00px] left-[calc(50%-93.00px)] top-[calc(50%-92.50px)]" style={{ background: "url(/assets/portfolio/images/image_42.png) 100% / cover no-repeat" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[38.06px] w-[116.06px] flex flex-col justify-start items-start gap-2.5 px-[9px] py-0 rounded-[236px] border-[#202833ff] border-solid border-[0.97px] left-[740.00px] top-[50.00px]">
              <div className="relative h-[20.00px] w-[calc(100%-10px-10px)] flex flex-row justify-center items-center gap-2.5 p-2.5">
                <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14px] font-medium leading-[19.61px] tracking-[2.07px] uppercase">Milestone</span>
              </div>
            </div>
            <div className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center gap-2.5 p-2.5 left-[730.00px] top-[120.00px]">
              <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36px] font-normal leading-[45px]">Key milestones and outcomes of the project</span>
            </div>
            <div className="absolute h-[90.00px] w-[550.00px] flex flex-row justify-center items-center gap-2.5 p-2.5 left-[730.00px] top-[243.00px]">
              <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[20px] font-normal leading-[30px]">
                This project improved content clarity and reader engagement through structured research, usability analysis, and clear, intuitive design.
              </span>
            </div>
            <div className="absolute h-[236.00px] w-[300.00px] left-[740.00px] top-[388.00px]">
              <div className="absolute bg-white h-full w-[297.00px] rounded-[24px] left-[0px] top-[4px]">
                <div className="absolute h-[52.00px] w-[52.00px] left-[23px] top-[30px]">
                  <img src="/assets/portfolio/images/vector_9.svg" alt="Vector" className="absolute" />
                </div>
                <span className="absolute left-[23px] top-[105px] whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22px] font-normal leading-[28.50px] tracking-[-1px] capitalize">Key Achievement</span>
                <span className="absolute left-[23px] top-[144px] w-[266px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14px] font-normal leading-[24px]">
                  Improved content clarity and reader navigation by structuring information around real user needs and reading flows.
                </span>
              </div>
            </div>
            <div className="absolute h-[236.00px] w-[300.00px] left-[1075.00px] top-[388.00px]">
              <div className="absolute bg-white h-full w-full rounded-[24px] left-[0px] top-[4px]">
                <div className="absolute h-[52.00px] w-[52.00px] left-[23px] top-[30px] flex items-center justify-center">
                  <img src="/assets/p1/images/client_impact_icon.svg" alt="Client Impact" className="w-full h-full object-contain" />
                </div>
                <span className="absolute left-[23px] top-[105px] whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[22px] font-normal leading-[28.50px] capitalize">Client Impact</span>
                <span className="absolute left-[23px] top-[144px] w-[266px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14px] font-normal leading-[24px]">
                  The blog offers a smoother, intuitive reading experience that helps visitors find and engage with content confidently.
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative flex flex-row justify-center items-center gap-[10px] px-[309px]" style={{ width: "1415px", minHeight: "410px" }}>
            <span className="flex justify-center text-center items-center flex-none" style={{ width: "797px", height: "210px", fontSize: "30px", lineHeight: "38px", color: "#111111", fontWeight: 400 }}>
              <span>
                <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent">
                  This blog was approached with a reader-first mindset, focusing<br />on the needs of the target audience.<br />
                </span>
                <span className="bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent">
                  Through research, content mapping, and usability testing, the<br />platform was designed to balance information delivery with<br />engaging storytelling, ensuring clarity,<br />accessibility, and trust at every step.
                </span>
              </span>
            </span>
          </div>

          {/* FAQ */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "50px 42px", gap: "10px", width: "100%", height: "791px", background: "#F6F7F9", borderRadius: "23px", boxSizing: "border-box", transform: "translate(-1px,-1px)", position: "relative" }}>
            <div style={{ position: "relative", width: "1335px", height: "691px" }}>
              <div style={{ position: "absolute", width: "1335px", height: "691px", left: "0px", top: "0px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "30px", width: "1335px" }}>
                  <div style={{ width: "85px", height: "38px", border: "1px solid #202833", borderRadius: "272px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontWeight: 500, fontSize: "14px", letterSpacing: "2.381px", textTransform: "uppercase", color: "#202833" }}>FAQ</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "1335px", height: "91px", justifyContent: "space-between" }}>
                    <span className="ml-[10px]" style={{ fontWeight: 400, fontSize: "42px", lineHeight: "45px", color: "#111111", width: "770px", display: "flex", alignItems: "center" }}>
                      Blog Title Goes Here – Subtitle of the Blog Post
                    </span>
                    <div onClick={() => navigate("/faq")} style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "3.587px 23.913px", gap: "8.37px", height: "55px", background: "#0161FE", borderRadius: "101px", cursor: "pointer" }}>
                      <span style={{ fontWeight: 500, fontSize: "14.35px", color: "#FFFFFF" }}>View All</span>
                      <img src="/assets/portfolio/images/vector_13.svg" alt="arrow" style={{ width: "24.4px", height: "24.4px" }} />
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", width: "1335px", height: "435px", left: "0px", top: "209px" }}>
                  <div style={{ position: "absolute", width: "1335px", left: "0px", top: "0px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "6px 15px", gap: "628px", width: "1335px", height: "69px", background: "#0161FE", borderRadius: "20px", boxSizing: "border-box" }}>
                      <span style={{ fontSize: "27.2px", lineHeight: "36px", color: "#FFFFFF", textTransform: "capitalize" }}>Overview</span>
                      <span style={{ fontSize: "18px", lineHeight: "30px", color: "#FFFFFF" }}>What is this blog post about?</span>
                    </div>
                    <div style={{ position: "absolute", width: "1315px", height: "128px", left: "10px", top: "89px", background: "#FFFFFF", borderRadius: "20px", padding: "22px", boxSizing: "border-box", display: "flex", alignItems: "center" }}>
                      <span style={{ fontSize: "20px", lineHeight: "28px", color: "rgba(109, 109, 110, 0.8)", width: "1270px" }}>
                        This blog post covers the key insights, research findings, and design decisions that shaped the project. It aims to provide a clear and engaging narrative for readers interested in the topic.
                      </span>
                    </div>
                  </div>
                  <div style={{ position: "absolute", display: "flex", flexDirection: "row", alignItems: "center", padding: "6px 15px", gap: "461px", width: "1335px", height: "69px", left: "0px", top: "257px", background: "#FFFFFF", borderRadius: "20px", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "27.2px", lineHeight: "36px", color: "#000", textTransform: "capitalize" }}>Research Approach</span>
                    <span style={{ fontSize: "18px", lineHeight: "30px", color: "rgba(17,17,17,0.6)" }}>What research methods were used for this blog?</span>
                  </div>
                  <div style={{ position: "absolute", display: "flex", flexDirection: "row", alignItems: "center", padding: "6px 15px", gap: "446px", width: "1335px", height: "69px", left: "0px", top: "366px", background: "#FFFFFF", borderRadius: "20px", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "27.2px", lineHeight: "36px", color: "#000", textTransform: "capitalize" }}>Key Insights Found</span>
                    <span style={{ fontSize: "18px", lineHeight: "30px", color: "rgba(17,17,17,0.6)" }}>What key insights did the research uncover?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div className="relative overflow-hidden h-[586.00px] w-full rounded-[22px]">
            <span className="absolute left-[42px] top-[50px] whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46px] font-normal leading-[51.65px]">Our Products</span>
            <span className="absolute left-[791px] top-[50px] w-[591px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16px] font-normal leading-[22px]">
              At Arunijone, I deliver high-impact services and projects focused on UX/UI design, digital marketing, and equity research. Each engagement is driven by strategic thinking, attention to detail, and a commitment to measurable results.
            </span>
            <div className="absolute overflow-hidden h-[370.39px] w-[351.33px] left-[-124.94px] rounded-[22px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] top-[164.92px]">
              <div className="absolute overflow-hidden bg-white h-full w-full">
                <div className="absolute h-[249px] w-[202px] left-[calc(50%-100.82px)] top-[calc(50%-124.22px)]" style={{ background: "url(/assets/portfolio/images/image_26.png) 100% / cover no-repeat" }}></div>
              </div>
            </div>
            <div className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[241.59px] top-[164.92px]">
              <div className="absolute overflow-hidden bg-white h-full w-full">
                <div className="absolute h-[138px] w-[196px] left-[calc(50%-98.35px)] top-[calc(50%-69.22px)]" style={{ background: "url(/assets/portfolio/images/image_10.png) 100% / cover no-repeat" }}></div>
              </div>
            </div>
            <div className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[608.12px] top-[164.92px]">
              <div className="absolute overflow-hidden bg-white h-full w-full">
                <img src="/assets/portfolio/images/group_11.svg" alt="Group_11" className="absolute left-[calc(100%_*_0.27)] top-[calc(100%_*_0.28)]" />
              </div>
            </div>
            <div className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[974.65px] top-[164.92px]">
              <div className="absolute overflow-hidden bg-white h-full w-full">
                <div className="absolute h-[81px] w-[366px] left-[calc(50%-183.92px)] top-[calc(50%-41.22px)]" style={{ background: "url(/assets/portfolio/images/image_47.png) 100% / cover no-repeat" }}></div>
              </div>
            </div>
            <div className="absolute overflow-hidden h-[370.39px] w-[351.33px] rounded-[22px] border-[rgba(142,131,131,0.20)] border-solid border-[1px] left-[1341.19px] top-[164.92px]">
              <div className="absolute overflow-hidden bg-white h-full w-full">
                <div className="absolute h-[74px] w-[264px] left-[calc(50%-131.95px)] top-[calc(50%-37.22px)]" style={{ background: "url(/assets/portfolio/images/image_63.png) 100% / cover no-repeat" }}></div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </DesktopPageWrapper>

      {/* Mobile */}
      <div className="md:hidden bg-white w-full overflow-x-hidden min-h-screen">
        <div className="p-4 flex flex-col gap-6">
          <Navbar activePage="home" />
          <h1 className="text-3xl font-normal text-[#111111] text-center mt-16">Blog Title Goes Here</h1>
          <p className="text-center text-[rgba(109,109,110,0.80)] text-base">Subtitle of the Blog Post</p>
          <MobFooter />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
