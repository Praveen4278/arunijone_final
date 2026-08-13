import React from "react";

interface ServiceCategoriesSectionProps {
  badgeLabel?: string;
}

const ServiceCategoriesSection = ({
  badgeLabel = "Project Category",
}: ServiceCategoriesSectionProps) => {
  return (
    <div
      id="service-categories-section"
      className="relative bg-white rounded-[20px] isolate z-[1] box-border"
      style={{ width: "1315px", height: "128px" }}
    >
      <span
        className="absolute flex items-center text-[20px] font-normal leading-[28px] capitalize"
        style={{
          width: "1270px",
          height: "84px",
          left: "22px",
          top: "22px",
          color: "rgba(109,109,110,0.8)",
          fontFamily: "SF Pro Display, sans-serif",
          zIndex: 0,
        }}
      >
        This project focuses on designing a user-centered digital platform that combines pilgrimage services and travel planning for Rameswaram. The goal is to create a seamless experience for devotees and travelers by simplifying temple services, travel bookings, and local guidance through an intuitive and respectful interface.
      </span>
    </div>
  );
};

export default ServiceCategoriesSection;
