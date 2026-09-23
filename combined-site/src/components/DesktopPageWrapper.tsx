import React, { useState, useEffect, ReactNode } from "react";

interface DesktopPageWrapperProps {
  designWidth?: number;
  designHeight: number;
  children: ReactNode;
  className?: string;
}


const DesktopPageWrapper = ({
  designWidth = 1440,
  designHeight,
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
        height: `${designHeight * scale}px`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transformOrigin: "top center",
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DesktopPageWrapper;
