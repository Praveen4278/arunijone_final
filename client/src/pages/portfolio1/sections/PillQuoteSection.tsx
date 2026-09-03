export interface PillQuoteTexts {
  solidLine: string;
  mutedLine: string;
  textWidth?: number;
  textHeight?: number;
  outerWidth?: number;
  outerMinHeight?: number;
  outerPaddingX?: number;
}

export default function PillQuoteSection({
  solidLine,
  mutedLine,
  textWidth = 843,
  textHeight = 210,
  outerWidth = 1415,
  outerMinHeight = 410,
  outerPaddingX = 309,
}: PillQuoteTexts) {
  const solidColor = "rgba(17,17,17,1.00)";
  const mutedColor = "rgba(17,17,17,0.60)";
  return (
    <div
      className="flex flex-row justify-center items-center flex-nowrap gap-[10px]"
      style={{
        width: `${outerWidth}px`,
        minHeight: `${outerMinHeight}px`,
        padding: `0 ${outerPaddingX}px`,
        boxSizing: "border-box",
      }}
    >
      <span
        className="flex-none flex justify-center text-center items-center"
        style={{
          width: `${textWidth}px`,
          height: `${textHeight}px`,
          fontFamily: "'SF Pro Display'",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "30px",
          lineHeight: "38px",
          color: solidColor,
          order: 0,
          flexGrow: 0,
        }}
      >
        {mutedLine ? (
          <span>
            <span
              className="not-italic"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: solidColor,
                WebkitTextFillColor: "transparent",
                backgroundColor: solidColor,
              }}
            >
              {solidLine}
            </span>
            <span
              className="not-italic"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: mutedColor,
                WebkitTextFillColor: "transparent",
                backgroundColor: mutedColor,
              }}
            >
              {" "}
              {mutedLine}
            </span>
          </span>
        ) : (
          <span className="not-italic">{solidLine}</span>
        )}
      </span>
    </div>
  );
}
