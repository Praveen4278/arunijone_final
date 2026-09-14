import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobFooter from "../components/MobFooter";

const DESIGN_HEIGHT = 1810;

const ContactDesktop = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setBudget("");
    setMessage("");
  };

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
          <Navbar activePage="home" />

          <div
            id="_212_126__Frame_1171277065"
            className="absolute h-[1590.00px] w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[108.00px]"
          >
            <div
              id="_212_127__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[296.00px] w-full rounded-[20.41314125061035px]"
            >
              <div
                id="_212_128__Frame_174"
                className="absolute h-[66.00px] w-[max-content] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center flex-nowrap gap-[10px] p-2.5 top-[37.62px]"
              >
                <span
                  id="_212_129__Heading_1___Expert_g"
                  className="flex justify-center text-center items-center h-[66.00px] -left-0.25 mr-0.5 w-auto relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[66.00px]"
                  >
                    Connect Instantly on
                  </span>
                </span>
                <div
                  id="_212_130__Frame_1171277059"
                  className="relative h-[35.00px] w-[247.00px]"
                >
                  <img
                    id="_212_131__Vector"
                    src="/assets/images/vector_9.svg"
                    alt="Vector"
                    className="absolute left-[0.00px] top-[0.00px]"
                  />
                </div>
              </div>

              <div
                id="_212_132__Frame_175"
                className="absolute h-[41.00px] w-[413.66px] left-[calc(50%-217.00px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[129.05px]"
              >
                <span
                  id="_212_133__Adapt_easily_and_sca"
                  className="flex justify-center text-center items-center h-[41.00px] w-[413.66px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
                  >
                    Adapt easily and scale confidently with a flexible system
                    designed to support your business at every stage of growth.
                  </span>
                </span>
              </div>

              <div
                id="_212_134__Background"
                className="absolute bg-[rgba(37,211,102,1.00)] h-[31.00px] w-[129.84px] left-[calc(50%-88.00px)] flex flex-row justify-start items-center flex-nowrap gap-3 px-[23px] py-4 rounded-[calc(136.94776916503906px_*_1.0)] top-[210.00px]"
              >
                <div
                  id="_212_135__whatsapp-business-ap"
                  className="relative overflow-hidden h-[29.88px] w-[28.63px]"
                >
                  <img
                    id="_212_136__Group"
                    src="/assets/images/group.svg"
                    alt="Group"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                  />
                </div>

                <span
                  id="_212_140__WhatsApp"
                  className="flex justify-start text-left items-center h-[27.00px] w-[88.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[18.67469596862793px] font-semibold leading-[26.92px] capitalize"
                  >
                    WhatsApp
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_212_141__Section"
              className="relative overflow-hidden h-[323.00px] w-full rounded-[20.41314125061035px] mt-[50px]"
            >
              <div
                id="_212_142__Frame_174"
                className="absolute h-[66.00px] w-[max-content] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center flex-nowrap gap-[10px] p-2.5 top-[37.62px]"
              >
                <span
                  id="_212_143__Heading_1___Expert_g"
                  className="flex justify-center text-center items-center h-[66.00px] -left-0.25 mr-0.5 w-auto relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[58.0px] font-normal leading-[66.00px]"
                  >
                    Share your experience with us on
                  </span>
                </span>
                <div
                  id="_212_144__Frame_1171277058"
                  className="relative h-[43.00px] w-[177.00px]"
                >
                  <div
                    id="_212_145__image_249"
                    className="absolute h-[59.00px] w-[177.00px] left-[0.00px] top-[0.00px]"
                    style={{
                      background:
                        "url(/assets/images/image_249.png) 100% / cover no-repeat",
                    }}
                  ></div>
                </div>
              </div>

              <div
                id="_212_146__Frame_175"
                className="absolute h-[62.00px] w-[603.00px] left-[calc(50%-311.67px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5 top-[129.05px]"
              >
                <span
                  id="_212_147__Your_feedback_helps_"
                  className="flex justify-center text-center items-center h-[62.00px] w-[603.00px] relative"
                >
                  <span
                    className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[20.41px]"
                  >
                    Your feedback helps us improve and builds trust for future
                    clients.
                    <br /> If you're happy with the completed project, please take
                    a moment to leave us a review on our Google Business Profile.
                  </span>
                </span>
              </div>

              <div
                id="_212_148__Background"
                className="absolute bg-white h-[28.19px] w-[242.75px] left-[calc(50%-146.00px)] flex flex-row justify-start items-center flex-nowrap gap-3 px-6 py-[17px] rounded-[calc(142.58309936523438px_*_1.0)] border-0 top-[231.00px]"
              >
                <div
                  id="_212_149__Frame"
                  className="relative overflow-hidden h-[28.52px] w-[32.41px]"
                >
                  <img
                    id="_212_150__Vector"
                    src="/assets/images/vector_10.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.52)]"
                  />
                  <img
                    id="_212_151__Vector"
                    src="/assets/images/vector_11.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.29)]"
                  />
                  <img
                    id="_212_152__Vector"
                    src="/assets/images/vector_12.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_153__Vector"
                    src="/assets/images/vector_13.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_154__Vector"
                    src="/assets/images/vector_14.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_155__Vector"
                    src="/assets/images/vector_15.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.74)] top-[calc(100%_*_0.38)]"
                  />
                  <img
                    id="_212_156__Vector"
                    src="/assets/images/vector_16.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_157__Vector"
                    src="/assets/images/vector_17.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_158__Vector"
                    src="/assets/images/vector_18.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.70)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_159__Vector"
                    src="/assets/images/vector_19.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.04)]"
                  />
                  <img
                    id="_212_160__Vector"
                    src="/assets/images/vector_20.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.61)] top-[calc(100%_*_0.65)]"
                  />
                </div>

                <span
                  id="_212_161__Google_Business_Prof"
                  className="flex justify-start text-left items-center h-[29.00px] w-[198.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(30,136,229,1.00)] bg-clip-text text-transparent not-italic text-[19.443151473999023px] font-medium leading-[28.03px] capitalize"
                  >
                    Google Business Profile
                  </span>
                </span>
              </div>
            </div>

            <div
              id="_212_162__Section"
              className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[361.00px] w-full rounded-[24.43000030517578px]"
            >
              <div
                id="_212_163__Border"
                className="absolute h-[36.52px] w-[155.16px] left-[calc(50%-78.29px)] top-[calc(50%-123.51px)] rounded-[244.27999877929688px] border-0"
              >
                <span
                  id="_212_164__Contact_Us"
                  className="flex justify-center text-center items-center h-[20.23px] w-[114.83px] absolute left-[calc(50%-57.23px)] top-[9.14px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.199999809265137px] font-medium leading-[20.23px] tracking-[2.13700008392334px] uppercase"
                  >
                    Contact Us
                  </span>
                </span>
              </div>

              <span
                id="_212_165__Heading_1___Get_in_t"
                className="flex justify-center text-center items-center h-[59.50px] w-[855.73px] absolute left-[calc(50%-428.00px)] top-[117.93px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[48.900001525878906px] font-normal leading-[56.04px]"
                >
                  Get in touch, let us know how we can help
                </span>
              </span>
              <div
                id="_212_166__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[50.81px] top-[224.81px]"
              >
                <div
                  id="_212_167__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_168__Vector"
                    src="/assets/images/vector_21.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_169__Vector"
                    src="/assets/images/vector_22.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.33)]"
                  />
                </div>

                <span
                  id="_212_170__Email_Addres"
                  className="flex justify-start text-left items-center h-[24.00px] w-[100.00px] absolute left-[94.19px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Email Addres
                  </span>
                </span>
                <span
                  id="_212_171__arunijone_gmail_com"
                  className="flex justify-start text-left items-center h-[28.50px] w-[210.15px] absolute left-[94.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    arunijone@gmail.com
                  </span>
                </span>
              </div>

              <div
                id="_212_172__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[510.56px] top-[224.81px]"
              >
                <div
                  id="_212_173__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_174__Vector"
                    src="/assets/images/vector_23.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_175__Vector"
                    src="/assets/images/vector_24.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.30)]"
                  />
                </div>

                <span
                  id="_212_176__Phone_Number"
                  className="flex justify-start text-left items-center h-[24.00px] w-[115.00px] absolute left-[93.44px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Phone Number
                  </span>
                </span>
                <span
                  id="_212_177___91_85085_10983"
                  className="flex justify-start text-left items-center h-[28.50px] w-[170.81px] absolute left-[93.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    +91 85085 10983
                  </span>
                </span>
              </div>

              <div
                id="_212_178__Background"
                className="absolute bg-white h-[calc(100%-275.52px)] w-[calc(100%-1021.53px)] rounded-[24.43000030517578px] left-[970.31px] top-[224.81px]"
              >
                <div
                  id="_212_179__SVG"
                  className="absolute h-[52.92px] w-[52.92px] top-[calc(50%-26.46px)] left-[20.28px]"
                >
                  <img
                    id="_212_180__Vector"
                    src="/assets/images/vector_25.svg"
                    alt="Vector"
                    className="absolute top-[calc(100%_*_0.01)]"
                  />
                  <img
                    id="_212_181__Vector"
                    src="/assets/images/vector_26.svg"
                    alt="Vector"
                    className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.30)]"
                  />
                </div>

                <span
                  id="_212_182__Our_Office"
                  className="flex justify-start text-left items-center h-[24.00px] w-[78.00px] absolute left-[93.69px] top-[16.19px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-light leading-[24.37px]"
                  >
                    Our Office
                  </span>
                </span>
                <span
                  id="_212_183__Rameswaram__Tamilnad"
                  className="flex justify-start text-left items-center h-[28.50px] w-[265.38px] absolute left-[93.53px] top-[40.67px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[20.0px] font-normal leading-[28.50px]"
                  >
                    Rameswaram, Tamilnadu
                  </span>
                </span>
              </div>
            </div>

            <Footer />
          </div>
      </DesktopPageWrapper>
      {/* ====== MOBILE VIEW ====== */}
      <div className="md:hidden bg-white w-full overflow-x-hidden">
      <div
        id="_266_524__Contact"
        className="relative overflow-hidden bg-white h-[3479.0px] w-full mx-auto"
      >
        <MobBanner iconSrc="/assets/contact/images/group.svg" />

        <div
          id="_266_534__Frame_1171277061"
          className="absolute h-[3301.75px] w-[calc(100%-16px)] flex flex-col justify-start items-center flex-nowrap gap-[30px] left-[8.00px] top-[78.00px]"
        >
          <div
            id="_266_535__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[429.00px] w-full rounded-[22.8799991607666px]"
          >
            <span
              id="_266_536__Heading_1___Expert_g"
              className="flex justify-center text-center items-center h-[113.00px] w-[356.00px] absolute left-[calc(50%-177.50px)] top-[35.00px]"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[54.0px] font-normal leading-[62.00px]"
                
              >
                Connect Instantly on&nbsp;
              </span>
            </span>
            <span
              id="_266_537__Adapt_easily_and_sca"
              className="flex justify-center text-center items-center h-[65.00px] w-[295.00px] absolute left-[calc(50%-147.50px)] top-[248.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.41px]"
                
              >
                Adapt easily and scale confidently with a flexible system
                designed to support your business at every stage of growth.
              </span>
            </span>
            <div
              id="_266_538__Background"
              className="absolute bg-[rgba(37,211,102,1.00)] h-[24.60px] w-[105.56px] left-[calc(50%-71.06px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-[18px] py-[13px] rounded-[calc(110px_*_1.0)] top-[343.00px]"
            >
              <div
                id="_266_539__whatsapp-business-ap"
                className="relative overflow-hidden h-[24.00px] w-[23.00px]"
              >
                <img
                  id="_266_540__Group"
                  src="/assets/contact/images/group_1.svg"
                  alt="Group"
                  className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.01)]"
                />
              </div>

              <span
                id="_266_544__WhatsApp"
                className="flex justify-start text-left items-center h-[22.00px] w-[71.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.0px] font-semibold leading-[21.62px] capitalize"
                  
                >
                  WhatsApp
                </span>
              </span>
            </div>

            <img
              id="_266_545__Vector"
              src="/assets/contact/images/vector.svg"
              alt="Vector"
              className="absolute left-[calc(50%-102.50px)] top-[170.00px]"
            />
          </div>

          <div
            id="_266_546__Section"
            className="relative overflow-hidden h-[414.00px] w-full rounded-[22.8799991607666px]"
          >
            <span
              id="_266_547__Your_feedback_helps_"
              className="flex justify-center text-center items-center h-[61.00px] w-[375.00px] absolute left-[calc(50%-187.50px)] top-[230.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[14.0px] font-normal leading-[20.41px]"
                
              >
                Your feedback helps us improve and builds trust for future
                clients. If you're happy with the completed project, please take
                a moment to leave us a review on our Google Business Profile.
              </span>
            </span>
            <div
              id="_266_548__Background"
              className="absolute bg-white h-[23.29px] w-[192.48px] left-[calc(50%-115.50px)] flex flex-row justify-start items-center flex-nowrap gap-2.5 px-[19px] py-[13px] rounded-[calc(112.95833587646484px_*_1.0)] border-0 top-[325.00px]"
            >
              <div
                id="_266_549__Frame"
                className="relative overflow-hidden h-[22.59px] w-[25.67px]"
              >
                <img
                  id="_266_550__Vector"
                  src="/assets/contact/images/vector_1.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.52)]"
                />
                <img
                  id="_266_551__Vector"
                  src="/assets/contact/images/vector_2.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.09)] top-[calc(100%_*_0.29)]"
                />
                <img
                  id="_266_552__Vector"
                  src="/assets/contact/images/vector_3.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.38)]"
                />
                <img
                  id="_266_553__Vector"
                  src="/assets/contact/images/vector_4.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.38)]"
                />
                <img
                  id="_266_554__Vector"
                  src="/assets/contact/images/vector_5.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.38)]"
                />
                <img
                  id="_266_555__Vector"
                  src="/assets/contact/images/vector_6.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.74)] top-[calc(100%_*_0.38)]"
                />
                <img
                  id="_266_556__Vector"
                  src="/assets/contact/images/vector_7.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.01)] top-[calc(100%_*_0.04)]"
                />
                <img
                  id="_266_557__Vector"
                  src="/assets/contact/images/vector_8.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.25)] top-[calc(100%_*_0.04)]"
                />
                <img
                  id="_266_558__Vector"
                  src="/assets/contact/images/vector_9.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.70)] top-[calc(100%_*_0.04)]"
                />
                <img
                  id="_266_559__Vector"
                  src="/assets/contact/images/vector_10.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.50)] top-[calc(100%_*_0.04)]"
                />
                <img
                  id="_266_560__Vector"
                  src="/assets/contact/images/vector_11.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.61)] top-[calc(100%_*_0.65)]"
                />
              </div>

              <span
                id="_266_561__Google_Business_Prof"
                className="flex justify-start text-left items-center h-[23.00px] w-[157.00px] relative"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(30,136,229,1.00)] bg-clip-text text-transparent not-italic text-[15.403409957885742px] font-medium leading-[22.20px] capitalize"
                  
                >
                  Google Business Profile
                </span>
              </span>
            </div>

            <div
              id="_266_562__Frame_1171277063"
              className="absolute h-[165.00px] w-[365.00px] left-[10.00px] top-[35.00px]"
            >
              <span
                id="_266_563__Heading_1___Expert_g"
                className="flex justify-center text-center items-center h-[112.00px] w-[365.00px] absolute left-[calc(50%-182.50px)] top-[0.00px]"
              >
                <span
                  className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[56.00px]"

                >
                  Share your experience with
                </span>
              </span>
              <div
                id="_266_564__Frame_1171277062"
                className="absolute h-[53.00px] w-[274.00px] left-[calc(50%-137.00px)] top-[112.00px]"
              >
                <div
                  id="_266_565__image_250"
                  className="absolute h-[44.00px] w-[132.00px] left-[125.00px] top-[5.00px]"
                  style={{
                    background:
                      "url(/assets/Home/images/image_266.webp) 100% / cover no-repeat",
                  }}
                ></div>

                <span
                  id="_266_566__Heading_1___Expert_g"
                  className="flex justify-center text-center items-center h-[42.00px] w-[123.00px] absolute left-[calc(50%-137.00px)] top-[0.00px]"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[46.0px] font-normal leading-[56.00px]"

                  >
                    us on
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            id="_266_567__Section"
            className="relative bg-[rgba(246,247,249,1.00)] h-[648.00px] w-full rounded-[22.8799991607666px]"
          >
            <div
              id="_266_568__Border"
              className="absolute h-[30.00px] w-[123.00px] left-[calc(50%-62.50px)] rounded-[228.8300018310547px] border-0 top-[35.00px]"
            >
              <span
                id="_266_569__Contact_Us"
                className="flex justify-start text-left items-center h-[14.00px] w-[92.25px] absolute left-[calc(50%-46.50px)] top-[calc(50%-7.00px)]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[12.0px] font-medium leading-[13.73px] tracking-[1.715999960899353px] uppercase"
                  
                >
                  Contact Us
                </span>
              </span>
            </div>

            <span
              id="_266_570__Heading_1___Talk_to_"
              className="flex justify-center text-center items-center h-[171.00px] w-[328.00px] absolute left-[calc(50%-163.50px)] top-[102.00px]"
            >
              <span
                className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-normal leading-[56.04px]"
                
              >
                Get in touch, let us know how we can help
              </span>
            </span>
            <div
              id="_266_571__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.00px] top-[323.00px]"
            >
              <div
                id="_266_572__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_266_573__Vector"
                  src="/assets/contact/images/vector_12.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_266_574__Vector"
                  src="/assets/contact/images/vector_13.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.29)] top-[calc(100%_*_0.33)]"
                />
              </div>

              <span
                id="_266_575__Email_Addres"
                className="flex justify-start text-left items-center h-[21.00px] w-[104.61px] absolute left-[68.00px] top-[18.25px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  
                >
                  Email Addres
                </span>
              </span>
              <span
                id="_266_576__arunijone_gmail_com"
                className="flex justify-start text-left items-center h-[23.00px] w-[196.65px] absolute left-[68.00px] top-[44.58px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  
                >
                  arunijone@gmail.com
                </span>
              </span>
            </div>

            <div
              id="_266_577__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.00px] top-[424.76px]"
            >
              <div
                id="_266_578__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_266_579__Vector"
                  src="/assets/contact/images/vector_14.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_266_580__Vector"
                  src="/assets/contact/images/vector_15.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.36)] top-[calc(100%_*_0.30)]"
                />
              </div>

              <span
                id="_266_581__Phone_Number"
                className="flex justify-start text-left items-center h-[21.00px] w-[120.84px] absolute left-[68.00px] top-[18.25px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  
                >
                  Phone Number
                </span>
              </span>
              <span
                id="_266_582___91_85085_10983"
                className="flex justify-start text-left items-center h-[23.00px] w-[165.00px] absolute left-[67.75px] top-[44.55px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  
                >
                  +91 85085 10983
                </span>
              </span>
            </div>

            <div
              id="_266_583__Background"
              className="absolute bg-white h-[86.52px] w-[calc(100%-30.75px)] rounded-[15.260000228881836px] left-[15.00px] top-[526.53px]"
            >
              <div
                id="_266_584__SVG"
                className="absolute h-[38.13px] w-[38.13px] top-[calc(50%-19.07px)] left-[15.25px]"
              >
                <img
                  id="_266_585__Vector"
                  src="/assets/contact/images/vector_16.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.00)] top-[calc(100%_*_0.01)]"
                />
                <img
                  id="_266_586__Vector"
                  src="/assets/contact/images/vector_17.svg"
                  alt="Vector"
                  className="absolute left-[calc(100%_*_0.33)] top-[calc(100%_*_0.30)]"
                />
              </div>

              <span
                id="_266_587__My_Location"
                className="flex justify-start text-left items-center h-[21.00px] w-[103.00px] absolute left-[67.75px] top-[17.78px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,0.60)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[30.00px]"
                  
                >
                  My Location
                </span>
              </span>
              <span
                id="_266_588__Rameswaram__Tamilnad"
                className="flex justify-start text-left items-center h-[23.00px] w-[248.42px] absolute left-[68.00px] top-[44.58px]"
              >
                <span
                  className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[28.00px]"
                  
                >
                  Rameswaram, Tamilnadu
                </span>
              </span>
            </div>
          </div>

          <form
            id="_266_589__Form_-_Form"
            className="relative h-[745.75px] w-[344.25px] flex flex-col justify-start items-start flex-nowrap gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <span
              id="_266_590__Label___Your_Name"
              className="flex justify-start text-left items-center h-[22.88px] relative"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                
              >
                Your Name
              </span>
            </span>
            <div
              id="_266_591__Input"
              className="relative overflow-hidden bg-white border h-[51.39px] w-full rounded-[122.04000091552734px] border-[#11111119] border-solid"
            >
              <div
                id="_266_592__Container"
                className="absolute overflow-hidden h-[16.00px] w-[calc(100%-47.75px)] left-[23.87px] top-[calc(50%-8px)]"
              >
                <input
                  aria-label="Your name"
                  placeholder="Your name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="absolute left-0 top-0 w-full h-full bg-transparent text-[14.0px] outline-none border-none contact-input"
                />
              </div>
            </div>

            <span
              id="_266_594__Label___Last_Name"
              className="flex justify-start text-left items-center h-[22.88px] relative "
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                
              >
                Last Name
              </span>
            </span>
            <div
              id="_266_595__Input"
              className="relative overflow-hidden bg-white border h-[51.39px] w-full rounded-[122.04000091552734px] border-[#11111119] border-solid"
            >
              <div
                id="_266_596__Container"
                className="absolute overflow-hidden h-[16.00px] w-[calc(100%-47.75px)] left-[23.87px] top-[calc(50%-8px)]"
              >
                <input
                  aria-label="Your last name"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="absolute left-0 top-0 w-full h-full bg-transparent text-[14.0px] outline-none border-none contact-input"
                />
              </div>
            </div>

            <span
              id="_266_598__Label___Email_addres"
              className="flex justify-start text-left items-center h-[22.88px] relative"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                
              >
                Email address
              </span>
            </span>
            <div
              id="_266_599__Input"
              className="relative overflow-hidden bg-white border h-[51.39px] w-full rounded-[122.04000091552734px] border-[#11111119] border-solid"
            >
              <div
                id="_266_600__Container"
                className="absolute overflow-hidden h-[16.00px] w-[calc(100%-47.75px)] left-[23.87px] top-[calc(50%-8px)]"
              >
                <input
                  aria-label="Your email address"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="absolute left-0 top-0 w-full h-full bg-transparent text-[14.0px] outline-none border-none contact-input"
                  type="email"
                />
              </div>
            </div>

            <span
              id="_266_602__Label___Email_addres"
              className="flex justify-start text-left items-center h-[22.88px] relative"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                
              >
                What's your Budget?
              </span>
            </span>
            <div
              id="_266_603__Input"
              className="relative overflow-hidden bg-white border h-[51.39px] w-full rounded-[122.04000091552734px] border-[#11111119] border-solid"
            >
              <div
                id="_266_604__Container"
                className="absolute overflow-hidden h-[16.00px] w-[calc(100%-47.75px)] left-[23.87px] top-[calc(50%-8px)]"
              >
                <input
                  aria-label="Your budget"
                  placeholder="Your Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="absolute left-0 top-0 w-full h-full bg-transparent text-[14.0px] outline-none border-none contact-input"
                />
              </div>
            </div>

            <span
              id="_266_606__Label___Message"
              className="flex justify-start text-left items-center h-[22.88px] relative"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[24.00px]"
                
              >
                Message
              </span>
            </span>
            <div
              id="_266_607__Textarea"
              className="relative overflow-auto bg-white border h-[211.56px] w-full rounded-[22.8799991607666px] border-[#11111119] border-solid hide-scrollbar"
            >
              <textarea
                aria-label="Message"
                placeholder="Write something...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="absolute left-0 top-0 w-full h-full bg-transparent text-[14.0px] outline-none p-4 resize-none border-none contact-input"
              />
            </div>

            <div
              id="_266_609__Link"
              className="relative bg-[rgba(1,97,254,1.00)] h-[44.23px] w-full rounded-[95.3499984741211px]"
            >
              <button
                type="submit"
                className="absolute left-[calc(50%-26.38px)] top-[calc(50%-8.04px)] bg-transparent border-0 p-0"
              >
                <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[16.0px] font-medium leading-[20.00px]">
                  Submit
                </span>
              </button>
            </div>
          </form>

          <MobFooter />
        </div>
      </div>
    
        
      </div>{/* end mobile view */}

    </>
  );
};
export default ContactDesktop;
