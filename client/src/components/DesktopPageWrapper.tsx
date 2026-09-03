import React, { useState, useEffect, ReactNode } from "react";

interface DesktopPageWrapperProps {
  designWidth?: number;
  designHeight: number;
  dynamicHeight?: boolean;
  children: ReactNode;
  className?: string;
}


const DesktopPageWrapper = ({
  designWidth = 1440,
  designHeight,
  dynamicHeight = false,
  children,
  className = "",
}: DesktopPageWrapperProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // Using clientWidth prevents horizontal scrollbar issues
      setScale(document.documentElement.clientWidth / designWidth);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  return (
    <div
      className={`hidden md:block ${className}`}
      style={{
        width: "100%",
        height: dynamicHeight ? "auto" : `${designHeight * scale}px`,
        overflow: dynamicHeight ? "visible" : "hidden",
        position: "relative",
      }}
    >
      <div
        className={`bg-white ${dynamicHeight ? "" : "absolute overflow-hidden"}`}
        style={{
          width: `${designWidth}px`,
          height: dynamicHeight ? "auto" : `${designHeight}px`,
          transformOrigin: "top center",
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          ...(dynamicHeight ? { position: "relative" } : { position: "absolute" }),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DesktopPageWrapper;
