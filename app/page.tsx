// 路径: app/page.tsx
import { Metadata } from 'next';
import QuizClient from './QuizClient';

// 强制动态渲染，防止 Vercel 尝试静态生成导致路径丢失
export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const share = searchParams.share as string | undefined;
  
  let ogImageUrl = '/api/og'; 
  if (share) {
    const [persona, state] = share.split('_');
    ogImageUrl = `/api/og?persona=${persona}&state=${state}`;
  }

  return {
    title: 'Brain Rot Terminal',
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
  // 在渲染组件前确保参数已解析
  await props.searchParams;
  return <QuizClient />;
}