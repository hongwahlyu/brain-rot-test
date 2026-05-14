// 路径: app/api/og/route.tsx
import { ImageResponse } from 'next/og';
import { personasData } from '../../data/personas';

export const runtime = 'edge';

// 赛博硬核风格的布局和数据流组件
const CyberDataPanel = ({ label, children, color }: { label: string, children: React.ReactNode, color: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px', borderLeft: `3px solid ${color}`, paddingLeft: '15px' }}>
    <div style={{ color: color, fontSize: 16, fontFamily: 'monospace', textTransform: 'uppercase', opacity: 0.7, tracking: '0.1em' }}>
      // {label}
    </div>
    {children}
  </div>
);

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const persona = searchParams.get('persona') as keyof typeof personasData;
    const state = searchParams.get('state') || 'base';

    // 如果参数不存在，返回默认黑客界面
    if (!persona || !personasData[persona]) {
      return new ImageResponse(
        (
          <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1814', border: '16px solid #ccff00', padding: '50px', fontFamily: 'monospace' }}>
            <h1 style={{ color: '#ccff00', fontSize: 100, fontWeight: 900, textTransform: 'uppercase', marginBottom: 20 }}>SYSTEM ERROR</h1>
            <p style={{ color: '#e5e5e5', fontSize: 40, borderTop: '2px solid #555', paddingTop: 20 }}>Persona not found.</p>
          </div>
        ),
        { width: 1200, height: 630 }
      );
    }

    const pData = personasData[persona];
    const isAwakened = state === 'awakened' || state === 'final';
    
    // Vercel 静态图片路径：移除 /public/ 前缀，直接使用 /images/...
    const baseImagePath = pData.imageBase.replace('/public', '');
    const awakenedImagePath = pData.imageAwakened.replace('/public', '');
    
    const imageUrl = isAwakened ? `${origin}${awakenedImagePath}` : `${origin}${baseImagePath}`;
    const title = isAwakened ? pData.awakened.title : pData.rot.title;
    const color = isAwakened ? pData.colorHex : '#ffffff';

    // 重新排版设计：垂直单栏叠加布局，解决“太空旷”
    return new ImageResponse(
      (
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#050402', border: `16px solid ${color}`, fontFamily: 'monospace' }}>
          
          {/* 模拟顶端系统状态栏 */}
          <div style={{ display: 'flex', borderBottom: `2px solid ${color}`, color: '#888', textTransform: 'uppercase', fontSize: 16, padding: '10px 40px', justifyContent: 'space-between', opacity: 0.6 }}>
            <span>BRAIN ROT TERMINAL v1.1</span>
            <span style={{ color: isAwakened ? color : '#e5e5e5' }}>SYSTEM STATUS: [ONLINE]</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '30px 40px', flex: 1 }}>
            {/* 人格编码和诊断 */}
            <CyberDataPanel label="DIAGNOSIS" color={color}>
              <h1 style={{ color: color, fontSize: 80, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
                {title}
              </h1>
            </CyberDataPanel>

            {/* 故障立绘 (移动到文本上方) */}
            <div style={{ display: 'flex', height: '180px', margin: '15px 0', alignItems: 'center', justifyContent: 'center' }}>
               <img src={imageUrl} alt={persona} style={{ objectFit: 'contain', width: '100%', height: '100%', border: '4px solid black', backgroundColor: 'white', padding: '10px', boxShadow: `8px 8px 0px 0px rgba(0,0,0,0.5)` }} />
            </div>

            {/* 标语和数据面板 */}
            <div style={{ display: 'flex', width: '100%', gap: '40px', marginTop: '15px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CyberDataPanel label="CORE_SLOGAN" color={color}>
                  <div style={{ color: isAwakened ? 'black' : 'white', backgroundColor: isAwakened ? color : '#222', fontSize: 30, fontWeight: 900, padding: '12px 25px', textTransform: 'uppercase', border: '3px solid black' }}>
                    "{pData.slogan}"
                  </div>
                </CyberDataPanel>
              </div>

              {/* 动态模拟日志 (填补空间) */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <CyberDataPanel label="NEURAL_LOG" color={color}>
                  <ul style={{ listStyle: 'none', color: '#e5e5e5', fontSize: 16, padding: 0, margin: 0, opacity: 0.8 }}>
                    <li style={{ borderLeft: `2px solid ${color}`, paddingLeft: '8px' }}>&gt; Neural_Sync: {isAwakened ? '98.7' : '14.2'}% [OK]</li>
                    <li>&gt; Caffeine: {isAwakened ? '100' : '85'}% [CRITICAL]</li>
                    <li>&gt; Meme_Density: 1.2M/day</li>
                    <li>&gt; Yap_Freq: High</li>
                    <li>&gt; DNA: [DECODED]</li>
                  </ul>
                </CyberDataPanel>
              </div>
            </div>

            {/* 底端链接 */}
            <div style={{ display: 'flex', color: '#555', fontSize: 16, marginTop: 'auto', borderTop: '2px solid #222', paddingTop: '10px' }}>
              https://brain-rot-test-cyan.vercel.app/ // OWN YOUR GENIUS
            </div>

          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}