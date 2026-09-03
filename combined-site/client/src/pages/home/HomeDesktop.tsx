import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import HomeUXUI from "./Homemob";
import { BusinessEcosystemAndCapabilitiesSection } from "./sections/BusinessEcosystemAndCapabilitiesSection";
import { ContactInformationSection } from "./sections/ContactInformationSection";
import { HeroSection } from "./sections/HeroSection";
import { LatestInsightsSection } from "./sections/LatestInsightsSection";
import { QualityCommitmentSection } from "./sections/QualityCommitmentSection";
import { ServiceShowcaseSection } from "./sections/ServiceShowcaseSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import DesktopPageWrapper from "../../components/DesktopPageWrapper";

export const HomeDesktop = (): React.JSX.Element => {
  const [, navigate] = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
          {/* NavBar: position:absolute, left:10, top:10, w:1420, h:87.76 */}
          <header style={{ position: 'absolute', left: 10, top: 10, width: 1420, height: 87.76 }}>
            <div style={{ width: 1420, height: 87.76, background: '#F6F7F9', borderRadius: 22.3551, position: 'relative' }}>

              {/* Logo group */}
              <div onClick={() => { navigate('/'); window.scrollTo(0, 0); }} style={{ position: 'absolute', left: 42, top: 'calc(50% - 33px + 0.12px)', width: 66, height: 66, cursor: 'pointer' }}>
                <div style={{ position: 'absolute', width: 66, height: 66, background: '#FFFFFF', borderRadius: 1000 }} />
                <img
                  src="/figmaAssets/logo.png"
                  alt="Arunijone Logo"
                  style={{ position: 'absolute', width: 49, height: 42, top: 'calc(50% - 21px)', left: 'calc(50% - 24.5px)', borderRadius: 12, objectFit: 'cover' }}
                />
              </div>

              {/* Nav links */}
              <div style={{
                position: 'absolute', width: 416, height: 47,
                left: 'calc(50% - 208px)', top: 'calc(50% - 23.5px)',
                display: 'flex', flexDirection: 'row', alignItems: 'center',
                padding: '12px 13px', gap: 72,
              }}>
                {[
                  { label: 'Home',    href: '/',        color: '#0161FE', w: 44 },
                  { label: 'About',   href: '/about',   color: '#111111', w: 41 },
                  { label: 'Explore', href: '/explore', color: '#111111', w: 51 },
                  { label: 'Blogs',   href: '/blog',    color: '#111111', w: 38 },
                ].map(({ label, href, color, w }) => (
                  <Link key={label} href={href} style={{
                    width: w, height: 23, textDecoration: 'none',
                    fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400,
                    fontSize: 16, lineHeight: '22px', color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>{label}</Link>
                ))}
              </div>

              {/* Contact button */}
              <button 
                onClick={() => navigate("/contact")}
                style={{
                  position: 'absolute', left: 1272.55, top: 'calc(50% - 26.5px - 0.3px)',
                  width: 115, height: 53,
                  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                  padding: '15px 26px', gap: 10,
                  background: '#0161FE', borderRadius: 111.786, border: 'none', cursor: 'pointer',
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                  fontSize: 15.7778, lineHeight: '22px', letterSpacing: -0.0788889,
                  color: '#FFFFFF', width: 63, height: 23,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>Contact</span>
              </button>

            </div>
          </header>

          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 50, paddingTop: 108, marginLeft: 10, marginRight: 10 }}>
            <HeroSection />
            <QualityCommitmentSection />
            <ServiceShowcaseSection />
            <BusinessEcosystemAndCapabilitiesSection />
            <SuccessStoriesSection />
            <LatestInsightsSection />
            <ContactInformationSection />
            <SiteFooterSection />
            <div style={{ height: 10 }} />
          </main>
      </DesktopPageWrapper>

      {/* ====== MOBILE VIEW ====== */}
      <div className="md:hidden overflow-x-hidden">
        <HomeUXUI />
      </div>
    </>
  );
};
