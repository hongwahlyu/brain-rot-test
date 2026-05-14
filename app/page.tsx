// 路径: app/page.tsx
import QuizClient from './QuizClient';

// 极简静态元数据，绝对不会引发构建追踪错误
export const metadata = {
  title: 'Brain Rot Terminal',
  description: 'Unleash your brain rot genius. Discover your digital DNA.',
};

export default function Page() {
  return <QuizClient />;
}