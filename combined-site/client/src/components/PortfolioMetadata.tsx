import React from "react";

const col = (w: number): React.CSSProperties => ({
  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
  padding: 0, gap: 12, width: w, height: 48.5, flexShrink: 0,
});
const labelRow = (w: number): React.CSSProperties => ({
  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  padding: 0, gap: 10, width: w, height: 16.5, alignSelf: 'stretch', flexGrow: 0,
});
const labelText = (w: number): React.CSSProperties => ({
  width: w, height: 16.5,
  fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 300,
  fontSize: 18, lineHeight: '20px',
  display: 'flex', alignItems: 'center',
  color: 'rgba(17,17,17,0.6)', flexGrow: 1,
});
const valueRow = (w: number): React.CSSProperties => ({
  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  padding: 0, gap: 10, width: w, height: 20, flexGrow: 0,
});
const valueText = (w: number, color = '#111111'): React.CSSProperties => ({
  width: w, height: 20,
  fontFamily: "'SF Pro Display'", fontStyle: 'normal', fontWeight: 400,
  fontSize: 20, lineHeight: '24px',
  display: 'flex', alignItems: 'center',
  color, flexGrow: 1,
});

const PortfolioMetadata = () => {
  return (
    <div
      id="_231_4690__Frame_233"
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
        padding: 0, gap: 91,
        width: 923, height: 48.5,
        flex: 'none', order: 1, flexGrow: 0,
      }}
    >
      {/* Name Corp — Frame 220 */}
      <div style={col(153)}>
        <div style={labelRow(153)}><span style={labelText(153)}>Name Corp</span></div>
        <div style={valueRow(153)}><span style={valueText(153)}>Arunijone</span></div>
      </div>

      {/* Project Duration — Frame 221 */}
      <div style={col(147)}>
        <div style={labelRow(147)}><span style={labelText(147)}>Project Duration</span></div>
        <div style={{ ...valueRow(147), alignSelf: 'stretch' }}><span style={valueText(147)}>3 Months</span></div>
      </div>

      {/* Release Date — Frame 225 */}
      <div style={col(147)}>
        <div style={labelRow(147)}><span style={labelText(147)}>Release Date</span></div>
        <div style={{ ...valueRow(147), alignSelf: 'stretch' }}><span style={valueText(147)}>Jannuary 1, 2026</span></div>
      </div>

      {/* Site View — Frame 223 */}
      <div style={col(184)}>
        <div style={labelRow(184)}><span style={labelText(184)}>Site View</span></div>
        <div style={valueRow(204)}>
          <a href="https://www.myrameswaramtrip.com" target="_blank" rel="noopener noreferrer" style={{ ...valueText(204, '#0D5CFF'), textDecoration: 'none', cursor: 'pointer' }}>myrameswaramtrip.com</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMetadata;
