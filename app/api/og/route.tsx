import { ImageResponse } from 'next/og';
import { personasData } from '../../data/personas'; 

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const personaCode = searchParams.get('persona') || 'YAP';
    const state = searchParams.get('state') || 'base'; 

    const pData = personasData[personaCode as keyof typeof personasData];
    if (!pData) return new Response(`Persona not found`, { status: 404 });

    const isAwakened = state === 'awakened' || state === 'final';
    const isShtMid = personaCode === 'SHT' && state === 'mid';
    
    // 颜色与文案逻辑
    const themeColor = (personaCode === 'SHT' && !isAwakened) ? '#dc2626' : (isAwakened ? pData.colorHex : '#ccff00');
    const displayTitle = isAwakened ? pData.awakened.title : (isShtMid ? pData.mid?.title : pData.rot.title);
    const displaySlogan = (isAwakened && personaCode === 'SHT') ? 'THE GOLDEN SOVEREIGN' : pData.slogan;
    
    let imgPath = pData.imageBase;
    if (isAwakened) imgPath = pData.imageAwakened;
    if (isShtMid) imgPath = pData.imageMid || pData.imageBase;

    const baseUrl = new URL(request.url).origin;
    const absoluteImgUrl = `${baseUrl}${imgPath}`;

    return new ImageResponse(
      (
        <div style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: '#000', border: `16px solid ${themeColor}`, padding: '40px 50px', alignItems: 'center', fontFamily: 'sans-serif' }}>
          {/* 左侧：立绘 */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '42%', height: '100%', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '6px 16px', border: `3px solid ${themeColor}`, fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', alignSelf: 'flex-start', letterSpacing: '2px' }}>
              {personaCode === 'SHT' ? '★ SECRET RARE ★' : `DIAGNOSIS // ${personaCode}`}
            </div>
            <div style={{ display: 'flex', backgroundColor: 'white', border: `8px solid ${themeColor}`, width: '100%', height: '440px', justifyContent: 'center', alignItems: 'center' }}>
              <img src={absoluteImgUrl} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
            </div>
            <div style={{ color: '#888', fontSize: '16px', marginTop: '16px', textAlign: 'center', width: '100%', letterSpacing: '1px' }}>Visuals by @kamhowardoops</div>
          </div>
          
          {/* 右侧：文案 */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '58%', paddingLeft: '60px', height: '100%', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '80px', fontWeight: '900', color: 'white', textTransform: 'uppercase', lineHeight: '0.9', marginBottom: '40px', textShadow: isAwakened ? `0 0 20px ${themeColor}` : 'none' }}>
              {displayTitle}
            </h1>
            
            <div style={{ display: 'flex', backgroundColor: isAwakened ? themeColor : '#222', color: isAwakened ? 'black' : 'white', padding: '16px 24px', border: '6px solid black', fontSize: '32px', fontWeight: '900', transform: 'rotate(-2deg)', boxShadow: '8px 8px 0px 0px black', marginBottom: '50px' }}>
              "{displaySlogan}"
            </div>
            
            <div style={{ fontSize: '24px', color: 'white', opacity: 0.6, marginTop: 'auto', fontWeight: 'bold', letterSpacing: '2px' }}>BRAIN ROT TERMINAL // DECODE YOUR DNA</div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (e) { return new Response(`Failed to generate image`, { status: 500 }); }
}