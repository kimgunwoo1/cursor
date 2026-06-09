import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor AI x Vercel",
  description: "가장 트렌디한 Next.js 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
