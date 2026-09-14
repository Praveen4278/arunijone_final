import React from "react";
import { useLocation } from "wouter";

export const LatestInsightsSection = ({ activeEco = "Products" }: { activeEco?: string }): React.JSX.Element => {
  const [, navigate] = useLocation();
  const isServices = activeEco === "Services";

  return (
    /* Frame 1171277101 */
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: 30,
        position: "relative",
        width: 1420,
        height: 923,
        boxSizing: "border-box",
        background: "#F6F7F9",
        borderRadius: 20.4131,
      }}
    >
      {/* Inner frame: left:42, top:50 */}
      <div style={{ position: "absolute", left: 42, top: 50, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 30 }}>
      {/* Border — badge */}
      <div
        style={{
          boxSizing: "border-box",
          width: 116,
          height: 38.75,
          border: "0.750207px solid #202833",
          borderRadius: 204.109,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'SF Pro Display', Helvetica",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: 1.78624,
            textTransform: "uppercase",
            color: "#202833",
            whiteSpace: "nowrap",
          }}
        >
          Our blog
        </span>
      </div>

      {/* Frame 1171277099 — heading row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: 0,
          gap: 726,
          width: 1335,
          height: 61,
          flexShrink: 0,
          alignSelf: "stretch",
        }}
      >
        {/* Heading */}
        <span
          style={{
            width: 302,
            height: 61,
            fontFamily: "'SF Pro Display', Helvetica",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: "38px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "#111111",
            flexShrink: 0,
          }}
        >
          Latest insights &amp;&nbsp;trends
        </span>

        {/* View All button */}
        <div
          onClick={() => { navigate("/blog"); window.scrollTo(0, 0); }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "13px 21px 17px",
            gap: 4,
            width: 133,
            height: 55,
            background: "#0161FE",
            borderRadius: 98.6819,
            cursor: "pointer",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: 5,
              width: 90.94,
              height: 20,
            }}
          >
            <span
              style={{
                width: 67,
                height: 20,
                fontFamily: "'SF Pro Display', Helvetica",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              View All
            </span>
            <img
              src="/assets/Home/images/vector_23.svg"
              alt=""
              style={{ width: 18.94, height: 19.89 }}
            />
          </div>
        </div>
      </div>

      {/* Frame 1171277100 — cards row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          gap: 13,
          width: 1335,
          height: 613,
          flexShrink: 0,
          alignSelf: "stretch",
        }}
      >
        {/* Card 1 */}
        <div
          onClick={() => { navigate(isServices ? "/portfolio5" : "/blog-details"); window.scrollTo(0, 0); }}
          style={{
            position: "relative",
            width: 661,
            height: 613,
            borderRadius: 20.4131,
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          {/* Image Box */}
          <div
            style={{
              boxSizing: "border-box",
              position: "absolute",
              width: 661,
              height: 436,
              left: "calc(50% - 661px/2 - 0.45px)",
              top: "calc(50% - 436px/2 - 86.31px)",
              background: "#FEFEFE",
              border: "0.1px solid rgba(142,131,131,0.3)",
              borderRadius: 23.6864,
              overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {isServices ? (
              <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Service 1" style={{ width: 161.68, height: 161, objectFit: "contain" }} />
            ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 10,
                gap: 10,
                position: "absolute",
                width: 661,
                height: 437,
                left: "calc(50% - 661px/2)",
                top: 0,
              }}
            >
              <div style={{ position: "relative", width: 641, height: 417, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/assets/Home/images/image_26.png"
                  alt="My Rameswaram Trip"
                  style={{
                    position: "absolute",
                    width: 241,
                    height: 299,
                    left: "calc(50% - 241px/2 - 0.05px)",
                    top: "calc(50% - 299px/2 - 0.19px)",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            )}
          </div>

          {/* Title */}
          <div
            style={{
              position: "absolute",
              width: 651,
              height: 113,
              left: "calc(50% - 651px/2)",
              top: 469.25,
              fontFamily: "'SF Pro Display', Helvetica",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: "40px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "rgba(17,17,17,0.8)",
            }}
          >
              {isServices ? "Hear It, Find It, Stream It: The Ultimate Guide to Using Music App" : "A Complete Guide to Planning a Seamless Rameswaram Pilgrimage with MyRameswaramTrip"}
          </div>

          {/* Frame 1171276961 — bottom row */}
          <div
            style={{
              position: "absolute",
              width: 661,
              height: 46,
              left: 0,
              top: 614,
            }}
          >
            {/* Frame 126 */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: 20,
                position: "absolute",
                width: 132.78,
                height: 46,
                left: "calc(50% - 132.78px/2 - 0.25px)",
                top: 0,
              }}
            >
              {/* Background button */}
              <div
                onClick={(e) => { e.stopPropagation(); navigate("/blog-details"); window.scrollTo(0, 0); }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "13px 21px",
                  gap: 5,
                  position: "absolute",
                  width: 132.78,
                  height: 46,
                  left: "calc(50% - 132.78px/2)",
                  top: 0,
                  background: "#0161FE",
                  borderRadius: 98.6819,
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                {/* Frame 256 */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 0, gap: 5, width: 90.94, height: 20, flexShrink: 0 }}>
                  <span style={{ width: 67, height: 20, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 16, lineHeight: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", whiteSpace: "nowrap" }}>Explore</span>
                  <img src="/assets/Home/images/vector_24.svg" alt="" style={{ width: 18.94, height: 19.89 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — shown when Services pill is active */}
        {isServices && (
          <div
            onClick={() => { navigate("/portfolio6"); window.scrollTo(0, 0); }}
            style={{
              position: "relative",
              width: 661,
              height: 613,
              borderRadius: 20.4131,
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            {/* Image Box */}
            <div
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: 661,
                height: 436,
                left: "calc(50% - 661px/2 - 0.45px)",
                top: "calc(50% - 436px/2 - 86.31px)",
                background: "#FEFEFE",
                border: "0.1px solid rgba(142,131,131,0.3)",
                borderRadius: 23.6864,
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_2_resora.svg" alt="Resora" style={{ width: 213.3, height: 61.44, objectFit: "contain" }} />
            </div>

            {/* Title */}
            <div
              style={{
                position: "absolute",
                width: 651,
                height: 113,
                left: "calc(50% - 651px/2)",
                top: 469.25,
                fontFamily: "'SF Pro Display', Helvetica",
                fontWeight: 400,
                fontSize: 32,
                lineHeight: "40px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "rgba(17,17,17,0.8)",
              }}
            >
              From Search to Check-In: How We Built a Frictionless Room Booking Platform
            </div>

            {/* Explore button */}
            <div style={{ position: "absolute", width: 661, height: 46, left: 0, top: 614 }}>
              <div style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                padding: 0, gap: 20,
                position: "absolute",
                width: 132.78, height: 46,
                left: "calc(50% - 132.78px/2 - 0.25px)", top: 0,
              }}>
                <div
                  onClick={(e) => { e.stopPropagation(); navigate("/blog-details"); window.scrollTo(0, 0); }}
                  style={{
                    display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                    padding: "13px 21px", gap: 5,
                    position: "absolute",
                    width: 132.78, height: 46,
                    left: "calc(50% - 132.78px/2)", top: 0,
                    background: "#0161FE", borderRadius: 98.6819,
                    cursor: "pointer", boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 0, gap: 5, width: 90.94, height: 20, flexShrink: 0 }}>
                    <span style={{ width: 67, height: 20, fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 16, lineHeight: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", whiteSpace: "nowrap" }}>Explore</span>
                    <img src="/assets/Home/images/vector_24.svg" alt="" style={{ width: 18.94, height: 19.89 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

