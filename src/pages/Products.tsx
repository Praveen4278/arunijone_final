import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsUXUIMob from "./Productsmob.tsx";
import DesktopPageWrapper from "../components/DesktopPageWrapper";

const DESIGN_HEIGHT = 4714;

type Ecosystem = "Products" | "Services" | "Partners";
type Expertise = "Research" | "Design" | "Development" | "Creative" | "Marketing";

const ecosystemData: Record<Ecosystem, Expertise[]> = {
  Products: ["Research", "Design", "Development"],
  Services: ["Research", "Design", "Creative", "Marketing"],
  Partners: ["Research", "Development", "Marketing"],
};

const solutionCopy: Record<Expertise, { title: string; body: string }> = {
  Research: {
    title: "Insight-led planning for better product direction",
    body: "I study users, markets, and business goals to define clear opportunities before design or development begins.",
  },
  Design: {
    title: "Clean digital experiences built around real users",
    body: "From screens to interaction flows, I shape products that feel simple, useful, and ready for growth.",
  },
  Development: {
    title: "Reliable builds that support business workflows",
    body: "I turn validated ideas into practical systems with clear structure, responsive interfaces, and scalable foundations.",
  },
  Creative: {
    title: "Visual assets that make the product memorable",
    body: "I create focused brand and content visuals that help each project communicate clearly across digital touchpoints.",
  },
  Marketing: {
    title: "Growth support for visibility and conversion",
    body: "I plan campaigns, content, and digital positioning that help products reach the right audience with purpose.",
  },
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#202833] px-[22px] text-[14px] font-medium uppercase tracking-[3px] text-[#202833]">
    {children}
  </div>
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
    className={`flex items-center justify-center gap-[26px] rounded-[18px] border-0 transition-colors ${
      active ? "bg-[#0161fe] text-white" : "bg-white text-[#0161fe]"
    }`}
    style={{ width, height: 78 }}
  >
    <span
      className={`flex items-center justify-center rounded-full text-[18px] ${
        active ? "bg-white/25" : "bg-[#0161fe] text-white"
      }`}
      style={{ width: 42, height: 42 }}
    >
      ↯
    </span>
    <span className="text-[20px] leading-[24px]">{label}</span>
  </button>
);

