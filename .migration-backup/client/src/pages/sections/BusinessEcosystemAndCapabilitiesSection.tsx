import { useState } from "react";
import { Button } from "@/components/ui/button";

const ecosystemItems = [
  { label: "Products", icon: "/figmaAssets/svg-3.svg" },
  { label: "Services", icon: "/figmaAssets/svg-1.svg" },
  { label: "Partners", icon: "/figmaAssets/svg-5.svg" },
];

const expertiseItems = [
  { label: "Research", icon: "/figmaAssets/svg.svg" },
  { label: "Design", icon: "/figmaAssets/svg-4.svg" },
  { label: "Development", icon: "/figmaAssets/svg-2.svg" },
  { label: "Creative", icon: "/figmaAssets/svg-9.svg" },
  { label: "Marketing", icon: "/figmaAssets/svg-7.svg" },
];

interface CapabilityPanelProps {
  eyebrow: string;
  title: string;
  items: { label: string; icon: string }[];
  selectedItem: string;
  onSelect: (item: string) => void;
}

const CapabilityPanel = ({
  eyebrow,
  title,
  items,
  selectedItem,
  onSelect,
}: CapabilityPanelProps): JSX.Element => (
  <section className="flex min-h-[366px] w-full items-center justify-center overflow-hidden rounded-[20.41px] bg-[#f6f7f9] px-6 py-[50px] sm:px-10">
    <div className="flex w-full max-w-[1336.32px] flex-col items-center gap-10">
      <p className="inline-flex items-center justify-center rounded-[236.84px] border-[0.97px] border-solid border-[#202833] px-5 py-[9px] [font-family:'SF_Pro-Medium',Helvetica] text-center text-sm font-medium leading-[18px] tracking-[1.79px] text-[#202833]">
        {eyebrow}
      </p>
      <h2 className="flex min-h-[72px] max-w-[466px] items-center justify-center [font-family:'SF_Pro_Display-Regular',Helvetica] text-center text-4xl font-normal leading-[42px] text-[#111111]">
        {title}
      </h2>
      <nav
        aria-label={
          eyebrow === "OUR ECOSYSTEM"
            ? "Business ecosystem"
            : "Core capabilities and expertise"
        }
        className="flex w-full flex-wrap items-center justify-center gap-5"
      >
        {items.map((item) => {
          const isSelected = selectedItem === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              aria-pressed={isSelected}
              onClick={() => onSelect(item.label)}
              className={`h-auto rounded-[23.69px] px-6 py-[17px] hover:bg-inherit ${
                isSelected
                  ? "bg-[#0161fe] text-white hover:bg-[#0161fe] hover:text-white"
                  : "bg-white text-[#0161fe] hover:text-[#0161fe]"
              }`}
            >
              <img
                className="h-[43.72px] w-[43.72px] shrink-0"
                alt=""
                aria-hidden="true"
                src={item.icon}
              />
              <span className="[font-family:'SF_Pro-Regular',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.59px]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </nav>
    </div>
  </section>
);

export const BusinessEcosystemAndCapabilitiesSection = (): JSX.Element => {
  const [selectedEcosystem, setSelectedEcosystem] = useState("Services");
  const [selectedExpertise, setSelectedExpertise] = useState("Design");

  return (
    <div className="flex w-full flex-col gap-[50px]">
      <CapabilityPanel
        eyebrow="OUR ECOSYSTEM"
        title="Explore Our Business Ecosystem"
        items={ecosystemItems}
        selectedItem={selectedEcosystem}
        onSelect={setSelectedEcosystem}
      />
      <CapabilityPanel
        eyebrow="OUR EXPERTISE"
        title="Our Core Capabilities & Expertise"
        items={expertiseItems}
        selectedItem={selectedExpertise}
        onSelect={setSelectedExpertise}
      />
    </div>
  );
};
