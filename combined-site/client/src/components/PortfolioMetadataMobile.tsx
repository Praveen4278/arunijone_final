import React from "react";

interface Props {
  assetBasePath: string;
  nameCorp?: string;
  duration?: string;
  releaseDate?: string;
  siteView?: string;
  siteViewColor?: string;
  siteViewHref?: string;
}

const PortfolioMetadataMobile = ({
  assetBasePath,
  nameCorp = "Arunijone",
  duration = "3 Months",
  releaseDate = "Jannuary 1, 2026",
  siteView = "myrameswaramtrip.com",
  siteViewColor = "#1B66FE",
  siteViewHref = "https://www.myrameswaramtrip.com",
}: Props) => {
  const MetaItem = ({ label, value, valueColor, href }: { label: string; value: string; valueColor?: string; href?: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8.45, width: 183.06, minWidth: 183.06 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 0px 0.88px', width: 183.06, height: 23.88 }}>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 300, fontSize: 16, lineHeight: '23px', display: 'flex', alignItems: 'center', textAlign: 'center', color: 'rgba(17,17,17,0.6)', whiteSpace: 'nowrap' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 0px 0.69px', width: 183.06 }}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: '27px', display: 'flex', alignItems: 'center', textAlign: 'center', color: valueColor || '#111111', textDecoration: 'none', whiteSpace: 'nowrap' }}>{value}</a>
        ) : (
          <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: '27px', display: 'flex', alignItems: 'center', textAlign: 'center', color: valueColor || '#111111', whiteSpace: 'nowrap' }}>{value}</span>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 20, width: 359.74, height: 297.06 }}>
      <MetaItem label="Name Corp" value={nameCorp} />
      <MetaItem label="Project Duration" value={duration} />
      <MetaItem label="Release Date" value={releaseDate} />
      <MetaItem label="Site View" value={siteView} valueColor={siteViewColor} href={siteViewHref} />
    </div>
  );
};

export default PortfolioMetadataMobile;
