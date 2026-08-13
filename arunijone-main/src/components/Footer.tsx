import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  const go = (path: string) => {
    navigate(path);
  };

  const handleKey = (e: React.KeyboardEvent, path: string) => {
    if (e.key === "Enter" || e.key === " ") navigate(path);
  };

  const subscribe = () => {
    if (!email) return;
    console.log("Subscribed email:", email);
    try {
      alert("Subscribed: " + email);
    } catch (err) {}
    setEmail("");
  };

  return (
    <div
      id="Footer"
      className="relative overflow-hidden h-[361.28px] w-[1420px] shrink-0"
    >
      <div
        id="Footer__Background"
        className="absolute bg-[rgba(35,35,35,1.00)] h-[361.28px] w-[calc(100%+-0.00px)] left-[0.00px] top-[0.00px] rounded-[20px]"
      >
        <span
          id="Footer__Subscribe_to_our_new"
          className="flex justify-start text-left items-center h-[25.00px] w-[262.00px] absolute left-[51.00px] top-[141.00px]"
        >
          <span
            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[22.0px] font-normal leading-[28.00px]"
          >
            Subscribe to our news later
          </span>
        </span>
        <div
          id="Footer__Form_Email_Form"
          className="absolute h-[39.45px] w-[calc(100%-1113.48px)] left-[50.62px] top-[179.80px]"
        >
          <div
            id="Footer__Input_1"
            className="absolute overflow-hidden bg-[rgba(255,255,255,0.10)] h-[37.42px] w-[calc(100%-106.76px)] top-[calc(50%-18.71px)] rounded-[204.10891723632812px] left-[0.00px]"
          >
            <div
              id="Footer__Container"
              className="absolute overflow-hidden h-[12.75px] w-[calc(100%-40.82px)] left-[20.41px] top-[12.34px]"
            >
              <input
                id="Footer__Enter_your_email"
                aria-label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="absolute left-[-0.03px] top-[0.02px] h-[13px] w-[100%] bg-transparent text-[14.0px] text-[rgba(153,153,153,1.00)] placeholder:text-[rgba(153,153,153,1.00)] font-medium outline-none border-0"
              />
            </div>
          </div>

          <div
            id="Footer__Input_2"
            role="button"
            tabIndex={0}
            onClick={subscribe}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') subscribe(); }}
            className="absolute overflow-hidden bg-[rgba(1,97,254,1.00)] h-[39.00px] w-[103.00px] top-[calc(50%-19.35px)] rounded-[85.04350280761719px] left-[208.38px] cursor-pointer"
          >
            <span
              id="Footer__Subscribe"
              className="flex justify-center text-center items-center h-[15.00px] w-[63.00px] absolute left-[calc(50%-31.50px)] top-[calc(50%-7.50px)]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[18.00px]"
              >
                Subscribe
              </span>
            </span>
          </div>
        </div>

        <div
          id="Footer__Frame_14"
          className="absolute h-[204.00px] w-[130px] right-[450.00px] top-[50.16px]"
        >
          <div
            id="Footer__Link_Home"
            className="absolute h-[40.80px] w-[calc(100%+-0.00px)] opacity-70 left-[0.00px] top-[0.00px]"
          >
            <span
              id="Footer__Home"
              role="button"
              tabIndex={0}
              onClick={() => go("/")}
              onKeyDown={(e) => handleKey(e, "/")}
              className="flex justify-start text-left items-center h-[16.00px] w-[69.00px] absolute left-[0px] top-[11.84px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
              >
                Home
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_About"
            className="absolute h-[40.80px] w-[calc(100%+-0.00px)] opacity-70 left-[0.00px] top-[54.40px]"
          >
            <span
              id="Footer__About"
              role="button"
              tabIndex={0}
              onClick={() => go("/about")}
              onKeyDown={(e) => handleKey(e, "/about")}
              className="flex justify-start text-left items-center h-[17.00px] w-[73.00px] absolute left-[0px] top-[11.44px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
              >
                About
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_Service"
            className="absolute h-[40.80px] w-[calc(100%+-0.00px)] opacity-70 left-[0.00px] top-[108.80px]"
          >
            <span
              id="Footer__Service"
              role="button"
              tabIndex={0}
              onClick={() => go("/products")}
              onKeyDown={(e) => handleKey(e, "/products")}
              className="flex justify-start text-left items-center h-[16.00px] w-[73.00px] absolute left-[0px] top-[12.03px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
              >
                Service
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_Blog"
            className="absolute h-[40.80px] w-[calc(100%+-0.00px)] opacity-70 left-[0.00px] top-[163.20px]"
          >
            <span
              id="Footer__Blog"
              role="button"
              tabIndex={0}
              onClick={() => go("/blog")}
              onKeyDown={(e) => handleKey(e, "/blog")}
              className="flex justify-start text-left items-center h-[17.00px] w-[34.00px] absolute left-[0px] top-[11.64px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
              >
                Blog
              </span>
            </span>
          </div>
        </div>

        <div
          id="Footer__Link_UXUI"
          className="absolute h-[40.80px] w-[150px] opacity-70 right-[250.00px] top-[50.16px]"
        >
          <span
            id="Footer__UX_UI"
            className="flex justify-start text-left items-center h-[16.00px] w-[69.00px] absolute left-[0px] top-[11.84px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              UX/UI
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_DigitalMarketing"
          className="absolute h-[41.00px] w-[150px] opacity-70 right-[250.00px] top-[104.30px]"
        >
          <span
            id="Footer__Digital_Marketing"
            className="flex justify-start text-left items-center h-[16.00px] w-[129.00px] absolute left-[0px] top-[11.70px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              Digital Marketing
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_EquityResearch"
          className="absolute h-[40.00px] w-[150px] opacity-70 right-[250.00px] top-[159.30px]"
        >
          <span
            id="Footer__Equity_Research"
            className="flex justify-start text-left items-center h-[16.00px] w-[128.00px] absolute left-[0px] top-[11.70px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              Equity Research
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Development"
          className="absolute h-[40.80px] w-[150px] opacity-70 right-[250.00px] top-[213.37px]"
        >
          <span
            id="Footer__Development"
            className="flex justify-start text-left items-center h-[16.00px] w-[109.00px] absolute left-[0px] top-[11.63px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              Developement
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_MyRameswaramTrip"
          className="absolute h-[41.00px] w-[160px] opacity-70 right-[50.00px] top-[50.16px]"
        >
          <span
            id="Footer__MyRameswaramTrip"
            className="flex justify-start text-left items-center h-[16.00px] w-[155.00px] absolute left-[0px] top-[11.84px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              MyRameswaramTrip
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Seafsoft"
          className="absolute h-[40.80px] w-[160px] opacity-70 right-[50.00px] top-[104.42px]"
        >
          <span
            id="Footer__Seafsoft"
            className="flex justify-start text-left items-center h-[17.00px] w-[87.00px] absolute left-[0px] top-[11.58px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              Seafsoft
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Contact"
          className="absolute h-[40.80px] w-[160px] opacity-70 right-[50.00px] top-[158.83px]"
        >
          <span
            id="Footer__Contact"
            role="button"
            tabIndex={0}
            onClick={() => go("/contact")}
            onKeyDown={(e) => handleKey(e, "/contact")}
            className="flex justify-start text-left items-center h-[16.00px] w-[87.00px] absolute left-[0px] top-[12.17px] cursor-pointer"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              Contact
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_FAQ"
          className="absolute h-[40.80px] w-[160px] right-[50.00px] top-[213.23px]"
        >
          <span
            id="Footer__FAQ"
            role="button"
            tabIndex={0}
            onClick={() => go("/faq")}
            onKeyDown={(e) => handleKey(e, "/faq")}
            className="flex justify-start text-left items-center h-[16.00px] w-[67.00px] absolute left-[0px] top-[11.77px] cursor-pointer"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
            >
              FAQ
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Designed"
          className="absolute h-[17.97px] w-[217.71px] left-[50.62px] top-[292.00px]"
        >
          <span
            id="Footer__Designed_by_Arunijone"
            className="flex justify-start text-left items-center h-[14.00px] w-[149.00px] absolute top-[calc(50%-7.19px)] left-[0.38px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[17.96px]"
            >
              Designed by Arunijone
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Copyright"
          className="absolute h-[18.00px] w-[203.00px] left-[calc(50%-101.00px)] top-[292.16px]"
        >
          <span
            id="Footer__Copyright"
            className="flex justify-start text-left items-center h-[14.00px] w-[222.00px] absolute left-[calc(50%-110.50px)] top-[calc(50%-7.16px)]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[17.96px]"
            >
              © 2025 Arunijone. All rights reserved.
            </span>
          </span>
        </div>

        <div
          id="Footer__Frame_280"
          className="absolute h-[38.22px] w-[403.78px] flex flex-row justify-end items-center flex-nowrap gap-3.5 right-[50.62px] top-[282.24px]"
        >
          <div
            id="Footer__Link_Social_1"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_1"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_32"
                src="/assets/Home/images/vector_32.svg"
                alt="Vector"
                className="absolute left-[calc(50%-7.81px)] top-[calc(50%-8.19px)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_2"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_2"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_33"
                src="/assets/Home/images/vector_33.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.22)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_3"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_3"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.16px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_34"
                src="/assets/Home/images/vector_34.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.00)]"
              />
              <img
                id="Footer__Vector_35"
                src="/assets/Home/images/vector_35.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.24)] top-[calc(100%_*_0.17)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_4"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_4"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_36"
                src="/assets/Home/images/vector_36.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.10)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_5"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_5"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.16px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_37"
                src="/assets/Home/images/vector_37.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.01)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_6"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_6"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_38"
                src="/assets/Home/images/vector_38.svg"
                alt="Vector"
                className="absolute left-[calc(50%-9.92px)] top-[calc(50%-7.19px)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_7"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_7"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_39"
                src="/assets/Home/images/vector_39.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_-0.06)] top-[calc(100%_*_-0.06)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_8"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[#ffffff1e] border-solid border-[0.7502073645591736px]"
          >
            <div
              id="Footer__SVG_8"
              className="absolute h-[16.33px] w-[16.33px] left-[calc(50%-8.17px)] top-[calc(50%-8.17px)]"
            >
              <img
                id="Footer__Vector_40"
                src="/assets/Home/images/vector_40.svg"
                alt="Vector"
                className="absolute left-[calc(50%-8.37px)] top-[calc(50%-5.19px)]"
              />
            </div>
          </div>
        </div>

        <div
          id="Footer__Frame_290"
          className="absolute h-[49.00px] w-[180.00px] left-[50.00px] top-[50.00px]"
        >
          <span
            id="Footer__Arunijone"
            className="flex justify-start text-left items-center h-[30.00px] w-[114.00px] absolute left-[66.00px] top-[9.00px]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[28.0px] font-normal leading-[28.00px]"
            >
              Arunijone
            </span>
          </span>
          <div
            id="Footer__Logo"
            className="absolute h-[49.00px] w-[51.00px] rounded-[500px] left-[0.00px] top-[0.00px]"
            style={{
              background:
                "url(/assets/Home/images/gemini_generated_image_gyuxclgyuxclgyux_1.png) 100% / cover no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
