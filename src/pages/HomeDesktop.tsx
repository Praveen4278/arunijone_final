import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUXUI from "./Homemob";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobilePageWrapper from "../components/MobilePageWrapper";

const DESIGN_HEIGHT = 6030;
const img = (name: string) => `/assets/Home/images/${name}`;

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

type Ecosystem = "Products" | "Services" | "Partners";
type Expertise = "Research" | "Design" | "Development" | "Creative" | "Marketing";

const ecosystemData: Record<Ecosystem, Expertise[]> = {
  Products: ["Research", "Design", "Development"],
  Services: ["Research", "Design", "Creative", "Marketing"],
  Partners: ["Research", "Development", "Marketing"],
};

const Pill = ({
  label,
  active,
  onClick,
  width = 194,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  width?: number;
}) => (
  <button
    onClick={onClick}
    className={`flex h-[78px] items-center justify-center gap-[26px] rounded-[18px] border-0 transition-colors ${
      active ? "bg-[#0161fe] text-white" : "bg-white text-[#0161fe]"
    }`}
    style={{ width }}
  >
    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0161fe] text-[18px] text-white">
      ↯
    </span>
    <span className="text-[20px] leading-[24px]">{label}</span>
  </button>
);

const LogoBox = ({
  src,
  active,
}: {
  src: string;
  active?: boolean;
}) => (
  <div className="flex h-[72px] w-[143px] items-center justify-center rounded-[6px] border border-[#e8e8e8] bg-white">
    <img src={src} alt="" className={`${active ? "h-[58px]" : "max-h-[52px]"} max-w-[115px] object-contain`} />
  </div>
);

