import React, { useState } from "react";
import { useLocation } from "wouter";
import MobBanner from "../../components/MobBanner";
import MobFooter from "../../components/MobFooter";

const SERVICE_CARDS = [
  { route: "/portfolio5", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg", alt: "Service 1" },
  { route: "/portfolio6", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg", alt: "Service 2" },
  { route: "/portfolio7", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_3.png", alt: "Service 3" },
  { route: "/portfolio8", img: "/assets/Home/images/ecosystem_logos/ecosystem_logo_4.png", alt: "Service 4" },
];

const HomeUXUI = () => {
  const [, navigate] = useLocation();
  const [mobileEco, setMobileEco] = useState<"products" | "services" | "partners">("products");
  return (
    <>
      <div
        id="_274_925__Home_UXUI"
        className="relative overflow-hidden bg-white w-full mx-auto"
      >
        <MobBanner />

        <div
          id="_274_950__Frame_1171277009"
          className="w-[calc(100%-16px)] flex flex-col justify-start items-center flex-nowrap gap-[30px] mx-[8px] mt-[10px] pb-[20px]"
        >
          <div
            id="_274_951__Section"
            className="relative bg-white h-[775.00px] w-full rounded-[20px] overflow-clip"
          >
            <div
              className="absolute flex flex-col items-center gap-[35px] w-full top-[60px]"
            >
              <span
                className="flex justify-center text-center items-center h-[205.00px] w-[360.00px]"
              >
                <span
                  className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[56.0px] leading-[66.00px]"
                  style={{ fontFamily: "SF Pro Display", fontWeight: 500 }}
                >
                  For Those Who Demand #1 Quality
                </span>
              </span>

              <div
                className="relative bg-[rgba(1,97,254,1.00)] h-[47.00px] w-[127.00px] rounded-[95.35px] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div
                  className="absolute h-[22.88px] w-[86.88px] left-[calc(50%-43.44px+0.44px)] top-[calc(50%-11.44px+0.44px)] flex flex-row justify-start items-center flex-nowrap gap-[6px]"
                >
                  <span
                    className="flex justify-center text-center items-center h-[16.00px] w-[58.00px] relative"
                  >
                    <span
                      className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]"
                      style={{ fontFamily: "SF Pro Display" }}
                    >
                      My NGO
                    </span>
                  </span>
                  <div className="relative overflow-hidden h-[22.88px] w-[22.88px] flex items-center justify-center">
                    <img
                      src="/figmaAssets/vector.svg"
                      alt=""
                      aria-hidden="true"
                      style={{ width: 13.64, height: 10, filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="_274_966__Home_Mobile_Containe"
              className="absolute"
              style={{
                width: 375,
                height: 432,
                left: "calc(50% - 187.5px)",
                top: "calc(50% - 216px + 231.5px)",
                borderRadius: 80,
                overflow: "hidden",
              }}
            >
              <img
                src="/figmaAssets/image-266.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Quality Commitment */}
          <div
            style={{ width: 375, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", padding: "20px 10px", gap: 10 }}
          >
            <p
              style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 25, lineHeight: "35px", color: "#111111", textAlign: "center", width: 373, display: "block", margin: 0 }}
            >
              We deliver high-quality digital solutions while creating meaningful work{" "}
              <span style={{ color: "rgba(109,109,110,0.8)" }}>opportunities for individuals with disabilities through our collaboration with</span>{" "}
              Arunijone Philanthropy.
            </p>
          </div>

          <div
            id="_274_996__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[1156.00px] w-full rounded-[20px]"
          >
            <div
              id="_274_997__Frame_1171276985"
              className="absolute h-[1120.00px] w-[calc(100%-20px)] left-[10px] right-[10px] top-[35.00px]"
            >
              {/* Badge */}
              <div
                id="_274_998__Border"
                className="absolute border h-[30.00px] w-[103.00px] left-[calc(50%-52.50px)] rounded-[228.8300018310547px] border-[#202833ff] border-solid top-[0.00px]"
              >
                <span className="flex justify-center text-center items-center h-[14.00px] w-[70.00px] absolute left-[calc(50%-34.50px)] top-[calc(50%-7.00px)]">
                  <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[14.00px] tracking-[1.715999960899353px] uppercase" style={{ fontFamily: "SF Pro Display" }}>
                    About us
                  </span>
                </span>
              </div>

              {/* Heading */}
              <span className="flex justify-center text-center items-center h-[117.00px] w-[355.00px] absolute left-[calc(50%-177.50px)] top-[57.00px]">
                <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[36.0px] font-normal leading-[42.00px]" style={{ fontFamily: "SF Pro Display" }}>
                  Unlocking creativity, strategy, and innovation for every business
                </span>
              </span>

              {/* Body text */}
              <span className="flex justify-center text-center items-center absolute" style={{ width: 331, height: 99, left: "calc(50% - 331px/2)", top: 204 }}>
                <span className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]" style={{ fontFamily: "SF Pro Display" }}>
                  Backed by over three years of continuous innovation and research-led strategies, we provide personalized, proactive support to ensure 100% client satisfaction.
                </span>
              </span>

              {/* Full-width image — top-343, h-155 */}
              <div
                id="_274_1012__Container"
                className="absolute overflow-hidden h-[155.00px] w-full left-0 rounded-[15.260000228881836px] top-[343px]"
              >
                <img
                  src="/figmaAssets/image-259.png"
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>

              {/* Dark card "3+" — left half, top-506 */}
              <div
                id="_274_1002__Paragraph_Background"
                className="absolute bg-[rgba(35,35,35,1.00)] h-[193.80px] w-[49%] left-0 rounded-[15.260000228881836px] top-[506px]"
              >
                <span className="flex justify-start text-left items-center h-[53.36px] w-[77.46px] absolute left-[15.25px] top-[15.25px]">
                  <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]" style={{ fontFamily: "SF Pro Display" }}>
                    3+
                  </span>
                </span>
                <span className="flex justify-start text-left items-center h-[92.00px] w-[150.00px] absolute left-[15.38px] top-[86.58px]">
                  <span className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]" style={{ fontFamily: "SF Pro Display" }}>
                    Years of continuous innovation and valuable insights, helping businesses improve their digital presence.
                  </span>
                </span>
              </div>

              {/* Right image — testimonial, top-506 */}
              <div
                id="_274_1014__Container"
                className="absolute overflow-hidden h-[193.80px] w-[49.01%] rounded-[15.260000228881836px] left-[calc(100%_*_0.51)] top-[506px]"
              >
                <img
                  src="/figmaAssets/testimonial-1.png"
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>

              {/* Blue card "100%" — full width, top-708 */}
              <div
                id="_274_1005__Background"
                className="absolute bg-[rgba(1,97,254,1.00)] h-[241.38px] w-full left-0 rounded-[15.260000228881836px] top-[708px]"
              >
                <div className="absolute" style={{ width: 38.13, height: 38.13, left: 15.25, top: 15.25 }}>
                  <img src="/figmaAssets/about_section_icon.svg" alt="" style={{ width: 38.13, height: 38.13, objectFit: "contain" }} />
                </div>
                <span className="flex justify-start text-left items-center h-[38.00px] w-[97.00px] absolute left-[15.38px] top-[74.16px]">
                  <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[54.00px]" style={{ fontFamily: "SF Pro Display" }}>
                    100%
                  </span>
                </span>
                <span className="flex justify-start text-left items-center h-[93.00px] w-[330.00px] absolute left-[15.38px] top-[133.16px]">
                  <span className="bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.00px]" style={{ fontFamily: "SF Pro Display" }}>
                    Client satisfaction achieved through personalized solutions, proactive support, and a commitment to understanding each client's unique requirements. My focus on excellence ensures that your success remains the priority at every step.
                  </span>
                </span>
              </div>

              {/* Bottom left image — top-957 */}
              <div
                id="_274_1016__Container"
                className="absolute overflow-hidden h-[155.00px] w-[49%] left-0 rounded-[15.260000228881836px] top-[957px]"
              >
                <img
                  src="/figmaAssets/testimonial-1.png"
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>

              {/* Bottom right image — top-957 */}
              <div
                id="_274_1018__Container"
                className="absolute overflow-hidden h-[155.00px] w-[49.01%] rounded-[15.260000228881836px] left-[calc(100%_*_0.51)] top-[957px]"
              >
                <img
                  src="/figmaAssets/image-257.png"
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business Ecosystem */}
          <div className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22.88px]" style={{ minHeight: 376 }}>
            <div className="absolute left-[calc(50%-179.5px)] top-[35px]" style={{ width: 359, height: 306 }}>
              <div className="flex flex-col items-center gap-[25px] w-[360px]">
                {/* Badge */}
                <div className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[10px] border border-[#202833] rounded-[228.83px]" style={{ width: 158, height: 32, boxSizing: "border-box" }}>
                  <span className="whitespace-nowrap text-[12px] font-medium leading-[14px] tracking-[1.716px] uppercase text-[#202833]" style={{ fontFamily: "SF Pro Display" }}>OUR ECOSYSTEM</span>
                </div>
                {/* Heading */}
                <span className="text-[36px] font-normal leading-[42px] text-center text-[#111111]" style={{ fontFamily: "SF Pro Display", width: 317, height: 85 }}>Explore Our Business Ecosystem</span>
                {/* Pills */}
                <div className="flex flex-col items-center gap-[15px]" style={{ width: 344 }}>
                  {/* Row 1: Products + Services */}
                  <div className="flex flex-row items-center gap-[15px]" style={{ width: 306, height: 60.81 }}>
                    {/* Products pill */}
                    <div
                      className="flex flex-row items-center gap-[18.78px] cursor-pointer"
                      style={{
                        padding: "13.3016px 18.7788px",
                        width: 147.54, height: 60.81,
                        borderRadius: "18.5334px",
                        background: mobileEco === "products" ? "#0161FE" : "#FFFFFF",
                        border: mobileEco === "products" ? "none" : "0.1px solid rgba(142,131,131,0.3)",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setMobileEco("products")}
                    >
                      <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 38, flexShrink: 0 }}>
                        <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "products" ? "rgba(255,255,255,0.3)" : "#0161FE"} />
                        <mask id="mob_mask_prod" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="9" y="10" width="25" height="25">
                          <rect x="9.48249" y="10.3474" width="24.1544" height="24.1544" fill="#FFFFFF" />
                        </mask>
                        <g mask="url(#mob_mask_prod)">
                          <path d="M13.5082 31.4825C12.9547 31.4825 12.4808 31.2854 12.0866 30.8912C11.6924 30.497 11.4954 30.0232 11.4954 29.4696V18.3989C11.4954 17.8453 11.6924 17.3715 12.0866 16.9773C12.4808 16.5831 12.9547 16.386 13.5082 16.386H17.534V14.3731C17.534 13.8196 17.731 13.3457 18.1252 12.9515C18.5194 12.5574 18.9933 12.3603 19.5468 12.3603H23.5726C24.1261 12.3603 24.6 12.5574 24.9941 12.9515C25.3883 13.3457 25.5854 13.8196 25.5854 14.3731V16.386H29.6112C30.1647 16.386 30.6386 16.5831 31.0327 16.9773C31.4269 17.3715 31.624 17.8453 31.624 18.3989V29.4696C31.624 30.0232 31.4269 30.497 31.0327 30.8912C30.6386 31.2854 30.1647 31.4825 29.6112 31.4825H13.5082ZM19.5468 16.386H23.5726V14.3731H19.5468V16.386ZM29.6112 25.4439H24.579V27.4568H18.5404V25.4439H13.5082V29.4696H29.6112V25.4439ZM20.5533 25.4439H22.5661V23.431H20.5533V25.4439ZM13.5082 23.431H18.5404V21.4182H24.579V23.431H29.6112V18.3989H13.5082V23.431Z" fill="white" />
                        </g>
                      </svg>
                      <span className="text-[15px] font-normal leading-[24px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "products" ? "#FFFFFF" : "#0161FE" }}>Products</span>
                    </div>
                    {/* Services pill */}
                    <div
                      className="flex flex-row items-center gap-[18.78px] cursor-pointer"
                      style={{
                        padding: "13.3016px 18.7788px",
                        width: 144.54, height: 60.81,
                        borderRadius: "18.5334px",
                        background: mobileEco === "services" ? "#0161FE" : "#FFFFFF",
                        border: mobileEco === "services" ? "none" : "0.1px solid rgba(142,131,131,0.3)",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setMobileEco("services")}
                    >
                      <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 38, flexShrink: 0 }}>
                        <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "services" ? "rgba(255,255,255,0.3)" : "#0161FE"} />
                        <mask id="mob_mask_svc" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25">
                          <rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF" />
                        </mask>
                        <g mask="url(#mob_mask_svc)">
                          <path d="M12.0772 30.193C11.5237 30.193 11.0498 29.9959 10.6556 29.6017C10.2614 29.2075 10.0643 28.7337 10.0643 28.1801H14.0901C13.5365 28.1801 13.0627 27.983 12.6685 27.5888C12.2743 27.1947 12.0772 26.7208 12.0772 26.1673V15.0965C12.0772 14.543 12.2743 14.0691 12.6685 13.6749C13.0627 13.2807 13.5365 13.0836 14.0901 13.0836H30.193C30.7465 13.0836 31.2204 13.2807 31.6146 13.6749C32.0088 14.0691 32.2059 14.543 32.2059 15.0965V26.1673C32.2059 26.7208 32.0088 27.1947 31.6146 27.5888C31.2204 27.983 30.7465 28.1801 30.193 28.1801H34.2187C34.2187 28.7337 34.0216 29.2075 33.6274 29.6017C33.2333 29.9959 32.7594 30.193 32.2059 30.193H12.0772ZM22.8586 28.8972C23.0515 28.7043 23.148 28.4653 23.148 28.1801C23.148 27.895 23.0515 27.6559 22.8586 27.463C22.6657 27.2701 22.4267 27.1737 22.1415 27.1737C21.8564 27.1737 21.6173 27.2701 21.4244 27.463C21.2315 27.6559 21.1351 27.895 21.1351 28.1801C21.1351 28.4653 21.2315 28.7043 21.4244 28.8972C21.6173 29.0901 21.8564 29.1866 22.1415 29.1866C22.4267 29.1866 22.6657 29.0901 22.8586 28.8972ZM14.0901 26.1673H30.193V15.0965H14.0901V26.1673Z" fill="white" />
                        </g>
                      </svg>
                      <span className="text-[15px] font-normal leading-[22px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "services" ? "#FFFFFF" : "#0161FE" }}>Services</span>
                    </div>
                  </div>
                  {/* Row 2: Partners */}
                  <div className="flex flex-row items-center gap-[10px]" style={{ width: 138, height: 60 }}>
                    <div
                      className="flex flex-row items-center gap-[17.62px] cursor-pointer"
                      style={{
                        padding: "12.4842px 17.6248px",
                        width: 140, height: 60,
                        borderRadius: "17.3944px",
                        background: mobileEco === "partners" ? "#0161FE" : "#FFFFFF",
                        border: mobileEco === "partners" ? "none" : "0.1px solid rgba(142,131,131,0.3)",
                        boxSizing: "border-box",
                      }}
                      onClick={() => setMobileEco("partners")}
                    >
                      <svg width="34.21" height="34.21" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 38, flexShrink: 0 }}>
                        <rect width="44.0013" height="44.0013" rx="21.86" fill={mobileEco === "partners" ? "rgba(255,255,255,0.3)" : "#0161FE"} />
                        <mask id="mob_mask_part" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="10" y="10" width="25" height="25">
                          <rect x="10.0643" y="10.0643" width="24.1544" height="24.1544" fill="#FFFFFF" />
                        </mask>
                        <g mask="url(#mob_mask_part)">
                          <path d="M22.0179 30.193C22.085 30.193 22.1521 30.1762 22.2192 30.1427C22.2863 30.1091 22.3366 30.0756 22.3702 30.042L30.6229 21.7893C30.8242 21.588 30.971 21.3615 31.0632 21.1099C31.1555 20.8583 31.2016 20.6067 31.2016 20.3551C31.2016 20.0867 31.1555 19.8309 31.0632 19.5877C30.971 19.3445 30.8242 19.1306 30.6229 18.9461L26.3456 14.6688C26.1611 14.4675 25.9472 14.3207 25.704 14.2284C25.4608 14.1362 25.205 14.0901 24.9366 14.0901C24.685 14.0901 24.4334 14.1362 24.1818 14.2284C23.9302 14.3207 23.7037 14.4675 23.5024 14.6688L23.2256 14.9455L25.0875 16.8326C25.3392 17.0674 25.5237 17.3358 25.6411 17.6377C25.7585 17.9397 25.8172 18.2584 25.8172 18.5939C25.8172 19.2984 25.5782 19.8896 25.1001 20.3677C24.6221 20.8457 24.0308 21.0848 23.3263 21.0848C22.9908 21.0848 22.6679 21.0261 22.3576 20.9086C22.0473 20.7912 21.7747 20.6151 21.5399 20.3803L19.6528 18.5184L15.2497 22.9215C15.1993 22.9718 15.1616 23.0264 15.1364 23.0851C15.1113 23.1438 15.0987 23.2067 15.0987 23.2738C15.0987 23.408 15.149 23.5296 15.2497 23.6386C15.3503 23.7476 15.4677 23.8021 15.6019 23.8021C15.669 23.8021 15.7361 23.7854 15.8032 23.7518C15.8703 23.7183 15.9206 23.6847 15.9542 23.6512L19.376 20.2293L20.785 21.6383L17.3883 25.0602C17.338 25.1105 17.3003 25.165 17.2751 25.2237C17.25 25.2824 17.2374 25.3453 17.2374 25.4124C17.2374 25.5466 17.2877 25.664 17.3883 25.7647C17.489 25.8653 17.6064 25.9157 17.7406 25.9157C17.8077 25.9157 17.8748 25.8989 17.9419 25.8653C18.009 25.8318 18.0593 25.7982 18.0928 25.7647L21.5147 22.368L22.9237 23.777L19.527 27.1989C19.4767 27.2324 19.4389 27.2827 19.4138 27.3498C19.3886 27.4169 19.376 27.484 19.376 27.5511C19.376 27.6853 19.4264 27.8027 19.527 27.9034C19.6276 28.004 19.7451 28.0543 19.8793 28.0543C19.9464 28.0543 20.0093 28.0417 20.068 28.0166C20.1267 27.9914 20.1812 27.9537 20.2315 27.9034L23.6534 24.5066L25.0624 25.9157L21.6405 29.3375C21.5902 29.3878 21.5525 29.4424 21.5273 29.5011C21.5021 29.5598 21.4895 29.6227 21.4895 29.6898C21.4895 29.824 21.5441 29.9414 21.6531 30.042C21.7621 30.1427 21.8837 30.193 22.0179 30.193ZM21.9928 32.2059C21.3721 32.2059 20.8228 32.0004 20.3447 31.5894C19.8667 31.1785 19.5857 30.6627 19.5018 30.042C18.9315 29.9582 18.4535 29.7233 18.0677 29.3375C17.6819 28.9517 17.447 28.4737 17.3632 27.9034C16.7929 27.8195 16.319 27.5805 15.9416 27.1863C15.5642 26.7921 15.3335 26.3182 15.2497 25.7647C14.6123 25.6808 14.0923 25.4041 13.6897 24.9344C13.2871 24.4647 13.0858 23.9112 13.0858 23.2738C13.0858 22.9383 13.1487 22.6154 13.2745 22.3051C13.4003 21.9948 13.5807 21.7222 13.8155 21.4873L19.6528 15.6752L22.9489 18.9713C22.9824 19.0216 23.0327 19.0593 23.0998 19.0845C23.1669 19.1096 23.234 19.1222 23.3011 19.1222C23.4521 19.1222 23.5779 19.0761 23.6785 18.9838C23.7792 18.8916 23.8295 18.77 23.8295 18.619C23.8295 18.5519 23.8169 18.4848 23.7918 18.4177C23.7666 18.3506 23.7289 18.3003 23.6785 18.2668L20.0805 14.6688C19.896 14.4675 19.6822 14.3207 19.4389 14.2284C19.1957 14.1362 18.9399 14.0901 18.6715 14.0901C18.4199 14.0901 18.1683 14.1362 17.9167 14.2284C17.6651 14.3207 17.4387 14.4675 17.2374 14.6688L13.6897 18.2416C13.5387 18.3926 13.4129 18.5687 13.3123 18.77C13.2116 18.9713 13.1445 19.1726 13.111 19.3738C13.0774 19.5751 13.0774 19.7806 13.111 19.9903C13.1445 20.2 13.2116 20.397 13.3123 20.5816L11.853 22.0409C11.5678 21.6551 11.3581 21.2315 11.2239 20.7703C11.0897 20.309 11.0394 19.8435 11.073 19.3738C11.1065 18.9042 11.2239 18.4471 11.4252 18.0026C11.6265 17.5581 11.9033 17.1597 12.2555 16.8074L15.8032 13.2598C16.2058 12.874 16.6545 12.5804 17.1493 12.3791C17.6441 12.1778 18.1515 12.0772 18.6715 12.0772C19.1915 12.0772 19.6989 12.1778 20.1938 12.3791C20.6886 12.5804 21.1289 12.874 21.5147 13.2598L21.7915 13.5365L22.0682 13.2598C22.4708 12.874 22.9195 12.5804 23.4144 12.3791C23.9092 12.1778 24.4166 12.0772 24.9366 12.0772C25.4566 12.0772 25.964 12.1778 26.4588 12.3791C26.9536 12.5804 27.394 12.874 27.7798 13.2598L32.0319 17.5119C32.4177 17.8977 32.7113 18.3422 32.9126 18.8455C33.1139 19.3487 33.2145 19.8603 33.2145 20.3803C33.2145 20.9003 33.1139 21.4077 32.9126 21.9025C32.7113 22.3973 32.4177 22.8376 32.0319 23.2234L23.7792 31.451C23.5444 31.6859 23.2718 31.8704 22.9615 32.0046C22.6511 32.1388 22.3282 32.2059 21.9928 32.2059Z" fill="white" />
                        </g>
                      </svg>
                      <span className="text-[15px] font-normal leading-[20px] capitalize" style={{ fontFamily: "SF Pro Display", color: mobileEco === "partners" ? "#FFFFFF" : "#0161FE" }}>Partners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services cards — shown below pills when Services is active */}
            {mobileEco === "services" && (
              <div className="flex flex-col gap-[15px] w-[calc(100%-16px)] mx-auto" style={{ marginTop: 376, paddingBottom: 35 }}>
                <div style={{ boxSizing: "border-box", width: 122, height: 32, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <span style={{ fontFamily: "SF Pro Display", fontWeight: 500, fontSize: 12, lineHeight: "14px", textAlign: "center", letterSpacing: "1.716px", textTransform: "uppercase", color: "#202833" }}>OUR SERVICES</span>
                </div>
                <span style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 34, lineHeight: "38px", textAlign: "center", color: "#111111", marginBottom: 10 }}>
                  Tailored Services.<br />Built for Your Business.
                </span>
                <span style={{ fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "rgba(109,109,110,0.8)", marginBottom: 20 }}>
                  Explore the full range of services — from UX/UI design and digital marketing to brand identity and equity research.
                </span>
                {SERVICE_CARDS.map((card) => (
                  <div
                    key={card.route}
                    onClick={() => { navigate(card.route); window.scrollTo(0, 0); }}
                    className="relative overflow-hidden bg-white h-[230px] w-full rounded-[15.26px] flex justify-center items-center cursor-pointer"
                  >
                    <img src={card.img} alt={card.alt} className="h-[160px] w-[160px] object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            id="_274_1036__Section"
            className="relative overflow-hidden bg-[#F6F7F9] h-[642px] w-full rounded-[20px]"
          >
            <div
              id="_274_1037__Frame_1171276987"
              className="absolute h-[598px] w-full left-[0.00px] top-[35.00px]"
            >
              <div
                id="_274_1038__Border"
                className="absolute border h-[32px] w-[134px] left-[calc(50%-67px)] rounded-[228.83px] border-[#202833] border-solid top-[0.00px]"
              >
                <span
                  className="flex justify-center text-center items-center h-[14px] w-[109px] absolute top-[calc(50%-7px)]"
                  style={{ left: "calc(50% - 109px/2 - 0.5px)" }}
                >
                  <span
                    className="whitespace-nowrap text-[#202833] not-italic text-[12px] font-medium leading-[14px] uppercase"
                    style={{ fontFamily: "SF Pro Display", letterSpacing: "1.716px" }}
                  >
                    our products
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
                className="absolute cursor-pointer"
                style={{ width: 136.84, height: 46.34, background: "#0161FE", borderRadius: 95.35, left: "calc(50% - 68.42px)", top: 200.10 }}
                onClick={() => { navigate("/explore"); window.scrollTo(0, 0); }}
              >
                {/* Container */}
                <div style={{ position: "absolute", width: 60.59, left: "calc(50% - 30.295px - 15.25px)", top: 3.04, bottom: 3.05, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ position: "absolute", width: 60.98, height: 16, left: "calc(50% - 30.49px + 0.19px)", top: "calc(50% - 8px - 0.05px)", fontFamily: "SF Pro Display", fontWeight: 400, fontSize: 14, lineHeight: "22px", display: "flex", alignItems: "center", textAlign: "center", color: "#FFFFFF" }}>See More</span>
                  <span style={{ position: "absolute", width: 60.98, height: 16, left: "calc(50% - 30.49px + 0.19px)", top: "calc(50% - 8px + 60.31px)", fontFamily: "Inter", fontWeight: 500, fontSize: 13.4, lineHeight: "20px", letterSpacing: "-0.067px", display: "flex", alignItems: "center", textAlign: "center", color: "#FFFFFF" }}>See More</span>
                </div>
                {/* Arrow icon */}
                <div style={{ position: "absolute", width: 22.88, height: 22.88, left: "calc(50% - 11.44px + 34.11px)", top: "calc(50% - 11.44px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/assets/homemob/images/vector_15.svg" alt="" style={{ width: 17, height: 13 }} />
                </div>
              </div>

              <div
                id="_274_1049__Region_-_carousel"
                className="absolute overflow-hidden bg-[rgba(254,254,253,1.00)] h-[212.00px] w-[calc(100%-16.00px)] rounded-[22.8799991607666px] left-[8.00px] top-[282.00px] cursor-pointer"
                onClick={() => { navigate("/portfolio1"); window.scrollTo(0, 0); }}
              >
                <img
                  src="/figmaAssets/image-box.svg"
                  alt="Our services showcase"
                  className="absolute w-full h-full object-cover"
                />
              </div>

              <div
                id="_274_1051__Images_Container"
                className="absolute rounded-[12px] left-[calc(50%-79.5px)] top-[504.00px] cursor-pointer"
                style={{ width: 159, height: 94, background: "#FFFFFF", display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 10, gap: 10, borderRadius: 12 }}
                onClick={() => { navigate("/portfolio1"); window.scrollTo(0, 0); }}
              >
                <div style={{
                  boxSizing: "border-box", width: 138.12, height: 74,
                  background: "#FFFFFF", border: "0.1px solid #8E8383", borderRadius: 6,
                  flexShrink: 0, position: "relative",
                }}>
                  <img src="/figmaAssets/image-26.png" alt="" style={{
                    position: "absolute", width: 46, height: 56,
                    left: "calc(50% - 46px/2 - 0.06px)", top: "calc(50% - 56px/2)",
                    objectFit: "contain",
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Our Blog Section */}
          <div
            className="relative overflow-hidden bg-[#F6F7F9] w-full rounded-[22.88px]"
            style={{ height: 658 }}
          >
            {/* Inner frame: 359×588, centered, top 35 */}
            <div className="absolute" style={{ width: 359, height: 588, left: "50%", transform: "translateX(-50%)", top: 35 }}>

              {/* Top cluster: badge + heading + View All button */}
              <div className="absolute flex flex-col items-center gap-[25px]" style={{ width: 227, left: 66, top: 0 }}>

                {/* Badge */}
                <div
                  className="flex items-center justify-center"
                  style={{ width: 105, height: 32, border: "1px solid #202833", borderRadius: 228.83 }}
                >
                  <span
                    className="text-[#202833] text-[12px] font-medium leading-[14px] uppercase"
                    style={{ fontFamily: "SF Pro Display", letterSpacing: "1.716px", width: 72.72, textAlign: "center" }}
                  >
                    Our blog
                  </span>
                </div>

                {/* Heading */}
                <span
                  className="text-[#111111] text-[34px] font-normal leading-[38px] text-center"
                  style={{ fontFamily: "SF Pro Display", width: 227 }}
                >
                  Latest insights & trends
                </span>

                {/* View All button */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => { navigate("/blog"); window.scrollTo(0, 0); }}
                  style={{ width: 127.2, height: 46.34, background: "#0161FE", borderRadius: 95.35 }}
                >
                  {/* Frame 251 */}
                  <div style={{ position: "absolute", width: 81.45, height: 22.88, left: 22.88, top: 11.73 }}>
                    <span style={{ position: "absolute", width: 51.31, height: 16, left: "calc(50% - 25.655px - 15.07px)", top: "calc(50% - 8px - 0.06px)", fontFamily: "SF Pro Display", fontWeight: 500, fontSize: 14, lineHeight: "22px", display: "flex", alignItems: "center", textAlign: "center", color: "#FFFFFF" }}>View All</span>
                    <div style={{ position: "absolute", width: 22.88, height: 22.88, left: "calc(50% - 11.44px + 29.29px)", top: "calc(50% - 11.44px)" }}>
                      <img src="/assets/homemob/images/vector_16.svg" alt="" style={{ position: "absolute", left: "16.66%", right: "16.67%", top: "24.99%", bottom: "25.01%", width: "66.67%", height: "50.02%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog card: 359×351, top 237 */}
              <div
                className="absolute"
                style={{ width: 359, height: 351, left: 0, top: 237, borderRadius: 22.88 }}
              >
                {/* Card border container */}
                <div
                  style={{
                    boxSizing: "border-box",
                    position: "absolute",
                    left: 0, right: 0, top: 0,
                    width: 359,
                    height: 237.27,
                    border: "0.1px solid rgba(142,131,131,0.3)",
                    borderRadius: 15.26,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FEFEFE",
                  }}
                >
                  {/* Blog image */}
                  <div
                    style={{
                      width: 164,
                      height: 203,
                      background: "url(/assets/homemob/images/image_26.png) center / contain no-repeat",
                    }}
                  />
                </div>

                {/* Blog title text */}
                <div
                  className="absolute flex flex-row justify-center items-center"
                  style={{ width: 353, height: 88, left: 3, top: 263, padding: "10px 1px 10px 0px", gap: 10 }}
                >
                  <span
                    className="text-center"
                    style={{
                      fontFamily: "SF Pro Display",
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: "30px",
                      color: "rgba(17,17,17,0.8)",
                      width: 353,
                    }}
                  >
                    A Complete Guide to Planning a Seamless Rameswaram Pilgrimage with MyRameswaramTrip
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="_274_1113__Section"
            className="relative bg-[rgba(246,247,249,1.00)] w-full rounded-[20px] flex flex-col items-center gap-4 px-[15.25px] py-[35px]"
          >
            <div className="border h-[30.00px] w-[122.00px] flex items-center justify-center rounded-[228.83px] border-[#202833] border-solid">
              <span className="whitespace-nowrap text-[rgba(32,40,51,1.00)] text-[12.0px] font-medium leading-[14.00px] tracking-[1.716px] uppercase" style={{ fontFamily: "SF Pro Display" }}>Contact Us</span>
            </div>

            <span className="flex justify-center text-center items-center w-full">
              <span className="text-[rgba(17,17,17,1.00)] text-[46.0px] font-normal leading-[46.00px]">
                Connect with Arunijone
              </span>
            </span>

            <span className="flex justify-center text-center items-center w-[241.00px]">
              <span className="text-[rgba(109,109,110,0.80)] text-[16.0px] font-normal leading-[22.00px]">
                Learn about my vision, story, and how I bring ideas to life.
              </span>
            </span>

            <div className="relative bg-white h-[86.52px] w-full rounded-[15.26px] flex items-center px-[15.25px] gap-4">
              <div className="relative h-[38.13px] w-[38.13px] flex-shrink-0">
                <img src="/figmaAssets/mail_icon.svg" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[rgba(17,17,17,0.60)] text-[18.0px] font-normal leading-[30.00px]" style={{ fontFamily: "SF Pro Display" }}>Email Addres</span>
                <span className="text-[rgba(17,17,17,1.00)] text-[18.0px] font-normal leading-[28.00px]" style={{ fontFamily: "SF Pro Display" }}>arunijone@gmail.com</span>
              </div>
            </div>

            <div className="relative bg-white h-[86.52px] w-full rounded-[15.26px] flex items-center px-[15.25px] gap-4">
              <div className="relative h-[38.13px] w-[38.13px] flex-shrink-0">
                <img src="/figmaAssets/svg-6.svg" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[rgba(17,17,17,0.60)] text-[18.0px] font-normal leading-[30.00px]" style={{ fontFamily: "SF Pro Display" }}>Phone Number</span>
                <span className="text-[rgba(17,17,17,1.00)] text-[18.0px] font-normal leading-[28.00px]" style={{ fontFamily: "SF Pro Display" }}>+91 9489456580</span>
              </div>
            </div>

            <div className="relative bg-white h-[86.52px] w-full rounded-[15.26px] flex items-center px-[15.25px] gap-4">
              <div className="relative h-[38.13px] w-[38.13px] flex-shrink-0">
                <img src="/figmaAssets/svg-8.svg" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[rgba(17,17,17,0.60)] text-[18.0px] font-normal leading-[30.00px]" style={{ fontFamily: "SF Pro Display" }}>My Location</span>
                <span className="text-[rgba(17,17,17,1.00)] text-[18.0px] font-normal leading-[28.00px]" style={{ fontFamily: "SF Pro Display" }}>Rameswaram</span>
              </div>
            </div>
          </div>

          <MobFooter />

        </div>
      </div>

    </>
  );
};
export default HomeUXUI;


