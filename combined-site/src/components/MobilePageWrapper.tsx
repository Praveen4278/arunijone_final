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
      // Scale to fit the mobile screen width
      const windowWidth = document.documentElement.clientWidth;
      // We only want this logic to apply to mobile views realistically, but since it's a wrapper, it scales anyway.
      setScale(windowWidth / designWidth);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  return (
    <div
      className={`block md:hidden ${className}`}
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
