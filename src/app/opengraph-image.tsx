import { ImageResponse } from 'next/og';
import { siteData } from '@/data/site';

export const alt = `${siteData.name}, ${siteData.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#0e0e0d',
        color: '#f4f4ef',
        display: 'flex',
        height: '100%',
        padding: '72px',
        width: '100%',
      }}
    >
      <div
        style={{
          border: '2px solid #393936',
          borderRadius: '28px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
        }}
      >
        <div
          style={{
            color: '#8b87ff',
            display: 'flex',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Portfolio / Hong Kong
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-0.05em',
            }}
          >
            {siteData.name}
          </div>
          <div
            style={{
              color: '#aaa9a2',
              display: 'flex',
              fontSize: 34,
              fontWeight: 600,
              marginTop: '12px',
            }}
          >
            {siteData.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 38,
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: '40px',
              maxWidth: '850px',
            }}
          >
            {siteData.hero.tagline}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
