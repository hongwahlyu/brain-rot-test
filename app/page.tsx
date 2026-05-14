import { Metadata } from 'next';
import QuizClient from './QuizClient';

// 强制动态渲染以规避 Vercel 路由缓存导致的 404
export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { 
  searchParams: Promise<{ share?: string }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const shareCode = searchParams.share; 
  
  // Vercel 部署后的 OG 图片路径
  let ogImageUrl = '/api/og'; 
  
  if (shareCode) {
    const [persona, state] = shareCode.split('_');
    ogImageUrl = `/api/og?persona=${persona}&state=${state}`;
  }

  return {
    title: 'Brain Rot Terminal',
    description: 'Decode your digital DNA. What is your hidden genius?',
    openGraph: {
      title: 'Brain Rot Terminal Diagnosis',
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImageUrl],
    },
  };
}

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // 必须 await 确保参数加载
  await props.searchParams; 
  return <QuizClient />;
}