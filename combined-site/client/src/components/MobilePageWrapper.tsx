import React, { useState, useEffect, ReactNode } from "react";

interface MobilePageWrapperProps {
  designWidth?: number;
  designHeight: number;
  children: ReactNode;
  className?: string;
}

const MobilePageWrapper = ({
  designWidth = 390,
  designHeight,
  children,
  className = "",
}: MobilePageWrapperProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = document.documentElement.clientWidth;
      setScale(width / designWidth);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  // designHeight=0 means auto: no fixed height, no scaling transform
  if (designHeight === 0) {
    return (
      <div className={`block md:!hidden ${className}`} style={{ width: "100%" }}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`block md:!hidden ${className}`}
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

export default MobilePageWrapper;
