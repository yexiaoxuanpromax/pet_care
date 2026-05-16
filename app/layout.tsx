import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "绒光宠物洗护 | 温柔、专业的宠物洗护店",
  description:
    "绒光为猫咪和狗狗提供低压洗护、皮毛护理、造型修剪与基础健康观察。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
