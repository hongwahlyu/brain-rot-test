import { Metadata } from 'next';
import QuizClient from './QuizClient';

export async function generateMetadata({ searchParams }: { searchParams: { share?: string } }): Promise<Metadata> {
  const shareCode = searchParams.share; 
  
  // 提供一个默认站点的封面图
  let ogImageUrl = 'https://brainrottest.xyz/images/og-image.jpg'; 
  
  if (shareCode) {
    const [persona, state] = shareCode.split('_');
    // 指向你部署在生产环境的 API 工厂
    ogImageUrl = `https://brainrottest.xyz/api/og?persona=${persona}&state=${state}`;
  }

  return {
    metadataBase: new URL('https://brainrottest.xyz'),
    title: 'Brain Rot Terminal',
    description: 'Unleash your brain rot genius. Discover your digital DNA.',
    openGraph: {
      title: 'Brain Rot Terminal Diagnosis',
      description: 'Decode your digital DNA. What is your hidden genius?',
      url: `https://brainrottest.xyz${shareCode ? `/?share=${shareCode}` : ''}`,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImageUrl],
    },
  };
}

export default function Page() {
  return <QuizClient />;
}