import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    label: "Email Addres",
    value: "arunijone@gmail.com",
    icon: "/figmaAssets/mail_icon.svg",
    href: "mailto:arunijone@gmail.com",
  },
  {
    label: "Phone Number",
    value: "+91 9489456580",
    icon: "/figmaAssets/svg-6.svg",
    href: "tel:+919489456580",
  },
  {
    label: "My Location",
    value: "Rameswaram",
    icon: "/figmaAssets/svg-8.svg",
    href: "https://maps.google.com/?q=Rameswaram,India",
  },
];

export const ContactInformationSection = (): React.JSX.Element => {
  return (
    <section
      aria-labelledby="contact-information-heading"
      id="contact"
      style={{ width: 1420, height: 402, background: "#F6F7F9", borderRadius: 20, flexShrink: 0 }}
    >
      {/* Inner frame: 1338×302, left:41, top:50 */}
      <div style={{ position: "relative", width: 1338, height: 302, left: 41, top: 50 }}>

        {/* Left column: label + heading + subtext */}
        {/* Badge */}
        <div style={{
          position: "absolute", width: 140, height: 38, left: 0, top: 0,
          border: "0.711772px solid #202833", borderRadius: 199.268,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 500, fontSize: 14,
            lineHeight: "18px", letterSpacing: 1.74384, textTransform: "uppercase", color: "#202833",
          }}>
            Contact Us
          </span>
        </div>

        {/* Heading */}
        <h2
          id="contact-information-heading"
          style={{
            position: "absolute", width: 463, height: 39, left: 0, top: 68,
            fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 40,
            lineHeight: "46px", color: "#111111", margin: 0,
          }}
        >
          Connect with Arunijone
        </h2>

        {/* Subtext */}
        <p style={{
          position: "absolute", width: 409, left: 1.45, top: 122.66,
          fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 16,
          lineHeight: "28px", color: "rgba(109,109,110,0.8)", margin: 0,
        }}>
          Learn about my vision, story, and how I bring ideas to life.
        </p>

        {/* Right column: 3 contact cards, left:686, stacked with top:66/149/232 */}
        <address className="not-italic" style={{ position: "absolute", width: 651.95, height: 235.76, left: 686, top: 66 }}>
          {contactDetails.map((detail, i) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : undefined}
              rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ textDecoration: "none", display: "block" }}
            >
              <Card style={{
                position: "absolute", height: 69.73, left: 0, right: 0.05,
                top: i === 0 ? 0 : i === 1 ? 83.01 : 166.02,
                background: "#FFFFFF", borderRadius: 15, border: "none", boxShadow: "none",
              }}>
                <CardContent className="flex h-full items-center p-0" style={{ paddingLeft: 20.28 }}>
                  <img
                    src={detail.icon}
                    alt=""
                    aria-hidden="true"
                    style={{ width: 43.18, height: 43.18, flexShrink: 0 }}
                  />
                  <div style={{ marginLeft: 83.55 - 20.28 - 43.18, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{
                      fontFamily: "'SF Pro Display', Helvetica", fontWeight: 300, fontSize: 18,
                      lineHeight: "20px", color: "rgba(17,17,17,0.6)", margin: 0,
                    }}>
                      {detail.label}
                    </p>
                    <p style={{
                      fontFamily: "'SF Pro Display', Helvetica", fontWeight: 400, fontSize: 20,
                      lineHeight: "23px", color: "#111111", margin: 0, marginTop: 4,
                    }}>
                      {detail.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </address>
      </div>
    </section>
  );
};
