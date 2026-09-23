import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SlideTransitionProps {
  children: React.ReactNode;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("exit");
      setIsIdle(false);
    }
  }, [location, displayLocation]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
      onAnimationEnd={() => {
        if (transitionStage === "exit") {
          setDisplayLocation(location);
          setTransitionStage("enter");
        } else if (transitionStage === "enter") {
          setIsIdle(true);
        }
      }}
    >
      <div
        style={{
          animation: isIdle
            ? "none"
            : transitionStage === "enter"
              ? "slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
              : "slideOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        @keyframes slideInReverse {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutReverse {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideTransition;
