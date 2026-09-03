import React from "react";
import { useLocation as useWouterLocation } from "wouter";

type ActivePage = "home" | "about" | "service" | "blog" | "";

const navItems = [
  {
    id: "home" as ActivePage,
    label: "Home",
    icon: "/assets/homemob/images/home.svg",
    route: "/",
  },
  {
    id: "about" as ActivePage,
    label: "About",
    icon: "/assets/homemob/images/familiar_face_and_zone.svg",
    route: "/about",
  },
  {
    id: "service" as ActivePage,
    label: "Service",
    icon: "/assets/homemob/images/draw.svg",
    route: "/explore",
  },
  {
    id: "blog" as ActivePage,
    label: "Blogs",
    icon: "/assets/homemob/images/article_person.svg",
    route: "/blog",
  },
];

const BottomNavMobile: React.FC = () => {
  const [pathname, navigate] = useWouterLocation();

  let activePage: ActivePage = "";
  if (pathname === "/") activePage = "home";
  else if (pathname.startsWith("/about") || pathname.startsWith("/contact")) activePage = "about";
  else if (pathname.startsWith("/explore") || pathname.startsWith("/portfolio")) activePage = "service";
  else if (pathname.startsWith("/blog")) activePage = "blog";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center md:hidden pointer-events-none"
      style={{ paddingBottom: "calc(15px + env(safe-area-inset-bottom))" }}
    >
      <div
        className="bg-white rounded-[72px] flex items-center justify-between px-[15px] pointer-events-auto"
        style={{
          width: "calc(100% - 16px)",
          maxWidth: "430px",
          height: "89px",
          boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const iconStyle = isActive
            ? { filter: "brightness(0) invert(1)" }
            : item.id === "home"
            ? { filter: "none" }
            : { filter: "invert(12%) sepia(96%) saturate(4000%) hue-rotate(190deg) brightness(95%) contrast(101%)" };

          const renderIcon = () => {
            if (item.id === "home") {
              const fill = isActive ? "#FFFFFF" : "#0161FE";
              return (
                <svg width="22" height="22" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ display: "block", flexShrink: 0 }}>
                  <path d="M2 14C2 14.8284 2.67157 15.5 3.5 15.5C4.32843 15.5 5 14.8284 5 14V11.5C5 10.3954 5.89543 9.5 7 9.5H9C10.1046 9.5 11 10.3954 11 11.5V14C11 14.8284 11.6716 15.5 12.5 15.5C13.3284 15.5 14 14.8284 14 14V7.5C14 6.87049 13.7036 6.27771 13.2 5.9L9.2 2.9C8.48889 2.36667 7.51111 2.36667 6.8 2.9L2.8 5.9C2.29639 6.27771 2 6.87049 2 7.5V14ZM2 17.5C0.89543 17.5 0 16.6046 0 15.5V6.5C0 5.87049 0.296388 5.27771 0.8 4.9L6.8 0.4C7.51111 -0.133333 8.48889 -0.133333 9.2 0.4L15.2 4.9C15.7036 5.27771 16 5.87049 16 6.5V15.5C16 16.6046 15.1046 17.5 14 17.5H11C9.89543 17.5 9 16.6046 9 15.5V12.5C9 11.9477 8.55228 11.5 8 11.5C7.44772 11.5 7 11.9477 7 12.5V15.5C7 16.6046 6.10457 17.5 5 17.5H2Z" fill={fill} />
                </svg>
              );
            }

            return <img src={item.icon} alt={item.label} className="w-[22px] h-[22px]" style={iconStyle} />;
          };

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className={`flex items-center gap-[10px] transition-all duration-200 border-none outline-none ${
                isActive ? "bg-[#0161FE] border border-[#0161FE] rounded-[95px] px-[20px] py-[17px]" : "px-[10px] py-[17px]"
              }`}
            >
              {renderIcon()}
              {isActive && (
                <span
                  className="text-white font-bold text-[16px] leading-[28px] whitespace-nowrap capitalize"
                  style={{ fontFamily: "SF Pro Display" }}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavMobile;
