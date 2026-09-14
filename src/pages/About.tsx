import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMob from "./Aboutmob.tsx";
import DesktopPageWrapper from "../components/DesktopPageWrapper";

const DESIGN_HEIGHT = 5339;
const asset = (name: string) => `/assets/about/images/${name}`;

type Ecosystem = "Products" | "Services" | "Partners";
type Expertise = "Research" | "Design" | "Development" | "Creative" | "Marketing";

const ecosystemData: Record<Ecosystem, Expertise[]> = {
  Products: ["Research", "Design", "Development"],
  Services: ["Research", "Design", "Creative", "Marketing"],
  Partners: ["Research", "Development", "Marketing"],
};

const galleryData: Record<Expertise, { title: string; images: string[] }> = {
  Research: {
    title: "Research-led digital decisions",
    images: [asset("googel_ux_design_1.png"), asset("image_26.png"), asset("image_10.png")],
  },
  Design: {
    title: "Transforming ideas into digital products",
    images: [asset("image_26.png"), asset("image_10.png"), asset("image_1.png")],
  },
  Development: {
    title: "Structured builds for modern businesses",
    images: [asset("image_10.png"), asset("image_47.png"), asset("image_63.png")],
  },
  Creative: {
    title: "Creative systems with clear impact",
    images: [asset("image_1.png"), asset("image_47.png"), asset("googel_ux_design_1.png")],
  },
  Marketing: {
    title: "Growth assets for digital reach",
    images: [asset("image_47.png"), asset("image_63.png"), asset("image_10.png")],
  },
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#202833] px-[22px] text-[14px] font-medium uppercase tracking-[3px] text-[#202833]">
    {children}
  </div>
);

const BlueButton = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`inline-flex h-[55px] items-center justify-center gap-[10px] whitespace-nowrap rounded-full border-0 bg-[#0161fe] px-[26px] text-[16px] font-medium leading-none text-white ${className}`}
  >
    {children}
    <ArrowRight size={20} strokeWidth={1.8} />
  </button>
);

const IntroStatement = () => (
  <section className="relative h-[256px] w-full overflow-hidden bg-white text-center">
    <div className="absolute left-[calc(50%-382px)] top-[82px] w-[764px] text-[24px] font-normal leading-[34px] text-[#111]">
      This We deliver high-quality digital solutions while creating
      <br />
      meaningful work <span className="text-[#6d6d6e]">opportunities for individuals with disabilities</span>
      <br />
      <span className="text-[#6d6d6e]">through our collaboration with</span> Arunijone Philanthropy.
    </div>
  </section>
);

const PillButton = ({
  label,
  active,
  onClick,
  width = 194,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  width?: number;
}) => (
  <button
    onClick={onClick}
    className={`flex h-[78px] items-center justify-center gap-[26px] rounded-[18px] border-0 transition-colors ${
      active ? "bg-[#0161fe] text-white" : "bg-white text-[#0161fe]"
    }`}
    style={{ width }}
  >
    <span className={`flex h-[42px] w-[42px] items-center justify-center rounded-full text-[18px] ${active ? "bg-white/25" : "bg-[#0161fe] text-white"}`}>
      ↯
    </span>
    <span className="text-[20px] leading-[24px]">{label}</span>
  </button>
);

