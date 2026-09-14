import { ReactNode } from "react";
import { useLocation } from "wouter";

export interface PillFaqRow {
  leftLabel: ReactNode;
  rightQuestion: ReactNode;
  leftColor?: string;
  rightColor?: string;
  gapPx?: number;
  active?: boolean;
  answerText?: ReactNode;
}

export interface PillFaqTexts {
  faqHeading: ReactNode;
  viewAllOnClick?: () => void;
  viewAllLabel?: string;
  activeRow: PillFaqRow & { answerText: ReactNode; active: true };
  row2?: PillFaqRow;
  row3?: PillFaqRow;
}

export default function PillFaqSection({
  faqHeading,
  viewAllOnClick,
  viewAllLabel = "View All",
  activeRow,
  row2,
  row3,
}: PillFaqTexts) {
  const [, navigate] = useLocation();
  const handleViewAll = viewAllOnClick ?? (() => { navigate("/faq-details"); window.scrollTo(0, 0); });
  const TitleGap = 409;
  const LeftLabelWidth = 420;
  const RightQuestionStartFromLeft = 750;
  const ActiveLeftColor = activeRow.leftColor ?? "#FFFFFF";
  const ActiveRightColor = activeRow.rightColor ?? "#FFFFFF";
  const Row2LeftColor = row2?.leftColor ?? "#000000";
  const Row2RightColor = row2?.rightColor ?? "rgba(17, 17, 17, 0.6)";
  const Row3LeftColor = row3?.leftColor ?? "#000000";
  const Row3RightColor = row3?.rightColor ?? "rgba(17, 17, 17, 0.6)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "50px 42px",
        gap: "10px",
        width: "100%",
        height: "750px",
        background: "#F6F7F9",
        borderRadius: "23px",
        boxSizing: "border-box",
        transform: "translate(-1px,-1px)",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", width: "1335px", height: "644px" }}>
        <div
          style={{
            position: "absolute",
            width: "1335px",
            height: "644px",
            left: "0px",
            top: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "30px",
              width: "1335px",
            }}
          >
            <div
              style={{
                width: "85px",
                height: "38px",
                border: "1px solid #202833",
                borderRadius: "272.07px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "23px",
                  letterSpacing: "2.381px",
                  textTransform: "uppercase",
                  color: "#202833",
                }}
              >
                FAQ
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "1335px",
                height: "91px",
                justifyContent: "flex-start",
                gap: `${TitleGap}px`,
              }}
            >
              <span
                className="ml-[10px]"
                style={{
                  fontFamily: "'SF Pro Display'",
                  fontWeight: 400,
                  fontSize: "42px",
                  lineHeight: "45px",
                  color: "#111111",
                  width: "770px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {faqHeading}
              </span>

              <div
                onClick={handleViewAll}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "3.587px 23.913px",
                  gap: "8.37px",
                  height: "55px",
                  background: "#0161FE",
                  borderRadius: "101.682px",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontWeight: 500,
                    fontSize: "14.3518px",
                    lineHeight: "21px",
                    letterSpacing: "-0.071759px",
                    color: "#FFFFFF",
                  }}
                >
                  {viewAllLabel}
                </span>
                <img
                  src="/assets/portfolio/images/vector_13.svg"
                  alt="arrow right"
                  style={{ width: "24.4px", height: "24.4px" }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              width: "1335px",
              height: "435px",
              left: "0px",
              top: "209px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "1335px",
                left: "0px",
                top: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "6px 15px",
                  width: "1335px",
                  height: "69px",
                  background: "#0161FE",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "10px",
                    width: LeftLabelWidth,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'SF Pro Display'",
                      fontWeight: 400,
                      fontSize: "27.2px",
                      lineHeight: "36px",
                      color: ActiveLeftColor,
                      textTransform: "capitalize",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {activeRow.leftLabel}
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: RightQuestionStartFromLeft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "10px 10px 10px 0",
                    right: "25px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'SF Pro Display'",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "30px",
                      color: ActiveRightColor,
  
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    {activeRow.rightQuestion}
                  </span>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: "1315px",
                  height: "128px",
                  left: "10px",
                  top: "89px",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "22px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Pro Display'",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "rgba(109, 109, 110, 0.8)",
                    textTransform: "capitalize",
                    width: "1270px",
                    transform: "translateY(1px)",
                  }}
                >
                  {activeRow.answerText}
                </span>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "6px 15px",
                width: "1335px",
                height: "69px",
                left: "0px",
                top: "257px",
                background: "#FFFFFF",
                borderRadius: "20px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px",
                  width: LeftLabelWidth,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Pro Display'",
                    fontWeight: 400,
                    fontSize: "27.2px",
                    lineHeight: "36px",
                    color: Row2LeftColor,
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row2?.leftLabel}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: RightQuestionStartFromLeft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px 10px 10px 0",
                  right: "25px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Pro Display'",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "30px",
                    color: Row2RightColor,

                    whiteSpace: "nowrap",
                    textAlign: "left",
                  }}
                >
                  {row2?.rightQuestion}
                </span>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "6px 15px",
                width: "1335px",
                height: "69px",
                left: "0px",
                top: "366px",
                background: "#FFFFFF",
                borderRadius: "20px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px",
                  width: LeftLabelWidth,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Pro Display'",
                    fontWeight: 400,
                    fontSize: "27.2px",
                    lineHeight: "36px",
                    color: Row3LeftColor,
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row3?.leftLabel}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: RightQuestionStartFromLeft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10px 10px 10px 0",
                  right: "25px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Pro Display'",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "30px",
                    color: Row3RightColor,

                    whiteSpace: "nowrap",
                    textAlign: "left",
                  }}
                >
                  {row3?.rightQuestion}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
