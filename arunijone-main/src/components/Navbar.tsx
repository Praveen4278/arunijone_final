import React from "react";
import { useNavigate } from "react-router-dom";

type NavPage = "home" | "about" | "service" | "blogs";

interface NavbarProps {
  activePage: NavPage;
  fullWidth?: boolean; // when true, navbar stretches to parent container width
}

const NAV_ITEMS: { label: string; page: NavPage; route: string; width: string }[] = [
  { label: "Home",    page: "home",    route: "/",        width: "w-[44.00px]" },
  { label: "About",   page: "about",   route: "/about",   width: "w-[41.00px]" },
  { label: "Service", page: "service", route: "/products", width: "w-[51.00px]" },
  { label: "Blogs",   page: "blogs",   route: "/blog",    width: "w-[38.00px]" },
];

const Navbar: React.FC<NavbarProps> = ({ activePage, fullWidth = false }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Banner background */}
      <div
        className={
          fullWidth
            ? "absolute left-0 right-0 top-[10.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 px-[10px]"
            : "absolute h-[87.76px] w-[1420.00px] flex flex-col justify-start items-start flex-nowrap gap-2.5 left-[10.00px] top-[6.00px]"
        }
      >
        <div className="relative bg-white h-[87.76px] w-full rounded-[22.355138778686523px]">
          <div
            className="absolute h-[64.00px] w-[67.00px] rounded-[500px] left-[42.00px] top-[12.38px]"
            style={{
              background:
                "url(/assets/Home/images/gemini_generated_image_gyuxclgyuxclgyux_1.png) 100% / cover no-repeat",
            }}
          />
        </div>
      </div>

      {/* Contact button */}
      <div className="absolute h-[53.00px] w-[115.00px] left-[1272.55px] top-[23.30px]">
        <div
          className="absolute bg-[rgba(1,97,254,1.00)] h-[23.00px] w-[63.00px] left-[calc(50%-57.05px)] top-[calc(50%-26.80px)] flex flex-row justify-center items-center flex-nowrap gap-2.5 px-[26px] py-[15px] rounded-[111.78555297851562px] cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <span className="flex justify-center text-center items-center h-[23.00px] w-[63.00px] relative">
            <span className="whitespace-nowrap bg-white bg-clip-text text-transparent not-italic text-[15.777778625488281px] font-medium leading-[22.47px] tracking-[-0.07888888567686081px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Contact
            </span>
          </span>
        </div>
      </div>

      {/* Nav links */}
      <div className="absolute h-[23.00px] w-[390.00px] left-[calc(50%-208.00px)] flex flex-row justify-start items-center flex-nowrap gap-[72px] px-[13px] py-3 top-[26.38px]">
        {NAV_ITEMS.map(({ label, page, route, width }) => {
          const isActive = activePage === page;
          return (
            <div
              key={page}
              className={`relative h-[23.00px] ${width} flex flex-row justify-center items-center flex-nowrap gap-2.5 cursor-pointer`}
              onClick={() => navigate(route)}
            >
              <span className={`flex justify-center text-center items-center h-[23.00px] ${width} relative`}>
                <span
                  className={`whitespace-nowrap bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.35px] ${
                    isActive
                      ? "bg-[rgba(1,97,254,1.00)]"
                      : "bg-[rgba(17,17,17,1.00)]"
                  }`}
                >
                  {label}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
