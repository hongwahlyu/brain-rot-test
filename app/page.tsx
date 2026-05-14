// 路径: app/page.tsx
import { Metadata } from 'next';
import QuizClient from './QuizClient';

// 终极武器：强制动态渲染，解决 Vercel 路由不匹配导致的 404
export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { 
  searchParams: Promise<{ share?: string }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const share = searchParams.share; 
  
  // 这里的路径直接指向你的 API
  const ogImageUrl = share 
    ? `/api/og?persona=${share.split('_')[0]}&state=${share.split('_')[1]}`
    : '/api/og';

  return {
    title: 'Brain Rot Terminal',
    description: 'Unleash your brain rot genius. Discover your digital DNA.',
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
  // Next.js 16 必须 await searchParams
  await props.searchParams; 
  return <QuizClient />;
}