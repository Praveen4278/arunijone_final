import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Subscribed: " + email);
    setEmail("");
  };

  return (
    <div
      id="_274_1158__Section"
      className="relative overflow-hidden h-[930.00px] w-full rounded-b-[20px]"
      style={{ marginBottom: '-200px' }}
    >
      <div
        id="_274_1159__Background"
        className="absolute bg-[rgba(35,35,35,1.00)] h-[930.00px] w-[calc(100%+-0.00px)] rounded-[20px] left-[0.00px] top-[0.00px]"
      >
        <span
          id="_274_1160__Subscribe_to_our_new"
          className="flex justify-center text-center items-center h-[30.00px] w-[329.00px] absolute left-[23.00px] top-[172.00px]"
        >
          <span
            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[22.899999618530273px] font-normal leading-[30.50px]"
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            Subscribe to our news later
          </span>
        </span>
        <div
          id="_274_1161__Form_-_Email_Form"
          className="absolute h-[95.63px] w-[calc(100%-46.00px)] left-[22.87px] top-[215.61px]"
        >
          <div
            id="_274_1162__Input"
            className="absolute overflow-hidden bg-[rgba(255,255,255,0.10)] h-[41.94px] w-[calc(100%+-0.00px)] rounded-[228.8300018310547px] left-[0.00px] top-[0.00px]"
          >
            <div
              id="_274_1163__Container"
              className="absolute overflow-hidden h-[17.00px] w-[calc(100%-45.75px)] left-[22.88px] top-[12.47px]"
            >
              <span
                id="_274_1164__Enter_your_email"
                className="flex justify-center text-center items-center h-[17.00px] w-[108.71px] absolute left-[calc(50%-54.38px)] top-[0.00px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(153,153,153,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium"
                  style={{
                    fontFamily: "SF Pro Display",
                  }}
                >
                  Enter your email
                </span>
              </span>
            </div>
          </div>

          <div
            id="_274_1165__Input"
            className="absolute overflow-hidden bg-[rgba(1,97,254,1.00)] h-[44.23px] w-[calc(100%+-0.00px)] rounded-[95.3499984741211px] left-[0.00px] top-[51.39px]"
            onClick={handleSubscribe}
            style={{ cursor: "pointer" }}
          >
            <span
              id="_274_1166__Subscribe"
              className="flex justify-center text-center items-center h-[17.00px] w-[64.84px] absolute left-[calc(50%-32.37px)] top-[calc(50%-8.11px)]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.300000190734863px] font-medium leading-[19.06px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Subscribe
              </span>
            </span>
          </div>
        </div>

        <div
          id="_274_1167__Container"
          className="absolute h-[calc(100%-744.00px)] w-[116.00px] left-[23.00px] top-[342.00px]"
        >
          <div
            id="_274_1168__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[0.00px]"
          >
            <span
              id="_274_1169__Home"
              role="button"
              tabIndex={0}
              onClick={() => navigate("/")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/")}
              className="flex justify-start text-left items-center h-[19.00px] w-[65.86px] absolute left-[0.00px] top-[4.82px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Home
              </span>
            </span>
          </div>

          <div
            id="_274_1170__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[45.75px]"
          >
            <span
              id="_274_1171__About"
              role="button"
              tabIndex={0}
              onClick={() => navigate("/about")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/about")}
              className="flex justify-start text-left items-center h-[19.00px] w-[70.08px] absolute left-[0.00px] top-[4.82px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                About
              </span>
            </span>
          </div>

          <div
            id="_274_1172__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[91.50px]"
          >
            <span
              id="_274_1173__Service"
              role="button"
              tabIndex={0}
              onClick={() => navigate("/products")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/products")}
              className="flex justify-start text-left items-center h-[19.00px] w-[69.79px] absolute left-[0.00px] top-[4.82px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Service
              </span>
            </span>
          </div>

          <div
            id="_274_1174__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[137.25px]"
          >
            <span
              id="_274_1175__Blog"
              role="button"
              tabIndex={0}
              onClick={() => navigate("/blog")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/blog")}
              className="flex justify-start text-left items-center h-[19.00px] w-[32.56px] absolute left-[0.00px] top-[4.82px] cursor-pointer"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Blog
              </span>
            </span>
          </div>
        </div>

        <div
          id="_274_1176__Container"
          className="absolute h-[calc(100%-744.00px)] w-[151.00px] left-[178.00px] top-[342.00px]"
        >
          <div
            id="_274_1177__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[0.00px]"
          >
            <span
              id="_274_1178__UX_UI"
              className="flex justify-start text-left items-center h-[19.00px] w-[66.65px] absolute left-[0.00px] top-[4.82px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                UX/UI
              </span>
            </span>
          </div>

          <div
            id="_274_1179__Link"
            className="absolute h-[31.00px] w-[calc(100%+19.00px)] left-[-0.46px] opacity-70 top-[45.27px]"
          >
            <span
              id="_274_1180__Digital_Marketing"
              className="flex justify-start text-left items-center h-[19.00px] w-[126.00px] absolute left-[-0.46px] top-[4.52px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Digital Marketing
              </span>
            </span>
          </div>

          <div
            id="_274_1181__Link"
            className="absolute h-[31.00px] w-[calc(100%+19.00px)] left-[-0.46px] opacity-70 top-[91.27px]"
          >
            <span
              id="_274_1182__Equity_Research"
              className="flex justify-start text-left items-center h-[19.00px] w-[121.00px] absolute left-[-0.46px] top-[4.77px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Equity Research
              </span>
            </span>
          </div>

          <div
            id="_274_1183__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[137.25px]"
          >
            <span
              id="_274_1184__Development"
              className="flex justify-start text-left items-center h-[19.00px] w-[99.00px] absolute left-[-0.46px] top-[5.02px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Development
              </span>
            </span>
          </div>
        </div>

        <span
          id="_274_1185__Arunijone"
          className="flex justify-start text-left items-center h-[25.00px] w-[97.00px] absolute left-[calc(50%-48.50px)] top-[116.00px]"
        >
          <span
            className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[24.0px] font-normal leading-[28.00px]"
            style={{
              fontFamily: "SF Pro Display",
            }}
          >
            Arunijone
          </span>
        </span>
        <div
          id="_274_1186__Container"
          className="absolute h-[calc(100%-744.00px)] w-[154.00px] left-[23.00px] top-[525.00px]"
        >
          <div
            id="_274_1187__Link"
            className="absolute h-[30.00px] w-[calc(100%+39.00px)] opacity-70 left-[0.13px] top-[0.27px]"
          >
            <span
              id="_274_1188__MyRameswaramTrip"
              className="flex justify-start text-left items-center h-[19.00px] w-[154.00px] absolute left-[0.13px] top-[5.27px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                MyRameswaramTrip
              </span>
            </span>
          </div>

          <div
            id="_274_1189__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[45.75px]"
          >
            <span
              id="_274_1190__Seafsoft"
              className="flex justify-start text-left items-center h-[19.00px] w-[84.26px] absolute left-[0.00px] top-[4.82px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Seafsoft
              </span>
            </span>
          </div>

          <div
            id="_274_1191__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[91.50px]"
          >
            <span
              id="_274_1192__Contact"
              className="flex justify-start text-left items-center h-[19.00px] w-[84.22px] absolute left-[0.00px] top-[4.82px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                Contact
              </span>
            </span>
          </div>

          <div
            id="_274_1193__Link"
            className="absolute h-[30.50px] w-[calc(100%-0.22px)] opacity-70 left-[0.00px] top-[137.25px]"
          >
            <span
              id="_274_1194__FAQ"
              className="flex justify-start text-left items-center h-[19.00px] w-[64.85px] absolute left-[0.00px] top-[4.82px]"
            >
              <span
                className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
                style={{
                  fontFamily: "SF Pro Display",
                }}
              >
                FAQ
              </span>
            </span>
          </div>
        </div>

        <div
          id="_274_1195__Gemini_Generated_Ima"
          className="absolute h-[56.00px] w-[58.00px] left-[calc(50%-28.50px)] rounded-[500px] top-[40.00px]"
          style={{
            background: "url(/assets/Home/images/gemini_generated_image_gyuxclgyuxclgyux_1.png) center / cover no-repeat",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>

        <div
          id="_274_1196__Frame_285"
          className="absolute h-[43.17px] w-[247.85px] left-[calc(50%-124.50px)] flex flex-row justify-start items-center flex-nowrap gap-2 top-[726.25px]"
        >
          <div
            id="_274_1197__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1198__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1199__Vector"
                src="/assets/homemob/images/vector_26.svg"
                alt="Vector"
                className="absolute left-[calc(50%-7.59px)] top-[calc(50%-7.84px)]"
              />
            </div>
          </div>

          <div
            id="_274_1200__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1201__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1202__Vector"
                src="/assets/homemob/images/vector_27.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.22)]"
              />
            </div>
          </div>

          <div
            id="_274_1203__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1204__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1205__Vector"
                src="/assets/homemob/images/vector_28.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.00)]"
              />
              <img
                id="_274_1206__Vector"
                src="/assets/homemob/images/vector_29.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.24)] top-[calc(100%_*_0.17)]"
              />
            </div>
          </div>

          <div
            id="_274_1207__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1208__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1209__Vector"
                src="/assets/homemob/images/vector_30.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.10)]"
              />
            </div>
          </div>

          <div
            id="_274_1210__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1211__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.16px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1212__Vector"
                src="/assets/homemob/images/vector_31.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.01)]"
              />
            </div>
          </div>
        </div>

        <div
          id="_274_1213__Frame_286"
          className="absolute h-[43.17px] w-[145.51px] left-[calc(50%-73.33px)] flex flex-row justify-start items-center flex-nowrap gap-2 top-[784.25px]"
        >
          <div
            id="_274_1214__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1215__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1216__Vector"
                src="/assets/homemob/images/vector_32.svg"
                alt="Vector"
                className="absolute left-[calc(50%-9.76px)] top-[calc(50%-7.84px)]"
              />
            </div>
          </div>

          <div
            id="_274_1217__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1218__SVG"
              className="absolute h-[19.00px] w-[19.00px] left-[calc(50%-9.92px)] top-[calc(50%-9.83px)]"
            >
              <img
                id="_274_1219__Vector"
                src="/assets/homemob/images/vector_33.svg"
                alt="Vector"
                className="absolute left-[calc(50%-9.50px)] top-[calc(50%-9.50px)]"
              />
            </div>
          </div>

          <div
            id="_274_1220__Link"
            className="relative border h-[41.17px] w-[41.17px] rounded-[45.77000045776367px] border-[#ffffff1e] border-solid"
          >
            <div
              id="_274_1221__SVG"
              className="absolute h-[18.30px] w-[18.30px] left-[calc(50%-9.15px)] top-[calc(50%-9.15px)]"
            >
              <img
                id="_274_1222__Vector"
                src="/assets/homemob/images/vector_34.svg"
                alt="Vector"
                className="absolute left-[calc(50%-8.10px)] top-[calc(50%-5.84px)]"
              />
            </div>
          </div>
        </div>

        <div
          id="_274_1223__Link"
          className="absolute h-[20.00px] w-[180.00px] left-[calc(50%-90.50px)] top-[858.00px]"
        >
          <span
            id="_274_1224____2025_Temlis__All_r"
            className="flex justify-start text-left items-center h-[16.00px] w-[191.00px] absolute left-[calc(50%-95.00px)] top-[calc(50%-8.00px)]"
          >
            <span
              className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[13.399999618530273px] font-normal leading-[20.14px]"
              style={{
                fontFamily: "SF Pro Display",
              }}
            >
              © 2025 Temlis. All rights reserved.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
