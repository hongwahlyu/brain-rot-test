import { Metadata } from 'next';
import QuizClient from './QuizClient';

// 适配新版 Next.js：searchParams 现在是 Promise，必须 await
export async function generateMetadata(props: { 
  searchParams: Promise<{ share?: string }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const shareCode = searchParams.share; 
  
  let ogImageUrl = 'https://brainrottest.xyz/images/og-image.jpg'; 
  
  if (shareCode) {
    const [persona, state] = shareCode.split('_');
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