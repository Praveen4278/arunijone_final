import { BusinessEcosystemAndCapabilitiesSection } from "./sections/BusinessEcosystemAndCapabilitiesSection";
import { ContactInformationSection } from "./sections/ContactInformationSection";
import { HeroSection } from "./sections/HeroSection";
import { LatestInsightsSection } from "./sections/LatestInsightsSection";
import { QualityCommitmentSection } from "./sections/QualityCommitmentSection";
import { ServiceShowcaseSection } from "./sections/ServiceShowcaseSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center gap-[10.2px] bg-white">
      <header className="mt-2.5 w-full max-w-[1420px] px-2.5 xl:px-0">
        <img
          className="h-auto w-full max-w-[1420px]"
          alt="Heater navigation"
          src="/figmaAssets/heater-navigation.png"
        />
      </header>
      <main className="flex w-full max-w-[1420px] flex-col items-stretch gap-[50px] px-2.5 xl:px-0">
        <HeroSection />
        <QualityCommitmentSection />
        <ServiceShowcaseSection />
        <BusinessEcosystemAndCapabilitiesSection />
        <SuccessStoriesSection />
        <LatestInsightsSection />
        <ContactInformationSection />
        <SiteFooterSection />
      </main>
    </div>
  );
};
