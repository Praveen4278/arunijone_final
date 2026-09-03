import React from "react";

interface Props {
  assetBasePath: string;
  nameCorp?: string;
  duration?: string;
  releaseDate?: string;
  siteView?: string;
  siteViewColor?: string;
}

const PortfolioMetadataMobile = ({
  assetBasePath,
  nameCorp = "Arunijone",
  duration = "3 Months",
  releaseDate = "Jannuary 1, 2026",
  siteView = "myrameswaramtrip.com",
  siteViewColor = "#1B66FE",
}: Props) => {
  const MetaItem = ({ label, value, valueColor, href }: { label: string; value: string; valueColor?: string; href?: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8.45 }}>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 16, lineHeight: '23px', whiteSpace: 'nowrap', color: 'rgba(17,17,17,0.6)' }}>{label}</span>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: '24px', whiteSpace: 'nowrap', color: valueColor || '#111111', textDecoration: 'none', cursor: 'pointer' }}>{value}</a>
      ) : (
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: '24px', whiteSpace: 'nowrap', color: valueColor || '#111111' }}>{value}</span>
      )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 20, width: '100%' }}>
      <MetaItem label="Name Corp" value={nameCorp} />
      <MetaItem label="Project Duration" value={duration} />
      <MetaItem label="Release Date" value={releaseDate} />
      <MetaItem label="Site View" value={siteView} valueColor={siteViewColor} href="https://www.myrameswaramtrip.com" />
    </div>
  );
};

export default PortfolioMetadataMobile;