const ProductsUXUI = () => {
  const [activeEcosystem, setActiveEcosystem] = useState<Ecosystem>("Services");
  const [activeExpertise, setActiveExpertise] = useState<Expertise>("Design");
  const visibleExpertise = ecosystemData[activeEcosystem];
  const solution = solutionCopy[activeExpertise];

  const chooseEcosystem = (item: Ecosystem) => {
    setActiveEcosystem(item);
    setActiveExpertise(ecosystemData[item][0]);
  };

  return (
    <>
      <DesktopPageWrapper designHeight={DESIGN_HEIGHT}>
        <Navbar activePage="service" />

        <div
          id="_229_4197__Frame_1171277012"
          className="absolute h-[4607px] w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-[50px] left-[10.00px] top-[107.00px]"
          >
            <div
              id="_229_4198__Section"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[822.00px] w-full rounded-[23.686382293701172px]"
          >
            <span
              id="_229_4199__Heading_1___Explore_"
              className="flex justify-start text-left items-center h-[57.00px] w-[350.00px] absolute left-[42.00px] top-[51.00px]"
            >
              <span
                className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[48.0px] font-normal leading-[54.33px]"
              >
                Explore Products
              </span>
            </span>
            <span
              id="_229_4200__Explore_a_wide_range"
              className="flex justify-start text-left items-center h-[57.00px] w-[498.00px] absolute left-[880.00px] top-[51.00px]"
            >
              <span
                className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px]"
              >
                Explore a wide range of services crafted to support your vision.
                From digital design and marketing growth to industry-specific
                solutions, I provide the tools and expertise to help your
                business build, scale, and succeed.
              </span>
            </span>
            <div
              id="_229_4201__Container"
              className="absolute overflow-hidden bg-[rgba(254,254,254,1.00)] h-[75.55%] w-[94.08%] rounded-[23.686382293701172px] left-[calc(100%_*_0.03)] top-[calc(100%_*_0.19)]"
            ></div>
            </div>

          <section className="w-full mt-[50px] h-[367px] rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
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

          <section className="w-full mt-[50px] h-[367px] rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center">
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

          <section
            className="w-full rounded-[20px] bg-[#f6f7f9] pt-[50px] text-center"
            style={{ height: 367 }}
          >
            <Badge>Our Solutions</Badge>
            <h2 className="mt-[32px] text-[36px] font-normal leading-[43px] text-[#111]">
              Transforming Ideas into
              <br />
              Digital Products
            </h2>
            <div className="mt-[34px] flex justify-center gap-[22px]">
              {["Website", "Mobile App", "Saas", "Poster", "Logo"].map((item, index) => (
                <button
                  key={item}
                  className={`flex items-center justify-center gap-[24px] rounded-[18px] border-0 ${
                    index === 0 ? "bg-[#0161fe] text-white" : "bg-white text-[#0161fe]"
                  }`}
                  style={{ height: 78, width: index === 0 ? 194 : index === 1 ? 188 : 150 }}
                >
                  <span
                    className={`flex items-center justify-center rounded-full text-[18px] ${
                      index === 0 ? "bg-white/25" : "bg-[#0161fe] text-white"
                    }`}
                    style={{ width: 42, height: 42 }}
                  >
                    ↯
                  </span>
                  <span className="text-[20px] leading-[24px]">{item}</span>
                </button>
              ))}
            </div>
          </section>

          <div
            id="_229_4212__Big_box"
            className="relative overflow-hidden bg-[rgba(246,247,249,1.00)] h-[1973px] w-full flex flex-col justify-start items-center flex-nowrap gap-[60px] px-[49px] py-[50px] rounded-[23.686382293701172px]"
          >
            <div
              id="_229_4213__Frame_129"
              className="relative w-[calc(100%-0px-0px)] flex flex-col justify-start items-start flex-nowrap gap-[30px]"
            >
              <div
                id="_229_4214__Border"
                className="relative h-[18.06px] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-5 py-[9px] rounded-[236.84442138671875px] border-[#202833ff] border-solid border-[0.9695612788200378px]"
              >
                <span
                  id="_229_4215__Projects"
                  className="flex justify-start text-left items-center h-[20.00px] w-[83.00px] relative"
                >
                  <span
                    className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium leading-[19.61px] tracking-[2.0719525814056396px] uppercase"
                  >
                    Projects
                  </span>
                </span>
              </div>

              <div
                id="_229_4216__Frame_128"
                className="relative h-[64.00px] w-[calc(100%-0px-0px)] flex flex-row justify-start items-center flex-nowrap gap-[532px]"
              >
                <div
                  id="_229_4217__Frame_126"
                  className="relative h-[44.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 pl-[5px] pr-2.5 py-2.5"
                >
                  <span
                    id="_229_4218__Heading_2___Our_Succ"
                    className="flex justify-start text-left items-center h-[69.00px] w-[377.00px] relative"
                  >
                    <span
                      className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent not-italic text-[35.0px] font-normal leading-[34.01px]"
                    >
                      Real Results. Real Impact. <br />
                      Our Success Stories.
                    </span>
                  </span>
                </div>

                <div
                  id="_229_4219__Frame_127"
                  className="relative h-[44.00px] w-[378.00px] flex flex-row justify-center items-center flex-nowrap gap-2.5 p-2.5"
                >
                  <span
                    id="_229_4220__Discover_how_my_UX_U"
                    className="flex justify-start text-left items-center h-[72.00px] w-[404.00px] relative"
                  >
                    <span
                      className="bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[23.69px]"
                    >
                      Discover how my UX/UI design, digital marketing, and
                      equity research projects deliver practical solutions,
                      solve real challenges, and create measurable outcomes.
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div
              id="_229_4221__Frame_1171276941"
              className="relative h-[1681.00px] w-[1322.00px]"
            >
              <div
                id="_229_4222__Inner_Box"
                className="absolute h-[1680.00px] w-[1322.00px] flex flex-col justify-start items-start flex-nowrap gap-5 left-[0.00px] top-[0.00px]"
              >
                <div
                  id="_229_4223__Frame_1171276938"
                  className="relative h-[320.00px] w-full"
                >
                  <div
                    id="_229_4224__Frame_1171276940"
                    className="absolute h-[320.00px] w-[1320.01px] left-[calc(50%-660.36px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_229_4225__Frame_1171276938"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4226__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4227__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4228__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4229__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4230__image_26"
                                src="/assets/products/images/image_26.png"
                                alt="My Rameswaram Trip"
                                className="absolute h-[222.00px] w-[180.00px] left-[calc(50%-90px+0.38px)] top-[calc(50%-111px-0.18px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4231__Frame_1171276936"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4232__Image_Box"
                        className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4233__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_229_4234__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_229_4235__image_10"
                              src="/assets/products/images/image_10.png"
                              alt="SeafSoft"
                              className="absolute h-[136.00px] w-[193.00px] left-[calc(50%-96.5px+0.21px)] top-[calc(50%-68px-0.18px)] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4236__Frame_1171276939"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4237__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4238__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4239__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4240__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4241__Group_11"
                                src="/assets/products/images/group_11.svg"
                                alt="Group_11"
                                className="absolute h-[161px] w-[161.69px] left-[calc(50%-80.85px+0.03px)] top-[calc(50%-80.5px+0.32px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_229_4250__Frame_1171276939"
                  className="relative h-[320.00px] w-full"
                >
                  <div
                    id="_229_4251__Frame_1171276940"
                    className="absolute h-[320.00px] w-[1320.01px] left-[calc(50%-660.36px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_229_4252__Frame_1171276938"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4253__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4254__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4255__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4256__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4257__image_47"
                                src="/assets/products/images/image_47.png"
                                alt="Wildwonder"
                                className="absolute h-[81.00px] w-[366.00px] left-[calc(50%-183px+0.38px)] top-[calc(50%-40.5px+0.32px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4258__Frame_1171276936"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4259__Image_Box"
                        className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4260__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_229_4261__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_229_4262__image_63"
                              src="/assets/products/images/image_63.png"
                              alt="AVLA Nettos Exports"
                              className="absolute h-[76.17px] w-[271.85px] left-[calc(50%-135.925px-0.37px)] top-[calc(50%-38.085px-0.09px)] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4263__Frame_1171276939"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4264__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4265__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          
                            
                              <img
                                id="_229_4269__Vector"
                                src="/assets/products/images/14.png"
                                alt="Vector"
                                className="absolute h-[61.44px] w-[213.4px] left-[106.87px] top-[130.82px]"
                              />
                             
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_229_4271__Frame_1171276940"
                  className="relative h-[320.00px] w-full"
                >
                  <div
                    id="_229_4272__Frame_1171276940"
                    className="absolute h-[320.00px] w-[1320.01px] left-[calc(50%-660.36px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_229_4273__Frame_1171276938"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4274__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4275__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4276__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4277__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4278__image_242"
                                src="/assets/products/images/image_242.png"
                                alt="Paws Chef"
                                className="absolute h-[199.00px] w-[184.00px] left-[114.21px] top-[52.82px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4279__Frame_1171276936"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4280__Image_Box"
                        className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4281__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_229_4282__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_229_4283__image_2"
                              src="/assets/products/images/image_2.png"
                              alt="Sri Balaji Homes"
                              className="absolute h-[133.00px] w-[168.00px] left-[calc(50%-84px-0.29px)] top-[calc(50%-66.5px-0.18px)] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4284__Frame_1171276939"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4285__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4286__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4287__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4288__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4289__Group_1000008334"
                                src="/assets/products/images/group_1000008334.svg"
                                alt="AsherDn"
                                className="absolute h-[186px] w-[143px] left-[calc(50%-71.5px-0.46px)] top-[calc(50%-93px-0.18px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_229_4292__Frame_1171276942"
                  className="relative h-[320.00px] w-full"
                >
                  <div
                    id="_229_4293__Frame_1171276940"
                    className="absolute h-[320.00px] w-[1320.01px] left-[calc(50%-660.36px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_229_4294__Frame_1171276938"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4295__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4296__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4297__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4298__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4299__image_247"
                                src="/assets/products/images/image_247.png"
                                alt="Digifo"
                                className="absolute h-[84.00px] w-[185.00px] left-[calc(50%-92.5px-0.12px)] top-[calc(50%-42px-0.18px)] rounded-[89px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4300__Frame_1171276936"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4301__Image_Box"
                        className="absolute overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4302__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_229_4303__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_229_4304__image_15"
                              src="/assets/products/images/image_15.png"
                              alt="Midco Kuwait"
                              className="absolute h-[90.00px] w-[243.00px] left-[calc(50%-121.5px+0.21px)] top-[calc(50%-45px-0.18px)] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4305__Frame_1171276939"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4306__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4307__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4308__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4309__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4310__Screenshot_2025-12-1"
                                src="/assets/products/images/screenshot_20251219_at_103139_pm_1.png"
                                alt="Seven Seas India"
                                className="absolute h-[109.00px] w-[268.00px] left-[calc(50%-134px+0.04px)] top-[calc(50%-54.5px+0.32px)] rounded-[45px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="_229_4311__Frame_1171276943"
                  className="relative h-[320.00px] w-full"
                >
                  <div
                    id="_229_4312__Frame_1171276940"
                    className="absolute h-[320.00px] w-[1320.01px] left-[calc(50%-660.36px)] flex flex-row justify-start items-center flex-nowrap gap-5 top-[0.00px]"
                  >
                    <div
                      id="_229_4313__Frame_1171276940"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4314__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4315__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4316__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4317__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4318__image-removebg-previ"
                                src="/assets/products/images/imageremovebgpreview_4.png"
                                alt="Eco Coco Products"
                                className="absolute h-[200.00px] w-[204.00px] left-[calc(50%-102px+0.38px)] top-[calc(50%-100px-0.18px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4319__Frame_1171276938"
                      className="relative h-[320.00px] w-[426.67px]"
                    >
                      <div
                        id="_229_4320__Frame_125"
                        className="absolute h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px] left-[0.00px] top-[0.00px]"
                      >
                        <div
                          id="_229_4321__Image_Box"
                          className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                        >
                          <div
                            id="_229_4322__Frame_103"
                            className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                          >
                            <div
                              id="_229_4323__Frame_104"
                              className="relative h-[306.00px] w-full"
                            >
                              <img
                                id="_229_4324__image_248"
                                src="/assets/products/images/image_248.png"
                                alt="Logo"
                                className="absolute h-[200.00px] w-[210.00px] left-[calc(50%-105px+0.38px)] top-[calc(50%-100px-0.18px)] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="_229_4325__Frame_125"
                      className="relative h-[320.00px] w-[426.67px] flex flex-row justify-start items-center flex-nowrap gap-[50px]"
                    >
                      <div
                        id="_229_4326__Image_Box"
                        className="relative overflow-hidden bg-white h-[320.00px] w-[426.67px] rounded-[17.381328582763672px]"
                      >
                        <div
                          id="_229_4327__Frame_103"
                          className="absolute h-[306.68px] w-[412.34px] left-[-0.20px] top-[-0.16px] flex flex-col justify-start items-start flex-nowrap gap-[7px] p-[7px]"
                        >
                          <div
                            id="_229_4328__Frame_104"
                            className="relative h-[306.00px] w-full"
                          >
                            <img
                              id="_229_4329__image_16"
                              src="/assets/products/images/image_16.png"
                              alt="Deeksha Crackers"
                              className="absolute h-[177.00px] w-[176.00px] left-[calc(50%-88px+0.04px)] top-[calc(50%-88.5px+0.32px)] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                    <Footer />
        </div>
      </DesktopPageWrapper>

      {/* Mobile View */}
      <div className="md:hidden w-full overflow-x-hidden">
        <ProductsUXUIMob />
        
      </div>

    </>
  );
};
export default ProductsUXUI;
