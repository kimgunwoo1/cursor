export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-16 md:px-12 md:py-20">
      <div className="flex max-w-2xl flex-col items-center gap-6 sm:gap-8">
        <h1 className="text-[clamp(1.375rem,4.5vw+0.5rem,2.25rem)] font-bold leading-snug tracking-tight">
          🚀 Cursor AI x Vercel 배포 테스트
        </h1>
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
          가장 트렌디한 Next.js 프로젝트가 성공적으로 구동 중입니다.
        </p>
        <footer className="mt-4 pt-6 text-sm text-gray-500 sm:text-base">
          © {new Date().getFullYear()} 내 멋진 홈페이지
        </footer>
      </div>
    </main>
  );
}
