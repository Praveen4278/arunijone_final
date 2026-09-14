export default function Portfolio5DesignSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{
        width: 1420, background: "#FFFFFF", borderRadius: 23.6864,
        padding: "55px 49px", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 60, boxSizing: "border-box",
      }}>
        {/* Header: Pill + Title/Description Row */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{
            boxSizing: "border-box", display: "flex", flexDirection: "row",
            justifyContent: "center", alignItems: "center",
            padding: "9px 20px", gap: 10,
            border: "0.969561px solid #202833", borderRadius: 236.8444,
          }}>
            <span style={{
              fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 500,
              fontSize: 14, lineHeight: "19.61px", letterSpacing: "0.148em",
              textTransform: "uppercase", color: "#202833",
              whiteSpace: "nowrap", display: "flex", alignItems: "center",
              textAlign: "left",
            }}>
              app design
            </span>
          </div>
          <div style={{
            display: "flex", flexDirection: "row", alignItems: "center",
            alignSelf: "stretch", gap: 511,
          }}>
            <div style={{
              display: "flex", flexDirection: "row", alignItems: "center",
              padding: "10px 10px 10px 0px", gap: 10,
            }}>
              <span style={{
                fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
                fontSize: 35, lineHeight: "34.01px", color: "#111111",
                width: 375, display: "flex", alignItems: "center", textAlign: "left",
              }}>
                Designed for effortless music discovery
              </span>
            </div>
            <div style={{
              display: "flex", flexDirection: "row", justifyContent: "center",
              alignItems: "center", padding: 10, gap: 10, width: 413,
            }}>
              <span style={{
                fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
                fontSize: 16, lineHeight: "23.69px", color: "rgba(109, 109, 110, 0.8)",
                width: 404, display: "flex", alignItems: "center", textAlign: "left",
              }}>
                Explore the Find Pattu app interface, crafted to make song identification fast, simple, and intuitive.
              </span>
            </div>
          </div>
        </div>

        {/* Showcase Row 1: Phone Card Left + Text Right */}
        <div style={{
          display: "flex", flexDirection: "row", alignItems: "center", gap: 10,
        }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "stretch",
            gap: 60, width: 1337,
          }}>
            <div style={{
              width: "100%", display: "flex", flexDirection: "row",
              alignItems: "center", gap: 90,
            }}>
              {/* Left: Phone Container */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "stretch",
                gap: 10, width: 612, background: "#FFFFFF", borderRadius: 23.6864,
              }}>
                <div style={{
                  alignSelf: "stretch", display: "flex", flexDirection: "column",
                  alignItems: "stretch", padding: 10, gap: 10,
                  boxSizing: "border-box", height: 426, position: "relative",
                }}>
                  <div style={{
                    width: "100%", height: 406, position: "relative",
                  }}>
                    {/* iPhone 14 Pro mockup with splash screen, positioned offset */}
                    <div style={{
                      position: "absolute", left: 195.5, top: -2,
                      width: 201, height: 409.89,
                    }}>
                      <div style={{
                        position: "absolute", left: 8.36, top: 8.82,
                        width: 182.43, height: 395.5,
                        background: "#FEFFFF", borderRadius: 18.5681,
                        overflow: "hidden",
                      }}>
                        <img
                          src="/assets/portfolio5/images/find_pattu_splash_screen.png"
                          alt="Find Pattu Splash Screen"
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* iPhone Status Bar */}
                      <div style={{
                        position: "absolute", left: 27.29, top: 19.5,
                        width: 146.52, height: 8.36,
                        display: "flex", justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                        <span style={{
                          fontFamily: "'SF Pro Text'", fontStyle: "normal",
                          fontWeight: 600, fontSize: 6.963,
                          letterSpacing: "-0.02em",
                          textAlign: "center", color: "#2C2C2C",
                          width: 18.1, height: 8,
                        }}>
                          9:41
                        </span>
                        <div style={{
                          display: "flex", flexDirection: "row",
                          alignItems: "center", gap: 3.5,
                        }}>
                          <img
                            src="/assets/status-bar-icons/cellular.svg"
                            alt="Cellular"
                            style={{ width: 8.92, height: 5.57 }}
                          />
                          <img
                            src="/assets/status-bar-icons/wifi.svg"
                            alt="WiFi"
                            style={{ width: 7.96, height: 5.61 }}
                          />
                          <img
                            src="/assets/status-bar-icons/battery.svg"
                            alt="Battery"
                            style={{ width: 12.62, height: 6.03 }}
                          />
                        </div>
                      </div>
                      {/* Home Indicator */}
                      <div style={{
                        position: "absolute", left: 67.76, top: 394.1,
                        width: 64.99, height: 2.32, background: "#000000",
                        borderRadius: 46.4203,
                      }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text Column */}
              <div style={{
                display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "stretch",
                gap: 40, width: 636,
              }}>
                <div style={{
                  alignSelf: "stretch", display: "flex", flexDirection: "row",
                  justifyContent: "center", alignItems: "center",
                  padding: 10, gap: 10,
                }}>
                  <span style={{
                    fontFamily: "'SF Pro Display'", fontStyle: "normal", fontWeight: 400,
                    fontSize: 36, lineHeight: "45px", color: "#111111",
                    width: 522, textAlign: "center", display: "flex",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    A polished, app-store-quality presentation that showcases Find Pattu's core music discovery flows.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