const HomeDesktop = () => {
  const navigate = useNavigate();
  const [activeEcosystem, setActiveEcosystem] = useState<Ecosystem>("Services");
  const [activeExpertise, setActiveExpertise] = useState<Expertise>("Design");
  const visibleExpertise = ecosystemData[activeEcosystem];

  const chooseEcosystem = (item: Ecosystem) => {
    setActiveEcosystem(item);
    setActiveExpertise(ecosystemData[item][0]);
  };

  const projects = [
    img("image_26.png"),
    img("image_10.png"),
    img("group_10.svg"),
    img("image_1_1.png"),
    img("image_47.png"),
    img("image_63.png"),
    img("image_242.png"),
    img("15.png"),
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextProject = () => setSelectedIndex((selectedIndex + 1) % projects.length);
  const previousProject = () =>
    setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        <Navbar activePage="home" />

        <main className="absolute left-[10px] top-[108px] w-[1420px]">
          <section className="relative h-[980px] overflow-hidden bg-white">
            <div
              className="absolute left-[469px] top-[-40px] h-[980px] w-[951px] bg-right-bottom bg-no-repeat"
              style={{
                backgroundImage: `url(${img("image_266.webp")})`,
                backgroundPosition: "right bottom",
                backgroundSize: "1060px 796px",
              }}
            />
            <div className="absolute left-[68px] top-[250px]">
              <h1 className="w-[590px] text-[76px] font-normal leading-[92px] text-[#111]">
                For Those Who
                <br />
                Demand #1
                <br />
                Quality
              </h1>
              <BlueButton className="mt-[43px] h-[55px] px-[24px]" onClick={() => navigate("/portfolio1")}>
                My NGO
              </BlueButton>
            </div>
          </section>

          <section className="relative h-[256px] bg-white">
            <p className="absolute left-[342px] top-[81px] w-[736px] text-center text-[22px] leading-[31px] text-[#111]">
              This We deliver high-quality digital solutions while creating
              meaningful work <span className="text-[#777]">opportunities for individuals with disabilities</span>
              <br />
              <span className="text-[#777]">through our collaboration with</span> Arunijone Philanthropy.
            </p>
          </section>

          <section className="mt-[50px] h-[856px] w-full rounded-[20px] bg-[#f6f7f9] px-[48px] pt-[50px]">
            <Badge>About Us</Badge>
            <div className="mt-[36px] flex items-start justify-between">
              <h2 className="w-[560px] text-[36px] font-normal leading-[42px] text-[#111]">
                Unlocking creativity, strategy, and innovation for every business
              </h2>
              <p className="mt-[6px] w-[492px] text-[16px] leading-[22px] text-[#6d6d6e]">
                At Arunijone, I bring together skills from UX/UI design, digital marketing,
                stock research and product innovation to deliver practical, impactful
                solutions for individuals and businesses.
              </p>
            </div>
            <div className="mt-[36px] grid grid-cols-[657px_321px_321px] gap-[16px]">
              <img src={img("image 259.webp")} alt="" className="h-[282px] w-[657px] rounded-[20px] object-cover" />
              <div className="h-[282px] rounded-[20px] bg-[#232323] p-[20px] text-white">
                <div className="text-[48px] leading-[54px]">3+</div>
                <p className="mt-[84px] text-[16px] leading-[24px]">
                  Years of continuous innovation and valuable insights, helping businesses
                  improve their digital presence, design better products, and make informed
                  decisions through research-led strategies.
                </p>
              </div>
              <img src={img("image 260.webp")} alt="" className="h-[282px] w-[321px] rounded-[20px] object-cover" />
              <div className="h-[282px] rounded-[20px] bg-[#0161fe] p-[20px] text-white">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/20 text-[20px]">↯</div>
                <div className="mt-[60px] text-[48px] leading-[54px]">100%</div>
                <p className="mt-[30px] text-[16px] leading-[24px]">
                  Client satisfaction achieved through personalized solutions, proactive support,
                  and a commitment to understanding each client&apos;s unique requirements. My focus
                  on excellence ensures that your success remains the priority at every step.
                </p>
              </div>
              <img src={img("67b5b9ebc673f016ac4e6456_Frame 202147226954.webp.webp")} alt="" className="h-[282px] w-[321px] rounded-[20px] object-cover" />
              <img src={img("image 257.webp")} alt="" className="h-[282px] w-[321px] rounded-[20px] object-cover" />
            </div>
          </section>

          <section className="mt-[50px] h-[367px] w-full rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
            <Badge>Our Ecosystem</Badge>
            <h2 className="mt-[39px] text-[36px] font-normal leading-[43px] text-[#111]">
              Explore Our Business
              <br />
              Ecosystem
            </h2>
            <div className="mt-[37px] flex justify-center gap-[22px]">
              {(["Products", "Services", "Partners"] as Ecosystem[]).map((item) => (
                <Pill
                  key={item}
                  label={item}
                  active={activeEcosystem === item}
                  onClick={() => chooseEcosystem(item)}
                />
              ))}
            </div>
          </section>

          <section className="mt-[50px] h-[367px] w-full rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
            <Badge>Our Expertise</Badge>
            <h2 className="mt-[39px] text-[36px] font-normal leading-[43px] text-[#111]">
              Our Core Capabilities &amp;
              <br />
              Expertise
            </h2>
            <div className="mt-[40px] flex justify-center gap-[22px]">
              {visibleExpertise.map((item) => (
                <Pill
                  key={item}
                  label={item}
                  active={activeExpertise === item}
                  onClick={() => setActiveExpertise(item)}
                  width={item === "Development" ? 236 : item === "Marketing" ? 204 : 188}
                />
              ))}
            </div>
          </section>

          <section className="mt-[50px] h-[1084px] w-full rounded-[20px] bg-[#f6f7f9] px-[42px] pt-[48px]">
            <div className="flex items-start justify-between">
              <div>
                <Badge>Our Services</Badge>
                <h2 className="mt-[32px] w-[500px] text-[36px] font-normal leading-[42px] text-[#111]">
                  Real Results. Real Impact.
                  <br />
                  Our Success Stories.
                </h2>
              </div>
              <BlueButton className="mt-[79px] w-[134px]" onClick={() => navigate("/products")}>
                View All
              </BlueButton>
            </div>
            <div className="relative mt-[31px] h-[512px] rounded-[20px] bg-white">
              <img
                src={projects[selectedIndex]}
                alt=""
                className="absolute left-1/2 top-1/2 max-h-[390px] max-w-[510px] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <button className="absolute right-[30px] top-[30px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0161fe] text-white">
                <ExternalLink size={26} />
              </button>
            </div>
            <div className="mx-auto mt-[64px] flex h-[92px] w-[1195px] items-center justify-center gap-[10px] rounded-[8px] bg-white px-[10px]">
              {projects.map((project, index) => (
                <button
                  key={project}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex h-[72px] w-[143px] items-center justify-center rounded-[6px] border bg-white ${
                    selectedIndex === index ? "border-[#d8d8d8]" : "border-[#ececec]"
                  }`}
                >
                  <img src={project} alt="" className="max-h-[55px] max-w-[116px] object-contain" />
                </button>
              ))}
            </div>
            <div className="mt-[34px] flex justify-center gap-[10px]">
              <button onClick={previousProject} className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#0161fe] text-[#0161fe]">
                <ArrowLeft size={23} />
              </button>
              <button onClick={nextProject} className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0161fe] text-white">
                <ArrowRight size={23} />
              </button>
            </div>
          </section>

          <section className="h-[849px] w-full bg-white px-[78px] pt-[97px]">
            <div className="flex items-start justify-between">
              <div>
                <Badge>Our Blog</Badge>
                <h2 className="mt-[52px] text-[36px] font-normal leading-[42px] text-[#111]">
                  Latest insights and trends
                </h2>
              </div>
              <BlueButton className="mt-[84px] w-[134px]" onClick={() => navigate("/blog")}>
                View All
              </BlueButton>
            </div>
            <div className="mt-[31px] grid grid-cols-2 gap-[14px]">
              <BlogCard
                image={img("image_26.png")}
                title="My Rameswaram Trip: Book Pandits & Temple Services with Our New Website"
                onClick={() => navigate("/blog")}
              />
              <BlogCard
                image={img("image_10.png")}
                title="Seafsoft: The Ultimate Seafood Inventory System for Export Success"
                onClick={() => navigate("/blog")}
              />
            </div>
          </section>

          <section className="mt-[100px] h-[402px] w-full rounded-[20px] bg-[#f6f7f9] px-[42px] pt-[58px]">
            <div className="grid grid-cols-[610px_1fr] gap-[70px]">
              <div>
                <Badge>Contact Us</Badge>
                <h2 className="mt-[34px] text-[40px] font-normal leading-[46px] text-[#111]">
                  Connect with Arunijone
                </h2>
                <p className="mt-[15px] text-[16px] leading-[28px] text-[#6d6d6e]">
                  Learn about my vision, story, and how I bring ideas to life.
                </p>
              </div>
              <div className="space-y-[14px] pt-[57px]">
                <ContactRow icon={<Mail size={23} />} label="Email Addres" value="arunijone@gmail.com" />
                <ContactRow icon={<Phone size={23} />} label="Phone Number" value="+91 9489456581" />
                <ContactRow icon={<MapPin size={23} />} label="My Location" value="Rameswaram" />
              </div>
            </div>
          </section>

          <footer className="mt-[89px] h-[361.28px] w-full rounded-[20px] bg-[#232323] px-[52px] py-[50px] text-white">
            <div className="flex h-full justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-[17px]">
                  <img src={img("gemini_generated_image_gyuxclgyuxclgyux_1.png")} alt="" className="h-[50px] w-[52px] rounded-full bg-white object-cover" />
                  <span className="text-[28px] leading-[34px]">Arunijone</span>
                </div>
                <span className="text-[14px] leading-[20px]">Designed by Arunijone</span>
              </div>
              <div className="flex flex-col justify-end text-center text-[14px]">
                © 2025 Arunijone. All rights reserved.
              </div>
              <div className="grid grid-cols-3 gap-x-[74px] gap-y-[30px] pt-[18px] text-[16px] leading-[22px] text-white/80">
                <span>Home</span>
                <span>UX/UI</span>
                <span>MyRameswaramTrip</span>
                <span>About</span>
                <span>Digital Marketing</span>
                <span>Seafsoft</span>
                <span>Service</span>
                <span>Equity Research</span>
                <span>Contact</span>
                <span>Blog</span>
                <span>Development</span>
                <span className="font-semibold text-white">FAQ</span>
                <div className="col-span-3 mt-[15px] flex justify-end gap-[12px]">
                  {["⌕", "f", "◎", "t", "in", "▶", "◌", "Be"].map((social) => (
                    <span key={social} className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-[16px]">
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </main>
      </DesktopPageWrapper>

      <MobilePageWrapper designHeight={6956}>
        <HomeUXUI />
      </MobilePageWrapper>
    </>
  );
};

const BlogCard = ({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick: () => void;
}) => (
  <div className="text-center">
    <div className="flex h-[436px] items-center justify-center rounded-[20px] border border-[#ededed] bg-white">
      <img src={image} alt="" className="max-h-[260px] max-w-[380px] object-contain" />
    </div>
    <h3 className="mx-auto mt-[27px] h-[75px] w-[650px] text-[28px] font-normal leading-[36px] text-[#333]">
      {title}
    </h3>
    <BlueButton className="mt-[18px] h-[40px] px-[24px] text-[14px]" onClick={onClick}>
      Explore
    </BlueButton>
  </div>
);

const ContactRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex h-[70px] items-center rounded-[15px] bg-white pl-[20px]">
    <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#0161fe] text-white">
      {icon}
    </div>
    <div className="ml-[20px]">
      <div className="text-[18px] font-light leading-[22px] text-[#6d6d6e]">{label}</div>
      <div className="mt-[3px] text-[20px] leading-[24px] text-[#111]">{value}</div>
    </div>
  </div>
);

export default HomeDesktop;
