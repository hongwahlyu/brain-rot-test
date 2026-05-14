import QuizClient from './QuizClient';

// 保证每次访问都能拿到最新的分享状态
export const dynamic = 'force-dynamic';

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // 解析参数，保证兼容性
  await props.searchParams;
  
  return (
    <div className="min-h-screen bg-[#1a1814]">
       {/* 故障滤镜层 */}
       <div className="fixed inset-0 pointer-events-none heavy-glitch-overlay z-50 opacity-20" />
       <QuizClient />
    </div>
  );
}