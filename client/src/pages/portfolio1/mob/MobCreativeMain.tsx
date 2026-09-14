import React from "react";

const rows = [
  { src: "/assets/portfolio/creative/creative_iphone_1_57d08f.png", text: "Explore trusted temple, travel, and local services." },
  { src: "/assets/portfolio/creative/creative_iphone_2_52434a.png", text: "Experience traditional ceremonies arranged with care." },
  { src: "/assets/portfolio/creative/creative_iphone_3_4655eb.png", text: "Book authentic pujas and temple services effortlessly." },
  { src: "/assets/portfolio/creative/creative_iphone_4_28e87c.png", text: "Choose trusted accommodations for a peaceful stay." },
];

export function IPhoneMockup({ src, imgW = 109, imgH = 236, imgOffsetX = 0, imgOffsetY = -0.34, imgRadius = 18, theme = "dark" }: {
  src: string;
  imgW?: number;
  imgH?: number;
  imgOffsetX?: number;
  imgOffsetY?: number;
  imgRadius?: number;
  theme?: "dark" | "light";
}) {
  const c = theme === "dark" ? "#FFFFFF" : "#000000";
  return (
    <div style={{ position: "relative", width: 119, height: 242.67, flexShrink: 0 }}>
      <img src="/assets/portfolio/creative/iphone_14_pro_device.png" alt="" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", objectFit: "fill", zIndex: 2 }} />
      <img src={src} alt="" style={{ position: "absolute", width: imgW, height: imgH, left: `calc(50% - ${imgW}px/2 + ${imgOffsetX}px)`, top: `calc(50% - ${imgH}px/2 + ${imgOffsetY}px)`, borderRadius: imgRadius, objectFit: "fill", zIndex: 1 }} />
      <div style={{ position: "absolute", width: 38.48, height: 1.37, left: "calc(50% - 38.48px/2 - 0.15px)", bottom: 7.98, background: c, borderRadius: 27.48, zIndex: 3 }} />
      <div style={{ position: "absolute", left: 16.16, top: 11.54, width: 86.74, height: 4.95, zIndex: 3 }}>
        <span style={{ position: "absolute", left: 0.05, top: "calc(50% - 5px/2 + 0.03px)", fontFamily: "'SF Pro Text'", fontWeight: 600, fontSize: 4.12, letterSpacing: -0.08, color: c }}>9:41</span>
        <svg style={{ position: "absolute", right: 16.29, top: 0.71 }} width={5.28} height={3.3} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.66272 0C5.84666 0 5.99667 0.157707 5.99667 0.351701V3.39497C5.99667 3.58896 5.84666 3.74667 5.66272 3.74667H5.32988C5.14604 3.74656 4.99704 3.58889 4.99704 3.39497V0.351701C4.99704 0.157779 5.14604 0.000116391 5.32988 0H5.66272ZM0.66568 2.30769C0.849616 2.30769 0.99963 2.46885 0.99963 2.66716V3.38499C0.999579 3.58324 0.849584 3.74445 0.66568 3.74445H0.33284C0.14903 3.74433 5.119e-05 3.58317 0 3.38499V2.66716C0 2.46893 0.148999 2.30781 0.33284 2.30769H0.66568ZM4.00296 0.745562C4.18683 0.745562 4.3368 0.906481 4.33691 1.10503V3.38277C4.33691 3.58142 4.18689 3.74334 4.00296 3.74334H3.67012C3.48628 3.74322 3.33728 3.58134 3.33728 3.38277V1.10503C3.33739 0.906554 3.48634 0.745681 3.67012 0.745562H4.00296ZM2.29882 1.55325C2.48264 1.55325 2.63259 1.71615 2.63277 1.91716V3.375C2.63257 3.57599 2.48263 3.73891 2.29882 3.73891H1.96598C1.78226 3.73878 1.63334 3.57592 1.63314 3.375V1.91716C1.63331 1.71622 1.78225 1.55338 1.96598 1.55325H2.29882Z" fill={c}/>
        </svg>
        <svg style={{ position: "absolute", right: 9.5, top: 0.74 }} width={4.71} height={3.33} viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.79934 2.63708C2.20476 2.26119 2.79838 2.26116 3.20378 2.63708C3.22409 2.65723 3.23629 2.68584 3.23694 2.71586C3.2375 2.74602 3.22651 2.77557 3.20688 2.7967L2.57152 3.49944C2.55293 3.51993 2.5274 3.53157 2.50104 3.53157C2.47473 3.53144 2.44906 3.51997 2.43056 3.49944L1.79623 2.7967C1.77661 2.77556 1.76559 2.74602 1.76617 2.71586C1.76684 2.68583 1.779 2.65722 1.79934 2.63708ZM0.919364 1.79857C1.81305 0.970965 3.19732 0.970956 4.09101 1.79857C4.11094 1.81789 4.12175 1.84446 4.1221 1.87216C4.12238 1.90004 4.11176 1.92698 4.09204 1.94679L3.71683 2.3251C3.67814 2.3636 3.61554 2.36366 3.57587 2.32614C3.28241 2.06164 2.90001 1.91567 2.50415 1.91569C2.10882 1.91594 1.72763 2.06207 1.4345 2.32614C1.39493 2.36357 1.33226 2.36331 1.29353 2.3251L0.917291 1.94679C0.89771 1.92704 0.88697 1.89992 0.887233 1.87216C0.88757 1.84432 0.899243 1.81791 0.919364 1.79857ZM0.0310969 0.939323C1.41109 -0.313108 3.58892 -0.313108 4.96891 0.939323C4.98879 0.957855 4.99975 0.983396 5 1.0098C5.00017 1.0363 4.98964 1.0625 4.96994 1.08132L4.59059 1.44305C4.55172 1.47966 4.48911 1.48009 4.44963 1.44409C3.92385 0.970719 3.22547 0.706144 2.5 0.706114C1.77455 0.706152 1.07721 0.970753 0.551412 1.44409C0.511959 1.48059 0.44841 1.47991 0.409414 1.44305L0.0300604 1.08132C0.0103773 1.06249 -0.000181732 1.0363 2.36713e-06 1.0098C0.000264822 0.983414 0.0112359 0.957841 0.0310969 0.939323Z" fill={c}/>
        </svg>
        <svg style={{ position: "absolute", right: 0, top: 0.58 }} width={7.47} height={3.57} viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.35" x="0.137413" y="0.137413" width="7.07686" height="3.54805" rx="1.04434" stroke={c} strokeWidth="0.274827"/>
          <path opacity="0.4" d="M7.60711 1.37095V2.54722C7.84375 2.4476 7.99764 2.21585 7.99764 1.95909C7.99764 1.70233 7.84375 1.47057 7.60711 1.37095Z" fill={c}/>
          <rect x="0.509927" y="0.593521" width="6.17542" height="2.64661" rx="0.687067" fill={c}/>
        </svg>
      </div>
    </div>
  );
}

export default function MobCreativeMain() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "30px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ boxSizing: "border-box", width: 161, height: 32, border: "1px solid #202833", borderRadius: 228.83, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 12, lineHeight: "14px", letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", textAlign: "center" }}>
            Video Promotion
          </span>
        </div>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "36px", color: "#111111", textAlign: "center", width: 372 }}>
          Video Rendering Pipeline Architecture &amp; Optimization
        </span>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", textAlign: "center", width: 343.16 }}>
          This section outlines the backend infrastructure and processing workflows required to stitch, encode, and export high-resolution video advertisements at scale.
        </span>
      </div>

      {rows.map(({ src, text }) => (
        <div
          key={src}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 35,
            width: "100%",
          }}
        >
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "34px", color: "#111111", textAlign: "center", width: "100%" }}>
            {text}
          </span>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <IPhoneMockup src={src} />
          </div>
        </div>
      ))}
    </div>
  );
}
