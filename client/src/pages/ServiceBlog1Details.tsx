import React from "react";
import { useLocation, Link } from "wouter";
import DesktopPageWrapper from "../components/DesktopPageWrapper";
import MobBanner from "../components/MobBanner";
import MobFooter from "../components/MobFooter";
import { SiteFooterSection } from "./home/sections/SiteFooterSection";
import MobilePageWrapper from "../components/MobilePageWrapper";
import MobPillContent from "../components/MobPillContent";
import PillMilestoneSection from "./portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "./portfolio1/sections/PillQuoteSection";
import PillFaqSection from "./portfolio1/sections/PillFaqSection";
import type { PillMilestoneTexts } from "./portfolio1/sections/PillMilestoneSection";
import type { PillQuoteTexts } from "./portfolio1/sections/PillQuoteSection";
import type { PillFaqTexts } from "./portfolio1/sections/PillFaqSection";

const milestone: PillMilestoneTexts = {
  heading: "Music Information Retrieval System Architecture",
  description: "Comprehensive research on interactive gamification and Query-by-Humming systems for music identification, analyzing modern approaches to music retrieval beyond passive audio fingerprinting.",
  keyAchievementBody: "Users want a quick way to identify a song without manually searching for lyrics, titles, or artists.",
  clientImpactBody: "The research enabled a frictionless experience for quickly identifying songs and discovering key details.",
};

const quote: PillQuoteTexts = {
  solidLine: "The research focused on understanding how users discover and identify unfamiliar songs.",
  mutedLine: "Through user interviews, competitor analysis, journey mapping, and usability testing, key pain points were identified and translated into a simple, fast, and intuitive song recognition experience.",
  textWidth: 920,
  textHeight: 164,
};

const faq: PillFaqTexts = {
  faqHeading: "Music Information Retrieval and Tamil Cinema App Architecture",
  activeRow: {
    leftLabel: "Research Scope",
    rightQuestion: "What does this research cover for a Tamil music identification app?",
    active: true,
    answerText: "The research covers the full MIR stack: gamification mechanics (Heardle/Wordle patterns, streaks, daily puzzles), audio source separation via HTDemucs, pitch estimation via CREPE/SPICE/PESTO, sequence matching via DTW and Siamese CNNs, Carnatic musicology challenges (gamakas, tonic normalization, Saraga dataset), and Indian music copyright law spanning IPRS, PPL, Novex, and Ilaiyaraaja personality rights jurisprudence.",
  },
  row2: {
    leftLabel: "Key Models",
    rightQuestion: "Which ML models power the QBH and source separation systems?",
  },
  row3: {
    leftLabel: "Legal Compliance",
    rightQuestion: "What licenses are required to operate a Tamil music trivia app?",
  },
};