const About = () => {
  const navigate = useNavigate();
  const [activeEcosystem, setActiveEcosystem] = useState<Ecosystem | null>("Services");
  const [activeExpertise, setActiveExpertise] = useState<Expertise>("Design");
  const visibleExpertise = activeEcosystem ? ecosystemData[activeEcosystem] : [];
  const gallery = galleryData[activeExpertise];

  const chooseEcosystem = (item: Ecosystem) => {
    setActiveEcosystem(item);
    setActiveExpertise(ecosystemData[item][0]);
  };

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        <Navbar activePage="about" />

        <main className="absolute left-[10px] top-[108px] flex w-[1420px] flex-col gap-[50px]">
          <section
            className="relative w-full overflow-hidden rounded-[20px] bg-[#f6f7f9]"
            style={{ height: 904 }}
          >
            <div
              className="absolute text-center"
              style={{ left: 309, top: 40, width: 802 }}
            >
              <h1 className="text-[58px] font-normal leading-[66px] text-[#111]">
                Expert guidance, tailored solution
              </h1>
              <p className="mx-auto mt-[24px] w-[414px] text-[16px] leading-[22px] text-[#6d6d6e]">
                Adapt easily and scale confidently with a flexible system designed to support
                your business at every stage of growth.
              </p>
              <div className="mt-[25px] flex justify-center gap-[16px]">
                <BlueButton className="h-[54px] w-[126px] px-0" onClick={() => navigate("/contact")}>
                  Contact
                </BlueButton>
                <a
                  href="https://wa.me/919489456581"
                  className="inline-flex h-[54px] w-[142px] items-center justify-center gap-[10px] rounded-full text-[15px] font-semibold text-white"
                  style={{ backgroundColor: "#25d366" }}
                >
                  <img src={asset("group.svg")} alt="" className="h-[24px] w-[23px]" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="absolute" style={{ left: 42, top: 290, width: 1335, height: 520 }}>
              <img
                src={asset("image 262.webp")}
                alt=""
                className="absolute object-cover"
                style={{ left: 0, top: 0, width: 440, height: 520, borderRadius: 18 }}
              />
              <div className="absolute flex flex-col gap-[8px]" style={{ left: 448, top: 0, width: 440, height: 520 }}>
                <div className="p-[18px] text-white" style={{ height: 256, backgroundColor: "#0161fe", borderRadius: 18, overflow: "hidden" }}>
                  <p className="w-[395px] text-[16px] leading-[22px]">
                    Adaptability that helps you scale confidently with a flexible system built
                    to support your growth at every stage.
                  </p>
                  <div className="mt-[36px] text-[51px] leading-[61px]">100%</div>
                </div>
                <div className="p-[17px] text-white" style={{ height: 256, backgroundColor: "#232323", borderRadius: 18, overflow: "hidden" }}>
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/20 text-[16px]">↯</div>
                  <div className="mt-[18px] text-[41px] leading-[48px]">3+</div>
                  <p className="mt-[10px] w-[386px] text-[15px] leading-[20px]">
                    Years of innovation and practical insights, helping businesses grow and
                    stay competitive in the market.
                  </p>
                </div>
              </div>
              <img
                src={asset("image 263.webp")}
                alt=""
                className="absolute object-cover"
                style={{ left: 896, top: 0, width: 440, height: 520, borderRadius: 18 }}
              />
            </div>
          </section>

          <section className="w-full h-[367px] rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
            <Badge>Our Ecosystem</Badge>
            <h2 className="mt-[39px] text-[36px] font-normal leading-[43px] text-[#111]">
              Explore Our Business
              <br />
              Ecosystem
            </h2>
            <div className="mt-[37px] flex justify-center gap-[22px]">
              {(["Products", "Services", "Partners"] as Ecosystem[]).map((item) => (
                <PillButton
                  key={item}
                  label={item}
                  active={activeEcosystem === item}
                  onClick={() => chooseEcosystem(item)}
                />
              ))}
            </div>
          </section>

          {activeEcosystem && (
            <section className="w-full mt-[25px] h-[367px] rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
              <Badge>Our Expertise</Badge>
              <h2 className="mt-[39px] text-[36px] font-normal leading-[43px] text-[#111]">
                Our Core Capabilities &amp;
                <br />
                Expertise
              </h2>
              <div className="mt-[40px] flex justify-center gap-[22px]">
                {visibleExpertise.map((item) => (
                  <PillButton
                    key={item}
                    label={item}
                    active={activeExpertise === item}
                    onClick={() => setActiveExpertise(item)}
                    width={item === "Development" ? 236 : item === "Marketing" ? 204 : 188}
                  />
                ))}
              </div>
            </section>
          )}

          <section
            className="relative rounded-[20px] bg-white pt-[9px] text-center"
            style={{ height: 843 }}
          >
            <div className="mx-auto h-[2px] w-[16px] bg-[#ff27cf]" />
            <div className="mt-[45px]">
              <Badge>Project Galary</Badge>
            </div>
            <h2 className="mx-auto mt-[22px] w-[430px] text-[36px] font-normal leading-[43px] text-[#111]">
              {gallery.title}
            </h2>
            <div className="mt-[38px] flex justify-center gap-[22px]">
              {["Website", "Mobile App", "Saas", "Poster", "Logo"].map((item, index) => (
                <PillButton
                  key={item}
                  label={item}
                  active={index === 0}
                  onClick={() => {}}
                  width={index === 0 ? 194 : index === 1 ? 188 : 150}
                />
              ))}
            </div>
            <div className="mt-[50px] grid grid-cols-4 gap-[22px] px-[42px]">
              {Array.from({ length: 8 }).map((_, index) => (
                <button
                  key={index}
                  className="group relative flex items-center justify-center overflow-hidden rounded-[18px] bg-[#c8c8c8]"
                  style={{ height: 245 }}
                >
                  {index === 5 && <div className="h-[34px] w-[34px] rounded-full border-[4px] border-[#ff27cf] bg-white" />}
                  <span className="absolute right-[18px] top-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0161fe] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink size={24} />
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section
            className="relative w-full overflow-hidden rounded-[24px]"
            style={{ height: 1211 }}
          >
            <div className="pt-[50px] text-center">
              <Badge>Project Region</Badge>
              <h2 className="mx-auto mt-[30px] w-[530px] text-[36px] font-normal leading-[45px] text-[#111]">
                Solutions built for businesses across regions.
              </h2>
            </div>
            <img
              src={asset("group_2.svg")}
              alt="Project region map"
              className="absolute left-[41px] top-[250px] h-[879px] w-[1334px]"
            />
          </section>

          <section
            className="relative w-full overflow-hidden rounded-[22px]"
            style={{ height: 586 }}
          >
            <h2 className="absolute left-[42px] top-[50px] text-[46px] font-normal leading-[52px] text-[#111]">
              Our Products
            </h2>
            <p className="absolute left-[791px] top-[51px] w-[591px] text-[16px] leading-[22px] text-[#6d6d6e]">
              At Arunijone, I deliver high-impact services and projects focused on UX/UI
              design, digital marketing, and equity research. Each engagement is driven by
              strategic thinking, attention to detail, and a commitment to measurable results.
            </p>
            <div className="absolute left-[-125px] top-[165px] flex gap-[15px]">
              {[asset("image_26.png"), asset("image_10.png"), asset("image_1.png"), asset("image_47.png"), asset("image_63.png")].map((image) => (
                <div key={image} className="flex h-[370px] w-[351px] items-center justify-center rounded-[22px] border border-[#e4e4e4] bg-white">
                  <img src={image} alt="" className="max-h-[240px] max-w-[300px] object-contain" />
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </main>
      </DesktopPageWrapper>

      <div className="md:hidden w-full overflow-x-hidden">
        <AboutMob />
      </div>
    </>
  );
};

export default About;
