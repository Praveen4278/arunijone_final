import React from "react";
import { useLocation } from "wouter";

interface MobBannerProps {
  iconSrc?: string;
  avatarSrc?: string;
  className?: string;
}

const navItems = [
  { label: "Home",    href: "/",        icon: "/assets/homemob/images/home.svg" },
  { label: "About",   href: "/about",   icon: "/assets/homemob/images/familiar_face_and_zone.svg" },
  { label: "Explore", href: "/explore", icon: "/assets/homemob/images/draw.svg" },
  { label: "Blog",    href: "/blog",    icon: "/assets/homemob/images/article_person.svg" },
];

const MobBanner = ({
  iconSrc = "/assets/homemob/images/group.svg",
  avatarSrc = "/assets/homemob/images/gemini_generated_image_gyuxclgyuxclgyux_2.png",
  className,
}: MobBannerProps) => {
  const [location, navigate] = useLocation();

  const activeIdx = navItems.findIndex(n => n.href === location);
  const active = activeIdx >= 0 ? activeIdx : 0;

  return (
    <>
      {/* Top banner — logo + WhatsApp */}
      <div
        style={{
          width: "100%",
          height: 77,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 375,
            height: 59,
            left: "calc(50% - 375px/2)",
            top: 9,
            background: "#F6F7F9",
            borderRadius: 22,
          }}
        >
          {/* Logo circle */}
          <div
            onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
            style={{
              position: "absolute",
              width: 47,
              height: 47,
              left: 6,
              top: 6,
              background: "#FFFFFF",
              borderRadius: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img
              src="/figmaAssets/logo.png"
              alt="Arunijone"
              style={{ width: 35.06, height: 29.77, borderRadius: 12, objectFit: "cover" }}
            />
          </div>
          {/* WhatsApp button */}
          <a
            href="https://wa.me/919489456580"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              width: 123.39,
              height: 47,
              left: 244,
              top: 6,
              background: "#25D366",
              borderRadius: 95.74,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "11.58px 16.34px",
              gap: 8.7,
              boxSizing: "border-box",
              textDecoration: "none",
            }}
          >
            <img
              src="/figmaAssets/whatsapp-business-app-logo-green-outline-26475-2.svg"
              alt="WhatsApp"
              style={{ width: 20, height: 20, flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: "'SF Pro Display'",
                fontWeight: 600,
                fontSize: 13.0556,
                lineHeight: "19px",
                color: "#FFFFFF",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              WhatsApp
            </span>
          </a>
        </div>
      </div>
{/* Fixed bottom pill nav */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "calc(15px + env(safe-area-inset-bottom))",
          paddingTop: 9,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 256.75,
            height: 60.61,
            background: "#FFFFFF",
            borderRadius: 30.306,
            filter: "drop-shadow(0px 2.0431px 8.17241px rgba(0,0,0,0.25))",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0",
            boxSizing: "border-box",
            pointerEvents: "auto",
          }}
        >
          {navItems.map((item, i) => (
            <div
              key={item.href}
              onClick={() => { navigate(item.href); window.scrollTo(0, 0); }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 6.81,
                padding: i === active ? "11.58px 13.62px" : "8px",
                height: 40.86,
                background: i === active ? "#0161FE" : "transparent",
                border: i === active ? "0.681px solid #0161FE" : "none",
                borderRadius: 64.7,
                cursor: "pointer",
                boxSizing: "border-box",
                flexShrink: 0,
              }}
            >
                {item.href === "/" ? (
                  <svg
                    width="16.34"
                    height="16.34"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2 14C2 14.8284 2.67157 15.5 3.5 15.5C4.32843 15.5 5 14.8284 5 14V11.5C5 10.3954 5.89543 9.5 7 9.5H9C10.1046 9.5 11 10.3954 11 11.5V14C11 14.8284 11.6716 15.5 12.5 15.5C13.3284 15.5 14 14.8284 14 14V7.5C14 6.87049 13.7036 6.27771 13.2 5.9L9.2 2.9C8.48889 2.36667 7.51111 2.36667 6.8 2.9L2.8 5.9C2.29639 6.27771 2 6.87049 2 7.5V14ZM2 17.5C0.89543 17.5 0 16.6046 0 15.5V6.5C0 5.87049 0.296388 5.27771 0.8 4.9L6.8 0.4C7.51111 -0.133333 8.48889 -0.133333 9.2 0.4L15.2 4.9C15.7036 5.27771 16 5.87049 16 6.5V15.5C16 16.6046 15.1046 17.5 14 17.5H11C9.89543 17.5 9 16.6046 9 15.5V12.5C9 11.9477 8.55228 11.5 8 11.5C7.44772 11.5 7 11.9477 7 12.5V15.5C7 16.6046 6.10457 17.5 5 17.5H2Z"
                      fill={i === active ? "#FFFFFF" : "#0161FE"}
                    />
                  </svg>
                ) : (
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                      width: 16.34,
                      height: 16.34,
                      flexShrink: 0,
                      filter: i === active ? "brightness(0) invert(1)" : "invert(20%) sepia(90%) saturate(5000%) hue-rotate(210deg) brightness(100%)",
                    }}
                  />
                )}
                {i === active && (
                  <span
                    style={{
                      fontFamily: "'SF Pro Display'",
                      fontWeight: 700,
                      fontSize: 10.8966,
                      lineHeight: "19px",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobBanner;
