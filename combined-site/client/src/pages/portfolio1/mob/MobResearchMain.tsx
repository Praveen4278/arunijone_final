import React from "react";

const sections = [
  {
    title: "Executive Summary",
    paragraphs: [
      "The digital transformation of pilgrimage travel within the Indian subcontinent represents one of the most complex paradigms in modern user experience (UX) and interaction design. The sector is currently undergoing a structural migration from highly fragmented, opaque offline ecosystems toward structured, digitally governed platforms. This transformation is driven by a massive surge in domestic religious tourism, which surpassed 1.4 billion individual trips in 2022, accounting for more than sixty percent of all domestic travel within the region. The contemporary pilgrim demographic is highly bifurcated, consisting of elderly devotees who require immense cognitive support and accessibility alongside digital-native younger generations who demand real-time transparency, instantaneous booking confirmations, and strict operational accountability.",
      "Within this rapidly maturing market, MyRameswaramTrip.com has emerged as a highly specialized, hyper-local aggregator dedicated exclusively to the Rameswaram yatra ecosystem. Unlike macro-aggregators that prioritize vast geographical coverage at the expense of localized operational control, MyRameswaramTrip leverages deep regional expertise to optimize the user journey across accommodation, sacred rituals, and sightseeing logistics. This exhaustive research report presents a comprehensive heuristic evaluation of the MyRameswaramTrip digital platform. By analyzing its information architecture, transactional flows, content strategy, policy friction points, and competitive positioning against major state and private entities, this document provides critical insights into how trust and transparency are successfully digitized within a faith-based commercial framework.",
    ],
  },
  {
    title: "The Macro-Environment of Pilgrimage UX and Digital Trust",
    paragraphs: [
      "To accurately evaluate the interaction design of MyRameswaramTrip, the platform must first be contextualized within the broader dynamics of global digital trust and religious tourism technology. Historically, the pilgrimage ecosystem in emerging markets was defined by acute information asymmetry. Devotees routinely faced unpredictable crowd densities, unverified lodging infrastructure, aggressive local touts, and opaque pricing structures for essential sacred rituals. These offline pain points generated immense psychological friction, contradicting the inherently spiritual and peaceful nature of the travel intent.",
      "By 2026, the overarching paradigm has shifted toward what industry analysts term \"Precision Pilgrimage.\" Modern digital applications leverage real-time data integration, artificial intelligence-driven itinerary optimization, and verified service provider networks to restore dignity and certainty to the religious travel experience. However, the digitization of faith-based transactions introduces unique UX vulnerabilities. Digital trust has emerged as the primary currency of conversion, particularly for transactions involving deep emotional and financial significance.",
      "According to the 2026 Digital Trust Index, digital friction during the onboarding, verification, and transaction phases severely erodes user confidence across all commercial sectors. The data reveals that fifty-seven percent of consumers have experienced significant access or navigational issues across digital platforms within the past year, while sixty-eight percent will readily abandon a digital service provider in favor of a competitor due to complicated flows or perceived insecurity. Crucially, the same longitudinal study highlights a nuanced user preference regarding operational friction: consumers do not universally desire speed at the expense of security. Forty-five percent of surveyed users explicitly prefer deliberate, structured security and verification checks over seamless but opaque digital processes, whereas only twenty-two percent favor velocity over visible data protection.",
      "For a platform like MyRameswaramTrip, which handles highly specific religious services such as the Thila Homam and Pitru Dosh Puja, balancing transactional velocity with authoritative verification represents the central architectural challenge. The user interface must act not merely as a commercial storefront, but as a digital proxy for the sanctity, authority, and reliability of the physical temple ecosystem.",
    ],
  },
  {
    title: "Information Architecture and Cognitive Unburdening",
    paragraphs: [
      "The structural foundation of MyRameswaramTrip.com is engineered to optimize information foraging for a highly specific, high-intent user cohort. The information architecture (IA) operates on a flat, highly visible hierarchy that minimizes cognitive load, ensuring that users are not overwhelmed by complex nested menus or irrelevant peripheral content.",
    ],
  },
  {
    title: "Homepage Structure and Visual Hierarchy",
    paragraphs: [
      "The homepage functions as a high-conversion landing environment built explicitly around trust validation and cognitive unburdening. The global navigation bar is distilled into core functional nodes, prominently displaying the brand logo followed by intuitive categories: Home, Stays, Puja and Rituals, Attractions, About, Contact, and Login.",
      "The hero section utilizes clear, authoritative typography to establish immediate domain expertise. Headlines such as \"Your Trusted Partner for Rameswaram Puja and Tours\" serve as immediate cognitive anchors. By prominently rendering four core trust pillars - Verified Pandits, Transparent Pricing, No Middleman, and Local Support - the platform systematically dismantles the inherent anxiety associated with religious travel.",
      "The vertical scrolling experience is structured sequentially to mirror the chronological mental model of planning a pilgrimage:",
    ],
    bullets: [
      "Rameswaram Stays: Highlighting handpicked, personally verified hotels, homestays, and resorts situated immediately adjacent to sacred temple sites.",
      "Rameswaram Puja Services: Introducing traditional Vedic rituals conducted by verified local Purohits at the auspicious Agni Theertham and temple shores in strict adherence to the Shastras.",
      "Rameswaram Sightseeing: Highlighting guided, temple-aligned itineraries covering peripheral sacred sites like the Ghost Town of Dhanushkodi, Ram Setu, and the Pamban Bridge.",
      "Rameswaram Diving: Introducing a diversified eco-tourism offering promoting safe, guided scuba diving and snorkeling in the Gulf of Mannar, led by certified PADI instructors.",
    ],
  },
  {
    title: "Heuristic Evaluation of Error Handling and Feedback States",
    paragraphs: [
      "A critical component of system heuristic evaluation is how a platform communicates its internal status to the end user, particularly during network latency or data retrieval failures. The MyRameswaramTrip interface exhibits sophisticated error-state management within its dynamic modules. For example, if the Stays module fails to populate due to backend connectivity issues, the system displays a clear, non-technical error state: \"Unable to Load Stays. Failed to fetch. Try Again\".",
      "While encountering a failure state is inherently negative for the user experience, providing unambiguous visibility of the system status alongside an immediate, user-controlled recovery action (the interactive \"Try Again\" call-to-action button) adheres strictly to the fundamental UX heuristics established by Jakob Nielsen. This prevents the user from feeling trapped in a broken interface or assuming that the platform lacks inventory, thereby preserving digital trust even during technical interruptions.",
    ],
  },
  {
    title: "The Phygital Safety Net and Call-to-Action Strategy",
    paragraphs: [
      "Throughout the vertical scroll, the platform employs a sophisticated, dual-layered Call-To-Action (CTA) strategy designed to capture users at varying stages of transactional readiness. The primary CTAs are heavily transaction-focused, utilizing action-oriented microcopy such as \"Book Stays,\" \"Book Your Sacred Puja,\" and \"Explore Guided Sightseeing\" to drive the user into the booking funnel.",
      "However, the architectural brilliance of the interface lies in its secondary CTA layer. Recognizing the high emotional stakes, the intricate prerequisites of specific rituals, and the general anxiety of the demographic, the platform places a secondary, high-contrast CTA beneath every major service module: \"Need guidance? Talk to our local team before booking\".",
      "This secondary interaction acts as a vital UX safety net. It implicitly acknowledges that rigid digital interfaces cannot always replace human reassurance, particularly in contexts involving religious protocols or ancestral duties. By offering a direct off-ramp to a human consultant via a prominently displayed WhatsApp support integration, the platform significantly reduces the bounce rate among elderly users or those confused by complex ritual constraints. This Phygital (Physical + Digital) integration represents a best-in-class approach to inclusive design within the Indian travel technology sector.",
    ],
  },
  {
    title: "Interaction Design: The Attraction Booking Flow",
    paragraphs: [
      "The interaction design of the booking engine, specifically isolated on the Attractions page, demonstrates a highly refined understanding of expectation management, pricing transparency, and error prevention. The UX minimizes cognitive friction by breaking down complex logistical permutations into linear, easily digestible tasks.",
    ],
  },
  {
    title: "Constraint-Based Search and Filtering Interface",
    paragraphs: [
      "The primary booking module, titled \"Find Your Perfect Tour,\" utilizes a structured, multi-field form that constrains user input to aggressively prevent upstream errors. The input fields are logically sequenced: Search Attractions, Preferred Date, Time Slot, and Participants.",
      "Notably, the interaction logic of the Time Slot dropdown menu employs strict dependency constraints. The user is explicitly required to \"Select attraction first\" before the system populates the available chronological times. This dependency logic prevents users from attempting to book times that are operationally impossible for specific tours, thereby eliminating a massive source of downstream booking failures and customer service interventions.",
      "To further lower the barrier to entry for less digitally literate users, the platform externalizes its operational logic into a highly visible, three-step mental model:",
    ],
    bullets: [
      "Step 1: Search Tours. The user is instructed to choose a date, specify the number of participants, and browse the available attraction tours.",
      "Step 2: Choose Guide. The interface allows the user to select from verified, experienced local guides, directly reinforcing the platform core value proposition of safety and authenticity.",
      "Step 3: Book and Explore. The final stage confirms the secure payment protocol, allowing the user to seamlessly embark upon their spiritual journey.",
    ],
    afterBullets: "By visually mapping the entire transaction before the user initiates the first click, the interface successfully manages expectations and reduces the perceived complexity of the digital task.",
  },
  {
    title: "Transparent Pricing and the Anchoring Heuristic",
    paragraphs: [
      "The presentation of pricing data across the MyRameswaramTrip platform is highly optimized to convey both financial value and unwavering honesty. Each listed attraction prominently features its final price in bold typography alongside the Indian Rupee symbol, immediately preceded by a distinct promotional tag reading \"Save 25%\". This specific UI treatment utilizes the anchoring heuristic - a cognitive bias where the user relies heavily on the first piece of information offered to make subsequent judgments. By anchoring the user to a higher theoretical value, the final price is psychologically framed as a highly advantageous proposition.",
      "The interface excels exceptionally in its transparent delineation of what is explicitly excluded from the listed price. In a regional tourism industry historically plagued by hidden costs, aggressive touts, and mandatory donations, proactive financial disclosure is the ultimate mechanism for building digital trust.",
    ],
  },
  {
    title: "Real-World Variable Management via UI Copy",
    paragraphs: [
      "Pilgrimage and coastal travel are inherently susceptible to unpredictable real-world disruptions, ranging from sudden severe weather patterns and temple crowding to spontaneous government regulatory changes. The interaction design of MyRameswaramTrip addresses this systemic fragility by embedding expectation management directly into the microcopy of its product descriptions.",
      "Every single attraction package features the prominent, standardized disclaimer: \"Note: Arrival and drop times at each destination may vary based on individual sightseeing and enjoyment\". Furthermore, the platform explicitly clarifies nuanced environmental variables, such as warning users that the Dhanushkodi morning tour is constrained by strict governmental check-post timings, thereby precluding a true sunrise viewing. By proactively solving for cognitive dissonance, the digital interface effectively shields the brand offline operational reputation from unwarranted negative reviews.",
    ],
  },
  {
    title: "Content Strategy as a Mechanism for Cognitive Unburdening",
    paragraphs: [
      "Within the domain of highly specialized travel technology, content design is not merely a mechanism for search engine optimization; it is a critical UX tool utilized to orient users in complex, anxiety-inducing informational spaces. The blog and educational repository hosted on MyRameswaramTrip serve as the primary digital onboarding mechanism for anxious, information-starved pilgrims.",
    ],
  },
  {
    title: "Alleviating Procedural Anxiety",
    paragraphs: [
      "The platform editorial strategy acknowledges a profound psychological truth regarding its specific demographic: \"Most pilgrims we meet are not confused about faith - they are confused about the process\". Users are overwhelmed by contradictory offline advice regarding where to go, whom to trust, what time to arrive, and the necessity of advance bookings. The blog interface specifically targets this logistical ambiguity.",
      "The articles are highly structured for optimal readability and scannability. Each content card features clear metadata, including categorical tags (e.g., Temple Guides, Pilgrimage, Temple History) and estimated read times ranging from seven to ten minutes, setting clear temporal expectations for the reader before they click.",
      "The content itself directly tackles user pain points through practical, highly authoritative advice. For instance, the article titled \"How to Book Temple Rituals in Rameswaram\" outlines the exact procedures for the complex 22-theertham bath and various puja bookings. It explicitly warns against common behavioral pitfalls, prominently listing \"Mistake 1: Squeezing too many rituals into one morning,\" \"Mistake 2: Trusting whoever approaches near the temple gate,\" and \"Mistake 3: Not asking about dress code until the last minute\".",
      "By framing advance digital booking not as a modern luxury, but as an absolute necessity to prevent wasted occupational leave, exhausted elderly parents, and emotional frustration, the content strategy seamlessly transitions the user from a passive informational state to an active transactional state. This represents a masterful execution of content-led conversion optimization.",
    ],
  },
  {
    title: "Digital Trust, Policy Friction, and Systemic Dissonance",
    paragraphs: [
      "While the interface excels in transparency regarding pricing exclusions and itinerary constraints, a critical friction point emerges within the legal and operational UX framework: the platform Cancellation and Refund Policy.",
      "The platform, operated by the legal entity Arunijone (Udyam Number: UDYAM-TN-19-0044257), enforces an exceptionally strict, non-refundable policy once a booking has been processed and accepted by a local service provider. The Terms and Conditions explicitly and unambiguously state that no cancellations or refunds will be provided for any reason whatsoever, inclusive of changes in personal plans, severe medical emergencies, sudden weather conditions, or any other unforeseen circumstances.",
    ],
  },
  {
    title: "The Dual Nature of Intentional Friction",
    paragraphs: [
      "In standard, generic e-commerce UX paradigms, absolute non-refundability is considered a severe conversion deterrent. However, the MyRameswaramTrip interface attempts to mitigate this immense friction through the use of explanatory design. Rather than hiding the policy behind dense legalese, the policy page explicitly lists the operational reasoning behind the strict rules in plain language:",
    ],
    bullets: [
      "The service provider time and capacity are exclusively reserved for the user.",
      "The provider availability is blocked, forcing them to decline other potential bookings.",
      "Preparations and physical arrangements for the rituals or tours are made well in advance.",
      "Last-minute cancellations cause significant, unrecoverable operational losses for the local providers.",
    ],
    afterBullets: "By exposing the backend operational constraints directly to the end user, the platform actively attempts to humanize its policy. Because local Vedic pandits and dedicated sightseeing vehicles represent highly perishable, time-bound inventory, this strict policy is structurally necessary to protect the local supply side from catastrophic revenue loss.\n\nNevertheless, from a purely user-centric perspective, the total inability to cancel due to genuine medical emergencies introduces a high degree of financial risk for the consumer. This is particularly concerning given that the primary demographic for the Rameswaram yatra includes senior citizens who are inherently prone to sudden health fluctuations. This unilateral distribution of risk currently represents the platform most significant UX vulnerability and a potential threat to long-term brand equity and digital trust.",
  },
  {
    title: "Competitive UX Benchmarking and Market Positioning",
    paragraphs: [
      "To accurately gauge the efficacy of MyRameswaramTrip interface and overall digital strategy, it must be rigorously evaluated against its primary digital competitors operating within the region. This competitive set includes macro-aggregators like Yatradham.org, government-operated portals such as the Tamil Nadu Tourism Development Corporation (TTDC), national platforms like IRCTC Tourism, and myriad local operators listed on directories like JustDial.",
    ],
  },
  {
    title: "MyRameswaramTrip vs. Macro-Aggregators (Yatradham.org and IRCTC)",
    paragraphs: [
      "Yatradham.org represents a massive, pan-Indian player in the pilgrimage sector, boasting over two million users and strategic partnerships with major entities like the Shree Jagannatha Temple Bhakta Nivas, the Vivekananda Rock Memorial, and TTDC. Yatradham offers a highly functional, filter-heavy application interface that focuses predominantly on budget-friendly Dharamshala, Ashram, and trust-run accommodations across hundreds of cities. Similarly, platforms like IRCTC Tourism dominate the budget demographic through highly structured, uncustomizable train-based group tours.",
      "However, heuristic analysis of user feedback reveals critical systemic UX failures within Yatradham transaction pipeline. Users frequently report that rooms displayed as \"available\" on the app interface are, in reality, fully booked. When users complete a financial transaction for these phantom rooms, the application state changes to \"Under Processing\" and remains stuck indefinitely, failing to provide either a confirmation or a rejection. Furthermore, the platform UX actively obscures self-serve cancellation pathways, forcing users to call customer support only to be informed that the system lacks a cancellation function.",
      "This represents a catastrophic failure of two primary UX principles: visibility of system status and user control and freedom. In stark contrast, MyRameswaramTrip - while lacking the sheer geographical scale of Yatradham - maintains a tightly controlled, verified supply chain restricted entirely to one geographical node. By prioritizing localized verification over national scale, MyRameswaramTrip guarantees that its availability data is accurate, entirely avoiding the \"infinite processing\" error states that severely erode user trust on larger platforms.",
    ],
  },
  {
    title: "Comparison with Traditional Offline Operators and Directories",
    paragraphs: [
      "When evaluated against generic travel operators listed on regional directories like JustDial, MyRameswaramTrip occupies a highly specific, digitally native niche. Traditional operators rely heavily on manual coordination via phone calls, ad-hoc WhatsApp negotiation, and opaque pricing models that are often subject to surge pricing upon the tourist physical arrival.",
      "While reviews indicate that some of these local operators provide excellent service, the initial discovery and booking phase remains highly fragmented and anxiety-inducing for the out-of-town user. The user is forced into a high-cognitive-load scenario where they must manually vet the operator, negotiate pricing, and hope the operator fulfills their promises.",
      "MyRameswaramTrip effectively digitizes and standardizes this relationship. It takes the fragmented supply of highly rated local pandits and taxi drivers and standardizes them behind a unified, beautifully designed digital interface with fixed, transparent pricing, thereby removing the burden of negotiation from the user.",
    ],
  },
  {
    title: "The Phygital Ecosystem and Inclusive Design Imperatives",
    paragraphs: [
      "The architecture of MyRameswaramTrip extends purposefully beyond the standard web browser, utilizing a Phygital integration strategy that bridges the digital and physical worlds. In 2026, this is not merely a feature but an essential UX requirement for platforms catering to the complex demographics inherent to Indian pilgrimage travel.",
    ],
  },
  {
    title: "Seamless Channel Switching and Omnichannel Support",
    paragraphs: [
      "The inclusion of an omnipresent WhatsApp support module allows users to seamlessly switch from a self-serve digital interface to a conversational, human-assisted interface. For the primary demographic of pilgrimage planners - often middle-aged individuals booking complex logistical trips for their elderly parents - standard web forms can frequently feel too rigid to express highly nuanced requirements. By actively encouraging users to transition to WhatsApp to resolve these edge-case queries, the platform drastically reduces the abandonment rate that inevitably occurs when a user unique constraints cannot be captured by standardized dropdown menus.",
    ],
  },
  {
    title: "Evaluating Accessibility, Multilingual Support, and the Digital Divide",
    paragraphs: [
      "A significant gap in the current UX architecture of MyRameswaramTrip is the apparent absence of explicit, native multilingual support within its primary web interface. Pilgrims traveling to the Ramanathaswamy Temple originate from across the entirety of India - primarily comprising Tamil, Hindi, Telugu, Kannada, and Marathi speakers - as well as from the global diaspora.",
      "Modern architectural standards for heritage and pilgrimage applications in 2026 heavily emphasize deep inclusivity to bridge the digital divide. Frameworks like the SAFARSETU reference architecture advocate for serverless, zero-install, multilingual, NLP-driven chatbot interfaces designed specifically to democratize access for rural and diverse domestic tourists. Furthermore, contemporary research explicitly notes that voice-based search capabilities, extensive audio-guided tours, and large-text accessibility options are no longer considered peripheral features; they are core architectural requirements for an aging demographic.",
      "Currently, MyRameswaramTrip relies heavily on English for its primary textual interface. While English serves as a functional bridging language for the younger, booking-initiating demographic, integrating native language toggles (particularly for Tamil and Hindi) would drastically reduce the cognitive load for domestic travelers attempting to understand complex ritual requirements directly. The absence of explicit screen-reader optimization indicators or voice-search integration suggests that the platform accessibility maturity is still in a developmental phase, relying primarily on its human-operated WhatsApp channel to manually bridge the accessibility gap.",
    ],
  },
  {
    title: "Future Projections: AI Integration and Next-Generation Pilgrimage UX",
    paragraphs: [
      "While MyRameswaramTrip currently operates a highly robust, traditional e-commerce aggregator model, the rapid technological trajectory of pilgrimage management suggests several critical avenues for future UX evolution. The integration of advanced artificial intelligence into cultural heritage tourism is rapidly transitioning from experimental prototypes to fully customized, context-aware deployments.",
    ],
  },
  {
    title: "Conversational Interfaces and NLP",
    paragraphs: [
      "As demonstrated by regional developments like the \"TN Forts Buddy\" within Tamil Nadu, customized Large Language Model (LLM) chatbots are currently being deployed to provide hyper-localized historical context, real-time navigation, and multilingual descriptions for heritage sites. For MyRameswaramTrip, deploying an NLP-trained conversational assistant could automate responses to the highly repetitive, high-volume logistical queries regarding Ramanathaswamy Temple timings, dynamic festival dress codes, and the strict sequence rules for the 22-theertham bath. By automating these baseline informational queries, the human WhatsApp support team would be freed to handle complex, high-value conversion queries and intricate ritual customizations.",
    ],
  },
  {
    title: "Predictive Analytics and Crowd Management",
    paragraphs: [
      "Furthermore, advanced platforms within the global religious tourism sector are beginning to implement highly sophisticated \"Predictive Darshan Engines.\" These systems analyze massive multimodal datasets, historical crowd density metrics, and real-time sensor feedback to offer users optimized, safe visitation windows, thereby mitigating the risks of stampedes and extreme fatigue.",
      "While implementing physical IoT sensors inside the Ramanathaswamy Temple is entirely beyond the operational purview of a private digital aggregator, MyRameswaramTrip could simulate this advanced UX by structuring its time-slot booking engine around known historical peak times. By visually discouraging users from booking rituals or tours during periods of known high congestion through dynamic UI color coding, the platform could proactively enhance the physical safety and comfort of its users.",
    ],
  },
  {
    title: "Blockchain Verification for Absolute Trust",
    paragraphs: [
      "Finally, integrating blockchain or distributed ledger technology for verifying the credentials of the local Pandits and tracking the chain of custody for donations and ritual bookings could serve as the ultimate, tamper-proof trust-building mechanism. By logging transactions on a transparent ledger accessible to the devotee, the platform could prove unequivocally and mathematically that it operates with zero middlemen, permanently cementing its authority as the most secure digital gateway to the Rameswaram ecosystem.",
    ],
  },
  {
    title: "Strategic Conclusions",
    paragraphs: [
      "MyRameswaramTrip.com represents a highly effective, elegantly designed, and specialized implementation of digital UX within the complex, inherently trust-deficient ecosystem of Indian pilgrimage travel. Its greatest architectural strengths lie in its hyper-local focus, its masterful utilization of content for expectation management, and its unwavering commitment to the transparent presentation of pricing and procedural data. By directly and systematically addressing the deep-seated fears of its user base - scams, fake guides, opaque pricing, and logistical chaos - the interface acts as a calming, authoritative presence that facilitates spiritual focus.",
      "The platform significantly outperforms macro-aggregators in terms of supply-chain reliability, entirely avoiding the fatal UX errors of displaying phantom inventory or trapping users in endless processing loops. Its content strategy is perfectly aligned with user intent, addressing the frustrating mechanics of the pilgrimage process rather than attempting to provide abstract theological commentary.",
      "However, areas for crucial optimization remain to secure long-term dominance. The absolute rigidity of the non-refundable cancellation policy introduces a high degree of financial risk for the user that could negatively impact brand equity over time. Furthermore, to truly cater to the pan-Indian and elderly demographic, the platform must aggressively prioritize accessibility upgrades. Integrating seamless multilingual support, voice-assisted navigational aids, and dynamic typographic scaling will be fundamentally required to maintain its competitive edge as digital adoption deepens among older generations.",
      "In summation, MyRameswaramTrip succeeds by recognizing that in the realm of spiritual travel, the user interface must prioritize authoritative trust, absolute clarity, and accessible human backup over pure, frictionless transactional speed. It stands as a highly robust digital blueprint for how regional operators can utilize technology to bring dignity, transparency, and safety back to the ancient pilgrimage experience.",
    ],
  },
];

export default function MobResearchMain() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "30px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", alignSelf: "flex-start", display: "inline-flex" }}>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
          Research Report
        </span>
      </div>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
        The Macro-Environment of Pilgrimage UX and Digital Trust
      </span>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
        Discover how our solutions have delivered real results, solved complex challenges, and accelerated business growth.
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {sections.map(({ title, paragraphs, bullets, afterBullets }) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>{title}</span>
            {paragraphs.map((p, i) => (
              <span key={i} style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#808080" }}>{p}</span>
            ))}
            {bullets && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 16 }}>
                {bullets.map((b, i) => (
                  <span key={i} style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#808080" }}>• {b}</span>
                ))}
              </div>
            )}
            {afterBullets && afterBullets.split("\n\n").map((p, i) => (
              <span key={i} style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#808080" }}>{p}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
