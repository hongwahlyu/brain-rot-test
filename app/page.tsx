// 路径: app/page.tsx
import { Metadata } from 'next';
import QuizClient from './QuizClient';

export const dynamic = 'force-dynamic'; // 必须强制动态，否则参数不生效

export async function generateMetadata(props: { 
  searchParams: Promise<{ share?: string }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const share = searchParams.share; 
  
  // 你的专属域名
  const baseUrl = 'https://brain-rot-test-cyan.vercel.app';
  
  // 动态拼装 OG 图片地址
  const ogImageUrl = share 
    ? `${baseUrl}/api/og?persona=${share.split('_')[0]}&state=${share.split('_')[1]}`
    : `${baseUrl}/api/og`; // 默认图

  // 动态标题
  const pageTitle = share 
    ? `I'm ${share.split('_')[0]}! Decode your digital DNA on Brain Rot Terminal`
    : 'Brain Rot Test - Your ultimate brain rot is your unawakened genius';

  return {
    title: pageTitle,
    description: 'Decode your digital DNA. What is your hidden genius?',
    openGraph: {
      title: pageTitle,
      description: 'Your ultimate brain rot is your unawakened genius.',
      url: baseUrl,
      siteName: 'Brain Rot Test',
      images: [
        {
          url: ogImageUrl, 
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: 'Your ultimate brain rot is your unawakened genius.',
      images: [ogImageUrl],
    },
  };
}

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  await props.searchParams; 
  return <QuizClient />;
}