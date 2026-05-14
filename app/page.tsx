// 路径: app/page.tsx
import { Metadata } from 'next';
import QuizClient from './QuizClient';

// 强制动态渲染，防止 Vercel CDN 缓存导致的 404
export const dynamic = 'force-dynamic';

export async function generateMetadata(props: { 
  searchParams: Promise<{ share?: string }> 
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const share = searchParams.share; 
  
  // 你的专属 Vercel 分配域名
  const baseUrl = 'https://brain-rot-test-cyan.vercel.app';
  
  // 动态拼装专属 OG 图片地址，完美适配 Next.js og/route 方案
  const ogImageUrl = share 
    ? `${baseUrl}/api/og?persona=${share.split('_')[0]}&state=${share.split('_')[1]}`
    : `${baseUrl}/api/og`; // 默认通用分享图

  // 分享时的动态标题：我居然是Yap/np... 快来解锁你的...
  const dynamicTitle = share 
    ? `I'm ${share.split('_')[0]}! Decode your unawakened genius on Brain Rot Test.`
    : 'Brain Rot Test - Your ultimate brain rot is your unawakened genius';

  // 网页标签页的终极标题
  const pageTitle = 'Brain Rot Test - Your ultimate brain rot is your unawakened genius';

  return {
    title: pageTitle,
    description: 'Decode your digital DNA. What is your unawakened genius?',
    openGraph: {
      title: dynamicTitle,
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
      title: dynamicTitle,
      description: 'Your ultimate brain rot is your unawakened genius.',
      images: [ogImageUrl],
    },
  };
}

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // 在 Next.js 15+ 中必须 await searchParams
  await props.searchParams; 
  return <QuizClient />;
}