const ServiceBlog1Details = () => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* DESKTOP */}
      <DesktopPageWrapper designHeight={0} dynamicHeight>
        <header style={{ position: "absolute", left: 10, top: 10, width: 1420, height: 87.76 }}>
          <div style={{ width: 1420, height: 87.76, background: "#F6F7F9", borderRadius: 22.3551, position: "relative" }}>
            <div onClick={() => { navigate("/"); window.scrollTo(0, 0); }} style={{ position: "absolute", left: 42, top: "calc(50% - 33px)", width: 66, height: 66, cursor: "pointer" }}>
              <div style={{ position: "absolute", width: 66, height: 66, background: "#FFFFFF", borderRadius: 1000 }} />
              <img src="/figmaAssets/logo.png" alt="Logo" style={{ position: "absolute", width: 49, height: 42, top: "calc(50% - 21px)", left: "calc(50% - 24.5px)", borderRadius: 12, objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", width: 416, height: 47, left: "calc(50% - 208px)", top: "calc(50% - 23.5px)", display: "flex", flexDirection: "row", alignItems: "center", padding: "12px 13px", gap: 72 }}>
              {[
                { label: "Home", href: "/", w: 44 },
                { label: "About", href: "/about", w: 41 },
                { label: "Explore", href: "/explore", w: 51 },
                { label: "Blogs", href: "/blog", w: 38 },
              ].map(({ label, href, w }) => (
                <Link key={label} href={href} style={{ width: w, height: 23, textDecoration: "none", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "22px", color: "#111111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {label}
                </Link>
              ))}
            </div>
            <button onClick={() => navigate("/contact")} style={{ position: "absolute", left: 1272.55, top: "calc(50% - 26.5px)", width: 115, height: 53, display: "flex", justifyContent: "center", alignItems: "center", background: "#0161FE", borderRadius: 111.786, border: "none", cursor: "pointer" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 500, fontSize: 15.78, color: "#FFFFFF" }}>Contact</span>
            </button>
          </div>
        </header>

        <div className="absolute h-auto w-[1420px] flex flex-col justify-start items-center gap-[50px] left-[10px] top-[107px]">
          {/* Hero Section */}
          <div style={{ position: "relative", background: "#F6F7F9", width: "100%", borderRadius: 20.4131, overflow: "hidden", flexShrink: 0, padding: "45px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 57, width: "100%" }}>
              <span style={{ width: 1331, fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 40.8113, lineHeight: "47px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#111111" }}>
                Find Pattu: The Art of Instant Music Recognition
              </span>
              <div style={{ position: "relative", overflow: "hidden", width: 1331, height: 625, borderRadius: 20.4131 }}>
                <div style={{ position: "absolute", overflow: "hidden", width: 1335.11, height: 627.5, left: 0, top: 0, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Find Pattu" style={{ width: 300, height: 300, objectFit: "contain" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div style={{ width: "100%", background: "#FFFFFF", borderRadius: 23.6864, padding: "55px 49px", display: "flex", flexDirection: "column", alignItems: "center", gap: 60, boxSizing: "border-box" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
              <div style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", padding: "9px 20px", height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>blog</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 270, width: 1322 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 664 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111", width: 654 }}>Find Pattu Music App: The Ultimate Song Identifier for South Indian Music</span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 413 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", width: 404 }}>Struggling to identify that catchy Tamil, Malayalam, or Telugu tune? Discover how the Find Pattu music app uses advanced audio recognition and hum-to-search technology to help.</span>
                </div>
              </div>
            </div>

            {/* Inner Box */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 250px", gap: 40, width: 1322 }}>
              {/* Section 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Introduction to the Music Information Retrieval Ecosystem</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Have you ever had a beautiful Tamil, Malayalam, or Telugu melody stuck in your head, but couldn't quite remember the lyrics, the artist, or the movie name? If you are a fan of South Indian music, you already know that mainstream international song identifier apps often struggle to recognize regional tracks, indie releases, or classic retro hits.</span>
                    </div>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Enter the Find Pattu music app—the game-changing application designed exclusively for lovers of South Indian music. Whether you are looking for a soul-stirring Ilaiyaraaja classic, a fast-paced Anirudh chartbuster, or a soothing Malayalam melody, this app is your ultimate digital companion.</span>
                    </div>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>In this comprehensive guide, we will dive deep into everything you need to know about the Find Pattu music app, its standout features, and why it is quickly becoming the go-to platform for regional music discovery.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>What is the Find Pattu Music App?</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>"Pattu" translates to "song" or "music" in Tamil and Malayalam. True to its name, the Find Pattu music app is a dedicated song identifier and music discovery platform built specifically for the South Indian music ecosystem.</span>
                    </div>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>While global giants like Shazam or SoundHound are excellent for international pop, they often lack the deep metadata required to accurately identify regional Indian music. The Find Pattu app bridges this gap by utilizing a massive, highly curated database of Tamil, Malayalam, Telugu, Kannada, and even classical Carnatic audio footprints.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Key Features That Make the Find Pattu App Stand Out</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>If you are looking for a reliable Tamil song finder or a Malayalam music discovery app, here is why the Find Pattu app deserves a spot on your home screen:</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>1. Pinpoint Audio Recognition for Regional Music</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The core engine of the Find Pattu music app is trained specifically on South Indian audio libraries. Simply let the app listen to a few seconds of the song playing on the radio, TV, or in a cafe, and it will instantly provide you with the track name, movie/album, music director, and singer.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>2. Hum-to-Search Technology</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Can't play the audio? No problem! The app includes a highly sensitive hum-to-find pattu feature. Just hum or sing the tune that is stuck in your head for 10-15 seconds, and the app's AI will scan its database to find the closest match.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>3. Deep Integration with Streaming Platforms</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Once you find your desired track, you don't have to jump through hoops to listen to the full version. The app seamlessly links out to popular music streaming services like Spotify, Apple Music, JioSaavn, and Wynk, allowing you to instantly add the song to your personal playlist.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>4. Lyrics and Trivia</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>A great bonus for music nerds: the app doesn't just identify the song. It pulls up the original lyrics (available in native scripts like Tamil and Malayalam as well as English transliteration) alongside fascinating trivia about the movie, the cast, and the recording process.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>5. Offline Search Mode</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Network connectivity can be spotty while traveling. The Find Pattu app allows you to record an audio snippet offline. Once your phone reconnects to the internet, the app automatically processes the audio and notifies you of the song's identity.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Why Regional Music Needs a Dedicated App</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>You might wonder, "Why do I need a separate app to find pattu when I already have a standard song identifier?"</span>
                    </div>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The answer lies in metadata and audio processing. Mainstream apps focus heavily on the Billboard charts and Western music catalogs. When it comes to a 1980s Malayalam folk song, a 1990s Tamil chartbuster, or a niche indie Telugu track, standard apps often draw a blank.</span>
                    </div>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The Find Pattu music app succeeds where others fail because its developers have prioritized regional partnerships, compiling an exhaustive library of:</span>
                    </div>
                  </div>
                </div>
                
                {/* Bullet List */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, width: 787 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Kollywood, Tollywood, and Mollywood film soundtracks.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Devotional songs and Mappila pattukal.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Independent South Indian artists and bands.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Classical Carnatic vocal and instrumental renditions.</span>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>How to Use the Find Pattu Music App</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                    <div style={{ padding: 10, width: 822 }}>
                      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Using the app is incredibly intuitive. Here is a quick step-by-step guide:</span>
                    </div>
                  </div>
                </div>

                {/* Steps List */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, width: 787 }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Download and Install: Search for "Find Pattu app download" on the Google Play Store or Apple App Store and install the application.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Tap to Listen: Open the app and tap the large central microphone icon when a song is playing in your background.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Hum or Sing: If the music isn't playing out loud, switch to the "Hum Mode" and vocalize the melody.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 10px 10px 30px", gap: 10, width: 787 }}>
                    <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 767 }}>Discover and Save: Within seconds, the app will display the song's cover art, title, and artist. Click the streaming links to save the track to your library.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Section */}
          <PillMilestoneSection {...milestone} mockupImageSrc="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" />

          {/* Quote Section */}
          <PillQuoteSection {...quote} />

          {/* FAQ Section */}
          <PillFaqSection {...faq} />

          <SiteFooterSection />
          <div style={{ height: 10 }} />
        </div>
      </DesktopPageWrapper>

      {/* MOBILE */}
      <MobilePageWrapper designHeight={0}>
        <div className="bg-white w-full">
          <MobBanner iconSrc="/assets/p5/images/group.svg" />
          <div className="w-[calc(100%-16px)] flex flex-col gap-[20px] mx-auto pt-[3px] pb-[20px]">
            <div className="bg-[#F6F7F9] w-full rounded-[20px] flex flex-col items-center py-[25px] px-[15px]" style={{ gap: 30 }}>
              <span style={{ width: "100%", fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 28, lineHeight: "36px", textAlign: "center", color: "#111111" }}>
                Find Pattu: The Art of Instant Music Recognition
              </span>
              <div className="w-full rounded-[15px] overflow-hidden bg-white" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/assets/Home/images/ecosystem_logos/ecosystem_logo_1.svg" alt="Find Pattu" style={{ width: 150, height: 150, objectFit: "contain" }} />
              </div>
            </div>

            {/* Main Content */}
            <div style={{ width: "100%", background: "#F6F7F9", borderRadius: 15, padding: "20px", boxSizing: "border-box" }}>
              <p style={{ fontSize: 14, fontFamily: "'SF Pro Display'", fontWeight: 400, lineHeight: "20px", color: "rgba(17,17,17,0.8)", margin: 0 }}>
                Instant music recognition represents a transformative intersection of audio technology and user experience design. By integrating advanced algorithms with intuitive interface patterns, Find Pattu enables users to identify songs with unprecedented accuracy.
              </p>
            </div>

            <MobPillContent data={{
              milestoneHeading: "Music Information Retrieval System Architecture",
              milestoneDescription: "Comprehensive research on interactive gamification and Query-by-Humming systems for music identification, analyzing modern approaches to music retrieval beyond passive audio fingerprinting.",
              keyAchievementBody: "Users want a quick way to identify a song without manually searching for lyrics, titles, or artists.",
              clientImpactBody: "The research enabled a frictionless experience for quickly identifying songs and discovering key details.",
              quoteSolid: "The research focused on understanding how users discover and identify unfamiliar songs.",
              quoteMuted: "Through user interviews, competitor analysis, journey mapping, and usability testing, key pain points were identified and translated into a simple, fast, and intuitive song recognition experience.",
              faqHeading: "Music Information Retrieval and Tamil Cinema App Architecture",
              activeLabel: "Research Scope",
              activeQuestion: "What does this research cover for a Tamil music identification app?",
              activeAnswer: "The research covers the full MIR stack: gamification mechanics (Heardle/Wordle patterns, streaks, daily puzzles), audio source separation via HTDemucs, pitch estimation via CREPE/SPICE/PESTO, sequence matching via DTW and Siamese CNNs, Carnatic musicology challenges (gamakas, tonic normalization, Saraga dataset), and Indian music copyright law.",
              row2Label: "Key Models",
              row2Question: "Which ML models power the QBH and source separation systems?",
              row3Label: "Legal Compliance",
              row3Question: "What licenses are required to operate a Tamil music trivia app?",
            }} />

            <MobFooter />
          </div>
        </div>
      </MobilePageWrapper>
    </>
  );
};

export default ServiceBlog1Details;
